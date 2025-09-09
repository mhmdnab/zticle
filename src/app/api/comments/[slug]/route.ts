// src/app/api/comments/[slug]/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "node:crypto";
import { connectToDB } from "@/lib/db";
import Comment from "@/models/Comment";

export const runtime = "nodejs";
export const revalidate = 0;

const CreateComment = z.object({
  name: z.string().min(1).max(60),
  message: z.string().min(1).max(1000),
  email: z.string().email().max(120).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

// light in-memory rate limit
const windowMs = 60_000;
const maxPerWindow = 5;
const buckets = new Map<string, { count: number; resetAt: number }>();
function rateLimit(ip: string) {
  const now = Date.now();
  const b = buckets.get(ip);
  if (!b || now > b.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (b.count < maxPerWindow) {
    b.count++;
    return true;
  }
  return false;
}

// --- GET ---
export async function GET(req: Request, { params }: any) {
  try {
    await connectToDB();
    const slug = decodeURIComponent(params.slug);

    const { searchParams } = new URL(req.url);
    const page = Math.max(1, Number(searchParams.get("page") || 1));
    const rawPageSize = Number(searchParams.get("pageSize") || 10);
    const pageSize = Math.min(
      Number.isFinite(rawPageSize) ? rawPageSize : 10,
      50
    );
    const skip = (page - 1) * pageSize;

    const [items, total] = await Promise.all([
      Comment.find({ slug })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(pageSize)
        .lean(),
      Comment.countDocuments({ slug }),
    ]);

    return NextResponse.json({ items, total, page, pageSize });
  } catch {
    return NextResponse.json(
      { error: "Failed to load comments" },
      { status: 500 }
    );
  }
}

// --- POST ---
export async function POST(req: Request, { params }: any) {
  try {
    await connectToDB();
    const slug = decodeURIComponent(params.slug);

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "0.0.0.0";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many comments. Try again soon." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = CreateComment.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { name, message, email = "", website = "" } = parsed.data;
    if (website) return NextResponse.json({ ok: true }); // honeypot

    const ipHash = crypto.createHash("sha256").update(ip).digest("hex");
    const doc = await Comment.create({
      slug,
      name,
      message,
      email,
      website: "",
      ipHash,
    });

    return NextResponse.json({ item: doc }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to post comment" },
      { status: 500 }
    );
  }
}

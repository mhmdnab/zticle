// components/comments/Comments.tsx
"use client";

import useSWR, { mutate } from "swr";
import { useState } from "react";
import { z } from "zod";

const CreateComment = z.object({
  name: z.string().min(1).max(60),
  message: z.string().min(1).max(1000),
  email: z.string().email().max(120).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")),
});

type Props = { slug: string };

export default function Comments({ slug }: Props) {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const key = `/api/comments/${encodeURIComponent(
    slug
  )}?page=${page}&pageSize=${pageSize}`;

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, isLoading } = useSWR(key, fetcher);

  return (
    <section id="comments" className="mt-16">
      {/* Card wrapper – mirrors Contact page styling */}
      <div className="mx-auto max-w-4xl rounded-3xl border-2 border-[#76B947]/40 bg-white/90 p-6 shadow-xl ring-1 ring-[#B1D8B7]/40 backdrop-blur md:p-8">
        {/* Heading */}
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#76B947]/20 text-[#2F5233]">
            💬
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-[#2F5233]">
            Join the Conversation
          </h2>
        </div>

        <CommentForm slug={slug} onPosted={() => mutate(key)} />

        {isLoading ? (
          <p className="mt-6 text-sm text-[#2F5233]/70">Loading comments…</p>
        ) : (
          <CommentList
            items={data?.items ?? []}
            total={data?.total ?? 0}
            page={data?.page ?? page}
            pageSize={data?.pageSize ?? pageSize}
            onPageChange={(p) => setPage(p)}
          />
        )}
      </div>
    </section>
  );
}

/* ---------- tiny UI helpers to keep classes tidy ---------- */
function Label(props: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={props.htmlFor}
      className="mb-1 block text-sm font-medium text-[#2F5233]"
    >
      {props.children}
    </label>
  );
}

function inputClass() {
  return [
    "w-full rounded-2xl",
    "border border-[#B1D8B7] bg-white",
    "px-4 py-3 text-sm text-[#2F5233]",
    "outline-none transition",
    "focus:border-[#76B947] focus:ring-2 focus:ring-[#76B947]/30",
    "placeholder:text-[#2F5233]/50",
    "shadow-sm",
  ].join(" ");
}

/* --------------------------- form --------------------------- */
function CommentForm({
  slug,
  onPosted,
}: {
  slug: string;
  onPosted: () => void;
}) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    setError(null);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || ""), // honeypot
    };

    const parsed = CreateComment.safeParse(payload);
    if (!parsed.success) {
      setError("Please fill in your name and a valid comment.");
      setPending(false);
      return;
    }

    try {
      const res = await fetch(`/api/comments/${encodeURIComponent(slug)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Failed to post");
      (document.getElementById("comment-form") as HTMLFormElement)?.reset();
      onPosted();
    } catch {
      setError("Couldn’t post right now. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      id="comment-form"
      className="grid gap-5"
      action={async () => {}}
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget as HTMLFormElement);
        handleSubmit(fd);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <input
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className={inputClass()}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            className={inputClass()}
          />
        </div>

        {/* honeypot (hidden) */}
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          placeholder={`Join the discussion on this ${
            process.env.NEXT_PUBLIC_SITE_NAME || "Zticle"
          } article...`}
          required
          rows={6}
          className={inputClass()}
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 inline-flex w-fit items-center justify-center rounded-2xl bg-[#2F5233] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95 disabled:opacity-50"
      >
        {pending ? "Posting…" : "Post comment"}
      </button>

      <hr className="mt-6 border-[#B1D8B7]/70" />
    </form>
  );
}

/* --------------------------- list --------------------------- */
function CommentList({
  items,
  total,
  page,
  pageSize,
  onPageChange,
}: {
  items: any[];
  total: number;
  page: number;
  pageSize: number;
  onPageChange: (p: number) => void;
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="mt-6">
      <p className="mb-4 text-sm text-[#2F5233]/80">
        {total.toLocaleString()} comment{total === 1 ? "" : "s"}
      </p>

      <ul className="space-y-4">
        {items.map((c) => (
          <li
            key={c._id}
            className="rounded-2xl border border-[#B1D8B7] bg-white/85 p-4 shadow-sm ring-1 ring-[#B1D8B7]/30"
          >
            <div className="mb-1 flex items-center justify-between text-xs text-[#2F5233]/70">
              <span className="font-semibold text-[#2F5233]">{c.name}</span>
              <time dateTime={c.createdAt}>
                {new Date(c.createdAt).toLocaleString()}
              </time>
            </div>
            <p className="whitespace-pre-wrap text-sm leading-7 text-[#2F5233]">
              {c.message}
            </p>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="mt-6 flex items-center gap-2">
          <button
            className="rounded-xl border border-[#B1D8B7] bg-white/80 px-3 py-1 text-sm text-[#2F5233] shadow-sm transition hover:bg-white disabled:opacity-40"
            onClick={() => onPageChange(Math.max(1, page - 1))}
            disabled={page <= 1}
          >
            Prev
          </button>
          <span className="text-sm text-[#2F5233]/70">
            Page {page} of {totalPages}
          </span>
          <button
            className="rounded-xl border border-[#B1D8B7] bg-white/80 px-3 py-1 text-sm text-[#2F5233] shadow-sm transition hover:bg-white disabled:opacity-40"
            onClick={() => onPageChange(Math.min(totalPages, page + 1))}
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

// components/AboutTeaser.tsx
"use client";

import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="bg-[#B1D8B7] py-12 px-6 text-center rounded-xl max-w-4xl mx-auto my-16">
      <h2 className="text-2xl font-semibold text-[#2F5233] mb-4">
        About Zticle
      </h2>
      <p className="text-[#2F5233] mb-6 max-w-prose mx-auto">
        Zticle is your go-to micro-mag for all things web dev, design, and hot
        tech drops. Think bite-sized guides, pro tips, and community
        hacks—served Gen Z style. Stay ahead of the curve without the fluff.
      </p>
      <Link
        href="/about"
        className="inline-block bg-[#8BCD50] text-white px-5 py-2 rounded hover:bg-[#1D741B] transition"
      >
        Learn More →
      </Link>
    </section>
  );
}

// components/AboutTeaser.tsx
"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#B1D8B7] py-12 px-4 sm:px-6 md:px-12 text-center rounded-xl md:max-w-4xl max-w-96 mx-auto my-16">
      <h2 className="text-2xl font-semibold text-[#2F5233] mb-4">
        About Zticle
      </h2>
      <p className="text-[#2F5233] mb-6 max-w-prose mx-auto">
        Zticle is your Gen Z guide for real-life wins—covering self-care, hustle
        hacks, money moves, digital detox, and everything in between. All the
        advice you actually need, minus the cringe.
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

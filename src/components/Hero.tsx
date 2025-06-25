// components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative text-center h-screen flex flex-col justify-center items-center">
      {/* Background Image */}
      <Image
        src={"/images/herobg.png"}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to Zticle
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Your daily source for in-depth articles on web development, design,
          and tech trends.
        </p>
        <Link
          href="/articles"
          className="inline-block bg-[#8BCD50] text-white px-6 py-3 rounded-lg hover:bg-[#1D741B] transition"
        >
          Browse All Articles →
        </Link>
      </div>
    </section>
  );
}

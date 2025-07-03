// components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logoREVERSENOBG.png";

export default function HeroSection() {
  return (
    <section className="relative text-center h-screen flex flex-col justify-center items-center">
      {/* Background Image */}
      <Image
        src={"/images/herobg2.png"}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="flex items-center justify-center text-3xl md:text-4xl font-bold text-white mb-6">
          <span>Hey Gen Z, Welcome to </span>
          <span className="ml-4 inline-flex items-center">
            <Image src={logo} alt="ArticleHub logo" width={98} height={98} />
          </span>
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          All the web wisdom, life hacks, and glow-up guides you’ll ever need.
          No cringe. Just good vibes.
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

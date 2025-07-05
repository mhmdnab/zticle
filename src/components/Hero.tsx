"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logoREVERSENOBG.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/herobg2.png"
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#18381b]/60 to-[#2f5233]/80 z-0" />

      {/* Hero Content Card */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-10 max-w-2xl mx-auto border border-[#B1D8B7]/60">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#EBF5E7] mb-4 drop-shadow-lg tracking-tight flex flex-col md:flex-row justify-center items-center gap-2">
            <span>Hey Gen Z,</span>
            <span className="text-[#8BCD50]">Welcome to Zticle</span>
          </h1>
          <p className="text-lg md:text-xl text-[#D2F2D8] mb-8 font-medium text-center">
            All the web wisdom, life hacks, and glow-up guides you’ll ever need.
            <br className="hidden md:block" />
            <span className="text-[#B1D8B7]"> No cringe. Just good vibes.</span>
          </p>
          <div className="flex justify-center mt-8">
            <Link
              href="/articles"
              className="inline-block bg-[#8BCD50] hover:bg-[#1D741B] transition px-7 py-3 rounded-xl text-white text-lg font-semibold shadow-lg"
            >
              Browse All Articles →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

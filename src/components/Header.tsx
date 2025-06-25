"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#B1D8B7] shadow-xl">
      <div className="container mx-auto px-6 py-4 flex flex-col items-center md:flex-row md:justify-between md:items-center">
        <Link href="/" className="text-2xl font-bold text-[#2F5233]">
          Zticle
        </Link>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/" className="text-[#2F5233] hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-[#2F5233] hover:underline">
            About
          </Link>
          <Link href="/articles" className="text-[#2F5233] hover:underline">
            Articles
          </Link>
          <Link href="/contact" className="text-[#2F5233] hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

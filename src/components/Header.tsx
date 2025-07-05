"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logoNOBG.png";

export default function Header() {
  return (
    <header className="bg-[#B1D8B7] p-2 ">
      {/* Main card: pill on desktop, glass card on mobile */}
      <div
        className="
          max-w-6xl mx-auto
          flex flex-col items-center
          md:flex-row md:justify-between md:items-center
          bg-[#EAF6EE]/95
          rounded-[2.5rem]
          shadow-xl
          border border-[#B1D8B7]/80
          px-5 md:px-4 py-3
          mt-2
          "
        style={{
          transition: "box-shadow 0.25s",
        }}
      >
        {/* Logo top center on mobile, left on desktop */}
        <Link
          href="/"
          className="
            flex items-center
            mb-2 md:mb-0
            mx-auto md:mx-0
            justify-center
          "
        >
          <Image
            src={logo}
            alt="logo"
            width={48}
            height={48}
            className="mr-2"
          />
        </Link>

        {/* Nav links: centered in a row on mobile, right row on desktop */}
        <nav
          className="
            flex flex-row items-center
            justify-center
            space-x-4 md:space-x-8
            w-full md:w-auto
          "
        >
          <HeaderLink href="/about">About</HeaderLink>
          <HeaderLink href="/articles">Articles</HeaderLink>
          <HeaderLink href="/contact">Contact</HeaderLink>
        </nav>
      </div>
    </header>
  );
}

function HeaderLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`
        relative px-4 py-1 rounded-full text-[#2F5233] font-semibold text-lg transition
        before:content-[''] before:absolute before:inset-x-3 before:bottom-0 before:h-1 before:rounded-full
        before:bg-[#94C973] before:scale-x-0 before:transition-transform before:duration-200
        hover:before:scale-x-100 hover:bg-[#E6F8EC] hover:shadow
        block
      `}
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      {children}
    </Link>
  );
}

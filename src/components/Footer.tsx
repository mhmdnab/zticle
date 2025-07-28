"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import logo from "../../public/images/logoNOBG.png";
import { FaThreads } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#B1D8B7] text-[#2F5233]">
      <div className="container mx-auto px-6 py-8 flex flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={80} height={80} />
          </Link>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://instagram.com/zticle"
            aria-label="Facebook"
            className="hover:text-gray-800"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/zzzticle"
            aria-label="Twitter"
            className="hover:text-gray-800"
          >
            <RiTwitterXLine />
          </a>
          <a
            href="https://www.threads.com/@zticle"
            aria-label="LinkedIn"
            className="hover:text-gray-800"
          >
            <FaThreads />
          </a>
        </div>
      </div>
    </footer>
  );
}

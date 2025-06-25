"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import logo from "../../public/images/logoNOBG.png";

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
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-gray-800"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-gray-800"
          >
            <RiTwitterXLine />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="hover:text-gray-800"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

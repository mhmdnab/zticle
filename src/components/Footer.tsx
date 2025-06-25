"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#B1D8B7] text-[#2F5233]">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>
            &copy; {new Date().getFullYear()} ArticleHub. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-gray-800"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-gray-800"
          >
            <FaTwitter />
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

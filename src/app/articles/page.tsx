// app/articles/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

// Sample data – replace with real fetch in production //py-21.75
const sampleArticles = [
  {
    id: 1,
    title: "Understanding Async/Await in JavaScript",
    excerpt: "A deep dive into async programming...",
    slug: "async-await-js",
  },
  {
    id: 2,
    title: "Tailwind CSS: Utility-First Explained",
    excerpt: "Learn how to build layouts fast...",
    slug: "tailwind-utility-first",
  },
  {
    id: 3,
    title: "Getting Started with Next.js App Router",
    excerpt: "Structure your Next.js app with the new router...",
    slug: "nextjs-app-router",
  },
  {
    id: 4,
    title: "Responsive Design Best Practices",
    excerpt: "Techniques for mobile-first layouts...",
    slug: "responsive-design",
  },
  {
    id: 5,
    title: "Optimizing Web Performance",
    excerpt: "Tips for fast loading pages...",
    slug: "web-performance",
  },
];

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const filtered = sampleArticles.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="py-12 px-6 bg-[#F0F9F4]">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-[#2F5233] text-center mb-8">
        All Articles
      </h1>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-12">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-[#94C973] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8BCD50]"
        />
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className="bg-[#B1D8B7] rounded-2xl shadow-md p-6 flex flex-col transition-transform hover:scale-105"
          >
            <h2 className="md:text-2xl md:text-left text-center text-lg font-semibold mb-2 text-[#2F5233]">
              {article.title}
            </h2>
            <p className="text-[#2F5233] md:text-left text-center mb-4 flex-grow">
              {article.excerpt}
            </p>
            <span className="mt-4 md:text-right text-center text-sm font-medium text-[#1D741B]">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}

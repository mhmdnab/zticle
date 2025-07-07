"use client";

import { useState } from "react";
import Link from "next/link";
import { articles } from "../../data/articles"; // import your data

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const filtered = articles.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="relative min-h-screen md:py-32 py-44 px-4 bg-gradient-to-br from-[#F0F9F4] via-[#E6F8EC] to-white overflow-hidden">
      {/* Decorative Background Blobs */}
      <div
        className="pointer-events-none absolute -top-12 -left-16 w-72 h-72 rounded-full bg-[#B1D8B7] opacity-25 blur-3xl z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#76B947] opacity-20 blur-3xl z-0"
        aria-hidden="true"
      />

      {/* Page Title */}
      <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-[#2F5233] text-center mb-8 drop-shadow">
        All Articles
      </h1>

      {/* Search Bar */}
      <div className="relative z-10 max-w-md mx-auto mb-14">
        <input
          type="text"
          placeholder="Search articles…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-[#94C973] rounded-xl px-5 py-3 text-base shadow focus:outline-none focus:ring-2 focus:ring-[#8BCD50] transition"
        />
      </div>

      {/* Articles Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-[#2F5233] text-lg font-semibold">
            No articles found.
          </div>
        ) : (
          filtered.map((article, i) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group bg-gradient-to-br from-[#B1D8B7]/80 to-[#94C973]/70 rounded-3xl shadow-2xl p-8 flex flex-col transition-all hover:scale-105 hover:shadow-3xl border border-[#94C973]/50 relative overflow-hidden"
              style={{
                minHeight: "250px",
              }}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#2F5233]">
                {article.title}
              </h2>
              <p className="text-[#2F5233]/90 mb-4 flex-grow md:text-base text-sm">
                {article.description}
              </p>
              <span className="mt-4 inline-block text-[#2F5233] bg-[#CFE8D8]/70 rounded-lg px-4 py-2 font-semibold text-sm transition group-hover:bg-[#76B947] group-hover:text-white shadow">
                Read more →
              </span>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}

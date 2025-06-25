// components/ArticlesPreview.tsx
"use client";

import Link from "next/link";

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
];

export default function ArticlesPreview() {
  return (
    <section className="bg-[#2F5233] h-auto px-12 flex flex-col justify-center py-28">
      <h2 className="text-4xl font-semibold text-center text-[#B1D8B7] mb-4">
        Latest Articles
      </h2>
      <p className="text-lg text-center font-normal text-[#B1D8B7] mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio placeat
        magni deleniti neque quisquam mollitia ab, harum hic et perferendis
        dolore cupiditate incidunt aliquam. Ex fugit exercitationem rerum
        possimus eveniet.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {sampleArticles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className="block p-6 bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-150"
          >
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm">{article.excerpt}</p>
          </Link>
        ))}
      </div>
      <Link
        href={"/articles"}
        className="mt-12 hover:underline text-[#76B947] text-center"
      >
        See All Articles
      </Link>
    </section>
  );
}

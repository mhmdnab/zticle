// components/ArticlesPreview.tsx

import Link from "next/link";
import { articles } from "../data/articles"; // import your articles data

export default function ArticlesPreview() {
  // sort by date descending and take the latest 4
  const latest = [...articles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 4);

  return (
    <section className="bg-[#2F5233] px-12 py-28 flex flex-col items-center">
      <h2 className="text-4xl font-semibold text-[#B1D8B7] mb-4">
        Latest Articles
      </h2>
      <p className="text-lg font-normal text-[#B1D8B7] mb-12 text-center max-w-2xl">
        Check out our freshest Gen Z takes on culture, tech, and beyond. Dive
        in!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {latest.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block p-6 bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-150"
          >
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">
              {article.description}
            </p>
          </Link>
        ))}
      </div>

      <Link href="/articles" className="mt-12 text-[#76B947] hover:underline">
        See All Articles →
      </Link>
    </section>
  );
}

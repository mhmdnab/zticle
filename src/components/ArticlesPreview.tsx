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
    <section className="relative px-12 py-28 flex flex-col items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/bg-zticle.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.45)", // Slightly darken image
        }}
      />
      {/* Green overlay */}
      <div className="absolute inset-0 z-10 bg-[#2F5233] opacity-80 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Header with glass effect */}
        <div className="backdrop-blur-md bg-[#2F5233]/40 rounded-3xl px-8 py-6 mb-8 flex flex-col items-center max-w-3xl shadow-lg border border-[#76B947]/50">
          <h2 className="md:text-4xl text-3xl text-center font-extrabold text-[#B1D8B7] mb-2 drop-shadow">
            Latest Articles
          </h2>
          <p className="md:text-lg text-md font-medium text-[#B1D8B7]/80 text-center max-w-2xl">
            Check out our freshest Gen Z takes on life, wellness, money moves,
            and more. Dive in!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          {latest.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group block p-7 bg-white/90 rounded-2xl shadow-2xl border border-[#B1D8B7]/60
        hover:border-[#76B947] transition-all duration-200 hover:-translate-y-1 hover:shadow-3xl
        relative overflow-hidden"
              style={{ minHeight: 220 }}
            >
              <h3 className="text-xl font-bold text-[#2F5233] mb-3">
                {article.title}
              </h3>
              <p className="text-[#2F5233]/80 text-sm line-clamp-3">
                {article.description}
              </p>
            </Link>
          ))}
        </div>

        <Link
          href="/articles"
          className="mt-12 inline-block bg-[#76B947] hover:bg-[#2F5233] text-white text-lg font-semibold rounded-xl px-8 py-3 shadow-lg transition duration-200"
        >
          See All Articles →
        </Link>
      </div>
    </section>
  );
}

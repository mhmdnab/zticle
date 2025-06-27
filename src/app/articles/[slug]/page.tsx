import { notFound } from "next/navigation";
import { articles } from "../../../data/articles";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();
  //   #94C973

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#94C973] to-[#4c8453] py-12 px-4">
      <div
        className="
      max-w-2xl mx-auto
      bg-white/80
      rounded-3xl overflow-hidden
      shadow-lg
      border-2 border-[#76B947]
    "
      >
        {/* Header strip */}
        <div className="px-8 py-6 bg-[#76B947]/30">
          <h1 className="text-4xl font-bold text-[#2F5233]">{article.title}</h1>
          <p className="mt-3 text-sm text-[#2F5233]">
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </div>

        <div className="px-8 py-6 space-y-6">
          {/* Cover image */}
          {article.coverImage && (
            <Image
              src={article.coverImage}
              alt={article.title}
              width={800}
              height={400}
              className="w-full rounded-2xl shadow-md ring-4 ring-[#B1D8B7]/40"
            />
          )}

          {/* Body */}
          <div
            className="prose prose-lg text-[#2F5233] prose-a:text-[#76B947] hover:prose-a:text-[#94C973]"
            style={{ lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>
      </div>
    </div>
  );
}

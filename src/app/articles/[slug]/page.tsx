import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticle } from '@/lib/content';
import { topic, readTime } from '@/lib/editorial';
import ReadingTools from '@/components/ReadingTools';
export const dynamic = 'force-dynamic';
export async function generateMetadata({params}: {params: Promise<{slug:string}>}) {const {slug}=await params; const a=await getArticle(slug);return {title:a ? `${a.title} — Zticle` : 'Story not found',description:a?.description};}
export default async function ArticlePage({params}: {params: Promise<{slug:string}>}) {
 const {slug}=await params;const a=await getArticle(slug);if(!a) notFound();
 return <main className="article-page"><Link href="/articles" className="back-link">← Back to the good stuff</Link><div className="eyebrow orange">{topic(a)} · {readTime(a)} MIN READ</div><h1>{a.title}</h1><p className="article-deck">{a.description}</p><div className="byline">By {a.author || 'The Zticle team'} <span>· {new Date(a.publishedAt).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'})}</span></div><img className="article-cover" src={a.coverImage} alt={a.coverAlt || a.title}/><ReadingTools article={a}/><div className="article-body" dangerouslySetInnerHTML={{__html:a.html}}/><div className="article-end">✳<p>Something to think about. Something to pass on.</p><Link href="/articles">Find your next read ↗</Link></div></main>;
}

import 'server-only';
import { z } from 'zod';
import { articles as originalArticles, type Article } from '@/data/articles';

const contentArticle = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(160),
  title: z.string().min(3).max(180),
  description: z.string().max(400),
  author: z.string().max(100),
  category: z.enum(['Culture', 'Wellbeing', 'Money', 'Work & life', 'Digital life']),
  coverImage: z.string().url().refine(value => /^https?:\/\//.test(value)),
  coverAlt: z.string().max(250),
  publishedAt: z.string().refine(value => Number.isFinite(Date.parse(value))),
  updatedAt: z.string().optional(),
  html: z.string().max(700000),
});
const contentFeed = z.object({ articles: z.array(contentArticle).max(5000) });

// With no CMS configured, retain the original editorial library. Once connected,
// the Studio is authoritative: never resurrect unpublished stories from fixtures.
export async function getArticles(): Promise<Article[]> {
  const endpoint = process.env.CONTENT_API_URL;
  if (!endpoint) return originalArticles;
  try {
    const url = new URL(endpoint);
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Invalid content URL');
    const response = await fetch(url, {cache: 'no-store', signal: AbortSignal.timeout(8000)});
    if (!response.ok) throw new Error(`Content service returned ${response.status}`);
    const result = contentFeed.safeParse(await response.json());
    if (!result.success) throw new Error('Invalid content feed');
    return result.data.articles;
  } catch (error) {
    console.error('Published articles unavailable:', error instanceof Error ? error.message : 'Unknown error');
    throw new Error('Our stories are temporarily unavailable. Please try again shortly.');
  }
}
export async function getArticle(slug: string) {
  return (await getArticles()).find(article => article.slug === slug);
}

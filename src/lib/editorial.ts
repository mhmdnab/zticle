import type { Article } from '@/data/articles';
export const topics = ['All stories', 'Culture', 'Wellbeing', 'Money', 'Work & life', 'Digital life'];
export function topic(a: Article) {
 if (a.category && topics.includes(a.category) && a.category !== 'All stories') return a.category;
 if (/crypto|wallet/.test(a.slug)) return 'Money';
 if (/career|quitting|hustles/.test(a.slug)) return 'Work & life';
 if (/tiktok/.test(a.slug)) return 'Culture';
 if (/digital|scrolling/.test(a.slug)) return 'Digital life';
 return 'Wellbeing';
}
export function plainText(html: string) { return html.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim(); }
export function readTime(a: Article) { return Math.max(1, Math.ceil(plainText(a.html).split(' ').length / 200)); }
export function excerpts(a: Article) { return [...a.html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(m => plainText(m[1])).filter(Boolean); }

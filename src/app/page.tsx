import Feed from '@/components/Feed';
import { getArticles } from '@/lib/content';
export const dynamic = 'force-dynamic';
export default async function Home() { return <Feed articles={await getArticles()}/>; }

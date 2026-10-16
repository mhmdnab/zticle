import Feed from '@/components/Feed';
import { getArticles } from '@/lib/content';
export const dynamic = 'force-dynamic';
export default async function ArticlesPage() { return <Feed explore articles={await getArticles()}/>; }

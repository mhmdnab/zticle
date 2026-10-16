'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiArrowUpRight, FiBookmark } from 'react-icons/fi';
export default function Header() {
 const path = usePathname();
 return <header className="site-header"><Link href="/" className="wordmark" aria-label="Zticle home">zticle<span>✳</span></Link><nav aria-label="Main navigation"><Link className={path === '/' ? 'active' : ''} href="/">The feed</Link><Link className={path.startsWith('/articles') ? 'active' : ''} href="/articles">Explore</Link><Link href="/about">Our story</Link></nav><Link className="saved-link" href="/articles?saved=1"><FiBookmark/> <span>Saved stories</span></Link><Link className="header-cta" href="/#latest">Find your next read <FiArrowUpRight/></Link></header>;
}

'use client';
import Link from 'next/link';
import { useState } from 'react';
import type { Article } from '@/data/articles';
import { readTime, topic, topics } from '@/lib/editorial';
const descriptions: Record<string,string> = { Culture: 'What’s moving the conversation.', Wellbeing: 'A little more room to breathe.', Money: 'Make sense of your money.', 'Work & life': 'Figuring it out as you go.', 'Digital life': 'Life on the other side of the screen.' };
export default function Discover({articles}: {articles: Article[]}) {
 const [pick,setPick]=useState<Article|null>(null);
 const quick=articles.filter(a=>readTime(a)<=5).slice(0,3);
 return <><section className="discovery-section"><div className="section-top"><div className="section-title"><span className="eyebrow">FOLLOW YOUR CURIOSITY</span><h2>Find your corner<span className="orange">.</span></h2></div><Link href="/articles">All stories ↗</Link></div><div className="collection-grid">{topics.slice(1).map((t,i)=><Link key={t} href={`/articles?topic=${encodeURIComponent(t)}`}><span className="collection-number">0{i+1} ↗</span><h3>{t}</h3><p>{descriptions[t]}</p><small>{articles.filter(a=>topic(a)===t).length} {articles.filter(a=>topic(a)===t).length===1?'story':'stories'}</small></Link>)}</div></section>
 <section className="reading-break"><div><span className="eyebrow">A BETTER SCROLL BREAK</span><h2>{quick.length?'Five minutes, fresh perspective.':'Something outside your bubble.'}</h2><p>A small pause in your day. Something new to take with you.</p><button className="solid-link" disabled={!articles.length} onClick={()=>{const options=articles.filter(a=>a.slug!==pick?.slug);setPick(options.length?options[Math.floor(Math.random()*options.length)]:articles[0]);}}>Pick a story for me ↗</button>{pick && <div className="random-pick" aria-live="polite"><small>YOUR NEXT READ · {readTime(pick)} MIN</small><Link href={`/articles/${pick.slug}`}>{pick.title} ↗</Link></div>}</div><div className="quick-list">{quick.map((a,i)=><Link key={a.slug} href={`/articles/${a.slug}`}><span>0{i+1}</span><div><small>{topic(a)} · {readTime(a)} min read</small><h3>{a.title}</h3></div><span>↗</span></Link>)}{!quick.length && <Link href="/articles">Find your next long read ↗</Link>}</div></section></>;
}

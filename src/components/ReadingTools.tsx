'use client';
import { useEffect, useState } from 'react';
import { FiBookmark, FiHeadphones, FiPause, FiPlay, FiShare2, FiSquare } from 'react-icons/fi';
import type { Article } from '@/data/articles';
import { excerpts, plainText } from '@/lib/editorial';
export function SaveButton({slug}: {slug: string}) {
 const [saved,setSaved] = useState(false);
 useEffect(() => { try {setSaved(JSON.parse(localStorage.getItem('zticle-saved') || '[]').includes(slug));} catch {} }, [slug]);
 return <button className={`icon-button ${saved ? 'is-saved' : ''}`} aria-label={saved ? 'Remove saved story' : 'Save story'} aria-pressed={saved} onClick={() => { try {const items: string[] = JSON.parse(localStorage.getItem('zticle-saved') || '[]'); localStorage.setItem('zticle-saved', JSON.stringify(saved ? items.filter(s => s !== slug) : [...new Set([...items,slug])])); setSaved(!saved); window.dispatchEvent(new Event('zticle-saved-changed'));} catch {} }}><FiBookmark fill={saved ? 'currentColor' : 'none'}/></button>;
}
export default function ReadingTools({article}: {article: Article}) {
 const [mode,setMode] = useState('Quick take');
 const [speaking,setSpeaking] = useState(false);
 const [paused,setPaused] = useState(false);
 const [rate,setRate] = useState(1);
 const [status,setStatus] = useState('');
 const [supported,setSupported] = useState(false);
 useEffect(() => {setSupported('speechSynthesis' in window); return () => {if ('speechSynthesis' in window) window.speechSynthesis.cancel();};}, []);
 function stop() {window.speechSynthesis.cancel();setSpeaking(false);setPaused(false);}
 function play() {
 if (speaking) {if (paused) window.speechSynthesis.resume(); else window.speechSynthesis.pause();setPaused(!paused);return;}
 const text = plainText(article.html);
 const paragraphs = [article.title, ...(text.match(/.{1,240}(?:\s|$)/g) || [text])];
 window.speechSynthesis.cancel(); setSpeaking(true);setPaused(false);
 paragraphs.forEach((p,i) => {const speech = new SpeechSynthesisUtterance(p);speech.rate=rate;speech.lang='en-US';if(i===paragraphs.length-1) speech.onend=()=>setSpeaking(false);speech.onerror=()=>{setSpeaking(false);setStatus('Audio stopped. Try playing again.');};window.speechSynthesis.speak(speech);});
 }
 const paragraphs = excerpts(article);
 const bullets = paragraphs.slice(0,3);
 const headings = [...article.html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g)].map(m=>plainText(m[1]));
 return <section className="reading-tools" aria-label="Article reading tools"><div className="tool-row"><button className="audio-button" disabled={!supported} onClick={play}>{speaking && !paused ? <FiPause/> : <FiHeadphones/>}{speaking ? paused ? 'Resume' : 'Pause' : 'Read aloud'}</button>{speaking && <button className="icon-button" onClick={stop} aria-label="Stop reading"><FiSquare/></button>}<label className="speed">Speed <select aria-label="Reading speed" value={rate} disabled={speaking} onChange={e=>setRate(Number(e.target.value))}>{[0.75,1,1.25,1.5,2].map(n=><option key={n} value={n}>{n}×</option>)}</select></label><span className="tool-spacer"/><SaveButton slug={article.slug}/><button className="icon-button" aria-label="Share story" onClick={async()=>{try {if(navigator.share) await navigator.share({title:article.title,url:location.href});else {await navigator.clipboard.writeText(location.href);setStatus('Link copied. Send it to your group chat.');}}catch {setStatus('Sharing unavailable. Copy the page address to share.');}}}><FiShare2/></button></div>{!supported && <p className="small-note">Read aloud needs a browser with speech support.</p>}<div className="summary-heading"><span>✳ THE SHORT VERSION</span><small>Article excerpts · no AI generation</small></div><div className="summary-tabs" role="group" aria-label="Summary style">{['Quick take','Key points','One sentence'].map(m=><button aria-pressed={m===mode} className={m===mode?'selected':''} key={m} onClick={()=>setMode(m)}>{m}</button>)}</div><div className="summary-content" aria-live="polite">{mode==='Quick take' ? <p>{article.description} {paragraphs[0]}</p> : mode==='Key points' ? <ul>{(headings.length ? headings.slice(0,4) : bullets).map(s=><li key={s}>{s}</li>)}</ul> : <p>{article.description}</p>}</div><p className="small-note" role="status">{status}</p></section>;
}

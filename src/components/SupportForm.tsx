'use client';
import { useState, type FormEvent } from 'react';
export default function SupportForm() {
 const [pending,setPending]=useState(false);
 const [result,setResult]=useState<{ok:boolean;message:string}|null>(null);
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault(); if(pending)return;
  const form=event.currentTarget;const data=new FormData(form);setPending(true);setResult(null);
  try{const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(data))});const body=await response.json();if(!response.ok||!body.success)throw new Error(body.error||'Your message could not be sent. Please try again.');setResult({ok:true,message:'Message sent. Thanks for helping make Zticle better.'});form.reset();}
  catch(error){setResult({ok:false,message:error instanceof Error?error.message:'Connection interrupted. Your message is still here; please try again.'});}finally{setPending(false);}
 }
 return <form className="support-form" onSubmit={submit} aria-busy={pending}>
  <div className="support-form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="What should we call you?"/></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com"/></label></div>
  <label>What’s on your mind?<select name="topic" defaultValue="Technical help"><option>Technical help</option><option>Article correction</option><option>Story suggestion</option><option>Feedback</option><option>Something else</option></select></label>
  <label>Your message<textarea name="message" required minLength={10} maxLength={5000} rows={6} placeholder="Tell us what happened, share a story idea, or let us know what could be better." aria-describedby="message-help"/></label>
  <p id="message-help" className="form-help">For a bug or correction, include the page link. Please don’t include passwords or other sensitive information.</p>
  {result && <p className={`form-result ${result.ok?'success':'failure'}`} role={result.ok?'status':'alert'}>{result.message}</p>}
  <button type="submit" disabled={pending} className="solid-link">{pending?'Sending…':'Send message ↗'}</button>
 </form>;
}

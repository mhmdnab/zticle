'use client';
export default function ErrorPage({reset}: {reset: () => void}) {
  return <main className="empty-state" style={{padding:'100px 24px'}}><h1 style={{fontSize:32,color:'#252720'}}>A short pause in the feed.</h1><p style={{margin:'18px 0'}}>Our stories are temporarily unavailable. Please try again in a moment.</p><button className="audio-button" style={{margin:'auto'}} onClick={reset}>Try again</button></main>;
}

// data/articles.ts
export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date
  coverImage?: string;
  author?: string;
  html: string; // article body as HTML
}

export const articles: Article[] = [
  {
    slug: "burnout-culture-sucks",
    title: "Why Burnout Culture Sucks (And How to Unplug)",
    description:
      "Gen Z’s no-BS guide to spotting burnout, setting boundaries, and reclaiming your time.",
    publishedAt: "2025-06-26",
    coverImage: "/images/burnout.png",
    author: "Jordan Lee",
    html: `
      <h2>Say “Bye” to Hustle Porn</h2>
      <p>
        From 24/7 Side-hustles to “rise and grind” tweets—we’ve been sold the hustle
        pipe dream. Here’s how to spot burnout before it zaps your creativity.
      </p>
      <h3>1. Check Your Energy Levels</h3>
      <p>
        Do you feel like a phone at 1% battery? Chronic exhaustion, irritability,
        brain fog—that’s your body screaming “pause!”
      </p>
      <h3>2. Set Micro-Limits</h3>
      <p>
        Turn off work notifications after 6 pm. Use the Pomodoro method to protect
        your focus. Trust us, doing less actually makes you more productive.
      </p>
      <h3>3. Unplug Ritual</h3>
      <ul>
        <li>Charge your phone in another room</li>
        <li>Read a physical book or journal</li>
        <li>Take a 15-minute walk—no earbuds</li>
      </ul>
      <p>
        Self-care isn’t a trend—it’s survival. You got this.
      </p>
    `,
  },
  {
    slug: "crypto-for-starters",
    title: "Crypto for Starters: HODL or FOMO?",
    description:
      "A zero-fluff intro to crypto investing—what to know, what to avoid, and how to stay sane.",
    publishedAt: "2025-06-24",
    coverImage: "/images/crypto.png",
    author: "Avery Kim",
    html: `
      <h2>Forget the Moon—Think Safety First</h2>
      <p>
        Everyone’s screaming “to the moon!” but before you YOLO your rent money, learn
        these basics.
      </p>
      <h3>Top 3 Crypto Risks</h3>
      <ol>
        <li>Volatility: Prices can tank 30% in a day.</li>
        <li>Scams: Rug pulls are real—DYOR (Do Your Own Research).</li>
        <li>Security: Use hardware wallets, not exchange wallets.</li>
      </ol>
      <h3>Wallet Setup</h3>
      <p>MetaMask vs. Ledger vs. Trezor—pros and cons.</p>
      <h3>Stay Sane</h3>
      <p>
        Invest only what you can afford to lose. Set stop-loss orders. And never let
        FOMO dictate your moves.
      </p>
    `,
  },
  {
    slug: "mental-health-check",
    title: "Mental Health Check: 5 Micro-Habits to Feel Better Today",
    description:
      "Tiny daily habits that move the needle on your mood—no therapist required (but helpful!).",
    publishedAt: "2025-06-23",
    coverImage: "/images/mental-health.png",
    author: "Riley Patel",
    html: `
      <h2>Micro-Habits, Macro Impact</h2>
      <p>
        Overwhelmed? Here are five 2-minute habits you can slot into ANY day.
      </p>
      <h3>1. Gratitude Snap</h3>
      <p>
        Before bed, write one thing you’re thankful for. It rewires your brain toward
        positivity.
      </p>
      <h3>2. Digital Detox Break</h3>
      <p>
        Set a 5-minute “phone jail.” No socials, no news—just breathe.
      </p>
      <h3>3. Water + Movement</h3>
      <p>
        Drink a glass of water then stretch for 60 seconds. Hydration + blood flow =
        instant pick-me-up.
      </p>
      <h3>4. Mood Playlist</h3>
      <p>
        Create a 3-song loop that boosts you. Press play when you need an emotional
        reset.
      </p>
      <h3>5. Micro-Goal</h3>
      <p>
        Pick ONE tiny task (e.g. “reply to that friend’s text”). Small wins stack up.
      </p>
    `,
  },
  {
    slug: "tiktok-vs-instagram",
    title: "TikTok vs. Instagram: Which Vibe Wins in 2025?",
    description:
      "A side-by-side of the two biggest scrolls—features, culture, and where you belong.",
    publishedAt: "2025-06-21",
    coverImage: "/images/social-media.png",
    author: "Samira Ali",
    html: `
      <h2>Swipe, Scroll, Repeat</h2>
      <p>
        TikTok’s raw authenticity vs. Instagram’s curated highlight reel—what’s your jam?
      </p>
      <h3>Video Length</h3>
      <ul>
        <li>TikTok: 15s–10m (fast, addictive loops)</li>
        <li>Instagram Reels: 15s–90s (snappier edits)</li>
      </ul>
      <h3>Community Tone</h3>
      <p>
        TikTok: meme-driven, niche tribes. <br />
        Instagram: lifestyle aspirational, polished.
      </p>
      <h3>Growth Hacks</h3>
      <p>
        Trending audio + consistent posting = algorithm magic. Bonus: Stories + Lives
        keep you “seen” on the ‘Gram.
      </p>
      <p>
        Pick your vibe—or flex both.
      </p>
    `,
  },
  {
    slug: "careers-2025-hustle-culture",
    title: "Careers in 2025: Ditch the Hustle Culture, Find Your Flow",
    description:
      "How Gen Z is redefining work: remote, four-day weeks, passion projects, and more.",
    publishedAt: "2025-06-20",
    coverImage: "/images/career.png",
    author: "Kai Nguyen",
    html: `
      <h2>Work Less, Live More</h2>
      <p>
        Four-day weeks, gig-economy side hustles, and remote flexibility are the new norm.
      </p>
      <h3>Remote First</h3>
      <p>
        90% of Gen Z workers say they’ll quit without WFH options. Pro tips for setting
        up your home office.
      </p>
      <h3>Passion Over Paycheck</h3>
      <p>
        Portfolio careers let you mix and match gigs: UX writing, content creation,
        community management.
      </p>
      <h3>Balance Hacks</h3>
      <ul>
        <li>Time-blocking with digital boundaries</li>
        <li>Accountability buddies for goals</li>
        <li>Zero-email weekends</li>
      </ul>
      <p>
        The 9-to-5 is dead—design a work style that fits you.
      </p>
    `,
  },
];

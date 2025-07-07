// data/articles.ts
export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  coverImage?: string;
  author?: string;
  html: string;
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
    <h2 class="text-2xl font-bold mb-4">Let’s End the Grind Obsession</h2>
  <p class="mb-6">
    From 24/7 side hustles to “rise and grind” tweets—we’ve been sold the hustle
    pipe dream. Let’s unpack how burnout sneaks up and what to do about it.
  </p>
  
  <div class="space-y-6">
    <!-- Point 1 -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🔋</span>
      <div>
        <h3 class="font-semibold mb-1">Check Your Energy Levels</h3>
        <p class="text-gray-700">Waking up drained or always dragging? That’s a red flag. 
          <b>Track your sleep, mood, and focus for a week</b>—you’ll spot what’s draining you fast.
        </p>
      </div>
    </div>

    <!-- Point 2 -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🚦</span>
      <div>
        <h3 class="font-semibold mb-1">Set Micro-Limits</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li>Silence notifications after <b>6pm</b> (no “just one more email”).</li>
          <li>Pomodoro sprints: <b>25min work / 5min break</b>—it works.</li>
          <li>Block a weekly “no-meeting” morning for deep work.</li>
        </ul>
      </div>
    </div>
    
    <!-- Point 3 -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🛑</span>
      <div>
        <h3 class="font-semibold mb-1">Unplug Ritual</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li>Charge your phone in another room.</li>
          <li>Read a physical book or doodle in a notebook.</li>
          <li>Walk outside—no earbuds, just air.</li>
        </ul>
      </div>
    </div>

    <!-- Point 4 -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">📅</span>
      <div>
        <h3 class="font-semibold mb-1">Reclaim Your Calendar</h3>
        <p class="text-gray-700">Block off “you time” for yoga, game night, or a nap. 
          <b>Treat it as non-negotiable</b>, just like meetings.
        </p>
      </div>
    </div>

    <!-- Point 5 -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">👯‍♂️</span>
      <div>
        <h3 class="font-semibold mb-1">Build Your Support Squad</h3>
        <p class="text-gray-700">
          Share your burnout-busting game plan with friends, mentors, or a therapist. 
          <b>Talking it out = instant clarity and accountability.</b>
        </p>
      </div>
    </div>
    
    <!-- Point 6 -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🌙</span>
      <div>
        <h3 class="font-semibold mb-1">Preventive Habits</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li>Weekly digital sunset: no screens 2 hrs before bed.</li>
          <li>Monthly check-in: rate your stress 1–10, adjust routines.</li>
          <li>Quarterly “slow week”: reduce your workload by 20% and recharge.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-[#e5f6e0] mt-8 p-4 rounded-xl shadow text-[#185b2c]">
    <b>Conclusion:</b> Burnout culture feeds on silent sacrifice. Speak up, set limits, and prioritize
    your energy—because creativity and joy flourish when you unplug and recharge.
  </div>
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
  <h2 class="text-2xl font-bold mb-4">🚀 Forget the Moon—Think Safety First</h2>
  <p class="mb-6">
    Crypto’s wild swings can feel exhilarating… until your portfolio drops 30%. Here’s how to protect yourself before you even think about "to the moon."
  </p>

  <div class="space-y-6">
    <!-- Point 1 -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">⚠️</span>
      <div>
        <h3 class="font-semibold mb-1">Top 3 Crypto Risks</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li><b>Volatility:</b> Use limit and stop-loss orders—don’t ride the rollercoaster blind.</li>
          <li><b>Scams:</b> Audit the audits. Always check GitHub, team creds, and beware of “too good to be true.”</li>
          <li><b>Security:</b> Store coins on a hardware wallet, never just an exchange. Always enable 2FA.</li>
        </ul>
      </div>
    </div>

    <!-- Point 2 -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">💼</span>
      <div>
        <h3 class="font-semibold mb-1">Wallet Setup Walkthrough</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li>Install MetaMask and practice on a testnet (risk-free).</li>
          <li>Buy a Ledger Nano and keep your seed phrase offline in 2 separate spots.</li>
          <li>Test withdrawals in small amounts. Don’t YOLO your life savings.</li>
        </ul>
      </div>
    </div>

    <!-- Point 3 -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🧊</span>
      <div>
        <h3 class="font-semibold mb-1">FOMO-Proof Strategies</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li>Cap crypto at <b>5% of disposable income</b>. That’s it.</li>
          <li>Automate dollar-cost averaging—don’t try to time the market.</li>
          <li>Journal every trade decision. You’ll catch your own FOMO before it bites.</li>
        </ul>
      </div>
    </div>

    <!-- Point 4 -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🔍</span>
      <div>
        <h3 class="font-semibold mb-1">DeFi Deep Dive (Tread Lightly)</h3>
        <p class="text-gray-700">
          Yield farming and staking look flashy, but impermanent loss and smart contract bugs are real. 
          <b>Start with audited stablecoin platforms</b> before you chase double-digit APYs.
        </p>
      </div>
    </div>

    <!-- Point 5 -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🌐</span>
      <div>
        <h3 class="font-semibold mb-1">Resources & Communities</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li>Track on-chain analytics with Dune or Glassnode.</li>
          <li>Lurk in project Discords—never ape in on hype alone.</li>
          <li>Sub to at least one legit newsletter. Ignore FOMO-filled chat groups.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-[#e5f6e0] mt-8 p-4 rounded-xl shadow text-[#185b2c]">
    <b>Conclusion:</b> Crypto isn’t a get-rich-quick hack—it’s a high-risk asset class. With research, discipline, and the right tools, you’ll HODL smarter and FOMO less.
  </div>
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
  <h2 class="text-2xl font-bold mb-4">🧠 Micro-Habits, Macro Impact</h2>
  <p class="mb-6">
    Feeling off? These five 2-minute rituals fit any schedule and seriously boost your mood.
  </p>

  <div class="space-y-6">
    <!-- Gratitude Snap -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">✨</span>
      <div>
        <h3 class="font-semibold mb-1">Gratitude Snap</h3>
        <p class="text-gray-700">
          Every night, jot down one thing you’re grateful for (yup, even “my latte was extra frothy”). Over time, your brain rewires to spot the good stuff first.
        </p>
      </div>
    </div>

    <!-- Digital Detox Break -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">📵</span>
      <div>
        <h3 class="font-semibold mb-1">Digital Detox Break</h3>
        <p class="text-gray-700">
          Put your phone in “jail” for 5 minutes—no socials, no notifications. Breathe, notice your surroundings, reset.
        </p>
      </div>
    </div>

    <!-- Hydration + Movement -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">💧</span>
      <div>
        <h3 class="font-semibold mb-1">Hydration + Movement</h3>
        <p class="text-gray-700">
          Drink a big glass of water, then stretch or walk in place for 60 seconds. Hydrate, then move—your brain wakes up!
        </p>
      </div>
    </div>

    <!-- Mood Playlist -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🎶</span>
      <div>
        <h3 class="font-semibold mb-1">Mood Playlist</h3>
        <p class="text-gray-700">
          Make a 3-song playlist that always lifts you up. Hit play whenever you sense a slump coming on.
        </p>
      </div>
    </div>

    <!-- Micro-Goal -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">✅</span>
      <div>
        <h3 class="font-semibold mb-1">Micro-Goal</h3>
        <p class="text-gray-700">
          Pick one tiny task—reply to a text, clear your desktop, do 10 push-ups. Knock it out and get that dopamine boost.
        </p>
      </div>
    </div>

    <!-- Ritual Recipe -->
    <div class="bg-[#e0ecfb] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🧩</span>
      <div>
        <h3 class="font-semibold mb-1">Ritual Recipe</h3>
        <p class="text-gray-700">
          Combine all five for a 3-minute power-up: gratitude → detox → hydrate & move → playlist → micro-goal. Try it as your daily “well-being check-in.”
        </p>
      </div>
    </div>
  </div>

  <div class="bg-[#e5f6e0] mt-8 p-4 rounded-xl shadow text-[#185b2c]">
    <b>Conclusion:</b> Big mental health gains start with small, repeatable habits. Do this ritual for a week and watch the vibe shift—you might surprise yourself.
  </div>
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
  <h2 class="text-2xl font-bold mb-4">📲 Swipe, Scroll, Repeat</h2>
  <p class="mb-6">
    TikTok’s authentic, raw energy versus Instagram’s polished highlight reels—where do you fit in?
  </p>

  <div class="space-y-6">
    <!-- Video Length & Format -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">⏱️</span>
      <div>
        <h3 class="font-semibold mb-1">Video Length & Format</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li><b>TikTok:</b> 15s–10min; duet/stitch features for remixes.</li>
          <li><b>Instagram Reels:</b> 15s–90s; seamless Stories integration.</li>
        </ul>
      </div>
    </div>

    <!-- Community & Culture -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">👾</span>
      <div>
        <h3 class="font-semibold mb-1">Community & Culture</h3>
        <p class="text-gray-700">
          TikTok thrives on niche tribes and memes. Instagram leans into lifestyle and aesthetic curation. Which sparks your creativity more?
        </p>
      </div>
    </div>

    <!-- Growth & Monetization -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">💰</span>
      <div>
        <h3 class="font-semibold mb-1">Growth & Monetization</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li><b>TikTok Creator Fund:</b> Pays based on views and engagement.</li>
          <li><b>IG Brand Deals:</b> Higher rates for polished content and audience targeting.</li>
          <li><b>Affiliate Links:</b> Bio links on IG vs. in-video tags on TikTok.</li>
        </ul>
      </div>
    </div>

    <!-- Content Strategy -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🎯</span>
      <div>
        <h3 class="font-semibold mb-1">Content Strategy</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li>Go raw and unfiltered on TikTok for deep engagement.</li>
          <li>Use IG Guides and Lives for evergreen, pro content.</li>
          <li>Cross-post snippets to reach both audiences.</li>
        </ul>
      </div>
    </div>

    <!-- Analytics & Feedback -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">📊</span>
      <div>
        <h3 class="font-semibold mb-1">Analytics & Feedback</h3>
        <p class="text-gray-700">
          Check TikTok retention rates, IG saves/shares. Let the data guide your next creative pivot.
        </p>
      </div>
    </div>
  </div>

  <div class="bg-[#e5f6e0] mt-8 p-4 rounded-xl shadow text-[#185b2c]">
    <b>Conclusion:</b> No one platform rules all. Experiment, track what resonates, and double down on the vibe that matches your voice.
  </div>
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
  <h2 class="text-2xl font-bold mb-4">💼 Work Less, Live More</h2>
  <p class="mb-6">
    Four-day weeks, gig-economy side hustles, and remote flexibility are rewriting career rules. In 2025, burnout is out and sustainable flow is in.
  </p>

  <div class="space-y-6">
    <!-- Remote First, Always Flexible -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🏡</span>
      <div>
        <h3 class="font-semibold mb-1">Remote First, Always Flexible</h3>
        <p class="text-gray-700 mb-2">90% of Gen Z will quit without WFH options. Want to thrive remotely?</p>
        <ul class="list-disc pl-4 space-y-1">
          <li>Invest in ergonomic gear and a dedicated workspace.</li>
          <li>Schedule daily stand-ups—stay aligned, not micromanaged.</li>
          <li>Use async tools like Slack threads and Notion docs.</li>
        </ul>
      </div>
    </div>

    <!-- Portfolio Careers: Passion Meets Profession -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🧩</span>
      <div>
        <h3 class="font-semibold mb-1">Portfolio Careers: Passion Meets Profession</h3>
        <p class="text-gray-700 mb-2">Linear careers are dead. Mix gigs to diversify income and stay inspired:</p>
        <ol class="list-decimal pl-4 space-y-1">
          <li>Identify complementary skills (ex: design + copywriting).</li>
          <li>Build a personal brand site with multi-skill projects.</li>
          <li>Network across niches for new opportunities.</li>
        </ol>
      </div>
    </div>

    <!-- Four-Day Weeks & Micro-Retirements -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🗓️</span>
      <div>
        <h3 class="font-semibold mb-1">Four-Day Weeks & Micro-Retirements</h3>
        <p class="text-gray-700">
          Four-day weeks aren’t just a perk—they multiply productivity (40% fewer sick days, 25% more output). Micro-retirements (flex weeks off) keep mental health in check.
        </p>
      </div>
    </div>

    <!-- Tools & Techniques for Flow -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">⚙️</span>
      <div>
        <h3 class="font-semibold mb-1">Tools & Techniques for Flow</h3>
        <p class="text-gray-700 mb-2">Structure = flow. Try these:</p>
        <ul class="list-disc pl-4 space-y-1">
          <li><b>Time-blocking:</b> Batch similar tasks to avoid context-switching.</li>
          <li><b>Deep Work Sessions:</b> 90-minute focus sprints + 15-minute breaks.</li>
          <li><b>Digital Boundaries:</b> Silence notifications during core hours.</li>
        </ul>
      </div>
    </div>

    <!-- Negotiating Flex & Fair Pay -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">📝</span>
      <div>
        <h3 class="font-semibold mb-1">Negotiating Flex & Fair Pay</h3>
        <p class="text-gray-700 mb-2">Want a non-traditional schedule? Start with metrics:</p>
        <ul class="list-disc pl-4 space-y-1">
          <li>Show output vs. hours to prove efficiency.</li>
          <li>Suggest pilot periods with regular reviews.</li>
          <li>Benchmark pay against similar remote roles.</li>
        </ul>
      </div>
    </div>

    <!-- Community & Continuous Learning -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🤝</span>
      <div>
        <h3 class="font-semibold mb-1">Community & Continuous Learning</h3>
        <p class="text-gray-700">
          Join virtual cohorts, mastermind groups, and hackathons. Lifelong learning = new job security.
        </p>
      </div>
    </div>
  </div>

  <div class="bg-[#e5f6e0] mt-8 p-4 rounded-xl shadow text-[#185b2c]">
    <b>Conclusion:</b> The 9–5 grind is over. Design a career around your life, not the other way around. In 2025, flow-state and fulfillment beat hustle every time.
  </div>
`,
  },
  {
    slug: "digital-detox-diaries",
    title: "Digital Detox Diaries: Reclaim Your Attention Span",
    description:
      "A candid look at unplugging from doomscrolling—how to set screen-time boundaries, pick micro-habits that stick, and rediscover real-world flow.",
    publishedAt: "2025-06-28",
    coverImage: "/images/digital-detox.png",
    author: "Taylor Chen",
    html: `
  <h2 class="text-2xl font-bold mb-4">🔌 Unplug to Level Up</h2>
  <p class="mb-6">
    Doomscroll fatigue is real. Tiny, intentional breaks reset your brain and boost both productivity and creativity.
  </p>

  <div class="space-y-6">
    <!-- Screen-Time Audit -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">📊</span>
      <div>
        <h3 class="font-semibold mb-1">Screen-Time Audit</h3>
        <p class="text-gray-700">
          Track daily phone/computer use with built-in tools or Moment. Spot your top 3 focus-eating apps and time-sinks.
        </p>
      </div>
    </div>

    <!-- Micro-Checkpoints -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">⏱️</span>
      <div>
        <h3 class="font-semibold mb-1">Micro-Checkpoints</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li>Set app timers: 10 minutes, then forced break.</li>
          <li>Try Pomodoro offshoots: 45 min on, 15 min off for deeper resets.</li>
        </ul>
      </div>
    </div>

    <!-- Analog Rituals -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">📓</span>
      <div>
        <h3 class="font-semibold mb-1">Analog Rituals</h3>
        <p class="text-gray-700 mb-1">Replace one scroll session per day with:</p>
        <ul class="list-disc pl-4 space-y-1">
          <li>Journaling for emotional clarity.</li>
          <li>Sketching or doodling—wake up different neural pathways.</li>
        </ul>
      </div>
    </div>

    <!-- Weekly Tech Sabbatical -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🌳</span>
      <div>
        <h3 class="font-semibold mb-1">Weekly Tech Sabbatical</h3>
        <p class="text-gray-700">
          Dedicate Sunday afternoon to offline activities: nature walks, cooking, or a real book. Notice the recharge.
        </p>
      </div>
    </div>

    <!-- Social Accountability -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">👫</span>
      <div>
        <h3 class="font-semibold mb-1">Social Accountability</h3>
        <p class="text-gray-700">
          Pair with a friend for shared detox goals. Check in every morning and celebrate screen-free wins.
        </p>
      </div>
    </div>

    <!-- Long-Term Habituation -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🔄</span>
      <div>
        <h3 class="font-semibold mb-1">Long-Term Habituation</h3>
        <p class="text-gray-700">
          After one month, most people see a 30% drop in compulsive checking. Celebrate every milestone to lock in the habit!
        </p>
      </div>
    </div>
  </div>

  <div class="bg-[#e5f6e0] mt-8 p-4 rounded-xl shadow text-[#185b2c]">
    <b>Conclusion:</b> Digital detox isn’t a one-time cleanse—it’s a lifestyle tweak. Build in those pauses and reclaim your focus, creativity, and joy.
  </div>
`,
  },
  {
    slug: "sustainable-side-hustles",
    title: "Sustainable Side-Hustles: Make Money Without Burning Out",
    description:
      "From print-on-demand to pet-sitting, explore eco- and self-care–focused gigs that pad your wallet without hijacking your weekends.",
    publishedAt: "2025-06-27",
    coverImage: "/images/sustainable-side-hustles.png",
    author: "Morgan Lee",
    html: `
  <h2 class="text-2xl font-bold mb-4">🌱 Green Gigs That Pay</h2>
  <p class="mb-6">
    Side hustles don’t have to drain you. Discover eco-conscious gigs that align with your values and your schedule.
  </p>

  <div class="space-y-6">
    <!-- Print-on-Demand Eco-Merch -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🛍️</span>
      <div>
        <h3 class="font-semibold mb-1">Print-on-Demand Eco-Merch</h3>
        <p class="text-gray-700">
          Partner with sustainable suppliers to sell organic cotton totes, bamboo mugs, and recycled-material tees—no inventory, low risk.
        </p>
      </div>
    </div>

    <!-- Urban Gardening Workshops -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🪴</span>
      <div>
        <h3 class="font-semibold mb-1">Urban Gardening Workshops</h3>
        <p class="text-gray-700">
          Teach balcony or windowsill herb and veggie gardens. Charge per session or run a membership model for ongoing care tips.
        </p>
      </div>
    </div>

    <!-- Pet-Sitting & Dog-Walking with a Twist -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🐕</span>
      <div>
        <h3 class="font-semibold mb-1">Pet-Sitting & Dog-Walking with a Twist</h3>
        <p class="text-gray-700">
          Offer eco-friendly service: use biodegradable waste bags, promote green treats, and connect with sustainability-minded pet owners.
        </p>
      </div>
    </div>

    <!-- Green Cleaning Services -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🧼</span>
      <div>
        <h3 class="font-semibold mb-1">Green Cleaning Services</h3>
        <p class="text-gray-700">
          Clean homes or offices with non-toxic, plant-based products. Upsell with decluttering and waste-reduction consults.
        </p>
      </div>
    </div>

    <!-- Digital Eco-Consulting -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">💻</span>
      <div>
        <h3 class="font-semibold mb-1">Digital Eco-Consulting</h3>
        <p class="text-gray-700">
          Help small businesses shrink their carbon footprint online: optimize websites for energy-efficient hosting and green UX design.
        </p>
      </div>
    </div>

    <!-- Balance & Burnout Prevention -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">⚖️</span>
      <div>
        <h3 class="font-semibold mb-1">Balance & Burnout Prevention</h3>
        <p class="text-gray-700">
          Structure your hustle: set a max hours/week, schedule real off-days, and automate or outsource what you can.
        </p>
      </div>
    </div>
  </div>

  <div class="bg-[#e5f6e0] mt-8 p-4 rounded-xl shadow text-[#185b2c]">
    <b>Conclusion:</b> Sustainable side hustles aren’t just gigs—they’re mini-ventures that fuel both your wallet and your well-being.
  </div>
`,
  },
  {
    slug: "ai-for-your-wallet",
    title: "AI for Your Wallet: Gen Z’s Guide to Smart Money Tools",
    description:
      "No-BS breakdown of robo-advisors, micro-investing apps, and crypto-bots—what’s legit, what’s hype, and how to start small.",
    publishedAt: "2025-06-29",
    coverImage: "/images/ai-wallet.png",
    author: "Jordan Kim",
    html: `
  <h2 class="text-2xl font-bold mb-4">🤖 Let Algorithms Do the Heavy Lifting</h2>
  <p class="mb-6">
    AI-driven finance tools can optimize your portfolio, budget, and savings—but only if you understand their limits.
  </p>

  <div class="space-y-6">
    <!-- Robo-Advisors: Automated Investing -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">📈</span>
      <div>
        <h3 class="font-semibold mb-1">Robo-Advisors: Automated Investing</h3>
        <p class="text-gray-700">
          Platforms like Betterment and Wealthfront rebalance for you. <b>Pros:</b> Low fees, tax-loss harvesting. <b>Cons:</b> Limited customization.
        </p>
      </div>
    </div>

    <!-- Micro-Investing Apps -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">💸</span>
      <div>
        <h3 class="font-semibold mb-1">Micro-Investing Apps</h3>
        <p class="text-gray-700">
          Apps like Acorns and Stash round up purchases or let you buy fractional shares. Great for building habits with minimal capital.
        </p>
      </div>
    </div>

    <!-- Crypto-Bots & Alerts -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🦾</span>
      <div>
        <h3 class="font-semibold mb-1">Crypto-Bots & Alerts</h3>
        <p class="text-gray-700">
          Use bots for dollar-cost averaging or set price alerts on CoinStats. Always test with small amounts and review performance quarterly.
        </p>
      </div>
    </div>

    <!-- Budgeting AI & Chatbots -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🤖</span>
      <div>
        <h3 class="font-semibold mb-1">Budgeting AI & Chatbots</h3>
        <p class="text-gray-700">
          Tools like Cleo and YNAB’s Smart Budget auto-categorize expenses and suggest savings goals. Always double-check to catch mistakes.
        </p>
      </div>
    </div>

    <!-- Risks & Watchpoints -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">⚠️</span>
      <div>
        <h3 class="font-semibold mb-1">Risks & Watchpoints</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li>Over-optimization: too many alerts = analysis paralysis.</li>
          <li>Data privacy: always check app permissions.</li>
          <li>Algorithm bias: past performance ≠ future results.</li>
        </ul>
      </div>
    </div>

    <!-- Getting Started Safely -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🛡️</span>
      <div>
        <h3 class="font-semibold mb-1">Getting Started Safely</h3>
        <ol class="list-decimal pl-4 space-y-1">
          <li>Pilot with one tool at a time.</li>
          <li>Set a fixed monthly budget.</li>
          <li>Review returns vs. fees every quarter.</li>
        </ol>
      </div>
    </div>
  </div>

  <div class="bg-[#e5f6e0] mt-8 p-4 rounded-xl shadow text-[#185b2c]">
    <b>Conclusion:</b> AI can be a force multiplier for your finances—but you’re still the pilot. Combine smart tech with savvy habits for best results.
  </div>
`,
  },
  {
    slug: "quiet-quitting-2-0",
    title: "Quiet Quitting 2.0: Crafting Your Four-Day “Workweek”",
    description:
      "How to negotiate more flex, side projects, or even a three-day weekend—stories from people who chose sanity over 9–5 grind.",
    publishedAt: "2025-06-25",
    coverImage: "/images/quiet-quitting.png",
    author: "Alex Rivera",
    html: `
  <h2 class="text-2xl font-bold mb-4">🕓 Less Hours, More Life</h2>
  <p class="mb-6">
    Quiet quitting has evolved: it’s now about *proactively designing* a workweek that fuels passion and prevents burnout.
  </p>

  <div class="space-y-6">
    <!-- The Data-Backed Pitch -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">📊</span>
      <div>
        <h3 class="font-semibold mb-1">The Data-Backed Pitch</h3>
        <p class="text-gray-700">
          Use metrics: Show consistent deliverables, optimized workflows, and benchmark response times to justify a shorter week.
        </p>
      </div>
    </div>

    <!-- Case Studies -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🏢</span>
      <div>
        <h3 class="font-semibold mb-1">Case Studies</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li>Company A: Switched to a 4-day week, saw a 30% employee satisfaction boost.</li>
          <li>Team B: Alternates Fridays off, retains 95% of customers with smart handoffs.</li>
        </ul>
      </div>
    </div>

    <!-- Side-Project Integration -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🔗</span>
      <div>
        <h3 class="font-semibold mb-1">Side-Project Integration</h3>
        <p class="text-gray-700">
          Free days = skill-building time. Allocate 10% of work hours to passion projects that also benefit your main role.
        </p>
      </div>
    </div>

    <!-- Async Excellence -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">💬</span>
      <div>
        <h3 class="font-semibold mb-1">Async Excellence</h3>
        <p class="text-gray-700">
          Master async tools: Use Confluence for docs, Loom for walkthroughs, and block calendar time for deep, interruption-free work.
        </p>
      </div>
    </div>

    <!-- Mindset Shift -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🧠</span>
      <div>
        <h3 class="font-semibold mb-1">Mindset Shift</h3>
        <p class="text-gray-700">
          Quiet quitting 2.0 isn’t slacking—it’s *strategic self-management*. Measure your impact, not just your hours.
        </p>
      </div>
    </div>
  </div>

  <div class="bg-[#e5f6e0] mt-8 p-4 rounded-xl shadow text-[#185b2c]">
    <b>Conclusion:</b> Crafting a four-day week is a negotiation—prepare your case, pilot smart, and redefine what commitment means in 2025.
  </div>
`,
  },
  {
    slug: "mindful-scrolling",
    title: "Mindful Scrolling: Turning Social Media into Self-Care",
    description:
      "A habit-hacking guide—filters, follow lists, and blockers that keep you informed without the FOMO.",
    publishedAt: "2025-06-22",
    coverImage: "/images/mindful-scrolling.png",
    author: "Casey Nguyen",
    html: `
  <h2 class="text-2xl font-bold mb-4">📱 Scroll With Intention</h2>
  <p class="mb-6">
    Transform social media—often a stressor—into a tool for learning, inspiration, and connection. A few mindful tweaks can turn endless scrolling into purposeful moments.
  </p>

  <div class="space-y-6">
    <!-- Curated Follow Lists -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">📝</span>
      <div>
        <h3 class="font-semibold mb-1">Curated Follow Lists</h3>
        <p class="text-gray-700 mb-1">Organize your feed by topic:</p>
        <ul class="list-disc pl-4 space-y-1">
          <li><b>Wellness:</b> Experts, motivational accounts, mindfulness coaches.</li>
          <li><b>News & Ideas:</b> Reputable outlets and thought leaders.</li>
          <li><b>Passions:</b> Hobbies, DIY creators, or fave communities.</li>
        </ul>
        <p class="text-gray-700 mt-1">Switch lists based on your goal—learning, relaxing, or inspiration. Don’t scroll aimlessly.</p>
      </div>
    </div>

    <!-- Filter & Mute Strategically -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🔇</span>
      <div>
        <h3 class="font-semibold mb-1">Filter & Mute Strategically</h3>
        <p class="text-gray-700 mb-1">Silence stress triggers by muting:</p>
        <ul class="list-disc pl-4 space-y-1">
          <li>News during off-hours (avoid anxiety spikes).</li>
          <li>Negativity or comparison content.</li>
          <li>Quick-escape list of funny/uplifting accounts for mood boosts.</li>
        </ul>
      </div>
    </div>

    <!-- Break Rituals -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">⏳</span>
      <div>
        <h3 class="font-semibold mb-1">Break Rituals</h3>
        <p class="text-gray-700 mb-1">Micro-breaks, every session:</p>
        <ul class="list-disc pl-4 space-y-1">
          <li>After 20 min scrolling, take a 5-min physical stretch.</li>
          <li>Use a timer: stand, hydrate, or look away from the screen.</li>
          <li>Pair scrolling with a non-digital task—doodle or jot a gratitude note.</li>
        </ul>
      </div>
    </div>

    <!-- Blocker Tools for Boundaries -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🛑</span>
      <div>
        <h3 class="font-semibold mb-1">Blocker Tools for Boundaries</h3>
        <p class="text-gray-700 mb-1">Enforce limits with:</p>
        <ul class="list-disc pl-4 space-y-1">
          <li><b>Screen Time:</b> iOS/Android built-ins for daily caps.</li>
          <li><b>StayFocusd:</b> Chrome extension to restrict site time.</li>
          <li><b>Forest:</b> Gamified focus—grow a tree while staying off your phone.</li>
        </ul>
      </div>
    </div>

    <!-- Mindful Check-Ins -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🧘‍♂️</span>
      <div>
        <h3 class="font-semibold mb-1">Mindful Check-Ins</h3>
        <p class="text-gray-700 mb-1">Pause and ask yourself:</p>
        <ul class="list-disc pl-4 space-y-1">
          <li>“How am I feeling? Bored, anxious, or curious?”</li>
          <li>Journal or voice-note a quick reflection.</li>
          <li>Decide: keep scrolling, switch to a list, or log off.</li>
        </ul>
      </div>
    </div>

    <!-- Community & Accountability -->
    <div class="bg-[#F6F8FA] rounded-xl p-4 shadow flex items-start gap-3">
      <span class="text-2xl">🤝</span>
      <div>
        <h3 class="font-semibold mb-1">Community & Accountability</h3>
        <p class="text-gray-700 mb-1">Share your mindful scrolling plan with a friend or group:</p>
        <ul class="list-disc pl-4 space-y-1">
          <li>Set shared goals (e.g., max 30 minutes/day).</li>
          <li>Report check-ins and celebrate wins together.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-[#e5f6e0] mt-8 p-4 rounded-xl shadow text-[#185b2c]">
    <b>Conclusion:</b> Mindful scrolling turns passive consumption into intentional engagement. With the right lists, filters, and check-ins, you’ll use social media as a tool for your well-being—minus the overwhelm.
  </div>
`,
  },
];

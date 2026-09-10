<p align="center">
  <img src="public/images/logoNOBG.png" alt="Zticle logo" width="160" />
</p>

<h1 align="center">Zticle</h1>

<p align="center">
  <strong>Your Gen Z guide for real-life wins. No cringe. Just good vibes.</strong>
</p>

<p align="center">
  <a href="https://nextjs.org">Next.js 15</a> ·
  <a href="https://react.dev">React 19</a> ·
  <a href="https://www.typescriptlang.org">TypeScript</a> ·
  <a href="https://tailwindcss.com">Tailwind CSS 4</a> ·
  <a href="https://www.mongodb.com">MongoDB</a> ·
  <a href="https://firebase.google.com/docs/firestore">Firestore</a>
</p>

---

## About

Zticle is a lifestyle and advice publication written for Gen Z. It covers self-care, hustle hacks, money moves, digital detox, careers, crypto, and everything in between, with the goal of giving readers advice they actually need, minus the cringe.

The site is a statically generated Next.js app. Articles live in the repo as typed content, while the interactive parts (comments, a daily community poll, and the contact form) are backed by MongoDB, Firebase Firestore, and email respectively.

## Features

- **Article library** with cover images, author bylines, and publish dates. Every article page is pre-rendered at build time for fast loads and good SEO.
- **Instant search** on the articles index, filtered client-side as you type.
- **Comments on every article**, stored in MongoDB and paginated ten per page. Spam protection includes a hidden honeypot field, per-IP rate limiting, schema validation, and SHA-256 hashing of visitor IPs so raw addresses are never stored.
- **Daily community poll** powered by Firestore. Eight questions rotate by day of year, results update live, and each browser can vote once per poll.
- **Contact form** that emails the site owner through Gmail.
- **Google AdSense** integration, including a fluid ad unit on the About page and a published `ads.txt`.
- **Responsive, green-themed UI** built with Tailwind CSS 4, decorative gradients, and the Geist font family.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org) (App Router, Turbopack in dev) |
| UI | [React 19](https://react.dev), [Tailwind CSS 4](https://tailwindcss.com), [react-icons](https://react-icons.github.io/react-icons/) |
| Language | [TypeScript 5](https://www.typescriptlang.org) |
| Comments storage | [MongoDB](https://www.mongodb.com) via [Mongoose 8](https://mongoosejs.com) |
| Poll storage | [Firebase Firestore](https://firebase.google.com/docs/firestore) |
| Email | [Nodemailer](https://nodemailer.com) over Gmail SMTP |
| Data fetching | [SWR](https://swr.vercel.app) |
| Validation | [Zod 4](https://zod.dev) |
| Linting | ESLint 9 with `eslint-config-next` |

## Project structure

```
zticle/
├── public/
│   ├── ads.txt                  # Google AdSense publisher verification
│   └── images/                  # Logos, hero backgrounds, article covers
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout: fonts, Header, Footer, AdSense meta
│   │   ├── page.tsx             # Home: Hero, About teaser, Daily Poll, article previews
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx     # Contact form (client component)
│   │   ├── articles/
│   │   │   ├── page.tsx         # Article index with search
│   │   │   └── [slug]/page.tsx  # Statically generated article + comments
│   │   └── api/
│   │       ├── comments/[slug]/route.ts   # GET (paginated) and POST comments
│   │       └── contact/route.tsx          # Sends contact email via Nodemailer
│   ├── components/
│   │   ├── Header.tsx, Footer.tsx, Hero.tsx
│   │   ├── About.tsx, AboutTeaser.tsx
│   │   ├── ArticlesPreview.tsx
│   │   ├── DailyPoll.tsx        # Firestore-backed poll
│   │   ├── Adbanner.tsx         # AdSense unit
│   │   └── comments/Comments.tsx  # Comment list, form, and pagination
│   ├── data/
│   │   └── articles.tsx         # All article content and metadata
│   ├── lib/
│   │   ├── db.ts                # Cached Mongoose connection
│   │   └── firebase.ts          # Firebase app + Firestore client
│   └── models/
│       └── Comment.ts           # Mongoose Comment schema
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm (a lockfile is included)
- A MongoDB database (a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster works)
- A Firebase project with Firestore enabled
- A Gmail account with an [App Password](https://support.google.com/accounts/answer/185833) for the contact form

### 1. Clone and install

```bash
git clone https://github.com/mhmdnab/zticle.git
cd zticle
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```bash
# MongoDB (comments)
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/

# Contact form (Gmail SMTP)
EMAIL_USER=you@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_RECEIVER=inbox-that-receives-messages@example.com
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `MONGODB_URI` | Yes | Connection string for the comments database. The app uses a database named `zticle`. |
| `EMAIL_USER` | Yes | Gmail address used to send contact-form messages. |
| `EMAIL_PASS` | Yes | Gmail App Password for that account. |
| `EMAIL_RECEIVER` | Yes | Address that receives contact-form submissions. |

`.env*` files are git-ignored, so secrets never land in the repository.

### 3. Configure Firebase

The Firebase web config lives in [`src/lib/firebase.ts`](src/lib/firebase.ts). Replace the `firebaseConfig` object with the config from your own Firebase project (Project settings → Your apps → Web app).

Firestore needs a `polls` collection containing documents named `poll1` through `poll8`. Each document has this shape:

```json
{
  "question": "Which vibe wins in 2025?",
  "options": ["TikTok", "Instagram", "Neither"],
  "votes": { "0": 0, "1": 0, "2": 0 }
}
```

`votes` is keyed by option index. The poll shown on a given day is chosen by day of year, cycling through the eight documents.

Make sure your Firestore security rules allow public reads on `polls` and allow the `votes.*` fields to be incremented, since votes are written directly from the browser.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with Turbopack |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Adding an article

Articles are plain data in [`src/data/articles.tsx`](src/data/articles.tsx). Add a new object to the `articles` array:

```ts
{
  slug: "my-new-article",
  title: "My New Article",
  description: "A one-line summary shown on cards and in previews.",
  publishedAt: "2025-09-10",
  coverImage: "/images/my-new-article.png",
  author: "Your Name",
  html: `
    <p>Article body as HTML.</p>
  `,
}
```

Drop the cover image in `public/images/`. The article index, search, previews, and the `/articles/<slug>` route all pick it up automatically on the next build.

## API reference

### `GET /api/comments/[slug]`

Returns comments for an article, newest first.

| Query param | Default | Notes |
| --- | --- | --- |
| `page` | `1` | 1-based page number |
| `pageSize` | `10` | Capped at 50 |

Response:

```json
{ "items": [ ... ], "total": 42, "page": 1, "pageSize": 10 }
```

### `POST /api/comments/[slug]`

Creates a comment. Body:

```json
{ "name": "Jordan", "message": "Great read!", "email": "optional@example.com" }
```

- `name` is 1–60 characters, `message` is 1–1000 characters, `email` is optional.
- A hidden `website` field acts as a honeypot. If it is filled, the request is silently accepted and discarded.
- Limited to 5 posts per IP per minute. Returns `429` when exceeded.
- Returns `201` with the created comment, `400` on invalid input.

### `POST /api/contact`

Sends a contact email. Body:

```json
{ "name": "Jordan", "email": "jordan@example.com", "message": "Hi!" }
```

Returns `{ "success": true }` or a `500` with an error message.

## Deployment

Zticle deploys cleanly to [Vercel](https://vercel.com) or any host that supports Next.js. Set the four environment variables from the table above in your hosting dashboard, update the Firebase config, and run `npm run build`.

The comment rate limiter is in-memory, so on serverless platforms it resets between cold starts and is not shared across instances. That is fine for a small site, but a shared store such as Redis would be needed for strict limits at scale.

## Follow Zticle

- Instagram: [@zticle](https://instagram.com/zticle)
- X: [@zzzticle](https://x.com/zzzticle)
- Threads: [@zticle](https://www.threads.com/@zticle)

## License

This project is private and all rights are reserved by its owner.

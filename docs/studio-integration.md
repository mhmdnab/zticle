# Shared publishing backend

The public website and the separate Next.js dashboard (`zticle-studio`) use the same `zticle-api` backend, deployed at https://zticle-api.onrender.com. The backend stores articles, media, and authentication data in Neon PostgreSQL.

## Public website on Vercel

Set this server-only variable in the `zticle` project's Production environment, then redeploy:

```dotenv
CONTENT_API_URL=https://zticle-api.onrender.com/api/public/articles
```

The website fetches published articles without caching. Publishing, editing, or unpublishing in the dashboard is reflected on the next website request without rebuilding. Drafts stay out of the public feed. If a configured API is unavailable, the website shows a retry state. Without configuration, it uses the original fixture articles.

## Dashboard on Vercel

Set these server-only variables in the `zticle-studio` project's Production environment, then redeploy:

```dotenv
API_URL=https://zticle-api.onrender.com
APP_ORIGIN=https://zticle-studio.vercel.app
STUDIO_API_SECRET=<same value as the API service>
```

The dashboard proxies requests to the backend and keeps the shared secret on the server. Do not prefix these variables with `NEXT_PUBLIC_` or commit secret values.

## Backend on Render

Configure `DATABASE_URL` with the Neon connection string, `API_ORIGIN=https://zticle-api.onrender.com`, `STUDIO_ORIGIN=https://zticle-studio.vercel.app`, `PUBLIC_SITE_URL=https://zticle.vercel.app`, and the matching `STUDIO_API_SECRET`. Backend media is stored in PostgreSQL.

The three repositories deploy independently. For local development, `CONTENT_API_URL` can point at a locally running API or the dashboard's public feed proxy.

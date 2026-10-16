# Zticle Studio connection

The separate single-owner dashboard lives in the sibling `zticle-studio` repository. Start it with `npm start` on port 3100 and create your admin password in its first-run screen.

The public website now reads `src/lib/content.ts` rather than importing fixture articles directly into the feed. Set this server-only environment variable:

```dotenv
CONTENT_API_URL=http://127.0.0.1:3100/api/public/articles
```

Restart Next.js after changing the environment. For production, point it at the Studio's HTTPS domain. The website uses dynamic routes and uncached server-side requests. Drafts never enter the published feed, and unpublished stories return 404. If a configured service is unavailable, show a retry state instead of resurrecting old fixture articles. Without configuration, the original ten articles remain the fallback library.

Studio owns article category, byline, original publication date, title, description, safe rendered HTML, cover and alt text. Uploaded assets remain on the Studio host; keep its database and media on a persistent disk. The dashboard repository contains the complete setup, backup, reset-password and deployment instructions.

There is no shared Git history, package dependency or Git submodule between the two apps. Deploy them separately. No remote GitHub repository or public deployment has been created.

Verification: production build passed lint, TypeScript and route generation with Studio configured. The isolated Studio tests passed authentication, cross-origin write rejection, draft isolation, duplicate URL rejection, validation, publish/unpublish, conflict detection, Markdown escaping, upload validation and persistence. Browser QA created and saved a draft, confirmed the reader showed 404, previewed the body, published it and saw the complete article on the reader without rebuilding, then unpublished it and confirmed 404 again. Disposable QA records were never added to the actual Studio database.

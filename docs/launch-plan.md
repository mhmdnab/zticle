# Zticle launch and feature plan

## Research, 16 October 2026

Particle's official introduction describes ELI5, the 5Ws, Opposite Sides, translations, audio, questions, and following topics:
https://particle.news/blog/introducing-particle-the-news-organized

Particle+ adds custom summaries from natural-language instructions and voice choices:
https://particle.news/blog/particle-upgrades-dynamic-news-app-with-more-customizable-features

## Implemented

- Editorial homepage and searchable, topic-filtered article library.
- Device-local saved stories. No account or cross-device synchronization.
- Share via the native share sheet or clipboard fallback.
- Article audio using browser speech synthesis, pause/resume/stop, speed before playback. Available voices and quality depend on the browser/device. Paragraphs are queued to reduce long-utterance failures.
- Quick take, key points, one sentence. These are description/excerpt based, explicitly labeled, not generated AI summaries.
- Article metadata and corrected asynchronous route params for Next 15.

## Next priorities

1. **AI summary styles:** quick take, ELI5, 5Ws, why it matters, and custom prompt. Generate server-side with a configured provider. Validate requests, rate-limit, cache by article revision/style, cap input/output, and require source-grounded responses. ELI5 needs genuine rewriting. 5Ws must say when information is absent. Opposite Sides needs independently sourced viewpoints; don't invent them for opinion articles.
2. **Shareable highlights:** select a quote, create an attributed image card, link back to the original. Useful for group chats and social discovery.
3. **Follow interests:** explicit topics before behavior-based personalization. Add account-backed saved stories only when readers need cross-device access.
4. **Source notes and corrections:** visible citations, author pages, editorial standards, updated dates, correction history. Especially important for financial and wellbeing content.
5. **Daily brief/audio queue:** user-selected stories, optional audio files for consistent voices. Use original publishing and usage rights.

## Before a public launch

- Review the existing 2025 articles for freshness, factual support, author attribution, and image rights. Dates remain original; no fabricated traffic or popularity counts.
- Configure and verify contact email delivery and any retained database/comment routes. Existing integrations were not reconfigured by the redesign.
- Old comment and Firebase poll components are retained in source but aren't surfaced in the new reading flow; audit security rules, spam protection and moderation before enabling publicly.
- Add privacy/terms appropriate to the actual collection of user data and analytics. Saved stories currently stay in local storage.
- Choose domain/hosting and set canonical/Open Graph URLs and social images. Upgrade Next and dependencies to supported patched versions after compatibility testing.
- Test speech playback on Safari/iOS and Chrome/Android; check keyboard use, small screens and actual editorial images before launch.
- AI generation, user accounts, newsletter delivery and consistent server-rendered audio are not yet connected.

## Verification

Production build passed, including lint, TypeScript and static generation of 18 pages/routes. Browser checked the homepage and article navigation, switched summary style, toggled bookmark, and verified audio enters playback state and can be stopped. Cross-device voice quality and mobile browser audio remain to be tested.

`npm ci` reported 30 dependency vulnerabilities (4 critical, 22 high, 3 moderate, 1 low). Resolve and retest before public deployment.

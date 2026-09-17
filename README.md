# Site KauaArtx

**English** · [Português](README.pt-BR.md) · [Español](README.es.md)

The public platform behind the [@KauaArtx](https://www.youtube.com/@KauaArtx) channel: videos, travel stories, practical guides and the ongoing work of building a new life in Oxford — in Portuguese and English.

[Visit kauaartx.vercel.app](https://kauaartx.vercel.app)

---

## Why it exists

A YouTube channel gives you no address of your own: the algorithm decides who sees what, and written work has nowhere to live. This site is where the stories stay whole, findable by search, and where someone who arrived from one video can understand the whole journey.

## What is on it

- **Editorial content** — articles on Oxford, the UK ETA, the EES/ETIAS system and remote work, with a glossary and a page for the current chapter.
- **An interactive travel map**, built with D3 and TopoJSON, with data loaded on demand so it does not weigh down the first visit.
- **Genuinely bilingual** — Portuguese and English with 253 translated keys each, not machine translation layered on top.
- **RSS feed, sitemap and per-article Open Graph images**, so the writing travels beyond the site.
- **A contact form** with validation, a honeypot, rate limiting and an origin check.

## Engineering decisions worth noting

- **Person structured data** (JSON-LD) and per-page social previews, so the site introduces itself properly when shared.
- **The language is declared correctly.** The `lang` attribute follows the route: `/` serves `pt`, `/en` serves `en` — which matters for screen readers and for search.
- **A 404 that actually exists.** An unknown address lands on a real 404 in both languages, with the correct HTTP status.
- **Security headers** with CSP and HSTS set at the origin.
- **Accessibility as a requirement:** a visible focus indicator, `prefers-reduced-motion` respected and adequate touch targets on mobile.
- **CI that genuinely verifies:** typecheck, lint, tests and build on every push — the most complete verification of the six repositories.

## Tech stack

Next.js 15, React 19, TypeScript, next-intl, Supabase, D3/TopoJSON, Framer Motion, Vitest and Vercel.

## Local development

```powershell
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
```

The public site runs without private credentials. Supabase, email and newsletter features need the matching variables from `.env.example`.

> **Note on `package-lock.json`:** CI runs Node 22 (npm 10), which rejects a lock written by npm 11. If you need to regenerate it, use `npx npm@10 install --package-lock-only`.

## Verification

```powershell
npm.cmd run lint
npm.cmd run test
npm.cmd run build
npm.cmd audit --omit=dev
```

## Repository map

```text
messages/         Portuguese and English interface copy
public/           Brand and travel media
scripts/          Map data preparation
src/app/          Public pages, admin area, feeds and metadata
src/components/   Editorial, travel, map and navigation components
src/data/         Published journeys and curated content
src/lib/          Supabase, reading, map and YouTube integrations
supabase/         Database setup for publishing
testes/           Content and map regression tests
```

## Status

Published and actively maintained on Vercel. The current editorial focus is the @KauaArtx channel, travel, Oxford and personal development.

Built and maintained by [Kauã Diniz Souza](https://github.com/Kauadsouza).

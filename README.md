# MagicRoom — Wedding Salon Website

Wedding salon in Martin, Slovakia. Small, personal, fair prices.

## Repository Structure

```
magicroom-mt/
├── .github/workflows/              — CI (test + build on push)
├── .kilo/                          — Kilo CLI config
│   ├── agent/                      — Custom agents
│   └── command/                    — Slash commands (/deploy, /build, /colors)
├── AGENTS.md                       — Project instructions for Kilo
├── README.md                       — This file
│
├── research/                       — Market research, competitor analysis
│   ├── regional-market.sk.md
│   ├── regional-market.en.md
│   └── magicroom-strategia.pdf
│
├── plans/                          — Strategy documents
│   ├── SPEC.sk.md                  — Main specification (SK)
│   ├── SPEC.en.md                  — Specification (EN)
│   ├── seo-local-strategy.sk.md
│   ├── seo-local-strategy.en.md
│   ├── ux-conversion-strategy.sk.md
│   ├── ux-conversion-strategy.en.md
│   ├── roadmap-sk.md
│   └── roadmap.en.md
│
├── docs/                           — Technical documentation
│   ├── component-architecture.sk.md
│   ├── component-architecture.en.md
│   ├── color-palette.md            — Color history
│   └── deployment.md               — Deploy instructions
│
├── testing/                        — Tests (Vitest)
│   ├── site.test.ts                — 18 tests (config, navigation, schema.org)
│   ├── content.test.ts             — 25 tests (services, catalog, gallery)
│   └── README.md
│
├── references/                     — Raw salon photos (36 images)
│
├── public/                         — Static files
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   ├── site.webmanifest
│   └── images/
│       ├── logo.jpeg
│       └── salon/                  — Optimized photos
│
├── src/                            — Source code
│   ├── components/
│   │   ├── forms/
│   │   │   └── BookingForm.astro
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── CTASection.astro
│   │   │   ├── DecorativeDivider.astro
│   │   │   ├── Sparkles.astro
│   │   │   ├── ScrollToTop.astro
│   │   │   └── WhatsAppFAB.astro
│   │   └── ui/                     — shadcn/ui components
│   ├── data/
│   │   ├── content.ts              — All content (services, prices, gallery, catalog)
│   │   └── site.ts                 — Config (contact, navigation)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── api/
│   │   │   └── booking.ts          — API endpoint (Resend email)
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── svadobne-trendy-2026.astro
│   │   ├── index.astro             — Homepage
│   │   ├── o-nas.astro             — About
│   │   ├── sluzby.astro            — Services
│   │   ├── svadobne-saty.astro     — Dress catalog
│   │   ├── kontakt.astro           — Contact + booking
│   │   ├── komisny-predaj.astro    — Consignment
│   │   └── prenajom-dekoracii.astro — Decoration rental
│   └── styles/
│       └── global.css              — Tailwind theme + design tokens
│
├── .env.example
├── .gitignore
├── astro.config.mjs
├── components.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── vitest.config.ts
```

## Stack

- **Framework:** Astro 6.x (static + SSR for API)
- **UI:** shadcn/ui + Tailwind CSS v4
- **Email:** Resend (booking form)
- **Testing:** Vitest (43 unit) + Playwright (40 E2E)
- **CI:** GitHub Actions (unit + e2e on push)
- **Hosting:** Vercel (auto-deploy)

## Commands

```bash
npm run dev           # local dev server
npm run build         # production build
npm run test          # unit tests (43)
npm run test:e2e       # E2E tests (40)
npm run test:e2e:ui   # E2E with UI
npm run test:watch    # watch mode
```

## SEO & LLM Optimization

- RSS feed (`/rss.xml`)
- OpenSearch (`/opensearch.xml`)
- Dublin Core metadata
- Schema.org (Organization, LocalBusiness, HowTo, Product, Service, FAQ)
- Sitemap + robots.txt

## USP

1. Transparent prices online — only salon in the region
2. Cheapest in the region — trial from 12€
3. Dress consignment — nobody else does it
4. Personal approach — Natália knows every bride

## Contact

info@magicroom.sk · +421 950 490 323

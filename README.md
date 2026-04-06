# MagicRoom — Wedding Salon Website

> **SPECS-DRIVEN** — All decisions start from `docs/01-specs/`

Quick: `npm run dev` → localhost:4321

Tests: 69 unit + 121 E2E ✅

## Project Structure

```
magicroom-mt/
├── content/                          # 📦 CMS & CONTENT (SOURCE OF TRUTH)
│   ├── images/                       # 🖼️ OPTIMIZED IMAGES (Astro Image)
│   │   ├── systemassets/             # UI elements (logos, hero, etc.)
│   │   ├── gallery/                  # Interior & salon photos
│   │   ├── dresses/                  # Product photos (id.png)
│   │   ├── decorations/              # Decor catalog (id.jpg)
│   │   └── unusedimages/             # Temporarily unused files
│   ├── json/                         # 📦 DATA (JSON — upravuj cez GitHub)
│   │   ├── services.json
│   │   ├── dresses.json
│   │   ├── partners.json
│   │   ├── faqs.json
│   │   ├── decor.json
│   │   └── gallery.json
│   └── tutorials/                    # 📝 TUTORIALS — návody pre Natáliu
│       ├── README.md                 # Hlavný návod pre Natáliu
│       ├── saty.md                  # Návod: Svadobné šaty
│       ├── sluzby.md                # Návod: Služby a ceny
│       ├── partneri.md              # Návod: Partneri
│       ├── faq.md                   # Návod: FAQ
│       └── galeria.md               # Návod: Galéria
│
├── docs/                             # 📚 TECHNICAL DOCUMENTATION
│   ├── 01-specs/                     # ✅ SPECS-DRIVEN
│   ├── 02-architecture/              # Technical architecture
│   ├── 03-guides/                    # Operational guides
│   └── 04-notes/                     # Internal notes
│
├── src/                              # 💻 SOURCE CODE
│   ├── components/                   # Astro + React components
│   ├── data/                         # Config (site.ts, content.ts)
│   ├── layouts/                     # Page layouts
│   ├── lib/                          # Utilities & i18n
│   └── pages/                        # Astro pages & API
│
├── e2e/                              # 🧪 E2E TESTS (Playwright)
├── testing/                          # 🧪 UNIT TESTS (Vitest)
├── public/                          # 🖼️ STATIC ASSETS (Favicon, fonts, robots.txt)
│
├── .kilo/                            # 🤖 KILO CLI CONFIG
├── .github/workflows/               # 🔄 CI/CD
│
├── AGENTS.md                        # 🤖 AI ASSISTANT INSTRUCTIONS
├── CLAUDE.md                        # 🤖 CODE INTELLIGENCE (GitNexus)
└── README.md                        # 📖 THIS FILE
```

## Pre Natáliu → `/content/tutorials/`

Všetok obsah, ktorý chceš meniť, sa nachádza v priečinku `content/`.
- **JSON dáta:** v `content/json/`
- **Obrázky:** v `content/images/`
- **Návody:** v `content/tutorials/` (začni súborom `README.md`)

## Stack

- **Framework:** Astro 6.x (static output with on-demand API)
- **Performance:** 100% static prerendering for all pages, SSR only for `/api/*`
- **UI:** shadcn/ui + Tailwind CSS v4
- **Email:** Resend (booking form)
- **Testing:** Vitest (69 unit) + Playwright (121 E2E)
- **CI:** GitHub Actions (unit + e2e on push)
- **Hosting:** Vercel (auto-deploy)

## Commands

```bash
npm run dev           # local dev server (port 4321)
npm run build         # production build
npm run test          # unit tests (69)
npm run test:e2e      # E2E tests (121)
```

## USP

1. Transparent prices online — only salon in the region
2. Cheapest in the region — fitting from 12€
3. Dress consignment — nobody else does it
4. Personal approach — Natália knows every bride

## SEO & LLM Optimization

- RSS feed (`/rss.xml`)
- OpenSearch (`/opensearch.xml`)
- Dublin Core metadata
- Schema.org (Organization, LocalBusiness, HowTo, Product, Service, FAQ, BreadcrumbList)
- Sitemap + robots.txt (LLM-optimized: GPTBot, Claude, PerplexityBot)
- hreflang tags for SK/EN

## Contact

info@magicroom.sk · +421 950 490 323
# MagicRoom — Wedding Salon Website

> ⚠️ **SPECS-DRIVEN DEVELOPMENT** — All decisions start from `docs/01-specs/` — check there first!

**Wedding salon in Martin, Slovakia. Small, personal, fair prices.**

## Quick Info

| | |
|---|---|
| **Stack** | Astro 6.x + Tailwind v4 + shadcn/ui + React |
| **Tests** | 69 unit + 121 E2E (all passing) |
| **Status** | ✅ Live on Vercel |
| **Docs** | See `docs/01-specs/` for specs-driven source of truth |

## Quick Start

```bash
npm run dev      # localhost:4321
npm run build   # production build
npm run test    # 69 unit tests
npm run test:e2e # 121 E2E tests
```

## Project Structure

```
magicroom-mt/
├── docs/                              # 📚 DOCUMENTATION (SOURCE OF TRUTH)
│   ├── 01-specs/                     # ✅ SPECS-DRIVEN
│   │   ├── research/                 # Market & audience research
│   │   ├── strategies/               # SEO, UX, conversion strategies
│   │   ├── SPEC-sk.md                # Project specification
│   │   └── roadmap-sk.md             # Implementation status
│   ├── 02-architecture/              # Technical architecture
│   └── 03-guides/                    # Operational guides
│
├── src/                              # 💻 SOURCE CODE
│   ├── components/                   # Astro + React components
│   ├── data/                         # Content & config (site.ts, content.ts)
│   ├── layouts/                     # Page layouts
│   ├── lib/                          # Utilities & i18n
│   └── pages/                        # Astro pages & API
│
├── e2e/                              # 🧪 E2E TESTS (Playwright)
├── testing/                          # 🧪 UNIT TESTS (Vitest)
├── content/                          # 📦 CMS CONTENT (dresses JSON)
├── public/                          # 🖼️ STATIC ASSETS
│
├── .kilo/                            # 🤖 KILO CLI CONFIG
├── .github/workflows/               # 🔄 CI/CD
├── .claude/                         # 🤖 CLAUDE CODE CONFIG
│
├── AGENTS.md                        # 🤖 AI ASSISTANT INSTRUCTIONS
├── CLAUDE.md                        # 🤖 CODE INTELLIGENCE (GitNexus)
└── README.md                        # 📖 THIS FILE
```

## Stack

- **Framework:** Astro 6.x (static + SSR for API)
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
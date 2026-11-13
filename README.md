# MagicRoom (`magicroom.sk`)

Bilingual (Slovak / English) production website for the MagicRoom wedding salon in Martin, Slovakia: **[www.magicroom.sk](https://www.magicroom.sk)**.

Built spec-first from `0-docs/10-SPEC-sk.md` with content separated into plain JSON files under `1-content/02-json/`, so the salon owner updates dress catalogs, pricing, FAQs, partner links, and blog posts directly in the GitHub web interface using the Slovak step-by-step guides in `1-content/03-tutorials/`.

## Pre Natáliu (`1-content/03-tutorials/`)

Všetok obsah stránky, ktorý bežne upravuješ (šaty, ceny, služby, otázky, galéria, blog), je oddelený od kódu v priečinku `1-content/`:

- **Návody krok za krokom:** `1-content/03-tutorials/README.md` (a samostatné návody `saty.md`, `sluzby.md`, `galeria.md`, `decor.md`, `faq.md`, `blog.md`, `partneri.md`)
- **Texty a cenníky (JSON):** `1-content/02-json/`
- **Fotky šiat, výzdoby a salónu:** `1-content/01-images/`
- **Admin rozhranie:** `/admin/login`

## Repository layout

```
magicroom-mt/
├── 0-docs/                  # Specs, bilingual workflow, SEO/UX notes, architecture
│   ├── 10-SPEC-sk.md        # Functional specification
│   ├── 30-bilingual-procedure.md
│   └── 31-deployment.md
├── 1-content/               # Content layer edited independently of code
│   ├── 00-static/           # Static files served at root (robots.txt, llms.txt, favicons)
│   ├── 01-images/           # Dress, decor, gallery, and UI assets (processed by Sharp)
│   ├── 02-json/             # Structured SK/EN catalog data (dresses, services, faqs, blog...)
│   └── 03-tutorials/        # Plain-language Slovak editing guides for the salon owner
├── 2-src/                   # Astro 6 application source
│   ├── 02-components/       # Astro & UI components (forms, templates, layout)
│   ├── 03-data/             # Typed content loaders & site configuration
│   ├── 04-layouts/          # Page shells & metadata
│   ├── 05-lib/              # i18n helpers & utilities
│   ├── 06-pages/            # SK/EN routes, /admin/*, and /api/* endpoints
│   └── 07-styles/           # Tailwind CSS v4 styles
└── 3-tests/
    ├── 01-unit/             # Vitest unit & data-integrity suite (104 tests)
    └── 02-e2e/              # Playwright end-to-end checks (165 tests, 8 CI shards)
```

## Stack and CI

- **App:** Astro 6 (static output with Vercel adapter for `/api/*` and `/admin/*`), TypeScript, Tailwind CSS v4, PhotoSwipe, Resend
- **Testing:** 104 Vitest unit tests (`npm test`) and 165 Playwright E2E checks (`npm run test:e2e`) running across 8 parallel shards in `.github/workflows/test.yml`
- **Deployment:** Automatic Vercel builds on `main` alongside `.github/workflows/deploy.yml`
- **Search and structured data:** `hreflang` pairs for SK/EN routes, filtered XML sitemap, RSS (`/rss.xml`), OpenSearch (`/opensearch.xml`), `llms.txt`, and `Schema.org` JSON-LD (`LocalBusiness`, `Product`, `Service`, `FAQPage`, `HowTo`, `BreadcrumbList`)

## Commands

Requires Node.js `>= 22.12.0`:

```bash
npm ci
npm run dev        # local Astro dev server at http://localhost:4321
npm test           # Vitest unit suite (104 tests)
npm run build      # production static + Vercel adapter build
npm run test:e2e   # Playwright E2E suite (165 tests)
```

## Contact

`info@magicroom.sk` · `+421 950 490 323`

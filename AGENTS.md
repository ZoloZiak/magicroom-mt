# MagicRoom — Project Instructions

## ⚠️ SPECS-DRIVEN DEVELOPMENT
All decisions start from `docs/01-specs/`. This is the source of truth — do not duplicate specs content elsewhere.

## Documentation Structure
```
docs/
├── 01-specs/              # SOURCE OF TRUTH - Start here
│   ├── research/          # Market & audience research
│   ├── strategies/       # SEO, UX, conversion strategies
│   ├── SPEC-sk.md        # Project specification
│   └── roadmap-sk.md     # Implementation status
│
├── 02-architecture/      # Technical architecture
└── 03-guides/            # Operational guides
```

## Auto-start
Pri otvorení projektu Kilo automaticky:
1. Skontroluje či beží dev server na porte 4321
2. Ak nebeží, spustí `npm run dev` v pozadí
3. Nájde všetky .ts/.astro súbory v src/ pre pochopenie štruktúry
4. Pri prvom interakte poskytne súhrn: názov, stack, dostupné skripty, počet stránok/komponentov

## About
MagicRoom is a wedding salon website in Martin, Slovakia. Built with Astro 6.x, Tailwind CSS v4, shadcn/ui. Deployed on Vercel.

## Team
- **arciarchitekt** — Zolo Žiak, project owner & architect
- **Natália** — salon owner (Natália Ondrejková). Final say on content, prices, design.

## Stack
- **Framework:** Astro 6.x (static + SSR)
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui + React
- **Email:** Resend API
- **Hosting:** Vercel

## Commands
```bash
npm run build     # Build project
npm run dev       # Local dev server
npm run test      # Unit tests (69)
npm run test:e2e  # E2E tests (121)
```

## Bilingual Website

| Slovak | English |
|--------|---------|
| `/` | `/en` |
| `/sluzby` | `/en/services` |
| `/o-nas` | `/en/about` |
| `/kontakt` | `/en/contact` |
| `/svadobne-saty` | `/en/dresses` |
| `/galeria` | `/en/galeria` |
| `/partneri` | `/en/partners` |
| `/blog` | `/en/blog` |

## Current Status (2026-04-06)

### ✅ Done
- Image optimization (local assets)
- Fonts localization (local)
- Translations centralized
- EN URLs: /en/contact, /en/services, /en/about (not /en/kontakt, etc.)
- Build + 69 unit + 121 E2E tests pass
- Mobile menu rewritten (clean code, 15 tests)
- DEFAULT_KEYWORDS + LLM robots.txt
- Docs reorganized: SPECS-DRIVEN hierarchy

### ⏸️ Waiting
- Partner real data (need from Natália)

## GitNexus 
Run `npx gitnexus analyze` to update index after changes.

## Specs Reference
When working on any feature:
1. Check `docs/01-specs/SPEC-sk.md` for design/tech specs
2. Check `docs/01-specs/roadmap-sk.md` for implementation status
3. Check `docs/01-specs/research/` for market context
4. Check `docs/01-specs/strategies/` for strategy docs

---
*Updated: 2026-04-06*
# MagicRoom — Project Instructions

## ⚠️ CRITICAL: READ README.md FIRST
When opening this project, you MUST:
1. **Read `README.md` completely** — it contains the project structure and entry points
2. **Read `docs/README.md`** — it explains the SPECS-DRIVEN hierarchy
3. **Check `docs/01-specs/roadmap-sk.md`** for current implementation status
4. **Check `docs/01-specs/SPEC-sk.md`** for design/tech specifications

DO NOT assume or guess project structure — always verify from docs.

## ⚠️ SPECS-DRIVEN DEVELOPMENT
All decisions start from `docs/01-specs/` — this is the source of truth.
- **NEVER** duplicate specs content elsewhere
- **ALWAYS** check docs/01-specs/ before making decisions
- **NEVER** create new docs without checking if they belong in 01-specs/

## Auto-start (MUST FOLLOW THIS ORDER)

When opening this project, you MUST execute these steps in order:

### Step 1: Read Documentation (CRITICAL)
1. **Read `README.md` completely** — understand project structure
2. **Read `docs/README.md`** — understand SPECS-DRIVEN hierarchy
3. **Read `docs/01-specs/SPEC-sk.md`** — design/tech specifications
4. **Read `docs/01-specs/roadmap-sk.md`** — current implementation status

### Step 2: Verify Environment
1. Check if dev server is running on port 4321
2. If not, start `npm run dev` in background
3. Run quick sanity check: `npm run test` should pass

### Step 3: Provide Summary
After completing steps 1-2, provide this summary:
- Project name & type
- Current SPECS-DRIVEN status (what's done vs pending)
- Available commands
- Key architectural decisions from docs/01-specs/

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
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
5. **Check `docs/04-notes/`** — internal notes (vulnerabilities, refactoring)

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
- Notes from docs/04-notes/ if any

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
npm run test:e2e  # E2E tests (135)
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
- EN URLs: /en/contact, /en/services, /en/about
- Build + 69 unit + 135 E2E tests pass
- Mobile menu rewritten (clean code, 15 tests)
- DEFAULT_KEYWORDS + LLM robots.txt
- Docs reorganized: SPECS-DRIVEN hierarchy
- **Data refactored to JSON** — `/data/*.json` centralizes all content
- **Tutorials for Natália** — `/tutorials/` with simple guides

### ⏸️ Waiting
- Partner real data (need from Natália)
- Dress photos + JSON data
- Salon interior photos for gallery

### ⚠️ Alerts
- Dependabot: path-to-regexp, defu (High) — see `docs/04-notes/vulnerabilities.md`

## For Natália
- **Tutorials:** `/tutorials/` — simple guides for editing content via GitHub
- **Data files:** `/data/*.json` — JSON files to edit
- **GitHub:** https://github.com/ziak-z/magicroom-mt/tree/main/tutorials

## File Reference

| Path | Description |
|------|-------------|
| `/tutorials/` | Natália Tutorials (start here) |
| `/data/*.json` | Content (edit via GitHub) |
| `/docs/04-notes/` | Internal notes & alerts |
| `/docs/01-specs/` | SPECS-DRIVEN source of truth |

## GitNexus 
Run `npx gitnexus analyze` to update index after changes.

## Specs Reference (ALWAYS CHECK FIRST)
When working on any feature, you MUST check in this order:
1. ✅ `docs/01-specs/SPEC-sk.md` — design/tech specs
2. ✅ `docs/01-specs/roadmap-sk.md` — implementation status
3. ✅ `docs/01-specs/research/` — market context
4. ✅ `docs/01-specs/strategies/` — strategy docs
5. ✅ `docs/02-architecture/` — technical decisions
6. ✅ `docs/03-guides/` — operational guides
7. ✅ `docs/04-notes/` — internal notes

---
*Updated: 2026-04-06*
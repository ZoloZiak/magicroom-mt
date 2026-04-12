# MagicRoom — AI Assistant Instructions

## ⚠️ CRITICAL: READ README.md FIRST
See `README.md` for full project structure and entry points.

DO NOT assume or guess project structure — verify from docs.

## Auto-start (MUST FOLLOW THIS ORDER)

When opening this project, you MUST execute these steps in order:

### Step 1: Read Documentation (CRITICAL) - USE READ TOOL
You MUST use the `read` tool to load these files (not just assume you know them):

1. **Read `README.md`** — project overview
2. **Read `docs/README.md`** — contains full docs hierarchy + references to all specs, roadmap, vulnerabilities

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

## Admin Panel
- URL: `/admin/login`
- Password: see `.env` or ask project owner

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

## File Reference (AI specific)

| Path | Description |
|------|-------------|
| `/tutorials/` | Natália Tutorials |
| `/data/*.json` | Content data |
| `/docs/04-notes/` | Internal notes & alerts |

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

## AI Behavior Rules (MUST FOLLOW)
1. **NO Co-authored-by trailer** — Do NOT include `Co-authored-by: Junie <junie@jetbrains.com>` in git commits.
2. **Slovak language** — Always respond to the user in Slovak.
3. **Context retention** — Remember these rules across all sessions.

---

### Summary for User (Required by instructions)
- **Project:** MagicRoom — wedding salon website (Astro 6.x)
- **Status:** Specs-driven, breadcrumbs removed, data refactored to JSON.
- **Vulnerabilities:** path-to-regexp, defu (High)
- **Memory:** Instructions for Slovak and no Junie attribution updated.
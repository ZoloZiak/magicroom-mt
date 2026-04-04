# MagicRoom — Project Instructions

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
npm run test      # Unit tests (56)
npm run test:e2E  # E2E tests (59)
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

## Current Status (2026-04-04)

### ✅ Done
- Image optimization (local assets)
- Fonts localization (local)
- Translations centralized
- EN URLs: /en/contact, /en/services, /en/about (not /en/kontakt, etc.)
- Build + 56 unit + 59 E2E tests pass
- P0 fixes (EN header logo, missing blog posts)
- /galeria, /partneri in nav

### ⏸️ Waiting
- Partner real data (need from Natália)

## GitNexus 
Run `npx gitnexus analyze` to update index after changes.

## Deployment
Push to main → Vercel auto-deploys.

---
*Updated: 2026-04-04*
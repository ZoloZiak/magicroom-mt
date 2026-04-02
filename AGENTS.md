# MagicRoom — Project Instructions

## About
MagicRoom is a wedding salon website in Martin, Slovakia. Built with Astro 6.x, Tailwind CSS v4, shadcn/ui. Deployed on Vercel.

## Stack
- **Framework:** Astro 6.x (static + SSR for API routes)
- **Styling:** Tailwind CSS v4 (design tokens in `src/styles/global.css`)
- **Components:** shadcn/ui + React (lucide-react icons)
- **Email:** Resend API (booking form → mt.magicroom@gmail.com)
- **Hosting:** Vercel (auto-deploy on git push to main)
- **Owner:** Natália Ondrejková
- **Collaborator:** Grzegorz (Polish, speaks Polish in chat)

## Key Rules
1. **Commit messages in English** — Grzegorz reads them
2. **Colors:** primary `#B87A8E` (rose), primary-900 `#4A2E3A` (bordo), accent `#C9A86C` (gold)
3. **No hardcoded brown shadows** — use `rgba(74,46,58,...)` or `rgba(53,31,42,...)`
4. **Mobile menu:** pure inline styles + JS (no Tailwind classes!)
5. **Images:** salon photos in `public/images/salon/`, logo in `public/images/logo.jpeg`
6. **Data:** all content in `src/data/content.ts`, config in `src/data/site.ts`

## Deployment
- Push to `main` → Vercel auto-deploys
- Manual: `source ~/.nvm/nvm.sh && vercel --prod --yes`
- Production URL: https://magicroom-mt.vercel.app

## Commands
- `npm run build` — build project
- `npm run dev` — local dev server
- `source ~/.nvm/nvm.sh && node ...` — always source nvm first

## File Structure
- `src/pages/` — Astro pages
- `src/components/layout/` — Header, Footer, CTASection, Sparkles, etc.
- `src/components/forms/` — BookingForm
- `src/components/ui/` — shadcn/ui primitives
- `src/data/` — content.ts (data), site.ts (config)
- `src/styles/global.css` — Tailwind theme + design tokens
- `docs/` — project documentation (SK + PL)
- `referencie/` — raw salon photos (reference, not deployed)

## Email
- `from:` = `rezervacie@magicroom.sk` (verified domain)
- `to:` = `mt.magicroom@gmail.com` (Natália)
- Site email: `info@magicroom.sk`

# MagicRoom — Nová webová stránka

Svadobný salón v Martine. Malý, osobný, s férovými cenami.

## Štruktúra repozitára

```
magicroom-mt/
├── .kilo/                          — Kilo CLI config
│   ├── agent/                      — Custom agents
│   └── command/                    — Slash commands (/deploy, /build, /colors)
├── AGENTS.md                       — Project instructions pre Kilo
├── README.md                       — Tento súbor
│
├── research/                       — Prieskum trhu, konkurencia
│   ├── regional-market.sk.md
│   ├── regional-market.en.md
│   └── magicroom-strategia.pdf
│
├── plan/                           — Strategické dokumenty
│   ├── SPEC.sk.md                  — Hlavná špecifikácia (SK)
│   ├── SPEC.en.md                  — Špecifikácia (EN)
│   ├── seo-strategy.sk.md
│   ├── seo-strategy.en.md
│   ├── ux-strategy.sk.md
│   ├── ux-strategy.en.md
│   ├── roadmap.sk.md
│   └── roadmap.en.md
│
├── docs/                           — Technická dokumentácia
│   ├── component-architecture.sk.md — Architektúra komponentov
│   ├── component-architecture.en.md
│   ├── color-palette.md            — Farebná škála + história
│   └── deployment.md               — Deploy inštrukcie
│
├── testing/                        — Testy (plánované)
│   └── README.md
│
├── referencie/                     — Raw fotky zo salónu (36 ks)
│
├── public/                         — Statické súbory
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   ├── site.webmanifest
│   └── images/
│       ├── logo.jpeg
│       └── salon/                  — Optimalizované fotky
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
│   │   └── ui/                     — shadcn/ui komponenty
│   ├── data/
│   │   ├── content.ts              — Všetok obsah (služby, ceny, galéria)
│   │   └── site.ts                 — Konfigurácia (kontakt, navigácia)
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
│   │   ├── index.astro
│   │   ├── o-nas.astro
│   │   ├── sluzby.astro
│   │   ├── kontakt.astro
│   │   ├── komisny-predaj.astro
│   │   └── prenajom-dekoracii.astro
│   └── styles/
│       └── global.css              — Tailwind theme + design tokens
│
├── .env.example
├── .gitignore
├── astro.config.mjs
├── components.json
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Stack

- **Framework:** Astro 6.x
- **UI:** shadcn/ui + Tailwind CSS
- **Email:** Resend (booking form)
- **Testing:** Vitest (39 unit tests)
- **CI:** GitHub Actions (test + build on push)
- **Hosting:** Vercel

## Commands

```bash
npm run dev           # local dev server
npm run build         # production build
npm run test          # run 39 unit tests
npm run test:watch    # watch mode
npm run test:coverage # with coverage report
```

## USP

1. Transparentné ceny online — jediný salón v regióne
2. Najlacnejšie v regióne — skúška od 12€
3. Komis šiat — nikto iný to nerobí
4. Osobný prístup — Natália pozná každú nevestu

## Kontakt

mt.magicroom@gmail.com · +421 950 490 323
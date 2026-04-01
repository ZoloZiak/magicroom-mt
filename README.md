# MagicRoom — Nová webová stránka

Svadobný salón v Martine. Malý, osobný, s férovými cenami.

## Štruktúra repozitára

```
magicroom-mt/
├── docs/                           — Dokumentácia (výskum, stratégia, špecifikácie)
│   ├── SPEC-sk.md                  — Hlavná špecifikácia projektu (SK)
│   ├── SPEC.md                     — Špecifikácia (PL)
│   ├── research-regional-market-sk.md — Prieskum trhu a konkurencie (SK)
│   ├── research-regional-market.md
│   ├── seo-local-strategy-sk.md    — SEO stratégia (SK)
│   ├── seo-local-strategy.md
│   ├── ux-conversion-strategy-sk.md — UX a konverzná stratégia (SK)
│   ├── ux-conversion-strategy.md
│   ├── component-architecture-sk.md — Architektúra komponentov (SK)
│   ├── component-architecture.md
│   ├── roadmap-sk.md               — Časový plán (SK)
│   ├── roadmap.md
│   ├── magicroom-strategia.pdf     — Strategický raport pre vlastníčku
│   └── magicroom-strategia.html    — Zdrojový HTML pre PDF
├── public/                          — Statické súbory
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── animations/                  — GSAP/scroll animácie
│   │   ├── index.js
│   │   ├── basic.js
│   │   ├── blog.js
│   │   ├── cards.js
│   │   ├── form.js
│   │   ├── hero.js
│   │   ├── hover.js
│   │   ├── loops.js
│   │   ├── scroll.js
│   │   └── slovakia-culture.js
│   ├── components/
│   │   ├── forms/                   — Formuláre
│   │   │   └── BookingForm.astro
│   │   ├── layout/                  — Layout komponenty
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── ScrollToTop.astro
│   │   │   └── WhatsAppFAB.astro
│   │   └── ui/                      — shadcn/ui komponenty (15 ks)
│   │       ├── accordion.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── skeleton.tsx
│   │       ├── tabs.tsx
│   │       └── textarea.tsx
│   ├── data/                        — Dáta a konfigurácia
│   │   ├── content.ts
│   │   └── site.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/                       — Astro stránky
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── svadobne-trendy-2026.astro
│   │   ├── index.astro
│   │   ├── komisny-predaj.astro
│   │   ├── kontakt.astro
│   │   ├── o-nas.astro
│   │   ├── prenajom-dekoracii.astro
│   │   └── sluzby.astro
│   └── styles/
│       └── global.css
├── .gitignore
├── astro.config.mjs
├── components.json
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Stack

- **Framework:** Astro 5.x
- **UI:** shadcn/ui + Tailwind CSS
- **Backend:** Supabase
- **Hosting:** Vercel

## USP

1. Transparentné ceny online — jediný salón v regióne
2. Najlacnejšie v regióne — skúška od 12€
3. Komis šiat — nikto iný to nerobí
4. Osobný prístup — Natália pozná každú nevestu

## Kontakt

mt.magicroom@gmail.com · +421 950 490 323
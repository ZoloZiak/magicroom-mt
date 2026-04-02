# Testing — MagicRoom

## Spustenie testov

```bash
npm run test          # jednorazovo
npm run test:watch    # watch mode
npm run test:coverage # s coverage reportom
```

## Framework

**Vitest** — kompatibilný s Astro/Vite, rýchly, ESM-native.

## CI/CD

GitHub Actions spúšťa testy automaticky pri každom `git push` (`.github/workflows/test.yml`).

## Štruktúra

```
testing/
├── site.test.ts       — 18 testov (kontakt, navigácia, schema.org)
├── content.test.ts    — 21 testov (služby, ceny, galéria, dekorácie)
└── README.md          — Tento súbor
```

## Test coverage (39 testov celkom)

### site.test.ts — 18 testov
- Contact info: telefón (SK formát), email (@magicroom.sk), adresa (Martin, Záturčie)
- Navigácia: 6 odkazov, správne stránky (/o-nas, /sluzby, /kontakt, /blog)
- Social links: Facebook, Instagram (valid URLs)
- WhatsApp: URL builder, encoded message
- Utilities: toAbsoluteUrl, copyright year, booking href
- Schema.org: WebSite, Organization (Natália = founder), LocalBusiness (Martin = areaServed)

### content.test.ts — 21 testov
- Homepage: 3 stats, 6 offer cards (all have title/price/description/href/cta/icon), 4 trust reasons, 3 process steps
- Služby: 3 balíky (middle = recommended), 4 extra services, 4 booking features
- Galéria: 6+ photos (src/alt/title), IMAGE_ASSETS (hero, dresses, founder, decorMain), salon photos (saty-ruzove, sachovnica, interier)
- Dekorácie: 3+ categories, items with name+price, 3+ policies
- Ostatné: founder story (quote+paragraphs), 3+ FAQs, 4 consignment steps

## Plánované
- API testy (booking endpoint — `/api/booking`)
- E2E testy (Playwright — navigácia, formulár, hamburger menu)

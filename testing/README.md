# Testing — MagicRoom

## Running Tests

```bash
npm run test          # run once
npm run test:watch    # watch mode
npm run test:coverage # with coverage report
```

## Framework

**Vitest** — compatible with Astro/Vite, fast, ESM-native.

## CI/CD

GitHub Actions runs tests automatically on every `git push` (`.github/workflows/test.yml`).

## Structure

```
testing/
├── site.test.ts       — 18 tests (config, navigation, schema.org)
├── content.test.ts    — 25 tests (services, prices, gallery, catalog)
└── README.md          — This file
```

## Test Coverage (43 tests total)

### site.test.ts — 18 tests
- Contact info: phone (SK format), email (@magicroom.sk), address (Martin, Záturčie)
- Navigation: 7 links, correct pages (/o-nas, /sluzby, /svadobne-saty, /kontakt, /blog)
- Social links: Facebook, Instagram (valid URLs)
- WhatsApp: URL builder, encoded message
- Utilities: toAbsoluteUrl, copyright year, booking href
- Schema.org: WebSite, Organization (Natália = founder), LocalBusiness (Martin = areaServed)

### content.test.ts — 25 tests
- Homepage: 3 stats, 6 offer cards, 4 trust reasons, 3 process steps
- Services: 3 packages (middle = recommended), 4 extra services, 4 booking features
- Gallery: 6+ photos, IMAGE_ASSETS, salon photos
- Decorations: 3+ categories, items with name+price, 3+ policies
- Dress catalog: 6 dresses with required fields, featured, new/consignment types
- Other: founder story, 3+ FAQs, 4 consignment steps

## Planned
- API tests (booking endpoint — `/api/booking`)
- E2E tests (Playwright — navigation, form, hamburger menu)

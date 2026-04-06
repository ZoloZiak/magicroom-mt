# MagicRoom — Session Maintenance & Procedures

Tento dokument slúži na odovzdávanie znalostí medzi session AI asistenta (Junie).

## Aktuálny stav (k 6. aprílu 2026)
- **Projekt:** Astro 6.x, Tailwind v4, shadcn/ui.
- **Multijazyčnosť:** SK (default) a EN (pre medzinárodných študentov).
- **Testy:** 69 unit testov + 121 E2E testov (vrátane 15 mobile menu testov).
- **Mobile menu:** Rewritten to use static HTML with Tailwind + inline styles for animations.
- **EN slugs:** English URLs (/en/contact, /en/services, not /en/kontakt, etc.)
- **SEO:** hreflang tags, Schema.org (Product, Service, FAQPage), DEFAULT_KEYWORDS added.

## Procedúry pri začatí novej session

1. **Overenie prostredia:**
   - Skontroluj `.env` súbor (musí obsahovať `RESEND_API_KEY`).
   - Ak chýba, použi `.env.example` ako šablónu.

2. **Testovanie pred pushom:**
   - Vždy spusti `npm run build && npm run test`.
   - Projekt musí byť zostaviteľný (Astro build).
   - Spusti E2E testy: `npm run test:e2e`.

3. **Pridávanie nových stránok:**
   - Ak pridávaš SK stránku (napr. `src/pages/nova-stranka.astro`), musíš pridať aj EN verziu do `src/pages/en/new-page.astro`.
   - **DÔLEŽITÉ:** Zaregistruj mapovanie slugov v `src/lib/i18n.ts` do konštanty `SLUG_MAP`, inak nebude fungovať prepínanie jazykov (vyhodí 404).

4. **Lokalizácia:**
   - Všetky texty v komponentoch (najmä Layout, Header, Footer) musia ísť cez `src/lib/translations.ts`.
   - Nepoužívaj `isEn` podmienky s hardcoded textom v komponentoch, ak je to možné.

## GitHub Workflow
- Commity rob pod menom `ZoloZiak` s emailom `zoloziak@outlook.sk` (ak nie je inštruované inak).
- Pridávaj trailer: `Co-authored-by: Junie <junie@jetbrains.com>`.

## Špecifické pre nórskych študentov
- Stratégia je zameraná na **Occasion Wear** (spoločenské šaty) skôr než na svadby.
- Kľúčové termíny: `Julebord`, `Selskapskjoler`, `Ballkjoler`, `Galla`.
- V EN verzii (najmä `index.astro` a `services.astro`) prioritizujeme tieto termíny.

## Mobile Menu (2026-04-06)
- **ID elements:** `#menu-toggle`, `#mobile-menu`, `#menu-backdrop`, `#menu-panel`, `#menu-close`
- **Approach:** Static HTML with Tailwind classes + inline styles for initial state and JS for open/close
- **ARIA:** `aria-expanded`, `aria-controls`, `role="dialog"`, `aria-modal`, `aria-label`
- **Tests:** 15 E2E tests covering: visibility, open/close, animations, ARIA, links, phone, booking button, logo

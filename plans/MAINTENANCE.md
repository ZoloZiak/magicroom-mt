# MagicRoom — Session Maintenance & Procedures

Tento dokument slúži na odovzdávanie znalostí medzi session AI asistenta (Junie).

## Aktuálny stav (k 5. aprílu 2026)
- **Projekt:** Astro 6.x, Tailwind v4, shadcn/ui.
- **Multijazyčnosť:** SK (default) a EN (pre medzinárodných študentov).
- **Opravy:** Vyriešený problém so 404 pri prepínaní jazykov pomocou `SLUG_MAP` v `src/lib/i18n.ts`.
- **Refaktoring:** `Header.astro` a `Footer.astro` sú teraz zjednotené a používajú preklady zo `src/lib/translations.ts` namiesto hardcoded podmienok.
- **SEO:** Pridané `hreflang` tagy v `Layout.astro`.

## Procedúry pri začatí novej session

1. **Overenie prostredia:**
   - Skontroluj `.env` súbor (musí obsahovať `RESEND_API_KEY`).
   - Ak chýba, použi `.env.example` ako šablónu.

2. **Testovanie pred pushom:**
   - Vždy spusti `./scripts/verify.ps1` (PowerShell) alebo `npm run build && npm run test`.
   - Projekt musí byť zostaviteľný (Astro build).

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

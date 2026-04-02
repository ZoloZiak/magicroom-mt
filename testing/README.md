# Testing — MagicRoom

## Status: Žiadne testy zatiaľ

## Plánované testy

### Unit testy
- `src/data/content.ts` — validácia dátových štruktúr
- `src/data/site.ts` — konzistencia konfigurácie
- `src/lib/utils.ts` — utility funkcie

### Integration testy
- `/api/booking` — API endpoint test (Resend email send)
- Formulár — validácia polí, submit flow

### E2E testy
- Navigácia medzi stránkami
- Mobilný hamburger menu
- Booking formulár end-to-end

## Nástroje (navrhované)
- **Vitest** — unit testy (kompatibilný s Astro)
- **Playwright** — E2E testy

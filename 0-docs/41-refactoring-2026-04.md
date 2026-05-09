# Refactoring — 2026-04-06

## Čo sa spravilo

### 1. Centralizované dáta do JSON
- `data/services.json` — balíky a extra služby
- `data/dresses.json` — svadobné šaty
- `data/partners.json` — partneri
- `data/faqs.json` — FAQ
- `data/decor.json` — dekorácie
- `data/gallery.json` — galéria

### 2. Návody pre Natáliu
- `tutorials/` — jednotný folder s návodmi
- `tutorials/README.md` — hlavný návod
- Jednotlivé návody: saty, sluzby, partneri, faq, galeria

### 3. Code refactoring
- `src/data/content.ts` — teraz načítava z JSON súborov
- Spätne kompatibilné exporty pre testy

## Čo treba od Natálie

- [ ] Realistické dáta partnerov (mená, kategórie, linky)
- [ ] Fotky šiat + JSON
- [ ] Fotky interiéru do galérie

## Testy

✅ 69 unit + 135 E2E — všetko prešlo
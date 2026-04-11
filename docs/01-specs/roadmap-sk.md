# Roadmap & Timeline — MagicRoom

## Poznámka k rozsahu
MagicRoom je malý salón s jednou osobou. Stránka má byť jednoduchá, prehľadná a funkčná — nie veľký e-commerce portál. Priorita: rýchle spustenie, základné funkcie, nízke náklady.

## 1. Priority implementácie

### Fáza 1: MVP (2-3 týždne)

**Ciele:**
- Fungujúca stránka so všetkými podstránkami
- Kontaktný formulár + WhatsApp → primárne komunikačné kanály
- Ceny viditeľné na každej stránke (kľúčový USP)
- Responzívnosť (mobile-first)
- Základné SEO (zameranie na Martin + Turiec)

**Rozsah:**

| Komponent | Status | Poznámky |
|-----------|--------|----------|
| Astro projekt + Tailwind v4 | DONE | Vite plugin @tailwindcss/vite |
| shadcn/ui setup | DONE | |
| Layout (Header, Footer) | DONE | WhatsApp button vždy viditeľný |
| Homepage | DONE | |
| /o-nas | DONE | |
| /sluzby | DONE | |
| /komisny-predaj | DONE | |
| /prenajom-dekoracii | DONE | |
| /kontakt | DONE | |
| Kontaktný formulár | DONE | Email cez Resend (Edge Runtime) |
| WhatsApp FAB | DONE | Floating button |
| Blog | DONE | |
| SEO basics | DONE | Meta tags, sitemap, Schema.org |
| Social proof section | DONE | Google recenzie link v pätičke |
| Google Analytics | DONE | GA4 configured, disabled on local/CI |
| Speed optimization | ✅ DONE | LCP, local assets, i18n consolidation |
| Google Analytics | ✅ DONE | GA4 configured with conversions |
| Google Business Profile | ✅ DONE | Verified and active |
| Jazykové prepínanie (i18n) | ✅ DONE | Consistently using translations.ts |
| Refaktoring Header/Footer | DONE | Zjednotená logika cez preklady |
| SEO Hreflang | DONE | Prepojenie SK/EN verzií |
| API Safety & Edge | ✅ DONE | Zod validácia + Vercel Edge Runtime |
| CI/CD Optimization | ✅ DONE | Playwright sharding + caching |

### Fáza 2: Konverzia (1 týždeň)

**Ciele:**
- Rezervačný formulár (4 polia, validácia)
- Social proof (reálne recenzie, fotky)
- Google Business Profile
- Optimalizácia výkonu

**Rozsah:**

| Komponent | Status | Poznámky |
|-----------|--------|----------|
| Social proof section | DONE | Google recenzie link |
| Google Business Profile | DONE | Overené v Google Search Console |
| Speed optimization | ✅ DONE | LCP, local assets |
| Google Analytics | ✅ DONE | GA4 configured with conversions |

### Fáza 3: Rozšírenie (voliteľné)

**Ciele:**
- Galéria fotiek s lightbox (zoom, fullscreen)
- Blog / poradník ("Ako vybrať svadobné šaty", "Trendy 2026")
- FAQ sekcia s vyhľadávaním
- Portfolio predchádzajúcich svadieb (s povolením klientok)
- Partneri — odporúčaní dodávatelia (fotograf, catering, DJ)
- Online kalendár rezervácií
- Breadcrumbs navigácia (SEO)
- 404 stránka s návratom na homepage

---

### Fáza 4: Medzinárodná expanzia (1-2 týždne)

**Ciele:**
- Osloviť komunitu nórskych študentov v Martine (ANSAM).
- Optimalizovať EN verziu pre "Occasion Wear" (spoločenské šaty).
- Zvýšiť viditeľnosť u cudzincov v regióne Turiec.

**Rozsah:**

| Komponent | Status | Poznámky |
|-----------|--------|----------|
| Audit prekladov pre študentov | DONE | Julebord, Gala, Occasion Wear |
| Podstránka "Occasion Wear" EN | TODO | Špeciálne zameranie na bály |
| Referencie nórskych študentov | TODO | Social proof |
| Kontaktovanie ANSAM Martin | TODO | Potenciálne partnerstvo |

---

## 2. Odhadovaný čas

### Fáza 1 — MVP

| Task | Odhadovaný čas | Osoba |
|------|---------------|-------|
| Projekt Astro + config | 2h | Dev |
| Tailwind v4 + shadcn setup | 1h | Dev |
| Layout components | 3h | Dev |
| Homepage | 4h | Dev |
| Podstránky (5x) | 6h | Dev |
| API & Edge (Resend) | 2h | Dev |
| Kontaktný formulár | 3h | Dev |
| SEO basics | 2h | Dev |
| Testovanie (Vitest + PW) | 3h | Dev |
| **Total** | **~26h** | |

### Fáza 2 — Konverzia

| Task | Odhadovaný čas | Osoba |
|------|---------------|-------|
| Reservation form | 4h | Dev |
| WhatsApp integrácia | 1h | Dev |
| Social proof | 2h | Dev |
| Google Business | 1h | Majiteľ |
| Analytics | 1h | Dev |
| Performance | 2h | Dev |
| **Total** | **~11h** | |

---

## 3. Závislosti

```
Projekt Astro 6.x
    ↓
Tailwind v4 + shadcn
    ↓
Layout (Header, Footer)
    ↓
Edge API setup (Resend)
    ↓
Stránky (Homepage + 5 podstránok)
    ↓
Formuláre (Zod validácia)
    ↓
SEO + Analytics
    ↓
Testovanie (Sharding) + Deploy
```

---

## 4. Riziká a mitigácia

| Riziko | Pravdepodobnosť | Vplyv | Mitigácia |
|--------|-----------------|-------|-----------|
| Meškanie Edge API (Resend) | Nízke | Stredné | Fallback: WhatsApp / direct mail |
| Problémy s responzivitou | Stredné | Vysoké | Testy na skutočných zariadeniach |
| Zložitosť shadcn pre dev | Stredné | Nízke | Dokumentácia shadcn |
| Fotky/assets od klienta | Vysoké | Stredné | Placeholder images, stock |

---

## 5. Definition of Done

### MVP považovaný za hotový, keď:

- [x] Všetky podstránky fungujú a sú responzívne
- [x] Kontaktný formulár posiela email cez Resend (Edge)
- [x] Navigácia funguje na mobile (hamburger menu)
- [x] CTA viditeľné na každej podstránke
- [x] Meta tagy nastavené pre každú stránku
- [x] Sitemap.xml generovaný automaticky
- [x] Lighthouse score > 90 (mobile)
- [x] Žiadne chyby JavaScript v konzole
- [x] Odkazy na sociálne siete fungujú
- [x] Google Business Profile založený

---

## 6. Technologický stack — rozhodnutia

### Vybrané:

| Kategória | Výber | Odôvodnenie |
|-----------|-------|-------------|
| Framework | Astro 6.x | Rýchlosť, SSR islands, komunita |
| UI Library | shadcn/ui | Komponenty, Tailwind v4, prispôsobenie |
| Backend | Resend + Edge Runtime | Emailing, rýchlosť, bezpečnosť (Vercel) |
| Styling | Tailwind v4 | CSS-first engine, @tailwindcss/vite |
| Hosting | Vercel | Astro native, Edge Functions, bezplatný tier |
| Forms | Astro Actions + Zod | Type-safe, server-side validácia |
| Analytics | GA4 + Vercel Analytics | Konverzie, jednoduchosť, súkromie |

### Zvážené alternatívy:

| Kategória | Alternatíva | Prečo nie |
|-----------|-------------|-----------|
| CMS | Sanity / Contentful | Overkill pre malú stránku, CRM-like /content stačí |
| Database | Supabase | Nateraz postačuje JSON v /content/ + Resend |
| Hosting | Netlify | Vercel lepší pre Astro Edge Runtime |
| Analytics | Plausible / Umami | GA4 už nakonfigurované s konverziami |

---

## 7. Budget (voliteľne)

### Mesačné náklady (odhad):

| Služba | Plán | Náklady |
|--------|------|---------|
| Vercel | Hobby | 0€ |
| Resend | Free tier (100 emails/deň) | 0€ |
| Google Analytics | Free | 0€ |
| Doména (magicroom.sk) | .sk doména | ~15€/rok |
| SSL | V cene hostingu | 0€ |
| **Total** | | **~15€/rok** |

### Jednorazové náklady:

| Kategória | Náklady |
|-----------|---------|
| Fotky (stock) | 0-50€ (voliteľne) |
| Redesign loga | 0-200€ (voliteľne) |
| Copywriting | 0€ (ak vlastný) |

---

## 8. Budúci upgrade — Supabase / insforge.dev

Ak počet rezervácií prekročí možnosti emailu (viac ako ~10/deň), pridáme:
- **Supabase** ako databázu pre uchovávanie rezervácií
- Dashboard pre Natáliu na správu rezervácií
- Online kalendár rezervácií (napr. Calendly integrácia)
- Automatické potvrdzovanie termínov

Zatiaľ postačuje email (Resend) + WhatsApp ako fallback.

---

## 9. Ďalšie kroky

10. **Založenie produkčných účtov** — Resend, Vercel atď.
11. **Final audit** — kontrola pred spustením

---

## 10. Aktuálny stav (2026-04-07)

### ✅ HOTOVÉ

| Komponent | Status | Dátum |
|-----------|--------|-------|
| Astro 6.x upgrade | ✅ DONE | 2026-04-06 |
| Tailwind v4 migration | ✅ DONE | 2026-04-06 |
| Vercel Edge Runtime | ✅ DONE | 2026-04-06 |
| Zod validation (schemas) | ✅ DONE | 2026-04-06 |
| CI/CD Optimization (Sharding) | ✅ DONE | 2026-04-06 |
| Content management decision | ✅ DONE | 2026-04-06 |
| i18n Consolidation | ✅ DONE | 2026-04-06 |
| Homepage (SK + EN) | ✅ DONE | 2026-04-03 |
| Služby, O nás, Kontakt (SK + EN) | ✅ DONE | 2026-04-03 |
| Svadobné šaty (Katalóg) | ✅ DONE | 2026-04-03 |
| Blog (SK + EN) | ✅ DONE | 2026-04-03 |
| Kontaktný formulár (Edge API) | ✅ DONE | 2026-04-06 |
| WhatsApp FAB | ✅ DONE | |
| SEO (Hreflang, Schema.org) | ✅ DONE | |
| Google Business Profile | ✅ DONE | |
| GA4 Konverzie | ✅ DONE | |
| E2E & Unit Tests (High coverage) | ✅ DONE | 2026-04-06 |
| LLM-friendly robots.txt | ✅ DONE | |

### 🇬🇧 ANGLICKÁ VERZIA

| Komponent | Status |
|-----------|--------|
| EN Routing ([lang]) | ✅ DONE |
| EN Translations (site.ts) | ✅ DONE |
| EN Content (posts, dresses) | ✅ DONE |
| LanguageSwitcher component | ✅ DONE |
| EN Header & Footer | ✅ DONE |
| BookingForm i18n support | ✅ DONE |

### 🔲 NEROBIŤ (nízka priorita)

| Komponent | Poznámka |
|-----------|----------|
| Galéria fotiek s lightbox | Pridať až keď bude viac fotiek |
| FAQ sekcia s vyhľadávaním | Pridať až keď bude viac otázok |
| Portfolio predchádzajúcich svadieb | Vyžaduje súhlas klientok |

---

## 11. Audit - Komplexné vylepšenia (2026-04-04)

### ✅ UROBENÉ (v audit)

| Úloha | Status | Poznámky |
|-------|--------|----------|
| Image optimization | ✅ DONE | Všetky obrázky presunuté z WordPress do src/assets/ |
| Centralize translations | ✅ DONE | Všetky preklady v translations.ts (vrátane BookingForm a Header) |
| Refactor Header | ✅ DONE | Mobilné menu cez Tailwind, bez inline štýlov |
| API Integration | ✅ DONE | BookingForm napojený na /api/booking |
| FAQ section | ✅ DONE | Implementované na kontaktnej stránke s vyhľadávaním |
| Gallery + Lightbox | ✅ DONE | Pridané na SK + EN stránky |
| Fonts localization | ✅ DONE | Satoshi + DM Sans lokálne |
| EN page URLs (English slugs) | ✅ DONE | /en/contact, /en/about atď. |
| Build + tests pass | ✅ DONE | Verifikované |

**Audit odporúčania (status):**

1. ✅ Optimize Images - DONE
2. ✅ Centralize Translations - DONE
3. ⏸️ Modernize Routing - Preskočené (súčasný stav je prehľadný a funkčný pre malý web)
4. ✅ Localize Fonts - DONE
5. ✅ UI Component Refactor - DONE (Header & Mobile menu)

**P0 - Kritické (opravené):**

| Úloha | Status |
|-------|--------|
| EN Header logo link "/" → "/en" | ✅ DONE |
| Chýbajúce SK blog posty (2) | ✅ DONE |

**P1 - Vysoká priorita:**

| Úloha | Status |
|-------|--------|
| Partner data (fiktívne) | ⏸️ Čaká na reálne dáta od Natálie |
| /galeria v navigácii | ✅ DONE |
| /partneri v navigácii | ✅ DONE |
| EN blog related links | ✅ DONE (žiadne) |
| Blog content management | ✅ DONE (presun do JSON + návod pre Natáliu) |

**P2 - Stredná priorita:**

| Úloha | Status |
|-------|--------|
| Viac šiat do katalógu | ⏸️ |
| Skutočné svadobné fotky | ⏸️ |
| Dress upload mechanism | ⏸️ |
| Viac blog postov | ⏸️ Čaká na obsah od Natálie |

**P3 - Technický dlh:**

| Úloha | Status |
|-------|--------|
| Duplicate GitNexus sekcie | ⏸️ |
| Orphaned files (info.ts, booking.ts) | ✅ DONE |

**P4 - Nice to Have:**

| Úloha | Status |
|-------|--------|
| FAQ sekcia | ✅ DONE |
| Gallery lightbox EN | ✅ DONE |
| Google Business Profile | ✅ DONE |

---

## 12. Admin Panel (2026-04-10)

### ✅ HOTOVÉ

| Komponent | Status | Poznámky |
|-----------|--------|----------|
| Admin login (/admin/login) | ✅ DONE | Heslo: magic2026 |
| Dashboard s analytikou | ✅ DONE | Rezervácie, WhatsApp, kontakty |
| Galéria s uploadom | ✅ DONE | Drag & drop, edit, delete |
| Svadobné šaty management | ✅ DONE | Zoznam šiat z JSON |
| Blog management | ✅ DONE | Články z JSON |
| Dekorácie management | ✅ DONE | Výzdoba z JSON |
| FAQ management | ✅ DONE | FAQ z JSON |
| Partneri management | ✅ DONE | Partneri z JSON |
| Obsah (služby) | ✅ DONE | Úprava služieb |
| Návod pre Natáliu | ✅ DONE | /admin/help |
| GitHub deploy workflow | ✅ DONE | Vercel automaticky |
| Vercel secrets配置 | ✅ DONE | Vercel deploy funguje |

### 📝 Poznámky k implementácii

- Všetky admin stránky sú **statické** (prerender = true) - obrázky sa načítavajú z /content/images/
- JSON súbory sú v `content/json/` - editovateľné cez admin
- Login chránený heslom (bezpečnostné cookies)
- GitHub Actions deploy po push na main

---

## 13. Budúce vylepšenia (20 nápadov)

### 🔧 Funkcie

| Nápad | Priorita | Status |
|-------|----------|--------|
| Rezervačný kalendár (výber dátumu a času) | Nízka | ⏳ |
| Online chat (chatbot pre otázky 24/7) | Nízka | ⏳ |
| Wishlist šiat (ukladanie obľúbených) | Nízka | ⏳ |
| Porovnávač šiat (side-by-side) | Nízka | ⏳ |
| Zákaznícke recenzie na stránke | Stredná | ⏳ |
| Fotogaléria z svadieb (upload od klientok) | Stredná | ⏳ |
| Cenová kalkulačka | Nízka | ⏳ |
| Newsletter (email kurz pre nevesty) | Nízka | ⏳ |

### 🎨 UX/UI (2026-04-10)

| Nápad | Priorita | Status |
|-------|----------|--------|
| Lazy loading obrázkov | Stredná | ✅ Astro `Image` automaticky |
| PWA support | Nízka | ⏭️ Nízka priorita |
| Tmavý režim | Nízka | ⏭️ Nízka priorita |
| Animácie pri scrollovaní | Stredná | ⏭️ Môže spomaliť stránku |
| Väčšie tlačidlá | Nízka | ✅ Button component: `lg: h-12` |

**Poznámka:** CTA tlačidlá majú `hover:-translate-y-0.5` animácie.

### ⚙️ Technické

| Nápad | Priorita | Status |
|-------|----------|--------|
| Obnovenie hesla | Nízka | ⏳ |
| Autosave v admin | Stredná | ⏳ |
| Multi-image upload (hromadný) | Stredná | ⏳ |
| Backup JSON (verziovanie) | Nízka | ⏳ |
| SEO audit (meta optimalizácia) | Stredná | ⏳ |
| Analytics dashboard grafy | Stredná | ⏳ |

---

*Document created: 2026-04-01*
*Version: 1.6 - 2026-04-10*

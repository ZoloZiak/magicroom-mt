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
| Astro projekt + Tailwind | DONE | |
| shadcn/ui setup | DONE | |
| Layout (Header, Footer) | DONE | WhatsApp button vždy viditeľný |
| Homepage | DONE | |
| /o-nas | DONE | |
| /sluzby | DONE | |
| /komisny-predaj | DONE | |
| /prenajom-dekoracii | DONE | |
| /kontakt | DONE | |
| Kontaktný formulár | DONE | Email cez Resend |
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
| Tailwind + shadcn setup | 1h | Dev |
| Layout components | 3h | Dev |
| Homepage | 4h | Dev |
| Podstránky (5x) | 6h | Dev |
| Supabase setup | 2h | Dev |
| Kontaktný formulár | 3h | Dev |
| SEO basics | 2h | Dev |
| Testovanie | 3h | Dev |
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
Projekt Astro
    ↓
Tailwind + shadcn
    ↓
Layout (Header, Footer)
    ↓
Supabase setup
    ↓
Stránky (Homepage + 5 podstránok)
    ↓
Formuláre
    ↓
SEO + Analytics
    ↓
Testovanie + Deploy
```

---

## 4. Riziká a mitigácia

| Riziko | Pravdepodobnosť | Vplyv | Mitigácia |
|--------|-----------------|-------|-----------|
| Meškanie Supabase | Nízke | Stredné | Fallback: formulár mailto |
| Problémy s mobilnosťou | Stredné | Vysoké | Testy na skutočných zariadeniach |
| Zložitosť shadcn pre dev | Stredné | Nízke | Dokumentácia shadcn |
| Fotky/assets | Vysoké | Stredné | Placeholder images, stock |

---

## 5. Definition of Done

### MVP považovaný za hotový, keď:

- [x] Všetky podstránky fungujú a sú responzívne
- [x] Kontaktný formulár posiela email cez Resend
- [x] Navigácia funguje na mobile (hamburger menu)
- [x] CTA viditeľné na každej podstránke
- [x] Meta tagy nastavené pre každú stránku
- [x] Sitemap.xml generovaný automaticky
- [x] Lighthouse score > 80 (mobile)
- [x] Žiadne chyby JavaScript v konzole
- [x] Odkazy na social media fungujú
- [x] Google Business Profile založené

---

## 6. Technologický stack — rozhodnutia

### Vybrané:

| Kategória | Výber | Odôvodnenie |
|-----------|-------|-------------|
| Framework | Astro 5.x | Rýchlosť, SSR islands, komunita |
| UI Library | shadcn/ui | Komponenty, Tailwind, prispôsobenie |
| Backend | Supabase | PostgreSQL, Auth, Storage, Edge Functions |
| Styling | Tailwind CSS | Prispôsobenie, shadcn integrácia |
| Hosting | Vercel | Astro native, CDN, bezplatný tier |
| Forms | Astro Actions + Zod | Type-safe, server-side validácia |
| Analytics | Vercel Analytics / Plausible | Jednoduchosť, súkromie |

### Zvážené alternatívy:

| Kategória | Alternatíva | Prečo nie |
|-----------|-------------|-----------|
| CMS | Sanity / Contentful | Overkill pre malú stránku |
| Form backend | Formspree / Basin | Chceme vlastné dáta v Supabase |
| Hosting | Netlify | Vercel lepší pre Astro |
| Analytics | Google Analytics 4 | Cookie banners, súkromie |

---

## 7. Budget (voliteľne)

### Mesačné náklady (odhad):

| Služba | Plán | Náklady |
|--------|------|---------|
| Vercel | Hobby | 0€ |
| Resend | Free tier (100 emails/deň) | 0€ |
| Supabase (budúcnosť) | Free tier | 0€ |
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
- **Supabase** alebo **insforge.dev** ako backend pre formulár
- Dashboard pre Natáliu na správu rezervácií
- Online kalendár rezervácií
- Automatické potvrdzovanie termínov

Zatiaľ postačuje email (Resend) + WhatsApp ako fallback.

---

## 9. Ďalšie kroky

1. **Schválenie špecifikácie** — review SPEC.md
2. **Rozhodnutie: Hosting** — Vercel vs iný
3. **Supabase project** — založenie a schéma
4. **Design mockupy** — ak potrebné pred kódovaním
5. **Začatie Fázy 1** — development

---

## 10. Aktuálny stav (2026-04-03)

### ✅ HOTOVÉ

| Komponent | Status |
|-----------|--------|
| Astro projekt + Tailwind | ✅ DONE |
| shadcn/ui setup | ✅ DONE |
| Layout (Header, Footer) | ✅ DONE |
| Homepage (SK) | ✅ DONE |
| /o-nas + breadcrumbs | ✅ DONE |
| /sluzby + breadcrumbs | ✅ DONE |
| /komisny-predaj | ✅ DONE |
| /prenajom-dekoracii | ✅ DONE |
| /kontakt + breadcrumbs | ✅ DONE |
| /svadobne-saty + breadcrumbs | ✅ DONE |
| /blog | ✅ DONE |
| /404 stránka | ✅ DONE |
| Kontaktný formulár (Resend) | ✅ DONE |
| WhatsApp FAB | ✅ DONE |
| SEO (meta, sitemap, Schema.org) | ✅ DONE |
| Breadcrumbs navigácia | ✅ DONE |
| Social proof (Google recenzie) | ✅ DONE |
| Google Analytics 4 | ✅ DONE |
| GA4 konverzie (phone, email, WhatsApp, form) | ✅ DONE |
| Google Business Profile | ✅ DONE |
| E2E tests (46+) | ✅ DONE |
| Unit tests (56) | ✅ DONE |
| CI workflow | ✅ DONE |
| Dress catalog CMS (JSON) | ✅ DONE |

### 🇬🇧 ANGLICKÁ VERZIA (2026-04-03)

| Komponent | Status | Poznámky |
|-----------|--------|----------|
| EN Homepage (/en) | ✅ DONE | Norwegian students targeting |
| EN /sluzby | ✅ DONE | |
| EN /o-nas | ✅ DONE | |
| EN /kontakt | ✅ DONE | |
| EN /svadobne-saty | ✅ DONE | |
| EN /komisny-predaj | ✅ DONE | |
| EN /prenajom-dekoracii | ✅ DONE | |
| EN /blog | ✅ DONE | |
| EN blog posts | ✅ DONE | 3 articles |
| EN Header (HeaderEn.astro) | ✅ DONE | |
| EN Footer (FooterEn.astro) | ✅ DONE | |
| LanguageSwitcher | ✅ DONE | SK/EN toggle |
| EN translations (content.ts) | ✅ DONE | All content |
| EN data exports (site.ts) | ✅ DONE | NAV_LINKS_EN, etc. |
| BookingForm multilang | ✅ DONE | language prop |

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

**P2 - Stredná priorita:**

| Úloha | Status |
|-------|--------|
| Viac šiat do katalógu | ⏸️ |
| Skutočné svadobné fotky | ⏸️ |
| Dress upload mechanism | ⏸️ |

**P3 - Technický dlh:**

| Úloha | Status |
|-------|--------|
| Duplicate GitNexus sekcie | ⏸️ |
| Orphaned files (info.ts, booking.ts) | ✅ DONE |

**P4 - Nice to Have:**

| Úloha | Status |
|-------|--------|
| FAQ sekcia | ⏸️ |
| Gallery lightbox EN | ⏸️ |
| Google Business Profile | ✅ DONE |

---

*Document created: 2026-04-01*
*Version: 1.2 - 2026-04-04*

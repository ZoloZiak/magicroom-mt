# 🏗️ MagicRoom Refactor Roadmap (Target 100/100)

**Dátum auditu:** 27. apríla 2026
**Stav projektu:** Funkčný prototyp s kritickými chybami v biznis logike a bezpečnosti.
**Tech Stack:** Astro 6.1.6 (Hybrid), Tailwind CSS v4, Vitest, Playwright.

---

## 🎯 CIEĽ: 100/100 bodov
Dosiahnuť stav, kedy je kód produkčne bezpečný, plne funkčný na Vercele a bez mŕtveho kódu.

---

## 🔴 KRITICKÉ BLOKRE (Riešiť prioritne)

### 1. Missing Booking API (`/api/booking`)
- **Stav:** `BookingForm.astro` posiela dáta na neexistujúci endpoint.
- **Dopad:** Žiadna rezervácia z webu nefunguje.
- **Riešenie:** 
  - Vytvoriť `src/pages/api/booking.ts`.
  - Integrovať **Resend SDK** na odosielanie notifikácií Natálii.
  - Prepojiť so `src/pages/api/admin/analytics.ts` na evidenciu konverzií.

### 2. Security & Auth Leak
- **Vulnerabilita:** Heslo k adminovi (`magic2026`) je v plain-texte v `content/json/admin-config.json`.
- **Chýbajúci prvok:** Chýba `src/middleware.ts`. Cesty `/admin/*` sú chránené len lokálne/vôbec.
- **Riešenie:**
  - Presunúť heslo do `.env` ako `ADMIN_PASSWORD`.
  - Implementovať Astro Middleware na kontrolu `session_id` cookie pre celú `/admin` zónu.
  - Odstrániť JSON configy obsahujúce credentials.

### 3. Serverless Filesystem Error
- **Stav:** `analytics.ts` používa `fs/promises`. 
- **Dopad:** Na Vercele zápis zlyhá (Read-only filesystem).
- **Riešenie:** Migrovať ukladanie analytiky na **Vercel KV** (Redis) alebo **Supabase**.

---

## 🔍 DETAILNÝ AUDIT LOG (State of Research)

| Súbor / Kategória | Stav | Nález / TODO |
| :--- | :--- | :--- |
| `src/components/forms/BookingForm.astro` | ✅ Kontrolované | Opraviť endpoint POST `/api/booking`. |
| `src/components/templates/HomeTemplate.astro` | ✅ Kontrolované | Odstrániť dead CSS: `slovak-seasons`, `folk-pattern`. |
| `src/pages/api/admin/login.ts` | ✅ Kontrolované | Refaktorovať na ENV premenné a bezpečné cookies. |
| `src/lib/i18n.ts` | ⚠️ Čiastočné | TODO: Preveriť edge-case pri hlbokom vnorení blogov (fail v testoch). |
| `src/components/templates/*` | ⏳ TODO | Audit SEO meta tagov a `Image` optimalizácie pre každý template. |
| `src/components/ui/*` | ⏳ TODO | Kontrola A11y (aria-labels, focus states) pre Shadcn komponenty. |
| `src/pages/admin/*` | ⏳ TODO | Kontrola či každá admin stránka správne overuje session. |
| `testing/` & `e2e/` | ⚠️ Čiastočné | TODO: Fixnúť 404 testy, ktoré zlyhávajú na i18n redirectoch. |

---

## 🔬 SURGICAL AUDIT FINDINGS (Technické detaily)

Tu sú konkrétne detaily, ktoré netreba znova hľadať:

### A. Mŕtvy kód a CSS (Dead Code)
- **`src/components/templates/HomeTemplate.astro`**:
    - Riadok 67: `<section class="... slovak-seasons ...">` (neexistuje v CSS).
    - Riadok 72: `Badge class="... folk-pattern ..."` (neexistuje v CSS).
    - Riadok 85: `Icon class="... slovak-heart ..."` (neexistuje v CSS).
- **`src/styles/global.css`**: Obsahuje `@theme` blok, ale chýbajú v ňom definície pre vyššie uvedené utility.
- **`package.json`**: Balík `blurhash` je v závislostiach, ale v komponentoch sa zatiaľ nepoužíva (overiť či sa plánuje pre `DressCarousel`).

### B. Bezpečnosť a SEO Placeholdery
- **`content/json/admin-config.json`**: Obsahuje objekt `"admin": { "password": "magic2026" }`. **ZMAZAŤ!**
- **`src/layouts/Layout.astro`**: 
    - Riadok 94: `<meta name="google-site-verification" content="MERGE_FROM_GOOGLE" />` — treba nahradiť reálnym kľúčom zo Search Console.
- **`src/pages/api/admin/save-content.ts`**: 
    - Premenné `REPO_OWNER = 'ZoloZiak'` a `REPO_NAME = 'magicroom-mt'` sú hardcoded na riadkoch 4-5.
- **`src/pages/api/admin/login.ts`**: Porovnáva heslo priamo proti JSONu namiesto ENV.

### C. Logika a Chyby (Logic Flaws)
- **`src/pages/api/admin/analytics.ts`**:
    - Funkcia `saveAnalytics(data)` volá `writeFile` bez locking mechanizmu (hrozí corruption pri concurrent requestoch).
    - Eventy sa len appendujú do polí, čo časom spôsobí pád na Vercele kvôli limitom pamäte pri parsovaní veľkého JSONu.
- **`src/lib/i18n.ts`**:
    - Funkcia `getAlternateLanguageUrl` — regex zlyháva pri vnorených cestách, ktoré majú viac ako 2 úrovne (okrem `/blog/`). Ak by sme mali napr. `/sluzby/svadba/detail`, EN prepínač sa rozbije.
- **`src/lib/translations.ts`**:
    - Premenná `copyrightText` používa `new Date().getFullYear()`. Pri SSG (static build) to môže spôsobiť **hydration mismatch**, ak sa rok zmení medzi buildom a časom, kedy používateľ otvorí web. Rok by mal byť statický alebo ťahaný z client-side JS.
- **`src/pages/admin/dashboard.astro`**:
    - Má `export const prerender = false;`, ale chýba kontrola session v SSR časti (frontmatter). Dashboard je momentálne prístupný komukoľvek, kto pozná URL.

### D. Performance & Assets
- **`src/layouts/Layout.astro`**: 
    - Fonty sa preloadujú, ale v `global.css` sú definované ako `font-display: optional;`. Pre maximálne LCP by mali byť `swap`, ak chceme okamžitý text.
    - Google Analytics script je sice lazy-loaded, ale `window.trackEvent` v fallbacku len loguje do konzoly (dáta sa strácajú kým sa GA nenačíta).

---

## 🛠️ INŠTRUKCIE PRE ĎALŠIU SESSION

1. **Štart:** Skontroluj existenciu `.env` a pridaj tam `ADMIN_PASSWORD` a `RESEND_API_KEY`.
2. **Krok 1:** Vytvor `src/middleware.ts` na ochranu admin zóny.
3. **Krok 2:** Vytvor `src/pages/api/booking.ts` (použi logicu z `analytics.ts` na trackovanie).
4. **Krok 3:** Vymaž `content/json/admin-config.json` a oprav importy v `login.ts`.
5. **Krok 4:** Spusti `npm run test:e2e` a fixni i18n routing podľa chýb.

---

## ✅ CHECKLIST KU FINÁLNEMU ODOVZDANIU
- [ ] `/api/booking` odosiela maily cez Resend.
- [ ] Admin je chránený middleware-om (vyskúšať prístup bez prihlásenia).
- [ ] Analytika používa externú DB (nie `fs`).
- [ ] Všetky E2E testy (156) svietia na zeleno.
- [ ] Odstránený všetok mŕtvy kód z `global.css` a `.astro` súborov.

---

## 🚀 IMMEDIATE EXECUTION PLAN (TODO LIST)

### Phase 1: Security & Cleanup (Priority: High)
- [x] **Task 1.1:** Create/Update `.env` with `ADMIN_PASSWORD`, `GITHUB_REPO_OWNER`, `GITHUB_REPO_NAME`.
- [x] **Task 1.2:** Implement `src/middleware.ts` to protect `/admin/*` routes.
- [x] **Task 1.3:** Delete `content/json/admin-config.json` and refactor `src/pages/api/admin/login.ts`.
- [x] **Task 1.4:** Remove `blurhash` from `package.json` and run `npm install`.
- [x] **Task 1.5:** Remove dead CSS classes (`slovak-seasons`, `folk-pattern`, `slovak-heart`) from `src/components/templates/HomeTemplate.astro`.

### Phase 2: Core Logic & Infrastructure
- [x] **Task 2.1:** Create `src/pages/api/booking.ts` using Resend.
- [x] **Task 2.2:** Refactor `src/pages/api/admin/analytics.ts` to use Vercel KV or a mock (disable `fs` for production).
- [x] **Task 2.3:** Fix hydration risk in `src/lib/translations.ts` (static year for SSG).
- [x] **Task 2.4:** Refactor `src/data/content.ts` to use lazy glob imports for better performance.

### Phase 3: Validation & Testing
- [x] **Task 3.1:** Run all Vitest unit tests.
- [x] **Task 3.2:** Run Playwright E2E tests and fix i18n routing issues.
- [x] **Task 3.3:** Final build check (`npm run build`) to ensure Vercel compatibility.



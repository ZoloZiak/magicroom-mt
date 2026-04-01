# MagicRoom — SPEC.md
## Špecifikácia projektu: Nová stránka AstroJS + shadcn/ui + Supabase

---

## 1. Concept & Vision

**MagicRoom** je malý, osobný svadobný salón v Martine — nie veľký luxusný dom, ale útulné miesto, kde Natália osobne pomáha každej neveste. Stránka má vyžarovať teplo, úprimnosť a dostupnosť. Každá nevesta má pocítiť, že tu nájde svoje vysnívané šaty bez toho, aby musela chodiť do veľkého anonymného salónu alebo preplácať.

**Osobnosť značky:** Suseda, ktorej môžeš dôverovať. Natália nie je korporátna predavačka — je to človek, ktorý ťa pozná, poradí ti a nechce na tebe zarobiť čo najviac. Značka hovorí: „Poznáme sa, pomôžem ti, ceny sú férové."

**Kľúčový prísľub:** „Malý salón, osobný prístup, ceny ktoré vidíte hneď. Žiadne skryté poplatky, žiadny tlak na predaj."

**Pozícia na trhu:** MagicRoom NIE konkuruje s veľkými salónmi ako DESIGNS (BB), LERYA (Žilina) alebo JADEI (Dolný Kubín). Cieľová skupina sú nevesty z Martina, Turca a okolia (do 20 km), ktoré chcú:
- Osobný prístup (nie anonymný veľký salón)
- Dostupné ceny (nie premium značky)
- Komis (druhý život šiat)
- Pohodlie (blízko, bez dlhého cestovania)

---

## 2. Design Language

### Estetický smer
**Soft Romantic Elegance** — Inšpirácia: minimalistické európske svadobné salóny s teplými akcentmi. Veľa priestoru, decentné textúry, jemné gradienty. Nie preťažujúci, nie gýčový.

### Farebná paleta
```
Primary:        #8B6F5C  (Warm Taupe — elegancia, teplo)
Secondary:      #D4B8A0  (Blush Sand — romantickosť)
Accent:         #C9A86C  (Muted Gold — luxus, prestíž)
Background:     #FDFBF9  (Warm White — čistý, nie studený)
Surface:        #F7F3EF  (Cream — stránky, sekcie)
Text Primary:   #2D2421  (Dark Warm Brown)
Text Secondary: #6B5E57  (Medium Taupe)
Success:        #7A9E7E  (Sage Green — rezervácia, potvrdenie)
CTA:            #B85C4A  (Terracotta Rose — výzva k akcii)
```

### Typografia
- **Headings:** `Cormorant Garamond` (serif, elegancia, romantickosť)
- **Body:** `DM Sans` (čitateľnosť, modernosť, priateľskosť)
- **Accent/Labels:** `DM Sans` Medium s letter-spacing

### Priestorový systém
- Base unit: 4px
- Sekcie: 80-120px padding vertical
- Content max-width: 1200px
- Karty: 24-32px padding
- Mobile-first s breakpointmi: 640px, 768px, 1024px, 1280px

### Filozofia animácií
- Jemné fade-in pri scrolle (opacity 0→1, translateY 20px→0, 500ms ease-out)
- Hover na kartách: subtle scale 1.02 + shadow lift
- CTA buttons: background color transition 300ms
- Vyhnúť sa: agresívnym animáciám, parallax, glitter efektom

### Vizuálne zdroje
- **Ikony:** Lucide React (jemné, zaoblené)
- **Obrázky:** Vysoko kvalitné fotografie z portfólia — lifestyle photography, nie katalóg
- **Dekorácie:** Decentné SVG flourish (čiary, oblúky) ako oddeľovače sekcií

---

## 3. Layout & Structure

### Architektúra stránok

```
/                       — Homepage (hero + kľúčové CTA)
/o-nas                  — História Natálie, misia
/svadobne-saty          — Online katalóg šiat s cenami a stavom ← NOVÉ
/sluzby                 — Všetky služby s cenami
/komisny-predaj         — Consignment (aktuálne: plná kapacita)
/prenajom-dekoracii     — Katalóg dekorácií s cenníkom
/kontakt                — Formulár + mapa + WhatsApp
/404                    — Vlastná 404 stránka (CTA na homepage)
```

### Štruktúra Homepage (priority)

1. **Hero Section** (nad foldom, 100vh na desktope)
   - Veľký headline: „Tvoje vysnívané šaty. Osobne. Za férovú cenu."
   - Subheadline: „Malý svadobný salón v Martine — Natália ti osobne pomôže nájsť tie pravé šaty."
   - **PRIMARY CTA:** „Zarezervuj skúšku šiat →" (terracotta, veľký)
   - Hero fotka: Natália v salóne, útulné prostredie, nie veľký luxusný priestor

2. **Transparentné ceny bar** (hneď pod hero — kľúčový USP)
   - „Skúška šiat od 12€ · Šaty od 100€ · Komis šaty od 50€"
   - „Ceny vidíte hneď — žiadne skryté poplatky, žiadne prekvapenia"

3. **Služby Preview** (3-stĺpcový grid)
   - Karty: Svadobné šaty (katalóg online!), Dekorácie (prenájom), Organizácia
   - Každá s ikonou, krátkym popisom, cenou „od X €"
   - CTA „Zistiť viac"
   - Šaty karta má badge „NOVÉ — katalóg online"

4. **Obľúbené šaty** (voliteľne — ak sú dáta)
   - 3-4 karty vybraných šiat z katalógu (featured=true)
   - Každá: fotka, názov, cena, veľkosť, stav
   - CTA „Pozrieť všetky šaty" → /svadobne-saty

4. **Prečo malý salón?** (trust section — nahrádza "Prečo MagicRoom?")
   - „Osobný prístup" — Natália ťa pozná, nie si číslo v poradí
   - „Ceny online" — vidíš koľko zaplatíš, ešte pred návštevou
   - „Komis šiat" — druhý život šiat, dostupnejšie ceny
   - „Blízko" — v Martine, nemusíš cestovať do Žiliny alebo BB
   - Ikony + krátke texty

5. **O Natálii** (krátky osobný príbeh)
   - 2-3 vety o tom, prečo založila salón
   - Fotka Natálie
   - CTA „Spoznaj nás viac" → /o-nas

6. **CTA Section** (pred footerom)
   - „Pripravená na skúšku?" s formulárom alebo tlačidlom rezervácie

7. **Footer**
   - Kontakt (tel, email, WhatsApp)
   - Mapa (Google Maps embed)
   - Hodiny otvorenia
   - Odkazy na sociálne siete
   - Odkazy: O nás, Služby, Komisný predaj, Prenájom dekorácií

### Responzívna stratégia
- Mobile-first prístup
- Hero: stacked layout na mobile, side-by-side na desktope
- Grid: 1 stĺpec mobile → 2 tablet → 3 desktop
- Navigácia: hamburger menu na mobile so slide-in drawer

---

## 4. Features & Interactions

### Základné funkcie (MVP)

#### F1: Online Booking / Rezervácia
- **Formulár rezervácie skúšky** (name, phone, email, preferred date, notes)
- Validácia: všetky polia required okrem notes
- Po submit: potvrdenie + redirect alebo auto-reply email
- **Integrácia:** Supabase alebo Calendly embed
- **Fallback:** Ak Supabase nedostupný — formulármailto: alebo WhatsApp link

#### F2: Online Katalóg Šiat (kľúčový USP!)
- Samostatná stránka `/svadobne-saty` — prehľad všetkých dostupných šiat
- **Každá karta šiat obsahuje:**
  - Fotka (aspoň 1, ideálne 2-3 uhly)
  - Názov / popis
  - Cena (požičovné)
  - Veľkosť (EU číslovanie)
  - Stav: `Dostupné` (zelená) / `Rezervované` (žltá) / `Predané` (šedá)
  - Typ: `Nové` / `Komis` (badge)
- **Filtrovanie:**
  - Podľa veľkosti (34, 36, 38, 40, 42, 44+)
  - Podľa ceny (do 200€, 200-400€, 400€+)
  - Podľa typu (Nové / Komis)
  - Podľa stavu (Len dostupné)
- **CTA:** „Zarezervuj skúšku týchto šiat" → rezervačný formulár s predvyplneným názvom šiat
- **Bez košíka** — to nie je e-commerce, kontakt → skúška → požičanie
- **Supabase tabuľka:** `dresses` (id, name, description, price, size, status, type, image_url, created_at)

#### F3: Katalóg Dekorácií (čítanie)
- Zoznam všetkých dekorácií s kategóriami (zrkadlá, kvety, vázy, príbor, etc.)
- Každá položka: názov, fotka (ak dostupná), cena za prenájom
- Filtrovanie podľa kategórie
- **Bez košíka** (to nie je e-commerce, kontakt → prenájom)

#### F4: Služby s Cenami
- Zoznam balíkov (BASIC 40€, Svadba základ 150-200€, Komplet 200-300€)
- Detaily každého balíka (čo obsahuje)
- CTA ku kontaktu / rezervácii

#### F5: Komisný Predaj Status
- Viditeľný badge „MOMENTÁLNE MÁME PLNÚ KAPACITU"
- Formulár „Chcem predať šaty" (nie aktívny, len zber emailov)
- Informácie o procese (ako to funguje)

#### F6: Kontakt
- Kontaktný formulár (name, email, phone, message)
- Mapa Google Maps
- Priame odkazy: tel:, whatsapp:, email:
- Hodiny otvorenia

### Detaily interakcií

#### Hover stavy
- Buttons: background darken 10%, subtle shadow
- Cards: translateY -4px, shadow increase
- Links: color shift + underline animation

#### Active/Pressed
- Buttons: scale 0.98, background darken 15%

#### Focus stavy
- Outline: 2px solid accent color (#C9A86C)
- Offset: 2px

#### Stavy načítavania
- Button so spinnerom (SVG) počas submitu
- Lazy loading obrázkov (blur-up technique)

#### Chybové stavy
- Formulár: červený border + chybová správa pod poľom
- Inline validácia (nie po submit, ak možné)
- Toast notifikácia pri chybe siete

#### Prázdne stavy
- Galéria bez fotografií: „Fotogalériu pripravujeme"
- Žiadne výsledky vyhľadávania: „Nenašli sme žiadne dekorácie v tejto kategórii"

---

## 5. Component Inventory

### Komponenty Astro + shadcn/ui

#### Navigácia
- **Header** — sticky, blur backdrop, logo + nav links + CTA button
- **MobileMenu** — slide-in drawer, full-screen overlay
- Stavy: default, scrolled (background solidifies), mobile-open

#### Tlačidlá
- **Button (Primary)** — terracotta bg, white text, rounded-lg
- **Button (Secondary)** — transparent, taupe border, taupe text
- **Button (Ghost)** — no border, text only, hover underline
- Veľkosti: sm, md, lg
- Stavy: default, hover, active, disabled, loading

#### Karty
- **ServiceCard** — ikonka, titulok, popis, cena „od X €", CTA
- **DecorationCard** — fotka, názov, cena, kategória badge
- **TestimonialCard** — citát, meno, fotka (voliteľné)
- Stavy: default, hover (lift effect)

#### Formuláre
- **Input** — label, placeholder, helper text, error state
- **Textarea** — pre správy
- **Select** — pre kategórie (mobile-friendly)
- **DatePicker** — pre výber termínu (Supabase integration)
- **FormField** — wrapper s label + input + error message

#### Spätná väzba
- **Toast** — success (sage green), error (terracotta), info (taupe)
- **Badge** — „Plná kapacita", „Nové", „Obmedzená dostupnosť"
- **Spinner** — pre stavy načítavania
- **Skeleton** — pre lazy loading obsahu

#### Rozloženie
- **Section** — wrapper s paddingom, voliteľné bg color
- **Container** — max-width, centrovaný
- **Grid** — responzívny grid systém (1/2/3 stĺpce)
- **Divider** — jemná čiara alebo SVG flourish

#### Médiá
- **Image** — lazy loading, blur-up placeholder, alt text
- **GoogleMaps** — embed s lazy load
- **WhatsAppButton** — fixed bottom-right na mobile, inline na desktope

---

## 6. Technical Approach

### Stack
- **Framework:** Astro 5.x (static-first, islands architecture)
- **UI Components:** shadcn/ui (Tailwind CSS + Radix primitives)
- **Styling:** Tailwind CSS (custom theme s farebnou paletou)
- **Backend:** Supabase (PostgreSQL, Auth, Storage, Edge Functions)
- **Forms:** Astro actions + Zod validation
- **Hosting:** Vercel / Netlify / Cloudflare Pages

### Dátový model (Supabase)

```
Table: contacts
  - id (uuid, primary key)
  - name (text, required)
  - email (text, required)
  - phone (text, optional)
  - message (text, optional)
  - created_at (timestamp)

Table: reservations
  - id (uuid, primary key)
  - name (text, required)
  - email (text, required)
  - phone (text, required)
  - preferred_date (date, optional)
  - notes (text, optional)
  - status (enum: pending, confirmed, cancelled)
  - created_at (timestamp)

Table: decorations
  - id (uuid, primary key)
  - name (text, required)
  - category (text, required) — zrkadla, kvety, vázy, príbor, etc.
  - description (text, optional)
  - price (decimal, required)
  - image_url (text, optional)
  - available (boolean, default true)

Table: dresses ← NOVÉ
  - id (uuid, primary key)
  - name (text, required) — názov/model šiat
  - description (text, optional) — popis, materiál
  - price (decimal, required) — cena požičovného
  - size (text, required) — veľkosť (34, 36, 38, 40, 42, 44)
  - status (text, required) — 'available' / 'reserved' / 'sold'
  - type (text, required) — 'new' / 'consignment'
  - image_url (text, optional) — hlavná fotka
  - image_url_2 (text, optional) — druhá fotka
  - image_url_3 (text, optional) — tretia fotka
  - featured (boolean, default false) — zobraziť na homepage
  - created_at (timestamp)

Table: services
  - id (uuid, primary key)
  - name (text, required)
  - description (text, optional)
  - price_from (decimal, optional)
  - price_to (decimal, optional)
  - features (jsonb, array of strings)
  - active (boolean, default true)
```

### API Endpoints (Astro API Routes)

```
POST /api/contact     — kontaktný formulár
POST /api/reservation — rezervácia skúšky
GET  /api/dresses     — zoznam šiat (s filtrovaním: size, price, status, type) ← NOVÉ
GET  /api/decorations — zoznam dekorácií (s filtrovaním)
GET  /api/services    — zoznam služieb
```

### SEO stratégia
- Meta title: „MagicRoom — Svadobné šaty Martin | Prenájom dekorácií"
- Meta description: Localized, s kľúčovými slovami
- Schema.org markup: LocalBusiness, Service, Product
- Google Business Profile integration
- Sitemap.xml + robots.txt
- Alt text na všetkých obrázkoch

### Ciele výkonu
- Lighthouse: 95+ všetky metriky
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

---

## 7. Roadmap (voliteľne)

### Fáza 1 (MVP)
- [ ] Domovská stránka s plnou štruktúrou
- [ ] Formulár rezervácie
- [ ] Zoznam služieb s cenami
- [ ] Katalóg dekorácií (len čítanie)
- [ ] Kontaktná stránka
- [ ] Mobilná responzivita

### Fáza 2 (po MVP)
- [ ] Galéria fotografií s lightbox
- [ ] Integrácia s Facebook/Instagram
- [ ] Recenzie zákazníčok
- [ ] Blog / poradňa („Ako vybrať svadobné šaty")

### Fáza 3 (rast)
- [ ] Online kalendár rezervácií (Calendly alebo vlastný)
- [ ] Systém online platieb
- [ ] Panel zákazníka (sledovanie stavu objednávky)
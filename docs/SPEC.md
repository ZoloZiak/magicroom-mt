# MagicRoom — SPEC.md
## Specyfikacja projektu: Nowa strona AstroJS + shadcn/ui + Supabase

---

## 1. Concept & Vision

**MagicRoom** to mały, osobisty salon ślubny w Martinie — nie wielki luksusowy dom, ale przytulne miejsce, gdzie Natália osobiście pomaga każdej pannie młodej. Strona ma emanować ciepłem, szczerością i dostępnością. Każda nievesta má poczuć, že tu znajdzie swoje wymarzone suknie bez chodzenia do dużego anonimowego salonu ani przepłacania.

**Osobowość marki:** Sąsiadka, której możesz zaufać. Natália nie jest korporacyjną sprzedawczynią — to osoba, która cię zna, doradzi i nie chce na tobie zarobić jak najwięcej. Marka mówi: „Znamy się, pomogę ci, ceny są uczciwe."

**Kluczowa obietnica:** „Mały salon, osobisty podejście, ceny które widzisz od razu. Żadnych ukrytych opłat, żadnej presji na sprzedaż."

**Pozycja na rynku:** MagicRoom NIE konkuruje z dużymi salonami jak DESIGNS (BB), LERYA (Žilina) ani JADEI (Dolný Kubín). Grupa docelowa to panny młode z Martina, Turca i okolicy (do 20 km), które chcą:
- Osobistego podejścia (nie anonimowy wielki salon)
- Dostępnych cen (nie premium marek)
- Komisu (drugie życie sukni)
- Wygody (blisko, bez długiego podróżowania)

---

## 2. Design Language

### Kierunek estetyczny
**Soft Romantic Elegance** — Inspiracja: minimalistyczne europejskie salony ślubne z ciepłymi akcentami. Dużo przestrzeni, subtelne tekstury, delikatne gradienty. Nie przytłaczający, nie kitschowy.

### Paleta kolorów
```
Primary:        #8B6F5C  (Warm Taupe — elegancja, ciepło)
Secondary:      #D4B8A0  (Blush Sand — romantyczność)
Accent:         #C9A86C  (Muted Gold — luksus, prestige)
Background:     #FDFBF9  (Warm White — czysta, nie zimna)
Surface:        #F7F3EF  (Cream — kartki, sekcje)
Text Primary:   #2D2421  (Dark Warm Brown)
Text Secondary: #6B5E57  (Medium Taupe)
Success:        #7A9E7E  (Sage Green — rezerwacja, potwierdzenie)
CTA:            #B85C4A  (Terracotta Rose — wezwanie do działania)
```

### Typografia
- **Headings:** `Cormorant Garamond` (serif, elegancja, romantyczność)
- **Body:** `DM Sans` (czytelność, nowoczesność, przyjazność)
- **Accent/Labels:** `DM Sans` Medium z letter-spacing

### System przestrzenny
- Base unit: 4px
- Sekcje: 80-120px padding vertical
- Content max-width: 1200px
- Karty: 24-32px padding
- Mobile-first z breakpointami: 640px, 768px, 1024px, 1280px

### Filozofia animacji
- Delikatne fade-in przy scrollu (opacity 0→1, translateY 20px→0, 500ms ease-out)
- Hover na kartach: subtle scale 1.02 + shadow lift
- CTA buttons: background color transition 300ms
- Unikać: agresywnych animacji, parallax, glitter efektów

### Zasoby wizualne
- **Ikony:** Lucide React (delikatne, zaokrąglone)
- **Obrazy:** Wysokiej jakości zdjęcia z portfolio — lifestyle photography, nie katalog
- **Dekoracje:** Subtelne SVG flourish (linie, łuki) jako separatory sekcji

---

## 3. Layout & Structure

### Architektura stron

```
/                       — Homepage (hero + kluczowe CTA)
/o-nas                  — Historia Natálii, misja
/svadobne-saty          — Online katalog sukien z cenami i stanem ← NOWE
/sluzby                 — Wszystkie usługi z cenami
/komisny-predaj         — Consignment (obecne: pełna pojemność)
/prenajom-dekoracii     — Katalog dekoracji z cennikiem
/kontakt                — Formularz + mapa + WhatsApp
/404                    — Własna strona 404 (CTA do homepage)
```

### Struktura Homepage (priorytety)

1. **Hero Section** (above fold, 100vh na desktop)
   - Duży headline: "Tvoje vysnívané šaty. Osobne. Za férovú cenu."
   - Subheadline: "Malý svadobný salón v Martine — Natália ti osobne pomôže nájsť tie pravé šaty."
   - **PRIMARY CTA:** "Zarezervuj skúšku šiat →" (terracotta, duży)
   - Hero fotka: Natália v salóne, útulné prostredie

2. **Transparentné ceny bar** (hneď pod hero — kľúčový USP)
   - "Skúška šiat 12€ (v cene nápoj) · Svadobné šaty 200-700€ · Spoločenské šaty 12-150€"
   - "Ceny vidíte hneď — žiadne skryté poplatky, žiadne prekvapenia"

3. **Služby Preview** (3-kolumnowa grid)
   - Karty: Svadobné šaty (katalóg online!), Dekorácie (prenájom), Organizácia
   - Każda z ikoną, krótkim opisem, ceną "od X €"
   - CTA "Zistiť viac"
   - Karta šiat má badge "NOWE — katalóg online"

4. **Obľúbené šaty** (opcjonalne — jeśli są dane)
   - 3-4 karty wybranych sukni z katalogu (featured=true)
   - Każda: foto, nazwa, cena, rozmiar, stan
   - CTA "Zobacz wszystkie suknie" → /svadobne-saty

4. **Prečo malý salón?** (trust section)
   - "Osobný prístup" — Natália ťa pozná, nie si číslo v poradí
   - "Ceny online" — vidíš koľko zaplatíš, ešte pred návštevou
   - "Komis šiat" — druhý život šiat, dostupnejšie ceny
   - "Blízko" — v Martine, nemusíš cestovať do Žiliny alebo BB

5. **O Natálii** (krátky osobný príbeh)
   - 2-3 vety o tom, prečo založila salón
   - Fotka Natálie
   - CTA "Spoznaj nás viac" → /o-nas

6. **CTA Section** (pred footerem)
   - "Pripravená na skúšku?" s formularzem alebo przyciskiem rezerwacji

7. **Footer**
   - Kontakt (tel, email, WhatsApp)
   - Mapa (Google Maps embed)
   - Godziny otwarcia
   - Social media links
   - Linki: O nás, Služby, Komisný predaj, Prenájom dekorácií

### Responsive Strategy
- Mobile-first approach
- Hero: stacked layout na mobile, side-by-side na desktop
- Grid: 1 kolumna mobile → 2 tablet → 3 desktop
- Nawigacja: hamburger menu na mobile z slide-in drawer

---

## 4. Features & Interactions

### Core Features (MVP)

#### F1: Online Booking / Rezerwacja
- **Formularz rezerwacji skúšky** (name, phone, email, preferred date, notes)
- Walidacja: wszystkie pola required oprócz notes
- Po submit: potwierdzenie + redirect lub auto-reply email
- **Integracja:** Supabase lub Calendly embed
- **Fallback:** Jeśli Supabase niedostępny — formularzmailto: lub WhatsApp link

#### F2: Katalog Dekorací (čítanie)
- Lista wszystkich dekoracji z kategoriami (zrkadlá, kvety, vázy, príbor, etc.)
- Każda pozycja: nazwa, zdjęcie (jeśli dostępne), cena za wynajem
- Filtrowanie po kategorii
- ** bez koszyka** (to nie e-commerce, kontakt → wynajem)

#### F3: Služby z Cenami
- Lista pakietów (BASIC 40€, Svadba základ 150-200€, Komplet 200-300€)
- Szczegóły każdego pakietu (co zawiera)
- CTA do kontaktu / rezerwacji

#### F4: Komisný Predaj Status
- Widoczny badge "MOMENTÁLNE MÁME PLNÚ KAPACITU"
- Formularz "Chcem predať šaty" (nie aktywny, tylko zapis email)
- Informacja o procesie (jak to działa)

#### F5: Kontakt
- Formularz kontaktowy (name, email, phone, message)
- Mapa Google Maps
- Bezpośrednie linki: tel:, whatsapp:, email:
- Godziny otwarcia

### Interaction Details

#### Hover States
- Buttons: background darken 10%, subtle shadow
- Cards: translateY -4px, shadow increase
- Links: color shift + underline animation

#### Active/Pressed
- Buttons: scale 0.98, background darken 15%

#### Focus States
- Outline: 2px solid accent color (#C9A86C)
- Offset: 2px

#### Loading States
- Button z spinner (SVG) podczas submit
- Lazy loading obrazów (blur-up technique)

#### Error States
- Formularz: czerwone border + error message pod polem
- Walidacja inline (nie po submit, jeśli możliwe)
- Toast notification przy błędzie sieci

#### Empty States
- Galeria bez zdjęć: "Fotogalériu pripravujeme"
- Brak wyników wyszukiwania: "Nenašli sme žiadne dekorácie v tejto kategórii"

---

## 5. Component Inventory

### Komponenty Astro + shadcn/ui

#### Navigation
- **Header** — sticky, blur backdrop, logo + nav links + CTA button
- **MobileMenu** — slide-in drawer, full-screen overlay
- States: default, scrolled (background solidifies), mobile-open

#### Buttons
- **Button (Primary)** — terracotta bg, white text, rounded-lg
- **Button (Secondary)** — transparent, taupe border, taupe text
- **Button (Ghost)** — no border, text only, hover underline
- Sizes: sm, md, lg
- States: default, hover, active, disabled, loading

#### Cards
- **ServiceCard** — ikonka, tytuł, description, cena "od X €", CTA
- **DecorationCard** — zdjęcie, nazwa, cena, kategoria badge
- **TestimonialCard** — cytat, imię, zdjęcie (opcjonalne)
- States: default, hover (lift effect)

#### Forms
- **Input** — label, placeholder, helper text, error state
- **Textarea** — dla wiadomości
- **Select** — dla kategorii (mobile-friendly)
- **DatePicker** — dla wyboru terminu (Supabase integration)
- **FormField** — wrapper z label + input + error message

#### Feedback
- **Toast** — success (sage green), error (terracotta), info (taupe)
- **Badge** — "Plná kapacita", "Nové", "Obmedzená dostupnosť"
- **Spinner** — dla loading states
- **Skeleton** — dla lazy loading content

#### Layout
- **Section** — wrapper z padding, opcjonalny bg color
- **Container** — max-width, centered
- **Grid** — responsive grid system (1/2/3 kolumny)
- **Divider** — subtile linie lub SVG flourish

#### Media
- **Image** — lazy loading, blur-up placeholder, alt text
- **GoogleMaps** — embed z lazy load
- **WhatsAppButton** — fixed bottom-right na mobile, inline na desktop

---

## 6. Technical Approach

### Stack
- **Framework:** Astro 5.x (static-first, islands architecture)
- **UI Components:** shadcn/ui (Tailwind CSS + Radix primitives)
- **Styling:** Tailwind CSS (custom theme z paletą kolorów)
- **Backend:** Supabase (PostgreSQL, Auth, Storage, Edge Functions)
- **Forms:** Astro actions + Zod validation
- **Hosting:** Vercel / Netlify / Cloudflare Pages

### Data Model (Supabase)

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
POST /api/contact     — formularz kontaktowy
POST /api/reservation — rezerwacja skúšky
GET  /api/decorations — lista dekoracji (z filtrowaniem)
GET  /api/services    — lista usług
```

### SEO Strategy
- Meta title: "MagicRoom — Svadobné šaty Martin | Prenájom dekorácií"
- Meta description: Localized, z kluczowymi słowami
- Schema.org markup: LocalBusiness, Service, Product
- Google Business Profile integration
- Sitemap.xml + robots.txt
- Alt text na wszystkich obrazach

### Performance Targets
- Lighthouse: 95+ wszystkie metryki
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

---

## 7. Roadmap (opcjonalnie)

### Faza 1 (MVP)
- [ ] Strona główna z pełną strukturą
- [ ] Formularz rezerwacji
- [ ] Lista usług z cenami
- [ ] Katalog dekoracji (tylko odczyt)
- [ ] Strona kontaktowa
- [ ] Mobile responsiveness

### Faza 2 (po MVP)
- [ ] Galeria zdjęć z lightbox
- [ ] Integracja z Facebook/Instagram
- [ ] Opinie klientek
- [ ] Blog / poradnik ("Ako vybrať svadobné šaty")

### Faza 3 (wzrost)
- [ ] Online kalendarz rezerwacji (Calendly lub własny)
- [ ] System płatności online
- [ ] Panel klienta (śledzenie statusu zamówienia)

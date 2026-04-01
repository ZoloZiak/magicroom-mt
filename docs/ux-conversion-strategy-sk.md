# UX & Conversion Strategy — MagicRoom

## 1. Analýza problémov (z Grok analysis)

### Aktuálne bariéry konverzie

| Problém | Aktuálna stránka | Vplyv na konverziu |
|---------|---------------|-------------------|
| Chýbajúce viditeľné CTA | "keď chceš viac" nehovorí, čo kliknúť | 🔴 Veľmi vysoký |
| Rezervácia len telefonická | Telefónne číslo + email | 🔴 Vysoký |
| Chýbajúce ceny | Žiadne informácie o nákladoch | 🔴 Vysoký |
| Chýbajúci social proof | Žiadne recenzie, fotografie klientok | 🟡 Stredný |
| Príliš málo emócií | Textová, suchá prezentácia | 🟡 Stredný |
| Problémy na mobile | Pravdepodobne slabé mobilné UX | 🟡 Stredný |

---

## 2. Konverzná stratégia — CIME Framework

### C — Clarity (Jasnosť)
**Princíp:** Návštevníčka má vedieť do 3 sekúnd:
1. ČO to je (malý osobný svadobný salón)
2. KDE to je (Martin)
3. ČO MÁ UROBIŤ (Rezervuj si skúšku)
4. KOĽKO TO STOJÍ (ceny hneď viditeľné)

**Implementácia:**
- **Hero sekcia:** Nadpis H1 s lokalitou + veľké CTA + ceny hneď pod hero
- **Above-the-fold:** CTA viditeľné bez skrolovania
- **Sticky navigácia:** CTA vždy dostupné
- **Ceny na každej stránke:** nie len na /sluzby

### I — Incentive (Motivácia)
**Princíp:** Čo získam kliknutím? Prečo to mám urobiť TERAZ?

**Implementácia:**
- **Benefity pri CTA:** "Skúška od 12€ · Šaty od 100€"
- **Osobný prístup:** "Natália ti osobne pomôže — nie si číslo v poradí"
- **Komis výhoda:** "Jediný salón v regióne s komisom šiat"
- **WhatsApp:** Primárny kontakt — nevesta môže napísať rovno z webu

### M — Minimal Friction (Minimálna bariéra)
**Princíp:** Krok medzi "chcem" a "rezervujem" = max 30 sekúnd

**Implementácia:**
- **WhatsApp ako primárny kanál:** Nie každý chce vypĺňať formulár. WhatsApp button na každej stránke.
- **Formulár:** Max 4 polia (meno, email, telefón, dátum)
- **Alternatívy:** Formulár ALEBO WhatsApp ALEBO telefón — nevesta si vyberie
- **Mobil:** Veľké tlačidlá, veľké vstupné polia

### E — Emotional Connection (Emocionálne prepojenie)
**Princíp:** Svadobné šaty sú EMÓCIE, nie transakcia. Ale pre malý salón je dôraz na OSOBNOSŤ.

**Implementácia:**
- **Natália ako tvár značky:** Fotky Natálie, jej príbeh, nie anonymný salón
- **Fotografie:** Klientky v šatách, nie katalóg produktov
- **Príbeh:** "Prečo som založila malý salón" — osobný, nie korporátny
- **Atmosféra:** Útulné, nie luxusné. Teplé farby, jemné fonty, veľa bieleho priestoru
- **Ton komunikácie:** Hovorový, priateľský. "Ahoj" namiesto "Vážená pani"

---

## 3. Architektúra CTA

### Hierarchia CTA na stránke

```
DOMOVSKÁ STRÁNKA
├── Hero (najdôležitejšie)
│   └── Primary CTA: "Zarezervuj skúšku šiat" (terracotta, veľké)
│
├── Sekcia Služby
│   ├── Card 1: "Zistiť viac o šatách" → /sluzby
│   ├── Card 2: "Zistiť viac o dekoráciách" → /prenajom-dekoracii  
│   └── Card 3: "Chcem poradiť" → /kontakt
│
├── Sekcia Dôvera
│   └── Secondary CTA: "Napíšte nám" → /kontakt
│
├── Pred Footerom
│   └── Final CTA: "Pripravená na skúšku?" → /kontakt#rezervacia
│
└── FLOATING
    └── WhatsApp button (vždy viditeľný na mobile)
```

### Dizajn tlačidiel CTA

```css
/* Primary CTA */
background: #B85C4A;      /* Terracotta Rose */
color: #FFFFFF;
padding: 16px 32px;
font-size: 18px;
font-weight: 600;
border-radius: 8px;
transition: all 300ms ease;

/* Hover */
background: #A04D3C;
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(184, 92, 74, 0.3);

/* Focus */
outline: 2px solid #C9A86C;
outline-offset: 2px;
```

---

## 4. Rezervačný formulár — Optimalizácia

### Variant A: Jednoduchý formulár (MVP)

**Polia:**
1. ✅ Meno (required) — text
2. ✅ Telefón (required) — tel input
3. ✅ Email (required) — email input
4. ✅ Preferovaný dátum (optional) — date picker
5. ✅ Poznámka (optional) — textarea (skrytá alebo collapsed)

**Prečo tak málo polí:**
- Každé ďalšie pole = o 10 % menej konverzií
- Dátum je voliteľný, pretože termíny sa dohadujú neskôr
- Poznámky sú zbytočné pri prvom kontakte

### Variant B: Pokročilý (po MVP)

**Polia:**
1. Meno a priezvisko
2. Telefón
3. Email
4. Typ služby (select: Skúška šiat / Komisný predaj / Dekorácie / Organizácia)
5. Preferovaný dátum
6. Počet hostí (pre organizáciu)
7. Ako ste sa o nás dozvedeli (select)
8. Poznámka

### Validácia formulára

```typescript
const schema = z.object({
  name: z.string().min(2, "Meno musí mať aspoň 2 znaky"),
  email: z.string().email("Zadajte platný email"),
  phone: z.string().min(10, "Zadajte platné telefónne číslo"),
  date: z.string().optional(),
  message: z.string().optional()
})
```

### Správy o úspechu/chybe

**Úspech:**
> 🎉 **Ďakujeme za vašu správu!**
> 
> Ozveme sa vám do 24 hodín. Ak ste poslali správu večer, odpovieme ráno.
> 
> Tešíme sa na vás!

**Sieťová chyba:**
> ⚠️ **Niečo sa pokazilo**
> 
> Skúste to znova alebo nám napíšte priamo na WhatsApp.
> 
> [Napísať na WhatsApp →]()

---

## 5. Social Proof — Stratégia pre malý salón

### Poznámka: Realistické čísla
MagicRoom je malý salón. "248 neviest" by bolo nerealistické a nedôveryhodné. Namiesto veľkých čísel sa sústredíme na:
- **Osobné recenzie** (Facebook, Google)
- **Fotografie reálnych klientok** (s ich súhlasom)
- **Príbehy** — nie čísla, ale slová

### Kam umiestniť social proof

```
HOMEPAGE
├── Namiesto čísel → osobné hodnotenie
│   └── "⭐⭐⭐⭐⭐ Na Facebooku" (ak existuje)
│
├── Sekcia "O Natálii" → dôvera cez osobnosť
│   └── Fotka + príbeh + prečo robí to čo robí
│
├── Recenzie (ak dostupné)
│   └── 2-3 úryvky od reálnych klientok
│
└── Galéria → fotografie reálnych neviest (súhlas)
```

### Typy social proof (relevantné pre malý salón)

1. **Recenzie na Facebooku/Google** — najdôležitejšie pre lokálny salón
2. **Fotografie klientok** — reálne fotografie, nie stock
3. **Natália ako osoba** — dôvera cez osobnosť, nie cez čísla
4. **Odporúčania od známych** — slovenský trh je postavený na odporúčaniach

### Ak chýbajú recenzie (nový biznis)

**Dočasné riešenia:**
- „Každá nevesta je pre nás jedinečná — a zaslúži si ten najlepší zážitok"
- Fotografie z príprav, procesu práce
- Citáty od rodiny/známych
- „Ak ste spokojná, prosím, ohodnoťte nás na Facebooku" → CTA

---

## 6. Mobile-First stratégia

### Prečo je mobil kritický

```
Údaje z analýzy (typický svadobný salón na Slovensku):
├── Mobilná návštevnosť:   65–75 %
├── Desktop návštevnosť:   25–35 %
└── Tablet návštevnosť:     5–10 %
```

### Mobile-first pravidlá

1. **Dotykové plochy minimálne 44×44 px**
2. **Odstupy medzi prvkami min. 16 px**
3. **Veľkosť písma minimálne 16 px** (bez zoomu na vstupných poliach)
4. **CTA vždy v spodnej časti obrazovky** (WhatsApp FAB)
5. **Hamburger menu** namiesto plnej navigácie
6. **Formulár v 1 kroku** (bez skrolovania počas vypĺňania)

### Vzor mobilnej navigácie

```
┌─────────────────────────────────┐
│ ☰ MagicRoom              [CTA] │  ← Sticky header
├─────────────────────────────────┤
│                                 │
│         [HERO CONTENT]         │
│                                 │
│    [Zarezervuj skúšku šiat]    │  ← Primary CTA
│                                 │
└─────────────────────────────────┘
              ⋮
┌─────────────────────────────────┐
│              📱                 │  ← Floating WhatsApp
└─────────────────────────────────┘
```

---

## 7. Konverzný lievik — optimalizácia

### Predajný lievik MagicRoom

```
UV → VSTUP → ZÁUJEM → ROZHODNUTIE → AKCIA → KONVERZIA
 │      │         │           │           │         │
 100%   80 %      50 %        30 %        20 %      10 %
```

### Kde strácame návštevníkov

| Fáza | Strata | Príčina | Riešenie |
|------|--------|---------|----------|
| Vstup | 20 % | Pomalé načítanie, slabé SEO | Astro = rýchla stránka |
| Záujem | 30 % | Nerozumejú ponuke | Jasné hero, ceny |
| Rozhodnutie | 20 % | Chýbajúca dôvera | Social proof |
| Akcia | 10 % | Formulár príliš dlhý | Skrátiť formulár |
| Konverzia | 10 % | Formulár nefunguje | Testovať |

### KPI na sledovanie

```javascript
// Metriky na sledovanie (GA4 / Plausible)
- conversion_rate_reservation    // % návštevníkov → formulár
- bounce_rate_homepage            // % ktoré odídu bez akcie
- avg_time_on_page                // Čas na stránke
- scroll_depth                    // Ako hlboko skrolujú
- cta_click_rate                 // Kliknutia na CTA
- form_completion_rate            // % ktoré vyplnia formulár
- mobile_vs_desktop_conversion   // Porovnanie konverzií
```

---

## 8. Odporúčania na A/B testovanie

### Prioritné testy

1. **Test 1:** Hero CTA — "Zarezervuj skúšku" vs "Rezervujte si termín"
   - Hypotéza: "Rezervujte si termín" znie oficiálnejšie
   
2. **Test 2:** Formulár — 4 polia vs 2 polia (meno + telefón)
   - Hypotéza: Menej polí = viac konverzií, ale nižšia kvalita leadov

3. **Test 3:** Social proof — s číslami vs s úryvkom
   - Hypotéza: Čísla ("248 neviest") > úryvky pre prvý kontakt

4. **Test 4:** Ceny — viditeľné vs skryté (s možnosťou "pozrite si cenník")
   - Hypotéza: Viditeľné ceny = viac konverzií (eliminuje "nie som si istá cenou")

### Nástroje na testovanie
- **Vercel Analytics** (zdarma pre malé projekty)
- **Google Analytics 4** (zdarma)
- **Hotjar** (bezplatný plán: 1 000 pageviews/mesiac)
- **Plausible** (zameraný na súkromie, ~10 €/mesiac)

---

## 9. Súhrn checklistu

### Pred spustením stránky

- [ ] **CTA na každej podstránke** — minimálne 1 viditeľné CTA
- [ ] **Ceny pri každej službe** — orientačné postačujú
- [ ] **Rezervačný formulár** — max 4 polia, validácia
- [ ] **WhatsApp tlačidlo** — na mobile vždy viditeľné
- [ ] **Testy na mobile** — skutočný telefón, rôzne scenáre
- [ ] **Test rýchlosti** — Lighthouse > 90 vo všetkých metrikách
- [ ] **Social proof** — ak chýbajú recenzie, dočasné riešenia
- [ ] **Google Business Profile** — vytvorený a overený
- [ ] **Analytika** — sledovanie konverzií implementované

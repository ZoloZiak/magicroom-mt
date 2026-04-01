# SEO & Local Strategy — MagicRoom

## 1. Keyword Research

### Cieľová SEO zóna
**Primárna:** Martin + Turiec + Turčianske Teplice + Vrútky (do 20 km)
**Sekundárna:** Ružomberok, Žilina, Dolný Kubín (len cez unikátne kľúčové slová)

### Primary Keywords (vysoký objem, vysoká intencia)

| Keyword | Objem (est.) | Obtiažnosť | Kategória |
|---------|---------------|------------|-----------|
| svadobné šaty Martin | 300-500/mesiac | Stredná | Brand + Location |
| svadobný salón Martin | 200-400/mesiac | Stredná | Brand + Location |
| lacné svadobné šaty Martin | 50-100/mesiac | Nízka | Cena + Location |
| prenájom dekorácií Martin | 100-200/mesiac | Nízka | Služba + Location |
| komisný predaj svadobných šiat | 50-100/mesiac | Nízka | Nikový (UNIKÁTNE) |

### Long-tail Keywords (vysoká konverzia)

| Keyword | Objem (est.) | Kategória |
|---------|---------------|-----------|
| svadobné šaty Martin cena | 50-100/mesiac | Informačný |
| svadobné šaty Turčianske Teplice | 10-30/mesiac | Location |
| svadobné šaty Turiec | 10-30/mesiac | Location |
| skúška svadobných šiat Martin | 20-40/mesiac | Transakčný |
| komis svadobné šaty | 20-40/mesiac | Nikový (UNIKÁTNE) |
| lacné svadobné šaty Turiec | 10-20/mesiac | Cena + Location |
| svadobné šaty do 500€ | 30-50/mesiac | Cena |
| prenájom svadobných dekorácií Martin | 30-50/mesiac | Transakčný |

### LSI Keywords (podporné)

- svadobný salón
- svadobné šaty
- dekorácie na svadbu
- svadobná výzdoba
- prenájom výzdoby
- Martin
- Turiec
- Turčianske Teplice
- Vrútky
- lacné svadobné šaty
- komis

---

## 2. On-Page SEO

### Meta Tags (pre každú stránku)

```html
<!-- Homepage -->
<title>MagicRoom — Svadobné šaty Martin | Prenájom dekorácií</title>
<meta name="description" content="Svadobný salón v Martine. Šaty od 100€, skúška od 12€, dekorácie na prenájom. Skutočné ceny online — najlacnejšie v regióne. Zarezervujte si skúšku." />
<link rel="canonical" href="https://www.magicroom.sk/" />

<!-- O nás -->
<title>O nás — MagicRoom Martin</title>
<meta name="description" content="Spoznajte Natáliu, zakladateľku MagicRoom. Príbeh salónu, ktorý vznikol z lásky k nevestám a detailom." />

<!-- Služby -->
<title>Služby a cenník — MagicRoom Martin</title>
<meta name="description" content="Služby MagicRoom: skúška šiat od 12€, organizácia svadby od 40€, prenájom dekorácií. Martin a okolie." />

<!-- Dekorácie -->
<title>Prenájom svadobných dekorácií Martin — MagicRoom</title>
<meta name="description" content="Prenájom svadobných dekorácií v Martine. Zrkadlá, kvety, svietniky, obrusy. Od 0.50€ za kus." />

<!-- Kontakt -->
<title>Kontakt — MagicRoom Martin</title>
<meta name="description" content="Kontaktujte MagicRoom. Telefón, email, WhatsApp, adresa. Martin, Jilemníckeho 43." />
```

### Open Graph Tags

```html
<meta property="og:title" content="MagicRoom — Svadobné šaty Martin" />
<meta property="og:description" content="Svadobné šaty od 100€, skúška od 12€. Ceny vidíte hneď — žiadne skryté poplatky. Najlacnejší svadobný salón v Martine." />
<meta property="og:image" content="https://www.magicroom.sk/og-image.jpg" />
<meta property="og:url" content="https://www.magicroom.sk" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="sk_SK" />
```

### Structured Data (JSON-LD)

```html
<!-- LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MagicRoom",
  "description": "Svadobný salón a požičovňa dekorácií v Martine",
  "image": "https://www.magicroom.sk/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jilemníckeho 43",
    "addressLocality": "Martin",
    "postalCode": "036 01",
    "addressCountry": "SK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.0622",
    "longitude": "18.9234"
  },
  "telephone": "+421950490323",
  "email": "mt.magicroom@gmail.com",
  "url": "https://www.magicroom.sk",
  "openingHours": ["TU 09:00-17:00", "WE 09:00-17:00", "TH 09:00-17:00", "FR 09:00-17:00", "SA 09:00-14:00"],
  "priceRange": "€",
  "sameAs": [
    "https://www.facebook.com/magicroom",
    "https://www.instagram.com/mt.magicroom"
  ]
}
</script>

<!-- Service -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Wedding Dress Shop",
  "provider": {
    "@type": "LocalBusiness",
    "name": "MagicRoom"
  },
  "areaServed": {
    "@type": "City",
    "name": "Martin"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wedding Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Skúška svadobných šiat"
        },
        "price": "12",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Prenájom dekorácií"
        },
        "priceSpecification": {
          "@type": "QuantitativeValue",
          "minValue": "0.50",
          "maxValue": "35",
          "unitCode": "EUR"
        }
      }
    ]
  }
}
</script>

<!-- FAQPage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Koľko stojí skúška svadobných šiat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Skúška svadobných šiat stojí 12€ a trvá maximálne 60 minút. V cene je zahrnutý pohárik prosecca, kávy alebo nealka."
      }
    },
    {
      "@type": "Question",
      "name": "Ako dlho trvá prenájom dekorácií?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dekorácie si môžete prenajať na 1-3 dni v závislosti od typu. Vratná záloha je splatná pri prevzatí."
      }
    }
  ]
}
</script>
```

---

## 3. Content Strategy

### Štruktúra blogu/content marketing

```
Blog (voliteľne, po MVP)
│
├── /blog/ako-vybrat-svadobne-saty
│   └── Poradník: na čo si dávať pozor pri výbere svadobných šiat
│
├── /blog/svadobne-trendy-2026
│   └── Článok o trendoch na novú sezónu
│
├── /blog/kolko-stoji-svadba
│   └── Rozpočet svadby, ceny služieb
│
└── /blog/komunitne-spravy
    └── Aktuality z MagicRoom
```

### Štruktúra nadpisov (H1-H6)

```html
<!-- Homepage -->
<h1>Vysnívané svadobné šaty v Martine</h1>  <!-- Len 1 H1 -->
  <h2>Služby</h2>
    <h3>Skúška šiat</h3>
    <h3>Prenájom dekorácií</h3>
    <h3>Organizácia svadby</h3>
  <h2>Prečo MagicRoom?</h2>
  <h2>Galéria</h2>
  <h2>Kontakt</h2>

<!-- Služby -->
<h1>Služby a cenník</h1>
  <h2>Skúška svadobných šiat</h2>
  <h2>Svadobné šaty</h2>
  <h2>Organizácia svadby</h2>
    <h3>Balík Basic</h3>
    <h3>Balík Svadba základ</h3>
    <h3>Balík Kompletná príprava</h3>
  <h2>RSVP Online správa</h2>
```

### Internal Linking

```html
<!-- Na každej podstránke -->
<nav>
  <a href="/">Domov</a>
  <a href="/o-nas">O nás</a>
  <a href="/sluzby">Služby</a>
  <a href="/komisny-predaj">Komisný predaj</a>
  <a href="/prenajom-dekoracii">Dekorácie</a>
  <a href="/kontakt">Kontakt</a>
</nav>

<!-- Krížové prelinkovanie v obsahu -->
<!-- Na stránke /prenajom-dekoracii -->
<p>
  Hľadáte kompletnú výzdobu? Pozrite si naše 
  <a href="/sluzby">služby organizácie svadby</a>, 
  kde vám pomôžeme naplánovať dekorácie aj obsah.
</p>
```

---

## 4. Local SEO

### Google Business Profile

```
Názov: MagicRoom
Typ: Svadobný salón
Adresa: Jilemníckeho 43, 036 01 Martin
Telefón: +421 950 490 323
Webstránka: https://www.magicroom.sk
Hodiny: Ut-Str 9-17, Štv-Pia 9-17, So 9-14
Kategórie: 
  - Primary: Svadobný salón
  - Secondary: Požičovňa dekorácií
  - Secondary: Svadobné služby
```

### Slovenské mapy (Mapy.cz)

```html
<a href="https://mapy.cz/zakladni?q=MagicRoom+Martin">
  Zobraziť na Mapách
</a>
```

### Lokálne citácie

| Platforma | Status | URL |
|-----------|--------|-----|
| Google Business | ✅ | business.google.com |
| Bing Places | ❌ | Vytvoriť |
| Apple Maps | ❌ | Vytvoriť |
| Mapy.cz | ❌ | Vytvoriť |
| Facebook | ✅ | facebook.com/magicroom |
| Instagram | ✅ | instagram.com/mt.magicroom |

---

## 5. Technical SEO

### Sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.magicroom.sk/</loc>
    <lastmod>2026-04-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.magicroom.sk/o-nas/</loc>
    <lastmod>2026-04-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.magicroom.sk/sluzby/</loc>
    <lastmod>2026-04-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.magicroom.sk/komisny-predaj/</loc>
    <lastmod>2026-04-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.magicroom.sk/prenajom-dekoracii/</loc>
    <lastmod>2026-04-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.magicroom.sk/kontakt/</loc>
    <lastmod>2026-04-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### robots.txt

```txt
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.magicroom.sk/sitemap.xml
```

### Výkon (Core Web Vitals ciele)

| Metrika | Cieľ | Status |
|---------|------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | 🚨 Na monitoring |
| FID (First Input Delay) | < 100ms | ✅ Astro = fast |
| CLS (Cumulative Layout Shift) | < 0.1 | ✅ |
| TTFB (Time to First Byte) | < 600ms | 🚨 Server |
| Speed Index | < 3.0s | 🚨 Na monitoring |

### Optimalizácia obrázkov

```html
<!-- Lazy loading + WebP + alt text -->
<img 
  src="/images/hero.webp"
  alt="Natália pomáha neveste vybrať si svadobné šaty v MagicRoom Martine"
  loading="lazy"
  decoding="async"
  width="1200"
  height="800"
/>

<!-- Pre LCP obrázky (hero) -->
<img 
  src="/images/hero.webp"
  alt="..."
  loading="eager"
  fetchpriority="high"
  decoding="sync"
  width="1200"
  height="800"
/>
```

---

## 6. Off-Page SEO

### Stratégia budovania spätných odkazov

**Lokálne odkazy (priorita):**
- Lokálne svadobné časopisy / blogy
- Partnerské stránky (fotografi, kameramani z Martina/Žiliny)
- Regionálne katalógy firiem (žilinský kraj)
- Google Business Profile → spätný odkaz

**Odkazy tvorené obsahom:**
- Poradníky ("Ako vybrať svadobné šaty") → prichádzajúce odkazy zo svadobných blogov
- Infografiky → zdieľanie na sociálnych sieťach

### Integrácia so sociálnymi sieťami

```html
<!-- Open Graph pre zdieľanie na sociálnych sieťach -->
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="MagicRoom - Svadobné šaty Martin" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="MagicRoom — Svadobné šaty Martin" />
<meta name="twitter:description" content="Vysnívané šaty, krásne dekorácie, bezstarostná organizácia." />
<meta name="twitter:image" content="https://www.magicroom.sk/og-image.jpg" />
```

---

## 7. Monitoring & Analytics

### Google Analytics 4 (GA4)

```javascript
// Minimálne udalosti na sledovanie
gtag('event', 'page_view', {
  page_title: document.title,
  page_location: window.location.href
});

gtag('event', 'reserve_click', {
  event_category: 'engagement',
  event_label: 'cta_reservation'
});

gtag('event', 'form_submit', {
  event_category: 'conversion',
  event_label: 'contact_form'
});

gtag('event', 'phone_click', {
  event_category: 'engagement',
  event_label: 'phone_call'
});
```

### Alternatívy (súkromie)

| Nástroj | Cena | Poznámky |
|---------|------|----------|
| Plausible Analytics | ~10€/mesiac | GDPR-compliant, jednoduché |
| Fathom | ~14$/mesiac | Ešte jednoduchšie |
| Google Analytics 4 | Zdarma | Treba cookie banner |
| Vercel Analytics | Zdarma | Stačí pre MVP |

### SEO Audit Checklist

```
Pred spustením:
□ Všetky meta tagy doplnené
□ Schema.org markup overený ( https://search.google.com/test/rich-results )
□ Sitemap.xml pripravený
□ robots.txt správny
□ Stránky responzívne (test na reálnych zariadeniach)
□ Obrázky s alt textom
□ Canonical URLs nastavené
□ H1-H6 hierarchia správna
□ Internal linking funguje

Po spustení (týždeň 1):
□ Google Business Profile overený
□ Indexácia v Google Search Console
□ Prvé crawl errors skontrolované
□ GA4 / Plausible implementované

Po spustení (mesiac 1):
□ Pozície kľúčových slov skontrolované
□ Kliknutia z Google (Search Console)
□ Core Web Vitals v Green/Yellow
□ Spätné odkazy (ak nejaké sú)
```
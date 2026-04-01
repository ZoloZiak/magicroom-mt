# SEO & Local Strategy — MagicRoom

## 1. Keyword Research

### Cel SEO strefy
**Pierwotna:** Martin + Turiec + Turčianske Teplice + Vrútky (do 20 km)
**Wtórna:** Ružomberok, Žilina, Dolný Kubín (tylko przez unikalne słowa kluczowe)

### Primary Keywords (wysoki wolumen, wysoka intencja)

| Keyword | Wolumen (est.) | Trudność | Kategoria |
|---------|---------------|----------|-----------|
| svadobné šaty Martin | 300-500/miesiąc | Średnia | Brand + Location |
| svadobný salón Martin | 200-400/miesiąc | Średnia | Brand + Location |
| lacné svadobné šaty Martin | 50-100/miesiąc | Niska | Cena + Location |
| prenájom dekorácií Martin | 100-200/miesiąc | Niska | Usługa + Location |
| komisný predaj svadobných šiat | 50-100/miesiąc | Niska | Niszowy (UNIKÁTNE) |

### Long-tail Keywords (wysoka konwersja)

| Keyword | Wolumen (est.) | Kategoria |
|---------|---------------|-----------|
| svadobné šaty Martin cena | 50-100/miesiąc | Informacyjny |
| svadobné šaty Turčianske Teplice | 10-30/miesiąc | Location |
| svadobné šaty Turiec | 10-30/miesiąc | Location |
| skúška svadobných šiat Martin | 20-40/miesiąc | Transakcyjny |
| komis svadobné šaty | 20-40/miesiąc | Niszowy (UNIKÁTNE) |
| lacné svadobné šaty Turiec | 10-20/miesiąc | Cena + Location |
| svadobné šaty do 500€ | 30-50/miesiąc | Cena |
| prenájom svadobných dekorácií Martin | 30-50/miesiąc | Transakcyjny |

### LSI Keywords (wspierające)

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

### Meta Tags (dla każdej strony)

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

### Struktura bloga/content marketing

```
Blog (opcjonalnie, po MVP)
│
├── /blog/ako-vybrat-svadobne-saty
│   └── Poradnik: na co zwracać uwagę przy wyborze sukni
│
├── /blog/svadobne-trendy-2026
│   └── Artykuł o trendach na nowy sezon
│
├── /blog/kolko-stoji-svadba
│   └── Budżetowanie ślubu, ceny usług
│
└── /blog/komunitne-spravy
    └── Aktualności z MagicRoom
```

### Struktura nagłówków (H1-H6)

```html
<!-- Homepage -->
<h1>Vysnívané svadobné šaty v Martine</h1>  <!-- Tylko 1 H1 -->
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
<!-- Na każdej podstronie -->
<nav>
  <a href="/">Domov</a>
  <a href="/o-nas">O nás</a>
  <a href="/sluzby">Služby</a>
  <a href="/komisny-predaj">Komisný predaj</a>
  <a href="/prenajom-dekoracii">Dekorácie</a>
  <a href="/kontakt">Kontakt</a>
</nav>

<!-- Cross-linking w treści -->
<!-- Na stronie /prenajom-dekoracii -->
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
Nazwa: MagicRoom
Typ: Svadobný salón
Adres: Jilemníckeho 43, 036 01 Martin
Telefon: +421 950 490 323
Website: https://www.magicroom.sk
Godziny: Tu-We 9-17, Th-Fr 9-17, Sa 9-14
Kategorie: 
  - Primary: Svadobný salón
  - Secondary: Požičovňa dekorácií
  - Secondary: Svadobné služby
```

### Mapy Słowackie (Mapy.cz)

```html
<a href="https://mapy.cz/zakladni?q=MagicRoom+Martin">
  Zobraziť na Mapách
</a>
```

### Lokalne citations

| Platform | Status | URL |
|----------|--------|-----|
| Google Business | ✅ | business.google.com |
| Bing Places | ❌ | Utworzyć |
| Apple Maps | ❌ | Utworzyć |
| Mapy.cz | ❌ | Utworzyć |
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

### Performance (Core Web Vitals targets)

| Metryka | Target | Status |
|---------|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | 🚨 Do monitoringu |
| FID (First Input Delay) | < 100ms | ✅ Astro = fast |
| CLS (Cumulative Layout Shift) | < 0.1 | ✅ |
| TTFB (Time to First Byte) | < 600ms | 🚨 Serwer |
| Speed Index | < 3.0s | 🚨 Do monitoringu |

### Image Optimization

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

<!-- Dla zdjęć LCP (hero) -->
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

### Link Building Strategy

**Lokalne linki (priorytet):**
- Lokalne czasopisma ślubne / blogi
- Strony partnerskie (fotografowie, kamerzysti z Martina/Żyliny)
- Regionalne katalogi firm (žilinský kraj)
- Google Business Profile → backlink

**Content-driven linki:**
- Poradniki ("Jak wybrać suknie ślubną") → inbound links od blogów ślubnych
- Infografiki → dzielenie w social media

### Social Media Integration

```html
<!-- Open Graph dla social share -->
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
// Minimal events do śledzenia
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

### Alternatywy (prywatność)

| Narzędzie | Koszt | Uwagi |
|-----------|-------|-------|
| Plausible Analytics | ~10€/miesiąc | GDPR-compliant, proste |
| Fathom | ~14$/miesiąc | Jeszcze prostsze |
| Google Analytics 4 | Darmowe | Trzeba cookie banner |
| Vercel Analytics | Darmowe | Wystarczy dla MVP |

### SEO Audit Checklist

```
Przed uruchomieniem:
□ Wszystkie meta tagi uzupełnione
□ Schema.org markup zwalidowany ( https://search.google.com/test/rich-results )
□ Sitemap.xml gotowy
□ robots.txt poprawny
□ Strony responsywne (test na realnych urządzeniach)
□ Obrazy z alt text
□ Canonical URLs ustawione
□ H1-H6 hierarchia poprawna
□ Internal linking działa

Po uruchomieniu (tydzień 1):
□ Google Business Profile zweryfikowany
□ Indexacja w Google Search Console
□ Pierwsze crawl errors sprawdzone
□ GA4 / Plausible wdrożone

Po uruchomieniu (miesiąc 1):
□ Pozycje słów kluczowych sprawdzone
□ Kliknięcia z Google (Search Console)
□ Core Web Vitals w Green/Yellow
□ Linki zwrotne (jeśli jakieś)
```

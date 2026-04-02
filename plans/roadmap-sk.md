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
| Social proof section | TODO | Recenzie — reálne fotky |
| Google Analytics | TODO | Sledovanie konverzií |
| Speed optimization | PARTIAL | LCP, headers — viac možno |
| Google Business Profile | IN_PROGRESS | Meta tag pridaný — treba kod z Google Search Console |

### Fáza 2: Konverzia (1 týždeň)

**Ciele:**
- Rezervačný formulár (4 polia, validácia)
- Social proof (reálne recenzie, fotky)
- Google Business Profile
- Optimalizácia výkonu

**Rozsah:**

| Komponent | Status | Poznámky |
|-----------|--------|----------|
| Social proof section | TODO | Reálne recenzie + fotky |
| Google Business Profile | TODO | Verifikácia (robí majiteľ) |
| Speed optimization | PARTIAL | LCP, headers |
| Google Analytics | TODO | Sledovanie konverzií |

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

- [ ] Všetky podstránky fungujú a sú responzívne
- [ ] Kontaktný formulár posiela email cez Resend
- [ ] Navigácia funguje na mobile (hamburger menu)
- [ ] CTA viditeľné na každej podstránke
- [ ] Meta tagy nastavené pre každú stránku
- [ ] Sitemap.xml generovaný automaticky
- [ ] Lighthouse score > 80 (mobile)
- [ ] Žiadne chyby JavaScript v konzole
- [ ] Odkazy na social media fungujú
- [ ] Google Business Profile založený

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

*Document created: 2026-04-01*
*Version: 1.0*

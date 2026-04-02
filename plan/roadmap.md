# Roadmap & Timeline — MagicRoom

## Uwaga co do zakresu
MagicRoom to mały salon z jedną osobą. Strona ma być prosta, przejrzysta i funkcjonalna — nie wielki portal e-commerce. Priorytet: szybkie uruchomienie, podstawowe funkcje, niskie koszty.

## 1. Priorytety implementacji

### Faza 1: MVP (2-3 tygodnie)

**Cele:**
- Działająca strona z wszystkimi podstronami
- Formularz kontaktowy → email lub Supabase
- Responsywność (mobile-first)
- Podstawowe SEO

**Zakres:**

| Komponent | Status | Uwagi |
|-----------|--------|-------|
| Astro projekt + Tailwind | TODO | |
| shadcn/ui setup | TODO | |
| Layout (Header, Footer) | TODO | |
| Homepage | TODO | Hero, Services, Trust, CTA |
| /o-nas | TODO | Historia Natálii |
| /sluzby | TODO | Pakiety + ceny |
| /komisny-predaj | TODO | Status pełnej pojemności |
| /prenajom-dekoracii | TODO | Lista dekoracji |
| /kontakt | TODO | Formularz + mapa |
| Formularz kontaktowy | TODO | Zapis do Supabase |
| Supabase setup | TODO | Baza danych, API |
| SEO basics | TODO | Meta tags, sitemap |
| Mobile testy | TODO | Real devices |

### Faza 2: Konwersja (1 tydzień)

**Cele:**
- Formularz rezerwacji online
- WhatsApp integration
- Social proof elements
- Performance optimization

**Zakres:**

| Komponent | Status | Uwagi |
|-----------|--------|-------|
| Reservation form | TODO | 4 pola, walidacja |
| WhatsApp FAB | TODO | Floating button |
| Social proof section | TODO | Recenzje, liczby |
| Google Business Profile | TODO | Weryfikacja |
| Speed optimization | TODO | Lighthouse > 90 |
| Google Analytics | TODO | Śledzenie konwersji |

### Faza 3: Rozszerzenie (opcjonalne)

**Cele:**
- Galeria zdjęć z lightbox (zoom, fullscreen)
- Blog / poradnik ("Jak wybrać suknię ślubną", "Trendy 2026")
- FAQ sekcja z wyszukiwarką
- Portfolio poprzednich ślubów (za zgodą klientek)
- Partnerzy — poleceni dostawcy (fotograf, catering, DJ)
- Online kalendarz rezerwacji
- Breadcrumbs nawigacja (SEO)
- Strona 404 z powrotem do homepage

---

## 2. Szacowany czas

### Faza 1 — MVP

| Task | Szacowany czas | Osoba |
|------|---------------|-------|
| Projekt Astro + config | 2h | Dev |
| Tailwind + shadcn setup | 1h | Dev |
| Layout components | 3h | Dev |
| Homepage | 4h | Dev |
| Podstrony (5x) | 6h | Dev |
| Supabase setup | 2h | Dev |
| Formularz kontaktowy | 3h | Dev |
| SEO basics | 2h | Dev |
| Testowanie | 3h | Dev |
| **Total** | **~26h** | |

### Faza 2 — Konwersja

| Task | Szacowany czas | Osoba |
|------|---------------|-------|
| Reservation form | 4h | Dev |
| WhatsApp integration | 1h | Dev |
| Social proof | 2h | Dev |
| Google Business | 1h | Właściciel |
| Analytics | 1h | Dev |
| Performance | 2h | Dev |
| **Total** | **~11h** | |

---

## 3. Zależności

```
Projekt Astro
    ↓
Tailwind + shadcn
    ↓
Layout (Header, Footer)
    ↓
Supabase setup
    ↓
Strony (Homepage + 5 podstron)
    ↓
Formularze
    ↓
SEO + Analytics
    ↓
Testowanie + Deploy
```

---

## 4. Ryzyka i mitigacja

| Ryzyko | Prawdopodobieństwo | Wpływ | Mitigacja |
|--------|-------------------|-------|-----------|
| Opóźnienia Supabase | Niskie | Średni | fallback: formularz mailto |
| Problemy z mobilnością | Średnie | Wysoki | Testy na real devices |
| Złożoność shadcn dla dev | Średnie | Niski | Dokumentacja shadcn |
| Zdjęcia/assets | Wysokie | Średni | Placeholder images, stock |

---

## 5. Definition of Done

### MVP uznany za gotowy gdy:

- [ ] Wszystkie podstrony działają i są responsywne
- [ ] Formularz kontaktowy zapisuje do Supabase
- [ ] Nawigacja działa na mobile (hamburger menu)
- [ ] CTA widoczne na każdej podstronie
- [ ] Meta tagi ustawione dla każdej strony
- [ ] Sitemap.xml generowany automatycznie
- [ ] Lighthouse score > 80 (mobile)
- [ ] Brak błędów JavaScript w konsoli
- [ ] Linki do social media działają
- [ ] Google Business Profile założony

---

## 6. Stack technologiczny — decyzje

### Wybrane:

| Kategoria | Wybór | Uzasadnienie |
|-----------|-------|--------------|
| Framework | Astro 5.x | Szybkość, SSR islands, community |
| UI Library | shadcn/ui | Komponenty, Tailwind, customizacja |
| Backend | Supabase | PostgreSQL, Auth, Storage, Edge Functions |
| Styling | Tailwind CSS | Customizacja, shadcn integration |
| Hosting | Vercel | Astro native, CDN, darmowy tier |
| Forms | Astro Actions + Zod | Type-safe, server-side validation |
| Analytics | Vercel Analytics / Plausible | Prostota, prywatność |

### Alternatywy rozważane:

| Kategoria | Alternatywa | Dlaczego nie |
|-----------|-------------|--------------|
| CMS | Sanity / Contentful | Overkill dla małej strony |
| Form backend | Formspree / Basin | Chcemy własne dane w Supabase |
| Hosting | Netlify | Vercel lepszy dla Astro |
| Analytics | Google Analytics 4 | Cookie banners, prywatność |

---

## 7. Budget (opcjonalnie)

### Koszty miesięczne (estymacja):

| Usługa | Plan | Koszt |
|--------|------|-------|
| Vercel | Hobby | 0€ |
| Supabase | Free tier | 0€ |
| Domena (magicroom.sk) | .sk domena | ~15€/rok |
| SSL | W cenie hostingu | 0€ |
| **Total** | | **~15€/rok** |

### Koszty jednorazowe:

| Kategoria | Koszt |
|-----------|-------|
| Zdjęcia (stock) | 0-50€ (opcjonalnie) |
| Logo redesign | 0-200€ (opcjonalnie) |
| Copywriting | 0€ (jeśli własne) |

---

## 8. Następne kroki

1. **Zatwierdzenie specyfikacji** — review SPEC.md
2. **Decyzja: Hosting** — Vercel vs inny
3. **Supabase project** — założenie i schema
4. **Design mockupy** — jeśli potrzebne przed kodzeniem
5. **Rozpoczęcie Fazy 1** — development

---

*Document created: 2026-04-01*
*Version: 1.0*

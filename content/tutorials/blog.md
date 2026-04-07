# Návod: Blog — Pridávanie článkov

Tu nájdeš návod, ako pridávať a upravovať články na blogu.

## 📄 Kde sú blog posty?

Všetky blog posty sú v súbore:
`content/json/blog.json`

## 🏗️ Štruktúra blog postu

Každý článok má takúto štruktúru:

```json
{
  "slug": "nazov-clanku",
  "enSlug": "article-name-in-english",
  "image": "dresses",
  "sk": {
    "title": "Názov článku",
    "description": "Krátky popis (pre SEO)",
    "excerpt": "Ukážka textu pre zoznam článkov",
    "date": "2026-04-01",
    "readTime": "5 min čítania",
    "content": "Celý obsah článku...",
    "tags": ["tag1", "tag2"]
  },
  "en": {
    "title": "Article Title",
    "description": "Short description (for SEO)",
    "excerpt": "Preview text for article list",
    "date": "2026-04-01",
    "readTime": "5 min read",
    "content": "Full article content...",
    "tags": ["tag1", "tag2"]
  }
}
```

## ➕ Ako pridať nový článok

1. Otvor súbor `content/json/blog.json` na GitHube
2. Pridaj nový objekt do poľa `posts`
3. Dodrž štruktúru ako príklad vyššie
4. Prelož obsah do angličtiny (pole `en`)
5. Vyber obrázok z: `dresses`, `founder`, `decorMain`
6. Klikni na "Commit changes"

**Dôležité pravidlá:**
- `slug` musí byť jedinečný (bez medzier, použi pomlčky)
- `enSlug` musí byť jedinečný a v angličtine
- Dátum musí byť vo formáte `YYYY-MM-DD`
- `readTime` píš vždy s jednotkou (napr. "5 min čítania")

## ✏️ Príklad nového článku

```json
{
  "slug": "ako-vybrat-spravne-saty",
  "enSlug": "how-to-choose-right-dress",
  "image": "dresses",
  "sk": {
    "title": "Ako vybrať správne svadobné šaty",
    "description": "Praktické tipy pre výber dokonalých šiat.",
    "excerpt": "Výber svadobných šiat je dôležité rozhodnutie...",
    "date": "2026-04-07",
    "readTime": "8 min čítania",
    "content": "Tu napíš celý obsah článku...",
    "tags": ["šaty", "výber", "rady"]
  },
  "en": {
    "title": "How to Choose the Right Wedding Dress",
    "description": "Practical tips for choosing the perfect dress.",
    "excerpt": "Choosing a wedding dress is an important decision...",
    "date": "2026-04-07",
    "readTime": "8 min read",
    "content": "Write the full content of the article here...",
    "tags": ["dresses", "selection", "advice"]
  }
}
```

## 🖼️ Obrázky

Obrázok pre článok vyberáš z kľúčových obrázkov:
- `dresses` — svadobné šaty
- `founder` — Natália
- `decorMain` — dekorácie

Po uložení sa blog automaticky aktualizuje do 2-3 minút.

---

*Potrebuješ pomoc? Pozri [README](./README.md) alebo kontaktuj developera.*
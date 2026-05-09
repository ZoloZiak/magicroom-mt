# Návod: Dekorácie na prenájom 🕯️

Tento návod ti pomôže spravovať katalóg dekorácií, ktoré ponúkaš na prenájom.

## 📂 Kde nájdeš dáta?

1. **Texty a ceny:** Súbor `content/json/decor.json`
2. **Fotky:** Priečinok `content/images/decorations/`

---

## 🛠️ Ako pridať alebo zmeniť dekoráciu?

### Krok 1: Otvor súbor s dátami
Klikni na tento odkaz: [content/json/decor.json](../json/decor.json) a potom na ikonu ceruzky (Edit).

### Krok 2: Uprav informácie
Dáta sú rozdelené podľa kategórií (napr. "Vázy", "Svietniky"). Každá položka má:
- `id`: unikátny názov (bez medzier, napr. `biely-svietnik`)
- `name`: názov, ktorý uvidí nevesta
- `price`: cena prenájmu (napr. `1.50 €`)
- `unit`: jednotka (napr. `ks`, `set`)
- `image`: názov fotky (napr. `svietnik-1.jpg`)

### Krok 3: Pridaj fotku
Ak pridávaš novú dekoráciu, nahraj jej fotku do priečinka `content/images/decorations/`. 
**Dôležité:** Názov fotky sa musí presne zhodovať s tým, čo si napísala v `decor.json` do políčka `image`.

---

## ✅ Odporúčanie
Fotky by mali byť vo formáte `.jpg` alebo `.png` a ideálne v dobrej kvalite, aby nevesty videli detaily.

---

[Späť na hlavný návod](./README.md)

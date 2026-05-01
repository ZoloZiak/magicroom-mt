# Šaty — ako pridať/upraviť

🔗 **Otvoriť:** `content/json/dresses.json`

---

## Dva typy šiat

Na webe sú **dve kategórie šiat**:

| Kategória | URL (SK) | URL (EN) |
|-----------|----------|----------|
| Svadobné | `/svadobne-saty` | `/dresses` |
| Spoločenské | `/spolocenske-saty` | `/formal-dresses` |

---

## Štruktúra

```json
{
  "dresses": [
    {
      "id": "nazov-siat",
      "name": "Názov šiat",
      "description": "Popis šiat",
      "price": 350,
      "size": "38",
      "type": "new",
      "status": "available",
      "color": "biela",
      "style": "elegantná",
      "featured": true,
      "category": "wedding",
      "images": ["nazov-siat"]
    }
  ]
}
```

---

## Polia

| Pole | Hodnota | Poznámka |
|------|--------|---------|
| `id` | `nazov-siat` | Jedinečný názov (malé písmená, pomlčky) |
| `name` | "Názov" | Názov ktorý sa zobrazí |
| `description` | "Popis" | Krátky popis |
| `price` | 350 | Cena v € |
| `size` | "38" | Veľkosť |
| `type` | `"new"` alebo `"consignment"` | nové / komis |
| `status` | `"available"`, `"reserved"`, `"sold"` | Dostupné... |
| `color` | "biela" | Farba |
| `style` | "elegantná" | Štýl |
| `featured` | `true` / `false` | Zobraziť na úvodnej stránke? |
| `category` | `"wedding"` alebo `"formal"` | **KATEGÓRIA — povinné!** |
| `images` | `["nazov-siat"]` | Pole s názvami fotiek (bez prípony) |

---

## Kategória — DÔLEŽITÉ!

Po pridaní novej stránky pre spoločenské šaty **musíš** pridať pole `category`:

| Kategória | Hodnota | Zobrazí sa na stránke |
|-----------|---------|----------------------|
| Svadobné šaty | `"wedding"` | `/svadobne-saty` |
| Spoločenské šaty | `"formal"` | `/spolocenske-saty` |

**Príklad pre spoločenské šaty:**

```json
{
  "id": "ruzova-stuzkova",
  "name": "Ružová stužková",
  "description": "Elegantné šaty na stužkovú",
  "price": 89,
  "size": "36",
  "type": "new",
  "status": "available",
  "color": "ružová",
  "style": "elegantná",
  "featured": true,
  "category": "formal",
  "images": ["ruzova-stuzkova"]
}
```

**Ak pole `category` chýba:**
- Šaty sa zobrazia ako svadobné (predvolené `"wedding"`)

---

## Fotka (VEĽMI DÔLEŽITÉ!)

1. Choď do `content/images/dresses/`
2. Nahraj fotku - **názov musí byť rovnaký ako `id` v JSON!**
3. Príklad: ak je `"id": "moje-saty"`, fotka musí byť `moje-saty.jpg` alebo `moje-saty.png`

**Dôležité:** 
- ID a názov fotky musia presne sedieť
- Podporované formáty: `.jpg`, `.jpeg`, `.png` (veľké aj malé písmená)
- Ak fotka chýba, zobrazí sa biely placeholder

**Aktuálne chýbajúce fotky:**
- romanticky-zavoj
- minimalistka

---

## Viac fotiek pre jedny šaty

Ak máš viac fotiek jedných šiat, pridaj ich do poľa `images`:

```json
{
  "id": "moje-saty",
  "name": "Moje šaty",
  ...
  "images": ["moje-saty-1", "moje-saty-2", "moje-saty-3"]
}
```

Potom nahraj všetky fotky do `content/images/dresses/` s názvami:
- `moje-saty-1.jpg`
- `moje-saty-2.jpg`
- `moje-saty-3.jpg`

**Funkcia:**
- Pri hoveri na šaty sa zobrazia šípky vľavo/vpravo
- Šípkami možno prechádzať medzi fotkami
- Ak je len 1 fotka, šípky sa nezobrazia

---

✅ Hotovo!
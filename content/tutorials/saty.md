# Svadobné šaty — ako pridať/upraviť

🔗 **Otvoriť:** `content/json/dresses.json`

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
| `images` | `["nazov-siat"]` | Pole s názvami fotiek (bez prípony) |

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
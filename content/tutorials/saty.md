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
      "featured": true
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

✅ Hotovo!
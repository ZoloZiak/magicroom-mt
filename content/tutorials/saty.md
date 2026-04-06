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

## Fotka

1. Choď do `content/images/dresses/`
2. Nahraj fotku ako `nazov-siat.jpg` (alebo `.png`)
3. Názov fotky = `id` v JSON súbore.

---

✅ Hotovo!
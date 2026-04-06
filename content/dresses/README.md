# Dress Catalog — CMS Content

## Štruktúra / Structure

```
content/dresses/          ← JSON súbory / JSON files
public/content/dresses/   ← Fotky / Photos
```

## Pridanie nových šiat / Adding new dresses

### 1. Pridaj fotku / Add photo
Nahraj do `public/content/dresses/`
- Formát: JPG, JPEG, PNG
- Názov: napr. `moje-saty.jpg`

### 2. Pridaj JSON súbor / Add JSON file
Vytvor súbor v `content/dresses/` s rovnakým názvom:

```json
{
  "id": "moje-saty",
  "name": "Emma - Saténové svadobné šaty",
  "description": "Krásne saténové šaty s čipkou.",
  "price": 450,
  "size": "38",
  "type": "new",
  "status": "available",
  "color": "Biela",
  "style": "Elegantné",
  "details": "Saténová sukňa, čipkované rukávy."
}
```

## JSON Polia / JSON Fields

| Field | Type | Popis / Description |
|-------|------|---------------------|
| `id` | string | Unikátne ID |
| `name` | string | Názov šiat |
| `description` | string | Krátky popis |
| `price` | number | Cena v € |
| `size` | string | Veľkosť |
| `type` | `"new"` \| `"consignment"` | Nové / Komis |
| `status` | `"available"` \| `"reserved"` \| `"sold"` | Dostupnosť |
| `color` | string | Farba |
| `style` | string | Štýl |
| `details` | string | Dodatočné detaily |

## Rýchle akcie / Quick actions

**Pridať nové šaty / Add new dress:**
1. Skopíruj existujúci JSON súbor
2. Premenuj (napr. `nove-saty.json`)
3. Pridaj matching fotku (`nove-saty.jpg`)
4. Uprav JSON obsah
5. Commit & push

**Označiť ako predané / Mark as sold:**
Zmeň `"status": "available"` na `"status": "sold"`

---

Stránka automaticky načíta všetky JSON súbory z `content/dresses/` a zobrazí dostupné šaty na `/svadobne-saty`.
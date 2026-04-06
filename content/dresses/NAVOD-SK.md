# Ako pridať šaty cez GitHub

🔗 **Otvoriť:** https://github.com/ziak-z/magicroom-mt

---

## 1. Pridaj šaty

### Krok 1
Ideme do `content/dresses/` → klikni **Add file** → **Create new file**

### Krok 2
Názov súboru: `julia.json` (tvoje-slovo.json)

### Krok 3
Vlož toto:

```json
{
  "id": "julia",
  "name": "Julia",
  "description": "Krásne svadobné šaty",
  "price": 350,
  "size": "38",
  "type": "new",
  "status": "available",
  "color": "biela",
  "style": "elegantná"
}
```

### Krok 4
Zmeň si podľa seba:
- `id` = názov súboru bez .json
- `name` = názov ktorý sa zobrazí
- `price` = cena
- `type` = `new` (nové) alebo `consignment` (komis)
- `status` = `available`, `reserved`, `sold`

### Krok 5
Klikni **Commit changes**

---

## 2. Pridaj fotku

Ideme do `public/content/dresses/` → **Add file** → **Upload files**

Nahraj fotku ako `julia.jpg` (rovnaké ako id v JSON)

---

Hotovo! 🌸
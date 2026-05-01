# Galéria — ako pridať fotky

🔗 **Otvoriť:** `content/json/gallery.json`

---

## Pridať fotku do zoznamu

```json
{
  "gallery": [
    {
      "filename": "moje-fotka.jpg",
      "alt": "Popis obrázka",
      "altEn": "Image description",
      "title": "Názov",
      "titleEn": "Title"
    }
  ]
}
```

---

## Nahrať skutočnú fotku

1. Choď do `content/images/gallery/`
2. Nahraj súbor `moje-fotka.jpg` (formát .jpg alebo .png)

---

## Poznámky

- `filename` = názov súboru v `content/images/gallery/`
- Astro automaticky optimalizuje fotky (zmenší veľkosť a zlepší rýchlosť načítania).
- Ak zmeníš názov súboru, musíš ho zmeniť aj v `content/json/gallery.json`.

---

✅ Hotovo!
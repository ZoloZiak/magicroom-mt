# Ako pridať svadobné šaty na web

## Jednoduchý návod

### 1. Vytvor súbory

V PC choď do dvoch zložiek:

1. **Fotka** — choď do `public/content/dresses/`
   - Pridaj fotku šiat vo formáte JPG alebo PNG
   - Názov: napr. `moje-satky-01.jpg`
   
2. **JSON súbor** — choď do `content/dresses/`
   - Vytvor textový súbor s rovnakým názvom
   - Názov: napr. `moje-satky-01.json`

### 2. Uprav JSON súbor

Otvori v texte editore (Notepad, TextEdit...) a vyplň:

```json
{
  "id": "moje-satky-01",
  "name": "Emma - Saténové šaty",
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

### 3. Nahraj na GitHub

1. Otvor https://github.com/ZoloZiak/magicroom-mt
2. Pre fotky: choď do `public/content/dresses/` → Add file → Upload
3. Pre JSON: choď do `content/dresses/` → Add file → Upload
4. Napíš správu (napr. "Pridané šaty Emma")
5. Klikni **Commit changes**

### 4. Hotovo!

Web sa automaticky aktualizuje do 1-2 minút.

---

## Čo znamenajú polia

| Pole | Čo tam napísať |
|------|-----------------|
| `name` | Názov šiat (napr. "Emma - Saténové") |
| `description` | Krátky popis |
| `price` | Cena v EUR (napr. 450) |
| `size` | Veľkosť (napr. "38") |
| `type` | `"new"` = nové, `"consignment"` = komisné |
| `status` | `"available"` = na predaj, `"reserved"` = rezervované, `"sold"` = predané |
| `color` | Farba (Biela, Smotanová...) |
| `style` | Štýl (Elegantné, Klasické, Romantické...) |
| `details` | Ďalšie info (zips, podprsenka...) |

---

## Časté otázky

**Ako zmením cenu?**  
Zmeň hodnotu `price` v JSON (napr. na 399).

**Ako označím ako predané?**  
Zmeň `"status": "available"` na `"status": "sold"`.

**Môžem použiť iný formát fotky?**  
Áno, funguje JPG, JPEG aj PNG.

**Čo keď to nefunguje?**  
Napíš mi (Zolo) a ja to opravím.

---

Pre viac info pozri README.md v zložke.
# Ako pridať svadobné šaty — Návod pre Natáliu

## Čo potrebuješ

1. **GitHub účet** — ak ho ešte nemáš, vytvor si ho na https://github.com
2. **Prístup k repozitáru** — Zolo ti pridá ako collabodatora

## Krok za krokom

### 1. Otvor repozitár
 choď na: https://github.com/ziak-z/magicroom-mt

### 2. Nájdľ content/dresses
V repozitári klikni na priečinok `content` → `dresses`

### 3. Pridaj JSON súbor
Klikni na "Add file" → "Create new file"

Názov súboru musí byť: `nazov-siat.json` (malé písmená, pomlčky)

Obsah súboru:
```json
{
  "id": "tvoj-unikatny-id",
  "name": "Názov šiat",
  "description": "Krátky popis",
  "price": 350,
  "size": "38",
  "type": "new",
  "status": "available",
  "color": "biela",
  "style": "elegantná"
}
```

### 4. Pridaj fotku
1. Choď do `public/content/dresses/`
2. Klikni na "Add file" → "Upload files"
3. Nahraj fotku s názvom: `tvoj-unikatny-id.jpg` alebo `.jpeg`

## Typy a stavy

| Pole | Možnosti |
|------|----------|
| `type` | `new` (nové) alebo `consignment` (komis) |
| `status` | `available` (dostupné), `reserved` (rezervované), `sold` (predané) |

## Po uložení
Po commitnutí zmien sa na stránke automaticky zobrazia nové šaty (do pár minút).

## Pomoc
Ak máš problém, napíš Zolovi.
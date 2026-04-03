# Dress Catalog Management

## Folder structure

```
magicroom-mt/
├── content/dresses/          ← JSON súbory (tu pridávaj/upravuj)
├── public/content/dresses/    ← Fotky (tu nahrávaj fotky)
└── ...
```

## How to add/edit dresses

1. **Add a photo** to `public/content/dresses/` folder:
   - Format: JPG, JPEG, or PNG
   - Naming: e.g., `svadobne-001.jpg`

2. **Add a JSON file** to `content/dresses/` with the same name:
   - e.g., `svadobne-001.json`

3. **Edit the JSON** with dress details:

```json
{
  "id": "svadobne-001",
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

## JSON Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique ID |
| `name` | string | Dress name |
| `description` | string | Short description |
| `price` | number | Price in EUR |
| `size` | string | Size |
| `type` | "new" \| "consignment" | New or used |
| `status` | "available" \| "reserved" \| "sold" | Availability |
| `color` | string | Color |
| `style` | string | Style |
| `details` | string | Additional details |

## Quick actions

**To add a new dress:**
1. Copy an existing JSON file
2. Rename it (e.g., `svadobne-002.json`)
3. Add matching photo (`svadobne-002.jpg`)
4. Edit the JSON content
5. Commit & push

**To mark as sold:**
Change `"status": "available"` to `"status": "sold"` in the JSON file.

---

The site automatically reads all JSON files from `content/dresses/` and displays available dresses on `/svadobne-saty` page.
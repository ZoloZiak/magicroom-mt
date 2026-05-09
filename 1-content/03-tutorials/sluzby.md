# Služby — ako upraviť

🔗 **Otvoriť:** `content/json/services.json`

---

## Balíky (packages)

```json
{
  "sk": {
    "packages": [
      {
        "name": "Názov",
        "price": "150 €",
        "description": "Popis",
        "recommended": true,
        "features": ["položka 1", "položka 2"]
      }
    ]
  }
}
```

| Pole | Poznámka |
|------|----------|
| `recommended` | `true` = odporúčaný balík |
| `features` | Zoznam bodov |

---

## Extra služby

V rovnakom súbore, sekcia `extra`:

```json
{
  "sk": {
    "extra": [
      {
        "title": "Názov",
        "price": "15 €",
        "description": "Popis"
      }
    ]
  }
}
```

---

✅ Hotovo!
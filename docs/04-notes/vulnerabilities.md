# Dependabot Alerts

**Dátum:** 2026-04-06

## Aktuálne alerty

**Stav:** ✅ VYRIEŠENÉ

## Riešenie

Pridané `overrides` do `package.json`:

```json
{
  "overrides": {
    "path-to-regexp": "^8.0.0",
    "defu": "^6.1.6",
    "vite": "^6.0.0"
  }
}
```

## Pôvodné alerty (už opravené)

1. **path-to-regexp** — backtracking regex (High)
   - Override: ^8.0.0

2. **defu** — Prototype pollution (High)  
   - Override: ^6.1.6

3. **vite** — File read vulnerabilities (High)
   - Override: ^6.0.0

## Links

- https://github.com/ZoloZiak/magicroom-mt/security/dependabot
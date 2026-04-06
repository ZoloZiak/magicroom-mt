# Bilingual Website Procedure — SK ↔ EN

This document describes the procedure for maintaining both Slovak and English versions of the MagicRoom website.

## Why This Exists

The website targets two audiences:
1. **Slovak customers** — local market in Martin/Turiec region
2. **Norwegian students** — international customers studying in Slovakia, targeting via EN version

Every change to the Slovak version MUST be mirrored to the English version.

---

## Procedure: Modifying Any Page

### Step 1: Identify the File Pair

| Slovak File | English File |
|-------------|--------------|
| `src/pages/index.astro` | `src/pages/en/index.astro` |
| `src/pages/sluzby.astro` | `src/pages/en/sluzby.astro` |
| `src/pages/o-nas.astro` | `src/pages/en/o-nas.astro` |
| `src/pages/kontakt.astro` | `src/pages/en/kontakt.astro` |
| `src/pages/svadobne-saty.astro` | `src/pages/en/svadobne-saty.astro` |
| `src/pages/komisny-predaj.astro` | `src/pages/en/komisny-predaj.astro` |
| `src/pages/prenajom-dekoracii.astro` | `src/pages/en/prenajom-dekoracii.astro` |
| `src/pages/blog/index.astro` | `src/pages/en/blog/index.astro` |
| `src/pages/blog/svadobne-trendy-2026.astro` | `src/pages/en/blog/wedding-trends-2026.astro` |

### Step 2: Modify Both Files

When editing any Slovak page:
1. Open both the SK and EN files
2. Apply the same content changes to EN version
3. Translate all text content (headings, descriptions, buttons, etc.)
4. Keep URLs pointing to `/en/*` for internal links

### Step 3: Update Data Layer

If adding new **content text** (not just code changes):

**Option A: Use existing `_EN` constants**
- Edit `src/data/content.ts` — find the corresponding `_EN` constant and update
- Example: If modifying `SERVICE_PACKAGES`, also update `SERVICE_PACKAGES_EN`

**Option B: Create new `_EN` constant if doesn't exist**
```typescript
// In src/data/content.ts
export const MY_FEATURE = [...] // Slovak version

export const MY_FEATURE_EN = [...] // English version
```

If changing **navigation or links**:
- Edit `src/data/site.ts` — update both `NAV_LINKS` and `NAV_LINKS_EN`

### Step 4: Update Components (if needed)

If the page uses Header/Footer:
- Slovak pages: Use `Header.astro`, `Footer.astro`
- English pages: Use `HeaderEn.astro`, `FooterEn.astro`

If the page uses BookingForm:
- Pass `language="sk"` or `language="en"` prop

### Step 5: Verify Build & Tests

```bash
# Build
npm run build

# Unit tests
npm run test

# E2E tests  
npm run test:e2e
```

All tests must pass for both SK and EN versions.

---

## Adding New Pages

When adding a new page to the Slovak version:

1. Create `src/pages/new-page.astro` (Slovak)
2. Create `src/pages/en/new-page.astro` (English)
3. Add navigation link to `site.ts`:
   - `NAV_LINKS` for Slovak
   - `NAV_LINKS_EN` for English
4. Add breadcrumbs to both pages
5. Run build and tests

---

## Testing Checklist

Before committing, verify:

- [ ] Build passes
- [ ] All Slovak pages load (`/`, `/sluzby`, `/o-nas`, etc.)
- [ ] All English pages load (`/en`, `/en/sluzby`, `/en/o-nas`, etc.)
- [ ] Language switcher works on all pages
- [ ] Internal links in EN version point to `/en/*`
- [ ] GA4 tracking works on both versions
- [ ] No console errors on either version

---

## Common Mistakes to Avoid

| Mistake | Prevention |
|---------|------------|
| Forgetting EN version | Always create/update in pairs |
| Links pointing to SK in EN | Check `href` attributes — must use `/en/*` |
| Missing translations | Run build, check for missing `_EN` exports |
| Breaking build | Run `npm run build` before commit |

---

## Quick Reference

### Files to Update When Changing...

| Change Type | Files to Update |
|-------------|-----------------|
| Page content | `page.astro` + `en/page.astro` |
| Navigation links | `site.ts` (NAV_LINKS + NAV_LINKS_EN) |
| Footer content | `Footer.astro` + `FooterEn.astro` |
| Header content | `Header.astro` + `HeaderEn.astro` |
| Booking form | `BookingForm.astro` (language prop) |
| Data/content text | `content.ts` (+ `_EN` constant) |
| Contact info | `site.ts` (PHONE_*, EMAIL_*, etc.) |

---

*Document created: 2026-04-03*
*Version: 1.0*

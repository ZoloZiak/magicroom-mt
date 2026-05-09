# Bilingual Website Procedure — SK ↔ EN

This document describes the procedure for maintaining both Slovak and English versions of the MagicRoom website.

## Why This Exists

The website targets two audiences:
1. **Slovak customers** — local market in Martin/Turiec region
2. **Norwegian students** — international customers studying in Slovakia, targeting via EN version

Every change to the Slovak version MUST be mirrored to the English version. In the current Astro 6 implementation, this is handled via a dynamic routing system `[lang]`.

## Why Target English?

Based on our **[Research on Norwegian Students](../01-specs/research/norwegian-students.md)**, there is a significant community of international students in Martin (specifically at Jessenius Faculty of Medicine). The English version of the website specifically targets:
- **Formal Wear:** Proms, Galas, and the traditional "Julebord" (Christmas parties).
- **Ease of Access:** Providing English-friendly booking via WhatsApp.

---

## Procedure: Modifying Content

### Step 1: Translations File

The primary source of text content is now `src/lib/translations.ts`. 

1. Open `src/lib/translations.ts`.
2. Update the `sk` object for Slovak content.
3. Update the `en` object for English content.
4. Ensure both objects have the same keys (enforced by the `Translations` interface).

### Step 2: Dynamic Routing `[lang]`

We use a single template for both languages located in `src/pages/[lang]/`. 

- `src/pages/[lang]/index.astro` handles both `/` and `/en`.
- `src/pages/[lang]/[...rest].astro` handles all other pages (e.g., `/sluzby` and `/en/services`).

You rarely need to modify individual files for both languages unless you are adding a completely new page.

### Step 3: Slug Mapping

If you add a new page, update the slug mapping in `src/lib/i18n.ts`:

```typescript
export const SLUG_MAP: Record<string, string> = {
  'sluzby': 'services',
  'kontakt': 'contact',
  // Add your new page here: 'sk-slug': 'en-slug'
};
```

---

## Adding New Pages

1. Add the new SK slug and its EN translation to `SLUG_MAP` in `src/lib/i18n.ts`.
2. Add the content to both `sk` and `en` objects in `src/lib/translations.ts`.
3. If the page requires a custom layout, create a new template in `src/components/templates/`.

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
| Text content | `src/lib/translations.ts` |
| URL / Slugs | `src/lib/i18n.ts` |
| Page structure | `src/pages/[lang]/*` or `src/components/templates/*` |
| Navigation links | `src/data/site.ts` |
| Booking form logic | `src/components/forms/BookingForm.astro` |
| Data/images | `src/data/content.ts` |

---

*Document created: 2026-04-03*
*Version: 1.0*

# Testing — MagicRoom

## Test Commands

```bash
npm run test          # Unit tests (69 tests)
npm run test:e2e     # E2E tests (121 tests)
npm run test:watch   # Watch mode
```

## Test Structure

```
testing/                    # UNIT TESTS (Vitest)
├── mobile-menu.test.ts     # 11 tests — mobile menu logic
├── site.test.ts            # 20 tests — config, navigation, schemas
├── content.test.ts         # 25 tests — services, catalog, content
├── analytics.test.ts       # 13 tests — GA4 tracking
└── README.md              # This file

e2e/                        # E2E TESTS (Playwright)
├── mobile-menu.spec.ts     # 15 tests — mobile menu UX
├── seo.spec.ts            # SEO tests (meta, schema, sitemap)
├── analytics.spec.ts      # GA4 tracking tests
├── accessibility.spec.ts  # A11y tests
├── routes.spec.ts         # All pages return 200
└── ...
```

## Current Coverage

| Type | Count | Status |
|------|-------|--------|
| Unit tests | 69 | ✅ Passing |
| E2E tests | 121 | ✅ Passing |
| Mobile menu tests | 15 | ✅ Passing |

## CI/CD

GitHub Actions runs tests automatically on every `git push` to main:
- `npm run test` — unit tests
- `npm run test:e2e` — E2E tests (requires dev server on port 4321)

## Adding Tests

### Unit Test
Add to `testing/`:
```typescript
import { describe, it, expect } from 'vitest';

describe('Feature', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
```

### E2E Test
Add to `e2e/`:
```typescript
import { test, expect } from '@playwright/test';

test('feature works', async ({ page }) => {
  await page.goto('/');
  // ...
});
```
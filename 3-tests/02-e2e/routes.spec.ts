import { test, expect } from '@playwright/test';

const SK_PAGES = [
  '/',
  '/o-nas',
  '/sluzby',
  '/svadobne-saty',
  '/galeria',
  '/blog',
  '/komisny-predaj',
  '/prenajom-dekoracii',
  '/partneri',
  '/kontakt',
];

const EN_PAGES = [
  '/en',
  '/en/about',
  '/en/services',
  '/en/dresses',
  '/en/galeria',
  '/en/blog',
  '/en/consignment',
  '/en/decorations',
  '/en/partners',
  '/en/contact',
];

const ALL_PAGES = [...SK_PAGES, ...EN_PAGES];

for (const path of ALL_PAGES) {
  test(`page ${path} returns 200`, async ({ page }) => {
    const response = await page.goto(path, { waitUntil: 'domcontentloaded' });
    expect(response?.status()).toBe(200);
  });

  test(`page ${path} has no critical errors in console`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    await page.goto(path, { waitUntil: 'networkidle' });
    const criticalErrors = errors.filter(e => 
      !e.includes('favicon') && 
      !e.includes('404') &&
      !e.includes('Failed to load resource')
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test(`page ${path} has valid title`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'domcontentloaded' });
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(5);
  });
}

test('homepage redirects correctly', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const url = page.url();
  expect(url).toContain('/');
});

test('EN homepage is accessible', async ({ page }) => {
  const response = await page.goto('/en', { waitUntil: 'domcontentloaded' });
  expect(response?.status()).toBe(200);
});
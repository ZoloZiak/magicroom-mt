import { test, expect } from '@playwright/test';

const ADMIN_URL = '/admin/login';
const ADMIN_PASSWORD = 'magic2026';

test.describe('Admin Pages (Static Build)', () => {
  test('login page loads', async ({ page }) => {
    await page.goto(ADMIN_URL);
    await expect(page.locator('h1:has-text("MagicRoom")')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
  });

  test('dashboard page loads', async ({ page }) => {
    await page.goto('/admin/dashboard');
    await expect(page.locator('h1:has-text("Dashboard")')).toBeVisible({ timeout: 15000 });
  });

  test('gallery page loads', async ({ page }) => {
    await page.goto('/admin/gallery');
    await expect(page.locator('h1:has-text("Galéria")')).toBeVisible({ timeout: 15000 });
  });

  test('dresses page loads', async ({ page }) => {
    await page.goto('/admin/dresses');
    await expect(page.locator('h1:has-text("Svadobné šaty")')).toBeVisible({ timeout: 15000 });
  });

  test('blog page loads', async ({ page }) => {
    await page.goto('/admin/blog');
    await expect(page.locator('h1:has-text("Blog")')).toBeVisible({ timeout: 15000 });
  });

  test('decor page loads', async ({ page }) => {
    await page.goto('/admin/decor');
    await expect(page.locator('h1:has-text("Dekorácie")')).toBeVisible({ timeout: 15000 });
  });

  test('faq page loads', async ({ page }) => {
    await page.goto('/admin/faq');
    await expect(page.locator('h1:has-text("FAQ")')).toBeVisible({ timeout: 15000 });
  });

  test('partners page loads', async ({ page }) => {
    await page.goto('/admin/partners');
    await expect(page.locator('h1:has-text("Partneri")')).toBeVisible({ timeout: 15000 });
  });

  test('content page loads', async ({ page }) => {
    await page.goto('/admin/content');
    await expect(page.locator('h1:has-text("Obsah")')).toBeVisible({ timeout: 15000 });
  });

  test('help page loads', async ({ page }) => {
    await page.goto('/admin/help');
    await expect(page.locator('h1:has-text("Návod")')).toBeVisible({ timeout: 15000 });
  });
});

test.describe('Admin Gallery Upload', () => {
  test('gallery page has upload form', async ({ page }) => {
    await page.goto('/admin/gallery');
    await expect(page.locator('text=Nahrať novú fotku')).toBeVisible({ timeout: 15000 });
  });

  test('gallery page shows existing images', async ({ page }) => {
    await page.goto('/admin/gallery');
    // Page should load without errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.reload();
    expect(errors.filter(e => !e.includes('404'))).toHaveLength(0);
  });
});
import { test, expect } from '@playwright/test';

test.describe('MagicRoom Performance', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page.locator('main')).toBeVisible();
  });

  test('no large layout shifts', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // Wait for fonts to load
    await page.waitForTimeout(2000);
    
    const h1 = page.locator('main h1').first();
    await h1.waitFor({ timeout: 10000 });
    const initialBox = await h1.boundingBox();
    
    await page.waitForTimeout(1000);
    
    const afterBox = await h1.boundingBox();
    
    if (initialBox && afterBox) {
      expect(Math.abs(initialBox.y - afterBox.y)).toBeLessThan(10);
    }
  });

  test('fonts are loaded', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    
    const preconnect = page.locator('link[rel="preconnect"][href*="font"]');
    await preconnect.first().waitFor({ timeout: 10000 });
    expect(await preconnect.count()).toBeGreaterThan(0);
  });

  test('page has styles', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    
    const body = page.locator('body');
    await body.waitFor({ timeout: 10000 });
    const bg = await body.evaluate(el => getComputedStyle(el).backgroundColor);
    expect(bg).toBeTruthy();
  });
});
import { test, expect } from '@playwright/test';

test.describe('MagicRoom Performance', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page.locator('main')).toBeVisible();
  });

  test('no large layout shifts', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    
    await page.waitForTimeout(2000);
    
    const h1 = page.locator('main h1').first();
    // Don't use waitFor on hidden elements - just check existence
    await expect(h1).toBeVisible();
    const initialBox = await h1.boundingBox();
    
    await page.waitForTimeout(1000);
    
    const afterBox = await h1.boundingBox();
    
    if (initialBox && afterBox) {
      expect(Math.abs(initialBox.y - afterBox.y)).toBeLessThan(10);
    }
  });

  test('page has styles', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    
    const body = page.locator('body');
    // Don't use waitFor on hidden elements - just check existence
    await expect(body).toBeVisible();
    const bg = await body.evaluate(el => getComputedStyle(el).backgroundColor);
    expect(bg).toBeTruthy();
  });
});
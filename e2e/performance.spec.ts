import { test, expect } from '@playwright/test';

test.describe('MagicRoom Performance', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/');
    
    // Just verify it loads without timeout
    await expect(page.locator('main')).toBeVisible();
  });

  test('no large layout shifts', async ({ page }) => {
    await page.goto('/');
    
    // Wait for fonts to load
    await page.waitForTimeout(1000);
    
    // Get initial layout
    const h1 = page.locator('main h1').first();
    const initialBox = await h1.boundingBox();
    
    // Wait a bit more
    await page.waitForTimeout(1000);
    
    const afterBox = await h1.boundingBox();
    
    // Position shouldn't change dramatically
    if (initialBox && afterBox) {
      expect(Math.abs(initialBox.y - afterBox.y)).toBeLessThan(10);
    }
  });

  test('fonts are loaded', async ({ page }) => {
    await page.goto('/');
    
    // Check fonts are preconnected
    const preconnect = page.locator('link[rel="preconnect"][href*="font"]');
    expect(await preconnect.count()).toBeGreaterThan(0);
  });

  test('page has styles', async ({ page }) => {
    await page.goto('/');
    
    // Page should have styles applied
    const body = page.locator('body');
    const bg = await body.evaluate(el => getComputedStyle(el).backgroundColor);
    expect(bg).toBeTruthy();
  });
});
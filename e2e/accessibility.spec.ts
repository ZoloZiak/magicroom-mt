import { test, expect } from '@playwright/test';

test.describe('MagicRoom Accessibility', () => {
  test('homepage has proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Should have exactly one h1
    const h1Count = await page.locator('main h1').count();
    expect(h1Count).toBe(1);
  });

  test('all images have alt text', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('main img');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('links have accessible names', async ({ page }) => {
    await page.goto('/');
    
    const links = page.locator('main a');
    const count = await links.count();
    
    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      const title = await link.getAttribute('title');
      
      // Link should have text or aria-label or title
      expect(text?.trim() || ariaLabel || title).toBeTruthy();
    }
  });

  test('form inputs have labels', async ({ page }) => {
    await page.goto('/kontakt#booking');
    
    const inputs = page.locator('form input, form select, form textarea');
    const count = await inputs.count();
    
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const name = await input.getAttribute('name');
      
      // Should have associated label
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        expect(await label.count()).toBeGreaterThan(0);
      }
    }
  });

  test('page has proper language attribute', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'sk');
  });
});
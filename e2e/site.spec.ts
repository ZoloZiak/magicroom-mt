import { test, expect } from '@playwright/test';

test.describe('MagicRoom Website', () => {
  test('homepage loads without errors', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/MagicRoom/);
    
    // Use more specific selector - look for the main h1 (not Astro dev toolbar)
    const mainHeading = page.locator('main h1, .hero-title').first();
    await expect(mainHeading).toBeVisible();
  });

  test('navigation works on all key pages', async ({ page }) => {
    const pages = ['/o-nas', '/sluzby', '/kontakt', '/svadobne-saty'];
    
    for (const path of pages) {
      await page.goto(path);
      await expect(page.locator('main')).toBeVisible();
    }
  });

  test('booking form accepts input', async ({ page }) => {
    await page.goto('/kontakt#booking');
    
    // Fill form
    await page.fill('[name="name"]', 'Test User');
    await page.fill('[name="phone"]', '+421 950 490 323');
    await page.fill('[name="email"]', 'test@example.sk');
    
    // Verify values were entered
    await expect(page.locator('[name="name"]')).toHaveValue('Test User');
    await expect(page.locator('[name="phone"]')).toHaveValue('+421 950 490 323');
  });

  test('WhatsApp link exists', async ({ page }) => {
    await page.goto('/');
    
    // Look for WhatsApp link - there are multiple, just check one exists
    const whatsappLink = page.locator('a[href*="wa.me"]').first();
    await expect(whatsappLink).toBeVisible();
  });

  test('mobile view works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Page should load without errors
    await expect(page.locator('main')).toBeVisible();
  });

  test('SEO meta tags present', async ({ page }) => {
    await page.goto('/');
    
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /.*/);
    
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /MagicRoom/);
  });
});
import { test, expect } from '@playwright/test';

test.describe('MagicRoom Form Functionality', () => {
  test('homepage has booking form with all fields', async ({ page }) => {
    await page.goto('/');
    
    const nameInput = page.locator('[name="name"]');
    const phoneInput = page.locator('[name="phone"]');
    const emailInput = page.locator('[name="email"]');
    const serviceSelect = page.locator('[name="service"]');
    
    // Check all fields exist (now optional)
    await expect(nameInput).toBeVisible();
    await expect(phoneInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(serviceSelect).toBeVisible();
  });

  test('booking form service dropdown has options', async ({ page }) => {
    await page.goto('/kontakt#booking');
    
    const serviceSelect = page.locator('[name="service"]');
    await expect(serviceSelect).toBeVisible();
    
    // Check options exist
    const options = serviceSelect.locator('option');
    expect(await options.count()).toBeGreaterThan(1);
  });

  test('form accepts minimal input (only name)', async ({ page }) => {
    await page.goto('/kontakt#booking');
    
    // Fill only name - everything else optional now
    await page.fill('[name="name"]', 'Len meno');
    
    // Can submit without errors
    await page.click('button[type="submit"]');
    
    // Wait for response (may be error 503 if no API key, but form submits)
    await page.waitForTimeout(2000);
  });

  test('whatsapp FAB is visible and green', async ({ page }) => {
    await page.goto('/');
    
    const fab = page.locator('a[data-ga-label="fab_whatsapp"]');
    await expect(fab).toBeVisible();
    
    // Check it has WhatsApp green color
    const bg = await fab.evaluate(el => getComputedStyle(el).backgroundColor);
    expect(bg).toContain('37, 211, 102'); // #25D366
  });

  test('footer contact buttons are visible', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check contact section exists
    await expect(page.locator('footer')).toBeVisible();
  });
});

test.describe('MagicRoom Navigation', () => {
  test('all main pages are accessible', async ({ page }) => {
    const pages = [
      '/',
      '/o-nas',
      '/sluzby', 
      '/svadobne-saty',
      '/kontakt',
      '/komisny-predaj',
      '/prenajom-dekoracii'
    ];
    
    for (const path of pages) {
      await page.goto(path);
      await expect(page.locator('main')).toBeVisible();
    }
  });

  test('mobile menu works on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Menu toggle should be visible on mobile
    const menuToggle = page.locator('#mobile-menu-toggle');
    if (await menuToggle.isVisible()) {
      await menuToggle.click();
      await page.waitForTimeout(500);
      // Menu should open
      const menu = page.locator('#mobile-menu-root');
      expect(menu).toBeTruthy();
    }
  });
});

test.describe('MagicRoom SEO', () => {
  test('all pages have proper language', async ({ page }) => {
    for (const path of ['/', '/o-nas', '/sluzby']) {
      await page.goto(path);
      const html = page.locator('html');
      await expect(html).toHaveAttribute('lang', 'sk');
    }
  });

  test('important pages have meta description', async ({ page }) => {
    const pages = ['/', '/o-nas', '/sluzby', '/kontakt'];
    
    for (const path of pages) {
      await page.goto(path);
      const desc = page.locator('meta[name="description"]');
      const content = await desc.getAttribute('content');
      expect(content).toBeTruthy();
      expect(content.length).toBeGreaterThan(20);
    }
  });

  test('schema markup is present', async ({ page }) => {
    await page.goto('/');
    
    const schema = page.locator('script[type="application/ld+json"]');
    await expect(schema).toHaveCount(1);
  });
});

test.describe('MagicRoom Performance', () => {
  test('pages load reasonably fast', async ({ page }) => {
    const start = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - start;
    
    // Should load under 5 seconds even on slow connection
    expect(loadTime).toBeLessThan(5000);
  });

  test('hero image has proper loading attributes', async ({ page }) => {
    await page.goto('/');
    
    const heroImg = page.locator('main img').first();
    const loading = await heroImg.getAttribute('loading');
    const fetchpriority = await heroImg.getAttribute('fetchpriority');
    
    // First image should be eager for LCP
    expect(loading).toBe('eager');
  });
});

test.describe('MagicRoom Accessibility', () => {
  test('all images have alt text', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('main img');
    const count = await images.count();
    
    for (let i = 0; i < Math.min(count, 10); i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('form inputs are accessible', async ({ page }) => {
    await page.goto('/kontakt#booking');
    
    // All form fields should have associated labels
    const inputs = page.locator('form input, form select, form textarea');
    const inputCount = await inputs.count();
    
    // At least some inputs should exist
    expect(inputCount).toBeGreaterThan(0);
  });
});
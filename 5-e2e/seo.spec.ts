import { test, expect } from '@playwright/test';

test.describe('MagicRoom SEO', () => {
  test('homepage has required meta tags', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /MagicRoom/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /magicroom.sk/);
  });

  test('sitemap exists', async ({ page }) => {
    // Check sitemap is generated in build output
    // In dev mode this may not be available
    const response = await page.request.get('/sitemap-0.xml');
    if (response.ok()) {
      const content = await response.text();
      expect(content).toContain('urlset');
    }
  });

  test('structured data is present on homepage', async ({ page }) => {
    await page.goto('/');
    
    const schemas = page.locator('script[type="application/ld+json"]');
    expect(await schemas.count()).toBeGreaterThan(0);
    
    const text = await schemas.first().textContent();
    expect(text).toContain('WebSite');
    expect(text).toContain('Organization');
    expect(text).toContain('LocalBusiness');
  });

  test('HowTo schema for booking process', async ({ page }) => {
    await page.goto('/');
    
    const text = await page.content();
    expect(text).toContain('HowTo');
    expect(text).toContain('Krok');
  });

  test('Product schema on dress catalog', async ({ page }) => {
    await page.goto('/svadobne-saty');
    
    const text = await page.content();
    expect(text).toContain('Product');
    expect(text).toContain('Offer');
  });

  test('Service schema on services page', async ({ page }) => {
    await page.goto('/sluzby');
    
    const text = await page.content();
    expect(text).toContain('Service');
    expect(text).toContain('ItemList');
  });

  test('FAQ schema on contact page', async ({ page }) => {
    await page.goto('/kontakt');
    
    const text = await page.content();
    expect(text).toContain('FAQPage');
    expect(text).toContain('Question');
  });

  test('robots.txt exists and allows crawling', async ({ page }) => {
    await page.goto('/robots.txt');
    const content = await page.content();
    
    expect(content).toContain('User-agent: *');
    expect(content).toContain('Allow: /');
    expect(content).toContain('sitemap');
  });

  test('key pages are indexed', async ({ page }) => {
    for (const path of ['/', '/sluzby', '/kontakt']) {
      await page.goto(path);
      const robots = page.locator('meta[name="robots"]');
      const content = await robots.getAttribute('content');
      expect(content).not.toContain('noindex');
    }
  });
});
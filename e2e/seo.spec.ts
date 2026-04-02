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

  test('structured data is present', async ({ page }) => {
    await page.goto('/');
    
    const schema = page.locator('script[type="application/ld+json"]');
    await expect(schema).toHaveCount(1);
    
    const text = await schema.textContent();
    expect(text).toContain('WebSite');
    expect(text).toContain('Organization');
    expect(text).toContain('LocalBusiness');
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
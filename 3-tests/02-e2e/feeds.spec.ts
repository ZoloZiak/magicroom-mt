import { test, expect } from '@playwright/test';

test.describe('MagicRoom RSS & Feeds', () => {
  test('RSS feed exists and is valid XML', async ({ page }) => {
    const response = await page.request.get('/rss.xml');
    expect(response.ok()).toBe(true);
    
    const text = await response.text();
    expect(text).toContain('<?xml');
    expect(text).toContain('<rss');
    expect(text).toContain('<channel>');
    expect(text).toContain('MagicRoom');
  });

  test('RSS has blog posts', async ({ page }) => {
    const response = await page.request.get('/rss.xml');
    const text = await response.text();
    
    expect(text).toContain('<item>');
    expect(text).toContain('<title>');
    expect(text).toContain('<link>');
  });

  test('OpenSearch description exists', async ({ page }) => {
    const response = await page.request.get('/opensearch.xml');
    expect(response.ok()).toBe(true);
    
    const text = await response.text();
    expect(text).toContain('OpenSearchDescription');
    expect(text).toContain('MagicRoom');
  });

  test('OpenSearch is linked in page', async ({ page }) => {
    await page.goto('/');
    
    const opensearch = page.locator('link[type="application/opensearchdescription+xml"]');
    await expect(opensearch).toHaveAttribute('href', '/opensearch.xml');
  });

  test('API info endpoint returns JSON', async ({ page }) => {
    const response = await page.request.get('/api/info');
    expect(response.ok()).toBe(true);
    
    const json = await response.json();
    expect(json.name).toBe('MagicRoom');
    expect(json.phone).toBeTruthy();
    expect(json.email).toBeTruthy();
    expect(json.services).toBeDefined();
  });

  test('API info has correct structure', async ({ page }) => {
    const response = await page.request.get('/api/info');
    const json = await response.json();
    
    expect(json).toHaveProperty('name');
    expect(json).toHaveProperty('description');
    expect(json).toHaveProperty('url');
    expect(json).toHaveProperty('phone');
    expect(json).toHaveProperty('email');
    expect(json).toHaveProperty('address');
    expect(json).toHaveProperty('coordinates');
    expect(json).toHaveProperty('social');
    expect(json).toHaveProperty('services');
  });

  test('Dublin Core meta tags present', async ({ page }) => {
    await page.goto('/');
    
    expect(page.locator('meta[name="DC.title"]')).toHaveCount(1);
    expect(page.locator('meta[name="DC.description"]')).toHaveCount(1);
    expect(page.locator('meta[name="DC.publisher"]')).toHaveCount(1);
    expect(page.locator('meta[name="DC.language"]')).toHaveAttribute('content', 'sk-SK');
  });
});
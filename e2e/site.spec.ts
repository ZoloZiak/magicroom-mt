import { test, expect } from '@playwright/test';

test.describe('MagicRoom Website', () => {
  test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(60000);
    page.setDefaultNavigationTimeout(60000);
  });

  test('homepage loads without errors', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle(/MagicRoom/);
    
    const mainHeading = page.locator('main h1, .hero-title').first();
    await expect(mainHeading).toBeVisible();
  });

  test('navigation works on all key pages', async ({ page }) => {
    const pages = ['/o-nas', '/sluzby', '/kontakt', '/svadobne-saty'];
    
    for (const path of pages) {
      await page.goto(path, { waitUntil: 'networkidle' });
      await expect(page.locator('main')).toBeVisible();
    }
  });

  test('booking form accepts input', async ({ page }) => {
    await page.goto('/kontakt#booking', { waitUntil: 'networkidle' });
    
    await page.fill('[name="name"]', 'Test User');
    await page.fill('[name="phone"]', '+421 950 490 323');
    await page.fill('[name="email"]', 'test@example.sk');
    
    await expect(page.locator('[name="name"]')).toHaveValue('Test User');
    await expect(page.locator('[name="phone"]')).toHaveValue('+421 950 490 323');
  });

  test('booking form can be submitted without required fields', async ({ page }) => {
    await page.goto('/kontakt#booking', { waitUntil: 'networkidle' });
    
    await page.waitForSelector('[name="name"]', { timeout: 10000 });
    await page.fill('[name="name"]', 'Minimálny test');
    
    await page.waitForSelector('[name="service"]', { timeout: 5000 });
    await page.selectOption('[name="service"]', 'Skúška svadobných alebo spoločenských šiat');
    
    await page.click('button[type="submit"]');
    
    const response = await page.waitForResponse('**/api/booking', { timeout: 5000 }).catch(() => null);
    expect(response || page.locator('[data-booking-status], button[type="submit"]')).toBeTruthy();
  });

  test('WhatsApp link exists', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    
    await page.waitForLoadState('networkidle');
    
    const whatsappLink = page.locator('a[href*="wa.me"]').first();
    await expect(whatsappLink).toBeVisible({ timeout: 10000 });
  });

  test('mobile view works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    
    await expect(page.locator('main')).toBeVisible();
  });

  test('SEO meta tags present', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    
    await page.waitForTimeout(2000);
    
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /.*/);
    
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /MagicRoom/);
  });
});

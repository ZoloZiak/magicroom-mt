import { test, expect } from '@playwright/test';

const ADMIN_URL = '/admin/login';
const ADMIN_PASSWORD = 'magic2026';

test.describe('Admin Login', () => {
  test('login page loads successfully', async ({ page }) => {
    await page.goto(ADMIN_URL);
    await expect(page).toHaveTitle(/Admin Login/);
    await expect(page.locator('input[name="password"]')).toBeVisible();
  });

  test('shows error for empty password', async ({ page }) => {
    await page.goto(ADMIN_URL);
    await page.locator('input[type="submit"]').click();
    await expect(page).toHaveURL(/error=/);
  });

  test('shows error for wrong password', async ({ page }) => {
    await page.goto(ADMIN_URL);
    await page.locator('input[name="password"]').fill('wrongpassword');
    await page.locator('input[type="submit"]').click();
    await expect(page).toHaveURL(/error=Nesprávne heslo/);
  });

  test('redirects to dashboard with correct password', async ({ page }) => {
    await page.goto(ADMIN_URL);
    await page.locator('input[name="password"]').fill(ADMIN_PASSWORD);
    await page.locator('input[type="submit"]').click();
    await expect(page).toHaveURL('/admin/dashboard');
  });
});

test.describe('Admin Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(ADMIN_URL);
    await page.locator('input[name="password"]').fill(ADMIN_PASSWORD);
    await page.locator('input[type="submit"]').click();
    await page.waitForURL('/admin/dashboard');
  });

  test('dashboard loads with analytics cards', async ({ page }) => {
    await expect(page.locator('text=Dashboard')).toBeVisible();
    await expect(page.locator('text=Rezervácie')).toBeVisible();
    await expect(page.locator('text=WhatsApp')).toBeVisible();
    await expect(page.locator('text=Kontakt formulár')).toBeVisible();
  });

  test('dashboard has working logout', async ({ page }) => {
    await page.locator('button:has-text("Odhlásiť")').click();
    await expect(page).toHaveURL('/admin/login');
  });
});

test.describe('Admin Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(ADMIN_URL);
    await page.locator('input[name="password"]').fill(ADMIN_PASSWORD);
    await page.locator('input[type="submit"]').click();
    await page.waitForURL('/admin/dashboard');
  });

  test('can navigate to Gallery', async ({ page }) => {
    await page.click('text=🖼️ Galéria');
    await expect(page).toHaveURL('/admin/gallery');
    await expect(page.locator('text=Nahrať novú fotku')).toBeVisible();
  });

  test('can navigate to Dresses', async ({ page }) => {
    await page.click('text=👗 Šaty');
    await expect(page).toHaveURL('/admin/dresses');
  });

  test('can navigate to Blog', async ({ page }) => {
    await page.click('text=📝 Blog');
    await expect(page).toHaveURL('/admin/blog');
  });

  test('can navigate to Decor', async ({ page }) => {
    await page.click('text=🎀 Dekorácie');
    await expect(page).toHaveURL('/admin/decor');
  });

  test('can navigate to Partners', async ({ page }) => {
    await page.click('text=🤝 Partneri');
    await expect(page).toHaveURL('/admin/partners');
  });
});

test.describe('Admin Gallery Upload', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(ADMIN_URL);
    await page.locator('input[name="password"]').fill(ADMIN_PASSWORD);
    await page.locator('input[type="submit"]').click();
    await page.waitForURL('/admin/dashboard');
    await page.click('text=🖼️ Galéria');
  });

  test('gallery page has upload form', async ({ page }) => {
    await expect(page.locator('text=Nahrať novú fotku')).toBeVisible();
    await expect(page.locator('text=Kliknite alebo pretiahnite fotku')).toBeVisible();
  });

  test('can fill in title fields', async ({ page }) => {
    await page.fill('input[placeholder="Napríklad: Ružová elegance"]', 'Test Photo');
    await expect(page.locator('input[value="Test Photo"]')).toBeVisible();
  });
});

test.describe('Admin Blog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(ADMIN_URL);
    await page.locator('input[name="password"]').fill(ADMIN_PASSWORD);
    await page.locator('input[type="submit"]').click();
    await page.waitForURL('/admin/dashboard');
    await page.click('text=📝 Blog');
  });

  test('blog page loads', async ({ page }) => {
    await expect(page.locator('text=Nový článok')).toBeVisible();
  });
});

test.describe('Admin Decorations', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(ADMIN_URL);
    await page.locator('input[name="password"]').fill(ADMIN_PASSWORD);
    await page.locator('input[type="submit"]').click();
    await page.waitForURL('/admin/dashboard');
    await page.click('text=🎀 Dekorácie');
  });

  test('decorations page shows categories', async ({ page }) => {
    await expect(page.locator('text=Vybrané dekorácie')).toBeVisible();
  });
});

test.describe('Unauthorized Access', () => {
  test('redirects to login when accessing dashboard without auth', async ({ page }) => {
    await page.goto('/admin/dashboard');
    await expect(page).toHaveURL(/\/admin\/login/);
  });

  test('redirects to login when accessing gallery without auth', async ({ page }) => {
    await page.goto('/admin/gallery');
    await expect(page).toHaveURL(/\/admin\/login/);
  });

  test('redirects to login when accessing blog without auth', async ({ page }) => {
    await page.goto('/admin/blog');
    await expect(page).toHaveURL(/\/admin\/login/);
  });
});

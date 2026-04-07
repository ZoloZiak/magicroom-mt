import { test, expect } from '@playwright/test';

test.describe('Mobile Menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    page.setDefaultTimeout(60000);
  });

  test('hamburger button is visible on mobile', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-label', 'Menu');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('menu is hidden initially', async ({ page }) => {
    await page.goto('/');
    const menu = page.locator('#mobile-menu');
    await expect(menu).toHaveAttribute('style', /visibility: hidden/);
  });

  test('opens menu on hamburger click', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await toggle.click();
    
    const menu = page.locator('#mobile-menu');
    await expect(menu).toHaveAttribute('style', /visibility: visible/);
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    
    const panel = page.locator('#menu-panel');
    const style = await panel.getAttribute('style');
    expect(style).toContain('translateX(0');
  });

  test('closes menu on close button click', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await toggle.click();
    await page.waitForTimeout(100);
    
    const closeBtn = page.locator('#menu-close');
    await closeBtn.click();
    await page.waitForTimeout(350);
    
    const menu = page.locator('#mobile-menu');
    await expect(menu).toHaveAttribute('style', /visibility: hidden/);
  });

  test('closes menu on backdrop click', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await toggle.click();
    await page.waitForTimeout(100);
    
    const backdrop = page.locator('#menu-backdrop');
    await backdrop.click({ position: { x: 10, y: 10 } });
    await page.waitForTimeout(350);
    
    const menu = page.locator('#mobile-menu');
    await expect(menu).toHaveAttribute('style', /visibility: hidden/);
  });

  test('closes menu on Escape key', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await toggle.click();
    await page.waitForTimeout(100);
    
    await page.keyboard.press('Escape');
    await page.waitForTimeout(350);
    
    const menu = page.locator('#mobile-menu');
    await expect(menu).toHaveAttribute('style', /visibility: hidden/);
  });

  test('menu panel slides in from right', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await toggle.click();
    await page.waitForTimeout(100);
    
    const panel = page.locator('#menu-panel');
    const style = await panel.getAttribute('style');
    expect(style).toContain('translateX(0');
  });

  test('menu has proper ARIA attributes', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await toggle.click();
    
    const menu = page.locator('#mobile-menu');
    await expect(menu).toHaveAttribute('role', 'dialog');
    await expect(menu).toHaveAttribute('aria-modal', 'true');
    await expect(menu).toHaveAttribute('aria-label', 'Mobile navigation');
    await expect(menu).toHaveAttribute('aria-hidden', 'false');
  });

  test('menu contains navigation links', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await toggle.click();
    await page.waitForTimeout(100);
    
    const links = page.locator('#menu-panel a');
    const count = await links.count();
    expect(count).toBeGreaterThan(5);
  });

  test('clicking nav link closes menu', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await toggle.click();
    await page.waitForTimeout(100);
    
    const firstLink = page.locator('#menu-panel a').first();
    await firstLink.click();
    await page.waitForTimeout(350);
    
    const menu = page.locator('#mobile-menu');
    await expect(menu).toHaveAttribute('style', /visibility: hidden/);
  });

  test('phone number is visible in menu', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await toggle.click();
    await page.waitForTimeout(100);
    
    const phone = page.locator('#menu-panel a[href^="tel:"]').first();
    await expect(phone).toBeVisible();
    await expect(phone).toContainText('+421');
  });

  test('booking button is visible in menu', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await toggle.click();
    await page.waitForTimeout(100);
    
    const bookBtn = page.locator('#menu-panel a:has-text("Rezervuj")');
    await expect(bookBtn).toBeVisible();
  });

  test('logo is visible in menu', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    const toggle = page.locator('#menu-toggle');
    await toggle.waitFor({ timeout: 10000 });
    await toggle.click();
    await page.waitForTimeout(100);
    
    const logo = page.locator('#menu-panel img');
    await expect(logo).toBeVisible();
  });

  test('animation transitions work', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    const toggle = page.locator('#menu-toggle');
    await toggle.waitFor({ timeout: 10000 });
    
    await toggle.click();
    const panelOpen = page.locator('#menu-panel');
    const styleOpen = await panelOpen.getAttribute('style');
    expect(styleOpen).toContain('transform');
    
    await page.waitForTimeout(50);
    
    const closeBtn = page.locator('#menu-close');
    await closeBtn.click();
    await page.waitForTimeout(100);
    
    const panelClosing = page.locator('#menu-panel');
    const styleClosing = await panelClosing.getAttribute('style');
    expect(styleClosing).toContain('translateX(100%)');
  });
});
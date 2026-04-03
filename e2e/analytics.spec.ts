import { test, expect } from '@playwright/test';

test.describe('GA4 Tracking', () => {
  test('homepage has tracking attributes on phone link', async ({ page }) => {
    await page.goto('/');
    const phoneLink = page.locator('a[href^="tel:"]').first();
    await expect(phoneLink).toHaveAttribute('data-ga-category', 'contact');
    await expect(phoneLink).toHaveAttribute('data-ga-action', 'phone_click');
    await expect(phoneLink).toHaveAttribute('data-ga-label', 'hero_phone');
  });

  test('homepage has tracking attributes on map link', async ({ page }) => {
    await page.goto('/');
    const mapLink = page.locator('a[href*="maps.app.goo.gl"]').first();
    await expect(mapLink).toHaveAttribute('data-ga-category', 'external');
    await expect(mapLink).toHaveAttribute('data-ga-action', 'map_click');
    await expect(mapLink).toHaveAttribute('data-ga-label', 'hero_map');
  });

  test('homepage has tracking on CTA button', async ({ page }) => {
    await page.goto('/');
    const ctaLink = page.locator('a[data-ga-category="conversion"]').first();
    await expect(ctaLink).toHaveAttribute('data-ga-action', 'book_appointment_click');
  });

  test('booking form has tracking attributes', async ({ page }) => {
    await page.goto('/');
    const form = page.locator('[data-booking-form]').first();
    await expect(form).toHaveAttribute('data-ga-category', 'conversion');
    await expect(form).toHaveAttribute('data-ga-action', 'booking_form_submit');
  });

  test('WhatsApp FAB has tracking attributes', async ({ page }) => {
    await page.goto('/');
    const whatsappFab = page.locator('[data-ga-category="contact"][data-ga-action="whatsapp_click"]').first();
    await expect(whatsappFab).toHaveAttribute('data-ga-label', 'fab_whatsapp');
  });

  test('footer has tracking on email link', async ({ page }) => {
    await page.goto('/');
    const footerEmail = page.locator('footer a[href^="mailto:"]').first();
    await expect(footerEmail).toHaveAttribute('data-ga-category', 'contact');
    await expect(footerEmail).toHaveAttribute('data-ga-action', 'email_click');
  });

  test('footer has tracking on phone link', async ({ page }) => {
    await page.goto('/');
    const footerPhone = page.locator('footer a[href^="tel:"]').first();
    await expect(footerPhone).toHaveAttribute('data-ga-category', 'contact');
    await expect(footerPhone).toHaveAttribute('data-ga-action', 'phone_click');
  });

  test('footer has tracking on social links', async ({ page }) => {
    await page.goto('/');
    const socialLink = page.locator('footer a[href*="facebook.com"], footer a[href*="instagram.com"]').first();
    await expect(socialLink).toHaveAttribute('data-ga-category', 'external');
    await expect(socialLink).toHaveAttribute('data-ga-action', 'social_click');
  });

  test('trackEvent function is available globally', async ({ page }) => {
    await page.goto('/');
    const hasTrackEvent = await page.evaluate(() => typeof window.trackEvent === 'function');
    expect(hasTrackEvent).toBe(true);
  });

  test('trackEvent is called on phone link click', async ({ page }) => {
    const trackedEvents: string[] = [];
    await page.goto('/');
    
    await page.evaluate(() => {
      window.trackEvent = function(category: string, action: string, label: string) {
        window.__testEvents = window.__testEvents || [];
        window.__testEvents.push({ category, action, label });
      };
    });

    await page.click('a[href^="tel:"]');
    
    const events = await page.evaluate(() => (window as any).__testEvents);
    expect(events).toBeDefined();
  });

  test('header has tracking on phone link', async ({ page }) => {
    await page.goto('/');
    const headerPhone = page.locator('header a[href^="tel:"]').first();
    await expect(headerPhone).toHaveAttribute('data-ga-category', 'contact');
    await expect(headerPhone).toHaveAttribute('data-ga-action', 'phone_click');
    await expect(headerPhone).toHaveAttribute('data-ga-label', 'header_phone');
  });

  test('header has tracking on booking CTA', async ({ page }) => {
    await page.goto('/');
    const headerCta = page.locator('header a[data-ga-category="conversion"]').first();
    await expect(headerCta).toHaveAttribute('data-ga-label', 'header_cta');
  });

  test('kontakt page has tracking on contact cards', async ({ page }) => {
    await page.goto('/kontakt');
    const contactCards = page.locator('main section a[href^="tel:"], main section a[href^="mailto:"]');
    const count = await contactCards.count();
    expect(count).toBeGreaterThan(0);
    
    await expect(contactCards.first()).toHaveAttribute('data-ga-category', 'contact');
  });
});
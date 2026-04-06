import { describe, it, expect } from 'vitest';
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  ADDRESS,
  ADDRESS_LABEL,
  NAV_LINKS,
  SOCIAL_LINKS,
  WHATSAPP_BASE_URL,
  buildWhatsAppUrl,
  toAbsoluteUrl,
  getBaseSchemas,
  SITE_URL,
  SITE_NAME,
  BOOKING_PAGE_HREF,
  COPYRIGHT_YEAR,
} from '@/data/site';

describe('site.ts — Contact info', () => {
  it('has valid Slovak phone number', () => {
    expect(PHONE_DISPLAY).toMatch(/^\+421 \d{3} \d{3} \d{3}$/);
    expect(PHONE_HREF).toBe('tel:+421950490323');
  });

  it('has valid email address', () => {
    expect(EMAIL).toMatch(/@magicroom\.sk$/);
    expect(EMAIL_HREF).toBe(`mailto:${EMAIL}`);
  });

  it('has complete address', () => {
    expect(ADDRESS.streetAddress).toBeTruthy();
    expect(ADDRESS.addressLocality).toBe('Martin');
    expect(ADDRESS.postalCode).toMatch(/^\d{3} ?\d{2}$/);
    expect(ADDRESS.addressCountry).toBe('SK');
  });

  it('formats address label correctly', () => {
    expect(ADDRESS_LABEL).toContain('Martin');
    expect(ADDRESS_LABEL).toContain('036 01');
    expect(ADDRESS_LABEL).toContain('Záturčie');
  });
});

describe('site.ts — Navigation', () => {
  it('has 9 navigation links', () => {
    expect(NAV_LINKS).toHaveLength(9);
  });

  it('all nav links have href and label', () => {
    NAV_LINKS.forEach((link) => {
      expect(link.href).toMatch(/^\/[\w-]+(\/[\w-]*)?$/);
      expect(link.label).toBeTruthy();
    });
  });

  it('includes key pages', () => {
    const hrefs = NAV_LINKS.map((l) => l.href);
    expect(hrefs).toContain('/sk/o-nas');
    expect(hrefs).toContain('/sk/sluzby');
    expect(hrefs).toContain('/sk/svadobne-saty');
    expect(hrefs).toContain('/sk/kontakt');
    expect(hrefs).toContain('/sk/blog');
  });
});

describe('site.ts — Social links', () => {
  it('has Facebook and Instagram', () => {
    const labels = SOCIAL_LINKS.map((s) => s.label);
    expect(labels).toContain('Facebook');
    expect(labels).toContain('Instagram');
  });

  it('links are valid URLs', () => {
    SOCIAL_LINKS.forEach((link) => {
      expect(link.href).toMatch(/^https:\/\//);
    });
  });
});

describe('site.ts — WhatsApp', () => {
  it('builds WhatsApp URL with encoded message', () => {
    const url = buildWhatsAppUrl('Test správa');
    expect(url).toContain('wa.me/421950490323');
    expect(url).toContain('text=');
    expect(url).toContain('Test');
  });

  it('base URL points to correct number', () => {
    expect(WHATSAPP_BASE_URL).toContain('421950490323');
  });
});

describe('site.ts — Utilities', () => {
  it('toAbsoluteUrl returns absolute URLs unchanged', () => {
    expect(toAbsoluteUrl('https://example.com')).toBe('https://example.com');
    expect(toAbsoluteUrl('http://example.com')).toBe('http://example.com');
  });

  it('toAbsoluteUrl makes relative URLs absolute', () => {
    const result = toAbsoluteUrl('/kontakt');
    expect(result).toContain('magicroom.sk');
    expect(result).toContain('/kontakt');
  });

  it('copyright year is current', () => {
    expect(COPYRIGHT_YEAR).toBe(new Date().getFullYear());
  });

  it('booking page href points to contact', () => {
    expect(BOOKING_PAGE_HREF).toBe('/kontakt#booking');
  });
});

describe('site.ts — Schema.org', () => {
  it('generates 3 schemas (WebSite, Organization, LocalBusiness)', () => {
    const schemas = getBaseSchemas('https://example.com', 'https://example.com/logo.png');
    expect(schemas).toHaveLength(3);
    expect(schemas[0]['@type']).toBe('WebSite');
    expect(schemas[1]['@type']).toBe('Organization');
    expect(schemas[2]['@type']).toBe('LocalBusiness');
  });

  it('LocalBusiness has Martin as areaServed', () => {
    const schemas = getBaseSchemas('https://example.com', 'https://example.com/logo.png');
    const business = schemas[2];
    expect(business.areaServed.name).toBe('Martin');
  });

  it('Organization includes Natália as founder', () => {
    const schemas = getBaseSchemas('https://example.com', 'https://example.com/logo.png');
    const org = schemas[1];
    expect(org.founder.name).toBe('Natália Ondrejková');
  });
});

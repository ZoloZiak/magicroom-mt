import { describe, it, expect } from 'vitest';
import {
  HOME_STATS,
  HOME_OFFER_CARDS,
  TRUST_REASONS,
  BOOKING_FEATURES,
  PROCESS_STEPS,
  FOUNDER_STORY,
  GALLERY_ITEMS,
  SERVICE_PACKAGES,
  EXTRA_SERVICES,
  DECOR_CATEGORIES,
  DECOR_POLICIES,
  CONTACT_FAQS,
  CONSIGNMENT_STEPS,
  IMAGE_ASSETS,
  DRESS_CATALOG,
} from '@/data/content';

describe('content.ts — Homepage data', () => {
  it('HOME_STATS has 3 items', () => {
    expect(HOME_STATS).toHaveLength(3);
  });

  it('stats include price and description', () => {
    HOME_STATS.forEach((stat) => {
      expect(stat.value).toBeTruthy();
      expect(stat.label).toBeTruthy();
    });
  });

  it('HOME_OFFER_CARDS has 6 cards', () => {
    expect(HOME_OFFER_CARDS).toHaveLength(6);
  });

  it('offer cards have required fields', () => {
    HOME_OFFER_CARDS.forEach((card) => {
      expect(card.title).toBeTruthy();
      expect(card.price).toBeTruthy();
      expect(card.description).toBeTruthy();
      expect(card.href).toMatch(/^\//);
      expect(card.cta).toBeTruthy();
      expect(card.icon).toBeTruthy();
    });
  });

  it('TRUST_REASONS has 4 items', () => {
    expect(TRUST_REASONS).toHaveLength(4);
  });

  it('PROCESS_STEPS has 3 steps', () => {
    expect(PROCESS_STEPS).toHaveLength(3);
  });
});

describe('content.ts — Services', () => {
  it('SERVICE_PACKAGES has 3 tiers', () => {
    expect(SERVICE_PACKAGES).toHaveLength(3);
  });

  it('packages have name, price, features', () => {
    SERVICE_PACKAGES.forEach((pkg) => {
      expect(pkg.name).toBeTruthy();
      expect(pkg.price).toBeTruthy();
      expect(pkg.features.length).toBeGreaterThan(0);
    });
  });

  it('middle package is recommended', () => {
    const recommended = SERVICE_PACKAGES.find((p) => p.recommended);
    expect(recommended).toBeDefined();
    expect(recommended?.name).toBe('Svadba základ');
  });

  it('EXTRA_SERVICES has 5 items', () => {
    expect(EXTRA_SERVICES).toHaveLength(5);
  });

  it('BOOKING_FEATURES has 4 features', () => {
    expect(BOOKING_FEATURES).toHaveLength(4);
  });
});

describe('content.ts — Gallery & Images', () => {
  it('GALLERY_ITEMS has at least 6 photos', () => {
    expect(GALLERY_ITEMS.length).toBeGreaterThanOrEqual(6);
  });

  it('gallery items have src, alt, title', () => {
    GALLERY_ITEMS.forEach((item) => {
      expect(item.src).toBeTruthy();
      expect(item.alt).toBeTruthy();
      expect(item.title).toBeTruthy();
    });
  });

  it('IMAGE_ASSETS has key images', () => {
    expect(IMAGE_ASSETS.hero).toBeTruthy();
    expect(IMAGE_ASSETS.dresses).toBeTruthy();
    expect(IMAGE_ASSETS.founder).toBeTruthy();
    expect(IMAGE_ASSETS.decorMain).toBeTruthy();
  });

  it('salon photos are included', () => {
    expect(IMAGE_ASSETS.satyRuzove1).toContain('saty-ruzove');
    expect(IMAGE_ASSETS.sachovnica1).toContain('sachovnica');
    expect(IMAGE_ASSETS.interier1).toContain('interier');
  });
});

describe('content.ts — Decorations', () => {
  it('DECOR_CATEGORIES has at least 3 categories', () => {
    expect(DECOR_CATEGORIES.length).toBeGreaterThanOrEqual(3);
  });

  it('each category has items with name and price', () => {
    DECOR_CATEGORIES.forEach((cat) => {
      expect(cat.category).toBeTruthy();
      expect(cat.items.length).toBeGreaterThan(0);
      cat.items.forEach((item) => {
        expect(item.name).toBeTruthy();
        expect(item.price).toBeTruthy();
      });
    });
  });

  it('DECOR_POLICIES has at least 3 policies', () => {
    expect(DECOR_POLICIES.length).toBeGreaterThanOrEqual(3);
  });
});

describe('content.ts — Other sections', () => {
  it('FOUNDER_STORY has quote and paragraphs', () => {
    expect(FOUNDER_STORY.quote).toBeTruthy();
    expect(FOUNDER_STORY.paragraphs.length).toBeGreaterThanOrEqual(1);
  });

  it('CONTACT_FAQS has at least 3 questions', () => {
    expect(CONTACT_FAQS.length).toBeGreaterThanOrEqual(3);
    CONTACT_FAQS.forEach((faq) => {
      expect(faq.question).toBeTruthy();
      expect(faq.answer).toBeTruthy();
    });
  });

  it('CONSIGNMENT_STEPS has 4 steps', () => {
    expect(CONSIGNMENT_STEPS).toHaveLength(4);
  });
});

describe('content.ts — Dress catalog', () => {
  it('DRESS_CATALOG has at least 5 dresses', () => {
    expect(DRESS_CATALOG.length).toBeGreaterThanOrEqual(5);
  });

  it('each dress has required fields', () => {
    DRESS_CATALOG.forEach((dress) => {
      expect(dress.id).toBeTruthy();
      expect(dress.name).toBeTruthy();
      expect(dress.price).toBeGreaterThan(0);
      expect(dress.size).toMatch(/^\d{2}$/);
      expect(['available', 'reserved', 'sold']).toContain(dress.status);
      expect(['new', 'consignment']).toContain(dress.type);
      expect(dress.image).toBeTruthy();
    });
  });

  it('has at least one featured dress', () => {
    const featured = DRESS_CATALOG.filter((d) => d.featured);
    expect(featured.length).toBeGreaterThanOrEqual(1);
  });

  it('has both new and consignment types', () => {
    const types = new Set(DRESS_CATALOG.map((d) => d.type));
    expect(types.has('new')).toBe(true);
    expect(types.has('consignment')).toBe(true);
  });
});

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
  getBlogPosts,
  getBlogPost,
  BLOG_POSTS,
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

  it('EXTRA_SERVICES has at least 6 items', () => {
    expect(EXTRA_SERVICES.length).toBeGreaterThanOrEqual(6);
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
      expect(dress.size).toMatch(/^\d{2}(-\d{2})?$/);
      expect(['available', 'reserved', 'sold']).toContain(dress.status);
      expect(['new', 'consignment', 'rental']).toContain(dress.type);
      expect(dress.imageAsset || dress.fallbackImage).toBeTruthy();
    });
  });

  it('has at least one featured dress', () => {
    const featured = DRESS_CATALOG.filter((d) => d.featured);
    expect(featured.length).toBeGreaterThanOrEqual(1);
  });

  it('has at least one type', () => {
    const types = new Set(DRESS_CATALOG.map((d) => d.type));
    expect(types.size).toBeGreaterThan(0);
  });

  it('has new dresses', () => {
    const newDresses = DRESS_CATALOG.filter((d) => d.type === 'new');
    expect(newDresses.length).toBeGreaterThan(0);
  });
});

describe('content.ts — Blog', () => {
  it('BLOG_POSTS has 3 posts', () => {
    expect(BLOG_POSTS).toHaveLength(3);
  });

  it('each post has required SK fields', () => {
    BLOG_POSTS.forEach((post) => {
      expect(post.title).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(post.description).toBeTruthy();
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(post.readTime).toBeTruthy();
      expect(post.content).toBeTruthy();
      expect(post.tags.length).toBeGreaterThan(0);
      expect(post.image).toBeTruthy();
    });
  });

  it('getBlogPosts returns correct count', () => {
    const skPosts = getBlogPosts('sk');
    const enPosts = getBlogPosts('en');
    expect(skPosts).toHaveLength(3);
    expect(enPosts).toHaveLength(3);
  });

  it('getBlogPost returns correct SK post', () => {
    const post = getBlogPost('svadobne-trendy-2026', 'sk');
    expect(post).not.toBeNull();
    expect(post?.title).toBe('Svadobné trendy 2026: Čo bude v móde?');
    expect(post?.slug).toBe('svadobne-trendy-2026');
  });

  it('getBlogPost returns correct EN post', () => {
    const post = getBlogPost('wedding-trends-2026', 'en');
    expect(post).not.toBeNull();
    expect(post?.title).toBe('Wedding Trends 2026: What Will Be in Fashion?');
    expect(post?.slug).toBe('wedding-trends-2026');
  });

  it('getBlogPost returns null for invalid slug', () => {
    const post = getBlogPost('invalid-slug', 'sk');
    expect(post).toBeNull();
  });

  it('posts have skSlug and enSlug for navigation', () => {
    BLOG_POSTS.forEach((post) => {
      expect(post.skSlug).toBeTruthy();
      expect(post.enSlug).toBeTruthy();
    });
  });
});

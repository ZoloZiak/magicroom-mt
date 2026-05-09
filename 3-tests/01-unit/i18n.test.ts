import { describe, it, expect } from 'vitest';
import { getAlternateLanguageUrl, SLUG_MAP, REVERSE_SLUG_MAP } from '@/05-lib/i18n';

describe('i18n.ts — Language switching logic', () => {
  it('correctly switches from SK to EN on root', () => {
    const url = new URL('https://magicroom.sk/');
    expect(getAlternateLanguageUrl(url, 'sk')).toBe('/en');
  });

  it('correctly switches from EN to SK on root', () => {
    const url = new URL('https://magicroom.sk/en');
    expect(getAlternateLanguageUrl(url, 'en')).toBe('/');
  });

  it('correctly switches from EN to SK on root with trailing slash', () => {
    const url = new URL('https://magicroom.sk/en/');
    expect(getAlternateLanguageUrl(url, 'en')).toBe('/');
  });

  it('correctly maps SK slug to EN slug', () => {
    const url = new URL('https://magicroom.sk/partneri');
    expect(getAlternateLanguageUrl(url, 'sk')).toBe('/en/partners');
  });

  it('correctly maps EN slug to SK slug', () => {
    const url = new URL('https://magicroom.sk/en/partners');
    expect(getAlternateLanguageUrl(url, 'en')).toBe('/partneri');
  });

  it('preserves hash when switching languages', () => {
    const url = new URL('https://magicroom.sk/kontakt#booking');
    expect(getAlternateLanguageUrl(url, 'sk')).toBe('/en/contact#booking');
  });

  it('correctly handles complex slugs (like blog)', () => {
    const url = new URL('https://magicroom.sk/blog/svadobne-trendy-2026');
    // NOTE: getAlternateLanguageUrl current implementation only takes parts[0] or parts[1]
    // Let's see how it behaves
    const result = getAlternateLanguageUrl(url, 'sk');
    // Current logic: parts = ['blog', 'svadobne-trendy-2026'], parts[0] = 'blog'
    // SLUG_MAP['blog'] is undefined, so it returns /en/blog
    // This might be a bug for nested paths, but let's test "partneri" first which was reported.
  });

  it('reproduces the reported issue for "partneri"', () => {
    // If user is on /partneri and clicks EN, they should go to /en/partners
    const url = new URL('https://magicroom.sk/partneri');
    const result = getAlternateLanguageUrl(url, 'sk');
    expect(result).toBe('/en/partners');
  });

  it('checks if /en/sk occurs somehow', () => {
    // Maybe if pathname is already /en?
    const url = new URL('https://magicroom.sk/en');
    // If currentLanguage is 'sk' (which it shouldn't be on /en, but let's check)
    const result = getAlternateLanguageUrl(url, 'sk');
    // parts = ['en'], parts[0] = 'en', SLUG_MAP['en'] is undefined
    // returns /en/en. Still not /en/sk.
  });

  it('checks /sk/partneri case', () => {
    // If somehow the URL is /sk/partneri
    const url = new URL('https://magicroom.sk/sk/partneri');
    const result = getAlternateLanguageUrl(url, 'sk');
    expect(result).toBe('/en/partners');
  });

  it('correctly handles blog posts in SK -> EN', () => {
    const url = new URL('https://magicroom.sk/blog/post-slug');
    const result = getAlternateLanguageUrl(url, 'sk');
    expect(result).toBe('/en/blog/post-slug');
  });

  it('correctly handles blog posts in EN -> SK', () => {
    const url = new URL('https://magicroom.sk/en/blog/post-slug');
    const result = getAlternateLanguageUrl(url, 'en');
    expect(result).toBe('/blog/post-slug');
  });
});

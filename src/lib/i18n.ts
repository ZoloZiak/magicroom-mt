export type Language = 'sk' | 'en';

export const DEFAULT_LANGUAGE: Language = 'sk';

// Mapovanie SK na EN slugy (bez úvodného lomítka)
export const SLUG_MAP: Record<string, string> = {
  'o-nas': 'about',
  'sluzby': 'services',
  'svadobne-saty': 'dresses',
  'galeria': 'galeria',
  'komisny-predaj': 'consignment',
  'prenajom-dekoracii': 'decorations',
  'partneri': 'partners',
  'kontakt': 'contact',
};

// Inverzné mapovanie EN na SK
export const REVERSE_SLUG_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(SLUG_MAP).map(([sk, en]) => [en, sk])
);

export function getLanguageFromUrl(url: URL): Language {
  const pathname = url.pathname;
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return 'en';
  }
  return 'sk';
}

export function getAlternateLanguageUrl(url: URL, currentLanguage: Language): string {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);

  if (currentLanguage === 'sk') {
    // SK -> EN
    if (parts.length === 0) return '/en';
    const skSlug = parts[0];
    const enSlug = SLUG_MAP[skSlug] || skSlug;
    return `/en/${enSlug}${url.hash}`;
  } else {
    // EN -> SK
    // /en -> /
    // /en/about -> /o-nas
    if (parts.length <= 1) return '/';
    const enSlug = parts[1];
    const skSlug = REVERSE_SLUG_MAP[enSlug] || enSlug;
    return `/${skSlug}${url.hash}`;
  }
}

export function getLanguageFromStorage(): Language {
  if (typeof window === 'undefined') return 'sk';
  const stored = localStorage.getItem('magicroom-lang');
  if (stored === 'en') return 'en';
  return 'sk';
}

export function setLanguageToStorage(language: Language): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('magicroom-lang', language);
}
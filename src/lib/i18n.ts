export type Language = 'sk' | 'en';

export const DEFAULT_LANGUAGE: Language = 'sk';

// Mapovanie SK na EN slugy (bez úvodného lomítka)
export const SLUG_MAP: Record<string, string> = {
  'o-nas': 'about',
  'sluzby': 'services',
  'svadobne-saty': 'dresses',
  'spolocenske-saty': 'formal-dresses',
  'galeria': 'galeria',
  'komisny-predaj': 'consignment',
  'prenajom-dekoracii': 'decorations',
  'partneri': 'partners',
  'kontakt': 'contact',
  'reklamacny-poriadok': 'complaint-policy',
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

/**
 * Returns translated href for a given SK slug and target language
 */
export function getRelativeHref(skSlug: string, lang: Language): string {
  if (lang === 'sk') {
    return skSlug === 'index' ? '/' : `/${skSlug}`;
  }
  
  const enSlug = skSlug === 'index' ? '' : (SLUG_MAP[skSlug] || skSlug);
  return enSlug === '' ? '/en' : `/en/${enSlug}`;
}

/**
 * Returns SK slug for a given potentially translated slug and language
 */
export function getSkSlug(slug: string | undefined, lang: Language): string {
  if (!slug || slug === 'index') return 'index';
  if (lang === 'sk') return slug;
  return REVERSE_SLUG_MAP[slug] || slug;
}

export function getAlternateLanguageUrl(url: URL, currentLanguage: Language): string {
  let pathname = url.pathname;
  const hash = url.hash || '';
  const search = url.search || '';
  
  // Normalizácia pathname - odstránenie /sk prefixu ak existuje
  if (pathname.startsWith('/sk/')) {
    pathname = pathname.substring(3);
  } else if (pathname === '/sk') {
    pathname = '/';
  }

  const parts = pathname.split('/').filter(Boolean);

  if (currentLanguage === 'sk') {
    // SK -> EN
    if (parts.length === 0) return `/en${search}${hash}`;
    
    // Špeciálny prípad pre blog príspevky (blog/slug)
    if (parts[0] === 'blog') {
      return `/en/blog/${parts.slice(1).join('/')}${search}${hash}`;
    }

    // Mapovanie hlavného slugu
    const skSlug = parts[0];
    const enSlug = SLUG_MAP[skSlug] || skSlug;
    const remainingParts = parts.slice(1).join('/');
    
    return `/en/${enSlug}${remainingParts ? '/' + remainingParts : ''}${search}${hash}`;
  } else {
    // EN -> SK
    // /en -> /
    if (parts.length <= 1) return `/${search}${hash}`;
    
    const enSlug = parts[1];
    
    // Špeciálny prípad pre blog príspevky
    if (enSlug === 'blog') {
       return `/blog/${parts.slice(2).join('/')}${search}${hash}`;
    }

    const skSlug = REVERSE_SLUG_MAP[enSlug] || enSlug;
    const remainingParts = parts.slice(2).join('/');
    
    return `/${skSlug}${remainingParts ? '/' + remainingParts : ''}${search}${hash}`;
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

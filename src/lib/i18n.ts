export type Language = 'sk' | 'en';

export const DEFAULT_LANGUAGE: Language = 'sk';

export function getLanguageFromUrl(url: URL): Language {
  const lang = url.searchParams.get('lang');
  if (lang === 'en') return 'en';
  return 'sk';
}

export function getAlternateLanguageUrl(url: URL, language: Language): string {
  const newLang = language === 'sk' ? 'en' : 'sk';
  const newUrl = new URL(url.pathname, url.origin);
  newUrl.searchParams.set('lang', newLang);
  return newUrl.toString();
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
import type { Language } from '@/05-lib/i18n';
import { getRelativeHref } from '@/05-lib/i18n';

export const SITE_URL = 'https://www.magicroom.sk';
export const SITE_NAME = 'MagicRoom';
export const DEFAULT_DESCRIPTION =
  'Predaj spoločenských šiat online a prenájom svadobných dekorácií v Martine. Šaty od 15 €, prechod na online predaj bez osobných skúšok. Ceny vidíte hneď.';
export const DEFAULT_DESCRIPTION_EN =
  'Online formal & evening dresses and wedding decor rentals in Martin, Slovakia. Dresses from 15 €, transition to online-only orders without in-person bridal fittings.';

export const DEFAULT_KEYWORDS = 'spoločenské šaty, spoločenské šaty online, predaj šiat, plesové šaty, šaty na stužkovú, svadobný salón Martin, svadobné dekorácie, prenájom inventáru';
export const DEFAULT_KEYWORDS_EN = 'formal dresses, evening gowns, prom dresses, online dress boutique, Martin Slovakia, wedding decorations, event decor rental';

export const PHONE_DISPLAY = '+421 950 490 323';
export const PHONE_HREF = 'tel:+421950490323';

export const EMAIL = 'info@magicroom.sk';
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const ADDRESS = {
  streetAddress: 'Jilemnického 4015/43',
  addressLocality: 'Martin',
  postalCode: '036 01',
  addressCountry: 'SK',
  district: 'Záturčie',
  note: 'ako je Detský sen na Severe',
};

export const ADDRESS_LABEL = `${ADDRESS.streetAddress}, ${ADDRESS.district}, ${ADDRESS.addressLocality} ${ADDRESS.postalCode}`;
export const MAP_URL = 'https://maps.app.goo.gl/byxiEk5dkQyVN53x9';

export const WHATSAPP_MESSAGE =
  'Dobrý deň, chcela by som si objednať spoločenské šaty / dopytovať dekorácie v MagicRoom.';
export const WHATSAPP_BASE_URL = 'https://wa.me/421950490323';

export function buildWhatsAppUrl(message: string) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppDressOrderUrl(dressName: string, dressPrice?: number | string, language: Language = 'sk') {
  const text = language === 'sk'
    ? `Dobrý deň, mám záujem o online nákup spoločenských šiat: ${dressName}${dressPrice ? ` (${dressPrice} €)` : ''}. Sú ešte voľné na odoslanie?`
    : `Hello, I am interested in purchasing these formal dresses online: ${dressName}${dressPrice ? ` (${dressPrice} €)` : ''}. Are they available to ship?`;
  return buildWhatsAppUrl(text);
}

export const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_MESSAGE);

export function getHeaderNavLinks(lang: Language) {
  if (lang === 'sk') {
    return [
      { href: '/o-nas', label: 'O nás' },
      { href: '/sluzby', label: 'Služby' },
      { href: '/svadobne-saty', label: 'Svadobné' },
      { href: '/spolocenske-saty', label: 'Spoločenské' },
      { href: '/galeria', label: 'Galéria' },
      { href: '/komisny-predaj', label: 'Komisný predaj' },
      { href: '/prenajom-dekoracii', label: 'Dekorácie' },
      { href: '/partneri', label: 'Partneri' },
      { href: '/kontakt', label: 'Kontakt' },
    ];
  }
  return [
    { href: '/en/about', label: 'About' },
    { href: '/en/services', label: 'Services' },
    { href: '/en/formal-dresses', label: 'Formal' },
    { href: '/en/dresses', label: 'Wedding' },
    { href: '/en/galeria', label: 'Gallery' },
    { href: '/en/consignment', label: 'Consignment' },
    { href: '/en/decorations', label: 'Decorations' },
    { href: '/en/partners', label: 'Partners' },
    { href: '/en/contact', label: 'Contact' },
  ];
}

export function getFooterNavLinks(lang: Language) {
  const links = getHeaderNavLinks(lang);
  if (lang === 'sk') {
     return [...links.slice(0, 5), { href: '/blog', label: 'Blog' }, ...links.slice(5)];
  }
  return [...links.slice(0, 5), { href: '/en/blog', label: 'Blog' }, ...links.slice(5)];
}

export function getSocialLinks(lang: Language) {
  return [
    { label: 'Facebook', href: 'https://www.facebook.com/909260838935730/' },
    { label: 'Instagram', href: 'https://www.instagram.com/mt.magicroom/' },
    { label: lang === 'sk' ? 'Recenzie na Google Mapách' : 'Google Reviews', href: 'https://share.google/RMksKvnggtb6P5nHd' },
  ];
}

export function getBookingPageHref(lang: Language) {
  return getRelativeHref('kontakt', lang) + '#booking';
}

export const COPYRIGHT_YEAR = new Date().getFullYear();

export const DEFAULT_OG_IMAGE = '/favicon.ico';

export function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, SITE_URL).toString();
}

export function getBaseSchemas(pageUrl: string, imageUrl: string, language: Language = 'sk', description = DEFAULT_DESCRIPTION) {
  const socialLinks = getSocialLinks(language);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: language === 'sk' ? 'sk-SK' : 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      description,
      url: SITE_URL,
      logo: imageUrl,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: PHONE_DISPLAY,
        contactType: 'customer service',
        availableLanguage: language === 'sk' ? 'Slovak' : 'English',
      },
      sameAs: socialLinks.map((item) => item.href),
      founder: {
        '@type': 'Person',
        name: 'Natália Ondrejková',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      description,
      url: SITE_URL,
      image: imageUrl,
      telephone: PHONE_DISPLAY,
      email: EMAIL,
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.streetAddress,
        addressLocality: ADDRESS.addressLocality,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.addressCountry,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 49.0624,
        longitude: 18.9186,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00',
        },
      ],
      sameAs: socialLinks.map((item) => item.href),
      founder: {
        '@type': 'Person',
        name: 'Natália Ondrejková',
      },
      hasMap: MAP_URL,
      mainEntityOfPage: pageUrl,
      areaServed: {
        '@type': 'City',
        name: 'Martin',
      },
    },
  ];
}

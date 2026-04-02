export const SITE_URL = 'https://www.magicroom.sk';
export const SITE_NAME = 'MagicRoom';
export const DEFAULT_DESCRIPTION =
  'Malý osobný svadobný salón v Martine. Svadobné šaty 200–700 €, skúška 12 € (v cene nápoj), komis, dekorácie. Ceny vidíte hneď.';

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
  'Dobrý deň, chcela by som si rezervovať skúšku šiat v MagicRoom.';
export const WHATSAPP_BASE_URL = 'https://wa.me/421950490323';

export function buildWhatsAppUrl(message: string) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_MESSAGE);

export const NAV_LINKS = [
  { href: '/o-nas', label: 'O nás' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/blog', label: 'Blog' },
  { href: '/komisny-predaj', label: 'Komisný predaj' },
  { href: '/prenajom-dekoracii', label: 'Dekorácie' },
  { href: '/kontakt', label: 'Kontakt' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/909260838935730/' },
  { label: 'Instagram', href: 'https://www.instagram.com/mt.magicroom/' },
] as const;

export const BOOKING_PAGE_HREF = '/kontakt#booking';
export const BOOKING_CTA_LABEL = 'Pripraviť WhatsApp rezerváciu';
export const RESPONSE_PROMISE = 'Ozveme sa vám do 24 hodín.';
export const COPYRIGHT_YEAR = new Date().getFullYear();

export const DEFAULT_OG_IMAGE =
  'https://www.magicroom.sk/wp-content/uploads/2026/02/magicroombackround-1024x683.png';

export function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, SITE_URL).toString();
}

export function getBaseSchemas(pageUrl: string, imageUrl: string, description = DEFAULT_DESCRIPTION) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'sk-SK',
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
        availableLanguage: 'Slovak',
      },
      sameAs: SOCIAL_LINKS.map((item) => item.href),
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
      sameAs: SOCIAL_LINKS.map((item) => item.href),
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
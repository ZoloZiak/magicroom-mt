export const SITE_URL = 'https://www.magicroom.sk';
export const SITE_NAME = 'MagicRoom';
export const DEFAULT_DESCRIPTION =
  'Svadobný salón v Martine so svadobnými šatami, dekoráciami na prenájom a osobným svadobným poradenstvom. Skúška šiat od 12 €.';

export const PHONE_DISPLAY = '+421 950 490 323';
export const PHONE_HREF = 'tel:+421950490323';

export const EMAIL = 'mt.magicroom@gmail.com';
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
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.streetAddress,
        addressLocality: ADDRESS.addressLocality,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.addressCountry,
      },
      sameAs: SOCIAL_LINKS.map((item) => item.href),
      founder: {
        '@type': 'Person',
        name: 'Natália Ondrejková',
      },
      hasMap: MAP_URL,
      mainEntityOfPage: pageUrl,
    },
  ];
}
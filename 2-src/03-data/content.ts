import {
  EMAIL,
  EMAIL_HREF,
  MAP_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
} from '@/03-data/site';

import heroImage from '../../1-content/01-images/systemassets/hero-sm.webp';
import dressesImage from '../../1-content/01-images/systemassets/dresses.png';
import founderImage from '../../1-content/01-images/systemassets/founder.png';
import decorMainImage from '../../1-content/01-images/systemassets/decor-main.jpg';
import decorAltImage from '../../1-content/01-images/systemassets/decor-alt.jpg';
import mapImage from '../../1-content/01-images/systemassets/map.png';
import decorBackdrop from '../../1-content/01-images/systemassets/decor-backdrop.jpg';
import decorDetails from '../../1-content/01-images/systemassets/decor-details.jpg';
import graphicsImage from '../../1-content/01-images/systemassets/graphics.png';
import glassesImage from '../../1-content/01-images/systemassets/glasses.png';
import logoImage from '../../1-content/01-images/systemassets/logo.png';
import founderAvatarImage from '../../1-content/01-images/systemassets/founder-avatar.png';
import servicesImage from '../../1-content/01-images/systemassets/3products.png';

import type { Language } from '@/05-lib/i18n';

import servicesData from '../../1-content/02-json/services.json';
import dressesData from '../../1-content/02-json/dresses.json';
import partnersData from '../../1-content/02-json/partners.json';
import faqsData from '../../1-content/02-json/faqs.json';
import decorData from '../../1-content/02-json/decor.json';
import galleryData from '../../1-content/02-json/gallery.json';
import blogData from '../../1-content/02-json/blog.json';

export const WHITE_FALLBACK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";

export const IMAGE_ASSETS = {
  hero: heroImage,
  dresses: dressesImage,
  founder: founderImage,
  founderAvatar: founderAvatarImage,
  decorMain: decorMainImage,
  decorAlt: decorAltImage,
  decorBackdrop: decorBackdrop,
  decorDetails: decorDetails,
  graphics: graphicsImage,
  glasses: glassesImage,
  map: mapImage,
  logo: logoImage,
  services: servicesImage,
} as const;

export const IMAGE_URLS = {
  hero: heroImage.src,
  dresses: dressesImage.src,
  founder: founderImage.src,
  decorMain: decorMainImage.src,
  decorAlt: decorAltImage.src,
  map: mapImage.src,
  logo: logoImage.src,
} as const;

const galleryImages = import.meta.glob<{ default: ImageMetadata }>('../../1-content/01-images/gallery/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}');
const dressImages = import.meta.glob<{ default: ImageMetadata }>('../../1-content/01-images/dresses/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}');
const decorImages = import.meta.glob<{ default: ImageMetadata }>('../../1-content/01-images/decorations/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}');

async function getDynamicImage(glob: Record<string, () => Promise<{ default: ImageMetadata }>>, filename: string): Promise<ImageMetadata | null> {
  const normalizedFilename = filename.toLowerCase();
  for (const path in glob) {
    if (path.toLowerCase().endsWith(normalizedFilename)) {
      const module = await glob[path]();
      return module.default;
    }
  }
  return null;
}

export const HOME_STATS = [
  { value: 'Online', label: 'predaj spoločenských šiat s doručením' },
  { value: '15-150 €', label: 'spoločenské šaty v ponuke online' },
  { value: 'Martin', label: 'osobný výdaj inventára v budove Detský sen' },
] as const;

export const HOME_STATS_EN = [
  { value: 'Online', label: 'formal & evening dresses shipped directly to you' },
  { value: 'from 15 €', label: 'curated occasion wear available online' },
  { value: 'Martin', label: 'decor pickup at the Detský sen building' },
] as const;

export const HOME_OFFER_CARDS = [
  {
    title: 'Spoločenské šaty online',
    price: 'od 15 €',
    description: 'Prechádzame na online-only: objednajte si spoločenské šaty na ples, svadbu či večierok s doručením domov.',
    href: '/spolocenske-saty',
    cta: 'Kúpiť online',
    icon: 'Star',
  },
  {
    title: 'Online objednávka',
    price: 'Rýchle vybavenie',
    description: 'Objednajte si šaty alebo dopytujte dekorácie cez jednoduchý formulár s WhatsApp prepojením.',
    href: '/kontakt#booking',
    cta: 'Objednať šaty',
    icon: 'Shirt',
  },
  {
    title: 'Svadobné šaty',
    price: 'Archív modelov',
    description: 'Svadobné skúšky šiat už neposkytujeme. Pozrite si prehľad modelov pred ukončením ponuky.',
    href: '/svadobne-saty',
    cta: 'Prezrieť modely',
    icon: 'Shirt',
  },
  {
    title: 'Prenájom dekorácií',
    price: 'od 0,50 € / ks',
    description: 'Zrkadlá, zlaté príbory, vázy a kompletné kulisy. Všetko, čo potrebujete na zladenie vašej hostiny.',
    href: '/prenajom-dekoracii',
    cta: 'Katalóg dekorácií',
    icon: 'LayoutGrid',
  },
  {
    title: 'Custom doplnky',
    price: 'od 5 €',
    description: 'Personalizované poháre, tričká, župany a ďalšie handmade detaily.',
    href: '/sluzby',
    cta: 'Pozrieť doplnky',
    icon: 'Gift',
  },
  {
    title: 'Poradenstvo a organizácia',
    price: 'od 39 €',
    description: 'Od malej pomoci po kompletnú prípravu svadby, RSVP a grafiku.',
    href: '/sluzby',
    cta: 'Pozrieť balíky',
    icon: 'ClipboardList',
  },
] as const;

export const HOME_OFFER_CARDS_EN = [
  {
    title: 'Formal dresses online',
    price: 'from 15 €',
    description: 'Online-only boutique: order prom, gala, or party dresses directly to your doorstep.',
    href: '/en/formal-dresses',
    cta: 'Shop online',
    icon: 'Star',
  },
  {
    title: 'Online orders',
    price: 'Quick dispatch',
    description: 'Order your dress or inquire about decor via our online form connected to WhatsApp.',
    href: '/en/contact#booking',
    cta: 'Order online',
    icon: 'Shirt',
  },
  {
    title: 'Wedding dresses',
    price: 'Notice',
    description: 'In-person wedding dress fittings are no longer available. Transitioning to online-only.',
    href: '/en/dresses',
    cta: 'View dresses',
    icon: 'Shirt',
  },
  {
    title: 'Event decorations',
    price: 'from 0.50 €',
    description: 'Rent mirrors, vases, or let us handle the complete setup for your party.',
    href: '/en/decorations',
    cta: 'Decorations catalog',
    icon: 'LayoutGrid',
  },
  {
    title: 'Custom accessories',
    price: 'from 5 €',
    description: 'Personalized glasses, t-shirts, robes and other handmade details.',
    href: '/en/services',
    cta: 'View accessories',
    icon: 'Star',
  },
  {
    title: 'Wedding planning',
    price: 'from 39 €',
    description: 'From moodboard to RSVP — solutions that save time and stress.',
    href: '/en/services',
    cta: 'View services',
    icon: 'ClipboardList',
  },
] as const;

export const TRUST_REASONS = [
  { title: 'Rýchly online nákup', description: 'Vyberte si spoločenské šaty pohodlne online s rýchlym doručením k vám.' },
  { title: 'Transparentné ceny', description: 'Žiadne skryté poplatky. Ceny šiat a inventára vidíte vopred.' },
  { title: 'Osobná asistencia online', description: 'Pomôžeme vám vybrať správnu veľkosť a zodpovieme otázky cez WhatsApp.' },
  { title: 'Všetko na jednom mieste', description: 'Spoločenské šaty, výzdoba aj rady dodávateľov pod jednou strechou.' },
] as const;

export const TRUST_REASONS_EN = [
  { title: 'Fast online shopping', description: 'Order your formal dresses comfortably online with swift home delivery.' },
  { title: 'Transparent pricing', description: 'No hidden fees. All dress and rental prices are upfront.' },
  { title: 'Personal support online', description: 'We help you choose the right fit and answer questions via WhatsApp.' },
  { title: 'All in one place', description: 'Formal wear, decor rentals, and vendor advice under one roof.' },
] as const;

export const BOOKING_FEATURES = [
  'Prechod na online-only predaj',
  'Svadobné skúšky šiat už neposkytujeme',
  'Spoločenské šaty s doručením k vám domov',
  'Rýchle overenie veľkosti a odoslanie cez WhatsApp',
] as const;

export const PROCESS_STEPS = [
  'Vyberte si spoločenské šaty alebo dekorácie v našej online ponuke.',
  'Pošlite objednávku / dopyt cez formulár alebo priamo cez WhatsApp.',
  'Potvrdíme dostupnosť, dohodneme doručenie šiat alebo prevzatie dekorácií.',
] as const;

export const PROCESS_STEPS_EN = [
  'Select formal dresses or decorations in our online catalog.',
  'Send your order or inquiry via the form or WhatsApp.',
  'We confirm availability and ship the dress or arrange decor pickup.',
] as const;

export const FOUNDER_STORY = {
  quote: 'Každá žena si zaslúži moment, keď sa cíti výnimočne.',
  paragraphs: [
    'Ahoj, volám sa Natália. MagicRoom vznikol, keď som si pripravovala vlastnú svadbu a zistila, koľko času zhltne zháňanie šiat, výzdoby a detailov.',
    'Chcela som miesto, kde ženy nájdu všetko pokope — šaty, dekorácie aj férové ceny.',
  ],
} as const;

export const FOUNDER_STORY_EN = {
  quote: 'Every woman deserves a moment where she feels special.',
  paragraphs: [
    'Hi, my name is Natalia. MagicRoom was born when I was preparing my own wedding and realized how much time is consumed by searching for dresses and decorations.',
    'I wanted a place where women could find everything together — dresses, decorations, and fair prices.',
  ],
} as const;

export function getHomeStats(lang: Language) {
  return lang === 'sk' ? HOME_STATS : HOME_STATS_EN;
}

export function getHomeOfferCards(lang: Language) {
  return lang === 'sk' ? HOME_OFFER_CARDS : HOME_OFFER_CARDS_EN;
}

export function getTrustReasons(lang: Language) {
  return lang === 'sk' ? TRUST_REASONS : TRUST_REASONS_EN;
}

export function getProcessSteps(lang: Language) {
  return lang === 'sk' ? PROCESS_STEPS : PROCESS_STEPS_EN;
}

export function getFounderStory(lang: Language) {
  return lang === 'sk' ? FOUNDER_STORY : FOUNDER_STORY_EN;
}

export function getServicePackages(lang: Language) {
  const data = lang === 'sk' ? servicesData.sk : servicesData.en;
  return data.packages;
}

export function getExtraServices(lang: Language) {
  const data = lang === 'sk' ? servicesData.sk : servicesData.en;
  return data.extra;
}

export function getDecorFeatured(lang: Language) {
  const data = lang === 'sk' ? decorData.sk : decorData.en;
  return data.categories.flatMap(cat => cat.items).filter(item => item.starred);
}

export async function getDecorCategories(lang: Language) {
  const data = lang === 'sk' ? decorData.sk : decorData.en;
  
  return Promise.all(data.categories.map(async (cat) => ({
    ...cat,
    items: await Promise.all(cat.items.map(async (item) => {
      let imageAsset: ImageMetadata | null = null;
      if (item.image) {
        const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP'];
        for (const ext of extensions) {
          const img = await getDynamicImage(decorImages as any, item.image + ext) || 
                     await getDynamicImage(galleryImages as any, item.image + ext);
          if (img) {
            imageAsset = img;
            break;
          }
        }
      }
      return {
        ...item,
        imageAsset,
        fallbackImage: WHITE_FALLBACK,
      };
    }))
  })));
}

export function getDecorPolicies(lang: Language) {
  const data = lang === 'sk' ? decorData.sk : decorData.en;
  return data.policies;
}

const CONTACT_ACTIONS = [
  { icon: 'Phone', label: 'Zavolať Natálii', value: PHONE_DISPLAY, href: PHONE_HREF, primary: true },
  { icon: 'MessageCircle', label: 'Napísať cez WhatsApp', value: 'Rýchla odpoveď', href: WHATSAPP_URL, primary: false },
  { icon: 'Mail', label: 'Poslať email', value: EMAIL, href: EMAIL_HREF, primary: false },
];

const CONTACT_ACTIONS_EN = [
  { icon: 'Phone', label: 'Call Natalia', value: PHONE_DISPLAY, href: PHONE_HREF, primary: true },
  { icon: 'MessageCircle', label: 'WhatsApp Us', value: 'Quick response', href: WHATSAPP_URL, primary: false },
  { icon: 'Mail', label: 'Send an email', value: EMAIL, href: EMAIL_HREF, primary: false },
];

const CONSIGNMENT_CONDITIONS_SK = [
  'Šaty musia byť profesionálne vyčistené a bez poškodení.',
  'Prijímame modely nie staršie ako 3 roky.',
  'Provízia salónu sa pripočítava ku vašej zvolenej čiastke.',
];

const CONSIGNMENT_CONDITIONS_EN = [
  'Dresses must be professionally cleaned and without damage.',
  'We accept models not older than 3 years.',
  'The salon commission will be added to your selected amount',
];

export function getConsignmentConditions(lang: Language) {
  return lang === 'sk' ? CONSIGNMENT_CONDITIONS_SK : CONSIGNMENT_CONDITIONS_EN;
}

export function getContactFaqs(lang: Language) {
  const data = lang === 'sk' ? faqsData.sk : faqsData.en;
  return data;
}

export function getContactActions(lang: Language) {
  return lang === 'sk' ? CONTACT_ACTIONS : CONTACT_ACTIONS_EN;
}

export async function getGalleryItems(lang: Language) {
  const items = await Promise.all(galleryData.gallery
    .filter(item => !['hero.png', 'dresses.png', 'decor-main.jpg', 'decor-alt.jpg', 'decor-backdrop.jpg', 'decor-details.jpg', 'logo.png', 'logo.jpeg'].includes(item.filename))
    .map(async (item) => {
      let filename = item.filename;
      if (filename.includes('saly-ruzove')) {
         filename = filename.replace('saly-ruzove', 'saty-ruzove');
      }
      
      const img = await getDynamicImage(galleryImages as any, filename);
      
      if (!img) return null;

      return {
        src: img,
        alt: lang === 'sk' ? item.alt : item.altEn,
        title: lang === 'sk' ? item.title : item.titleEn,
      };
    }));
    
  return items.filter((item): item is NonNullable<typeof item> => item !== null);
}

export function getPartners(lang: Language) {
  const data = lang === 'sk' ? partnersData.sk : partnersData.en;
  return data.partners;
}

export function getPartnerCategories(lang: Language) {
  return (partnersData as any).categories[lang];
}

export async function getDressCatalog(lang: Language) {
  return Promise.all(dressesData.dresses.map(async (dress) => {
    const extensions = ['.png', '.jpg', '.jpeg', '.JPG', '.JPEG', '.PNG'];
    const imageIds = dress.images || [dress.id];
    const images: ImageMetadata[] = [];
    
    for (const imgId of imageIds) {
      for (const ext of extensions) {
        const img = await getDynamicImage(dressImages as any, imgId + ext);
        if (img) {
          images.push(img);
          break;
        }
      }
    }
    
    return {
      ...dress,
      name: lang === 'sk' ? dress.name : ((dress as any).name_en || dress.name),
      description: lang === 'sk' ? dress.description : ((dress as any).description_en || dress.description),
      images: images,
      imageAsset: images[0] || null,
      fallbackImage: WHITE_FALLBACK,
    };
  }));
}

export async function getWeddingDresses(lang: Language) {
  const catalog = await getDressCatalog(lang);
  return catalog.filter(d => d.category === 'wedding');
}

export async function getFormalDresses(lang: Language) {
  const catalog = await getDressCatalog(lang);
  return catalog.filter(d => d.category === 'formal');
}

export const CONSIGNMENT_STEPS = [
  'Šaty nám zveríte čisté a vopred pošlete fotografie.',
  'Spoločne sa dohodne cena, ktorú chcete za šaty získať.',
  'MagicRoom šaty vystaví, propaguje a komunikuje so záujemkyňami.',
  'Po predaji vám vyplatíme dohodnutú sumu.',
] as const;

export const CONSIGNMENT_BENEFITS = [
  'Získate peniaze za šaty, ktoré už nenosíte.',
  'Pomáhate inej neveste ušetriť.',
  'Šaty získajú nový život.',
  'Bez starostí - my sa postaráme o predaj.',
] as const;

export function getConsignmentBenefits(lang: Language) {
  const en = [
    'You get money for dresses you no longer wear.',
    'You help another bride save.',
    'Dresses get a new life.',
    'No worries - we take care of the sale.',
  ];
  return lang === 'sk' ? CONSIGNMENT_BENEFITS : en;
}

export function getConsignmentSteps(lang: Language) {
  const en = [
    'You entrust us with clean dresses and send photos in advance.',
    'Together we agree on the price you want to get for the dress.',
    'MagicRoom displays, promotes, and communicates with interested parties.',
    'After the sale, we pay you the agreed amount.',
  ];
  return lang === 'sk' ? CONSIGNMENT_STEPS : en;
}

export async function getBlogPosts(lang: Language) {
  const data = blogData.posts;
  return Promise.all(data.map(async (post) => {
    const p = lang === 'sk' ? post.sk : post.en;
    const img = post.image ? await getDynamicImage(dressImages as any, post.image) : null;
    return {
      ...post,
      slug: lang === 'sk' ? post.slug : post.enSlug,
      skSlug: post.slug,
      enSlug: post.enSlug,
      title: p.title,
      excerpt: p.excerpt,
      description: p.description,
      date: p.date,
      readTime: p.readTime,
      content: p.content,
      tags: p.tags,
      image: img || IMAGE_ASSETS.hero,
      sk: post.sk,
      en: post.en
    };
  }));
}

export async function getBlogPost(slug: string, lang: Language) {
  const post = blogData.posts.find(p =>
    lang === 'sk' ? p.slug === slug : p.enSlug === slug
  );
  if (!post) return null;

  const p = lang === 'sk' ? post.sk : post.en;
  const img = post.image ? await getDynamicImage(dressImages as any, post.image) : null;
  return {
    ...post,
    slug: lang === 'sk' ? post.slug : post.enSlug,
    skSlug: post.slug,
    enSlug: post.enSlug,
    title: p.title,
    excerpt: p.excerpt,
    description: p.description,
    date: p.date,
    readTime: p.readTime,
    content: p.content,
    tags: p.tags,
    image: img || IMAGE_ASSETS.hero,
    sk: post.sk,
    en: post.en
  };
}

// Restore top-level constants for tests (pre-loaded with SK data)
export const GALLERY_ITEMS = await getGalleryItems('sk');
export const SERVICE_PACKAGES = getServicePackages('sk');
export const EXTRA_SERVICES = getExtraServices('sk');
export const DECOR_CATEGORIES = await getDecorCategories('sk');
export const DECOR_POLICIES = getDecorPolicies('sk');
export const CONTACT_FAQS = getContactFaqs('sk');
export const DRESS_CATALOG = await getDressCatalog('sk');
export const BLOG_POSTS = await getBlogPosts('sk');
export const WEDDING_DRESSES = await getWeddingDresses('sk');
export const FORMAL_DRESSES = await getFormalDresses('sk');
export const PARTNERS = getPartners('sk');
export const PARTNER_CATEGORIES = getPartnerCategories('sk');

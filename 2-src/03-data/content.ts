import {
  EMAIL,
  EMAIL_HREF,
  MAP_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
} from '@/data/site';

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

import type { Language } from '@/lib/i18n';

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
  { value: '15 €', label: 'skúška svadobných šiat s nápojom v cene' },
  { value: '100-700 €', label: 'svadobné šaty (nové aj komis)' },
  { value: 'Martin', label: 'osobný salón v budove Detský sen' },
] as const;

export const HOME_STATS_EN = [
  { value: 'from 30 €', label: 'formal & evening dresses for your events' },
  { value: '15 €', label: 'private dress fitting with drink included' },
  { value: 'Martin', label: 'boutique salon in the Detský sen building' },
] as const;

export const HOME_OFFER_CARDS = [
  {
    title: 'Skúška svadobných šiat',
    price: '15 € / 60 min',
    description: 'Pokojná skúška s nápojom v cene, priestorom pre dve osoby a časom na výber bez stresu.',
    href: '/kontakt#booking',
    cta: 'Rezervovať termín',
    icon: 'Shirt',
  },
  {
    title: 'Svadobné šaty',
    price: 'od 100 €',
    description: 'Nové modely aj komis za férové ceny.',
    href: '/svadobne-saty',
    cta: 'Pozrieť katalóg',
    icon: 'Star',
  },
  {
    title: 'Spoločenské šaty',
    price: 'od 15 €',
    description: 'Šaty na stužkovú, ples, oslavu alebo akúkoľvek príležitosť.',
    href: '/spolocenske-saty',
    cta: 'Ponuka šiat',
    icon: 'Star',
  },
  {
    title: 'Výzdoba a inventár',
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
    price: 'od 40 €',
    description: 'Od malej pomoci po kompletnú prípravu svadby, RSVP a grafiku.',
    href: '/sluzby',
    cta: 'Pozrieť balíky',
    icon: 'ClipboardList',
  },
] as const;

export const HOME_OFFER_CARDS_EN = [
  {
    title: 'Formal dresses',
    price: 'from 30 €',
    description: 'Perfect for student balls, prom or gala events. Quality dresses at student-friendly prices.',
    href: '/en/formal-dresses',
    cta: 'View collection',
    icon: 'Star',
  },
  {
    title: 'Formal dress fitting',
    price: '15 € / 60 min',
    description: 'Calm fitting for your prom, gala or event dress. Drink included.',
    href: '/en/contact#booking',
    cta: 'Book a time',
    icon: 'Shirt',
  },
  {
    title: 'Wedding dresses',
    price: 'from 100 €',
    description: 'New models and consignment at fair prices. See them before visiting.',
    href: '/en/wedding-dresses',
    cta: 'View collection',
    icon: 'Star',
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
    price: 'from 200 €',
    description: 'From moodboard to RSVP — solutions that save time and stress.',
    href: '/en/services',
    cta: 'View services',
    icon: 'ClipboardList',
  },
] as const;

export const TRUST_REASONS = [
  { title: 'Osobný prístup', description: 'Natália sa vám venuje osobne, aby ste našli presne to, čo hľadáte.' },
  { title: 'Transparentné ceny', description: 'Žiadne skryté poplatky. Ceny šiat a služieb poznáte vopred.' },
  { title: 'Pokojná atmosféra', description: 'Skúška u nás nie je stres, ale zážitok v príjemnom prostredí.' },
  { title: 'Všetko na jednom mieste', description: 'Šaty, výzdoba aj rady dodávateľov pod jednou strechou.' },
] as const;

export const TRUST_REASONS_EN = [
  { title: 'Personal approach', description: 'Natalia personally attends to you to find exactly what you are looking for.' },
  { title: 'Transparent pricing', description: 'No hidden fees. Dress and service prices are known upfront.' },
  { title: 'Calm atmosphere', description: 'A fitting with us is not a stress, but an experience in a pleasant environment.' },
  { title: 'All in one place', description: 'Dresses, decorations, and vendor advice under one roof.' },
] as const;

export const BOOKING_FEATURES = [
  '60 minút v príjemnej atmosfére',
  'pohárik prosecca, nealka alebo kávy v cene',
  'skúška svadobných šiat pre max. 2 osoby',
  'fotenie počas skúšky bez limitu',
] as const;

export const PROCESS_STEPS = [
  'Vyplníte krátky formulár alebo nám napíšete na WhatsApp.',
  'Do 24 hodín sa vám ozveme a doladíme termín skúšky či konzultácie.',
  'Na mieste vyriešite šaty, dekorácie aj ďalšie detaily pokojne a v jednom priestore.',
] as const;

export const PROCESS_STEPS_EN = [
  'Book your fitting via the form or WhatsApp.',
  'We get back to you within 24 hours to confirm.',
  'Visit our salon, enjoy a drink, and find your perfect dress.',
] as const;

export const FOUNDER_STORY = {
  quote: 'Každá žena si zaslúži moment, keď sa cíti výnimočne.',
  paragraphs: [
    'Ahoj, volám sa Natália. MagicRoom vznikol, keď som si pripravovala vlastnú svadbu a zistila, koľko času zhltne zháňanie šiat, výzdoby a detailov.',
    'Chcela som miesto, kde ženy nájdu všetko pokope — šaty, dekorácie aj férovú radu bez stresu and preplácania.',
  ],
} as const;

export const FOUNDER_STORY_EN = {
  quote: 'Every woman deserves a moment where she feels special.',
  paragraphs: [
    'Hi, my name is Natalia. MagicRoom was born when I was preparing my own wedding and realized how much time is consumed by searching for dresses and decorations.',
    'I wanted a place where women could find everything together — dresses, decorations, and fair advice without stress and overpaying.',
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
  'Provízia salónu je stanovená fixne pri podpise zmluvy.',
];

const CONSIGNMENT_CONDITIONS_EN = [
  'Dresses must be professionally cleaned and without damage.',
  'We accept models not older than 3 years.',
  'The salon commission is fixed upon signing the contract.',
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

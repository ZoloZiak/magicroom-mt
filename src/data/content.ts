import {
  EMAIL,
  EMAIL_HREF,
  MAP_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
} from '@/data/site';

import heroImage from '../../content/images/systemassets/hero-sm.webp';
import dressesImage from '../../content/images/systemassets/dresses.png';
import founderImage from '../../content/images/systemassets/founder.png';
import decorMainImage from '../../content/images/systemassets/decor-main.jpg';
import decorAltImage from '../../content/images/systemassets/decor-alt.jpg';
import mapImage from '../../content/images/systemassets/map.png';
import decorBackdrop from '../../content/images/systemassets/decor-backdrop.jpg';
import decorDetails from '../../content/images/systemassets/decor-details.jpg';
import graphicsImage from '../../content/images/systemassets/graphics.png';
import glassesImage from '../../content/images/systemassets/glasses.png';
import logoImage from '../../content/images/systemassets/logo.png';
import founderAvatarImage from '../../content/images/systemassets/founder-avatar.png';

import type { Language } from '@/lib/i18n';

import servicesData from '../../content/json/services.json';
import dressesData from '../../content/json/dresses.json';
import partnersData from '../../content/json/partners.json';
import faqsData from '../../content/json/faqs.json';
import decorData from '../../content/json/decor.json';
import galleryData from '../../content/json/gallery.json';
import blogData from '../../content/json/blog.json';

// White pixel fallback (1x1 white PNG)
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

const galleryImages = import.meta.glob<{ default: ImageMetadata }>('../../content/images/gallery/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
});

const dressImages = import.meta.glob<{ default: ImageMetadata }>('../../content/images/dresses/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
});

function getDynamicImage(glob: Record<string, { default: ImageMetadata }>, filename: string) {
  for (const path in glob) {
    if (path.endsWith(filename)) {
      return glob[path].default;
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
  { value: '15 €', label: 'formal dress fitting with drink included' },
  { value: '100-700 €', label: 'wedding dresses (new & consignment)' },
  { value: 'Martin', label: 'personal salon in the Detský sen building' },
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
    icon: 'Sparkles',
  },
  {
    title: 'Spoločenské šaty',
    price: 'od 15 €',
    description: 'Šaty na stužkovú, ples, oslavu alebo akúkoľvek príležitosť.',
    href: '/spolocenske-saty',
    cta: 'Ponuka šiat',
    icon: 'Sparkles',
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
    icon: 'Sparkles',
  },
  {
    title: 'Formal dresses',
    price: 'from 30 €',
    description: 'Perfect for Julebord, student balls or graduation. Quality dresses at student-friendly prices.',
    href: '/en/formal-dresses',
    cta: 'View collection',
    icon: 'Sparkles',
  },
  {
    title: 'Event decorations',
    price: 'from 0.50 €',
    description: 'Rent mirrors, vases, or let us handle the complete setup for your party.',
    href: '/en/decor-rental',
    cta: 'Decorations catalog',
    icon: 'LayoutGrid',
  },
  {
    title: 'Custom accessories',
    price: 'from 5 €',
    description: 'Personalized glasses, t-shirts, robes and other handmade details.',
    href: '/en/services',
    cta: 'View accessories',
    icon: 'Sparkles',
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
    'Chcela som miesto, kde ženy nájdu všetko pokope — šaty, dekorácie aj férovú radu bez stresu a preplácania.',
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

export function getDecorCategories(lang: Language) {
  const data = lang === 'sk' ? decorData.sk : decorData.en;
  
  return data.categories.map(cat => ({
    ...cat,
    items: cat.items.map(item => {
      let imageAsset = null;
      if (item.image) {
        imageAsset = getDynamicImage(galleryImages, item.image + '.jpg') || 
                     getDynamicImage(galleryImages, item.image + '.png');
      }
      return {
        ...item,
        imageAsset: imageAsset as ImageMetadata | null,
        fallbackImage: WHITE_FALLBACK,
      };
    })
  }));
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

export function getGalleryItems(lang: Language) {
  return galleryData.gallery
    .filter(item => !['hero.png', 'dresses.png', 'decor-main.jpg', 'decor-alt.jpg', 'decor-backdrop.jpg', 'decor-details.jpg', 'logo.png', 'logo.jpeg'].includes(item.filename))
    .map(item => {
      let filename = item.filename;
      if (filename.includes('saly-ruzove')) {
         filename = filename.replace('saly-ruzove', 'saty-ruzove');
      }
      
      const img = getDynamicImage(galleryImages, filename);
      
      return {
        src: img as ImageMetadata,
        alt: lang === 'sk' ? item.alt : item.altEn,
        title: lang === 'sk' ? item.title : item.titleEn,
      };
    })
    .filter(item => item.src !== null);
}

export function getPartners(lang: Language) {
  return lang === 'sk' ? partnersData.sk.partners : partnersData.en.partners;
}

export function getPartnerCategories(lang: Language) {
  return partnersData.categories[lang];
}

export const PARTNERS = getPartners('sk');
export const PARTNER_CATEGORIES = getPartnerCategories('sk');

export function getDressCatalog(lang: Language) {
  return dressesData.dresses.map(dress => {
    const extensions = ['.png', '.jpg', '.jpeg', '.JPG', '.JPEG', '.PNG'];
    const imageIds = dress.images || [dress.id];
    const images = imageIds.map(imgId => {
      for (const ext of extensions) {
        const img = getDynamicImage(dressImages, imgId + ext);
        if (img) return img as ImageMetadata;
      }
      return null;
    }).filter(Boolean);
    
    return {
      ...dress,
      name: lang === 'sk' ? dress.name : (dress.name_en || dress.name),
      description: lang === 'sk' ? dress.description : (dress.description_en || dress.description),
      images: images as ImageMetadata[],
      imageAsset: images[0] as ImageMetadata,
      fallbackImage: WHITE_FALLBACK,
    };
  });
}

export function getWeddingDresses(lang: Language) {
  return getDressCatalog(lang).filter(d => d.category === 'wedding');
}

export function getFormalDresses(lang: Language) {
  return getDressCatalog(lang).filter(d => d.category === 'formal');
}

export const DRESS_CATALOG = getDressCatalog('sk');
export const WEDDING_DRESSES = getWeddingDresses('sk');
export const FORMAL_DRESSES = getFormalDresses('sk');

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

export function getBlogPosts(lang: Language) {
  const data = blogData.posts;
  return data.map(post => {
    const p = lang === 'sk' ? post.sk : post.en;
    const img = post.image ? getDynamicImage(dressImages, post.image) : null;
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
    };
  });
}

export function getBlogPost(slug: string, lang: Language) {
  const post = blogData.posts.find(p =>
    lang === 'sk' ? p.slug === slug : p.enSlug === slug
  );
  if (!post) return null;

  const p = lang === 'sk' ? post.sk : post.en;
  const img = post.image ? getDynamicImage(dressImages, post.image) : null;
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
  };
}

export const BLOG_POSTS = getBlogPosts('sk');
export const SERVICE_PACKAGES = getServicePackages('sk');
export const EXTRA_SERVICES = getExtraServices('sk');
export const DECOR_CATEGORIES = getDecorCategories('sk');
export const DECOR_POLICIES = getDecorPolicies('sk');
export const CONTACT_FAQS = getContactFaqs('sk');
export const GALLERY_ITEMS = getGalleryItems('sk');

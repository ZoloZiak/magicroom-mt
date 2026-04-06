import {
  EMAIL,
  EMAIL_HREF,
  MAP_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
} from '@/data/site';

import heroImage from '../assets/images/hero.png';
import dressesImage from '../assets/images/dresses.png';
import founderImage from '../assets/images/founder.png';
import decorMainImage from '../assets/images/decor-main.jpg';
import decorAltImage from '../assets/images/decor-alt.jpg';
import mapImage from '../assets/images/map.png';
import founderAvatar from '../assets/images/founder-avatar.png';
import decorBackdrop from '../assets/images/decor-backdrop.jpg';
import decorDetails from '../assets/images/decor-details.jpg';
import graphicsImage from '../assets/images/graphics.png';
import glassesImage from '../assets/images/glasses.png';

import type { Language } from '@/lib/i18n';
import { SLUG_MAP, REVERSE_SLUG_MAP } from '@/lib/i18n';

import servicesData from '../../data/services.json';
import dressesData from '../../data/dresses.json';
import partnersData from '../../data/partners.json';
import faqsData from '../../data/faqs.json';
import decorData from '../../data/decor.json';
import galleryData from '../../data/gallery.json';

export const IMAGE_ASSETS = {
  hero: heroImage,
  dresses: dressesImage,
  founder: founderImage,
  founderAvatar: founderAvatar,
  decorMain: decorMainImage,
  decorAlt: decorAltImage,
  decorBackdrop: decorBackdrop,
  decorDetails: decorDetails,
  graphics: graphicsImage,
  glasses: glassesImage,
  map: mapImage,
  satyRuzove1: '/images/salon/saty-ruzove-1.jpeg',
  satyRuzove3: '/images/salon/saty-ruzove-3.jpeg',
  satyRuzove5: '/images/salon/saty-ruzove-5.jpeg',
  satyFialove1: '/images/salon/saty-fialove-1.jpeg',
  sachovnica1: '/images/salon/sachovnica-kontrast-1.jpeg',
  sachovnica3: '/images/salon/sachovnica-svetle-1.jpeg',
  interier1: '/images/salon/interier-teple-1.jpeg',
  interier2: '/images/salon/interier-chladne-1.jpeg',
  interier3: '/images/salon/interier-teple-3.jpeg',
  detail1: '/images/salon/detail-tmave-1.jpeg',
  detail2: '/images/salon/detail-tmave-4.jpeg',
} as const;

export const IMAGE_URLS = {
  hero: heroImage.src,
  dresses: dressesImage.src,
  founder: founderImage.src,
  decorMain: decorMainImage.src,
  decorAlt: decorAltImage.src,
  decorBackdrop: decorBackdrop.src,
  decorDetails: decorDetails.src,
  map: mapImage.src,
  'decor-backdrop-stol-zavesy': '/content/decorations/stol-zavesy.jpg',
  'decor-arrows-zapichy': '/content/decorations/zapichy-do-zeme.jpg',
  'decor-mirrors-welcome-set': '/content/decorations/chiavari-chairs.jpg',
  'decor-detail-real': '/content/decorations/decor-detail.jpg',
} as const;

export const HOME_STATS = [
  { value: '12 €', label: 'skúška svadobných šiat s nápojom v cene' },
  { value: '200–700 €', label: 'svadobné šaty (nové aj komis)' },
  { value: 'Martin', label: 'osobný salón v budove Detský sen' },
] as const;

export const HOME_STATS_EN = [
  { value: '12 €', label: 'formal dress fitting with drink included' },
  { value: '12–150 €', label: 'gala, prom & party dresses' },
  { value: 'Martin', label: 'personal salon in the Detský sen building' },
] as const;

export const HOME_OFFER_CARDS = [
  {
    title: 'Skúška svadobných šiat',
    price: '12 € / 60 min',
    description: 'Pokojná skúška s nápojom v cene, priestorom pre dve osoby a časom na rozhodnutie.',
    href: '/kontakt#booking',
    cta: 'Rezervovať termín',
    icon: 'shirt',
  },
  {
    title: 'Svadobné šaty',
    price: '200–700 €',
    description: 'Nové modely aj komis za férové ceny — vidíte ich ešte pred návštevou salónu.',
    href: '/sluzby',
    cta: 'Pozrieť služby',
    icon: 'sparkles',
  },
  {
    title: 'Spoločenské šaty',
    price: '12–150 €',
    description: 'Šaty na stužkovú, ples, oslavu alebo akúkoľvek príležitosť.',
    href: '/sluzby',
    cta: 'Pozrieť služby',
    icon: 'sparkles',
  },
  {
    title: 'Výzdoba svadieb a osláv',
    price: 'od 100 €',
    description: 'Kompletná výzdoba na kľúč — svadby, oslavy, eventy.',
    href: '/prenajom-dekoracii',
    cta: 'Katalóg dekorácií',
    icon: 'layout',
  },
  {
    title: 'Custom doplnky',
    price: 'od 5 €',
    description: 'Personalizované poháre, tričká, župany a ďalšie handmade detaily.',
    href: '/sluzby',
    cta: 'Pozrieť doplnky',
    icon: 'gift',
  },
  {
    title: 'Poradenstvo a organizácia',
    price: 'od 15 €',
    description: 'Od malej pomoci po kompletnú prípravu svadby, RSVP a grafiku.',
    href: '/sluzby',
    cta: 'Pozrieť balíky',
    icon: 'clipboard',
  },
] as const;

export const HOME_OFFER_CARDS_EN = [
  {
    title: 'Formal dress fitting',
    price: '12 € / 60 min',
    description: 'Calm fitting for your prom, gala or event dress. Drink included.',
    href: '/en/kontakt#booking',
    cta: 'Book a time',
    icon: 'shirt',
  },
  {
    title: 'Prom & Gala dresses',
    price: '12–150 €',
    description: 'Perfect for Julebord, student balls or graduation. Quality dresses at student-friendly prices.',
    href: '/en/sluzby',
    cta: 'View collection',
    icon: 'sparkles',
  },
  {
    title: 'Wedding dresses',
    price: '200–700 €',
    description: 'New models and consignment at fair prices. See them before visiting.',
    href: '/en/sluzby',
    cta: 'View services',
    icon: 'sparkles',
  },
  {
    title: 'Event decorations',
    price: 'from 0.50 €',
    description: 'Rent mirrors, vases, or let us handle the complete setup for your party.',
    href: '/en/prenajom-dekoracii',
    cta: 'Decorations catalog',
    icon: 'layout',
  },
  {
    title: 'Custom accessories',
    price: 'from 5 €',
    description: 'Personalized glasses, t-shirts, robes and other handmade details.',
    href: '/en/sluzby',
    cta: 'View accessories',
    icon: 'sparkles',
  },
  {
    title: 'Wedding planning',
    price: 'from 200 €',
    description: 'From moodboard to RSVP — solutions that save time and stress.',
    href: '/en/sluzby',
    cta: 'View services',
    icon: 'clipboard',
  },
  {
    title: 'Bridal consultation',
    price: '40 € / 60 min',
    description: 'Calm advice on dress, style and wedding details.',
    href: '/en/kontakt#booking',
    cta: 'Book consultation',
    icon: 'message',
  },
  {
    title: 'Consignment sale',
    price: 'from 50 €',
    description: 'Give your wedding dress a second life. We help with the whole process.',
    href: '/en/komisny-predaj',
    cta: 'More info',
    icon: 'refresh',
  },
] as const;

export const TRUST_REASONS = [
  {
    title: 'Transparentné ceny',
    description: 'Všetky ceny šiat aj služieb nájdete priamo na webe. Žiadne skryté poplatky.',
  },
  {
    title: 'Stretnutie s Natáliou',
    description: 'V salóne sa stretnete priamo s majiteľkou, ktorá vám poradí z vlastnej skúsenosti.',
  },
  {
    title: 'Lokalita Martin - Sever',
    description: 'Pohodlný prístup v budove Detský sen s možnosťou parkovania v blízkosti.',
  },
  {
    title: 'Všetko na jednom mieste',
    description: 'Od šiat cez doplnky až po kompletnú výzdobu sály. Šetríme váš čas aj energiu.',
  },
] as const;

export const TRUST_REASONS_EN = [
  {
    title: 'Transparent pricing',
    description: 'No hidden fees. Student-friendly prices for gala and prom dresses.',
  },
  {
    title: 'Personal approach',
    description: 'Not an anonymous store. Natália will help you find the dress that fits your style.',
  },
  {
    title: 'Perfect for international students',
    description: 'English speaking service, close to medical faculties, and much cheaper than in Norway.',
  },
  {
    title: 'Everything for your event',
    description: 'Dresses, accessories and decorations in one cozy place in Martin.',
  },
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
  'Choose your favorite dresses from our online gallery.',
  'Book a fitting via the form or WhatsApp (we speak English).',
  'Visit our salon in Martin, enjoy a drink, and find your perfect dress.',
] as const;

export const FOUNDER_STORY = {
  quote: 'Každá žena si zaslúži moment, keď sa cíti výnimočne.',
  paragraphs: [
    'Ahoj, volám sa Natália. MagicRoom vznikol, keď som si pripravovala vlastnú svadbu a zistila, koľko času zhltne zháňanie šiat, výzdoby a detailov.',
    'Chcela som miesto, kde ženy nájdu všetko pokope — šaty, dekorácie aj férovú radu bez stresu a preplácania.',
  ],
} as const;

export const FOUNDER_STORY_EN = {
  quote: 'Every woman deserves a moment when she feels extraordinary.',
  paragraphs: [
    "Hi, I'm Natália. MagicRoom was born when I was planning my own wedding and realized how much time finding dresses, decorations and details takes.",
    'I wanted a place where women find everything together — dresses, decorations and fair advice without stress and overpaying.',
  ],
} as const;

const ASSET_IMAGE_MAP: Record<string, string> = {
  hero: heroImage.src,
  dresses: dressesImage.src,
  decorMain: decorMainImage.src,
  decorAlt: decorAltImage.src,
  decorBackdrop: decorBackdrop.src,
  decorDetails: decorDetails.src,
};

function getImageAsset(filename: string): string {
  if (!filename) return IMAGE_ASSETS.satyRuzove1;
  if (filename.startsWith('/')) return filename;
  return `/${filename}`;
}

function getAssetImage(key: string): string {
  return ASSET_IMAGE_MAP[key] || IMAGE_ASSETS.satyRuzove1;
}

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
  return data.featured;
}

export function getDecorCategories(lang: Language) {
  const data = lang === 'sk' ? decorData.sk : decorData.en;
  return data.categories.map(cat => ({
    ...cat,
    items: cat.items.map(item => ({
      ...item,
      // @ts-ignore
      imageUrl: item.image ? (IMAGE_URLS[item.image as keyof typeof IMAGE_URLS] || `/images/decor/${item.image}.jpg`) : null
    }))
  }));
}

export function getDecorPolicies(lang: Language) {
  const data = lang === 'sk' ? decorData.sk : decorData.en;
  return data.policies;
}

export function getConsignmentSteps(lang: Language) {
  return lang === 'sk' ? CONSIGNMENT_STEPS : CONSIGNMENT_STEPS_EN;
}

export function getConsignmentBenefits(lang: Language) {
  return lang === 'sk' ? CONSIGNMENT_BENEFITS : CONSIGNMENT_BENEFITS_EN;
}

export function getConsignmentConditions(lang: Language) {
  return lang === 'sk' ? CONSIGNMENT_CONDITIONS : CONSIGNMENT_CONDITIONS_EN;
}

export function getContactFaqs(lang: Language) {
  const data = lang === 'sk' ? faqsData.sk : faqsData.en;
  return data;
}

export function getContactActions(lang: Language) {
  return lang === 'sk' ? CONTACT_ACTIONS : CONTACT_ACTIONS_EN;
}

export function getGalleryItems(lang: Language) {
  return galleryData.gallery.map(item => {
    let src = item.filename;
    // Map existing assets in assets/images
    if (['hero.png', 'dresses.png', 'decor-main.jpg', 'decor-alt.jpg', 'decor-backdrop.jpg', 'decor-details.jpg'].includes(src)) {
       const key = src.split('.')[0].replace('decor-', 'decor');
       return {
         src: IMAGE_URLS[key as keyof typeof IMAGE_URLS] || `/images/salon/${src}`,
         alt: lang === 'sk' ? item.alt : item.altEn,
         title: lang === 'sk' ? item.title : item.titleEn,
       };
    }
    
    if (src.includes('saly-ruzove')) {
       src = src.replace('saly-ruzove', 'saty-ruzove');
    }
    return {
      src: src.startsWith('/') ? src : `/images/salon/${src}`,
      alt: lang === 'sk' ? item.alt : item.altEn,
      title: lang === 'sk' ? item.title : item.titleEn,
    };
  });
}

export const PARTNERS = partnersData.partners;

export const PARTNER_CATEGORIES = partnersData.categories;

export const DRESS_CATALOG = dressesData.dresses.map(dress => {
  const imagePath = `/content/dresses/${dress.id}.jpg`;
  return {
    ...dress,
    image: imagePath, // Dynamická cesta k obrázku na základe ID
    fallbackImage: IMAGE_ASSETS.dresses.src, // Fallback, ak sa nepodarí načítať
  };
});

export const CONSIGNMENT_STEPS = [
  'Šaty nám zveríte čisté a vopred pošlete fotografie.',
  'Spoločne sa dohodne cena, ktorú chcete za šaty získať.',
  'MagicRoom šaty vystaví, propaguje a komunikuje so záujemkyňami.',
  'Peniaze vám pošleme do 7 dní od predaja.',
] as const;

export const CONSIGNMENT_STEPS_EN = [
  'You entrust us clean dresses and send photos in advance.',
  'We agree together on the price you want to get for the dresses.',
  'MagicRoom displays, promotes and communicates with interested brides.',
  'We send the money to you within 7 days after the sale.',
] as const;

export const CONSIGNMENT_BENEFITS = [
  'Druhý život pre vaše šaty bez riešenia inzercie a správ.',
  'Majiteľka určuje svoju cenu, provízia sa k nej pripočítava zvlášť.',
  'Ak sa šaty nepredajú, vrátia sa v pôvodnom stave alebo sa predĺži zmluva.',
] as const;

export const CONSIGNMENT_BENEFITS_EN = [
  "Second life for your dresses without dealing with ads and messages.",
  "The owner sets their own price, our commission is added separately.",
  "If the dresses don't sell, they return in original condition or we extend the contract.",
] as const;

export const CONSIGNMENT_CONDITIONS = [
  {
    title: 'Šaty musia byť vyčistené',
    description: 'Ak prídu znečistené alebo poškodené, vrátime ich späť majiteľke ešte pred zaradením do ponuky.',
  },
  {
    title: 'Cenu určujete vy',
    description: 'Cenu, ktorú chcete za šaty dostať, nemeníme. Naša provízia sa k nej pripočítava samostatne.',
  },
  {
    title: 'Vyplácanie do 7 dní',
    description: 'Po predaji vám pošleme peniaze do 7 dní na účet alebo podľa dohody.',
  },
  {
    title: 'Zmluva na niekoľko mesiacov',
    description: 'Ak sa šaty nepredajú, vrátime ich v pôvodnom stave alebo sa spoločne dohodneme na predĺžení.',
  },
] as const;

export const CONSIGNMENT_CONDITIONS_EN = [
  {
    title: 'Dresses must be clean',
    description: 'If they arrive dirty or damaged, we return them to the owner before listing.',
  },
  {
    title: 'You set the price',
    description: "We don't change the price you want for the dresses. Our commission is added separately.",
  },
  {
    title: 'Payment within 7 days',
    description: 'After the sale, we send the money to your account within 7 days or by agreement.',
  },
  {
    title: 'Contract for several months',
    description: "If the dresses don't sell, we return them in original condition or agree on extension.",
  },
] as const;

export const CONTACT_ACTIONS = [
  {
    title: 'Zavolajte nám',
    description: 'Najrýchlejší spôsob, ak chcete termín doriešiť hneď.',
    href: PHONE_HREF,
    label: PHONE_DISPLAY,
  },
  {
    title: 'Napíšte na WhatsApp',
    description: 'Krátka správa stačí — odpovieme vám čo najskôr.',
    href: WHATSAPP_URL,
    label: 'WhatsApp rezervácia',
  },
  {
    title: 'Pošlite email',
    description: 'Ak vám viac vyhovuje pokojný dopyt s detailami, napíšte nám email.',
    href: EMAIL_HREF,
    label: EMAIL,
  },
  {
    title: 'Nájdete nás v Martine',
    description: 'Jilemnického 4015/43, Martin - Sever / Záturčie (budova Detský sen, prízemie). Kliknutím otvoríte mapu.',
    href: MAP_URL,
    label: 'Otvoriť mapu',
  },
] as const;

export const CONTACT_ACTIONS_EN = [
  {
    title: 'Call us',
    description: 'The fastest way if you want to sort out an appointment right now.',
    href: PHONE_HREF,
    label: PHONE_DISPLAY,
  },
  {
    title: 'Write on WhatsApp',
    description: "A short message is enough — we'll reply as soon as possible.",
    href: WHATSAPP_URL,
    label: 'WhatsApp booking',
  },
  {
    title: 'Send an email',
    description: 'If you prefer a calm inquiry with details, write us an email.',
    href: EMAIL_HREF,
    label: EMAIL,
  },
  {
    title: 'Find us in Martin',
    description: 'Jilemnického 4015/43, Martin - Sever / Záturčie (Detský sen building, ground floor). Click to open the map.',
    href: MAP_URL,
    label: 'Open map',
  },
] as const;

export const SERVICE_PACKAGES = getServicePackages('sk');
export const EXTRA_SERVICES = getExtraServices('sk');
export const DECOR_CATEGORIES = getDecorCategories('sk');
export const DECOR_POLICIES = getDecorPolicies('sk');
export const CONTACT_FAQS = getContactFaqs('sk');
export const GALLERY_ITEMS = getGalleryItems('sk');
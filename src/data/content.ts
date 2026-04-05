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
  // Salon reference photos
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
  map: mapImage.src,
} as const;

export const HOME_STATS = [
  { value: '12 €', label: 'skúška svadobných šiat s nápojom v cene' },
  { value: '200–700 €', label: 'svadobné šaty (nové aj komis)' },
  { value: 'Martin', label: 'osobný salón v budove Detský sen' },
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

export const GALLERY_ITEMS = [
  {
    src: IMAGE_ASSETS.hero,
    alt: 'Interiér MagicRoom v Martine s jemnou svadobnou atmosférou.',
    title: 'Salón v Martine',
  },
  {
    src: IMAGE_ASSETS.dresses,
    alt: 'Svadobné šaty pripravené na skúšku v MagicRoom.',
    title: 'Modely na skúšku',
  },
  {
    src: IMAGE_ASSETS.decorMain,
    alt: 'Svadobné dekorácie na prenájom od MagicRoom.',
    title: 'Výzdoba stolov',
  },
  {
    src: IMAGE_ASSETS.decorAlt,
    alt: 'Detail romantickej svadobnej výzdoby.',
    title: 'Romantické detaily',
  },
  {
    src: IMAGE_ASSETS.decorBackdrop,
    alt: 'Svadobná kulisa so závesmi a svetielkami.',
    title: 'Kulisa a svetlá',
  },
  {
    src: IMAGE_ASSETS.decorDetails,
    alt: 'Handmade svadobné doplnky a smerové šípky.',
    title: 'Handmade doplnky',
  },
  {
    src: IMAGE_ASSETS.satyRuzove1,
    alt: 'Ružové svadobné šaty v salóne MagicRoom.',
    title: 'Ružové šaty',
  },
  {
    src: IMAGE_ASSETS.interier1,
    alt: 'Interiér svadobného salónu MagicRoom v Martine.',
    title: 'Interiér salónu',
  },
  {
    src: IMAGE_ASSETS.sachovnica1,
    alt: 'Čierno-biela šachovnicová podlaha v salóne.',
    title: 'Šachovnicový vzor',
  },
  {
    src: IMAGE_ASSETS.satyRuzove5,
    alt: 'Svadobné šaty na vešiaku v MagicRoom.',
    title: 'Šaty na mieru',
  },
  {
    src: IMAGE_ASSETS.interier2,
    alt: 'Pohľad na salón MagicRoom.',
    title: 'Náš priestor',
  },
] as const;

export const SERVICE_PACKAGES = [
  {
    name: 'Malá pomoc',
    price: '40 €',
    description: 'Jasné nasmerovanie a odporúčania pre nevestu na začiatku.',
    features: ['1 konzultácia (60 min)', 'moodboard', 'odporúčanie dekorácií'],
  },
  {
    name: 'Svadba základ',
    price: '150–200 €',
    description: 'Najčastejšia voľba — poriadok v prípravách a dodávateľoch.',
    recommended: true,
    features: [
      '2–3 konzultácie',
      'návrh výzdoby a moodboard',
      'harmonogram príprav',
      'odporúčanie dodávateľov',
    ],
  },
  {
    name: 'Kompletná príprava',
    price: '200–300 €',
    description: 'Kompletná príprava a koordinácia detailov.',
    features: [
      '3–4 konzultácie',
      'návrh výzdoby a moodboard',
      'harmonogram + hry',
      'obvolanie dodávateľov',
      'QR RSVP formulár',
    ],
  },
] as const;

export const EXTRA_SERVICES = [
  {
    title: 'Individuálna konzultácia',
    price: '15 € / 60 min',
    description: 'Osobne alebo online — rozpočet, štýl, prvé rozhodnutia.',
  },
  {
    title: 'Rozlúčka so slobodou',
    price: 'od 40 €',
    description: 'Koncept, program a tipy na aktivity v balíkoch Basic a Premium.',
  },
  {
    title: 'Grafika a handmade doplnky',
    price: 'od 15 €',
    description: 'Oznámenia, poháre, tričká a personalizované detaily.',
  },
  {
    title: 'RSVP online správa',
    price: '18 €',
    description: 'QR formulár, zber odpovedí hostí a prehľadná tabuľka.',
  },
] as const;

export const SERVICE_PACKAGES_EN = [
  {
    name: 'Event Styling',
    price: '40 €',
    description: 'Perfect for students or guests who need help with their overall event look.',
    features: ['1 styling session (60 min)', 'color palette & accessories', 'vendor recommendations'],
  },
  {
    name: 'Event Basic',
    price: '150–200 €',
    description: 'Most popular choice for smaller events, balls and celebrations.',
    recommended: true,
    features: [
      '2–3 planning sessions',
      'decoration proposal and moodboard',
      'preparation timeline',
      'budget optimization tips',
    ],
  },
  {
    name: 'Full Coordination',
    price: '200–300 €',
    description: 'Complete stress-free preparation for your wedding or big event.',
    features: [
      '3–4 consultations',
      'decoration proposal and moodboard',
      'timeline + entertainment plan',
      'vendor coordination',
      'online guest management (RSVP)',
    ],
  },
] as const;

export const EXTRA_SERVICES_EN = [
  {
    title: 'Individual Consultation',
    price: '15 € / 60 min',
    description: 'In person or online — budget, style, dress selection advice.',
  },
  {
    title: 'Student Events & Julebord',
    price: 'from 40 €',
    description: 'Planning, program and styling tips for student balls and parties.',
  },
  {
    title: 'Custom Party Supplies',
    price: 'from 5 €',
    description: 'Personalized glasses, t-shirts, and handmade event details.',
  },
  {
    title: 'Online RSVP management',
    price: '18 €',
    description: 'QR form, guest response collection and guest list management.',
  },
] as const;

export const DECOR_FEATURED = [
  { title: 'Veľké zrkadlo „Vitajte na našej svadbe"', price: '35 €', icon: 'frame' },
  { title: 'Candy bar balík v zlatej farbe', price: '20 €', icon: 'utensils' },
  { title: 'Svadobná kulisa so závesmi a svetielkami', price: '35 €', icon: 'lamp' },
  { title: 'Zlatý príbor', price: '1 € / set', icon: 'gift' },
] as const;

export const DECOR_FEATURED_EN = [
  { title: 'Large "Welcome to Our Wedding" mirror', price: '35 €', icon: 'frame' },
  { title: 'Gold candy bar package', price: '20 €', icon: 'utensils' },
  { title: 'Wedding backdrop with drapes and fairy lights', price: '35 €', icon: 'lamp' },
  { title: 'Gold cutlery', price: '1 € / set', icon: 'gift' },
] as const;

export const DECOR_CATEGORIES = [
  {
    category: 'Zrkadlá a uvítanie',
    items: [
      { name: 'Veľké zrkadlo 72 × 163 cm s nápisom „Vitajte na našej svadbe“', price: '35 €' },
      { name: 'Biele zrkadlo 70 × 90 cm na zasadací poriadok so svetielkami a stojanom', price: '25 €' },
      { name: 'Rámčeky s textom 10 × 12 cm (12 ks)', price: '18 €' },
    ],
  },
  {
    category: 'Kvety, vázy a textílie',
    items: [
      { name: 'Umelé kvety', price: 'od 0,50 € / ks' },
      { name: 'Vázy rôznych veľkostí', price: 'od 0,60 € / ks' },
      { name: 'Látkové obrúsky', price: 'od 0,40 € / ks' },
    ],
  },
  {
    category: 'Stoly a sweet bar',
    items: [
      { name: 'Stojany', price: 'od 5 €' },
      { name: 'Košíky', price: 'od 2 €' },
      { name: 'Candy bar balík v zlatej farbe', price: '20 €' },
      { name: 'Drevené čísla na stoly 1–8', price: '5 €' },
    ],
  },
  {
    category: 'Kulisy a doplnky',
    items: [
      { name: 'Svadobná kulisa so závesmi a svetielkami (2–3 m)', price: '35 €' },
      { name: 'Zlaté svietniky', price: '1,70 € / ks' },
      { name: 'Svetelné dekorácie', price: 'od 1 €' },
      { name: 'Zapichovacie drevené šípky', price: '25 €' },
    ],
  },
] as const;

export const DECOR_CATEGORIES_EN = [
  {
    category: 'Mirrors & Welcome',
    items: [
      { name: 'Large mirror 72 × 163 cm with "Welcome to Our Wedding" text', price: '35 €' },
      { name: 'White mirror 70 × 90 cm for seating chart with fairy lights and stand', price: '25 €' },
      { name: 'Text frames 10 × 12 cm (12 pcs)', price: '18 €' },
    ],
  },
  {
    category: 'Flowers, Vases & Textiles',
    items: [
      { name: 'Artificial flowers', price: 'from 0.50 € / pc' },
      { name: 'Vases of various sizes', price: 'from 0.60 € / pc' },
      { name: 'Fabric napkins', price: 'from 0.40 € / pc' },
    ],
  },
  {
    category: 'Tables & Sweet Bar',
    items: [
      { name: 'Stands', price: 'from 5 €' },
      { name: 'Baskets', price: 'from 2 €' },
      { name: 'Gold candy bar package', price: '20 €' },
      { name: 'Wooden table numbers 1–8', price: '5 €' },
    ],
  },
  {
    category: 'Backdrops & Accessories',
    items: [
      { name: 'Wedding backdrop with drapes and fairy lights (2–3 m)', price: '35 €' },
      { name: 'Gold candelabras', price: '1.70 € / pc' },
      { name: 'Light decorations', price: 'from 1 €' },
      { name: 'Wooden decorative arrows', price: '25 €' },
    ],
  },
] as const;

export const DECOR_POLICIES = [
  'Ku každej objednávke sa účtuje vratná záloha podľa hodnoty zapožičaných položiek.',
  'Pri oneskorenom vrátení si účtujeme 20 % z ceny nájmu za každý deň omeškania.',
  'Dekorácie sú určené na opakované používanie, preto prosíme o šetrné zaobchádzanie.',
  'Text na mieru vieme pripraviť za +5 € / pár nálepiek.',
] as const;

export const DECOR_POLICIES_EN = [
  'A refundable deposit is charged based on the value of borrowed items.',
  'For late returns, we charge 20% of the rental price per day of delay.',
  'Decorations are intended for repeated use, so please handle them carefully.',
  'Custom text can be prepared for +5 € / pair of stickers.',
] as const;

export const CONTACT_FAQS = [
  {
    question: 'Koľko stojí skúška svadobných šiat?',
    answer: '12 € za 60 minút — prosecco, nealko alebo káva v cene.',
  },
  {
    question: 'Môžem si počas skúšky fotiť?',
    answer: 'Áno, bez obmedzenia.',
  },
  {
    question: 'Ako si rezervujem termín?',
    answer: 'Formulárom, WhatsApp, emailom alebo zavolaním.',
  },
  {
    question: 'Ponúkate aj online konzultácie?',
    answer: 'Áno, časť plánovania vieme riešiť aj online.',
  },
] as const;

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
  'Second life for your dresses without dealing with ads and messages.',
  'The owner sets their own price, our commission is added separately.',
  'If the dresses don\'t sell, they return in original condition or we extend the contract.',
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
    description: 'We don\'t change the price you want for the dresses. Our commission is added separately.',
  },
  {
    title: 'Payment within 7 days',
    description: 'After the sale, we send the money to your account within 7 days or by agreement.',
  },
  {
    title: 'Contract for several months',
    description: 'If the dresses don\'t sell, we return them in original condition or agree on extension.',
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

export const CONTACT_FAQS_EN = [
  {
    question: 'How much does a wedding dress fitting cost?',
    answer: '12 € for 60 minutes — prosecco, non-alcoholic or coffee included.',
  },
  {
    question: 'Can I take photos during the fitting?',
    answer: 'Yes, without limits.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'Via form, WhatsApp, email or phone call.',
  },
  {
    question: 'Do you offer online consultations?',
    answer: 'Yes, part of the planning can be done online.',
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
    description: 'A short message is enough — we\'ll reply as soon as possible.',
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

export const DRESS_CATALOG = [
  {
    id: '1',
    name: 'Elegantná čipka',
    description: 'Čipkovaný vrch, áčková sukňa, jemný ružový tón.',
    price: 350,
    size: '38',
    status: 'available',
    type: 'new',
    image: IMAGE_ASSETS.satyRuzove1,
    featured: true,
  },
  {
    id: '2',
    name: 'Boho princezná',
    description: 'Voľné boho šaty s jemným zdobením.',
    price: 280,
    size: '36',
    status: 'available',
    type: 'new',
    image: IMAGE_ASSETS.satyRuzove3,
    featured: true,
  },
  {
    id: '3',
    name: 'Fialový sen',
    description: 'Netradičné fialové šaty pre odvážne nevesty.',
    price: 450,
    size: '40',
    status: 'available',
    type: 'new',
    image: IMAGE_ASSETS.satyFialove1,
    featured: true,
  },
  {
    id: '4',
    name: 'Klasická biela',
    description: 'Čisté línie, nadčasová elegancia.',
    price: 550,
    size: '38',
    status: 'available',
    type: 'new',
    image: IMAGE_ASSETS.satyRuzove5,
    featured: false,
  },
  {
    id: '5',
    name: 'Romantický závoj',
    description: 'Dlhý závoj, jemné zdobenie. Ideálne pre kostol.',
    price: 200,
    size: '42',
    status: 'available',
    type: 'consignment',
    image: IMAGE_ASSETS.satyRuzove1,
    featured: false,
  },
  {
    id: '6',
    name: 'Minimalistka',
    description: 'Čisté šaty bez zdobenia. Pre moderné nevesty.',
    price: 180,
    size: '36',
    status: 'reserved',
    type: 'consignment',
    image: IMAGE_ASSETS.satyRuzove3,
    featured: false,
  },
] as const;

export const HOME_STATS_EN = [
  { value: '12 €', label: 'formal dress fitting with drink included' },
  { value: '12–150 €', label: 'gala, prom & party dresses' },
  { value: 'Martin', label: 'personal salon in the Detský sen building' },
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

export const PROCESS_STEPS_EN = [
  'Choose your favorite dresses from our online gallery.',
  'Book a fitting via the form or WhatsApp (we speak English).',
  'Visit our salon in Martin, enjoy a drink, and find your perfect dress.',
] as const;
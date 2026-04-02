import {
  EMAIL,
  EMAIL_HREF,
  MAP_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
} from '@/data/site';

export const IMAGE_ASSETS = {
  hero: 'https://www.magicroom.sk/wp-content/uploads/2026/02/magicroombackround-1024x683.png',
  dresses: 'https://www.magicroom.sk/wp-content/uploads/2026/02/svadobnesaty.png',
  founder: 'https://www.magicroom.sk/wp-content/uploads/2026/02/5babd3c2-aadb-4851-8ed1-6ed110251da8-1-683x1024.png',
  founderAvatar: 'https://www.magicroom.sk/wp-content/uploads/2026/02/6d39468c-1f56-4919-8b0e-8af6b524c601-1-1-150x150.png',
  decorMain: 'https://www.magicroom.sk/wp-content/uploads/2026/02/IMG_3240_1-1-1024x693.jpg',
  decorAlt: 'https://www.magicroom.sk/wp-content/uploads/2026/02/IMG_3174-1-1024x683.jpg',
  decorBackdrop: 'https://www.magicroom.sk/wp-content/uploads/2026/02/Stolzavesy-1-1024x700.jpg',
  decorDetails: 'https://www.magicroom.sk/wp-content/uploads/2026/02/zapichydozeme-1-1.jpg',
  graphics: 'https://www.magicroom.sk/wp-content/uploads/2026/02/oznamenie-1.png',
  glasses: 'https://www.magicroom.sk/wp-content/uploads/2026/02/pohare-1.png',
  map: 'https://www.magicroom.sk/wp-content/uploads/2026/03/Snimka-obrazovky-2026-03-18-213208-1024x380.png',
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

export const HOME_STATS = [
  { value: '12 €', label: 'skúška svadobných šiat s nápojom v cene' },
  { value: '200–700 €', label: 'svadobné šaty (nové aj komis)' },
  { value: '1', label: 'salón, kde vás Natália osobne pozná' },
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
    title: 'Ceny vidíte hneď',
    description: 'Žiadne "zavolaj pre cenu". Všetko na stránke.',
  },
  {
    title: 'Osobný prístup od Natálie',
    description: 'Nie anonymný salón — konkrétny človek, ktorý vás pozná.',
  },
  {
    title: 'Praktická pomoc',
    description: 'Od moodboardu po RSVP — riešenia, ktoré šetria čas a stres.',
  },
  {
    title: 'Všetko pod jednou strechou',
    description: 'Šaty, dekorácie aj detaily — nemusíte behať medzi dodávateľmi.',
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

export const DECOR_FEATURED = [
  { title: 'Veľké zrkadlo „Vitajte na našej svadbe"', price: '35 €', icon: 'frame' },
  { title: 'Candy bar balík v zlatej farbe', price: '20 €', icon: 'utensils' },
  { title: 'Svadobná kulisa so závesmi a svetielkami', price: '35 €', icon: 'lamp' },
  { title: 'Zlatý príbor', price: '1 € / set', icon: 'gift' },
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

export const DECOR_POLICIES = [
  'Ku každej objednávke sa účtuje vratná záloha podľa hodnoty zapožičaných položiek.',
  'Pri oneskorenom vrátení si účtujeme 20 % z ceny nájmu za každý deň omeškania.',
  'Dekorácie sú určené na opakované používanie, preto prosíme o šetrné zaobchádzanie.',
  'Text na mieru vieme pripraviť za +5 € / pár nálepiek.',
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

export const CONSIGNMENT_BENEFITS = [
  'Druhý život pre vaše šaty bez riešenia inzercie a správ.',
  'Majiteľka určuje svoju cenu, provízia sa k nej pripočítava zvlášť.',
  'Ak sa šaty nepredajú, vrátia sa v pôvodnom stave alebo sa predĺži zmluva.',
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
    description: 'Jilemnického 4015/43, Záturčie. Kliknutím otvoríte mapu.',
    href: MAP_URL,
    label: 'Otvoriť mapu',
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
import type { Language } from './i18n';
import { SLUG_MAP, REVERSE_SLUG_MAP } from './i18n';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    dresses: string;
    blog: string;
    consignment: string;
    decorations: string;
    contact: string;
    bookAppointment: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
    ctaBook: string;
    ctaServices: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    servicesTitle: string;
    servicesSubtitle: string;
    whyTitle: string;
    whySubtitle: string;
    processTitle: string;
    founderLabel: string;
    blogTitle: string;
    blogSubtitle: string;
    blogCta: string;
    bookingTitle: string;
    bookingSubtitle: string;
  };
  common: {
    phone: string;
    address: string;
    email: string;
    callNow: string;
    writeWhatsapp: string;
    openMap: string;
    learnMore: string;
    readMore: string;
    viewAll: string;
    reserve: string;
    visitNote: string;
    replyNote: string;
    fittingNote: string;
    fittingPrice: string;
    logoSubtext: string;
    footerDescription: string;
    copyrightText: string;
    directionsText: string;
  };
  dresses: {
    pageTitle: string;
    pageDescription: string;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
  };
  consignment: {
    pageTitle: string;
    pageDescription: string;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
  };
  decorations: {
    pageTitle: string;
    pageDescription: string;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
  };
  gallery: {
    pageTitle: string;
    pageDescription: string;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
  };
  partners: {
    pageTitle: string;
    pageDescription: string;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
  };
  contact: {
    pageTitle: string;
    pageDescription: string;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
    visitNote: string;
    replyNote: string;
    fittingNote: string;
    bookingTitle: string;
    bookingDescription: string;
    nextStepsTitle: string;
    nextStepsDesc1: string;
    nextStepsDesc2: string;
  };
  bookingForm: {
    reservation: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    service: string;
    serviceSelect: string;
    serviceOptions: string[];
    date: string;
    time: string;
    timePlaceholder: string;
    note: string;
    notePlaceholder: string;
    priceInfo: string;
    altContact: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    submit: string;
    submitting: string;
    success: string;
    successWhatsapp: string;
    error: string;
    networkError: string;
    whatsappPre: string;
    whatsappLines: {
      intro: string;
      name: string;
      phone: string;
      email: string;
      interest: string;
      date: string;
      time: string;
      note: string;
    };
  };
  header: {
    mobileNavigation: string;
    mobileCallDirectly: string;
    mobileClose: string;
  };
}

const sk: Translations = {
  nav: {
    home: 'Domov',
    about: 'O nás',
    services: 'Služby',
    dresses: 'Šaty',
    blog: 'Blog',
    consignment: 'Komisný predaj',
    decorations: 'Dekorácie',
    contact: 'Kontakt',
    bookAppointment: 'Zarezervuj skúšku',
  },
  home: {
    heroBadge: 'Boutique bridal concierge • Martin',
    heroTitle: 'Šaty, dekorácie a pokojná svadobná pomoc na jednom mieste.',
    heroDescription: 'MagicRoom je pre nevesty, ktoré hľadajú osobný prístup v Martine. Začnite skúškou šiat od 12 € a doriešte výzdobu aj detaily s Natáliou, ktorá vás bude osobne sprevádzať celou prípravou.',
    ctaBook: 'Zarezervovať skúšku',
    ctaServices: 'Pozrieť ponuku a cenník',
    stat1Label: 'skúška svadobných šiat s nápojom v cene',
    stat2Label: 'svadobné šaty (nové aj komis)',
    stat3Label: 'osobný salón v budove Detský sen',
    servicesTitle: 'Čo pre vás v MagicRoom vieme urobiť',
    servicesSubtitle: 'Naša ponuka je postavená na reálnych potrebách neviest — od skúšky šiat až po kompletnú výzdobu na kľúč.',
    whyTitle: 'Prečo si nevesty v Martine vyberajú práve nás',
    whySubtitle: 'Osobný kontakt, jasné ceny a pokojná atmosféra.',
    processTitle: 'Ako si u nás rezervovať termín',
    founderLabel: 'S kým sa v salóne stretnete',
    blogTitle: 'Svadobné inšpirácie a rady z Martina',
    blogSubtitle: 'Praktické tipy na výber šiat, koordináciu dňa a trendy v dekoráciách priamo z našej praxe.',
    blogCta: 'Viac na blogu',
    bookingTitle: 'Vyberte si termín, ktorý vám vyhovuje',
    bookingSubtitle: 'Skúška trvá hodinu, stojí 12 € a v cene je aj malé občerstvenie.',
  },
  common: {
    phone: 'Telefón',
    address: 'Adresa',
    email: 'Email',
    callNow: 'Zavolať',
    writeWhatsapp: 'Napísať',
    openMap: 'Otvoriť navigáciu',
    learnMore: 'Zistiť viac',
    readMore: 'Čítať viac',
    viewAll: 'Pozrieť všetky',
    reserve: 'Rezervovať',
    visitNote: 'Martin • na objednávku',
    replyNote: 'Ozveme sa vám do 24 hodín.',
    fittingNote: 'Skúška svadobných šiat',
    fittingPrice: '12 € / 60 min',
    logoSubtext: 'bridal concierge • Martin',
    footerDescription: 'Boutique svadobný salón v Martine pre nevesty, ktoré chcú šaty, dekorácie a pokojné poradenstvo bez chaosu.',
    copyrightText: `© ${new Date().getFullYear()} MagicRoom. Všetky práva vyhradené.`,
    directionsText: 'Ako sa k nám dostať',
  },
  contact: {
    pageTitle: 'Kontakt a rezervácia skúšky šiat — MagicRoom Martin',
    pageDescription: 'Rezervujte si skúšku svadobných šiat od 12 € alebo svadobnú konzultáciu v MagicRoom v Martine.',
    heroBadge: 'Kontakt • rezervácia • Martin',
    heroTitle: 'Ozvite sa tak, ako vám je to prirodzené.',
    heroDescription: 'Ak chcete skúšku šiat, dekorácie alebo pokojne prejsť svadobné detaily, vyberte si telefonát, WhatsApp, email alebo rovno formulár nižšie.',
    visitNote: 'Martin • návšteva na objednávku',
    replyNote: 'Odpoveď zvyčajne do 24 hodín',
    fittingNote: 'Skúška svadobných šiat 12 € / 60 min',
    bookingTitle: 'Zarezervujte si skúšku alebo pošlite dopyt bez zbytočného čakania',
    bookingDescription: 'Vyplňte pár detailov a pripravíme vám WhatsApp správu, ktorú si pred odoslaním ešte skontrolujete.',
    nextStepsTitle: 'Najprv správa, potom potvrdenie termínu.',
    nextStepsDesc1: 'Po odoslaní formulára sa otvorí pripravená WhatsApp správa. Môžete ju doplniť alebo upraviť podľa seba.',
    nextStepsDesc2: 'Keď nám správa príde, ozveme sa vám s potvrdením termínu alebo s doplňujúcou otázkou.',
  },
  services: {
    pageTitle: 'Služby a cenník — Svadobné šaty, dekorácie, poradenstvo | MagicRoom Martin',
    pageDescription: 'Služby MagicRoom: skúška svadobných šiat od 12 €, výzdoba svadieb, svadobné poradenstvo. Cenová ponuka a.objednávanie.',
    heroBadge: 'Služby • cenník • Martin',
    heroTitle: 'Služby navrhnuté tak, aby ste nestrácali čas.',
    heroDescription: 'Každá karta nižšie je reálna časť ponuky MagicRoom — bez zbytočných fráz, s cenami a ďalším krokom, ktorý dáva zmysel.',
    bookingTitle: 'Rezervácia skúšky alebo dopyt na dekorácie',
    bookingDescription: 'Vyplňte pár detailov a ozveme sa vám s ponukou alebo potvrdením termínu.',
  },
  about: {
    pageTitle: 'O nás — Svadobný salón MagicRoom v Martine | Natália Ondrejková',
    pageDescription: 'MagicRoom je svadobný salón v Martine, ktorý prevádzkuje Natália Ondrejková. Personalizovaný prístup a skúsenosti.',
    heroBadge: 'O nás • MagicRoom Martin',
    heroTitle: 'Za MagicRoom stojí Natália',
  },
  dresses: {
    pageTitle: 'Svadobné šaty — Katalóg šiat v MagicRoom Martin',
    pageDescription: 'Vyberte si svadobné šaty z našej kolekcie. Nové aj komisné modely, rôzne veľkosti a štýly.',
    heroBadge: 'Svadobné šaty • Martin',
    heroTitle: 'Svadobné šaty, ktoré si zamilujete',
    heroDescription: 'Prezrite si našu kolekciu svadobných šiat. Každý model je jedinečný a pripravený na vašu skúšku.',
  },
  consignment: {
    pageTitle: 'Komisný predaj svadobných šiat — MagicRoom Martin',
    pageDescription: 'Predajte svoje svadobné šaty ďalším nevestám. Jednoduchý proces, férové podmienky.',
    heroBadge: 'Komisný predaj • Martin',
    heroTitle: 'Komisný predaj svadobných šiat',
    heroDescription: 'Ponúknite svoje svadobné šaty a nechajte ich žiť ďalej. Všetko vybavíme za vás.',
  },
  decorations: {
    pageTitle: 'Svadobné dekorácie a výzdoba — Prenájom | MagicRoom Martin',
    pageDescription: 'Prenájom svadobných dekorácií. Výzdoba stolov, arky, kulisy a doplnky pre vašu svadbu.',
    heroBadge: 'Dekorácie • Martin',
    heroTitle: 'Dekorácie, ktoré vytvárajú atmosféru',
    heroDescription: 'Od ariek po stolové dekorácie — všetko potrebné pre váš svadobný deň na jednom mieste.',
  },
  gallery: {
    pageTitle: 'Galéria — Svadobný salón MagicRoom Martin',
    pageDescription: 'Pozrite si fotografie z nášho salóna a svadobných dekorácií.',
    heroBadge: 'Galéria • Martin',
    heroTitle: 'Galéria inšpirácií',
    heroDescription: 'Fotografie z našich realizácií a interiéru salóna.',
  },
  partners: {
    pageTitle: 'Partneri — Odporúčaní dodávatelia | MagicRoom Martin',
    pageDescription: 'Spoľahliví partneri pre vašu svadbu. Fotograf, catering, DJ a ďalší profesionáli.',
    heroBadge: 'Partneri • Martin',
    heroTitle: 'Naši partneri',
    heroDescription: 'Odporúčame len overených profesionálov, s ktorými máme osobnú skúsenosť.',
  },
  bookingForm: {
    reservation: 'Rezervácia skúšky',
    name: 'Meno',
    namePlaceholder: 'Vaše meno',
    phone: 'Telefón alebo WhatsApp',
    phonePlaceholder: '+421 950 490 323',
    email: 'Email',
    emailPlaceholder: 'anna@email.sk (nepovinné)',
    service: 'Čo chcete riešiť?',
    serviceSelect: 'Vyberte si...',
    serviceOptions: [
      'Skúška svadobných alebo spoločenských šiat',
      'Konzultácia k svadbe alebo harmonogramu',
      'Prenájom dekorácií a výzdoby',
      'Balík organizácie svadby',
    ],
    date: 'Preferovaný dátum',
    time: 'Preferovaný čas',
    timePlaceholder: 'napr. piatok poobede',
    note: 'Poznámka',
    notePlaceholder: 'Napíšte nám, aké šaty hľadáte, termín svadby alebo čo chcete pri rezervácii doriešiť ako prvé.',
    priceInfo: 'Skúška svadobných šiat: 12 € / 60 min • nápoj v cene • max. 2 blízke osoby.',
    altContact: 'Ak nechcete formulár dokončovať hneď, môžete sa ozvať aj priamo cez',
    phoneLabel: 'telefón',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'email',
    submit: 'Odoslať rezerváciu',
    submitting: 'Odosielame…',
    success: 'Rezervácia odoslaná! Ozveme sa vám do 24 hodín.',
    successWhatsapp: 'Pokračovať cez WhatsApp',
    error: 'Niečo sa pokazilo. Skúste to znova.',
    networkError: 'Chyba pripojenia. Skúste to znova alebo nám zavolajte.',
    whatsappPre: 'Po odoslaní dostanete možnosť pokračovať aj cez WhatsApp.',
    whatsappLines: {
      intro: 'Dobrý deň, chcela by som si rezervovať termín v MagicRoom.',
      name: 'Meno',
      phone: 'Telefón',
      email: 'Email',
      interest: 'Záujem',
      date: 'Preferovaný dátum',
      time: 'Preferovaný čas',
      note: 'Poznámka',
    },
  },
  header: {
    mobileNavigation: 'Navigácia',
    mobileCallDirectly: 'Alebo zavolajte priamo',
    mobileClose: 'Zavrieť',
  },
};

const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    dresses: 'Dresses',
    blog: 'Blog',
    consignment: 'Consignment',
    decorations: 'Decorations',
    contact: 'Contact',
    bookAppointment: 'Book fitting',
  },
  home: {
    heroBadge: 'Boutique bridal & occasion wear • Martin',
    heroTitle: 'Occasion wear, graduation dresses and personal styling in Martin.',
    heroDescription: 'MagicRoom is a boutique salon for students and guests who value a personal touch. Find your perfect prom or gala dress starting from 12 € in a cozy setting in the Záturčie / Sever area.',
    ctaBook: 'Book a dress fitting',
    ctaServices: 'View occasion wear & prices',
    stat1Label: 'formal dress fitting with drink included',
    stat2Label: 'gala, prom & Julebord dresses',
    stat3Label: 'personal salon in the Detský sen building',
    servicesTitle: 'Our services for your big events',
    servicesSubtitle: 'From prom dresses to complete event decorations, we provide everything you need with transparent pricing.',
    whyTitle: 'Why international students choose MagicRoom',
    whySubtitle: 'Personal approach, fair prices and English-friendly service.',
    processTitle: 'Book your fitting in simple steps',
    founderLabel: 'Meet the person behind MagicRoom',
    blogTitle: 'Event styling tips and inspiration',
    blogSubtitle: 'Read about the latest formal wear trends and practical advice for your celebrations in Martin.',
    blogCta: 'Go to blog',
    bookingTitle: 'Choose a time for your fitting',
    bookingSubtitle: 'Fitting takes 60 minutes, costs 12 € and includes a small refreshment.',
  },
  common: {
    phone: 'Phone',
    address: 'Address',
    email: 'Email',
    callNow: 'Call',
    writeWhatsapp: 'Write',
    openMap: 'Open navigation',
    learnMore: 'Learn more',
    readMore: 'Read more',
    viewAll: 'View all',
    reserve: 'Reserve',
    visitNote: 'Martin • by appointment',
    replyNote: "We'll get back to you within 24 hours.",
    fittingNote: 'Wedding dress fitting',
    fittingPrice: '12 € / 60 min',
    logoSubtext: 'bridal concierge • Martin',
    footerDescription: 'Boutique wedding salon in Martin for brides who want dresses, decorations and calm consulting without chaos.',
    copyrightText: `© ${new Date().getFullYear()} MagicRoom. All rights reserved.`,
    directionsText: 'How to get here',
  },
  contact: {
    pageTitle: 'Occasion Wear & Formal Dress Fitting — MagicRoom Martin',
    pageDescription: 'Book your prom, gala or formal dress fitting from 12 € at MagicRoom in Martin. Perfect for international students and event guests.',
    heroBadge: 'Occasion wear • reservation • Martin',
    heroTitle: 'Find your perfect dress for any occasion.',
    heroDescription: 'Looking for a Julebord outfit, graduation gown, or a ball dress? Reach out via WhatsApp, email or use the form below to book your fitting.',
    visitNote: 'Martin • visit by appointment',
    replyNote: 'Reply usually within 24 hours',
    fittingNote: 'Formal dress fitting 12 € / 60 min',
    bookingTitle: 'Book a fitting or send a query without waiting',
    bookingDescription: 'Fill in a few details and we will prepare a WhatsApp message for you to check before sending.',
    nextStepsTitle: 'First a message, then a time confirmation.',
    nextStepsDesc1: 'After submitting the form, a prepared WhatsApp message will open. You can add to it or edit it as you like.',
    nextStepsDesc2: 'When we receive your message, we will get back to you with a time confirmation or a follow-up question.',
  },
  services: {
    pageTitle: 'Occasion Wear Services & Prices — Prom & Gala Dresses | MagicRoom Martin',
    pageDescription: 'MagicRoom services: formal dress fitting from 12 €, event decorations, styling advice. Transparent pricing for students and guests.',
    heroBadge: 'Services • prices • Martin',
    heroTitle: 'Occasion wear services designed for your big events.',
    heroDescription: 'Whether it is Julebord, a student ball, or graduation, we have the right dress and accessories with transparent pricing.',
    bookingTitle: 'Book a fitting or query about decorations',
    bookingDescription: 'Fill in a few details and we will get back to you with a quote or time confirmation.',
  },
  about: {
    pageTitle: 'About — Wedding salon MagicRoom in Martin | Natália Ondrejková',
    pageDescription: 'MagicRoom is a wedding salon in Martin run by Natália Ondrejková. Personalized approach and experience.',
    heroBadge: 'About • MagicRoom Martin',
    heroTitle: 'Behind MagicRoom is Natália',
  },
  dresses: {
    pageTitle: 'Wedding Dresses — Catalog at MagicRoom Martin',
    pageDescription: 'Choose from our collection of wedding dresses. New and consignment models, various sizes and styles.',
    heroBadge: 'Wedding dresses • Martin',
    heroTitle: 'Wedding dresses you will love',
    heroDescription: 'Browse our collection of wedding dresses. Each model is unique and ready for your fitting.',
  },
  consignment: {
    pageTitle: 'Consignment — Sell Your Wedding Dress | MagicRoom Martin',
    pageDescription: 'Sell your wedding dress to other brides. Simple process, fair terms.',
    heroBadge: 'Consignment • Martin',
    heroTitle: 'Consignment Wedding Dresses',
    heroDescription: 'Offer your wedding dress and let it live on. We handle everything for you.',
  },
  decorations: {
    pageTitle: 'Wedding Decorations & Rentals | MagicRoom Martin',
    pageDescription: 'Rent wedding decorations. Table centerpieces, arches, backdrops and accessories for your wedding.',
    heroBadge: 'Decorations • Martin',
    heroTitle: 'Decorations that create atmosphere',
    heroDescription: 'From arches to table centerpieces — everything you need for your wedding day in one place.',
  },
  gallery: {
    pageTitle: 'Gallery — MagicRoom Wedding Salon Martin',
    pageDescription: 'Browse photos from our salon and wedding decorations.',
    heroBadge: 'Gallery • Martin',
    heroTitle: 'Gallery of inspirations',
    heroDescription: 'Photos from our installations and salon interior.',
  },
  partners: {
    pageTitle: 'Partners — Recommended Vendors | MagicRoom Martin',
    pageDescription: 'Reliable partners for your wedding. Photographer, catering, DJ and other professionals.',
    heroBadge: 'Partners • Martin',
    heroTitle: 'Our Partners',
    heroDescription: 'We only recommend verified professionals we have personal experience with.',
  },
  bookingForm: {
    reservation: 'Booking fitting',
    name: 'Name',
    namePlaceholder: 'Your name',
    phone: 'Phone or WhatsApp',
    phonePlaceholder: '+421 950 490 323',
    email: 'Email',
    emailPlaceholder: 'anna@email.sk (optional)',
    service: 'What would you like to solve?',
    serviceSelect: 'Choose...',
    serviceOptions: [
      'Wedding or formal dress fitting',
      'Wedding consultation or timeline',
      'Decoration rental',
      'Wedding planning package',
    ],
    date: 'Preferred date',
    time: 'Preferred time',
    timePlaceholder: 'e.g. Friday afternoon',
    note: 'Note',
    notePlaceholder: 'Tell us about your wedding dress preferences, wedding date or what you want to solve first.',
    priceInfo: 'Wedding dress fitting: 12 € / 60 min • drink included • max. 2 close people.',
    altContact: 'If you don\'t want to complete the form right now, you can also reach us directly via',
    phoneLabel: 'phone',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'email',
    submit: 'Submit booking',
    submitting: 'Sending...',
    success: 'Booking sent! We\'ll get back to you within 24 hours.',
    successWhatsapp: 'Continue on WhatsApp',
    error: 'Something went wrong. Try again.',
    networkError: 'Connection error. Try again or call us.',
    whatsappPre: 'After sending, you\'ll get the option to continue on WhatsApp.',
    whatsappLines: {
      intro: 'Hello, I would like to book an appointment at MagicRoom.',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      interest: 'Interest',
      date: 'Preferred date',
      time: 'Preferred time',
      note: 'Note',
    },
  },
  header: {
    mobileNavigation: 'Navigation',
    mobileCallDirectly: 'Or call directly',
    mobileClose: 'Close',
  },
};

export const translations: Record<Language, Translations> = { sk, en };

export function getTranslations(language: Language): Translations {
  return translations[language];
}

/**
 * Returns translated href for a given SK slug and target language
 */
export function getRelativeHref(skSlug: string, lang: Language): string {
  if (lang === 'sk') {
    return skSlug === 'index' ? '/' : `/${skSlug}`;
  }
  
  const enSlug = skSlug === 'index' ? '' : (SLUG_MAP[skSlug] || skSlug);
  return enSlug === '' ? '/en' : `/en/${enSlug}`;
}

/**
 * Returns SK slug for a given potentially translated slug and language
 */
export function getSkSlug(slug: string | undefined, lang: Language): string {
  if (!slug || slug === 'index') return 'index';
  if (lang === 'sk') return slug;
  return REVERSE_SLUG_MAP[slug] || slug;
}
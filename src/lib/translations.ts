import type { Language } from './i18n';

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
    heroDescription: 'MagicRoom je pre nevesty, ktoré nechcú behať medzi piatimi dodávateľmi. Začnite skúškou šiat od 12 € a doriešte výzdobu aj detaily s človekom, ktorý vás pozná.',
    ctaBook: 'Zarezervovať skúšku',
    ctaServices: 'Pozrieť služby a cenník',
    stat1Label: 'skúška svadobných šiat s nápojom v cene',
    stat2Label: 'svadobné šaty (nové aj komis)',
    stat3Label: 'salón, kde vás Natália osobne pozná',
    servicesTitle: 'Služby navrhnuté tak, aby ste nestrácali čas.',
    servicesSubtitle: 'Každá karta nižšie je reálna časť ponuky MagicRoom — bez zbytočných fráz, s cenami a ďalším krokom, ktorý dáva zmysel.',
    whyTitle: 'Osobný kontakt, jasné ceny a žiadny organizačný chaos.',
    whySubtitle: 'Prečo si nevesty vyberajú MagicRoom',
    processTitle: 'Rezervácia bez zbytočných krokov.',
    founderLabel: 'Za MagicRoom stojí Natália',
    blogTitle: 'Inšpirácie pre vašu svadbu',
    blogSubtitle: 'Prečítajte si naše články o svadobných trendoch, tipoch na výber šiat a dekorácií.',
    blogCta: 'Prečítať blog',
    bookingTitle: 'Začnite termínom, ktorý vám sadne.',
    bookingSubtitle: 'Skúška trvá 60 minút, stojí 12 € a v cene je aj nápoj.',
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
    bookAppointment: 'Book appointment',
  },
  home: {
    heroBadge: 'Boutique bridal concierge • Martin',
    heroTitle: 'Dresses, decorations and calm wedding help in one place.',
    heroDescription: 'MagicRoom is for brides who don\'t want to run between five suppliers. Start with a dress fitting from 12 € and sort out decorations and details with someone who knows you.',
    ctaBook: 'Book a fitting',
    ctaServices: 'View services & prices',
    stat1Label: 'wedding dress fitting with drink included',
    stat2Label: 'wedding dresses (new & consignment)',
    stat3Label: 'salon where Natália knows you personally',
    servicesTitle: 'Services designed so you don\'t waste time.',
    servicesSubtitle: 'Each card below is a real part of MagicRoom\'s offer — no fluff, with prices and next steps that make sense.',
    whyTitle: 'Personal contact, clear prices and no organizational chaos.',
    whySubtitle: 'Why brides choose MagicRoom',
    processTitle: 'Reservation without unnecessary steps.',
    founderLabel: 'Behind MagicRoom is Natália',
    blogTitle: 'Inspiration for your wedding',
    blogSubtitle: 'Read our articles about wedding trends, dress tips and decorations.',
    blogCta: 'Read blog',
    bookingTitle: 'Start with a time that suits you.',
    bookingSubtitle: 'Fitting takes 60 minutes, costs 12 € and includes a drink.',
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
  },
};

export const translations: Record<Language, Translations> = { sk, en };

export function getTranslations(language: Language): Translations {
  return translations[language];
}
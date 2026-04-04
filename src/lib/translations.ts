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
  contact: {
    pageTitle: 'Contact and dress fitting reservation — MagicRoom Martin',
    pageDescription: 'Book your wedding dress fitting from 12 € or wedding consultation at MagicRoom in Martin.',
    heroBadge: 'Contact • reservation • Martin',
    heroTitle: 'Reach out in whatever way feels natural.',
    heroDescription: 'If you want a dress fitting, decorations or just to calmly discuss wedding details, choose a phone call, WhatsApp, email or the form below.',
    visitNote: 'Martin • visit by appointment',
    replyNote: 'Reply usually within 24 hours',
    fittingNote: 'Wedding dress fitting 12 € / 60 min',
    bookingTitle: 'Book a fitting or send a query without waiting',
    bookingDescription: 'Fill in a few details and we will prepare a WhatsApp message for you to check before sending.',
    nextStepsTitle: 'First a message, then a time confirmation.',
    nextStepsDesc1: 'After submitting the form, a prepared WhatsApp message will open. You can add to it or edit it as you like.',
    nextStepsDesc2: 'When we receive your message, we will get back to you with a time confirmation or a follow-up question.',
  },
  services: {
    pageTitle: 'Services and prices — Wedding dresses, decorations, consulting | MagicRoom Martin',
    pageDescription: 'MagicRoom services: wedding dress fitting from 12 €, wedding decorations, wedding consulting. Price list and booking.',
    heroBadge: 'Services • prices • Martin',
    heroTitle: 'Services designed so you do not waste time.',
    heroDescription: 'Each card below is a real part of MagicRoom offer — no fluff, with prices and next steps that make sense.',
    bookingTitle: 'Book a fitting or query about decorations',
    bookingDescription: 'Fill in a few details and we will get back to you with a quote or time confirmation.',
  },
  about: {
    pageTitle: 'About — Wedding salon MagicRoom in Martin | Natália Ondrejková',
    pageDescription: 'MagicRoom is a wedding salon in Martin run by Natália Ondrejková. Personalized approach and experience.',
    heroBadge: 'About • MagicRoom Martin',
    heroTitle: 'Behind MagicRoom is Natália',
  },
};

export const translations: Record<Language, Translations> = { sk, en };

export function getTranslations(language: Language): Translations {
  return translations[language];
}
import type { Language as Lang } from './i18n';
import { SLUG_MAP, REVERSE_SLUG_MAP, getRelativeHref } from './i18n';

export type Language = Lang;
export { getRelativeHref };

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    dresses: string;
    formal: string;
    blog: string;
    consignment: string;
    decorations: string;
    gallery: string;
    partners: string;
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
    processSubtitle: string;
    processNote: string;
    founderLabel: string;
    blogTitle: string;
    blogSubtitle: string;
    blogCta: string;
    bookingTitle: string;
    bookingSubtitle: string;
    bookingNote: string;
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
    complaintPolicy: string;
    directionsText: string;
  };
  services: {
    pageTitle: string;
    pageDescription: string;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
    bookingTitle: string;
    bookingDescription: string;
  };
  dresses: {
    pageTitle: string;
    pageDescription: string;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
    statusAvailable: string;
    statusReserved: string;
    sizeLabel: string;
    rentalLabel: string;
    bookFitting: string;
    consignmentTitle: string;
    consignmentText: string;
  };
  formal: {
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
    featuredTitle: string;
    catalogTitle: string;
    photoNote: string;
    policiesTitle: string;
    customRequest: string;
    contactCta: string;
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
  about: {
    pageTitle: string;
    pageDescription: string;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
    storyTitle: string;
    storyQuote: string;
    storyText1: string;
    storyText2: string;
    principlesTitle: string;
    principlesSubtitle: string;
    callFounder: string;
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
    dresses: 'Svadobné šaty',
    formal: 'Spoločenské šaty',
    blog: 'Blog',
    consignment: 'Komisný predaj',
    decorations: 'Dekorácie',
    gallery: 'Galéria',
    partners: 'Partneri',
    contact: 'Kontakt',

    bookAppointment: 'Objednať online',
  },
  home: {
    heroBadge: 'Online boutique & event concierge • Martin',
    heroTitle: 'Spoločenské šaty a svadobný inventár na jednom mieste.',
    heroDescription: 'Prechádzame na online-only: svadobné skúšky šiat už neposkytujeme. Zakúpiť si u nás viete spoločenské šaty s doručením k vám domov a rezervovať prenájom svadobných dekorácií.',
    ctaBook: 'Pozrieť spoločenské šaty',
    ctaServices: 'Pozrieť ponuku a cenník',
    stat1Label: 'online nákup spoločenských šiat s doručením',
    stat2Label: 'spoločenské šaty v e-shope za skvelé ceny',
    stat3Label: 'osobný výdaj dekorácií v budove Detský sen',
    servicesTitle: 'Čo pre vás v MagicRoom vieme urobiť',
    servicesSubtitle: 'Naša ponuka sa sústredí na online nákup spoločenských šiat a kompletný prenájom dekorácií na kľúč.',
    whyTitle: 'Prečo si zákazníčky vyberajú práve MagicRoom',
    whySubtitle: 'Rýchle online vybavenie, overená kvalita a férové ceny.',
    processTitle: 'Ako si u nás jednoducho nakúpiť a rezervovať inventár',
    processSubtitle: 'Jednoduchý proces online',
    processNote: 'Na objednávky a dopyty odpovedáme spravidla do 24 hodín. Ak je to súrne, zavolajte nám.',
    founderLabel: 'S kým sa v salóne stretnete',
    blogTitle: 'Blog a inšpirácie',
    blogSubtitle: 'Praktické rady a inšpirácie, ktoré vám ušetria čas pri plánovaní vašej oslavy.',
    blogCta: 'Viac na blogu',
    bookingTitle: 'Online objednávka a dopyt',
    bookingSubtitle: 'Svadobné skúšky šiat už neposkytujeme (online-only predaj). Využite formulár na objednanie spoločenských šiat alebo dopyt dekorácií.',
    bookingNote: 'Ak riešite konkrétny model šiat alebo termín prenájmu výzdoby, napíšte nám to rovno do správy.',
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
    reserve: 'Objednať',
    visitNote: 'Martin • prechod na online-only',
    replyNote: 'Ozveme sa vám do 24 hodín.',
    fittingNote: 'Prechádzame na online-only',
    fittingPrice: 'Bez osobných skúšok',
    logoSubtext: 'online boutique • Martin',
    footerDescription: 'Online boutique spoločenských šiat a požičovňa svadobných dekorácií v Martine. Prechádzame na online-only predaj bez osobných skúšok.',
    copyrightText: '© 2026 MagicRoom. Všetky práva vyhradené.',
    complaintPolicy: 'Reklamačný poriadok',
    directionsText: 'Ako sa k nám dostať',
  },
  services: {
    pageTitle: 'Služby a cenník — Spoločenské šaty online a dekorácie | MagicRoom Martin',
    pageDescription: 'Služby MagicRoom: predaj spoločenských šiat online, výzdoba na kľúč, prenájom inventára. Prechod na online-only.',
    heroBadge: 'Služby • cenník • online',
    heroTitle: 'Služby navrhnuté tak, aby ste nestrácali čas.',
    heroDescription: 'Každá karta nižšie je reálna časť ponuky MagicRoom — online predaj spoločenských šiat, prenájom inventára a svadobný servis.',
    bookingTitle: 'Objednávka šiat alebo dopyt na dekorácie',
    bookingDescription: 'Vyplňte pár detailov a ozveme sa vám s potvrdením objednávky alebo cenovou ponukou.',
  },
  contact: {
    pageTitle: 'Kontakt a objednávky — MagicRoom Martin (Online-Only)',
    pageDescription: 'Objednajte si spoločenské šaty online alebo dopytujte prenájom dekorácií v MagicRoom. Svadobné skúšky šiat už neposkytujeme.',
    heroBadge: 'Kontakt • objednávky • online-only',
    heroTitle: 'Ozvite sa tak, ako vám je to prirodzené.',
    heroDescription: 'Prechádzame na online-only: svadobné skúšky už nie sú možné, no radi vám pomôžeme s online kúpou spoločenských šiat alebo výzdobou cez WhatsApp, email či formulár.',
    visitNote: 'Martin • online objednávky & výdaj po dohode',
    replyNote: 'Odpoveď zvyčajne do 24 hodín',
    fittingNote: 'Online-only • skúšky šiat už neposkytujeme',
    bookingTitle: 'Objednajte si šaty online alebo pošlite dopyt',
    bookingDescription: 'Vyplňte formulár a pripravíme vám WhatsApp správu pre rýchle potvrdenie dostupnosti a odoslania.',
    nextStepsTitle: 'Najprv správa, potom potvrdenie objednávky.',
    nextStepsDesc1: 'Po odoslaní formulára sa otvorí pripravená WhatsApp správa. Môžete ju doplniť o veľkosť či adresu.',
    nextStepsDesc2: 'Keď nám správa príde, obratom potvrdíme dostupnosť a dohodneme platbu a doručenie.',
  },
  about: {
    pageTitle: 'O nás — MagicRoom Martin | Prechod na online-only',
    pageDescription: 'MagicRoom v Martine: predaj spoločenských šiat online a prenájom dekorácií pod vedením Natálie Ondrejkovej.',
    heroBadge: 'O nás • MagicRoom Martin',
    heroTitle: 'Za MagicRoom stojí Natália',
    heroDescription: 'MagicRoom vznikol ako osobný salón a dnes prechádza do flexibilného online priestoru: ponúkame starostlivo vybrané spoločenské šaty na zakúpenie online a prenájom štýlového inventára na svadby a oslavy.',
    storyTitle: 'S kým sa v salóne stretnete',
    storyQuote: 'Každá žena si zaslúži moment, keď sa cíti výnimočne.',
    storyText1: 'Ahoj, volám sa Natália. MagicRoom vznikol z lásky ku kráse a radosti z príprav výnimočných chvíľ.',
    storyText2: 'Dnes sa posúvame vpred — prechádzame na online predaj spoločenských šiat a požičovňu inventára, aby bol výber dostupný kedykoľvek a odkiaľkoľvek bez nutnosti osobnej skúšky.',
    principlesTitle: 'Princípy MagicRoom',
    principlesSubtitle: 'Na čom nám záleží',
    callFounder: 'Zavolať Natálii',
  },
  dresses: {
    pageTitle: 'Svadobné šaty — MagicRoom Martin (Už bez osobných skúšok)',
    pageDescription: 'Archív a ponuka modelov svadobných šiat. Upozornenie: osobné skúšky svadobných šiat už neposkytujeme, prechádzame na online predaj spoločenských šiat.',
    heroBadge: 'Svadobné šaty • Online-only oznam',
    heroTitle: 'Svadobné šaty — ukončenie osobných skúšok',
    heroDescription: 'Svadobné skúšky šiat už u nás nie sú možné — prechádzame na online-only. Aktuálne je možné zakúpiť si online len spoločenské šaty a rezervovať prenájom svadobného inventára.',
    statusAvailable: 'Dostupné',
    statusReserved: 'Rezervované',
    sizeLabel: 'Veľkosť',
    rentalLabel: 'Cena',
    bookFitting: 'Objednať online',
    consignmentTitle: 'Chcete u nás predať svoje šaty?',
    consignmentText: 'Vzhľadom na prechod na online-only je príjem nových komisných šiat obmedzený. V prípade záujmu nás kontaktujte online.',
  },
  formal: {
    pageTitle: 'Spoločenské šaty online — Elegantné šaty na plesy a oslavy | MagicRoom Martin',
    pageDescription: 'Zakúpte si spoločenské šaty online. Šaty na plesy, večierky a slávnostné príležitosti s doručením k vám.',
    heroBadge: 'Spoločenské šaty • Online predaj',
    heroTitle: 'Spoločenské šaty — nákup online',
    heroDescription: 'Vyberte si svoj model z pohodlia domova. Prechádzame na online-only: stačí si vybrať veľkosť, kliknúť na objednávku a šaty vám zašleme.',
  },
  consignment: {
    pageTitle: 'Komisný predaj — MagicRoom Martin',
    pageDescription: 'Informácie o komisnom predaji pri prechode na online model.',
    heroBadge: 'Komisný predaj • Martin',
    heroTitle: 'Komisný predaj',
    heroDescription: 'Informácie o predaji modelov. Pri prechode na online-only vybavujeme dopyty individuálne.',
  },
  decorations: {
    pageTitle: 'Svadobné dekorácie a výzdoba — Prenájom | MagicRoom Martin',
    pageDescription: 'Prenájom svadobných dekorácií. Výzdoba stolov, arky, kulisy a doplnky pre vašu svadbu.',
    heroBadge: 'Dekorácie • Martin',
    heroTitle: 'Dekorácie, ktoré vytvárajú atmosféru',
    heroDescription: 'Od ariek po stolové dekorácie — všetko potrebné pre váš svadobný deň na jednom mieste.',
    featuredTitle: 'Obľúbené kúsky',
    catalogTitle: 'Katalóg dekorácií',
    photoNote: 'Kliknutím na položky so symbolom obrázka zobrazíte fotografiu.',
    policiesTitle: 'Pravidlá prenájmu',
    customRequest: 'Potrebujete individuálnu cenovú ponuku alebo pomoc s inštaláciou?',
    contactCta: 'Napísať dopyt',
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
    reservation: 'Objednávka / Dopyt',
    name: 'Meno',
    namePlaceholder: 'Vaše meno',
    phone: 'Telefón alebo WhatsApp',
    phonePlaceholder: '+421 950 490 323',
    email: 'Email',
    emailPlaceholder: 'anna@email.sk (nepovinné)',
    service: 'Čo chcete riešiť?',
    serviceSelect: 'Vyberte si...',
    serviceOptions: [
      'Objednávka spoločenských šiat online',
      'Prenájom dekorácií a výzdoby',
      'Konzultácia k svadbe alebo harmonogramu',
      'Balík organizácie svadby',
      'Iné',
    ],
    date: 'Preferovaný dátum doručenia / akcie',
    time: 'Poznámka k času',
    timePlaceholder: 'napr. poobede',
    note: 'Poznámka / Kód a veľkosť šiat',
    notePlaceholder: 'Uveďte názov alebo kód spoločenských šiat, vašu veľkosť, adresu na doručenie alebo detaily k výzdobe.',
    priceInfo: 'DÔLEŽITÉ UPOZORNENIE: Svadobné skúšky šiat už nie sú možné, prechádzame na online-only predaj spoločenských šiat.',
    altContact: 'Ak nechcete formulár dokončovať hneď, môžete sa ozvať aj priamo cez',
    phoneLabel: 'telefón',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'email',
    submit: 'Odoslať online objednávku',
    submitting: 'Odosielame…',
    success: 'Objednávka odoslaná! Ozveme sa vám do 24 hodín s potvrdením.',
    successWhatsapp: 'Dokončiť objednávku cez WhatsApp',
    error: 'Niečo sa pokazilo. Skúste to znova.',
    networkError: 'Chyba pripojenia. Skúste to znova alebo nám zavolajte.',
    whatsappPre: 'Po odoslaní dostanete možnosť pokračovať aj cez WhatsApp.',
    whatsappLines: {
      intro: 'Dobrý deň, chcela by som si online objednať šaty / dopytovať výzdobu v MagicRoom.',
      name: 'Meno',
      phone: 'Telefón',
      email: 'Email',
      interest: 'Záujem',
      date: 'Termín',
      time: 'Čas',
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
    dresses: 'Wedding dresses',
    formal: 'Formal dresses',
    blog: 'Blog',
    consignment: 'Consignment',
    decorations: 'Decorations',
    gallery: 'Gallery',
    partners: 'Partners',
    contact: 'Contact',
    bookAppointment: 'Order online',
  },
  home: {
    heroBadge: 'Online boutique & occasion wear • Martin',
    heroTitle: 'Occasion wear online & event decor in Martin.',
    heroDescription: 'We are moving to online-only: wedding dress fittings are no longer available. You can purchase formal & evening dresses online and rent event decorations.',
    ctaBook: 'Shop formal dresses online',
    ctaServices: 'View occasion wear & prices',
    stat1Label: 'online purchase of formal dresses with delivery',
    stat2Label: 'gala, prom & Julebord dresses online',
    stat3Label: 'decor pick-up at the Detský sen building',
    servicesTitle: 'Our services for your big events',
    servicesSubtitle: 'We specialize in online formal dress orders and full decoration rentals.',
    whyTitle: 'Why customers choose MagicRoom online',
    whySubtitle: 'Easy online ordering, fair prices and fast delivery.',
    processTitle: 'How to order dresses and decor online',
    processSubtitle: 'Simple online process',
    processNote: 'We usually respond to orders and inquiries within 24 hours. If urgent, please call us.',
    founderLabel: 'Meet the person behind MagicRoom',
    blogTitle: 'Blog and inspiration',
    blogSubtitle: 'Practical tips and inspiration to save you time planning your celebration.',
    blogCta: 'More on blog',
    bookingTitle: 'Online order & inquiry',
    bookingSubtitle: 'Wedding dress fittings are no longer available (transitioning to online-only). Order formal dresses online or rent decorations.',
    bookingNote: 'If you have a specific dress model, size or decor date in mind, let us know in the message.',
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
    reserve: 'Order',
    visitNote: 'Martin • transition to online-only',
    replyNote: "We'll get back to you within 24 hours.",
    fittingNote: 'Transitioning to online-only',
    fittingPrice: 'No in-person fittings',
    logoSubtext: 'online boutique • Martin',
    footerDescription: 'Online boutique for formal dresses and event decoration rentals in Martin. Transitioning to online-only sales without bridal fittings.',
    copyrightText: '© 2026 MagicRoom. All rights reserved.',
    complaintPolicy: 'Complaint Policy',
    directionsText: 'How to get here',
  },
  services: {
    pageTitle: 'Occasion Wear Online & Decor Rentals | MagicRoom Martin',
    pageDescription: 'MagicRoom services: buy formal dresses online, event decorations, styling advice. Transition to online-only.',
    heroBadge: 'Services • prices • online-only',
    heroTitle: 'Occasion wear and event services online.',
    heroDescription: 'Order your prom, gala, or party dresses online with shipping, or rent curated party decorations.',
    bookingTitle: 'Order dresses or query about decorations',
    bookingDescription: 'Fill in a few details and we will get back to you with an order confirmation or quote.',
  },
  contact: {
    pageTitle: 'Contact & Online Orders — MagicRoom Martin (Online-Only)',
    pageDescription: 'Order formal dresses online or book decorations. In-person wedding dress fittings are no longer available.',
    heroBadge: 'Contact • online orders • Martin',
    heroTitle: 'Reach out to us online or via phone.',
    heroDescription: 'Notice: wedding dress fittings are discontinued as we move to online-only. You can purchase formal dresses directly online or rent event decor.',
    visitNote: 'Martin • online orders & pickup by arrangement',
    replyNote: 'Reply usually within 24 hours',
    fittingNote: 'Online-only • fittings discontinued',
    bookingTitle: 'Order online or send an inquiry',
    bookingDescription: 'Fill in your details and we will prepare a WhatsApp message to quickly confirm your order and shipping.',
    nextStepsTitle: 'First a message, then order confirmation.',
    nextStepsDesc1: 'After submitting the form, a prepared WhatsApp message will open with your order details.',
    nextStepsDesc2: 'We confirm availability, payment details, and dispatch your dress.',
  },
  about: {
    pageTitle: 'About — MagicRoom Martin | Online-Only Transition',
    pageDescription: 'MagicRoom in Martin: online formal dress boutique and decor rentals run by Natália Ondrejková.',
    heroBadge: 'About • MagicRoom Martin',
    heroTitle: 'Behind MagicRoom is Natália',
    heroDescription: 'MagicRoom started as a personal salon and is transitioning to an online-only boutique for formal dresses along with event inventory rental.',
    storyTitle: 'Meet the person behind the salon',
    storyQuote: 'Every woman deserves a moment where she feels special.',
    storyText1: 'Hi, my name is Natalia. MagicRoom was born out of passion for elegance and beautiful celebrations.',
    storyText2: 'We are moving forward into an online-only boutique, making our formal wear catalog available anywhere without the need for in-person fittings.',
    principlesTitle: 'MagicRoom Principles',
    principlesSubtitle: 'What matters to us',
    callFounder: 'Call Natália',
  },
  dresses: {
    pageTitle: 'Wedding Dresses — MagicRoom Martin (Fittings Discontinued)',
    pageDescription: 'Wedding dress archive. Notice: in-person wedding dress fittings are no longer available. We are transitioning to online-only formal dresses.',
    heroBadge: 'Wedding dresses • Notice',
    heroTitle: 'Wedding dress fittings discontinued',
    heroDescription: 'Wedding dress fittings are no longer available as we transition to online-only. Only formal and evening dresses are available for purchase online.',
    statusAvailable: 'Available',
    statusReserved: 'Reserved',
    sizeLabel: 'Size',
    rentalLabel: 'Price',
    bookFitting: 'Order online',
    consignmentTitle: 'Want to sell your dress?',
    consignmentText: 'Due to our transition to online-only, dress consignment intake is limited. Contact us for inquiries.',
  },
  formal: {
    pageTitle: 'Formal & Evening Dresses Online | MagicRoom Martin',
    pageDescription: 'Purchase formal and evening dresses online. Gowns for balls, proms, and celebrations shipped directly to you.',
    heroBadge: 'Formal dresses • Online shop',
    heroTitle: 'Formal & evening dresses online',
    heroDescription: 'Browse and order from home. We are online-only: select your size, order via WhatsApp or form, and get your dress delivered.',
  },
  consignment: {
    pageTitle: 'Consignment — MagicRoom Martin',
    pageDescription: 'Information about dress consignment during our transition to online-only.',
    heroBadge: 'Consignment • Martin',
    heroTitle: 'Consignment sale',
    heroDescription: 'Consignment details. During our move to online-only, inquiries are handled individually.',
  },
  decorations: {
    pageTitle: 'Wedding Decorations & Rentals | MagicRoom Martin',
    pageDescription: 'Rent wedding decorations. Table centerpieces, arches, backdrops and accessories for your wedding.',
    heroBadge: 'Decorations • Martin',
    heroTitle: 'Decorations that create atmosphere',
    heroDescription: 'From arches to table centerpieces — everything you need for your wedding day in one place.',
    featuredTitle: 'Featured items',
    catalogTitle: 'Decoration catalog',
    photoNote: 'Click on items with the image symbol to view the photo.',
    policiesTitle: 'Rental rules',
    customRequest: 'Need a custom quote or help with installation?',
    contactCta: 'Inquire now',
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
    reservation: 'Order / Inquiry',
    name: 'Name',
    namePlaceholder: 'Your name',
    phone: 'Phone or WhatsApp',
    phonePlaceholder: '+421 950 490 323',
    email: 'Email',
    emailPlaceholder: 'anna@email.sk (optional)',
    service: 'What would you like to solve?',
    serviceSelect: 'Choose...',
    serviceOptions: [
      'Formal dress online order',
      'Decoration rental',
      'Wedding consultation or timeline',
      'Wedding planning package',
      'Other',
    ],
    date: 'Preferred delivery / event date',
    time: 'Time note',
    timePlaceholder: 'e.g. afternoon',
    note: 'Note / Dress model & size',
    notePlaceholder: 'Please enter the dress name or code, required size, delivery address, or decoration requirements.',
    priceInfo: 'NOTICE: Wedding dress fittings are no longer available. We are transitioning to online-only formal dress sales.',
    altContact: 'If you don\'t want to complete the form right now, you can also reach us directly via',
    phoneLabel: 'phone',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'email',
    submit: 'Submit online order',
    submitting: 'Sending...',
    success: 'Order sent! We will get back to you within 24 hours to confirm.',
    successWhatsapp: 'Finish order on WhatsApp',
    error: 'Something went wrong. Try again.',
    networkError: 'Connection error. Try again or call us.',
    whatsappPre: 'After sending, you\'ll get the option to continue on WhatsApp.',
    whatsappLines: {
      intro: 'Hello, I would like to order a dress online or query decorations at MagicRoom.',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      interest: 'Interest',
      date: 'Date',
      time: 'Time',
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

import type { CountryPlugData } from '@/types';

const montenegro: CountryPlugData = {
  slug: 'montenegro-electric-plug-types-will-you-need-an-adapter',
  name: 'Montenegro',
  demonym: 'Montenegrin',
  continent: 'Europe',
  region: 'Balkans',
  voltage: 230,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-c',
      name: 'Type C',
      subtitle: 'Europlug',
      pins: 2,
      pinShape: 'round',
      pinDiameter: 4.0,
      pinSpacing: 19,
      ratedAmps: 2.5,
      grounded: false,
      hasGroundClips: false,
      pinRadius: 0.063,
      bodyWidth: 1.18,
      bodyHeight: 0.72,
      bodyCornerRadius: 0.2,
      noseRadius: 0.42,
      recessRadius: 0.92,
      faceplateSize: 2.7,
    },
    {
      id: 'type-f',
      name: 'Type F',
      subtitle: 'Schuko',
      pins: 2,
      pinShape: 'round',
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: true,
      pinRadius: 0.075,
      bodyWidth: 1.3,
      bodyHeight: 1.3,
      bodyCornerRadius: 0.25,
      noseRadius: 0.52,
      recessRadius: 1.05,
      faceplateSize: 2.9,
    },
  ],
  quirks: [
    'Montenegro is a popular Adriatic coast destination (Budva, Kotor, Herceg Novi) that uses the same plug types as neighboring Croatia and Serbia — making cross-border travel seamless for electronics.',
  ],
  travelContext:
    'Montenegro\'s stunning Adriatic coastline and the Bay of Kotor draw increasing numbers of tourists, particularly from other European countries. The country uses the standard European plug system, identical to its Balkan neighbors. Travelers road-tripping along the coast from Dubrovnik to Budva will not need to change adapters.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs will not fit Montenegrin outlets. Bring a plug adapter. Voltage converters are usually unnecessary for modern dual-voltage electronics.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British plugs need an adapter for Montenegro\'s Type C/F sockets. Voltage is the same 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs work everywhere in Montenegro. No adapter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter. Voltage matches at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Tehnomax',
      type: 'electronics',
      city: 'Podgorica',
      priceRange: '€4–€10',
      note: 'Montenegro\'s main electronics chain with stores in Podgorica and coastal towns.',
    },
    {
      name: 'Voli',
      type: 'supermarket',
      city: 'Budva',
      priceRange: '€3–€8',
      note: 'Major Montenegrin supermarket chain; larger locations stock basic adapters.',
    },
    {
      name: 'Aroma',
      type: 'convenience',
      city: 'Kotor',
      priceRange: '€4–€8',
      note: 'Convenience chain found in tourist areas along the coast.',
    },
  ],
  airportName: 'Podgorica Airport',
  airportCode: 'TGD',
  neighbors: [
    {
      name: 'Croatia',
      slug: 'croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Bosnia And Herzegovina',
      slug: 'bosnia-and-herzegovina-electric-plug-types-is-adapter-needed',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Serbia',
      slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Kosovo',
      slug: 'kosovo-electric-plug-types-will-you-need-an-adapter-in-pristina',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Albania',
      slug: 'albanian-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Coastal resort hotels in Budva and Kotor tend to be well-equipped, with newer properties offering USB ports. Boutique hotels in Kotor\'s Old Town may have older wiring in historic buildings but use standard European outlets. Mountain lodges near Durmitor National Park are simpler but functionally fine for charging.',
  faqs: [
    {
      question: 'I\'m driving from Dubrovnik to Montenegro — do I need a different adapter?',
      answer:
        'No. Croatia and Montenegro both use Types C and F at 230V/50Hz. Your chargers and adapters work identically in both countries.',
    },
    {
      question: 'Are there two airports in Montenegro?',
      answer:
        'Yes. Podgorica (TGD) serves the capital, and Tivat (TIV) is the more convenient airport for the coast — just minutes from Kotor and Budva. Both airports have limited shopping, so buy your adapter beforehand.',
    },
    {
      question: 'Is the power reliable along Montenegro\'s coast?',
      answer:
        'Yes, power is reliable in coastal tourist areas and cities. Remote mountain areas may occasionally experience brief interruptions, but this is rare.',
    },
    {
      question: 'Can I use one adapter for a Balkans road trip?',
      answer:
        'Yes. Montenegro, Croatia, Serbia, Bosnia, Kosovo, and Albania all use Types C and F at 230V/50Hz. One adapter covers the entire Western Balkans region.',
    },
  ],
  metaTitle: 'Montenegro Power Plugs — Types C & F | Adapter Guide for Kotor & Budva',
  metaDescription:
    'Montenegro uses Type C and Type F plugs at 230V/50Hz. Same as Croatia and Serbia. US and UK visitors need an adapter — here\'s where to buy one.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Croatia', slug: 'croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip' },
    { name: 'Serbia', slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade' },
    { name: 'Albania', slug: 'albanian-plug-types' },
    { name: 'Bosnia And Herzegovina', slug: 'bosnia-and-herzegovina-electric-plug-types-is-adapter-needed' },
  ],
};

export default montenegro;

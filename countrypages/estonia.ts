import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'estonia-electric-plug-types-will-you-need-an-adapter-in-estonia',
  name: 'Estonia',
  demonym: 'Estonian',
  continent: 'Europe',
  region: 'Baltic States',
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
    'Estonia is one of the most digitally advanced countries in Europe. Many Tallinn hotels have USB ports built into desks and nightstands, reducing the need for adapters for phone and tablet charging.',
  ],
  travelContext:
    'Estonia draws visitors to Tallinn\'s medieval Old Town and its thriving tech scene. The country uses the same standard European plug system as Germany, Finland, and the other Baltic states. Visitors arriving by ferry from Helsinki will find identical outlets on both sides of the Gulf of Finland.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs will not fit Estonian round-pin outlets. An adapter is required. Modern electronics are typically dual-voltage (100–240V), so a converter is usually unnecessary.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs do not fit Estonian sockets. Pack a UK-to-Europe adapter. Voltage matches at 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs work without any adapter. Type C fits directly, and Type E/F plugs are compatible with Estonia\'s Type F sockets.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are not compatible. Bring an adapter; voltage is the same 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Euronics',
      type: 'electronics',
      city: 'Tallinn',
      priceRange: '€5–€12',
      note: 'Electronics chain with stores in Tallinn shopping centers; carries universal travel adapters.',
    },
    {
      name: 'Photopoint',
      type: 'electronics',
      city: 'Tallinn',
      priceRange: '€5–€15',
      note: 'Tech and electronics retailer with locations in major malls.',
    },
    {
      name: 'Prisma',
      type: 'supermarket',
      city: 'Tallinn',
      priceRange: '€4–€10',
      note: 'Finnish-owned hypermarket with an electronics section that stocks basic adapters.',
    },
  ],
  airportName: 'Tallinn Lennart Meri Airport',
  airportCode: 'TLL',
  neighbors: [
    {
      name: 'Latvia',
      slug: 'latvia-electric-plug-type-will-you-need-an-adapter-in-riga',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Finland',
      slug: 'finland-electric-plug-type-will-you-need-an-adapter-in-helsinki',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Same plug types — the Tallinn–Helsinki ferry route requires no adapter changes.',
    },
    {
      name: 'Russia',
      slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'common',
  accommodationNote:
    'Tallinn\'s modern hotels frequently feature built-in USB-A and USB-C charging ports at the bedside. Even mid-range accommodations tend to be well-equipped given Estonia\'s tech-forward culture. Budget hostels use standard European outlets throughout.',
  faqs: [
    {
      question: 'I\'m taking the ferry from Helsinki — do I need a different adapter for Estonia?',
      answer:
        'No. Finland and Estonia both use Types C and F at 230V/50Hz. Your plugs and chargers will work identically in both countries.',
    },
    {
      question: 'Are USB charging ports common in Estonian hotels?',
      answer:
        'Yes, especially in Tallinn. Estonia is one of Europe\'s most digitally connected countries, and many hotels — even mid-range ones — have USB ports built into desks, nightstands, or bedside panels. You may not even need an adapter for phones and tablets.',
    },
    {
      question: 'Can I use the same adapter across all three Baltic states?',
      answer:
        'Absolutely. Estonia, Latvia, and Lithuania all use Types C and F at 230V/50Hz. One adapter covers your entire Baltic trip.',
    },
    {
      question: 'Do I need a voltage converter for US electronics in Estonia?',
      answer:
        'Probably not. Most modern US laptops, phone chargers, and camera batteries are dual-voltage (100–240V). Check the label on your charger — if it says 100–240V, you just need a plug adapter, not a converter.',
    },
    {
      question: 'Where is the cheapest place to buy an adapter in Tallinn?',
      answer:
        'Prisma hypermarkets carry basic European adapters for around €4–€5. For a universal travel adapter, try Euronics or Photopoint in one of the city\'s shopping centers.',
    },
  ],
  metaTitle: 'Estonia Power Plugs — Types C & F | Adapter Guide for Tallinn',
  metaDescription:
    'Estonia uses Type C and Type F plugs at 230V/50Hz. US and UK visitors need an adapter. Learn what to bring and where to buy adapters in Tallinn.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Latvia', slug: 'latvia-electric-plug-type-will-you-need-an-adapter-in-riga' },
    { name: 'Lithuania', slug: 'lithuania-electric-plug-types-will-you-need-an-adapter-in-vilnius-2' },
    { name: 'Finland', slug: 'finland-electric-plug-type-will-you-need-an-adapter-in-helsinki' },
  ],
};

export default data;

import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'malta-electric-plug-types-will-you-need-an-adapter-for-valletta',
  name: 'Malta',
  demonym: 'Maltese',
  continent: 'Europe',
  region: 'Mediterranean',
  voltage: 230,
  frequency: 50,
  complexityTier: 'moderate',
  plugTypes: [
    {
      id: 'type-g',
      name: 'Type G',
      subtitle: 'British',
      pins: 3,
      pinShape: 'rectangular',
      pinDiameter: 6.35,
      pinSpacing: 22.2,
      ratedAmps: 13,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.6,
      bodyHeight: 1.2,
      bodyCornerRadius: 0.2,
      noseRadius: 0.55,
      recessRadius: 1.15,
      faceplateSize: 3.1,
    },
  ],
  quirks: [
    'Malta is another former British colony using Type G — the same large three-pin plug as the UK. Many visitors arrive from nearby Italy by ferry or short flight and are caught off guard when their European plugs don\'t fit.',
  ],
  travelContext:
    'Malta is a compact Mediterranean archipelago popular with British, Italian, and German tourists. British visitors enjoy plug compatibility, but everyone else needs a UK-style adapter. The islands are small enough that you can buy an adapter in Valletta within minutes of realizing you need one.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs will not fit Malta\'s Type G rectangular sockets. Bring an adapter. Most modern chargers handle 230V automatically.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Malta uses the same Type G outlets and 230V as the UK. No adapter or converter needed — plug in and go.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit Maltese Type G outlets. This is a very common issue for Italian visitors arriving by ferry. Pack an EU-to-UK adapter.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter for Type G sockets. Voltage matches at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Scan Malta',
      type: 'electronics',
      city: 'Valletta',
      priceRange: '€5–€12',
      note: 'Malta\'s main electronics retailer with branches across the island.',
    },
    {
      name: 'Forestals',
      type: 'electronics',
      city: 'Valletta',
      priceRange: '€5–€10',
      note: 'Long-established Maltese electronics and home store.',
    },
    {
      name: 'Tower Supermarket',
      type: 'supermarket',
      city: 'Sliema',
      priceRange: '€4–€8',
      note: 'Well-stocked supermarket that carries basic adapters and travel accessories.',
    },
  ],
  airportName: 'Malta International Airport',
  airportCode: 'MLA',
  neighbors: [
    {
      name: 'Italy',
      slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters',
      plugTypes: ['C', 'F', 'L'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Italy uses Types C/F/L while Malta uses Type G. Travelers between Sicily and Malta need to switch adapters.',
    },
    {
      name: 'Tunisia',
      slug: 'tunisia-electric-plug-types-which-adapter-will-you-need-for-tunisia',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Tunisia uses Types C/E — incompatible with Malta\'s Type G.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Most Maltese hotels anticipate the adapter issue and keep a supply at reception. Higher-end properties in Valletta and St. Julian\'s often have universal outlets or USB ports built in. Gozo accommodations are generally well-equipped too. Airbnb rentals may not provide adapters, so bring your own.',
  faqs: [
    {
      question: 'Why does Malta use British-style plugs?',
      answer:
        'Malta was a British colony until 1964, and the electrical system was built to British specifications. The country has continued using Type G outlets ever since.',
    },
    {
      question: 'I\'m taking the ferry from Sicily — will my Italian plug work in Malta?',
      answer:
        'No. Italy uses Types C, F, and L (round pins), while Malta uses Type G (rectangular pins). You will need an adapter as soon as you arrive. The ferry terminal area in Valletta has shops nearby.',
    },
    {
      question: 'Do Gozo hotels provide adapters?',
      answer:
        'Most Gozo hotels and guesthouses do provide adapters, though availability can be limited during busy periods. It is safest to bring your own, especially if you are staying in a vacation rental.',
    },
    {
      question: 'Can UK travelers use their devices in Malta without changes?',
      answer:
        'Yes. Malta and the UK share the same Type G outlets and 230V/50Hz power. British visitors can use all appliances directly.',
    },
    {
      question: 'Where can I buy an adapter quickly in Malta?',
      answer:
        'Scan Malta and Forestals have stores in Valletta and nearby towns. For a fast option, larger supermarkets and even some pharmacies carry basic UK adapters. Malta is small — nothing is more than a short drive away.',
    },
  ],
  metaTitle: 'Malta Power Plugs — Type G (British) | Do You Need an Adapter?',
  metaDescription:
    'Malta uses British Type G plugs at 230V/50Hz. UK visitors need no adapter, but European, US, and Australian travelers do. Here\'s what to bring.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'Cyprus', slug: 'cyprus-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
  ],
};

export default data;

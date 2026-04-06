import type { CountryPlugData } from '@/types';

const moldova: CountryPlugData = {
  slug: 'moldova-electric-plug-types-will-you-need-an-adapter-for-moldova',
  name: 'Moldova',
  demonym: 'Moldovan',
  continent: 'Europe',
  region: 'Eastern Europe',
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
  travelContext:
    'Moldova is one of Europe\'s least-visited countries, attracting travelers interested in wine tourism, Soviet history, and off-the-beaten-path experiences. The electrical system is standard European, identical to neighboring Romania. Chișinău is the main point of entry, and the city is compact and walkable.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs do not fit Moldovan round-pin sockets. Pack an adapter before departure — options in Moldova can be limited.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British plugs require an adapter. Voltage is the same 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs work in Moldova. No adapter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Darwin',
      type: 'electronics',
      city: 'Chișinău',
      priceRange: '€3–€10',
      note: 'Electronics retailer in Chișinău with a selection of adapters and accessories.',
    },
    {
      name: 'Ultra',
      type: 'electronics',
      city: 'Chișinău',
      priceRange: '€3–€10',
      note: 'Tech store chain in Moldovan cities.',
    },
    {
      name: 'Nr1',
      type: 'supermarket',
      city: 'Chișinău',
      priceRange: '€2–€6',
      note: 'Moldovan supermarket chain; some locations carry basic electronics items.',
    },
  ],
  airportName: 'Chișinău International Airport',
  airportCode: 'KIV',
  neighbors: [
    {
      name: 'Romania',
      slug: 'romania-electric-plug-types-will-you-need-an-adapter-in-romania',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Ukraine',
      slug: 'ukraine-electric-plug-types-what-kind-of-adapter-do-you-need',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Chișinău has a growing hospitality scene with modern hotels and boutique guesthouses. Outlets are standard European throughout. Wineries in the countryside that offer guest rooms use the same sockets but may have fewer outlets available. USB ports are uncommon — bring your own charging setup.',
  faqs: [
    {
      question: 'I\'m combining Moldova with Romania — do I need a different adapter?',
      answer:
        'No. Romania and Moldova both use Types C and F at 230V/50Hz. One adapter covers both countries.',
    },
    {
      question: 'Is electricity reliable in Moldova?',
      answer:
        'Yes, in Chișinău and major towns. Rural areas may experience occasional interruptions. A power bank is recommended if you are visiting wineries or villages in the Moldovan countryside.',
    },
    {
      question: 'Can I visit Transnistria with the same adapter?',
      answer:
        'Yes. The breakaway region of Transnistria uses the same Types C and F outlets as the rest of Moldova. No adapter change needed when crossing.',
    },
    {
      question: 'Where should I buy an adapter in Chișinău?',
      answer:
        'Darwin and Ultra electronics stores in Chișinău\'s shopping centers are your best bet. The Nr1 supermarket chain may also carry basic adapters at larger locations.',
    },
  ],
  metaTitle: 'Moldova Power Plugs — Types C & F | Do You Need an Adapter?',
  metaDescription:
    'Moldova uses Type C and Type F plugs at 230V/50Hz. Same system as Romania. US and UK travelers need an adapter — here\'s what to know.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Romania', slug: 'romania-electric-plug-types-will-you-need-an-adapter-in-romania' },
    { name: 'Ukraine', slug: 'ukraine-electric-plug-types-what-kind-of-adapter-do-you-need' },
  ],
};

export default moldova;

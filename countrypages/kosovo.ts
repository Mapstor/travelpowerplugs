import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'kosovo-electric-plug-types-will-you-need-an-adapter-in-pristina',
  name: 'Kosovo',
  demonym: 'Kosovar',
  continent: 'Europe',
  region: 'Southeastern Europe',
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
    'Kosovo uses the standard continental European electrical system. Pristina\'s hotels and cafés have reliable power and modern outlets. The country is compact and infrastructure in tourist areas like Prizren and Peja is solid.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs won\'t fit. Kosovo runs at 230V so non-dual-voltage US devices also need a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK plugs need a Type G to C/F adapter. Voltage is the same.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European plugs work directly throughout Kosovo.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    { name: 'Elkos Group', type: 'electronics', city: 'Pristina', priceRange: '€3–10', note: 'Retail chain with electronics and household goods' },
    { name: 'Albi Mall', type: 'electronics', city: 'Pristina', priceRange: '€3–12', note: 'Major shopping mall with electronics shops' },
    { name: 'Meridian', type: 'electronics', city: 'Pristina', priceRange: '€4–10', note: 'Electronics retailer' },
  ],
  airportName: 'Pristina Adem Jashari International Airport',
  airportCode: 'PRN',
  neighbors: [
    { name: 'Serbia', slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'identical' },
    { name: 'Albania', slug: 'albanian-plug-types', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'identical' },
    { name: 'North Macedonia', slug: 'north-macedonia-electric-plug-types-will-you-need-an-adapter', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'identical' },
    { name: 'Montenegro', slug: 'montenegro-electric-plug-types-will-you-need-an-adapter', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'identical' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Pristina and Prizren have standard European outlets. USB ports at bedside tables are uncommon. Budget guesthouses may have few outlets — a travel power strip helps.',
  faqs: [
    {
      question: 'Are Kosovo\'s plugs the same as the rest of the Balkans?',
      answer:
        'Yes. Kosovo, Serbia, Albania, North Macedonia, and Montenegro all use Type C and F at 230V. One adapter covers the whole region if you\'re traveling from outside Europe.',
    },
    {
      question: 'Is there a reliable place to buy an adapter in Pristina?',
      answer:
        'Albi Mall and Elkos stores in Pristina stock travel adapters. Prices are low — typically €3–10. The airport has very limited shopping.',
    },
    {
      question: 'Are power outages common in Kosovo?',
      answer:
        'Kosovo\'s grid has improved significantly in recent years. Occasional outages can occur, particularly in summer heat, but they\'re brief and unlikely to affect travelers in Pristina or major towns.',
    },
  ],
  metaTitle: 'Kosovo Power Plugs — Types C & F | Adapter Guide for Pristina',
  metaDescription:
    'Kosovo uses Type C and F plugs at 230V/50Hz — standard European system. US, UK, and Australian travelers need an adapter. Tips for Pristina, local stores, and Balkan travel.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Albania', slug: 'albanian-plug-types' },
    { name: 'Serbia', slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade' },
    { name: 'North Macedonia', slug: 'north-macedonia-electric-plug-types-will-you-need-an-adapter' },
  ],
};

export default data;

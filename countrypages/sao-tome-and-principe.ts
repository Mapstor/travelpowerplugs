import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'sao-tome-and-principe-electric-plug-types-which-adapter-will-you-need',
  name: 'Sao Tome And Principe',
  demonym: 'São Toméan',
  continent: 'Africa',
  region: 'Central Africa',
  voltage: 220,
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
    'São Tomé and Príncipe is a tiny two-island nation in the Gulf of Guinea. Tourism infrastructure is growing but still limited. Bring all adapters and electronics you need — local shopping options are minimal.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs are incompatible with Type C/F outlets. Voltage is 220V, so non-dual-voltage devices need a converter.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit. An adapter is required. Voltage is compatible.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European plugs fit directly. No adapter or converter needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter. Voltage is close enough at 220V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Hotel reception',
      type: 'hotel',
      note: 'Resort-style hotels may lend or sell adapters. This is your best bet locally.',
    },
    {
      name: 'São Tomé town markets',
      type: 'convenience',
      city: 'São Tomé',
      priceRange: '$3–8',
      note: 'Very limited availability. Do not count on finding an adapter here.',
    },
  ],
  airportName: 'São Tomé International Airport',
  airportCode: 'TMS',
  neighbors: [
    {
      name: 'Gabon',
      slug: 'gabon-electric-plug-types-will-you-need-an-adapter-libreville',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote: 'Gabon uses Types C and E. A European adapter works in both countries.',
    },
    {
      name: 'Equatorial Guinea',
      slug: 'equatorial-guinea-electric-plug-types-will-you-need-to-take-an-adapter-with-you',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote: 'Same European-style system. A Type C adapter works in both.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Eco-lodges and boutique hotels are the main accommodation types. Facilities are charming but basic. Come fully prepared with adapters and a portable battery — buying electronics locally is nearly impossible.',
  faqs: [
    {
      question: 'What plug types does São Tomé and Príncipe use?',
      answer:
        'The country uses European Type C and Type F (Schuko) outlets at 220V/50Hz.',
    },
    {
      question: 'Can I buy an adapter in São Tomé?',
      answer:
        'Local shopping options are extremely limited. Bring everything you need from abroad. Some hotel receptions in resort areas may have adapters to lend.',
    },
    {
      question: 'Is the power supply reliable?',
      answer:
        'Power can be intermittent, particularly on Príncipe island. Eco-lodges may rely on generators. A portable power bank is highly recommended.',
    },
  ],
  metaTitle: 'São Tomé and Príncipe Power Plugs — Type C & F, 220V, Adapter Guide',
  metaDescription:
    'São Tomé and Príncipe uses European Type C and F plugs at 220V/50Hz. Find out what adapter you need and why you should bring it from home.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Gabon', slug: 'gabon-electric-plug-types-will-you-need-an-adapter-libreville' },
    { name: 'Equatorial Guinea', slug: 'equatorial-guinea-electric-plug-types-will-you-need-to-take-an-adapter-with-you' },
  ],
};

export default data;

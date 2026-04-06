import type { CountryPlugData } from '@/types';

const lesotho: CountryPlugData = {
  slug: 'lesotho-electric-plug-types-which-adapter-do-you-need-for-lesotho',
  name: 'Lesotho',
  demonym: 'Basotho',
  continent: 'Africa',
  region: 'Southern Africa',
  voltage: 220,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-m',
      name: 'Type M',
      subtitle: 'South African (large)',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 7.06,
      pinSpacing: 25.4,
      ratedAmps: 15,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.11,
      bodyWidth: 1.5,
      bodyHeight: 1.3,
      bodyCornerRadius: 0.2,
      noseRadius: 0.55,
      recessRadius: 1.15,
      faceplateSize: 3.1,
    },
  ],
  quirks: [
    'Lesotho is entirely surrounded by South Africa and uses the same Type M outlets — one adapter covers both countries.',
  ],
  travelContext:
    'Lesotho is a mountainous kingdom entirely enclosed by South Africa. All visitors enter via South Africa, and the electrical system is the same. Highland lodges in remote areas may rely on generator power, so a portable battery is worth packing.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US-style flat-prong plugs do not fit Type M sockets. Voltage is 220V, so non-dual-voltage devices also need a converter.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit Type M outlets. You need an adapter, but voltage is compatible.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs are not compatible with the large Type M sockets. An adapter is required. Voltage is fine.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter. Voltage is compatible at 220–230V.',
    },
    {
      origin: 'South Africa',
      originPlugTypes: 'M',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Identical plug system. No adapter needed.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Shoprite',
      type: 'supermarket',
      city: 'Maseru',
      priceRange: '$4–10',
      note: 'May have basic travel adapters in the household section.',
    },
    {
      name: 'Pick n Pay',
      type: 'supermarket',
      city: 'Maseru',
      priceRange: '$5–12',
      note: 'South African chain with occasional adapter stock.',
    },
    {
      name: 'Electronics shops in Maseru',
      type: 'electronics',
      city: 'Maseru',
      priceRange: '$3–10',
      note: 'Limited selection. Better to buy your adapter in South Africa before crossing the border.',
    },
  ],
  airportName: 'Moshoeshoe I International Airport',
  airportCode: 'MSU',
  neighbors: [
    {
      name: 'South Africa',
      slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa',
      plugTypes: ['C', 'D', 'M', 'N'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Lesotho is entirely surrounded by South Africa and uses the same Type M system.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Maseru follow the South African standard. Mountain lodges in the highlands may run on generators with limited outlet availability. Bring a portable battery pack if heading into remote areas.',
  faqs: [
    {
      question: 'What plug type does Lesotho use?',
      answer:
        'Lesotho uses Type M plugs — the same large three-round-pin outlets found in South Africa. If you are traveling from South Africa, you already have the right adapter.',
    },
    {
      question: 'Do I need a different adapter for Lesotho than South Africa?',
      answer:
        'No. The electrical system is identical. One Type M adapter works in both countries.',
    },
    {
      question: 'Is power reliable in the Lesotho highlands?',
      answer:
        'Mountain lodges in remote highland areas may use generator power, which can be intermittent. A portable battery pack is highly recommended for trekking or staying in rural areas.',
    },
  ],
  metaTitle: 'Lesotho Power Plugs — Type M Outlets, 220V, Adapter Guide',
  metaDescription:
    'Lesotho uses South African Type M plugs at 220V/50Hz. Find out if you need an adapter, where to buy one in Maseru, and what to expect in the highlands.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'South Africa', slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa' },
    { name: 'Eswatini', slug: 'eswatini-electric-plug-types-will-you-need-an-adapter-in-mbabane' },
  ],
};

export default lesotho;

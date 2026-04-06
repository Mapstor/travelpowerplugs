import { CountryPlugData } from '../types';

const guinea: CountryPlugData = {
  slug: 'guinea-electric-plug-types-will-you-need-an-adapter-in-conakry',
  name: 'Guinea',
  demonym: 'Guinean',
  continent: 'Africa',
  region: 'West Africa',
  voltage: 220,
  frequency: 50,
  complexityTier: 'moderate',
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
    {
      id: 'type-k',
      name: 'Type K',
      subtitle: 'Danish',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
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
    'Guinea has an unusual mix of European C/F and Danish-style Type K outlets. Conakry has notoriously unreliable power — extended outages lasting many hours are the norm rather than the exception.',
  ],
  travelContext:
    'Guinea presents one of West Africa\'s more challenging electrical situations. The mix of Type C, F, and K outlets means outlet types can vary within a single building. Conakry\'s power grid is severely strained, with residents often experiencing more hours without power than with it. Portable power is a practical necessity.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs do not fit any Guinean outlet type. A converter is needed for non-dual-voltage devices at 220V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type G plugs need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C plugs fit all Guinean outlet types. Type F also fits directly. No conversion needed.',
    },
    {
      origin: 'Denmark',
      originPlugTypes: 'C, K',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Danish Type K plugs fit the Type K outlets found in Guinea. Type C fits everywhere.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs need an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Madina Market',
      type: 'electronics',
      city: 'Conakry',
      priceRange: '$2–$8',
      note: 'Conakry\'s main market has electronics shops where basic adapters can be found, though selection varies.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Conakry',
      note: 'Some international hotels in Conakry may have adapters available.',
    },
  ],
  airportName: 'Conakry Ahmed Sékou Touré International Airport',
  airportCode: 'CKY',
  neighbors: [
    {
      name: 'Senegal',
      slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar',
      plugTypes: ['C', 'D', 'E', 'K'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Senegal also uses Type K alongside European types.',
    },
    {
      name: 'Mali',
      slug: 'mali-electric-plug-types-which-adapter-will-you-need-in-mali',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'compatible',
    },
    {
      name: 'Ivory Coast',
      slug: 'cote-divoire-electric-plug-type-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'compatible',
    },
    {
      name: 'Liberia',
      slug: 'liberia-electric-plug-types-will-you-need-an-adapter-in-liberia',
      plugTypes: ['A', 'B', 'C', 'F'],
      voltage: 120,
      sameAsSubject: 'partially',
      adapterNote: 'Liberia has a unique dual-voltage system (120V/220V). Type C is shared.',
    },
    {
      name: 'Sierra Leone',
      slug: 'sierra-leone-electric-plug-types-which-adapter-will-you-need-with-you',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Sierra Leone uses British-style plugs — a different adapter is needed.',
    },
    {
      name: 'Guinea-Bissau',
      slug: 'guinea-bissau-electric-plug-type-will-you-need-an-adapter-in-bissau',
      plugTypes: ['C'],
      voltage: 220,
      sameAsSubject: 'compatible',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Conakry range from basic to moderate quality. Generator backup is common at mid-range and higher hotels, though fuel shortages can affect generator availability. Power outages are a daily occurrence. Always bring a portable battery pack and flashlight.',
  faqs: [
    {
      question: 'Why does Guinea have Danish-style Type K outlets?',
      answer:
        'Guinea\'s eclectic mix of outlet types reflects various infrastructure projects and equipment sourced from different countries over the decades. Danish-style Type K outlets coexist with more common European C and F types. A Type C plug will fit all of them.',
    },
    {
      question: 'How bad are power outages in Conakry?',
      answer:
        'Power outages in Conakry are severe. It is common to experience more hours without electricity than with it during a typical day. Most businesses and better hotels rely on private generators. A portable battery pack is essential.',
    },
    {
      question: 'What type of adapter covers all outlets in Guinea?',
      answer:
        'A standard European Type C (Europlug) will physically fit into Type C, F, and K outlets — it is the most versatile single adapter for Guinea. For grounded connections, a Type F plug also works well.',
    },
  ],
  metaTitle: 'Guinea Power Plugs — Types C, F & K | Adapter Guide for Conakry',
  metaDescription:
    'Guinea uses Type C, F, and K plugs at 220V/50Hz. Power outages in Conakry are severe — learn what adapter and backup power to bring.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Senegal', slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar' },
    { name: 'Sierra Leone', slug: 'sierra-leone-electric-plug-types-which-adapter-will-you-need-with-you' },
    { name: 'Guinea-Bissau', slug: 'guinea-bissau-electric-plug-type-will-you-need-an-adapter-in-bissau' },
  ],
};

export default guinea;

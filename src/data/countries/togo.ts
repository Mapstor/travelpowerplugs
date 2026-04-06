import { CountryPlugData } from '@/types';

const togo: CountryPlugData = {
  slug: 'togo-electric-plug-types-which-adapter-will-you-need-for-togo',
  name: 'Togo',
  demonym: 'Togolese',
  continent: 'Africa',
  region: 'West Africa',
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
      id: 'type-e',
      name: 'Type E',
      subtitle: 'French',
      pins: 2,
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
  travelContext:
    'Togo uses the French C/E electrical standard, making it electrically identical to its francophone neighbors. Lomé, the coastal capital, has more consistent power than the interior. The country is narrow and often visited as part of a multi-country West African trip alongside Benin, Ghana, and Burkina Faso.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-pin plugs will not fit. A converter is needed for non-dual-voltage devices at 220V.',
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
        'European plugs fit directly. Same French standard as neighboring countries.',
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
      name: 'Lomé Grand Marché',
      type: 'electronics',
      city: 'Lomé',
      priceRange: '$2–$8',
      note: 'The central market in Lomé has electronics vendors where basic adapters can be found.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Lomé',
      note: 'Some hotels along the coast in Lomé may have adapters for guests.',
    },
  ],
  airportName: 'Lomé Gnassingbé Eyadéma International Airport',
  airportCode: 'LFW',
  neighbors: [
    {
      name: 'Ghana',
      slug: 'ghana-electric-plug-types-will-you-need-an-adapter-in-accra',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Ghana uses British-style Type G plugs — a different adapter is needed if crossing into Ghana.',
    },
    {
      name: 'Benin',
      slug: 'benin-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
    {
      name: 'Burkina Faso',
      slug: 'burkina-faso-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Lomé has a range of hotels from budget to mid-range, with better hotels offering generator backup. The coastal hotel strip near the airport area tends to have more reliable power. Inland accommodation is basic with limited electrical amenities.',
  faqs: [
    {
      question: 'Is Togo electrically the same as Benin?',
      answer:
        'Yes. Both countries use identical Type C and E outlets at 220V/50Hz. Your charger and adapter will work in both countries without any changes.',
    },
    {
      question: 'Do I need a different adapter for Ghana if coming from Togo?',
      answer:
        'Yes. Ghana uses the British Type G plug system, which is completely different from the French C/E system in Togo. You will need a separate adapter when crossing the border into Ghana.',
    },
    {
      question: 'How reliable is power in Lomé?',
      answer:
        'Lomé has better power reliability than much of the interior, but outages still occur. Hotels with generator backup are recommended if consistent power is important for your trip.',
    },
  ],
  metaTitle: 'Togo Power Plugs — Types C & E | Adapter Guide for Lomé',
  metaDescription:
    'Togo uses French-style Type C and E plugs at 220V/50Hz. Learn what adapter you need and how power compares to neighboring Ghana and Benin.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Benin', slug: 'benin-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Ghana', slug: 'ghana-electric-plug-types-will-you-need-an-adapter-in-accra' },
    { name: 'Burkina Faso', slug: 'burkina-faso-electric-plug-type-will-you-need-an-adapter' },
  ],
};

export default togo;

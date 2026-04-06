import type { CountryPlugData } from '@/types';

const mozambique: CountryPlugData = {
  slug: 'mozambique-electric-plug-types-will-you-need-an-adapter',
  name: 'Mozambique',
  demonym: 'Mozambican',
  continent: 'Africa',
  region: 'Southern Africa',
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
    'Mozambique has a mix of European C/F sockets and South African Type M outlets, reflecting both its Portuguese colonial heritage and the influence of neighboring South Africa. Beach resorts in the Bazaruto Archipelago and Tofo typically run on generators. Maputo city power is reasonably reliable.',
  ],
  travelContext:
    'Mozambique offers stunning Indian Ocean coastline, world-class diving at Tofo Beach and the Bazaruto Archipelago, and emerging safari tourism in Gorongosa National Park. Maputo is a vibrant capital with Portuguese-influenced architecture and cuisine. Outside major cities, infrastructure is basic — many beach lodges and island resorts generate their own power.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs are incompatible with all Mozambican socket types. A universal adapter is the safest option given the mix of outlets.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit Mozambican sockets. You need an adapter for Type C, F, or M outlets.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and F plugs fit directly into the corresponding Mozambican sockets. However, if you encounter a Type M outlet, you will need a separate adapter for that.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. An adapter is required. Voltage is compatible at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Shoprite',
      type: 'supermarket',
      city: 'Maputo',
      priceRange: '200–600 MZN',
      note: 'South African supermarket chain with locations in Maputo. May stock basic adapters.',
    },
    {
      name: 'Game',
      type: 'electronics',
      city: 'Maputo',
      priceRange: '300–800 MZN',
      note: 'Department store at Maputo Shopping with electronics including travel adapters.',
    },
    {
      name: 'Maputo Electronics Markets',
      type: 'electronics',
      city: 'Maputo',
      priceRange: '100–500 MZN',
      note: 'Small stalls and shops in central Maputo near Mercado Central sell adapters and power accessories. Quality varies.',
    },
  ],
  airportName: 'Maputo International Airport',
  airportCode: 'MPM',
  neighbors: [
    {
      name: 'South Africa',
      slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa',
      plugTypes: ['C', 'D', 'M', 'N'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'South Africa shares Type C and M with Mozambique but also uses Type D and N. A universal adapter covers both countries well.',
    },
    {
      name: 'Zimbabwe',
      slug: 'zimbabwe-electric-plug-types-which-adapter-do-you-need-for-zimbabwe',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote:
        'Zimbabwe uses British-style plugs that are different from Mozambique. A separate adapter is needed.',
    },
    {
      name: 'Zambia',
      slug: 'zambia-electric-plug-types-which-adapter-do-you-need-in-zambia',
      plugTypes: ['C', 'D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'Zambia shares Type C with Mozambique. Other types differ.',
    },
    {
      name: 'Malawi',
      slug: 'malawi-electric-plug-types-which-adapter-will-you-need-in-malawi',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote:
        'Malawi uses British Type G exclusively — different from Mozambique. You will need a different adapter.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'International hotels in Maputo usually provide adapters on request. Beach resorts along the coast and on the Bazaruto islands often have South African-style Type M outlets, reflecting the large South African tourist market. Budget pousadas and backpacker lodges are unlikely to supply adapters. Island and remote beach lodges typically run on generators with limited charging capacity.',
  faqs: [
    {
      question: 'Which plug types will I encounter in Mozambique?',
      answer:
        'Mozambique uses a mix of European Type C and F sockets alongside South African Type M outlets. The type you encounter depends on the property — newer tourist lodges often use Type M due to South African influence, while urban buildings in Maputo tend toward European-style sockets.',
    },
    {
      question: 'Is the power reliable at beach resorts in Mozambique?',
      answer:
        'Most beach resorts and island lodges operate on generators or solar systems, which are generally reliable but may have specific hours for power availability. Luxury resorts run generators around the clock, while budget options may only provide power in the evening. Carry a portable battery pack for flexibility.',
    },
    {
      question: 'Do I need a different adapter for Mozambique than for South Africa?',
      answer:
        'If you have a European-style plug, it works in Mozambique\'s Type C/F sockets but not in South African Type M sockets. If you have a South African adapter for Type M, it works in some Mozambican lodges. A universal adapter is the simplest solution for both countries.',
    },
  ],
  metaTitle:
    'Mozambique Power Plugs & Adapters: Types C, F & M – What to Bring',
  metaDescription:
    'Mozambique uses Type C, F, and South African Type M plugs at 230V/50Hz. Find out which adapter you need for Maputo, beach resorts, and the Bazaruto islands.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'South Africa',
      slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa',
    },
    {
      name: 'Zimbabwe',
      slug: 'zimbabwe-electric-plug-types-which-adapter-do-you-need-for-zimbabwe',
    },
    {
      name: 'Malawi',
      slug: 'malawi-electric-plug-types-which-adapter-will-you-need-in-malawi',
    },
  ],
};

export default mozambique;

import { CountryPlugData } from '@/types';

const gambia: CountryPlugData = {
  slug: 'gambia-electric-plug-types-will-you-need-an-adapter-in-banjul',
  name: 'Gambia',
  demonym: 'Gambian',
  continent: 'Africa',
  region: 'West Africa',
  voltage: 230,
  frequency: 50,
  complexityTier: 'simple',
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
  travelContext:
    'The Gambia, a small English-speaking enclave surrounded by francophone Senegal, uses the British Type G electrical system. Power supply in the Greater Banjul area is reasonably reliable for the region, though outages occur. Upcountry areas along the River Gambia have much more limited electrification. Tourism infrastructure along the Atlantic coast is relatively well developed.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs do not fit British Type G outlets. A converter is also needed for non-dual-voltage devices at 230V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'The Gambia uses the same British Type G outlets and 230V voltage. No adapter or converter needed — your plugs work directly.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs do not fit British Type G outlets. You need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Kairaba Avenue shops',
      type: 'electronics',
      city: 'Serrekunda',
      priceRange: '$3–$10',
      note: 'The main commercial strip has shops selling electronics and electrical accessories.',
    },
    {
      name: "Harry's Supermarket",
      type: 'supermarket',
      city: 'Banjul area',
      priceRange: '$5–$15',
      note: 'One of the larger supermarkets in the Banjul area, sometimes stocks adapters.',
    },
    {
      name: 'Local markets',
      type: 'electronics',
      city: 'Serrekunda',
      priceRange: '$2–$8',
      note: 'Market vendors sell basic electrical items including adapters.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      note: 'Tourist hotels along the coast commonly have adapters for European and American guests.',
    },
  ],
  airportName: 'Banjul Yundum International Airport',
  airportCode: 'BJL',
  neighbors: [
    {
      name: 'Senegal',
      slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar',
      plugTypes: ['C', 'D', 'E', 'K'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Senegal uses the French electrical system — completely different from The Gambia\'s British Type G. You need a different adapter when crossing into Senegal.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Tourist hotels along the Atlantic coast are accustomed to European visitors and often stock adapters at reception. Mid-range and higher hotels generally have generator backup for power outages. Upcountry lodges have more basic setups with limited electricity, often generator-powered for evening hours only.',
  faqs: [
    {
      question: 'Does The Gambia use the same plugs as the UK?',
      answer:
        'Yes. The Gambia uses British Type G outlets at 230V/50Hz, identical to the UK. If you are traveling from Britain, your plugs and devices will work without any adapter.',
    },
    {
      question: 'Will I need a different adapter for Senegal when crossing the border?',
      answer:
        'Yes. Senegal uses the French electrical system (Type C/E/K) which is completely different from The Gambia\'s British Type G. The two countries are a stark electrical contrast despite being geographic neighbors.',
    },
    {
      question: 'How reliable is power in the tourist areas?',
      answer:
        'The coastal tourist strip has reasonably reliable power, and most hotels have generator backup. Upcountry areas have much less consistent electricity. A portable battery pack is recommended for travel outside the Greater Banjul area.',
    },
  ],
  metaTitle: 'Gambia Power Plugs — Type G (British) | Adapter Guide',
  metaDescription:
    'The Gambia uses British Type G plugs at 230V/50Hz. Find out if you need an adapter and how power differs from neighboring Senegal.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Senegal', slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'Ghana', slug: 'ghana-electric-plug-types-will-you-need-an-adapter-in-accra' },
  ],
};

export default gambia;

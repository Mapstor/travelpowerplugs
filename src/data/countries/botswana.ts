import type { CountryPlugData } from '@/types';

const botswana: CountryPlugData = {
  slug: 'botswana-electric-plug-types-do-you-need-an-adapter',
  name: 'Botswana',
  demonym: 'Motswana',
  continent: 'Africa',
  region: 'Southern Africa',
  voltage: 230,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-d',
      name: 'Type D',
      subtitle: 'Old British (India)',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 5.08,
      pinSpacing: 19.1,
      ratedAmps: 5,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.3,
      bodyHeight: 1.0,
      bodyCornerRadius: 0.2,
      noseRadius: 0.48,
      recessRadius: 1.0,
      faceplateSize: 2.8,
    },
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
    'Okavango Delta fly-in camps vary widely in electrical provision. Ultra-luxury camps like Mombo and Jao have full 24-hour power with charging stations, while mobile safari camps may offer solar charging only during daylight hours. Gaborone city power is reliable.',
  ],
  travelContext:
    'Botswana is one of Africa\'s premier wildlife destinations, centered on the Okavango Delta, Chobe National Park, and the Makgadikgadi Pans. The country\'s tourism model emphasizes low-volume, high-value safaris, meaning many camps are remote fly-in operations deep in the wilderness. Gaborone is a modern capital with standard infrastructure, but the real draw is the bush — where power access depends entirely on your lodge tier.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs do not fit Botswana\'s Type D or Type G outlets. A universal adapter covering both socket types is recommended.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'British Type G plugs fit the modern outlets in Botswana. Older properties may have Type D, but most tourist lodges use Type G.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit Botswana\'s outlets. An adapter is needed for either Type D or Type G sockets.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian angled flat-pin plugs are incompatible. You need an adapter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Game',
      type: 'electronics',
      city: 'Gaborone',
      priceRange: 'P40–120',
      note: 'South African department store at Riverwalk Mall. Best selection of travel adapters in Botswana.',
    },
    {
      name: 'Choppies',
      type: 'supermarket',
      city: 'Gaborone',
      priceRange: 'P25–80',
      note: 'Botswana\'s largest supermarket chain with locations nationwide. May carry basic adapters.',
    },
    {
      name: 'Sefalana',
      type: 'supermarket',
      city: 'Gaborone',
      priceRange: 'P30–90',
      note: 'Botswana-based retail group with supermarkets across the country.',
    },
  ],
  airportName: 'Sir Seretse Khama International Airport',
  airportCode: 'GBE',
  neighbors: [
    {
      name: 'South Africa',
      slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa',
      plugTypes: ['C', 'D', 'M', 'N'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'South Africa shares Type D with Botswana but primarily uses Type M. You may need a different adapter for South African Type M outlets.',
    },
    {
      name: 'Namibia',
      slug: 'namibia-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['D', 'M'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote:
        'Namibia shares Type D but also uses Type M. A universal adapter is best for both countries.',
    },
    {
      name: 'Zimbabwe',
      slug: 'zimbabwe-electric-plug-types-which-adapter-do-you-need-for-zimbabwe',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote:
        'Zimbabwe uses the exact same Type D and G combination. Your adapter works in both countries.',
    },
    {
      name: 'Zambia',
      slug: 'zambia-electric-plug-types-which-adapter-do-you-need-in-zambia',
      plugTypes: ['C', 'D', 'G'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote:
        'Zambia shares both Type D and G with Botswana and adds Type C. The same adapter covers both.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Luxury Okavango Delta camps (Mombo, Jao, Vumbura Plains) have excellent power infrastructure with USB charging stations in rooms and adapters available. Mid-tier camps and mobile safaris may have solar-powered charging hubs in communal areas. Maun town lodges and Gaborone hotels are well-equipped. Always confirm power availability with your camp before arrival.',
  faqs: [
    {
      question: 'Will I be able to charge devices at an Okavango Delta camp?',
      answer:
        'It depends on the camp. Luxury lodges like Mombo, Jao Camp, and Vumbura Plains have 24-hour power with charging stations in each room. Mid-range camps often have solar-powered communal charging areas. Some mobile camps may not have electricity at all — confirm with your operator before departure and bring a power bank.',
    },
    {
      question: 'What plug type do most safari lodges in Botswana use?',
      answer:
        'Most modern safari lodges in Botswana use British Type G sockets. Some older properties may have Type D. A universal adapter that covers both is the safest choice for a Botswana safari.',
    },
    {
      question: 'Can I use the same adapter in Botswana and Zimbabwe?',
      answer:
        'Yes. Both countries use Type D and Type G sockets at 230V. A single adapter works seamlessly across both destinations, which is convenient for trips combining the Okavango Delta with Victoria Falls.',
    },
  ],
  metaTitle:
    'Botswana Power Plugs & Adapters: Types D & G – Safari Travel Guide',
  metaDescription:
    'Botswana uses Type D and G plugs at 230V/50Hz. Find out which adapter you need for Gaborone, Okavango Delta camps, and Chobe, plus tips on charging in the bush.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Zimbabwe',
      slug: 'zimbabwe-electric-plug-types-which-adapter-do-you-need-for-zimbabwe',
    },
    {
      name: 'South Africa',
      slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa',
    },
    {
      name: 'Namibia',
      slug: 'namibia-electric-plug-types-which-adapter-will-you-need',
    },
  ],
};

export default botswana;

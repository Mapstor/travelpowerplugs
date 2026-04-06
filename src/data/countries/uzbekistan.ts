import type { CountryPlugData } from '@/types';

const uzbekistan: CountryPlugData = {
  slug: 'uzbekistan-electric-plug-types-which-adapter-for-uzbekistan',
  name: 'Uzbekistan',
  demonym: 'Uzbek',
  continent: 'Asia',
  region: 'Central Asia',
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
  quirks: [
    'Some historic guesthouses in Bukhara\'s old city have older wiring with limited outlets — bring a compact power strip if you rely on multiple devices.',
  ],
  travelContext:
    'Uzbekistan is the jewel of the Silk Road, with the turquoise-tiled madrassas of Samarkand, the ancient trading city of Bukhara, the walled fortress of Khiva, and the rapidly modernizing capital Tashkent. The country has invested heavily in tourism infrastructure, and major cities have reliable power. Heritage guesthouses in restored courtyard buildings are a popular accommodation type but may have quaint, limited electrical setups.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs are incompatible with Uzbek round-pin outlets. An adapter is required.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British plugs do not fit Uzbek sockets. Bring an adapter for Type C or F outlets.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and F plugs work directly. No adapter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. An adapter is needed.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Mediapark',
      type: 'electronics',
      city: 'Tashkent',
      priceRange: '20,000–60,000 UZS',
      note: 'Major electronics retailer in Uzbekistan with stores in Tashkent and other cities.',
    },
    {
      name: 'Texnomart',
      type: 'electronics',
      city: 'Tashkent',
      priceRange: '15,000–50,000 UZS',
      note: 'Popular electronics chain with wide selection of accessories.',
    },
    {
      name: 'Makro Supermarkets',
      type: 'supermarket',
      city: 'Tashkent',
      priceRange: '15,000–40,000 UZS',
      note: 'Hypermarket chain with household electronics sections.',
    },
  ],
  airportName: 'Islam Karimov Tashkent International Airport',
  airportCode: 'TAS',
  neighbors: [
    {
      name: 'Kazakhstan',
      slug: 'kazakhstan-electric-plug-types-will-you-need-an-adapter-probably-yes',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Kazakhstan uses identical plug types and voltage. No adapter change needed.',
    },
    {
      name: 'Kyrgyzstan',
      slug: 'kyrgyzstan-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Same plugs and voltage. Seamless for multi-country travel.',
    },
    {
      name: 'Tajikistan',
      slug: 'tajikistan-electric-plug-types-which-adapter-will-you-need-in-tajikistan',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Tajikistan uses the same system. Power reliability in the Pamir region is much lower, though.',
    },
    {
      name: 'Afghanistan',
      slug: 'afghanistan-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Same plug types, though infrastructure and power availability differ significantly.',
    },
    {
      name: 'Turkmenistan',
      slug: 'turkmenistan-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Identical electrical system.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'International hotels in Tashkent (Hilton, Hyatt Regency) have modern outlets and may provide adapters. Boutique guesthouses in Samarkand and Bukhara — often restored historic buildings — tend to have fewer and sometimes inconveniently placed outlets. A compact travel power strip is particularly useful for Silk Road guesthouse stays.',
  faqs: [
    {
      question: 'What plug type does Uzbekistan use?',
      answer:
        'Uzbekistan uses standard European Type C (Europlug) and Type F (Schuko) sockets at 220V/50Hz. These are the same outlets found across most of continental Europe and all Central Asian countries.',
    },
    {
      question: 'Are there enough outlets in Bukhara\'s old city guesthouses?',
      answer:
        'Historic guesthouses in Bukhara are often restored 19th-century merchant houses. While charming, they may have limited and awkwardly placed outlets. If you travel with a phone, laptop, camera, and other devices, a small travel power strip is a worthwhile addition.',
    },
    {
      question: 'Can I use the same adapter across all Silk Road countries?',
      answer:
        'Yes. Uzbekistan, Kazakhstan, Kyrgyzstan, Tajikistan, and Turkmenistan all use Type C and F at 220V. One adapter covers the entire Silk Road route through Central Asia.',
    },
  ],
  metaTitle:
    'Uzbekistan Power Plugs & Adapters: Types C & F – Silk Road Travel Guide',
  metaDescription:
    'Uzbekistan uses European-style Type C and F plugs at 220V/50Hz. Learn what adapter you need for Tashkent, Samarkand, and Bukhara, plus tips for heritage guesthouses.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Kazakhstan',
      slug: 'kazakhstan-electric-plug-types-will-you-need-an-adapter-probably-yes',
    },
    {
      name: 'Tajikistan',
      slug: 'tajikistan-electric-plug-types-which-adapter-will-you-need-in-tajikistan',
    },
    {
      name: 'Kyrgyzstan',
      slug: 'kyrgyzstan-electric-plug-type-will-you-need-an-adapter',
    },
  ],
};

export default uzbekistan;

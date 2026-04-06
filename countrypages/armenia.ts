import type { CountryPlugData } from '../types';

const armenia: CountryPlugData = {
  slug: 'armenia-electric-socket-types-do-you-need-to-pack-an-adapter',
  name: 'Armenia',
  demonym: 'Armenian',
  continent: 'Asia',
  region: 'Caucasus',
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
    'Armenia is a compact, ancient country with rich cultural heritage, from the temples of Garni and monasteries of Geghard and Tatev to the vibrant capital Yerevan. Infrastructure is well-developed in Yerevan and along major tourist routes. Rural areas and mountain villages have grid electricity, though wiring may be older. The country is an increasingly popular destination for cultural and food tourism.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs do not fit Armenian round-pin outlets. An adapter is required.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British plugs are incompatible with Armenian sockets. Bring an adapter.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and F plugs work directly in Armenian outlets. No adapter needed.',
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
      name: 'ZigZag',
      type: 'electronics',
      city: 'Yerevan',
      priceRange: '2,000–6,000 AMD',
      note: 'Armenian electronics retailer with stores in Yerevan. Good for adapters and accessories.',
    },
    {
      name: 'Dalma Garden Mall Electronics',
      type: 'electronics',
      city: 'Yerevan',
      priceRange: '2,500–7,000 AMD',
      note: 'Electronics shops within Dalma Garden Mall, Yerevan\'s largest shopping center.',
    },
    {
      name: 'SAS Supermarket',
      type: 'supermarket',
      city: 'Yerevan',
      priceRange: '1,500–4,000 AMD',
      note: 'Armenian supermarket chain with household electronics sections in larger branches.',
    },
  ],
  airportName: 'Zvartnots International Airport',
  airportCode: 'EVN',
  neighbors: [
    {
      name: 'Georgia',
      slug: 'georgia-electric-plug-types-will-you-need-an-adapter-in-tbilisi',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Georgia uses the same plugs. The minor voltage difference (220V vs 230V) is negligible.',
    },
    {
      name: 'Turkey',
      slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Turkey uses identical plug types and voltage.',
    },
    {
      name: 'Iran',
      slug: 'iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Iran uses the same system. No adapter change needed.',
    },
    {
      name: 'Azerbaijan',
      slug: 'azerbaijan-electric-socket-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Same plugs and voltage across the Caucasus.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Yerevan ranging from boutique to international chains have standard European outlets. Guesthouses along the tourist trail to Garni, Geghard, and Lake Sevan have reliable electricity. Adapters are rarely provided since European plugs are the standard — non-European travelers should bring their own.',
  faqs: [
    {
      question: 'What plug type does Armenia use?',
      answer:
        'Armenia uses European Type C (Europlug) and Type F (Schuko) sockets at 230V/50Hz. These are the same outlets used across most of Europe.',
    },
    {
      question: 'Can I use the same adapter in Armenia and Georgia?',
      answer:
        'Yes. Both countries use identical Type C and F plug types. A single adapter works for a combined Caucasus trip including Armenia, Georgia, and Azerbaijan.',
    },
    {
      question: 'Is there reliable electricity outside Yerevan?',
      answer:
        'Yes. Armenia has reliable electricity across the country, including in tourist destinations like Dilijan, Tatev, and Lake Sevan. Rural villages have grid power, though outlets in older guesthouses may be limited in number.',
    },
  ],
  metaTitle:
    'Armenia Power Plugs & Adapters: Types C & F – What You Need to Know',
  metaDescription:
    'Armenia uses European-style Type C and F plugs at 230V/50Hz. Learn if you need an adapter for Yerevan and beyond, where to buy one locally, and Caucasus travel tips.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Georgia',
      slug: 'georgia-electric-plug-types-will-you-need-an-adapter-in-tbilisi',
    },
    {
      name: 'Azerbaijan',
      slug: 'azerbaijan-electric-socket-types-will-you-need-an-adapter',
    },
    {
      name: 'Iran',
      slug: 'iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran',
    },
  ],
};

export default armenia;

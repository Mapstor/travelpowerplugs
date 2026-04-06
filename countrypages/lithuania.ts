import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'lithuania-electric-plug-types-will-you-need-an-adapter-in-vilnius-2',
  name: 'Lithuania',
  demonym: 'Lithuanian',
  continent: 'Europe',
  region: 'Baltic States',
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
    'Lithuania is the southernmost Baltic state, with Vilnius increasingly popular as a city-break destination. The plug system is identical to the rest of the Baltics and most of continental Europe. Travelers arriving from Poland by bus or train will find the same outlets on both sides of the border.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs are incompatible with Lithuanian round-pin outlets. Pack an adapter before departure. Voltage converters are rarely needed for modern electronics.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs will not fit. A UK-to-EU adapter is needed. Voltage is the same 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs work throughout Lithuania. No adapter needed for travelers from Germany, France, Scandinavia, or other EU countries.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter. Voltage is compatible at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Topo Centras',
      type: 'electronics',
      city: 'Vilnius',
      priceRange: '€5–€12',
      note: 'Lithuania\'s main electronics retailer with stores in every major city.',
    },
    {
      name: 'Pigu.lt pickup points',
      type: 'electronics',
      city: 'Vilnius',
      priceRange: '€4–€15',
      note: 'Order online and collect from pickup lockers, often within hours.',
    },
    {
      name: 'Maxima',
      type: 'supermarket',
      city: 'Vilnius',
      priceRange: '€3–€8',
      note: 'Lithuania\'s largest supermarket chain; larger Maxima XX and XXX stores stock basic electronics and adapters.',
    },
  ],
  airportName: 'Vilnius Airport',
  airportCode: 'VNO',
  neighbors: [
    {
      name: 'Latvia',
      slug: 'latvia-electric-plug-type-will-you-need-an-adapter-in-riga',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Belarus',
      slug: 'belarus-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Poland',
      slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Type C works in both. Poland uses Type E for grounding rather than Lithuania\'s Type F, but hybrid E/F plugs handle both.',
    },
    {
      name: 'Russia',
      slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Kaliningrad exclave shares the same plug types.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Vilnius has a growing hotel scene with modern properties in the Old Town and business district. Most hotels above budget level provide hair dryers and increasingly feature USB ports. The Curonian Spit guesthouses use standard European sockets but may have fewer outlets — bring a small power strip if you have multiple devices.',
  faqs: [
    {
      question: 'I\'m traveling through all three Baltic states — do I need different adapters?',
      answer:
        'No. Lithuania, Latvia, and Estonia all use Types C and F at 230V/50Hz. A single adapter covers all three countries.',
    },
    {
      question: 'Can I pick up an adapter quickly in Vilnius if I forget one?',
      answer:
        'Yes. Topo Centras stores are in most Vilnius shopping centers, and Maxima supermarkets are everywhere — even in the city center. Pigu.lt also offers rapid pickup from automated lockers.',
    },
    {
      question: 'Do the accommodations on the Curonian Spit have reliable electricity?',
      answer:
        'Yes, power is reliable on the Curonian Spit. Guesthouses and holiday rentals use standard Lithuanian outlets. Some smaller properties have limited socket availability, so a compact power strip can be helpful.',
    },
    {
      question: 'Will my European plug from Germany or France work in Lithuania?',
      answer:
        'Type C (Europlug) works everywhere. German Type F (Schuko) plugs work in Lithuanian sockets. French Type E plugs also fit thanks to hybrid E/F socket compatibility in modern installations.',
    },
    {
      question: 'Is a voltage converter needed for charging electronics from the US?',
      answer:
        'Almost never. Check your charger label — if it says "100–240V," you only need a plug adapter. This covers nearly all phone chargers, laptops, and cameras.',
    },
  ],
  metaTitle: 'Lithuania Power Plugs — Types C & F | Adapter Guide for Vilnius',
  metaDescription:
    'Lithuania uses Type C and Type F plugs at 230V/50Hz. US and UK travelers need an adapter. Learn what to bring and where to buy one in Vilnius.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Latvia', slug: 'latvia-electric-plug-type-will-you-need-an-adapter-in-riga' },
    { name: 'Estonia', slug: 'estonia-electric-plug-types-will-you-need-an-adapter-in-estonia' },
    { name: 'Poland', slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland' },
  ],
};

export default data;

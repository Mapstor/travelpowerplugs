import type { CountryPlugData } from '@/types';

const mauritania: CountryPlugData = {
  slug: 'mauritania-electric-plug-types-will-you-need-an-adapter',
  name: 'Mauritania',
  demonym: 'Mauritanian',
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
  ],
  travelContext:
    'Mauritania is a vast, sparsely populated West African nation. Nouakchott, the capital, has the most reliable power infrastructure. Outside major towns, electricity can be scarce. Shopping options for electronics and adapters are very limited.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-prong plugs are incompatible with Type C round-pin sockets. Voltage is 220V, so a converter is needed for non-dual-voltage devices.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit Type C outlets. An adapter is required. Voltage is compatible.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C plugs fit directly. Type E and F plugs are also compatible with Type C sockets.',
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
      name: 'Marché Capitale',
      type: 'electronics',
      city: 'Nouakchott',
      priceRange: '$3–10',
      note: 'Main market in Nouakchott with some electronics stalls. Adapter availability is not guaranteed.',
    },
  ],
  airportName: 'Oumtounsy International Airport',
  airportCode: 'NKC',
  neighbors: [
    {
      name: 'Morocco',
      slug: 'morocco-electric-plug-types-will-you-need-an-adapter-in-morocco',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote: 'Morocco uses Types C and E. Your Type C adapter works in both countries.',
    },
    {
      name: 'Senegal',
      slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar',
      plugTypes: ['C', 'D', 'E', 'K'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Senegal uses Type C among several others. A Type C adapter covers you in both countries.',
    },
    {
      name: 'Mali',
      slug: 'mali-electric-plug-types-which-adapter-will-you-need-in-mali',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote: 'Mali uses Types C and E, compatible with Mauritania\'s Type C system.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Nouakchott have electricity but amenities are basic. Adapter availability is extremely limited in Mauritania — bring everything you need from abroad.',
  faqs: [
    {
      question: 'What plug type does Mauritania use?',
      answer:
        'Mauritania uses Type C (Europlug) outlets with two round pins at 220V/50Hz.',
    },
    {
      question: 'Can I buy an adapter in Mauritania?',
      answer:
        'Options are very limited. Some electronics stalls at Marché Capitale in Nouakchott may have adapters, but availability is unreliable. Bring your adapter from home or buy one during a layover.',
    },
    {
      question: 'Is power reliable outside Nouakchott?',
      answer:
        'Power infrastructure outside the capital is minimal. Many rural areas have little to no grid electricity. Bring a portable battery pack and plan for limited charging opportunities if traveling outside Nouakchott.',
    },
  ],
  metaTitle: 'Mauritania Power Plugs — Type C Outlets, 220V, Adapter Guide',
  metaDescription:
    'Mauritania uses Type C plugs at 220V/50Hz. Learn if you need an adapter, what local options exist in Nouakchott, and how to prepare for limited power infrastructure.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Morocco', slug: 'morocco-electric-plug-types-will-you-need-an-adapter-in-morocco' },
    { name: 'Senegal', slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar' },
    { name: 'Mali', slug: 'mali-electric-plug-types-which-adapter-will-you-need-in-mali' },
  ],
};

export default mauritania;

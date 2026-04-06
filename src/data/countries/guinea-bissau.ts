import { CountryPlugData } from '@/types';

const guineaBissau: CountryPlugData = {
  slug: 'guinea-bissau-electric-plug-types',
  name: 'Guinea-Bissau',
  demonym: 'Bissau-Guinean',
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
  quirks: [
    'Guinea-Bissau is one of the least electrified countries in the world. Even the capital Bissau has extremely limited grid power, and most buildings rely on private generators when they have electricity at all.',
  ],
  travelContext:
    'Guinea-Bissau has minimal electrical infrastructure. The country\'s grid covers only a fraction of the capital Bissau, and most of the country has no grid access. Private generators are the primary source of electricity for businesses and the few hotels that serve international visitors. Portable solar chargers and battery packs are not luxuries here — they are necessities.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs do not fit Type C outlets. A converter is needed for non-dual-voltage devices at 220V. However, finding a working outlet is the bigger challenge.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type G plugs need an adapter for Type C outlets. Voltage is compatible.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C plugs fit directly. No adapter or conversion needed.',
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
      name: 'Local market stalls',
      type: 'electronics',
      city: 'Bissau',
      note: 'Very limited. Basic electrical accessories may be found at market stalls, but do not count on finding adapters. Bring everything you need.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Bissau',
      note: 'The handful of hotels in Bissau serving international visitors may have a spare adapter.',
    },
  ],
  airportName: 'Bissau Osvaldo Vieira International Airport',
  airportCode: 'OXB',
  neighbors: [
    {
      name: 'Senegal',
      slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar',
      plugTypes: ['C', 'D', 'E', 'K'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Senegal also uses Type C alongside other types. Your European charger works in both.',
    },
    {
      name: 'Guinea',
      slug: 'guinea-electric-plug-types-will-you-need-an-adapter-in-conakry',
      plugTypes: ['C', 'F', 'K'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote: 'Guinea shares Type C. Your adapter works in both countries.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Accommodation options in Bissau are very limited. The few hotels that cater to international visitors run on generators, typically providing electricity for limited hours per day. USB ports in rooms are essentially nonexistent. Bring a portable battery, solar charger, and flashlight.',
  faqs: [
    {
      question: 'Will I have electricity in Guinea-Bissau?',
      answer:
        'Electricity is extremely scarce in Guinea-Bissau. Even in Bissau, the capital, the grid covers only a small area and power cuts are constant. Most hotels and businesses rely on private generators that run for limited hours. Bring a portable battery pack and solar charger.',
    },
    {
      question: 'What plug type should I prepare for?',
      answer:
        'Guinea-Bissau uses only Type C (Europlug) outlets. A standard European two-pin charger is all you need — but finding a powered outlet is the real challenge.',
    },
    {
      question: 'Should I bring a solar charger to Guinea-Bissau?',
      answer:
        'Yes, strongly recommended. With electricity availability being so limited, a foldable solar charger panel combined with a portable battery pack gives you the most reliable way to keep devices charged.',
    },
  ],
  metaTitle: 'Guinea-Bissau Power Plugs — Type C | Adapter & Power Guide',
  metaDescription:
    'Guinea-Bissau uses Type C plugs at 220V/50Hz. Electricity is extremely scarce — find out what adapter and portable power to bring.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Senegal', slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar' },
    { name: 'Guinea', slug: 'guinea-electric-plug-types-will-you-need-an-adapter-in-conakry' },
  ],
};

export default guineaBissau;

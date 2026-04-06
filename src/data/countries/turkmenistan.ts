import type { CountryPlugData } from '@/types';

const turkmenistan: CountryPlugData = {
  slug: 'turkmenistan-electric-plug-types-which-adapter-will-you-need',
  name: 'Turkmenistan',
  demonym: 'Turkmen',
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
  travelContext:
    'Turkmenistan is one of the world\'s most isolated and controlled countries, but draws adventurous travelers for the flaming Darvaza Gas Crater ("Door to Hell"), the ancient ruins of Merv and Nisa, and the surreal marble-clad capital of Ashgabat. Tourism requires a visa and typically a government-approved guide. Independent shopping for travel accessories is extremely limited, so bring everything you need from home.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs are incompatible with Turkmen round-pin sockets. Bring an adapter from home — retail options in Turkmenistan are very limited.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British plugs do not fit. Bring an adapter. Do not rely on finding one locally.',
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
        'Australian plugs are incompatible. Bring an adapter with you.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Berkarar Mall',
      type: 'electronics',
      city: 'Ashgabat',
      priceRange: '30–80 TMT',
      note: 'State-run shopping center in Ashgabat. The most likely place to find adapters, though selection is unpredictable and the mall may have limited operating hours.',
    },
    {
      name: 'Hotel Shops',
      type: 'hotel',
      city: 'Ashgabat',
      priceRange: '40–100 TMT',
      note: 'Major hotels like the Yyldyz Hotel may have small shops with basic travel accessories. Availability is not guaranteed.',
    },
  ],
  airportName: 'Ashgabat International Airport',
  airportCode: 'ASB',
  neighbors: [
    {
      name: 'Uzbekistan',
      slug: 'uzbekistan-electric-plug-types-which-adapter-for-uzbekistan',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Uzbekistan uses the same plugs and voltage. No adapter change needed.',
    },
    {
      name: 'Kazakhstan',
      slug: 'kazakhstan-electric-plug-types-will-you-need-an-adapter-probably-yes',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Same system throughout Central Asia.',
    },
    {
      name: 'Iran',
      slug: 'iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Iran uses the same plug types and voltage.',
    },
    {
      name: 'Afghanistan',
      slug: 'afghanistan-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Same plug types, though infrastructure conditions differ greatly.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Ashgabat\'s government-approved hotels are modern with standard European outlets. Outside the capital, accommodation options are extremely limited and controlled by the state tourism system. Hotels in Turkmenabat and Mary have basic European sockets. Desert camping near the Darvaza Gas Crater has no electricity — charge everything fully beforehand.',
  faqs: [
    {
      question: 'Can I buy an adapter in Turkmenistan?',
      answer:
        'Turkmenistan has very limited independent retail. The Berkarar Mall in Ashgabat is the most likely place to find one, but selection is unreliable. Hotel shops may have basic accessories. It is strongly recommended to bring all adapters and power accessories from home.',
    },
    {
      question: 'What plug type does Turkmenistan use?',
      answer:
        'Turkmenistan uses European Type C and Type F sockets at 220V/50Hz, the same standard used across Central Asia and much of the former Soviet Union.',
    },
    {
      question: 'Is there electricity at the Darvaza Gas Crater?',
      answer:
        'No. The Darvaza Gas Crater is in the middle of the Karakum Desert with no infrastructure. Camping here means zero electricity. Charge all devices fully before the journey and bring a power bank. Your tour guide may have a vehicle-mounted charger.',
    },
  ],
  metaTitle:
    'Turkmenistan Power Plugs & Adapters: Types C & F – Travel Essentials',
  metaDescription:
    'Turkmenistan uses European-style Type C and F plugs at 220V/50Hz. Learn why you must bring adapters from home, what to expect in Ashgabat, and desert travel tips.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Uzbekistan',
      slug: 'uzbekistan-electric-plug-types-which-adapter-for-uzbekistan',
    },
    {
      name: 'Iran',
      slug: 'iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran',
    },
    {
      name: 'Kazakhstan',
      slug: 'kazakhstan-electric-plug-types-will-you-need-an-adapter-probably-yes',
    },
  ],
};

export default turkmenistan;

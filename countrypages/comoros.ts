import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'comoros-electric-plug-type-do-you-need-an-adapter',
  name: 'Comoros',
  demonym: 'Comorian',
  continent: 'Africa',
  region: 'East Africa',
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
  quirks: [
    'French-style electrical system. Grande Comore has the most reliable power; Mohéli and Anjouan experience frequent outages.',
  ],
  travelContext:
    'Comoros is a volcanic archipelago between Madagascar and Mozambique. The French colonial legacy means Type C and E outlets are standard. Power infrastructure is very limited, and electricity supply varies dramatically between islands.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-prong plugs do not fit French-style round-pin outlets. Voltage is 220V, so a converter is needed for non-dual-voltage devices.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs will not fit. An adapter is required. Voltage is compatible.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European plugs fit directly into Comorian outlets. Type C fits in Type E sockets, and Type F is also compatible.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Moroni market stalls',
      type: 'convenience',
      city: 'Moroni',
      priceRange: '$3–8',
      note: 'Very limited availability. Market vendors occasionally have basic adapters.',
    },
  ],
  airportName: 'Prince Said Ibrahim International Airport',
  airportCode: 'HAH',
  neighbors: [
    {
      name: 'Madagascar',
      slug: 'madagascar-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'D', 'E', 'J', 'K'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote: 'Madagascar shares Types C and E. A French/European adapter works in both countries.',
    },
    {
      name: 'Mozambique',
      slug: 'mozambique-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F', 'M'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Mozambique uses Type C alongside Types F and M. Type C outlets are compatible.',
    },
    {
      name: 'Seychelles',
      slug: 'seychelles-electric-plug-types-which-adapter-will-you-need-with-you',
      plugTypes: ['G'],
      voltage: 240,
      sameAsSubject: 'different',
      adapterNote: 'Seychelles uses British Type G, which is completely different from the Comorian French system.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Accommodation options are limited. Hotels on Grande Comore are the most developed. On Mohéli and Anjouan, expect basic guesthouses with unreliable power. Bring a battery pack and all necessary adapters.',
  faqs: [
    {
      question: 'What plug types does Comoros use?',
      answer:
        'Comoros uses French-style Type C and Type E outlets at 220V/50Hz.',
    },
    {
      question: 'Which island has the most reliable power?',
      answer:
        'Grande Comore (Ngazidja), where the capital Moroni is located, has the most reliable electricity. Mohéli and Anjouan experience frequent and prolonged outages.',
    },
    {
      question: 'Should I bring a portable battery to Comoros?',
      answer:
        'Absolutely. Power outages are common on all islands, and charging opportunities may be limited, especially on Mohéli and Anjouan. A good power bank is essential.',
    },
  ],
  metaTitle: 'Comoros Power Plugs — Type C & E Outlets, 220V, Adapter Guide',
  metaDescription:
    'Comoros uses French-style Type C and E plugs at 220V/50Hz. Learn which adapter to bring, what power to expect on each island, and why a battery pack is essential.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Madagascar', slug: 'madagascar-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Mozambique', slug: 'mozambique-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Seychelles', slug: 'seychelles-electric-plug-types-which-adapter-will-you-need-with-you' },
  ],
};

export default data;

import { CountryPlugData } from '../types';

const trinidadAndTobago: CountryPlugData = {
  slug: 'trinidad-and-tobago-electric-plug-types-will-you-need-an-adapter',
  name: 'Trinidad And Tobago',
  demonym: 'Trinidadian',
  continent: 'North America',
  region: 'Caribbean',
  voltage: 115,
  frequency: 60,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-a',
      name: 'Type A',
      subtitle: 'US ungrounded',
      pins: 2,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: false,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.0,
      bodyHeight: 0.7,
      bodyCornerRadius: 0.15,
      noseRadius: 0.35,
      recessRadius: 0.85,
      faceplateSize: 2.5,
    },
    {
      id: 'type-b',
      name: 'Type B',
      subtitle: 'US grounded',
      pins: 3,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.2,
      bodyHeight: 0.9,
      bodyCornerRadius: 0.15,
      noseRadius: 0.4,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  travelContext:
    'Trinidad and Tobago is a twin-island nation — Trinidad is the larger, more urbanized island with Port of Spain as the capital, while Tobago is the quieter, resort-oriented island. Port of Spain is known for its Carnival, while Tobago draws visitors for its beaches and diving. Power infrastructure is modern in both main cities.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Same Type A/B plugs at 115V/60Hz — essentially identical to the US. No adapter or converter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type A/B adapter. UK devices are dual-voltage and handle 115V without issues.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European plugs don\'t fit. You need an adapter and should verify that your devices support 115V — many European appliances expect 220–240V.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Australian plugs won\'t fit. Adapter needed, and check voltage compatibility for your 230V devices.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Courts',
      type: 'electronics',
      city: 'Port of Spain',
      priceRange: '$5–$15 USD',
      note: 'Major Caribbean electronics chain with stores on both islands.',
    },
    {
      name: 'Standard Distributors',
      type: 'electronics',
      priceRange: '$5–$15 USD',
      note: 'Electronics and appliance retailer in Trinidad.',
    },
    {
      name: 'Massy Stores',
      type: 'supermarket',
      priceRange: '$3–$10 USD',
      note: 'Caribbean supermarket chain; some locations carry basic adapters.',
    },
  ],
  airportName: 'Port of Spain Piarco International Airport',
  airportCode: 'POS',
  neighbors: [
    {
      name: 'Venezuela',
      slug: 'venezuela-electric-plug-types-will-you-need-an-adapter-for-venezuela',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Same plug types, very similar voltage. Fully compatible.',
    },
    {
      name: 'Grenada',
      slug: 'grenada-electric-plug-types-will-you-need-an-adapter-in-grenada',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Grenada uses British Type G plugs at 230V — completely different system.',
    },
    {
      name: 'Barbados',
      slug: 'barbados-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 115,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plug types and voltage, though Barbados runs at 50Hz.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Port of Spain and Crown Point (Tobago) have modern outlets and reliable power. Guesthouses in rural Trinidad or smaller Tobago villages may have fewer outlets. During Carnival season in Port of Spain, every accommodation type is booked solid — bring your own adapter and power strip.',
  faqs: [
    {
      question: 'Do I need an adapter for Trinidad and Tobago from the US?',
      answer:
        'No. Trinidad and Tobago uses the same Type A/B plugs at 115V/60Hz — virtually identical to the US. No adapter needed.',
    },
    {
      question: 'What adapter do UK travelers need for Trinidad and Tobago?',
      answer:
        'Despite historical British ties, Trinidad and Tobago uses US-style Type A/B outlets. British visitors need a Type G to Type A/B adapter. Your devices are dual-voltage, so no converter is necessary.',
    },
    {
      question: 'Is the power reliable on Tobago?',
      answer:
        'Generally yes. Crown Point and Scarborough have reliable power. More remote parts of Tobago may experience occasional outages. Major hotels have backup generators.',
    },
    {
      question: 'Should I bring anything special for Carnival in Trinidad?',
      answer:
        'Bring a portable battery pack — you\'ll be out all day and night during Carnival with limited access to outlets. A compact power strip is also useful since Port of Spain accommodation tends to be packed and outlets may be shared.',
    },
  ],
  metaTitle:
    'Trinidad & Tobago Plug Types & Adapter Guide — Type A/B, 115V',
  metaDescription:
    'Trinidad and Tobago uses Type A and B plugs at 115V/60Hz — same as the US. Learn if you need an adapter, what to expect on both islands, and local store options.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Barbados', slug: 'barbados-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Grenada', slug: 'grenada-electric-plug-types-will-you-need-an-adapter-in-grenada' },
    { name: 'Jamaica', slug: 'jamaica-electric-plug-types-will-you-need-an-adapter-for-charging' },
    { name: 'Venezuela', slug: 'venezuela-electric-plug-types-will-you-need-an-adapter-for-venezuela' },
  ],
};

export default trinidadAndTobago;

import type { CountryPlugData } from '@/types';

const malawi: CountryPlugData = {
  slug: 'malawi-electric-plug-types-which-adapter-will-you-need-in-malawi',
  name: 'Malawi',
  demonym: 'Malawian',
  continent: 'Africa',
  region: 'Southern Africa',
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
  quirks: [
    'Load shedding is common across Malawi. A portable battery pack is essential for keeping devices charged.',
  ],
  travelContext:
    'Malawi is a popular destination for its stunning freshwater lake. The country uses British-style Type G outlets throughout. Lake Malawi lakeshore lodges generally have mains power, but load shedding means scheduled outages are a regular occurrence nationwide.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US-style plugs do not fit British Type G outlets. Malawi runs on 230V, so a converter is needed for devices that are not dual-voltage.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Malawi uses the same British Type G outlets. No adapter needed — your plugs fit directly.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs do not fit Type G sockets. An adapter is required. Voltage is compatible.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter for Type G outlets. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Game',
      type: 'electronics',
      city: 'Lilongwe',
      priceRange: '$5–15',
      note: 'Retail chain with electronics section that stocks travel adapters.',
    },
    {
      name: 'Shoprite',
      type: 'supermarket',
      city: 'Lilongwe',
      priceRange: '$4–10',
      note: 'May carry basic adapters in the household aisle.',
    },
    {
      name: 'Peoples Trading Centre',
      type: 'electronics',
      city: 'Lilongwe',
      priceRange: '$3–12',
      note: 'Local department store with an electronics section.',
    },
  ],
  airportName: 'Kamuzu International Airport',
  airportCode: 'LLW',
  neighbors: [
    {
      name: 'Zambia',
      slug: 'zambia-electric-plug-types-which-adapter-do-you-need-in-zambia',
      plugTypes: ['C', 'D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Zambia uses Type G alongside Types C and D. Your British adapter works for Type G outlets there.',
    },
    {
      name: 'Mozambique',
      slug: 'mozambique-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F', 'M'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Mozambique uses European and South African plug types, which are different from Malawi\'s British system.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Lakeshore lodges along Lake Malawi generally have reliable mains power, though load shedding affects the entire country. Upmarket lodges often have backup generators. Bring a battery pack regardless.',
  faqs: [
    {
      question: 'What plug type does Malawi use?',
      answer:
        'Malawi uses British Type G plugs with three rectangular pins. This is the standard across the country.',
    },
    {
      question: 'Is load shedding a problem in Malawi?',
      answer:
        'Yes, load shedding is common throughout Malawi. Scheduled power outages happen regularly. Hotels and lodges in tourist areas often have generators, but a portable battery pack is strongly recommended.',
    },
    {
      question: 'Will my UK charger work in Malawi?',
      answer:
        'Yes. Malawi uses the same British Type G outlets at 230V/50Hz. Your UK devices will work without any adapter.',
    },
  ],
  metaTitle: 'Malawi Power Plugs — Type G Outlets, 230V, Adapter Guide',
  metaDescription:
    'Malawi uses British Type G plugs at 230V/50Hz. Learn if you need an adapter, where to buy one in Lilongwe, and how to handle load shedding during your visit.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Zambia', slug: 'zambia-electric-plug-types-which-adapter-do-you-need-in-zambia' },
    { name: 'Mozambique', slug: 'mozambique-electric-plug-types-will-you-need-an-adapter' },
  ],
};

export default malawi;

import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'cabo-verde-electric-plug-types-do-you-need-an-adapter',
  name: 'Cabo Verde',
  demonym: 'Cape Verdean',
  continent: 'Africa',
  region: 'West Africa',
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
  quirks: [
    'Despite its Portuguese colonial history, Cabo Verde adopted standard European C/F plugs rather than any legacy system.',
  ],
  travelContext:
    'Cabo Verde is an Atlantic archipelago popular with European tourists, especially on the resort islands of Sal and Boa Vista. These tourism-focused islands have reliable power. Smaller, less-visited islands may rely on generator backup during peak demand.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-prong plugs do not fit European round-pin outlets. Cabo Verde uses 230V, so a converter is needed for non-dual-voltage devices.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs are too large for Type C/F sockets. An adapter is required. Voltage is compatible.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European plugs fit directly into Cabo Verde outlets. No adapter needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter. Voltage is compatible at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Fragata',
      type: 'supermarket',
      city: 'Praia',
      priceRange: '$5–12',
      note: 'Supermarket chain in the capital with some electronics.',
    },
    {
      name: 'Local electronics shops',
      type: 'electronics',
      city: 'Praia',
      priceRange: '$4–10',
      note: 'Small shops in Praia may carry adapters, though selection is limited.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Sal',
      priceRange: 'Free–$10',
      note: 'Resort hotels on Sal and Boa Vista sometimes lend or sell adapters at reception.',
    },
  ],
  airportName: 'Amílcar Cabral International Airport',
  airportCode: 'SID',
  neighbors: [
    {
      name: 'Senegal',
      slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar',
      plugTypes: ['C', 'D', 'E', 'K'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Senegal uses Type C among several others. A European adapter covers basic outlets in both countries.',
    },
    {
      name: 'Gambia',
      slug: 'gambia-electric-plug-types-will-you-need-an-adapter-in-banjul',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Gambia uses British Type G, which is different from Cabo Verde\'s European system.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Resort hotels on Sal and Boa Vista cater to European package tourists and typically have reliable power with European outlets. Smaller guesthouses on other islands may have more basic facilities.',
  faqs: [
    {
      question: 'What plug types does Cabo Verde use?',
      answer:
        'Cabo Verde uses European Type C and Type F (Schuko) outlets at 230V/50Hz. Standard European plugs work without any adapter.',
    },
    {
      question: 'Is power reliable on the smaller islands?',
      answer:
        'The tourist islands of Sal and Boa Vista have reliable power. Smaller islands like Santo Antão or Fogo may experience occasional outages, and some accommodations use generator backup.',
    },
    {
      question: 'Can I buy an adapter at the airport in Cabo Verde?',
      answer:
        'The airports on Sal and in Praia have limited shopping. It is better to bring your adapter from home or pick one up at your hotel. Resort receptions sometimes have adapters available.',
    },
  ],
  metaTitle: 'Cabo Verde Power Plugs — Type C & F Outlets, 230V, Adapter Guide',
  metaDescription:
    'Cabo Verde uses European Type C and F plugs at 230V/50Hz. Find out if you need an adapter for Sal, Boa Vista, or Praia, and where to buy one locally.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Senegal', slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar' },
    { name: 'Gambia', slug: 'gambia-electric-plug-types-will-you-need-an-adapter-in-banjul' },
    { name: 'Portugal', slug: 'portugal-electric-plug-types-will-you-need-adapter-in-lisbon-porto' },
  ],
};

export default data;

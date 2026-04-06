import type { CountryPlugData } from '@/types';

const portugal: CountryPlugData = {
  slug: 'portugal-electric-plug-types-will-you-need-adapter-in-lisbon-porto',
  name: 'Portugal',
  demonym: 'Portuguese',
  continent: 'Europe',
  region: 'Southern Europe',
  voltage: 230,
  frequency: 50,
  complexityTier: 'moderate',
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
    'Portugal uses the same Type C/F standard as Spain and Germany — electrically identical to most of continental Europe.',
    'Some older Lisbon apartments in neighborhoods like Alfama and Mouraria may have non-recessed outlets or outdated wiring, but this is increasingly rare as renovation projects continue.',
  ],
  travelContext:
    'Portugal has become one of Europe\'s hottest travel destinations, with Lisbon, Porto, the Algarve, and Madeira drawing millions of visitors annually. The country\'s electrical infrastructure is modern and reliable. Digital nomads and long-stay visitors will find coworking spaces and cafés well-equipped with outlets.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs won\'t fit Portuguese round-pin outlets. Bring an adapter. No converter needed — most US electronics handle 230V.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs don\'t fit. You\'ll need a UK-to-Europe adapter. Same 230V voltage.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Visitors from Spain, France, Germany, and most of Europe can plug in directly — no adapter needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs don\'t fit Portuguese sockets. Bring an adapter. Voltage is compatible.',
    },
    {
      origin: 'Brazil',
      originPlugTypes: 'C, N',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Brazilian Type C plugs fit Portuguese outlets directly. Type N (3-pin) may need an adapter for the ground pin, but the 2-pin version works fine.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Worten',
      type: 'electronics',
      note: 'Portugal\'s largest electronics chain with stores in all major cities and shopping centres.',
    },
    {
      name: 'FNAC Portugal',
      type: 'electronics',
      note: 'Electronics and media retailer with locations in Lisbon, Porto, and the Algarve.',
    },
    {
      name: 'El Corte Inglés',
      type: 'electronics',
      city: 'Lisbon',
      note: 'Large department store in central Lisbon with an electronics floor stocking adapters.',
    },
    {
      name: 'Continente',
      type: 'supermarket',
      note: 'Portugal\'s biggest supermarket chain — larger locations carry basic adapters in their household section.',
    },
    {
      name: 'Lisbon Airport (LIS)',
      type: 'airport',
      city: 'Lisbon',
      priceRange: '€8–18',
      note: 'Electronics kiosks in the terminal sell adapters at typical airport prices.',
    },
  ],
  airportName: 'Lisbon Humberto Delgado / Porto Francisco Sá Carneiro',
  airportCode: 'LIS / OPO',
  neighbors: [
    {
      name: 'Spain',
      slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Spain uses the exact same Type C/F system — no adapter needed when crossing the border.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Hotels in Lisbon and Porto generally have modern outlets and increasingly include USB ports in newer or renovated rooms. Airbnb apartments in older Lisbon neighborhoods may have a mix of outlet ages. The Algarve\'s resort hotels are well-equipped.',
  faqs: [
    {
      question: 'Do I need a power adapter for Portugal?',
      answer:
        'If you\'re from the US, UK, or Australia, yes. Travelers from continental Europe (Spain, France, Germany, etc.) do not — the plug types are identical.',
    },
    {
      question: 'What plugs does Portugal use?',
      answer:
        'Portugal uses Type C (Europlug, 2 round pins) and Type F (Schuko, 2 round pins with grounding clips) — the standard across most of continental Europe.',
    },
    {
      question: 'Can I use my adapter from Spain in Portugal?',
      answer:
        'Absolutely. Spain and Portugal have identical electrical systems (Type C/F, 230V, 50Hz). The same adapter works in both countries.',
    },
    {
      question: 'Do I need a voltage converter in Portugal?',
      answer:
        'Probably not. Portugal runs at 230V/50Hz. Most modern electronics (phones, laptops, cameras) are dual-voltage (100–240V). Check your device\'s label — if it says 100–240V, you only need an adapter, not a converter.',
    },
    {
      question: 'Where can I buy an adapter in Lisbon?',
      answer:
        'Worten and FNAC stores are your best options in the city. Lisbon airport also sells them. In a pinch, larger Continente supermarkets carry basic adapters.',
    },
    {
      question: 'I\'m Brazilian — do I need an adapter for Portugal?',
      answer:
        'Brazilian Type C (2-pin) plugs fit Portuguese outlets directly. If you only have Type N (3-pin) devices, you may need an adapter for the ground pin, but most Brazilian travelers get by without one.',
    },
  ],
  metaTitle: 'Portugal Power Plugs — Will You Need an Adapter in Lisbon & Porto? (Type C & F)',
  metaDescription:
    'Portugal uses Type C and F plugs at 230V/50Hz — the same as Spain and Germany. Find out if you need an adapter and where to buy one in Lisbon, Porto, or the Algarve.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Spain', slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain' },
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Morocco', slug: 'morocco-electric-plug-types-will-you-need-an-adapter-in-morocco' },
  ],
};

export default portugal;

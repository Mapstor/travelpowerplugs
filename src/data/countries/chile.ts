import { CountryPlugData } from '@/types';

const chile: CountryPlugData = {
  slug: 'chile-electric-plug-types-do-you-need-an-adapter-while-traveling',
  name: 'Chile',
  demonym: 'Chilean',
  continent: 'South America',
  region: 'Southern South America',
  voltage: 220,
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
      id: 'type-l',
      name: 'Type L',
      subtitle: 'Italian',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 4.0,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.063,
      bodyWidth: 1.2,
      bodyHeight: 0.8,
      bodyCornerRadius: 0.2,
      noseRadius: 0.45,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'Chile uses Type C (Europlug) and Type L (Italian-style, three round pins in a line). The Chilean Type L variant uses wider pin spacing than the standard Italian version, so Italian Type L plugs may not always fit Chilean outlets.',
    'Most modern Chilean outlets are combo sockets designed to accept both Type C and Type L plugs, making things simpler than the specs suggest. Easter Island (Rapa Nui) uses the same electrical system as the mainland.',
  ],
  travelContext:
    'Chile is a long, narrow country stretching from the Atacama Desert to Patagonia. Santiago is the main hub, with Torres del Paine, Valparaíso, and Easter Island as popular destinations. Electrical infrastructure is modern and reliable throughout the country, including remote Patagonian lodges and Easter Island.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs won\'t fit Chilean round-pin outlets. You\'ll need an adapter to Type C or Type L. Most phone chargers and laptops handle 220V, but single-voltage US appliances need a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type C or Type L adapter. UK devices are designed for 230V, which is close to Chile\'s 220V — no converter needed.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs fit directly into Chilean outlets. Larger Schuko (Type F) plugs may need an adapter for some recessed outlets, but in practice most modern Chilean sockets accommodate them. Voltage is fully compatible.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs won\'t fit Chilean outlets. You\'ll need an adapter to Type C or L. Voltage is compatible (230V vs 220V).',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Falabella',
      type: 'electronics',
      city: 'Santiago',
      priceRange: '$5–$15 USD',
      note: 'Chile\'s leading department store chain, found in every major mall.',
    },
    {
      name: 'Paris',
      type: 'electronics',
      priceRange: '$5–$15 USD',
      note: 'Department store (part of the Cencosud group) with electronics and adapter sections.',
    },
    {
      name: 'Ripley',
      type: 'electronics',
      priceRange: '$5–$12 USD',
      note: 'Department store chain with locations across Chile.',
    },
    {
      name: 'Lider',
      type: 'supermarket',
      priceRange: '$3–$10 USD',
      note: 'Walmart-owned supermarket chain; some locations carry adapters in their electronics aisle.',
    },
  ],
  airportName: 'Santiago Arturo Merino Benítez International Airport',
  airportCode: 'SCL',
  neighbors: [
    {
      name: 'Argentina',
      slug: 'argentina-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'I'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Both countries use Type C (compatible), but Argentina uses Type I while Chile uses Type L.',
    },
    {
      name: 'Peru',
      slug: 'peru-electric-plug-types-will-you-need-an-adapter-for-peru',
      plugTypes: ['A', 'B', 'C'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Peru\'s Type C outlets work with Chilean Type C plugs. Peru also has Type A/B (US-style) which Chile does not.',
    },
    {
      name: 'Bolivia',
      slug: 'bolivia-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['A', 'C'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Bolivia\'s Type C outlets are compatible. Voltage is similar.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Hotels in Santiago and Valparaíso typically have modern combo outlets that accept both Type C and Type L. Patagonian lodges and Easter Island accommodations generally have standard Chilean power. Higher-end hotels may lend adapters at the front desk, but don\'t count on this at budget options.',
  faqs: [
    {
      question: 'What adapter do I need for Chile from the United States?',
      answer:
        'You\'ll need an adapter that converts US flat pins (Type A/B) to Chilean round pins (Type C or Type L). A universal adapter is the most flexible option. Make sure your devices are dual-voltage (100–240V) since Chile runs on 220V.',
    },
    {
      question: 'Do European plugs work in Chile?',
      answer:
        'Standard Europlugs (Type C) fit directly into most Chilean outlets without an adapter. Larger Schuko plugs (Type E/F) generally fit modern combo sockets, though you may occasionally need an adapter for older recessed outlets.',
    },
    {
      question: 'Does Easter Island use different plugs than mainland Chile?',
      answer:
        'No. Easter Island (Rapa Nui) uses the same Type C and Type L outlets at 220V/50Hz as the rest of Chile. Whatever adapter works on the mainland will work on the island.',
    },
    {
      question: 'Is the power reliable in Torres del Paine?',
      answer:
        'Yes. Even remote Patagonian lodges near Torres del Paine National Park have reliable electrical power with standard Chilean outlets. Camping sites may have limited or no outlet access, so bring a portable battery for multi-day treks.',
    },
    {
      question: 'Can I use my Italian Type L plug in Chile?',
      answer:
        'It depends. Chilean Type L outlets use slightly wider pin spacing than the standard Italian variant. Your Italian plug may fit some Chilean outlets but not all. A universal adapter is the safest bet.',
    },
  ],
  metaTitle:
    'Chile Plug Types & Adapter Guide — Type C/L, 220V, What to Pack',
  metaDescription:
    'Chile uses Type C and Type L plugs at 220V/50Hz. Learn which adapter you need, whether European plugs work, and what to expect from Easter Island to Patagonia.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Argentina', slug: 'argentina-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Peru', slug: 'peru-electric-plug-types-will-you-need-an-adapter-for-peru' },
    { name: 'Bolivia', slug: 'bolivia-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
    { name: 'Ecuador', slug: 'ecuador-electric-plug-type-will-you-need-an-adapter' },
  ],
};

export default chile;

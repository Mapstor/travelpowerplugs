import type { CountryPlugData } from '../types';

const czechRepublic: CountryPlugData = {
  slug: 'czech-republic-electric-plug-type-will-you-need-an-adapter',
  name: 'Czech Republic',
  demonym: 'Czech',
  continent: 'Europe',
  region: 'Central Europe',
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
    'The Czech Republic uses Type E (French-style with a grounding pin protruding from the socket) rather than Type F (Schuko with side clips). In practice, Type E and F plugs are cross-compatible, so it rarely matters.',
    'Prague's historic center has buildings dating back centuries — some older pensions have limited outlet placement behind heavy furniture.',
  ],

  travelContext:
    'Prague is one of Europe's most visited cities, and Czechia offers everything from Bohemian spa towns to Moravian wine country. Electrical infrastructure is modern throughout. Czech Railways (ČD) provides outlets on most long-distance trains, including routes to Brno and Český Krumlov.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs won't fit Czech round-pin sockets. Bring a Type A/B to C/E adapter. Most US electronics are dual-voltage.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type G plugs require an adapter. Same 230V voltage — no converter needed.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs fit directly. Type F (Schuko) plugs also fit Czech Type E sockets thanks to cross-compatibility between E and F standards.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs are not compatible. Bring an adapter; voltage matches at 230V.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'Datart',
      type: 'electronics',
      city: 'Prague',
      priceRange: '€4–€12',
      note: 'Czech electronics chain with stores in most shopping centers.',
    },
    {
      name: 'Alza.cz',
      type: 'electronics',
      city: 'Prague',
      priceRange: '€3–€10',
      note: 'Online retailer with pickup points across the country — order online, pick up within hours.',
    },
    {
      name: 'Electro World',
      type: 'electronics',
      priceRange: '€4–€12',
      note: 'Electronics retailer found in major Czech cities.',
    },
    {
      name: 'Tesco',
      type: 'supermarket',
      priceRange: '€3–€8',
      note: 'Larger Tesco hypermarkets carry basic travel adapters.',
    },
    {
      name: 'Prague Václav Havel Airport (PRG)',
      type: 'airport',
      city: 'Prague',
      priceRange: '€8–€18',
      note: 'Travel accessories shops in both terminals stock universal adapters.',
    },
  ],

  airportName: 'Prague Václav Havel Airport',
  airportCode: 'PRG',

  neighbors: [
    {
      name: 'Germany',
      slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Germany uses Type F (Schuko) while Czechia uses Type E, but the two are cross-compatible. No adapter needed.',
    },
    {
      name: 'Austria',
      slug: 'austria-electric-power-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Austria uses Type F; Czechia uses Type E. Cross-compatible in practice.',
    },
    {
      name: 'Slovakia',
      slug: 'slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Poland',
      slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],

  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Prague hotels from luxury chains to backpacker hostels all use standard European sockets. Boutique hotels in converted historic buildings sometimes have creative outlet placement. USB ports are increasingly common in newer and renovated properties.',

  faqs: [
    {
      question: 'Do I need an adapter for Prague?',
      answer:
        'If you're coming from the US, UK, or Australia — yes. The Czech Republic uses Type C and E round-pin sockets. Travelers from Germany, France, and most of Europe can plug in directly.',
    },
    {
      question: 'What's the difference between Czech Type E and German Type F sockets?',
      answer:
        'Type E has a grounding pin that sticks out of the socket, while Type F (Schuko) has grounding clips on the sides. In practice, they are cross-compatible — a Schuko plug fits a Type E socket and vice versa. You won't notice a difference as a traveler.',
    },
    {
      question: 'Can I buy an adapter at Prague Airport?',
      answer:
        'Yes. Shops in both Terminal 1 and Terminal 2 at Václav Havel Airport sell universal travel adapters, typically for around €8–€18.',
    },
    {
      question: 'Do Czech trains have power outlets?',
      answer:
        'Most ČD long-distance trains have Schuko-compatible outlets at seats, especially on InterCity and Railjet services. Regional connections may lack outlets on older rolling stock.',
    },
    {
      question: 'Will my French plug work in the Czech Republic?',
      answer:
        'Yes — France and the Czech Republic both use Type E sockets. Your French plugs will fit directly without any adapter.',
    },
  ],

  metaTitle: 'Czech Republic Power Plugs — Will You Need an Adapter? (Types C & E)',
  metaDescription:
    'The Czech Republic uses Type C and E plugs at 230V/50Hz. Find out if you need an adapter for Prague, how Type E differs from Schuko, and where to buy adapters locally.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Austria', slug: 'austria-electric-power-plug-types-do-you-need-an-adapter' },
    { name: 'Poland', slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland' },
    { name: 'Slovakia', slug: 'slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava' },
  ],
};

export default czechRepublic;

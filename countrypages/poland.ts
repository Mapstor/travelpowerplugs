import type { CountryPlugData } from '../types';

const poland: CountryPlugData = {
  slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland',
  name: 'Poland',
  demonym: 'Polish',
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
    'Poland uses Type E sockets (like France) rather than Type F (Schuko like Germany), but the two are cross-compatible so German Schuko plugs work fine in Polish outlets.',
    'Żabka convenience stores (found on nearly every block in Polish cities) sometimes stock basic phone chargers and adapters — handy in a pinch.',
  ],

  travelContext:
    'Poland has become one of Europe's fastest-growing tourist destinations, with Kraków, Warsaw, and Gdańsk drawing millions annually. Power infrastructure is fully modern in cities. PKP Intercity trains on main routes (Warsaw–Kraków, Warsaw–Gdańsk) have outlets at seats. Budget airlines like Wizz Air hub out of Warsaw and Kraków.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs require a Type A/B to C/E adapter. Most US electronics handle 230V without a converter.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs need an adapter. Voltage is the same 230V.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs work directly. German Type F (Schuko) plugs also fit Polish Type E sockets due to cross-compatibility.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs are incompatible. Bring a travel adapter; voltage matches.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'MediaMarkt',
      type: 'electronics',
      city: 'Warsaw',
      priceRange: '€4–€12',
      note: 'Large electronics chain in shopping malls across Poland.',
    },
    {
      name: 'RTV Euro AGD',
      type: 'electronics',
      priceRange: '€4–€12',
      note: 'Poland's largest domestic electronics retailer with wide coverage.',
    },
    {
      name: 'x-kom',
      type: 'electronics',
      priceRange: '€3–€10',
      note: 'Polish tech retailer with physical stores and fast online pickup.',
    },
    {
      name: 'Żabka',
      type: 'convenience',
      priceRange: '€3–€8',
      note: 'Ubiquitous convenience chain — some locations carry basic phone chargers and adapters.',
    },
    {
      name: 'Warsaw Chopin Airport (WAW)',
      type: 'airport',
      city: 'Warsaw',
      priceRange: '€8–€18',
      note: 'Electronics kiosks in the departures area sell universal adapters.',
    },
  ],

  airportName: 'Warsaw Chopin Airport',
  airportCode: 'WAW',

  neighbors: [
    {
      name: 'Germany',
      slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Germany uses Type F (Schuko), Poland uses Type E. Cross-compatible — no adapter needed.',
    },
    {
      name: 'Czech Republic',
      slug: 'czech-republic-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Slovakia',
      slug: 'slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Ukraine',
      slug: 'ukraine-electric-plug-types-what-kind-of-adapter-do-you-need',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
    },
    {
      name: 'Belarus',
      slug: 'belarus-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
    },
    {
      name: 'Lithuania',
      slug: 'lithuania-electric-plug-types-will-you-need-an-adapter-in-vilnius-2',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
    },
  ],

  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Polish hotels and hostels have modern European outlets. Kraków's Old Town Airbnbs in renovated tenement buildings may have quirky outlet placement but the sockets themselves are standard. Larger chains in Warsaw increasingly install USB charging ports.',

  faqs: [
    {
      question: 'Do I need a power adapter for Poland?',
      answer:
        'Yes, if you're coming from the US, UK, or Australia. Poland uses Type C and E round-pin sockets. European travelers with Type C or F plugs can use them directly — no adapter required.',
    },
    {
      question: 'Will my German Schuko plug work in Poland?',
      answer:
        'Yes. Poland officially uses Type E sockets (with a protruding grounding pin), but Type F (Schuko) plugs are designed to be cross-compatible with Type E. Your German devices will plug right in.',
    },
    {
      question: 'Where can I buy an adapter in Kraków?',
      answer:
        'RTV Euro AGD and MediaMarkt in Galeria Krakowska (next to the main train station) are your best bets. In a pinch, some Żabka convenience stores carry basic adapters.',
    },
    {
      question: 'Are there outlets on Polish trains?',
      answer:
        'PKP Intercity trains on major routes have outlets at most seats, especially in the newer Pendolino and InterCity Premium services. Regional Polregio trains are less consistent.',
    },
    {
      question: 'Is 230V safe for my US hair dryer?',
      answer:
        'Only if it's dual-voltage (check for "100–240V" on the label). Single-voltage US hair dryers rated at 120V will burn out on Poland's 230V system. It's easier to use the hotel's hair dryer or buy a cheap local one.',
    },
  ],

  metaTitle: 'Poland Power Plugs — Will You Need an Adapter? (Types C & E)',
  metaDescription:
    'Poland uses Type C and E plugs at 230V/50Hz. Learn if you need a travel adapter for Warsaw or Kraków, how Polish sockets differ from German ones, and where to buy adapters.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Czech Republic', slug: 'czech-republic-electric-plug-type-will-you-need-an-adapter' },
    { name: 'Slovakia', slug: 'slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava' },
    { name: 'Lithuania', slug: 'lithuania-electric-plug-types-will-you-need-an-adapter-in-vilnius-2' },
  ],
};

export default poland;

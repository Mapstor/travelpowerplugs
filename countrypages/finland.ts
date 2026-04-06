import type { CountryPlugData } from '../types';

const finland: CountryPlugData = {
  slug: 'finland-electric-plug-type-will-you-need-an-adapter-in-helsinki',
  name: 'Finland',
  demonym: 'Finnish',
  continent: 'Europe',
  region: 'Northern Europe',
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
    'Finnish saunas — found in virtually every home, hotel, and lakeside cabin — never have electrical outlets inside for safety reasons. Charge your devices elsewhere before sauna sessions.',
    'Lapland hotels and glass-igloo resorts have reliable power and USB ports, but remote wilderness cabins accessed by snowmobile may have very limited electricity.',
  ],

  travelContext:
    'Finland ranges from the design capital Helsinki to the northern lights of Finnish Lapland. Infrastructure is superb throughout the country. VR (Finnish Railways) intercity trains have outlets at seats. Even Santa Claus Village in Rovaniemi has modern power infrastructure. The ferry to Estonia is a popular day trip — Tallink/Silja ships have outlets in cabins and lounges.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs won't fit Finnish Schuko sockets. Bring a Type A/B to C/F adapter. Most US electronics are dual-voltage.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs need an adapter. Same 230V — no converter required.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Finland uses identical Type C/F standards. Your European plugs work directly.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. Bring a travel adapter; voltage matches at 230V.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'Gigantti',
      type: 'electronics',
      city: 'Helsinki',
      priceRange: '€5–€15',
      note: 'Finland's major electronics chain (Elkjøp brand) with stores in all cities.',
    },
    {
      name: 'Verkkokauppa.com',
      type: 'electronics',
      city: 'Helsinki',
      priceRange: '€4–€12',
      note: 'Large Finnish online/retail electronics store with a flagship in Helsinki — excellent adapter selection.',
    },
    {
      name: 'K-Citymarket',
      type: 'supermarket',
      priceRange: '€4–€10',
      note: 'Finnish hypermarket chain with electronics sections carrying travel adapters.',
    },
    {
      name: 'Helsinki-Vantaa Airport (HEL)',
      type: 'airport',
      city: 'Helsinki',
      priceRange: '€8–€20',
      note: 'Electronics kiosks and duty-free shops in the terminal sell universal adapters.',
    },
  ],

  airportName: 'Helsinki-Vantaa Airport',
  airportCode: 'HEL',

  neighbors: [
    {
      name: 'Sweden',
      slug: 'sweden-electric-plug-types-will-you-need-an-adapter-for-sweden',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Norway',
      slug: 'norway-electric-plug-types-will-you-need-an-adapter-for-oslo',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Russia',
      slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Estonia',
      slug: 'estonia-electric-plug-types-will-you-need-an-adapter-in-estonia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Estonia is a popular ferry day trip from Helsinki — same plug standard.',
    },
  ],

  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Finnish hotels are consistently modern and well-maintained. Helsinki's design hotels often feature built-in USB ports. Lapland accommodations — from glass igloos to log cabins — have reliable power. Lake cottage rentals in the Finnish countryside have electricity but outlet counts vary, so a compact power strip is helpful.',

  faqs: [
    {
      question: 'Do I need a power adapter for Finland?',
      answer:
        'Yes, if you're from the US, UK, or Australia. Finland uses Type C and F plugs, the European standard with round pins. Travelers from Germany and most of Europe need no adapter.',
    },
    {
      question: 'Can I charge my phone in a Finnish sauna?',
      answer:
        'No — Finnish saunas do not have electrical outlets inside, for obvious safety reasons with water and heat. Charge your devices in your room or the changing area before heading in.',
    },
    {
      question: 'Will I have power in a Lapland glass igloo?',
      answer:
        'Yes. Glass-igloo resorts like those in Levi or Saariselkä have standard Schuko outlets and often USB ports too. They're heated and fully connected despite the Arctic setting.',
    },
    {
      question: 'Are there outlets on Helsinki–Tallinn ferries?',
      answer:
        'Yes. Tallink and Viking Line ferries between Helsinki and Tallinn have outlets in cabins and many lounge areas. The crossing is only about 2 hours, so a full charge before boarding usually suffices anyway.',
    },
    {
      question: 'Where can I buy an adapter in Helsinki?',
      answer:
        'Verkkokauppa.com's flagship store in Jätkäsaari is open late and has an excellent adapter selection. Gigantti stores in shopping centers are another reliable option. Helsinki-Vantaa Airport also stocks them.',
    },
  ],

  metaTitle: 'Finland Power Plugs — Will You Need an Adapter in Helsinki? (Types C & F)',
  metaDescription:
    'Finland uses Type C and F plugs at 230V/50Hz. Find out if you need an adapter, sauna outlet tips, Lapland cabin info, and where to buy adapters in Helsinki.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Sweden', slug: 'sweden-electric-plug-types-will-you-need-an-adapter-for-sweden' },
    { name: 'Norway', slug: 'norway-electric-plug-types-will-you-need-an-adapter-for-oslo' },
    { name: 'Estonia', slug: 'estonia-electric-plug-types-will-you-need-an-adapter-in-estonia' },
    { name: 'Denmark', slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2' },
  ],
};

export default finland;

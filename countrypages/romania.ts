import type { CountryPlugData } from '../types';

const romania: CountryPlugData = {
  slug: 'romania-electric-plug-types-will-you-need-an-adapter-in-romania',
  name: 'Romania',
  demonym: 'Romanian',
  continent: 'Europe',
  region: 'Southeast Europe',
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
    'Older Bucharest apartments and Transylvanian guesthouses may have Soviet-era outlets that are slightly recessed differently than modern Schuko sockets. Modern hotels are fully standard.',
    'Romania's booming IT sector means Bucharest and Cluj-Napoca have excellent coworking spaces with plentiful outlets and fast internet.',
  ],

  travelContext:
    'Romania offers Bucharest's urban energy, the medieval towns of Transylvania, the Danube Delta's wildlife, and the Black Sea coast. Power infrastructure is modern in cities and tourist areas. CFR Călători trains are being modernized — newer InterCity and InterRegio services have outlets, though older trains may not.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs don't fit Romanian round sockets. Bring a Type A/B to C/F adapter. Most US electronics handle 230V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs require an adapter. Same 230V voltage.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Romania uses the same Type C/F system. Your European plugs work directly.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. Bring an adapter; voltage matches.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'Altex',
      type: 'electronics',
      city: 'Bucharest',
      priceRange: '€3–€12',
      note: 'Romanian electronics chain with stores nationwide.',
    },
    {
      name: 'Flanco',
      type: 'electronics',
      priceRange: '€3–€10',
      note: 'Electronics retailer in shopping centers across Romania.',
    },
    {
      name: 'eMAG pickup points',
      type: 'electronics',
      priceRange: '€2–€10',
      note: 'Romania's largest online retailer — order online and pick up at easybox lockers within hours.',
    },
    {
      name: 'Dedeman',
      type: 'electronics',
      priceRange: '€3–€8',
      note: 'Romanian DIY/hardware chain that stocks adapters and power strips.',
    },
    {
      name: 'Bucharest Henri Coandă Airport (OTP)',
      type: 'airport',
      city: 'Bucharest',
      priceRange: '€5–€15',
      note: 'Small shops in arrivals and departures carry travel adapters.',
    },
  ],

  airportName: 'Bucharest Henri Coandă International Airport',
  airportCode: 'OTP',

  neighbors: [
    {
      name: 'Hungary',
      slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Serbia',
      slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Bulgaria',
      slug: 'bulgaria-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Moldova',
      slug: 'moldova-electric-plug-types-will-you-need-an-adapter-for-moldova',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Ukraine',
      slug: 'ukraine-electric-plug-types-what-kind-of-adapter-do-you-need',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],

  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Bucharest and Cluj-Napoca hotels are modern with reliable outlets. Transylvanian guesthouses in Bran, Sighișoara, and Sibiu are charming but may have older wiring in converted historic buildings — sockets work fine but may be in unexpected positions. Danube Delta eco-lodges have power but limited outlets.',

  faqs: [
    {
      question: 'Do I need an adapter for Romania?',
      answer:
        'Yes, if you're from the US, UK, or Australia. Romania uses standard European Type C and F plugs. Travelers from Germany and most of Europe can plug in directly.',
    },
    {
      question: 'Are Romanian outlets different from other European countries?',
      answer:
        'No — Romania uses the same Type C/F (Schuko) system as Germany, Austria, and most of continental Europe. Some very old buildings may have slightly different recessed sockets from the communist era, but modern hotels and renovated guesthouses have fully standard outlets.',
    },
    {
      question: 'Can I buy a cheap adapter in Bucharest?',
      answer:
        'Yes. Altex and Flanco stores in Bucharest malls sell adapters for as little as €3. eMAG also offers next-day pickup at lockers throughout the city. Prices are lower than in Western Europe.',
    },
    {
      question: 'Will I have power in a Transylvanian guesthouse?',
      answer:
        'Yes — even rural guesthouses in Transylvania have reliable electricity. Outlets are standard Schuko (Type F). The main quirk is that older buildings may have fewer outlets per room, so a small power strip can be useful.',
    },
    {
      question: 'Do Romanian trains have outlets?',
      answer:
        'Newer CFR InterCity and InterRegio trains have outlets at seats. Older regional trains may not. If you're taking a long journey, bring a power bank as backup.',
    },
  ],

  metaTitle: 'Romania Power Plugs — Will You Need an Adapter? (Types C & F)',
  metaDescription:
    'Romania uses Type C and F plugs at 230V/50Hz. Find out if you need an adapter for Bucharest or Transylvania, where to buy one cheaply, and hotel outlet tips.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Bulgaria', slug: 'bulgaria-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Hungary', slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest' },
    { name: 'Moldova', slug: 'moldova-electric-plug-types-will-you-need-an-adapter-for-moldova' },
    { name: 'Serbia', slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade' },
  ],
};

export default romania;

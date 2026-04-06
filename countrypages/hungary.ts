import type { CountryPlugData } from '../types';

const hungary: CountryPlugData = {
  slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest',
  name: 'Hungary',
  demonym: 'Hungarian',
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
    'Budapest's famous thermal bath houses (Széchenyi, Gellért) have lockers but no outlets inside the bathing areas — charge devices at your accommodation beforehand.',
    'Older Hungarian apartments, especially in Budapest's District VII and VIII, sometimes have recessed sockets from the Soviet era that can be tight for bulkier Schuko plugs.',
  ],

  travelContext:
    'Hungary is a popular destination anchored by Budapest, with growing interest in Lake Balaton and the wine regions of Eger and Tokaj. Power infrastructure is fully modern in cities and tourist areas. MÁV intercity trains offer Schuko outlets on most newer rolling stock.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat pins won't fit Hungarian round sockets. Bring a Type A/B to C/F adapter. Most US chargers handle 230V natively.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs require an adapter for Hungarian Type F sockets. No converter needed — same 230V.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Hungary uses the same Type C/F system as Germany and most of Europe. Plug in directly.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs won't fit. Bring an adapter; voltage matches at 230V.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'MediaMarkt Hungary',
      type: 'electronics',
      city: 'Budapest',
      priceRange: '€5–€15',
      note: 'Multiple locations in Budapest malls. Full range of travel adapters.',
    },
    {
      name: 'Euronics',
      type: 'electronics',
      priceRange: '€5–€12',
      note: 'Electronics retailer with stores across Hungary.',
    },
    {
      name: 'Auchan',
      type: 'supermarket',
      priceRange: '€3–€10',
      note: 'Hypermarket chain with an electronics section that stocks basic adapters.',
    },
    {
      name: 'Tesco Hungary',
      type: 'supermarket',
      priceRange: '€3–€8',
      note: 'Some larger Tesco stores carry travel adapters near the electronics accessories.',
    },
    {
      name: 'Budapest Ferenc Liszt Airport (BUD)',
      type: 'airport',
      city: 'Budapest',
      priceRange: '€8–€20',
      note: 'Relay and electronics kiosks in Terminal 2 sell universal adapters.',
    },
  ],

  airportName: 'Budapest Ferenc Liszt International Airport',
  airportCode: 'BUD',

  neighbors: [
    {
      name: 'Austria',
      slug: 'austria-electric-power-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Slovakia',
      slug: 'slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Slovakia uses Type E grounding, but Type C and Schuko plugs are cross-compatible in practice.',
    },
    {
      name: 'Ukraine',
      slug: 'ukraine-electric-plug-types-what-kind-of-adapter-do-you-need',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Romania',
      slug: 'romania-electric-plug-types-will-you-need-an-adapter-in-romania',
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
      name: 'Croatia',
      slug: 'croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Slovenia',
      slug: 'slovenia-electric-plug-types-will-you-need-an-adapter-for-slovenia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],

  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Budapest's hotels range from grand historic properties to modern boutique stays, all with standard Schuko outlets. Budget hostels and Airbnbs in older buildings may have fewer outlets per room — a small power strip helps. Hotels outside Budapest in spa towns and wine regions are well-equipped.',

  faqs: [
    {
      question: 'Do I need a travel adapter for Budapest?',
      answer:
        'If you're traveling from the US, UK, or Australia, yes — you'll need an adapter to convert your plug shape to the European Type C/F round-pin standard. Travelers from Germany, France, or most of the EU can use their plugs directly.',
    },
    {
      question: 'What voltage does Hungary use?',
      answer:
        'Hungary uses 230V at 50Hz, the European standard. Most modern electronics (phones, laptops, cameras) are dual-voltage and only need a plug adapter, not a voltage converter.',
    },
    {
      question: 'Can I charge my phone at Budapest thermal baths?',
      answer:
        'Not inside the bathing areas — there are no outlets near the pools or saunas for safety reasons. Charge your device at your hotel before visiting. Some bath complexes have cafés or lobbies with outlets, but don't count on it.',
    },
    {
      question: 'Are there outlets on Hungarian trains?',
      answer:
        'Newer MÁV intercity trains have Schuko outlets at seats. Older regional trains may not. If you're taking a long-distance train to Lake Balaton or Pécs, the newer coaches are well-equipped.',
    },
    {
      question: 'Where can I buy an adapter in Budapest?',
      answer:
        'MediaMarkt in Árkád or WestEnd City Center mall is the easiest option. You can also find adapters at the airport or in Auchan hypermarkets on the city outskirts.',
    },
  ],

  metaTitle: 'Hungary Power Plugs — Will You Need an Adapter in Budapest? (Types C & F)',
  metaDescription:
    'Hungary uses Type C and Type F plugs at 230V/50Hz. Find out if you need a travel adapter for Budapest, where to buy one locally, and tips for thermal bath trips.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Austria', slug: 'austria-electric-power-plug-types-do-you-need-an-adapter' },
    { name: 'Croatia', slug: 'croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip' },
    { name: 'Romania', slug: 'romania-electric-plug-types-will-you-need-an-adapter-in-romania' },
    { name: 'Czech Republic', slug: 'czech-republic-electric-plug-type-will-you-need-an-adapter' },
    { name: 'Serbia', slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade' },
  ],
};

export default hungary;

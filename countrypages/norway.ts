import type { CountryPlugData } from '../types';

const norway: CountryPlugData = {
  slug: 'norway-electric-plug-types-will-you-need-an-adapter-for-oslo',
  name: 'Norway',
  demonym: 'Norwegian',
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
    'Remote fjord cabins and Lofoten Islands accommodation may have limited outlets — bring a multi-port USB charger and a power bank for hiking days.',
    'Norway's electricity is nearly 100% hydroelectric, making it among the cleanest power grids in the world.',
  ],

  travelContext:
    'Norway spans from Oslo's urban buzz to remote Arctic fjords and the Lofoten Islands. Power infrastructure is excellent in cities and towns. Remote cabins (hytter) along hiking routes have power but often limited outlets. Vy (formerly NSB) trains on the Bergen and Nordland lines offer outlets at seats.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs won't fit Norwegian round sockets. Bring a Type A/B to C/F adapter. Most US electronics are dual-voltage.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs require an adapter. Same 230V voltage — no converter needed.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Norway uses identical plug standards to Germany and most of Europe. Plug in directly.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs don't fit. Bring an adapter; voltage is the same 230V.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'Elkjøp',
      type: 'electronics',
      city: 'Oslo',
      priceRange: '50–150 NOK',
      note: 'Norway's largest electronics chain with stores nationwide.',
    },
    {
      name: 'Power',
      type: 'electronics',
      priceRange: '50–130 NOK',
      note: 'Electronics retailer with locations in most Norwegian cities.',
    },
    {
      name: 'Clas Ohlson',
      type: 'electronics',
      priceRange: '50–120 NOK',
      note: 'Scandinavian hardware and accessories chain — good selection of adapters.',
    },
    {
      name: 'Narvesen',
      type: 'convenience',
      priceRange: '60–120 NOK',
      note: 'Kiosk chain at train stations and airports — may carry basic adapters.',
    },
    {
      name: 'Oslo Gardermoen Airport (OSL)',
      type: 'airport',
      city: 'Oslo',
      priceRange: '80–200 NOK',
      note: 'Electronics shops and Clas Ohlson outlet in the terminal sell travel adapters.',
    },
  ],

  airportName: 'Oslo Gardermoen Airport',
  airportCode: 'OSL',

  neighbors: [
    {
      name: 'Sweden',
      slug: 'sweden-electric-plug-types-will-you-need-an-adapter-for-sweden',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Finland',
      slug: 'finland-electric-plug-type-will-you-need-an-adapter-in-helsinki',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Denmark',
      slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2',
      plugTypes: ['C', 'E', 'F', 'K'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Denmark has its own Type K but most modern sockets accept C and F.',
    },
    {
      name: 'Russia',
      slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],

  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Norwegian hotels maintain high standards — outlets are plentiful in city hotels. Fjord-area cabins and Lofoten rorbuer (fisherman's cabins) have power but often only a few outlets, so bring a power strip or multi-port USB hub. Mountain DNT huts on hiking routes may have very limited or no power.',

  faqs: [
    {
      question: 'Do I need a power adapter for Norway?',
      answer:
        'Yes, if you're traveling from the US, UK, or Australia. Norway uses European-standard Type C and F plugs with round pins. Travelers from Germany or most of the EU do not need an adapter.',
    },
    {
      question: 'Can I charge devices in a Norwegian fjord cabin?',
      answer:
        'Most rental cabins and lodges in fjord areas have electricity with standard Schuko outlets, but the number of outlets may be limited. A small power strip or multi-port USB charger is highly recommended. DNT mountain huts may have no power at all.',
    },
    {
      question: 'Will my adapter work in both Norway and Sweden?',
      answer:
        'Yes — Norway and Sweden use identical plug types (C and F) at 230V/50Hz. One adapter serves both countries.',
    },
    {
      question: 'Do Norwegian trains have charging outlets?',
      answer:
        'Vy long-distance trains, including the popular Oslo–Bergen route, have Schuko outlets at most seats. The scenic Flåm Railway also has outlets on board.',
    },
    {
      question: 'Where can I buy an adapter in Oslo?',
      answer:
        'Elkjøp or Clas Ohlson in central Oslo are your best options. There's also a Clas Ohlson store at Oslo Gardermoen Airport if you need one immediately after landing.',
    },
  ],

  metaTitle: 'Norway Power Plugs — Will You Need an Adapter for Oslo? (Types C & F)',
  metaDescription:
    'Norway uses Type C and F plugs at 230V/50Hz. Find out if you need an adapter, tips for charging in fjord cabins, and where to buy adapters in Oslo.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Sweden', slug: 'sweden-electric-plug-types-will-you-need-an-adapter-for-sweden' },
    { name: 'Denmark', slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2' },
    { name: 'Finland', slug: 'finland-electric-plug-type-will-you-need-an-adapter-in-helsinki' },
    { name: 'Iceland', slug: 'iceland-electric-plug-types-will-you-need-an-adapter-in-reykjavik' },
  ],
};

export default norway;

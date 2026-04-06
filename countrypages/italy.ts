import type { CountryPlugData } from '../types';

const italy: CountryPlugData = {
  slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters',
  name: 'Italy',
  demonym: 'Italian',
  continent: 'Europe',
  region: 'Southern Europe',
  voltage: 230,
  frequency: 50,
  complexityTier: 'complex',
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
    'Italy has its own unique plug type — Type L — featuring three round pins in a line. It comes in two variants: the 10A version (narrower pin spacing) for small devices and the 16A version (wider spacing) for higher-draw appliances.',
    'Many modern Italian outlets are "Bipasso" or "Schuko hybrid" sockets that accept both Type L and Type C/F plugs in a single outlet, solving much of the compatibility headache.',
    'Older Italian buildings, especially in Rome, Florence, and southern Italy, may only have the small 10A Type L socket. A European Schuko plug won\'t physically fit these — you\'ll need a small adapter.',
    'Italy\'s electrical system uses per-apartment circuit breakers with a low power cap (typically 3kW for residential). Running too many high-draw devices at once will trip the breaker — a common surprise for visitors in Airbnbs.',
    'Vatican City, completely surrounded by Rome, uses the same Italian plug system. San Marino does as well.',
  ],
  travelContext:
    'Italy is one of Europe\'s top tourist destinations, and its unique Type L plug system adds a layer of complexity that other European countries don\'t have. The good news: modern hotels and recently renovated apartments usually have Bipasso or Schuko hybrid sockets that accept most European plugs. The bad news: older rentals and B&Bs in historic city centers may only have small Type L outlets. Travelers from outside Europe need an adapter regardless, while even European visitors should carry a small Type L adapter just in case.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs don\'t fit any Italian socket type. You need a US-to-Italy adapter (ideally one that fits both Type L and Schuko outlets). Modern electronics are dual-voltage and only need the adapter; older appliances like hair dryers may need a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are far too large for Italian outlets. Bring a UK-to-Europe adapter. Voltage is the same (230V/50Hz), so no converter is needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs won\'t fit Italian sockets. Bring an AU-to-Europe adapter. Same voltage, so no converter is necessary.',
    },
    {
      origin: 'Germany / France (Type C/E/F)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Your Type C Europlug will fit modern Italian Bipasso sockets. However, German Schuko (Type F) and French (Type E) grounded plugs may not fit older small Type L-only outlets. Carry a small adapter as a precaution for older buildings.',
    },
    {
      origin: 'Europe (Type C only)',
      originPlugTypes: 'C',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'The slim two-pin Europlug (Type C) fits into virtually all Italian outlets — both modern Bipasso sockets and the smaller Type L 10A sockets. No adapter needed for Type C devices.',
    },
    {
      origin: 'Switzerland',
      originPlugTypes: 'C, J',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Swiss Type C Europlugs work in Italian sockets, but Type J three-pin plugs do not fit Italian outlets. Bring an adapter for grounded Swiss devices.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Unieuro',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Italy\'s largest electronics chain. Good selection of adapters including universal and Type L-specific models.',
    },
    {
      name: 'MediaWorld',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Part of the MediaMarkt group. Found in major cities and shopping centers across Italy.',
    },
    {
      name: 'Euronics',
      type: 'electronics',
      priceRange: '€5–€12',
      note: 'Electronics retailer with locations throughout Italy, including smaller cities.',
    },
    {
      name: 'Rome Fiumicino Airport (FCO) shops',
      type: 'airport',
      city: 'Rome',
      priceRange: '€12–€25',
      note: 'Electronics and convenience kiosks in Terminals 1 and 3 sell adapters. Prices are higher than in-town stores.',
    },
  ],
  airportName: 'Rome Fiumicino Airport',
  airportCode: 'FCO',
  neighbors: [
    {
      name: 'France',
      slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'French Type C Europlugs work in Italy. Grounded Type E plugs fit modern Bipasso sockets but not older small Type L outlets.',
    },
    {
      name: 'Switzerland',
      slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you',
      plugTypes: ['C', 'J'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Swiss Type C works in Italy. Type J does not fit Italian sockets — bring an adapter.',
    },
    {
      name: 'Austria',
      slug: 'austria-electric-power-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Austrian Type C plugs work everywhere in Italy. Schuko (Type F) plugs fit modern outlets but may not fit older Type L-only sockets.',
    },
    {
      name: 'Slovenia',
      slug: 'slovenia-electric-plug-types-will-you-need-an-adapter-for-slovenia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Slovenian Type C/F plugs work in modern Italian outlets. Carry a small adapter for older buildings with Type L-only sockets.',
    },
    {
      name: 'Vatican City',
      slug: 'vatican-city-electric-plug-types-do-you-need-an-adapter-for-vatican-city',
      plugTypes: ['C', 'F', 'L'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Vatican City uses the same system as Italy. No adapter needed.',
    },
    {
      name: 'San Marino',
      slug: 'san-marino-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F', 'L'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'San Marino shares Italy\'s plug system. No adapter needed.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Italian hotels in the 3-star-and-above range almost always have modern Bipasso or Schuko hybrid outlets that accept standard European plugs. Budget hotels, agriturismos, and older Airbnbs — especially in historic city centers — may still have small Type L-only sockets. Front desks at larger hotels sometimes have loaner adapters, but don\'t count on it. Watch out for the 3kW power cap in residential rentals: running a hair dryer and an electric kettle simultaneously will likely trip the breaker.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all Apple and major Android chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'You only need a plug adapter. The small Europlug charger will fit all Italian outlets.',
    },
    {
      device: 'Laptop (MacBook, Dell, etc.)',
      dualVoltage: 'Yes — virtually all laptop power bricks handle 100–240V.',
      adapterOnly: 'Yes',
      note: 'Use an adapter, or buy a local Italian power cable. Be mindful of the 3kW apartment power cap in rentals.',
    },
    {
      device: 'Hair dryer / Flat iron',
      dualVoltage: 'Rarely — most US models are 120V only.',
      adapterOnly: 'No — you likely need a converter or dual-voltage model.',
      note: 'High-draw devices are the most likely to trip an Italian apartment\'s circuit breaker. Use the hotel\'s hair dryer when possible.',
    },
    {
      device: 'Electric razor / Toothbrush charger',
      dualVoltage: 'Usually yes — most are rated 100–240V.',
      adapterOnly: 'Yes',
      note: 'Low-draw devices with Europlug chargers will work in any Italian outlet without issues.',
    },
  ],
  faqs: [
    {
      question: 'What is a Type L plug?',
      answer:
        'Type L is Italy\'s unique plug type, featuring three round pins arranged in a line (not a triangle). It comes in two sizes: a 10A version with narrower pin spacing for small devices, and a 16A version with wider spacing for high-power appliances. Many modern Italian outlets accept both sizes.',
    },
    {
      question: 'Do I need a special adapter for Italy even if I\'m coming from Europe?',
      answer:
        'Maybe. Your Type C Europlug will fit everywhere in Italy. But if you have grounded European devices (Type E or F plugs), they may not fit older Italian sockets that only accept the small Type L. Modern hotels and renovated spaces usually have hybrid outlets that accept everything.',
    },
    {
      question: 'What is a Bipasso socket?',
      answer:
        'A Bipasso is an Italian socket design that accepts both Type L (Italian) and Type C (Europlug) plugs in a single outlet. Some versions, called "Schuko + Bipasso" or "universal" outlets, also accept the larger Schuko (Type F) plug. These are now standard in modern Italian construction.',
    },
    {
      question: 'Why does the power keep tripping in my Italian Airbnb?',
      answer:
        'Italian residential electrical contracts typically limit power draw to 3kW (sometimes 4.5kW or 6kW in newer buildings). If you run multiple high-draw appliances simultaneously — like a hair dryer, AC unit, and electric kettle — you\'ll exceed the limit and trip the main breaker. Stagger your usage.',
    },
    {
      question: 'Will my US phone charger work in Italy?',
      answer:
        'Yes, with a plug adapter. All modern smartphone chargers accept 100–240V, so they handle Italy\'s 230V without a converter. You just need an adapter to physically plug into the Italian socket.',
    },
    {
      question: 'Where can I buy an adapter in Rome?',
      answer:
        'Unieuro and MediaWorld stores in Rome carry travel adapters. You can also find basic adapters at supermarkets, newsstands, and tabacchi shops. At Fiumicino Airport, electronics kiosks sell them — expect to pay more than in town.',
    },
    {
      question: 'Do I need a different adapter for Vatican City?',
      answer:
        'No. Vatican City uses the same electrical system as Italy (Type C, F, and L at 230V/50Hz). Whatever adapter works in Rome works in Vatican City.',
    },
    {
      question: 'Are Italian hotel outlets compatible with European Schuko plugs?',
      answer:
        'In most modern hotels, yes. They\'ve upgraded to Bipasso or Schuko hybrid outlets that accept standard European plugs. Older budget hotels or B&Bs may still have small Type L-only sockets where a Schuko plug won\'t fit.',
    },
  ],
  metaTitle: 'Italy Power Plugs & Outlets: Type L Explained + Adapter Guide (2025)',
  metaDescription:
    'Italy uses Type C, F, and its unique Type L plugs at 230V/50Hz. Learn about Bipasso sockets, when you need an adapter, and where to buy one in Italy.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
    { name: 'Switzerland', slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you' },
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Vatican City', slug: 'vatican-city-electric-plug-types-do-you-need-an-adapter-for-vatican-city' },
    { name: 'Slovenia', slug: 'slovenia-electric-plug-types-will-you-need-an-adapter-for-slovenia' },
  ],
};

export default italy;

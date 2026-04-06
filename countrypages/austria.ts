import type { CountryPlugData } from '../types';

const austria: CountryPlugData = {
  slug: 'austria-electric-power-plug-types-do-you-need-an-adapter',
  name: 'Austria',
  demonym: 'Austrian',
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
    'Austria shares identical plug standards with Germany, so devices bought in one country work seamlessly in the other.',
    'Many Austrian hotels — especially Alpine ski lodges — provide USB charging ports built into bedside lamps or desks.',
  ],

  travelContext:
    'Austria is a year-round destination split between Vienna's cultural scene and the Alpine ski and hiking regions. Power infrastructure is excellent everywhere from city hotels to remote mountain huts. Trains (ÖBB) offer Schuko outlets at most seats in long-distance services.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'American flat-pin plugs will not fit Austrian round-pin sockets. You need a Type A/B to Type C/F adapter. Most US electronics (phone chargers, laptops) are dual-voltage (100–240V), so no converter is needed — just the adapter.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'The large three-rectangular-pin Type G plug does not fit Austrian sockets. Bring a Type G to Type F adapter. Voltage is the same 230V, so no converter required.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Austria uses the same Schuko (Type F) and Europlug (Type C) standards as Germany. Your plugs will work directly.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs are incompatible with Austrian sockets. Pack a Type I to Type C/F adapter. Voltage is similar (230V), so most devices work without a converter.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'MediaMarkt',
      type: 'electronics',
      city: 'Vienna',
      priceRange: '€5–€15',
      note: 'Large electronics chain with stores across Austria. Travel adapters in the accessories aisle.',
    },
    {
      name: 'Saturn',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Sister chain to MediaMarkt with similar product selection.',
    },
    {
      name: 'Hartlauer',
      type: 'electronics',
      priceRange: '€6–€14',
      note: 'Austrian electronics and photo retailer found in most cities.',
    },
    {
      name: 'Interspar',
      type: 'supermarket',
      priceRange: '€4–€10',
      note: 'Large supermarket chain that stocks basic travel adapters near the electronics section.',
    },
    {
      name: 'Vienna Schwechat Airport (VIE)',
      type: 'airport',
      city: 'Vienna',
      priceRange: '€8–€20',
      note: 'Electronics kiosks in the arrivals and departures area carry universal adapters at a premium.',
    },
  ],

  airportName: 'Vienna Schwechat Airport',
  airportCode: 'VIE',

  neighbors: [
    {
      name: 'Germany',
      slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Switzerland',
      slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you',
      plugTypes: ['C', 'J'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Switzerland uses Type J (grounded) instead of Type F. Ungrounded Type C plugs fit, but grounded Schuko plugs need an adapter.',
    },
    {
      name: 'Italy',
      slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters',
      plugTypes: ['C', 'F', 'L'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Italy also uses Type L, but Type C and F are widespread — most devices work without an adapter.',
    },
    {
      name: 'Slovenia',
      slug: 'slovenia-electric-plug-types-will-you-need-an-adapter-for-slovenia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Hungary',
      slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Czech Republic',
      slug: 'czech-republic-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Czech Republic uses Type E instead of Type F, but Type E and F sockets are cross-compatible in practice.',
    },
    {
      name: 'Slovakia',
      slug: 'slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Slovakia uses Type E grounding. Type C and most Schuko plugs still fit.',
    },
    {
      name: 'Liechtenstein',
      slug: 'liechtenstein-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'J'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Liechtenstein follows Swiss standards with Type J. Type C works but grounded plugs may need an adapter.',
    },
  ],

  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Austrian hotels from budget guesthouses to luxury Alpine resorts generally provide Schuko outlets in good condition. Higher-end hotels increasingly feature built-in USB ports. Front desks at major chains often lend adapters on request.',

  faqs: [
    {
      question: 'Do I need a power adapter for Austria?',
      answer:
        'If you are coming from the US, UK, Australia, or any country that does not use Type C or Type F plugs, yes — you need an adapter. Travelers from Germany and most of mainland Europe can use their plugs directly.',
    },
    {
      question: 'Can I use my US phone charger in Austria without a converter?',
      answer:
        'You need an adapter (US flat pins won't fit Austrian round sockets), but most modern phone chargers are dual-voltage (check the label for "100–240V"). If yours is dual-voltage, an adapter alone is sufficient — no converter required.',
    },
    {
      question: 'Are power outlets on Austrian trains?',
      answer:
        'Yes. ÖBB long-distance trains (Railjet, Intercity) have Schuko outlets at most seats. Regional trains may have fewer outlets, so a power bank is helpful for longer regional journeys.',
    },
    {
      question: 'Will my adapter from Germany work in Austria?',
      answer:
        'You don't need an adapter at all. Austria and Germany share identical plug and socket standards (Type C and Type F at 230V/50Hz).',
    },
    {
      question: 'Can I buy an adapter at Vienna Airport?',
      answer:
        'Yes. Electronics shops and convenience kiosks in both the arrivals and departures areas at Vienna Schwechat (VIE) sell universal travel adapters, typically for €8–€20.',
    },
  ],

  metaTitle: 'Austria Power Plugs — Do You Need an Adapter? (Types C & F)',
  metaDescription:
    'Austria uses Type C and Type F plugs at 230V/50Hz. Find out if you need a travel adapter, where to buy one in Vienna, and what to expect at Austrian hotels.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Switzerland', slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
    { name: 'Slovenia', slug: 'slovenia-electric-plug-types-will-you-need-an-adapter-for-slovenia' },
    { name: 'Hungary', slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest' },
  ],
};

export default austria;

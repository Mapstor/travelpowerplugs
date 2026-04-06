import type { CountryPlugData } from '../types';

const belgium: CountryPlugData = {
  slug: 'belgium-electric-plug-types-do-you-need-an-adapter',
  name: 'Belgium',
  demonym: 'Belgian',
  continent: 'Europe',
  region: 'Western Europe',
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
    'Belgium uses Type E (French-style) rather than Type F (Schuko). This matches France and differs from neighboring Germany/Netherlands, but Type E and F are cross-compatible so it's a non-issue in practice.',
    'Brussels is home to the EU institutions — hotels in the European Quarter are accustomed to international travelers and often stock multi-standard adapters at reception.',
  ],

  travelContext:
    'Belgium packs Brussels, Bruges, Ghent, and Antwerp into a compact country easily traversed by train in under two hours. Power infrastructure is modern throughout. SNCB/NMBS trains offer outlets on most intercity services. Brussels serves as a transit hub for Eurostar (to London) and Thalys/Eurostar (to Paris, Amsterdam).',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs require a Type A/B to C/E adapter. Most US electronics handle 230V natively.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs need an adapter. Same 230V — no converter. Eurostar travelers arriving from London should bring an adapter.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs fit directly. Type F (Schuko) plugs also work in Belgian Type E sockets due to cross-compatibility.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs are incompatible. Bring an adapter; voltage matches.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'MediaMarkt',
      type: 'electronics',
      city: 'Brussels',
      priceRange: '€5–€15',
      note: 'Electronics chain with stores in major Belgian cities and shopping centers.',
    },
    {
      name: 'Fnac Belgium',
      type: 'electronics',
      city: 'Brussels',
      priceRange: '€6–€15',
      note: 'French electronics and media chain with Belgian locations — travel adapters in the accessories section.',
    },
    {
      name: 'Krëfel',
      type: 'electronics',
      priceRange: '€5–€12',
      note: 'Belgian electronics retailer with nationwide coverage.',
    },
    {
      name: 'Colruyt',
      type: 'supermarket',
      priceRange: '€4–€10',
      note: 'Belgian discount supermarket — some locations carry basic electronics accessories.',
    },
    {
      name: 'Brussels Airport (BRU)',
      type: 'airport',
      city: 'Brussels',
      priceRange: '€8–€20',
      note: 'Travel accessories shops in the departure hall sell universal adapters.',
    },
  ],

  airportName: 'Brussels Airport',
  airportCode: 'BRU',

  neighbors: [
    {
      name: 'France',
      slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Germany',
      slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Germany uses Type F, Belgium uses Type E. Cross-compatible — no adapter needed.',
    },
    {
      name: 'Netherlands',
      slug: 'netherlands-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Netherlands uses Type F. Cross-compatible with Belgian Type E.',
    },
    {
      name: 'Luxembourg',
      slug: 'luxembourg-electric-plug-types-will-you-need-an-adapter-in-luxembourg',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
    },
  ],

  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Belgian hotels across all price ranges have modern European sockets. Brussels hotels in the EU Quarter are especially well-prepared for international guests — many keep loaner adapters at the front desk. Bruges and Ghent boutique hotels in historic buildings have fully updated wiring despite their medieval facades.',

  faqs: [
    {
      question: 'Do I need a travel adapter for Belgium?',
      answer:
        'If you're from the US, UK, or Australia — yes. Belgium uses Type C and E round-pin sockets. Travelers from France use identical plugs. Those from Germany and the Netherlands can use their Schuko plugs without an adapter thanks to Type E/F cross-compatibility.',
    },
    {
      question: 'Do I need a different adapter for Belgium and France?',
      answer:
        'No — Belgium and France use the same plug types (C and E). One adapter works for both countries.',
    },
    {
      question: 'Can I buy an adapter at Brussels Airport?',
      answer:
        'Yes. Travel accessories shops in the departure area at Brussels Airport (BRU) stock universal adapters, typically €8–€20.',
    },
    {
      question: 'Are there outlets on Belgian trains?',
      answer:
        'SNCB/NMBS intercity trains have outlets on most newer rolling stock. Thalys and Eurostar trains connecting Brussels to Paris, Amsterdam, and London also have outlets at seats.',
    },
    {
      question: 'I'm taking the Eurostar from London to Brussels — do I need an adapter?',
      answer:
        'Yes. The UK uses Type G plugs and Belgium uses Type E. Bring a G-to-E or G-to-F adapter. Note that Eurostar trains have outlets compatible with both UK and European plugs on board, but you'll need the adapter once in Belgium.',
    },
  ],

  metaTitle: 'Belgium Power Plugs — Do You Need an Adapter? (Types C & E)',
  metaDescription:
    'Belgium uses Type C and E plugs at 230V/50Hz. Find out if you need an adapter for Brussels or Bruges, Eurostar tips, and where to buy adapters locally.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
    { name: 'Netherlands', slug: 'netherlands-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Luxembourg', slug: 'luxembourg-electric-plug-types-will-you-need-an-adapter-in-luxembourg' },
  ],
};

export default belgium;

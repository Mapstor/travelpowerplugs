import type { CountryPlugData } from '@/types';

const france: CountryPlugData = {
  slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris',
  name: 'France',
  demonym: 'French',
  continent: 'Europe',
  region: 'Western Europe',
  voltage: 230,
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
    'France uses Type E, where the grounding pin protrudes FROM the socket rather than from the plug — the opposite of most grounding systems worldwide.',
    'Type E (French) and Type F (German Schuko) are designed to be cross-compatible. German plugs work in French sockets and vice versa, making travel between the two countries seamless.',
    'Older French buildings, especially Parisian apartments from the pre-war era, may still have non-recessed outlets that look quite different from modern sockets. They still accept the same plug types.',
    'France was one of the first countries to mandate childproof shutters on all new socket installations, a safety feature now common across the EU.',
    'French electrical standards require separate circuits for high-draw appliances like ovens and washing machines, so kitchen outlets may look different from living room ones.',
  ],
  travelContext:
    'France is the world\'s most visited country, welcoming over 90 million international tourists each year. Its electrical grid is modern and dependable, running on the standard European 230V/50Hz. Travelers from Germany, Spain, and most of Europe can plug in without a second thought. Visitors from the US, UK, or Australia need a plug adapter but generally not a voltage converter for their everyday electronics.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs won\'t fit French round-pin sockets. Bring a US-to-Type E/F adapter. Modern electronics (phones, laptops, cameras) are dual-voltage and just need the adapter. Older single-voltage appliances like hair dryers need a converter or a dual-voltage replacement.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are too large for French sockets. You\'ll need a UK-to-Type E adapter. Since both countries use 230V/50Hz, no voltage converter is needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian angled flat pins don\'t fit French sockets. Bring an AU-to-Type E adapter. Voltage is the same (230V/50Hz) so all devices work with just the adapter.',
    },
    {
      origin: 'Germany (Type F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'German Schuko (Type F) plugs are cross-compatible with French Type E sockets. Everything plugs in directly — no adapter needed.',
    },
    {
      origin: 'Europe (Type C)',
      originPlugTypes: 'C',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'The standard two-pin Europlug (Type C) fits directly into French outlets. No adapter or converter needed.',
    },
    {
      origin: 'Switzerland',
      originPlugTypes: 'C, J',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Swiss Type C Europlugs fit French sockets, but the three-pin Type J plug does not fit a Type E socket. Bring a J-to-E adapter for grounded Swiss appliances. Voltage is the same.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Fnac',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Major French electronics and media chain with stores in most cities. Travel adapters are in the accessories section.',
    },
    {
      name: 'Darty',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Appliance and electronics retailer found across France. Good selection of adapters and multi-plug options.',
    },
    {
      name: 'Boulanger',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Electronics retailer with locations in major French cities and shopping centers.',
    },
    {
      name: 'Carrefour',
      type: 'supermarket',
      priceRange: '€5–€12',
      note: 'France\'s largest supermarket chain. Hypermarkets carry travel adapters in the electronics aisle.',
    },
    {
      name: 'Paris CDG Airport shops',
      type: 'airport',
      city: 'Paris',
      priceRange: '€12–€25',
      note: 'Electronics kiosks in Terminals 1, 2, and 3 sell adapters at airport-markup prices. Available both landside and airside.',
    },
  ],
  airportName: 'Paris Charles de Gaulle Airport',
  airportCode: 'CDG',
  neighbors: [
    {
      name: 'Germany',
      slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'German Schuko (Type F) and French Type E are cross-compatible. No adapter needed.',
    },
    {
      name: 'Belgium',
      slug: 'belgium-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Belgium uses the same Type E system as France. No adapter needed.',
    },
    {
      name: 'Switzerland',
      slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you',
      plugTypes: ['C', 'J'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Swiss Type J sockets won\'t accept French Type E/F plugs. You\'ll need an adapter for grounded devices.',
    },
    {
      name: 'Italy',
      slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters',
      plugTypes: ['C', 'F', 'L'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Type C Europlugs work in both countries. Italian Type L sockets may not accept French grounded plugs — bring an adapter if needed.',
    },
    {
      name: 'Spain',
      slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Spain uses Type C/F (Schuko), which is cross-compatible with French Type E. No adapter needed.',
    },
    {
      name: 'United Kingdom',
      slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'The UK uses Type G — completely different plug shape. An adapter is needed in both directions. Accessible via Eurostar.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'French hotels from 3 stars upward almost always provide a hair dryer and increasingly offer USB charging ports at the bedside. International chain hotels (Accor, Marriott, Hilton) may keep a small stock of loaner adapters at reception, but independent hotels and guesthouses usually don\'t. Parisian Airbnbs in older buildings may have fewer outlets than you\'d expect — bringing a compact power strip can be handy.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all Apple and major Android chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'Only a plug adapter is needed. No voltage converter required.',
    },
    {
      device: 'Laptop (MacBook, Dell, etc.)',
      dualVoltage: 'Yes — virtually all laptop power bricks handle 100–240V.',
      adapterOnly: 'Yes',
      note: 'Use a plug adapter, or buy a local power cable with a Type E/F plug.',
    },
    {
      device: 'Hair dryer / Flat iron',
      dualVoltage: 'Rarely — most US models are 120V only.',
      adapterOnly: 'No — you likely need a converter or dual-voltage model.',
      note: 'Check your label. If it says 120V only, do not plug it into a 230V French outlet. Use the hotel\'s hair dryer or buy a local one.',
    },
    {
      device: 'Electric razor / Toothbrush charger',
      dualVoltage: 'Usually yes — most are rated 100–240V.',
      adapterOnly: 'Yes',
      note: 'Verify on the label, but most modern models handle French voltage just fine with an adapter.',
    },
  ],
  faqs: [
    {
      question: 'Do I need an adapter for France?',
      answer:
        'If you\'re coming from the US, UK, or Australia — yes. France uses Type C and Type E plugs with round pins. If you\'re from Germany, Spain, or most of continental Europe, your plugs will fit directly.',
    },
    {
      question: 'What is a Type E plug?',
      answer:
        'Type E is the French grounding standard. Unlike most grounded plugs where the ground pin is on the plug itself, Type E has a grounding pin that sticks out from the socket. The plug has a hole to receive it. This system is used in France, Belgium, Poland, and several other countries.',
    },
    {
      question: 'Will my German plugs work in France?',
      answer:
        'Yes. German Type F (Schuko) plugs are designed to be cross-compatible with French Type E sockets. The Schuko plug\'s grounding clips make contact with the French socket\'s grounding pin. No adapter needed.',
    },
    {
      question: 'Can I charge my phone in France without a converter?',
      answer:
        'Yes. All modern smartphone chargers accept 100–240V input, so they\'re compatible with France\'s 230V power. You just need a plug adapter to physically fit the socket — no voltage converter necessary.',
    },
    {
      question: 'Are French outlets the same as in the rest of Europe?',
      answer:
        'Partially. The basic two-pin Europlug (Type C) works across France and most of Europe. But France\'s grounded socket (Type E) differs from the German Schuko (Type F) in how the ground connection works — though the two are cross-compatible by design.',
    },
    {
      question: 'Where can I buy an adapter in Paris?',
      answer:
        'Fnac and Darty stores throughout Paris carry travel adapters. For a budget option, try the electronics aisle at any Carrefour or Monoprix supermarket. If you land at CDG, electronics kiosks in the terminals sell them too — expect higher prices.',
    },
    {
      question: 'Will my UK plug work in France via the Eurostar?',
      answer:
        'No. UK Type G plugs are completely incompatible with French sockets. Bring a UK-to-Europe adapter before boarding the Eurostar. The voltage is the same (230V), so only a plug adapter is needed.',
    },
    {
      question: 'Do French hotels have hair dryers?',
      answer:
        'Most hotels rated 3 stars and above include a hair dryer in the bathroom. Budget accommodations and Airbnbs may not, so check your listing. If you bring your own, make sure it\'s dual-voltage (120–240V) or rated for 230V.',
    },
  ],
  metaTitle: 'France Power Plugs & Outlets: Do You Need an Adapter in Paris? (2025)',
  metaDescription:
    'France uses Type C and Type E plugs at 230V/50Hz. Find out if you need an adapter for Paris and beyond, where to buy one, and how French outlets differ.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Belgium', slug: 'belgium-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Spain', slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
    { name: 'Switzerland', slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you' },
  ],
};

export default france;

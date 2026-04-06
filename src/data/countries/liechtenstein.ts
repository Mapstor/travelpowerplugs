import type { CountryPlugData } from '@/types';

const liechtenstein: CountryPlugData = {
  slug: 'liechtenstein-electric-plug-types-will-you-need-an-adapter',
  name: 'Liechtenstein',
  demonym: 'Liechtensteiner',
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
      id: 'type-j',
      name: 'Type J',
      subtitle: 'Swiss',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 4.0,
      pinSpacing: 19,
      ratedAmps: 10,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.063,
      bodyWidth: 1.2,
      bodyHeight: 1.0,
      bodyCornerRadius: 0.2,
      noseRadius: 0.45,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'Liechtenstein uses the Swiss electrical system (Type J) with Type C compatibility. The entire country is 160 km² so there is complete consistency across all locations.',
  ],
  travelContext:
    'Liechtenstein is a microstate tucked between Switzerland and Austria. Most visitors arrive from one of those two countries. There is no airport and no train station — you enter by bus or car. The electrical system is identical to Switzerland, so anyone already equipped for Swiss travel is set.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs won\'t fit Swiss Type J sockets. At 230V, non-dual-voltage devices also need a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK plugs need a Type G to J adapter. Voltage matches.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs fit Swiss Type J sockets. Type F (Schuko) plugs are too wide for recessed Type J sockets — you may need an adapter for grounded Schuko devices.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    { name: 'Electronics shops in Vaduz', type: 'electronics', city: 'Vaduz', priceRange: 'CHF 10–25', note: 'Very limited selection — a couple of small shops in the capital' },
    { name: 'Buy in Switzerland before crossing', type: 'electronics', note: 'Best to purchase an adapter at a Swiss retailer like Interdiscount or Migros before entering Liechtenstein' },
  ],
  neighbors: [
    { name: 'Switzerland', slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you', plugTypes: ['C', 'J'], voltage: 230, sameAsSubject: 'identical' },
    { name: 'Austria', slug: 'austria-electric-power-plug-types-do-you-need-an-adapter', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'partially', adapterNote: 'Austria uses Type F instead of J — Type C works in both, but grounded plugs differ' },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Liechtenstein has a handful of hotels and guesthouses, mostly in Vaduz and the surrounding villages. Standards are high (Swiss-level quality). Some hotels can lend adapters at reception. USB ports are increasingly common in newer renovations.',
  faqs: [
    {
      question: 'Is Liechtenstein\'s electrical system the same as Switzerland\'s?',
      answer:
        'Identical. Type C and Type J plugs, 230V, 50Hz. If you\'re equipped for Switzerland, you\'re equipped for Liechtenstein.',
    },
    {
      question: 'Will my German/Austrian Schuko plug work in Liechtenstein?',
      answer:
        'Type C (ungrounded Europlug) works fine. The larger Type F Schuko plug may not fit into recessed Swiss Type J sockets. A small C/F-to-J adapter solves this for a few francs.',
    },
    {
      question: 'Where is the nearest place to buy electronics if I can\'t find an adapter in Liechtenstein?',
      answer:
        'Buchs or Sargans in Switzerland are the nearest towns with proper electronics shops and are a short bus ride from Vaduz. Feldkirch in Austria is also close.',
    },
  ],
  metaTitle: 'Liechtenstein Power Plugs — Types C & J | Swiss System Adapter Guide',
  metaDescription:
    'Liechtenstein uses Swiss-type plugs (C and J) at 230V/50Hz. US, UK, and Australian travelers need an adapter. Learn about Schuko compatibility, local options, and tips.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Switzerland', slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you' },
    { name: 'Austria', slug: 'austria-electric-power-plug-types-do-you-need-an-adapter' },
  ],
};

export default liechtenstein;

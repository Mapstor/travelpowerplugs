import type { CountryPlugData } from '@/types';

const switzerland: CountryPlugData = {
  slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you',
  name: 'Switzerland',
  demonym: 'Swiss',
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
    'Switzerland uses its own Type J plug featuring three round pins arranged in a triangle. It is NOT the same as the standard European Schuko (Type F) or French (Type E) plug, despite Switzerland being surrounded by countries that use those systems.',
    'The slim two-pin Europlug (Type C) fits Swiss Type J sockets, but the larger German Schuko (Type F) plug is physically too wide for the narrow recessed Swiss socket — a common surprise for visitors from neighboring countries.',
    'Many Swiss hotels and modern buildings now install "combo" sockets that accept both Type J and Schuko (Type F) plugs, but you can\'t rely on finding these everywhere.',
    'Switzerland is not in the EU and maintains its own electrical standard (SEV 1011), which is why it hasn\'t adopted the EU-harmonized Schuko system.',
    'Liechtenstein, which shares a customs union with Switzerland, uses the same Type J system.',
  ],
  travelContext:
    'Switzerland\'s unique Type J plug system catches many European travelers off guard. While the country is geographically surrounded by Germany, France, Italy, and Austria — all of which use different plug types — Swiss sockets follow their own standard. The slim Europlug (Type C) works fine, so small chargers and ungrounded devices plug right in. But if you\'re bringing grounded appliances with German, French, or Italian plugs, you\'ll need an adapter. Travelers from the US, UK, and Australia need an adapter regardless.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs don\'t fit Swiss round-pin sockets. You need a US-to-Type J adapter. Modern electronics are dual-voltage and only need the adapter; older single-voltage appliances may need a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are far too large for Swiss sockets. Bring a UK-to-Type J adapter. Same voltage (230V/50Hz), no converter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs won\'t fit Swiss sockets. Bring an AU-to-Type J adapter. Voltage is the same, so no converter is necessary.',
    },
    {
      origin: 'Germany (Type F)',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Your Type C Europlug fits Swiss sockets. But the larger Schuko (Type F) grounded plug is too wide for the recessed Swiss Type J socket. You\'ll need a Schuko-to-Type J adapter for grounded devices. No converter needed — same voltage.',
    },
    {
      origin: 'France (Type E)',
      originPlugTypes: 'C, E',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'French Type C Europlugs fit Swiss sockets. But the grounded Type E plug does not fit Swiss Type J sockets. Bring an adapter for grounded French devices.',
    },
    {
      origin: 'Italy (Type L)',
      originPlugTypes: 'C, F, L',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Italian Type C Europlugs fit Swiss sockets. Type L and Type F plugs do not — you\'ll need an adapter for those. Same voltage throughout.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Interdiscount',
      type: 'electronics',
      priceRange: 'CHF 8–20',
      note: 'Switzerland\'s main electronics chain. Carries a range of travel adapters including Swiss-specific models.',
    },
    {
      name: 'Digitec Galaxus',
      type: 'electronics',
      priceRange: 'CHF 5–25',
      note: 'Switzerland\'s largest online retailer with same-day pickup at many locations. Great selection of adapters.',
    },
    {
      name: 'Coop City',
      type: 'supermarket',
      priceRange: 'CHF 10–20',
      note: 'Department store arm of the Coop cooperative. Electronics sections carry adapters.',
    },
    {
      name: 'Migros',
      type: 'supermarket',
      priceRange: 'CHF 8–15',
      note: 'Switzerland\'s largest retailer. Larger Migros stores stock basic travel adapters in the household section.',
    },
    {
      name: 'Zurich Airport (ZRH) shops',
      type: 'airport',
      city: 'Zurich',
      priceRange: 'CHF 15–35',
      note: 'Electronics and travel shops in the arrivals and departures area sell adapters. Expect Swiss-level airport pricing.',
    },
  ],
  airportName: 'Zurich Airport',
  airportCode: 'ZRH',
  neighbors: [
    {
      name: 'Germany',
      slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'German Schuko (Type F) plugs are too wide for Swiss Type J sockets. You\'ll need an adapter for grounded German devices.',
    },
    {
      name: 'France',
      slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'French grounded Type E plugs don\'t fit Swiss sockets. Bring an adapter. Ungrounded Europlugs work fine.',
    },
    {
      name: 'Italy',
      slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters',
      plugTypes: ['C', 'F', 'L'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Italian Type L and Type F plugs don\'t fit Swiss sockets. Type C Europlugs work. Adapters needed for grounded devices in both directions.',
    },
    {
      name: 'Austria',
      slug: 'austria-electric-power-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Same situation as Germany — Austrian Schuko plugs don\'t fit Swiss sockets. Adapter needed for grounded devices.',
    },
    {
      name: 'Liechtenstein',
      slug: 'liechtenstein-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'J'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Liechtenstein uses the same Swiss Type J system. No adapter needed.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Swiss hotels are well aware that their plug system trips up visitors, and many — especially 3-star and above — keep loaner adapters at reception. Higher-end hotels and international chains increasingly install combo sockets that accept both Type J and Schuko plugs. USB ports at bedsides are becoming standard. Hair dryers are provided in virtually all hotels. Budget hostels and mountain chalets may be less well-equipped, so bringing your own adapter remains the safest option.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all Apple and major Android chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'Most compact phone chargers use the slim Europlug (Type C), which fits Swiss sockets directly. If yours has a larger grounded plug, you\'ll need an adapter.',
    },
    {
      device: 'Laptop (MacBook, Dell, etc.)',
      dualVoltage: 'Yes — virtually all laptop power bricks handle 100–240V.',
      adapterOnly: 'Yes',
      note: 'The Europlug end of many laptop cords fits Swiss sockets. If your cord uses a Schuko or UK plug, bring an adapter or buy a Swiss power cable locally.',
    },
    {
      device: 'Hair dryer / Flat iron',
      dualVoltage: 'Rarely — most US models are 120V only.',
      adapterOnly: 'No — you likely need a converter or dual-voltage model.',
      note: 'Check the label. Swiss hotels almost always provide hair dryers, so consider leaving yours at home.',
    },
    {
      device: 'Electric razor / Toothbrush charger',
      dualVoltage: 'Usually yes — most are rated 100–240V.',
      adapterOnly: 'Yes',
      note: 'Most compact chargers for these devices use Europlugs that fit Swiss sockets without an adapter.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a special adapter for Switzerland?',
      answer:
        'It depends on your plug type. The slim two-pin Europlug (Type C) fits Swiss outlets directly. But German Schuko (Type F), French (Type E), Italian (Type L), UK (Type G), US (Type A/B), and Australian (Type I) plugs all need an adapter. Switzerland uses its own Type J socket, which is narrower than the European Schuko standard.',
    },
    {
      question: 'Why doesn\'t my European plug fit in Switzerland?',
      answer:
        'Switzerland is not in the EU and uses its own electrical standard (SEV 1011) with the Type J socket. The recessed Swiss outlet is narrower than the Schuko socket used in Germany, France, and most of Europe. Your two-pin Europlug fits, but the larger grounded Schuko plug is too wide.',
    },
    {
      question: 'Can I use a German Schuko plug in Switzerland?',
      answer:
        'Not in a standard Swiss socket — the Schuko plug is too wide. However, some newer Swiss hotels and buildings install combo sockets that accept both Type J and Schuko plugs. You can\'t rely on this, so bring a Schuko-to-Swiss adapter.',
    },
    {
      question: 'Will my phone charger work in Switzerland?',
      answer:
        'Most likely yes without an adapter. Phone chargers from Apple and most Android brands use the slim Europlug (Type C), which fits Swiss Type J sockets. If your charger has a larger grounded plug, you\'ll need a small adapter.',
    },
    {
      question: 'Where can I buy a Swiss adapter?',
      answer:
        'Interdiscount and Digitec Galaxus are the main electronics retailers. Coop City and larger Migros stores also stock them. At Zurich Airport, travel shops sell adapters — but at premium Swiss prices. Expect to pay CHF 8–20 in town, or CHF 15–35 at the airport.',
    },
    {
      question: 'Do Swiss hotels provide adapters for guests?',
      answer:
        'Many do, especially mid-range and higher hotels. Swiss hoteliers know their plug system is unusual and often keep loaner adapters at the front desk. However, supply is limited — if you\'re arriving late or the hotel is full, they may be out. Bringing your own is the reliable choice.',
    },
    {
      question: 'Does Liechtenstein use the same plugs as Switzerland?',
      answer:
        'Yes. Liechtenstein shares a customs union with Switzerland and uses the identical Type J plug system at 230V/50Hz. Whatever adapter you bring for Switzerland works in Liechtenstein.',
    },
    {
      question: 'Is the voltage in Switzerland different from the rest of Europe?',
      answer:
        'No — Switzerland uses 230V at 50Hz, the same as the EU. The plug shape is different, but the voltage is standard. You only need a plug adapter, not a voltage converter (unless your device is single-voltage, like some US hair dryers).',
    },
  ],
  metaTitle: 'Switzerland Power Plugs & Outlets: Type J Adapter Guide (2025)',
  metaDescription:
    'Switzerland uses its own Type J plugs at 230V/50Hz — different from the rest of Europe. Find out if you need an adapter and where to buy one.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
    { name: 'Austria', slug: 'austria-electric-power-plug-types-do-you-need-an-adapter' },
    { name: 'Liechtenstein', slug: 'liechtenstein-electric-plug-types-will-you-need-an-adapter' },
  ],
};

export default switzerland;

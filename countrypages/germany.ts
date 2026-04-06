import type { CountryPlugData } from '../types';

const germany: CountryPlugData = {
  slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
  name: 'Germany',
  demonym: 'German',
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
    'The Schuko (Type F) plug was invented in Germany in 1926 by Albert Büttner and remains the country\'s standard to this day.',
    'German Type F sockets feature a deeply recessed design that prevents accidental contact with live pins — one of the safest outlet designs in the world.',
    'Type F (Schuko) and Type E (French) sockets are cross-compatible: a German Schuko plug fits into a French Type E socket and vice versa, making travel between the two countries seamless.',
    'Germany mandates CEE 7/4 (Schuko) sockets in all new construction, though older buildings may still have ungrounded Type C-only outlets.',
    'Many German hotels and airports now include USB charging ports built into power outlets or bedside units, reducing the need for adapters for phone charging.',
  ],
  travelContext:
    'Germany is one of Europe\'s most visited countries, drawing millions of business travelers and tourists each year. Its electrical infrastructure is modern and extremely reliable. If you\'re coming from another European country that uses Type C or F, you won\'t need any adapter at all. Travelers from the US, UK, or Australia will need an adapter but not a voltage converter for most modern electronics.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs (Type A/B) do not fit German round-pin sockets. You\'ll need a US-to-Schuko adapter. Most modern electronics (laptops, phones, cameras) are dual-voltage (100–240V) and only need the adapter. Check the label on older appliances — hair dryers, curling irons, and similar devices may require a voltage converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are much larger and will not fit German sockets. You need a UK-to-Schuko adapter. Voltage is the same (230V/50Hz) so no converter is needed for any device.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs have angled flat pins that won\'t fit German sockets. Bring an AU-to-Schuko adapter. Voltage is identical (230V/50Hz) so all your devices will work with just the adapter.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'If your home country uses Type C (Europlug) or Type F (Schuko), your plugs will fit directly into German outlets. No adapter or converter needed.',
    },
    {
      origin: 'France (Type E)',
      originPlugTypes: 'C, E',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'French Type E plugs are cross-compatible with German Type F sockets. Your French appliances will work without any adapter.',
    },
    {
      origin: 'Switzerland',
      originPlugTypes: 'C, J',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Swiss Type C Europlugs fit German sockets, but the three-pin Type J plug does not fit a Schuko socket. If you have grounded Swiss appliances, bring a J-to-F adapter. Voltage is the same.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Saturn',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Large electronics chain found in most German cities; carries a wide selection of travel adapters.',
    },
    {
      name: 'MediaMarkt',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Germany\'s biggest electronics retailer with stores nationwide. Adapter aisle is usually near cables and accessories.',
    },
    {
      name: 'dm',
      type: 'pharmacy',
      priceRange: '€5–€10',
      note: 'Popular drugstore chain that stocks basic travel adapters alongside travel toiletries.',
    },
    {
      name: 'Rossmann',
      type: 'pharmacy',
      priceRange: '€5–€10',
      note: 'Another major drugstore chain; often carries universal adapters near the checkout or travel section.',
    },
    {
      name: 'Frankfurt Airport (FRA) shops',
      type: 'airport',
      city: 'Frankfurt',
      priceRange: '€10–€25',
      note: 'Electronics kiosks and convenience shops in both terminals sell travel adapters at a premium. Available before and after security.',
    },
  ],
  airportName: 'Frankfurt Airport',
  airportCode: 'FRA',
  neighbors: [
    {
      name: 'Austria',
      slug: 'austria-electric-power-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Austria uses the same Type C/F system as Germany. No adapter needed.',
    },
    {
      name: 'France',
      slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'France uses Type E instead of Type F, but the two are cross-compatible. German plugs work in French sockets.',
    },
    {
      name: 'Switzerland',
      slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you',
      plugTypes: ['C', 'J'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Swiss Type J sockets won\'t accept German Schuko plugs — they\'re too wide. You\'ll need an adapter for grounded devices.',
    },
    {
      name: 'Netherlands',
      slug: 'netherlands-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Same plug system as Germany. No adapter needed.',
    },
    {
      name: 'Poland',
      slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Poland uses Type E, which is cross-compatible with German Type F. No adapter needed.',
    },
    {
      name: 'Czech Republic',
      slug: 'czech-republic-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Czech Republic uses Type E, cross-compatible with German Schuko. No adapter needed.',
    },
    {
      name: 'Denmark',
      slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2',
      plugTypes: ['C', 'K'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Type C Europlugs work in both countries. Danish Type K sockets accept Type F Schuko plugs in most modern installations.',
    },
    {
      name: 'Belgium',
      slug: 'belgium-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Belgium uses Type E (French-style), cross-compatible with German Type F. No adapter needed.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Most German hotels rated 3 stars and above provide hair dryers in the bathroom and increasingly feature USB-A or USB-C ports in bedside lamps or desks. Front desks at larger hotels and international chains often have a small supply of loaner adapters, but it\'s not guaranteed — bringing your own is the safer bet. Budget hostels rarely provide adapters.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all Apple and major Android chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'You only need a plug adapter. No voltage converter required.',
    },
    {
      device: 'Laptop (MacBook, Dell, Lenovo, etc.)',
      dualVoltage: 'Yes — virtually all laptop power bricks are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Just use an adapter or buy a local power cable with a Schuko plug.',
    },
    {
      device: 'Hair dryer / Flat iron',
      dualVoltage: 'Rarely — most US hair dryers are 120V only.',
      adapterOnly: 'No — you likely also need a converter or a dual-voltage model.',
      note: 'Check the label. If it says "120V only," do not plug it into a German 230V outlet or it will burn out. Consider buying a cheap one locally or using the hotel\'s.',
    },
    {
      device: 'Electric razor / Toothbrush charger',
      dualVoltage: 'Usually yes — most are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Check the label to confirm. Most modern electric razors and toothbrush charging bases handle 230V fine.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Germany?',
      answer:
        'It depends where you\'re from. Travelers from the US, UK, Australia, and many Asian countries will need a plug adapter because German outlets use round-pin Type C and Type F sockets. Visitors from most other European countries won\'t need anything — their plugs fit directly.',
    },
    {
      question: 'What is a Schuko plug?',
      answer:
        'Schuko is the common name for the Type F plug and socket system, short for "Schutzkontakt" (German for "protective contact"). It was invented in Germany in 1926 and features two round pins plus grounding clips on the sides of the plug. It\'s the standard in Germany, Austria, the Netherlands, Spain, and many other European countries.',
    },
    {
      question: 'Will my US phone charger work in Germany?',
      answer:
        'Yes, with a plug adapter. All modern phone chargers (Apple, Samsung, Google, etc.) accept 100–240V input, so they\'re compatible with Germany\'s 230V supply. You just need an adapter to physically fit the plug into the socket.',
    },
    {
      question: 'Can I use my French appliances in Germany without an adapter?',
      answer:
        'Yes. French Type E plugs and German Type F sockets are designed to be cross-compatible. Your French devices will plug right in and work perfectly.',
    },
    {
      question: 'Do German hotels provide power adapters?',
      answer:
        'Some do, especially international chain hotels and higher-end properties. They may have adapters available at the front desk on a loaner basis. However, availability is limited and not guaranteed, so it\'s best to bring your own.',
    },
    {
      question: 'Will my Swiss plugs work in Germany?',
      answer:
        'Partially. The small two-pin Swiss Europlug (Type C) fits German sockets, but the three-pin Swiss Type J plug is too narrow for the wider Schuko recess. You\'ll need an adapter for grounded Swiss devices.',
    },
    {
      question: 'Is the voltage in Germany different from the US?',
      answer:
        'Yes. Germany uses 230V at 50Hz, while the US uses 120V at 60Hz. Most modern electronics handle both voltages automatically (check for "100–240V" on the label), but some appliances like hair dryers may need a voltage converter or a dual-voltage model.',
    },
    {
      question: 'Where can I buy a power adapter in Germany?',
      answer:
        'Electronics stores like Saturn and MediaMarkt carry a wide selection. Drugstores like dm and Rossmann often stock basic travel adapters too. Airport shops at Frankfurt, Munich, and Berlin also sell them, though at higher prices.',
    },
  ],
  metaTitle: 'Germany Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Germany uses Type C and Type F (Schuko) plugs at 230V/50Hz. Find out if you need an adapter, where to buy one, and what to know before plugging in.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Austria', slug: 'austria-electric-power-plug-types-do-you-need-an-adapter' },
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
    { name: 'Switzerland', slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you' },
    { name: 'Netherlands', slug: 'netherlands-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Spain', slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain' },
  ],
};

export default germany;

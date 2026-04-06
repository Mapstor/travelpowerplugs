import type { CountryPlugData } from '../types';

const australia: CountryPlugData = {
  slug: 'australia-electric-plug-types-do-you-need-adapter',
  name: 'Australia',
  demonym: 'Australian',
  continent: 'Oceania',
  region: 'Oceania',
  voltage: 230,
  frequency: 50,
  complexityTier: 'moderate',
  plugTypes: [
    {
      id: 'type-i',
      name: 'Type I',
      subtitle: 'Australian',
      pins: 3,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 13.7,
      ratedAmps: 10,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.2,
      bodyHeight: 0.9,
      bodyCornerRadius: 0.15,
      noseRadius: 0.42,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'Australia uses Type I — two angled flat pins in a V shape plus a vertical ground pin. This design is shared with New Zealand, Papua New Guinea, and a few other Pacific and Asian countries, but is incompatible with plugs used in Europe, the Americas, or most of Asia.',
    'Nearly every Australian power outlet has an individual on/off switch right next to the socket — a safety feature that surprises visitors from most other countries. Flip the switch to "on" (usually marked with a line "|") before your device will charge.',
    'Australia technically runs at 230V, though the actual measured voltage at outlets can range from around 220V to 240V depending on location and grid conditions.',
    'Two-pin (ungrounded) Type I plugs exist for double-insulated devices like phone chargers. These fit the same outlets — just leave the ground hole empty.',
    'Power boards (multi-outlet strips) with built-in surge protection are very popular in Australia and are inexpensive to buy locally if you need more outlets.',
  ],
  travelContext:
    'Australia\'s Type I plug is unique to the Oceania/Australasia region and incompatible with plugs from Europe, the Americas, and most of Asia. Virtually all international visitors will need a plug adapter. The good news: Australia\'s voltage (230V/50Hz) matches Europe, so European travelers only need a plug adapter. US and Japanese visitors should check their devices for dual-voltage support. Australia\'s electrical infrastructure is modern, reliable, and consistent across all states and territories.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs have a different orientation from Australia\'s angled flat pins. You need a US-to-Type I adapter. Modern electronics (phones, laptops) are dual-voltage and just need the adapter. Older US devices rated 120V only (like many hair dryers) will need a voltage converter or a dual-voltage replacement.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are completely different from Australian Type I. Bring a UK-to-AU adapter. Voltage is the same (230V/50Hz), so no converter is needed.',
    },
    {
      origin: 'Europe (Type C/E/F)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs won\'t fit Australian flat-pin sockets. Bring a Europe-to-AU adapter. Voltage is the same (230V/50Hz) so all your devices work with just the adapter.',
    },
    {
      origin: 'New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'New Zealand uses the same Type I plug system and 230V/50Hz power. Your NZ devices plug directly into Australian outlets.',
    },
    {
      origin: 'Japan',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Japanese Type A plugs don\'t fit Australian outlets. You need an adapter. Japan runs on 100V, so most Japanese devices are designed for lower voltage — but modern chargers and laptops are dual-voltage (100–240V). Check older appliances carefully.',
    },
    {
      origin: 'China',
      originPlugTypes: 'A, C, I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Some Chinese devices use a Type I-style plug that fits Australian outlets, but many use Type A or Type C. Bring a universal adapter to be safe. China uses 220V, so voltage compatibility is not a concern.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'JB Hi-Fi',
      type: 'electronics',
      priceRange: 'A$8–A$25',
      note: 'Australia\'s leading electronics retailer. Stores nationwide carry a wide selection of travel adapters and power boards.',
    },
    {
      name: 'Officeworks',
      type: 'electronics',
      priceRange: 'A$8–A$20',
      note: 'Office and tech supply chain with stores in every major city. Reliable for adapters and USB chargers.',
    },
    {
      name: 'Kmart',
      type: 'supermarket',
      priceRange: 'A$5–A$15',
      note: 'Budget department store found in shopping centers across Australia. Carries basic travel adapters at low prices.',
    },
    {
      name: 'Sydney Airport (SYD) shops',
      type: 'airport',
      city: 'Sydney',
      priceRange: 'A$15–A$35',
      note: 'Electronics kiosks and convenience shops in both the domestic and international terminals stock travel adapters at airport markup.',
    },
  ],
  airportName: 'Sydney Kingsford Smith Airport',
  airportCode: 'SYD',
  neighbors: [
    {
      name: 'New Zealand',
      slug: 'new-zealand-electric-plug-types-which-adapter-should-you-get',
      plugTypes: ['I'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'New Zealand uses the same Type I system. No adapter needed.',
    },
    {
      name: 'Fiji',
      slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva',
      plugTypes: ['I'],
      voltage: 240,
      sameAsSubject: 'identical',
      adapterNote: 'Fiji uses Type I at 240V. Australian plugs fit directly.',
    },
    {
      name: 'Papua New Guinea',
      slug: 'papua-new-guinea-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['I'],
      voltage: 240,
      sameAsSubject: 'identical',
      adapterNote: 'Papua New Guinea uses Type I at 240V. Australian plugs work without an adapter.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Australian hotels are well-equipped for international travelers. Most 3-star-and-above hotels provide hair dryers, and many now include USB-A or USB-C charging ports at the bedside. Front desks at international chain hotels frequently have loaner adapters available. Hostels and budget accommodation may not, so bring your own. Remember to switch the outlet\'s individual on/off switch to the "on" position — it catches many first-time visitors by surprise.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all Apple and major Android chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'You only need a plug adapter. Remember to flip the wall switch on.',
    },
    {
      device: 'Laptop (MacBook, Dell, etc.)',
      dualVoltage: 'Yes — virtually all laptop power bricks handle 100–240V.',
      adapterOnly: 'Yes',
      note: 'Use an adapter, or buy a local AU power cable from JB Hi-Fi or Officeworks.',
    },
    {
      device: 'Hair dryer / Flat iron',
      dualVoltage: 'Rarely — most US models are 120V only.',
      adapterOnly: 'No — you likely need a converter or a dual-voltage model.',
      note: 'If your hair dryer says 120V only, do not use it on Australian 230V power. Use the hotel\'s or buy a cheap one locally from Kmart.',
    },
    {
      device: 'Electric razor / Toothbrush charger',
      dualVoltage: 'Usually yes — most are rated 100–240V.',
      adapterOnly: 'Yes',
      note: 'Check the label. Most modern models handle Australian voltage fine with just an adapter.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Australia?',
      answer:
        'Almost certainly yes, unless you\'re coming from New Zealand, Fiji, or Papua New Guinea. Australia uses Type I plugs with angled flat pins — a design not found in Europe, the Americas, or most of Asia. You\'ll need a plug adapter for your devices.',
    },
    {
      question: 'Why won\'t my device charge? I plugged it in with an adapter.',
      answer:
        'Check the wall switch. Australian power outlets have an individual on/off switch next to each socket. If the switch is in the "off" position (usually marked "O"), no power flows to the outlet even though your plug is inserted. Flip it to "on" (marked "|" or "I").',
    },
    {
      question: 'Is Australian voltage safe for my US electronics?',
      answer:
        'For modern dual-voltage electronics (100–240V), yes — phones, laptops, cameras, and tablet chargers all handle 230V fine. For older single-voltage US devices (120V only), like many hair dryers and curling irons, you\'ll need a step-down voltage converter or they\'ll burn out.',
    },
    {
      question: 'Will my European plug work in Australia?',
      answer:
        'No. European round-pin plugs (Type C, E, or F) don\'t fit Australian flat-pin sockets. You need a Europe-to-Australia adapter. The voltage is the same (230V/50Hz), so you only need the physical adapter — no converter.',
    },
    {
      question: 'Where can I buy an adapter in Australia?',
      answer:
        'JB Hi-Fi and Officeworks are the go-to electronics stores, found in every major city. Kmart and Big W carry budget adapters. Airport shops at Sydney, Melbourne, and Brisbane sell them too — expect to pay more. Even many convenience stores and pharmacies stock basic adapters.',
    },
    {
      question: 'Do Australian hotels provide adapters?',
      answer:
        'Many do. International chain hotels and mid-to-upper-range properties often have loaner adapters at the front desk. Some rooms in newer hotels have universal power outlets or built-in USB ports. Budget hostels typically don\'t provide adapters.',
    },
    {
      question: 'Can I use my New Zealand plugs in Australia?',
      answer:
        'Yes. Australia and New Zealand share the same Type I plug standard and operate at 230V/50Hz. Your NZ devices plug in and work with no adapter or converter needed.',
    },
    {
      question: 'What\'s the deal with the on/off switches on Australian outlets?',
      answer:
        'It\'s a safety feature mandated by Australian electrical standards. Every socket has a switch so you can cut power to individual outlets without unplugging devices. It prevents standby power draw and reduces the risk of accidental shocks. Just remember to switch it on when you plug in.',
    },
  ],
  metaTitle: 'Australia Power Plugs & Outlets: Type I Adapter Guide (2025)',
  metaDescription:
    'Australia uses Type I plugs with angled flat pins at 230V/50Hz. Find out if you need an adapter, don\'t forget the wall switch, and learn where to buy one.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'New Zealand', slug: 'new-zealand-electric-plug-types-which-adapter-should-you-get' },
    { name: 'Fiji', slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva' },
    { name: 'Papua New Guinea', slug: 'papua-new-guinea-electric-plug-types-which-adapter-will-you-need' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'United States', slug: 'usa-electric-plug-types-will-you-need-an-adapter-traveling-to-the-us' },
  ],
};

export default australia;

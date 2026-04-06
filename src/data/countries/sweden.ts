import type { CountryPlugData } from '@/types';

const sweden: CountryPlugData = {
  slug: 'sweden-electric-plug-types',
  name: 'Sweden',
  demonym: 'Swedish',
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
    'Sweden has one of the world\'s most reliable electrical grids, with over 99.9% uptime thanks to extensive use of renewable energy and smart grid technology.',
    'Swedish hotels and public spaces were early adopters of USB charging ports, with many outlets featuring built-in USB-A and USB-C ports alongside traditional Schuko sockets.',
    'During the long Swedish winters, electrical heating is crucial — most accommodations have heated floors and plug-in car block heaters that use standard Schuko outlets.',
    'Sweden\'s commitment to sustainability means many hotels provide eco-friendly power strips that automatically cut standby power when devices aren\'t charging.',
    'In Lapland\'s remote areas, some cabins and lodges use 12V DC systems powered by solar panels, but tourist accommodations always provide standard 230V AC outlets.',
  ],
  travelContext:
    'Sweden offers everything from cosmopolitan Stockholm to the Northern Lights in Lapland, making it a year-round destination for travelers. The country uses the standard European electrical system, so visitors from other EU countries can plug in anywhere without adapters. Sweden\'s infrastructure is exceptionally modern and reliable, with many accommodations featuring the latest charging technology including wireless charging surfaces and multiple USB ports.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-blade plugs don\'t fit Swedish round-pin sockets. You need a US-to-Schuko adapter. Most modern electronics are dual-voltage and only need the adapter. Check older appliances like hair dryers — 120V-only devices need a voltage converter or will be damaged.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are rectangular and much larger than Swedish sockets. Bring a UK-to-Schuko adapter. Voltage is the same (230V/50Hz) so no converter needed for any device.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs have angled flat pins incompatible with Swedish round sockets. Use an AU-to-Schuko adapter. Voltage is identical so all your devices work with just the adapter.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'If you\'re from Germany, Austria, Netherlands, or other countries using Type C/F plugs, they fit directly into Swedish outlets. No adapter needed.',
    },
    {
      origin: 'Denmark',
      originPlugTypes: 'C, K',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Danish Type C Europlugs fit Swedish sockets perfectly. Danish Type K plugs also work in most modern Swedish outlets, though older installations may be tighter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Elgiganten',
      type: 'electronics',
      priceRange: '49-149 SEK',
      note: 'Sweden\'s largest electronics retailer with stores nationwide. Excellent selection of travel adapters and charging accessories.',
    },
    {
      name: 'MediaMarkt',
      type: 'electronics',
      priceRange: '59-139 SEK',
      note: 'International electronics chain with Swedish locations. Good adapter selection, especially universal models.',
    },
    {
      name: 'Kjell & Company',
      type: 'electronics',
      priceRange: '45-129 SEK',
      note: 'Swedish electronics specialty store known for quality adapters and charging solutions. Helpful knowledgeable staff.',
    },
    {
      name: 'ICA Maxi / ICA Kvantum',
      type: 'supermarket',
      priceRange: '39-89 SEK',
      note: 'Large ICA supermarkets carry basic travel adapters in their electronics sections alongside phone accessories.',
    },
    {
      name: 'Stockholm Arlanda Airport (ARN)',
      type: 'airport',
      city: 'Stockholm',
      priceRange: '89-199 SEK',
      note: 'Electronics shops and duty-free stores throughout all terminals sell adapters. Available both before and after security.',
    },
    {
      name: '7-Eleven',
      type: 'convenience',
      priceRange: '69-99 SEK',
      note: 'Some larger 7-Eleven locations in Stockholm and Gothenburg carry basic universal adapters near phone chargers.',
    },
  ],
  airportName: 'Stockholm Arlanda Airport',
  airportCode: 'ARN',
  neighbors: [
    {
      name: 'Norway',
      slug: 'norway-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Norway uses the identical Type C/F system as Sweden. No adapter needed when crossing the border.',
    },
    {
      name: 'Finland',
      slug: 'finland-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Finland uses the same European standard plugs and voltage. Perfect compatibility.',
    },
    {
      name: 'Denmark',
      slug: 'denmark-electric-plug-types',
      plugTypes: ['C', 'E', 'F', 'K'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Danish plugs work in Swedish sockets. Type K sockets also accept Swedish Type F plugs in most cases.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'always',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Swedish hotels are among the most technologically advanced in Europe. Even mid-range properties typically provide multiple USB ports, wireless charging pads, and built-in adapters for international guests. Higher-end hotels in Stockholm, Gothenberg, and Malmö often have universal outlets that accept multiple plug types. Most Swedish accommodations provide hair dryers as standard.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all modern phone chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'You only need a plug adapter. Many Swedish hotels now have built-in USB ports so you might not even need that.',
    },
    {
      device: 'Laptop charger',
      dualVoltage: 'Yes — virtually all laptop power adapters are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Just use an adapter. Sweden\'s rock-solid power grid means you won\'t experience voltage fluctuations.',
    },
    {
      device: 'Hair dryer / Styling tools',
      dualVoltage: 'Rarely — most US hair dryers are 120V only.',
      adapterOnly: 'No — you need a converter or dual-voltage model.',
      note: 'Check the voltage label carefully. 120V devices will be damaged by Sweden\'s 230V power. Use the hotel\'s hair dryer instead.',
    },
    {
      device: 'Electric razor / Toothbrush',
      dualVoltage: 'Usually yes — most are 100–240V compatible.',
      adapterOnly: 'Yes',
      note: 'Most electric razors and toothbrush chargers work fine with just an adapter.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Sweden?',
      answer:
        'It depends on your origin country. Travelers from the US, UK, Australia, and most non-European countries need a plug adapter because Sweden uses round-pin Type C and F sockets. Visitors from other European countries typically don\'t need any adapter.',
    },
    {
      question: 'What type of electrical outlets does Sweden use?',
      answer:
        'Sweden uses Type C (Europlug) and Type F (Schuko) plugs at 230V/50Hz, the same standard as most European countries. These are round-pin plugs, either two-pin or two-pin with side grounding clips.',
    },
    {
      question: 'Will my American devices work in Sweden?',
      answer:
        'Yes, with a plug adapter. Most modern American electronics (phones, laptops, tablets) are dual-voltage and work perfectly with Sweden\'s 230V power. Check the device label — if it says "100-240V" you only need an adapter.',
    },
    {
      question: 'Do Swedish hotels provide power adapters?',
      answer:
        'Swedish hotels are exceptionally well-equipped for international travelers. Mid-range and upscale properties commonly provide adapters, universal outlets, or USB charging ports. Many Swedish hotels lead Europe in charging convenience.',
    },
    {
      question: 'Where can I buy an adapter in Sweden?',
      answer:
        'Electronics stores like Elgiganten and MediaMarkt have the best selection. Kjell & Company is a Swedish specialty store with quality adapters. Large ICA supermarkets also carry basic travel adapters.',
    },
    {
      question: 'Do I need an adapter traveling within Scandinavia?',
      answer:
        'No. Sweden, Norway, Finland, and Denmark all use compatible European plug systems. Your Swedish devices will work throughout Scandinavia without any adapter.',
    },
    {
      question: 'Is Swedish electricity reliable?',
      answer:
        'Extremely reliable. Sweden has one of the world\'s most stable electrical grids with over 99.9% uptime. Power outages are very rare, and voltage is consistently stable.',
    },
  ],
  metaTitle: 'Sweden Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Sweden uses Type C and F (Schuko) plugs at 230V/50Hz. Find out if you need an adapter for Stockholm, Gothenburg, Malmö, and travel throughout Sweden.',
  lastUpdated: '2025-01-15',
  relatedCountries: [
    { name: 'Norway', slug: 'norway-electric-plug-types' },
    { name: 'Finland', slug: 'finland-electric-plug-types' },
    { name: 'Denmark', slug: 'denmark-electric-plug-types' },
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Netherlands', slug: 'netherlands-electric-plug-types' },
  ],
};

export default sweden;
import type { CountryPlugData } from '@/types';

const iceland: CountryPlugData = {
  slug: 'iceland-electric-plug-types-travel-adapter-for-iceland',
  name: 'Iceland',
  demonym: 'Icelandic',
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
    'Iceland generates 100% of its electricity from renewable sources — geothermal (73%) and hydroelectric (27%) — making it one of the world\'s cleanest electrical grids.',
    'Icelandic homes commonly feature geothermal heating systems, but wall outlets remain standard 230V for appliances and devices.',
    'The volcanic activity that powers Iceland\'s geothermal plants occasionally affects local grids in rural areas, though outages are rare and brief.',
    'Iceland\'s extreme weather conditions require all electrical installations to meet strict cold-weather and wind-resistance standards.',
    'Many Icelandic hotels and guesthouses now provide USB charging stations powered directly by geothermal energy, reducing the need for adapters for phone charging.',
    'The Blue Lagoon geothermal spa has specially waterproofed outlets designed for the high-humidity environment near the hot springs.',
  ],
  travelContext:
    'Iceland draws over two million visitors annually to experience its dramatic landscapes, the Blue Lagoon, Northern Lights, and the famous Ring Road. Despite being a remote island nation, Iceland\'s electrical infrastructure is world-class and exceptionally reliable, powered entirely by clean renewable energy. European travelers using Type C or F plugs need no adapter. Visitors from the US, UK, or Australia will need a plug adapter but typically not a voltage converter for modern electronics.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs won\'t fit Icelandic round-pin outlets. You\'ll need a US-to-Europe adapter. Most modern electronics (phones, laptops, cameras) are dual-voltage (100–240V) and only need the adapter. Check older appliances — they may require a voltage converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are too large for Icelandic sockets. Bring a UK-to-Europe adapter. Both countries use 230V/50Hz, so no voltage converter is needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs with angled flat pins don\'t fit Icelandic outlets. You need an AU-to-Europe adapter. Voltage is identical (230V/50Hz) so all devices work with just the adapter.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C (Europlug) and Type F (Schuko) plugs fit directly into Icelandic outlets. No adapter needed.',
    },
    {
      origin: 'Germany/Austria',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'German and Austrian Schuko plugs work perfectly in Iceland. Same plug system and voltage — no adapter needed.',
    },
    {
      origin: 'France',
      originPlugTypes: 'C, E',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'French Type E plugs are compatible with Icelandic Type F sockets. Your French devices will work without any adapter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Elko',
      type: 'electronics',
      city: 'Reykjavik',
      priceRange: '€8–€20',
      note: 'Iceland\'s main electronics retailer with stores in Reykjavik and other major towns. Good selection of travel adapters.',
    },
    {
      name: 'Hagkaup',
      type: 'supermarket',
      city: 'Reykjavik',
      priceRange: '€6–€15',
      note: 'Major Icelandic department store and supermarket with electronics sections. Multiple Reykjavik locations.',
    },
    {
      name: 'Netto',
      type: 'supermarket',
      priceRange: '€5–€12',
      note: 'Danish discount supermarket chain with Icelandic locations. Basic travel adapters in larger stores.',
    },
    {
      name: 'Keflavik Airport (KEF) shops',
      type: 'airport',
      city: 'Keflavik',
      priceRange: '€12–€30',
      note: 'Electronics stores and duty-free shops sell travel adapters at premium prices. Available both before and after security.',
    },
    {
      name: 'Blue Lagoon Gift Shop',
      type: 'convenience',
      city: 'Grindavik',
      priceRange: '€10–€20',
      note: 'The famous geothermal spa\'s gift shop stocks basic travel adapters for international visitors.',
    },
  ],
  airportName: 'Keflavik International Airport',
  airportCode: 'KEF',
  neighbors: [
    // Iceland is an island nation with no land neighbors
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Icelandic hotels are generally excellent and well-equipped for international travelers. Even budget accommodations provide hair dryers, and many now feature USB charging ports powered by geothermal energy. Higher-end hotels in Reykjavik and Blue Lagoon area resorts commonly keep international adapters at reception. Rural guesthouses along the Ring Road are usually well-prepared for international guests but may have limited outlets — a compact power strip is advisable for multiple devices.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all Apple and major Android chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'Only a plug adapter is needed. Perfect for charging between Northern Lights photography sessions.',
    },
    {
      device: 'Laptop (MacBook, Dell, Lenovo, etc.)',
      dualVoltage: 'Yes — virtually all laptop power bricks handle 100–240V.',
      adapterOnly: 'Yes',
      note: 'Use an adapter or buy a local power cable with a Schuko plug.',
    },
    {
      device: 'Hair dryer / Flat iron',
      dualVoltage: 'Rarely — most US models are 120V only.',
      adapterOnly: 'No — you likely need a converter or dual-voltage model.',
      note: 'Check your label. If it says 120V only, don\'t plug it into a 230V Icelandic outlet. All Icelandic hotels provide hair dryers.',
    },
    {
      device: 'Electric razor / Toothbrush charger',
      dualVoltage: 'Usually yes — most are rated 100–240V.',
      adapterOnly: 'Yes',
      note: 'Verify on the label. Most modern electric razors and toothbrush chargers handle 230V fine.',
    },
    {
      device: 'Camera equipment',
      dualVoltage: 'Yes — virtually all camera chargers and equipment are dual-voltage.',
      adapterOnly: 'Yes',
      note: 'Essential for capturing Iceland\'s dramatic landscapes, Northern Lights, and waterfalls. Just bring an adapter.',
    },
    {
      device: 'Drone battery charger',
      dualVoltage: 'Yes — most modern drone chargers are dual-voltage.',
      adapterOnly: 'Yes',
      note: 'Perfect for aerial photography of Iceland\'s stunning terrain. Remember to check local drone regulations.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Iceland?',
      answer:
        'It depends on your home country. Travelers from the US, UK, Australia, and many Asian countries need a plug adapter since Iceland uses round-pin Type C and Type F sockets. European visitors from countries using the same plug types won\'t need any adapter.',
    },
    {
      question: 'What plug types does Iceland use?',
      answer:
        'Iceland uses Type C (Europlug) for low-power devices and Type F (Schuko) for grounded appliances. Both have round pins and operate at 230V/50Hz. This is the standard European system used in Germany, Austria, and many other European countries.',
    },
    {
      question: 'Will my US phone charger work in Iceland?',
      answer:
        'Yes, with a plug adapter. All modern smartphone chargers (Apple, Samsung, Google, etc.) support 100–240V input, making them compatible with Iceland\'s 230V supply. You just need an adapter to fit the round-pin socket.',
    },
    {
      question: 'Do I need different adapters for Reykjavik versus the Ring Road?',
      answer:
        'No. All of Iceland uses the same Type C/F plug system at 230V/50Hz. Whether you\'re in Reykjavik, at the Blue Lagoon, or in remote areas along the Ring Road, the outlets are identical.',
    },
    {
      question: 'Do Icelandic hotels provide power adapters?',
      answer:
        'Many do, especially hotels catering to international tourists. Reykjavik hotels and Blue Lagoon area resorts commonly have adapters available at reception. However, it\'s still wise to bring your own to be safe.',
    },
    {
      question: 'Is Iceland\'s electricity really 100% renewable?',
      answer:
        'Yes. Iceland generates all its electricity from geothermal (73%) and hydroelectric (27%) sources. Your devices will be powered by some of the world\'s cleanest energy.',
    },
    {
      question: 'Are there any power issues in remote areas of Iceland?',
      answer:
        'Iceland\'s electrical grid is remarkably reliable even in remote areas. The geothermal and hydroelectric systems are very stable. Occasional brief outages may occur during extreme weather, but they\'re rare.',
    },
    {
      question: 'Can I charge my camera equipment for Northern Lights photography?',
      answer:
        'Absolutely. All accommodations have standard 230V outlets perfect for charging camera batteries, phones, and other equipment. Just bring a plug adapter if you\'re from outside Europe.',
    },
    {
      question: 'Where can I buy an adapter in Reykjavik?',
      answer:
        'Elko electronics stores, Hagkaup department stores, or larger Netto supermarkets. Keflavik Airport also has electronics shops and duty-free stores selling adapters, though at higher prices.',
    },
  ],
  metaTitle: 'Iceland Power Plugs & Outlets: Travel Adapter Guide (2025)',
  metaDescription:
    'Iceland uses Type C and Type F (Schuko) plugs at 230V/50Hz powered by 100% renewable energy. Find out if you need an adapter for Reykjavik and beyond.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Norway', slug: 'norway-electric-plug-types' },
    { name: 'Denmark', slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2' },
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'Faroe Islands', slug: 'faroe-islands-electric-plug-types' },
  ],
};

export default iceland;
import type { CountryPlugData } from '@/types';

const norway: CountryPlugData = {
  slug: 'norway-electric-plug-types',
  name: 'Norway',
  demonym: 'Norwegian',
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
    'Norway generates 96% of its electricity from renewable hydroelectric power, making it one of the world\'s most environmentally friendly electrical systems.',
    'Norwegian electrical installations are built to withstand extreme Arctic conditions, with special cold-weather wiring standards in northern regions like Tromsø.',
    'Many Norwegian hotels and cabins feature heated bathroom floors and towel warmers as standard, requiring specialized 400V installations.',
    'Norway\'s fjord region hotels often use ground-fault circuit interrupters (GFCI) as standard due to the high humidity from waterfalls and coastal conditions.',
    'Electric vehicle charging is ubiquitous in Norway — many hotels now provide Tesla and Type 2 EV charging alongside standard wall outlets.',
  ],
  travelContext:
    'Norway attracts millions of visitors to experience its dramatic fjords, the Northern Lights, and vibrant cities like Oslo and Bergen. The country\'s electrical infrastructure is world-class and exceptionally reliable, powered almost entirely by clean hydroelectric energy. European travelers using Type C or F plugs need no adapter. Visitors from the US, UK, or Australia will need a plug adapter but typically not a voltage converter for modern electronics.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs won\'t fit Norwegian round-pin outlets. You\'ll need a US-to-Europe adapter. Most modern electronics (phones, laptops, cameras) are dual-voltage (100–240V) and only need the adapter. Older single-voltage appliances may require a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are too large for Norwegian sockets. Bring a UK-to-Europe adapter. Both countries use 230V/50Hz, so no voltage converter is needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs with angled flat pins don\'t fit Norwegian outlets. You need an AU-to-Europe adapter. Voltage is the same (230V/50Hz) so all devices work with just the adapter.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C (Europlug) and Type F (Schuko) plugs fit directly into Norwegian outlets. No adapter needed.',
    },
    {
      origin: 'Germany/Austria',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'German and Austrian Schuko plugs work perfectly in Norway. Identical plug system and voltage.',
    },
    {
      origin: 'Denmark',
      originPlugTypes: 'C, K',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Danish Type C Europlugs fit Norwegian sockets. Danish Type K plugs also work in most modern Norwegian installations.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Elkjøp',
      type: 'electronics',
      priceRange: '€8–€20',
      note: 'Norway\'s largest electronics retailer with stores in Oslo, Bergen, Trondheim, and other major cities. Good selection of travel adapters.',
    },
    {
      name: 'Power',
      type: 'electronics',
      priceRange: '€8–€18',
      note: 'Electronics chain with locations throughout Norway. Carries universal travel adapters and multi-plugs.',
    },
    {
      name: 'REMA 1000',
      type: 'supermarket',
      priceRange: '€6–€15',
      note: 'Norwegian supermarket chain. Larger stores carry basic travel adapters in their electronics section.',
    },
    {
      name: 'Coop / Coop Prix',
      type: 'supermarket',
      priceRange: '€6–€15',
      note: 'Norwegian cooperative grocery stores. Electronics sections in larger stores stock travel adapters.',
    },
    {
      name: 'Oslo Airport (OSL) shops',
      type: 'airport',
      city: 'Oslo',
      priceRange: '€12–€30',
      note: 'Electronics stores and convenience shops sell travel adapters at premium prices. Available both before and after security.',
    },
    {
      name: 'Bergen Airport (BGO) shops',
      type: 'airport',
      city: 'Bergen',
      priceRange: '€12–€30',
      note: 'Smaller selection than Oslo but travel adapters are available at the electronics kiosk.',
    },
  ],
  airportName: 'Oslo Airport',
  airportCode: 'OSL',
  neighbors: [
    {
      name: 'Sweden',
      slug: 'sweden-electric-plug-types-will-you-need-an-adapter-in-stockholm',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Sweden uses the same Type C/F system as Norway. No adapter needed.',
    },
    {
      name: 'Finland',
      slug: 'finland-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Finland uses identical plugs and voltage. No adapter needed.',
    },
    {
      name: 'Denmark',
      slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2',
      plugTypes: ['C', 'K'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Type C works in both countries. Danish Type K sockets accept Norwegian Schuko plugs in modern installations.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Norwegian hotels provide excellent amenities, with hair dryers standard even in budget accommodations. Many hotels, especially in Oslo and Bergen, now feature USB charging ports built into rooms. Higher-end hotels and fjord resorts often keep international adapters at reception. Norwegian cabins and mountain lodges (hytter) may have limited outlets, so bringing a power strip is advisable for multiple devices.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all Apple and major Android chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'Only a plug adapter is needed. No voltage converter required.',
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
      note: 'Check your label. If it says 120V only, don\'t plug it into a 230V Norwegian outlet. Norwegian hotels reliably provide hair dryers.',
    },
    {
      device: 'Electric razor / Toothbrush charger',
      dualVoltage: 'Usually yes — most are rated 100–240V.',
      adapterOnly: 'Yes',
      note: 'Verify on the label. Most modern electric razors and toothbrush chargers handle 230V fine.',
    },
    {
      device: 'Camera battery charger',
      dualVoltage: 'Yes — virtually all camera chargers are dual-voltage.',
      adapterOnly: 'Yes',
      note: 'Essential for Northern Lights and fjord photography. Just bring an adapter.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Norway?',
      answer:
        'It depends on your home country. Travelers from the US, UK, Australia, and many Asian countries need a plug adapter since Norway uses round-pin Type C and Type F sockets. European visitors from countries using the same plug types won\'t need any adapter.',
    },
    {
      question: 'What plug types does Norway use?',
      answer:
        'Norway uses Type C (Europlug) for low-power devices and Type F (Schuko) for grounded appliances. Both have round pins and operate at 230V/50Hz. This is the standard European system used in Germany, Finland, and many other European countries.',
    },
    {
      question: 'Will my US phone charger work in Norway?',
      answer:
        'Yes, with a plug adapter. All modern smartphone chargers (Apple, Samsung, Google, etc.) support 100–240V input, making them compatible with Norway\'s 230V supply. You just need an adapter to fit the round-pin socket.',
    },
    {
      question: 'Do I need different adapters for Oslo, Bergen, and the fjords?',
      answer:
        'No. All of Norway uses the same Type C/F plug system at 230V/50Hz. Whether you\'re in Oslo, Bergen, Tromsø, or a remote fjord hotel, the outlets are identical.',
    },
    {
      question: 'Do Norwegian hotels provide power adapters?',
      answer:
        'Some do, particularly international chain hotels and higher-end properties. Fjord resorts and premium hotels often have adapters available at reception on a loaner basis. However, availability isn\'t guaranteed, so bringing your own is safer.',
    },
    {
      question: 'Can I use the same adapter throughout Scandinavia?',
      answer:
        'Yes. Norway, Sweden, Finland, and Denmark all use compatible plug systems. One Type C/F adapter works for your entire Scandinavian trip.',
    },
    {
      question: 'Are there special considerations for Northern Norway and Arctic regions?',
      answer:
        'Indoor outlets in Tromsø and Arctic Norway work exactly the same as elsewhere. The electrical infrastructure is built for extreme cold but outlets remain standard 230V Type C/F.',
    },
    {
      question: 'Where can I buy an adapter in Oslo?',
      answer:
        'Elkjøp (Norway\'s largest electronics store), Power electronics, or larger REMA 1000 and Coop stores with electronics sections. Oslo Airport also has electronics shops selling adapters at higher prices.',
    },
  ],
  metaTitle: 'Norway Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Norway uses Type C and Type F (Schuko) plugs at 230V/50Hz. Find out if you need an adapter for Oslo, Bergen, and the fjords, plus where to buy one.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Sweden', slug: 'sweden-electric-plug-types-will-you-need-an-adapter-in-stockholm' },
    { name: 'Finland', slug: 'finland-electric-plug-types' },
    { name: 'Denmark', slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2' },
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Iceland', slug: 'iceland-electric-plug-types-travel-adapter-for-iceland' },
  ],
};

export default norway;
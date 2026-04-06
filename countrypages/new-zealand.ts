import type { CountryPlugData } from '../types';

const newZealand: CountryPlugData = {
  slug: 'new-zealand-electric-plug-types-which-adapter-should-you-get',
  name: 'New Zealand',
  demonym: 'New Zealand',
  continent: 'Oceania',
  region: 'Australasia',
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
    'New Zealand\'s electrical system is identical to Australia\'s — Type I with angled flat pins. If you have an adapter for Australia, it works in NZ and vice versa.',
    'Every New Zealand outlet has an on/off switch next to it. If your charger doesn\'t seem to work, check that the switch is flipped to "on."',
    'Bathroom outlets in NZ hotels are often shaver-only (low amperage, sometimes Type C compatible). Don\'t try to plug in a hair dryer there — it won\'t supply enough power.',
    'Campervans and holiday parks across New Zealand have powered sites with standard Type I outlets, making it easy to charge while traveling by motorhome.',
  ],
  travelContext:
    'New Zealand attracts visitors year-round for its stunning landscapes, adventure sports, and Lord of the Rings filming locations. The electrical infrastructure is modern and reliable across both the North and South Islands. Most accommodation types — from city hotels to rural lodges to campervan parks — have dependable power.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US/Canadian flat-pin plugs won\'t fit NZ\'s angled Type I outlets. You need an adapter. Modern US electronics are dual-voltage (100–240V), so no converter is needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs don\'t fit New Zealand outlets. Bring an adapter. Voltage is compatible at 230V.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs won\'t fit NZ\'s angled flat-pin sockets. You need an adapter. Voltage is the same 230V.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Australia and New Zealand use the identical Type I plug and the same 230V/50Hz power. No adapter needed — everything works directly.',
    },
    {
      origin: 'Japan',
      originPlugTypes: 'A',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Japan uses Type A at 100V. You\'ll need an adapter, and older Japanese appliances may need a converter. Modern devices are typically dual-voltage.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Noel Leeming',
      type: 'electronics',
      note: 'New Zealand\'s major electronics retailer with stores nationwide. Reliable place to pick up travel adapters.',
    },
    {
      name: 'JB Hi-Fi NZ',
      type: 'electronics',
      note: 'Australian-owned electronics chain with NZ locations. Good selection of adapters and travel accessories.',
    },
    {
      name: 'PB Tech',
      type: 'electronics',
      note: 'Popular NZ tech retailer with stores in Auckland, Wellington, and Christchurch. Competitive prices on adapters.',
    },
    {
      name: 'The Warehouse',
      type: 'supermarket',
      note: 'New Zealand\'s biggest general merchandise chain (the "red shed"). Stocks basic travel adapters at low prices.',
    },
    {
      name: 'Auckland Airport (AKL)',
      type: 'airport',
      city: 'Auckland',
      priceRange: 'NZ$15–35 (~$9–21)',
      note: 'Electronics shops in the arrivals area sell adapters. Higher prices than in-town retailers.',
    },
    {
      name: 'Christchurch Airport (CHC)',
      type: 'airport',
      city: 'Christchurch',
      priceRange: 'NZ$15–35 (~$9–21)',
      note: 'Smaller selection than Auckland but adapters are available in the terminal.',
    },
  ],
  airportName: 'Auckland Airport / Christchurch Airport',
  airportCode: 'AKL / CHC',
  neighbors: [
    {
      name: 'Australia',
      slug: 'australia-electric-plug-types-do-you-need-adapter',
      plugTypes: ['I'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Australia and New Zealand share the exact same plug type and voltage — fully interchangeable.',
    },
    {
      name: 'Fiji',
      slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva',
      plugTypes: ['I'],
      voltage: 240,
      sameAsSubject: 'compatible',
      adapterNote: 'Fiji uses Type I as well. The voltage is nominally 240V vs NZ\'s 230V, but all modern devices handle this range. No adapter needed.',
    },
    {
      name: 'Tonga',
      slug: 'tongo-electric-plug-types-which-adapter-will-you-need-for-tongo',
      plugTypes: ['I'],
      voltage: 240,
      sameAsSubject: 'compatible',
      adapterNote: 'Tonga uses Type I — your NZ plugs will fit directly.',
    },
    {
      name: 'Samoa',
      slug: 'samoa-electric-plug-types-will-you-need-an-adapter-for-samoa',
      plugTypes: ['I'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Samoa uses Type I at 230V — identical to New Zealand.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'standard',
  accommodationNote:
    'New Zealand hotels and motels almost universally provide hair dryers and have reliable power. USB ports in rooms are common in newer properties. Hostels and holiday parks have plenty of outlets in common areas. Campervans rented from major companies (Jucy, Britz, Maui) come with standard Type I outlets at powered sites.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone',
      dualVoltage: 'Yes — all modern phone chargers are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Just need an adapter. Remember to flip the wall switch to "on" — every NZ outlet has one.',
    },
    {
      device: 'Laptop',
      dualVoltage: 'Yes — virtually all laptop power bricks support 100–240V.',
      adapterOnly: 'Yes',
      note: 'Only an adapter needed. NZ power is very stable.',
    },
    {
      device: 'Hair dryer / Straightener',
      dualVoltage: 'Often not — many North American models are 120V only.',
      adapterOnly: 'No — a 120V hair dryer will overheat on 230V.',
      note: 'NZ hotels almost always provide hair dryers. Don\'t use the bathroom shaver outlet for a hair dryer — it\'s low amperage.',
    },
    {
      device: 'Camera / GoPro charger',
      dualVoltage: 'Usually yes — most are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Bring an adapter and keep batteries charged — NZ\'s landscapes demand a lot of photos.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for New Zealand?',
      answer:
        'If you\'re from the US, UK, or Europe, yes — you need an adapter for NZ\'s Type I angled flat-pin outlets. Australian visitors don\'t need one — the systems are identical.',
    },
    {
      question: 'What type of plug does New Zealand use?',
      answer:
        'New Zealand uses Type I — the same as Australia. It has two angled flat pins for current plus a vertical ground pin. All outlets have an on/off switch.',
    },
    {
      question: 'Will my Australia adapter work in New Zealand?',
      answer:
        'Yes, absolutely. Australia and New Zealand use the exact same Type I plug and both run at 230V/50Hz. They\'re electrically identical.',
    },
    {
      question: 'Why won\'t my charger work in the NZ bathroom outlet?',
      answer:
        'NZ hotel bathrooms often have shaver-only outlets rated for low wattage (up to about 20W). They\'re fine for electric shavers but won\'t power a hair dryer, curling iron, or even some higher-draw chargers. Use the regular wall outlets in the bedroom.',
    },
    {
      question: 'Can I charge devices in a New Zealand campervan?',
      answer:
        'Yes. When parked at a powered site in a holiday park, your campervan will have standard Type I outlets. Some campervans also have 12V (cigarette lighter) and USB ports that work while driving. Bring a multi-port USB charger to make the most of available outlets.',
    },
    {
      question: 'Where is the best place to buy an adapter in New Zealand?',
      answer:
        'Noel Leeming, JB Hi-Fi, and PB Tech are the main electronics chains and offer good prices. The Warehouse is cheaper for basic adapters. Auckland and Christchurch airports sell them too, but at a premium.',
    },
    {
      question: 'Do I need to flip a switch to turn on NZ outlets?',
      answer:
        'Yes. Every New Zealand outlet has a small switch beside it. If you plug something in and it doesn\'t charge, the switch is probably off. This is a safety feature — outlets are de-energized when switched off.',
    },
    {
      question: 'Is the same adapter good for NZ and Fiji?',
      answer:
        'Yes — Fiji also uses Type I plugs. If you\'re doing a New Zealand + Fiji trip, one adapter covers both destinations.',
    },
  ],
  metaTitle: 'New Zealand Power Plugs — Which Adapter Do You Need? (Type I)',
  metaDescription:
    'New Zealand uses Type I plugs (same as Australia) at 230V/50Hz. Find out if you need an adapter, where to buy one, and tips for charging in campervans and on the islands.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Australia', slug: 'australia-electric-plug-types-do-you-need-adapter' },
    { name: 'Fiji', slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva' },
    { name: 'Tonga', slug: 'tongo-electric-plug-types-which-adapter-will-you-need-for-tongo' },
    { name: 'Samoa', slug: 'samoa-electric-plug-types-will-you-need-an-adapter-for-samoa' },
  ],
};

export default newZealand;

import type { CountryPlugData } from '@/types';

const fiji: CountryPlugData = {
  slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva',
  name: 'Fiji',
  demonym: 'Fijian',
  continent: 'Oceania',
  region: 'Pacific Islands',
  voltage: 240,
  frequency: 50,
  complexityTier: 'simple',
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
    'Same as Australia and New Zealand — Type I exclusively. Most Fijian resorts cater to Australian and NZ tourists, so if you are coming from that part of the world you are all set. Some remote island resorts run on solar or generator power with limited hours.',
  ],
  travelContext:
    'Fiji is a straightforward destination for Australians and New Zealanders — identical plugs and nearly identical voltage. Everyone else needs an adapter. The main tourist islands (Viti Levu, Mamanuca chain, Yasawa chain) have reliable power at resorts. Very remote islands and budget backpacker options may run on generators or solar with electricity available only part of the day.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US plugs do not fit Fijian Type I outlets. You need an adapter. Fiji runs at 240V — check that your devices are dual-voltage.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit. Bring an adapter. Voltage is compatible (240V vs 230V).',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit Fijian flat-pin outlets. You need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Australia / NZ',
      originPlugTypes: 'I',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'No adapter or converter needed. Fiji uses the same Type I plugs and similar voltage as Australia and New Zealand.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Courts',
      type: 'electronics',
      city: 'Nadi / Suva',
      priceRange: 'FJD 10–FJD 50',
      note: 'Electronics and appliance retailer with branches in major Fijian towns.',
    },
    {
      name: 'Jack\'s of Fiji',
      type: 'electronics',
      city: 'Nadi',
      priceRange: 'FJD 15–FJD 60',
      note: 'Tourist-oriented retail chain in Nadi and Port Denarau. Carries travel adapters.',
    },
    {
      name: 'MH Supermarket',
      type: 'supermarket',
      priceRange: 'FJD 10–FJD 40',
      note: 'Supermarket chain that sometimes stocks basic adapters.',
    },
    {
      name: 'Nadi Airport shops',
      type: 'airport',
      city: 'Nadi',
      priceRange: 'FJD 20–FJD 80',
      note: 'Small shops at Nadi International carry travel adapters for arriving tourists.',
    },
  ],
  airportName: 'Nadi International Airport',
  airportCode: 'NAN',
  neighbors: [
    {
      name: 'Tonga',
      slug: 'tongo-electric-plug-types-which-adapter-will-you-need-for-tongo',
      plugTypes: ['I'],
      voltage: 240,
      sameAsSubject: 'identical',
      adapterNote: 'Tonga uses the same Type I system.',
    },
    {
      name: 'Samoa',
      slug: 'samoa-electric-plug-types-will-you-need-an-adapter-for-samoa',
      plugTypes: ['I'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Samoa uses Type I. Your Fiji adapter works.',
    },
    {
      name: 'Vanuatu',
      slug: 'vanuatu-electric-plug-types-which-adapter-do-you-need-for-vanuatu',
      plugTypes: ['I'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Vanuatu uses the same Type I outlets.',
    },
    {
      name: 'New Zealand',
      slug: 'new-zealand-electric-plug-types-which-adapter-should-you-get',
      plugTypes: ['I'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'New Zealand uses the same plugs. No adapter needed between the two countries.',
    },
    {
      name: 'Australia',
      slug: 'australia-electric-plug-types-do-you-need-adapter',
      plugTypes: ['I'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Australia uses identical Type I outlets.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Fiji\'s resorts primarily cater to Australian and New Zealand visitors, so outlets are Type I throughout. Upscale resorts on the Mamanuca and Yasawa island chains are well-equipped, sometimes with USB ports. Budget backpacker dorms and remote island bures may have limited outlets and generator-based power with restricted hours. Ask about power availability before booking remote accommodation.',
  faqs: [
    {
      question: 'Do Australians need an adapter for Fiji?',
      answer:
        'No. Fiji uses the same Type I plugs and similar voltage (240V) as Australia. Your devices plug in directly with no adapter or converter needed.',
    },
    {
      question: 'What adapter do US travelers need for Fiji?',
      answer:
        'You need a Type A/B to Type I adapter. Fiji uses Australian-style angled flat-pin outlets at 240V. Check that your devices are dual-voltage (100–240V) before plugging in.',
    },
    {
      question: 'Is there electricity on Fiji\'s outer islands?',
      answer:
        'Most tourist-oriented resorts on the outer islands have power, often from generators or solar panels. Some only run electricity during certain hours (typically evening into night). USB charging may be available even when mains power is off. Ask your resort about their power schedule.',
    },
    {
      question: 'Can I buy an adapter at Nadi Airport?',
      answer:
        'Yes. Small electronics shops in Nadi Airport\'s arrivals area sell travel adapters. You can also find them at Jack\'s of Fiji in Nadi town or at Courts electronics stores.',
    },
  ],
  metaTitle: 'Fiji Power Plugs: Type I (Australian) at 240V — Do You Need an Adapter?',
  metaDescription:
    'Fiji uses Australian-style Type I plugs at 240V/50Hz. Australians and Kiwis need nothing. US, UK, and European travelers need an adapter. Here\'s the full guide.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Australia', slug: 'australia-electric-plug-types-do-you-need-adapter' },
    { name: 'New Zealand', slug: 'new-zealand-electric-plug-types-which-adapter-should-you-get' },
    { name: 'Vanuatu', slug: 'vanuatu-electric-plug-types-which-adapter-do-you-need-for-vanuatu' },
    { name: 'Samoa', slug: 'samoa-electric-plug-types-will-you-need-an-adapter-for-samoa' },
  ],
};

export default fiji;

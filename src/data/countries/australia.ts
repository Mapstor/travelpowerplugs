import type { CountryPlugData } from '@/types';

const australia: CountryPlugData = {
  slug: 'australia-electric-plug-types-do-you-need-adapter',
  name: 'Australia',
  demonym: 'Australian',
  continent: 'Oceania',
  region: 'Oceania',
  voltage: 230,
  frequency: 50,
  complexityTier: 'simple',
  
  plugTypes: [
    {
      id: 'type-i',
      name: 'Type I',
      subtitle: 'Australian Standard',
      pins: 3,
      pinShape: 'flat',
      pinDiameter: 6.5,
      pinSpacing: 13.7,
      ratedAmps: 10,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.4,
      bodyHeight: 1.2,
      bodyCornerRadius: 0.25,
      noseRadius: 0.5,
      recessRadius: 1.0,
      faceplateSize: 2.8,
    },
  ],
  
  quirks: [
    'Australian outlets are switched — each socket has its own on/off switch for safety. Make sure the switch is turned on or your device won\'t charge.',
    'The Type I plug has two flat pins in a V-shape plus a third flat grounding pin. The live and neutral pins are angled at 30 degrees from vertical.',
  ],
  
  travelContext: 'Australia is a vast country with modern infrastructure throughout. From Sydney and Melbourne to the Outback and Great Barrier Reef, you\'ll find reliable power everywhere. The unique Type I plug is also used in New Zealand, Argentina, and parts of China.',
  
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes: 'US plugs won\'t fit Australian outlets. You need a Type A/B to Type I adapter. Most modern electronics handle 230V automatically.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes: 'UK Type G plugs need an adapter for Australian Type I sockets. Voltage is the same (230V), so no converter needed.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes: 'European plugs won\'t fit Australian outlets. Bring a Type C/E/F to Type I adapter. Voltage matches at 230V.',
    },
    {
      origin: 'Asia',
      originPlugTypes: 'Various',
      adapterNeeded: true,
      converterNeeded: false,
      notes: 'Most Asian countries use different plug types. Chinese Type I plugs work directly, but Type A and C plugs need adapters.',
    },
  ],
  
  localPurchaseOptions: [
    {
      name: 'JB Hi-Fi',
      type: 'electronics',
      city: 'Nationwide',
      priceRange: 'A$10–30',
      note: 'Major electronics retailer with stores in all cities. Good selection of travel adapters.',
    },
    {
      name: 'Officeworks',
      type: 'electronics',
      city: 'Nationwide',
      priceRange: 'A$8–25',
      note: 'Office supply chain that stocks basic travel adapters and power boards.',
    },
    {
      name: 'Coles/Woolworths',
      type: 'supermarket',
      city: 'Nationwide',
      priceRange: 'A$10–20',
      note: 'Major supermarkets often carry basic adapters in their electronics sections.',
    },
    {
      name: 'Sydney Airport shops',
      type: 'airport',
      city: 'Sydney',
      priceRange: 'A$15–40',
      note: 'Airport electronics stores and newsagents sell adapters at premium prices.',
    },
  ],
  
  airportName: 'Sydney Kingsford Smith Airport',
  airportCode: 'SYD',
  
  neighbors: [
    {
      name: 'New Zealand',
      slug: 'new-zealand-electric-plug-types',
      plugTypes: ['I'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Same Type I plugs and 230V — no adapter needed between Australia and New Zealand.',
    },
    {
      name: 'Indonesia',
      slug: 'indonesia-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Indonesia uses European Type C/F plugs. You\'ll need an adapter.',
    },
    {
      name: 'Papua New Guinea',
      slug: 'papua-new-guinea-electric-plug-types',
      plugTypes: ['I'],
      voltage: 240,
      sameAsSubject: 'compatible',
      adapterNote: 'PNG uses the same Type I plugs as Australia. No adapter needed.',
    },
  ],
  
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  
  accommodationNote: 'Australian hotels, especially in cities like Sydney, Melbourne, and Brisbane, typically provide hair dryers and increasingly offer USB charging ports. International hotels may have universal outlets. Budget accommodations and hostels rarely provide adapters.',
  
  faqs: [
    {
      question: 'Do I need a power adapter for Australia?',
      answer: 'If you\'re coming from the US, UK, Europe, or most of Asia, yes — you\'ll need a Type I adapter. Only visitors from New Zealand, Argentina, and parts of China can plug in directly.',
    },
    {
      question: 'Why do Australian power outlets have switches?',
      answer: 'It\'s a safety feature required by Australian standards. Each outlet has its own on/off switch to prevent electrical accidents and save energy. Always check the switch is on when plugging in devices.',
    },
    {
      question: 'Can I use my US electronics in Australia?',
      answer: 'Most modern electronics (phones, laptops, cameras) are dual-voltage (100-240V) and will work with just a plug adapter. Check your device\'s power label — if it says 110V only, you\'ll need a voltage converter.',
    },
    {
      question: 'Where can I buy adapters in Australia?',
      answer: 'JB Hi-Fi, Officeworks, and major supermarkets like Coles and Woolworths sell adapters. Airports have them too but at higher prices. In tourist areas, convenience stores often stock them.',
    },
    {
      question: 'Is the power reliable in the Australian Outback?',
      answer: 'Major Outback towns have reliable grid power. Remote areas and some camps use generators with limited hours. Bring a power bank for remote travel. Most 4WD tours provide charging facilities.',
    },
  ],
  
  metaTitle: 'Australia Power Plugs: Type I, 230V — Do You Need an Adapter?',
  metaDescription: 'Australia uses Type I plugs with angled flat pins at 230V/50Hz. US, UK, and EU travelers need adapters. Learn about Australia\'s switched outlets and where to buy adapters.',
  lastUpdated: '2025-01-15',
  
  relatedCountries: [
    { name: 'New Zealand', slug: 'new-zealand-electric-plug-types' },
    { name: 'Fiji', slug: 'fiji-electric-plug-types' },
    { name: 'Indonesia', slug: 'indonesia-electric-plug-types' },
    { name: 'Singapore', slug: 'singapore-electric-plug-types' },
  ],
};

export default australia;
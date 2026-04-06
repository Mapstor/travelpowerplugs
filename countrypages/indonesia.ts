import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia',
  name: 'Indonesia',
  demonym: 'Indonesian',
  continent: 'Asia',
  region: 'Southeast Asia',
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
    'Standard European plugs work throughout Indonesia. Bali resorts generally have excellent electrical infrastructure with USB ports in rooms, while budget guesthouses on the Gili Islands or Flores may have limited outlets and inconsistent power.',
    'Some remote islands run entirely on generator power with electricity available only during limited hours, typically in the evening.',
  ],
  travelContext:
    'Indonesia spans over 17,000 islands, so electrical infrastructure varies dramatically. Java and Bali have modern, reliable power grids. Outer islands like Flores, Sumba, and parts of Kalimantan may rely on local generators. If you are island-hopping beyond the main tourist trail, pack a battery bank.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs do not fit Indonesian round-pin sockets. You need an adapter. Check your device voltage — Indonesia uses 230V. Most phone chargers and laptops are dual-voltage, but US hair dryers and similar appliances are not.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs are too large for Indonesian outlets. Bring a Type G to Type C/F adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and F plugs fit Indonesian outlets directly. No adapter or converter needed — voltage and frequency match perfectly.',
    },
    {
      origin: 'Australia / NZ',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs will not fit. You need an adapter to Type C/F. Voltage is compatible (230V vs 240V).',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Electronic City',
      type: 'electronics',
      priceRange: 'Rp 30,000–Rp 150,000',
      note: 'Large electronics retailer in major malls across Java and Bali.',
    },
    {
      name: 'Ace Hardware',
      type: 'electronics',
      priceRange: 'Rp 25,000–Rp 120,000',
      note: 'Hardware chain with branches in most Indonesian cities. Good selection of adapters.',
    },
    {
      name: 'Indomaret / Alfamart',
      type: 'convenience',
      priceRange: 'Rp 20,000–Rp 60,000',
      note: 'Ubiquitous convenience stores. Stock basic adapters and USB cables at some locations.',
    },
    {
      name: 'Soekarno-Hatta / Ngurah Rai Airport shops',
      type: 'airport',
      city: 'Jakarta / Bali',
      priceRange: 'Rp 80,000–Rp 300,000',
      note: 'Airport shops stock travel adapters at higher prices.',
    },
  ],
  airportName: 'Soekarno-Hatta International / Ngurah Rai International',
  airportCode: 'CGK / DPS',
  neighbors: [
    {
      name: 'Malaysia',
      slug: 'malaysia-electric-plug-types-will-you-need-an-adapter-in-kuala-lumpur',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Malaysia uses British Type G — you will need a different adapter if crossing the border.',
    },
    {
      name: 'East Timor',
      slug: 'east-timor-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'E', 'F', 'I'],
      voltage: 220,
      sameAsSubject: 'mostly',
      adapterNote: 'East Timor shares Type C/F with Indonesia. Your adapter should work.',
    },
    {
      name: 'Papua New Guinea',
      slug: 'papua-new-guinea-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['I'],
      voltage: 240,
      sameAsSubject: 'different',
      adapterNote: 'PNG uses Australian Type I outlets — not compatible with Indonesian plugs.',
    },
    {
      name: 'Australia',
      slug: 'australia-electric-plug-types-do-you-need-adapter',
      plugTypes: ['I'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Australia uses Type I. You will need a different adapter.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'common',
  accommodationNote:
    'Bali resorts and Jakarta business hotels typically have USB ports built into bedside panels and may lend adapters at reception. Budget guesthouses across the archipelago usually have basic Type C/F outlets. On remote islands, accommodation may have generator power with limited socket availability — ask ahead.',
  faqs: [
    {
      question: 'Do I need an adapter for Indonesia?',
      answer:
        'If you are coming from Europe with a Type C or F plug, no. Travelers from the US, UK, and Australia all need an adapter because Indonesian outlets use round-pin European-style sockets.',
    },
    {
      question: 'Can I use my US hair dryer in Indonesia?',
      answer:
        'Probably not without a voltage converter. Indonesia uses 230V, while US hair dryers are typically rated for 120V only. Plugging in directly could burn out the motor. Check the label — if it says "100–240V" you only need a plug adapter.',
    },
    {
      question: 'Is the power reliable in Bali?',
      answer:
        'Yes. Bali\'s tourist areas — Seminyak, Ubud, Canggu, Nusa Dua — have reliable mains power. Brief outages can occur during heavy rain, but most hotels and villas have backup generators. Remote areas on smaller islands may run on scheduled generator power.',
    },
    {
      question: 'What about charging devices on the Gili Islands?',
      answer:
        'The Gili Islands have improved their power infrastructure significantly, but some budget guesthouses still rely on generators. USB charging is usually available. Bring a battery pack if you plan to spend full days at the beach away from your room.',
    },
    {
      question: 'Where can I buy an adapter in Bali?',
      answer:
        'Ace Hardware and Electronic City in Bali\'s shopping centres carry adapters. Indomaret and Alfamart convenience stores sometimes have them too. Your hotel reception may also have loaner adapters.',
    },
  ],
  metaTitle: 'Indonesia Power Plugs: Types C & F — Do You Need an Adapter?',
  metaDescription:
    'Indonesia uses European-style Type C and F plugs at 230V/50Hz. Find out if you need an adapter, what to pack for Bali and beyond, and where to buy one locally.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Malaysia', slug: 'malaysia-electric-plug-types-will-you-need-an-adapter-in-kuala-lumpur' },
    { name: 'Thailand', slug: 'thailand-electric-plug-type-will-you-need-an-adapter-for-thailand' },
    { name: 'Philippines', slug: 'philippines-electric-plug-types-will-you-need-an-adapter-for-philippines' },
    { name: 'Vietnam', slug: 'vietnam-electric-plug-types-which-adapter-will-you-need-for-vietnam' },
  ],
};

export default data;

import type { CountryPlugData } from '../types';

const serbia: CountryPlugData = {
  slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade',
  name: 'Serbia',
  demonym: 'Serbian',
  continent: 'Europe',
  region: 'Southeast Europe',
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
    'Belgrade's vibrant nightlife district along the Sava River includes many bars and clubs in renovated industrial spaces — outlet access inside venues is hit-or-miss, so charge up before heading out.',
    'Serbian Željeznice trains are gradually being modernized, but many older regional coaches lack outlets entirely. The Belgrade–Novi Sad high-speed line (opened 2022) has outlets at every seat.',
  ],

  travelContext:
    'Serbia centers on Belgrade's energetic urban scene, with growing interest in Novi Sad (home of EXIT Festival), Niš's Roman heritage, and the rural monasteries of Fruška Gora. Power infrastructure is reliable in cities. The new Belgrade–Novi Sad high-speed rail is modern and well-equipped.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs won't fit Serbian round sockets. Bring a Type A/B to C/F adapter. Most US electronics are dual-voltage.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs need an adapter. Same 230V voltage.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Serbia uses the same Type C/F standard. No adapter needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. Bring an adapter; voltage matches at 230V.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'Gigatron',
      type: 'electronics',
      city: 'Belgrade',
      priceRange: '€3–€10',
      note: 'Serbian electronics chain with stores in malls and high streets.',
    },
    {
      name: 'WinWin',
      type: 'electronics',
      priceRange: '€3–€10',
      note: 'Electronics retailer found across Serbia.',
    },
    {
      name: 'Tehnomanija',
      type: 'electronics',
      priceRange: '€3–€10',
      note: 'Electronics and appliance chain with wide selection.',
    },
    {
      name: 'Idea',
      type: 'supermarket',
      priceRange: '€2–€8',
      note: 'Serbian supermarket chain — larger stores may stock basic adapters.',
    },
    {
      name: 'Belgrade Nikola Tesla Airport (BEG)',
      type: 'airport',
      city: 'Belgrade',
      priceRange: '€5–€15',
      note: 'Small shops in the terminal carry travel adapters.',
    },
  ],

  airportName: 'Belgrade Nikola Tesla Airport',
  airportCode: 'BEG',

  neighbors: [
    {
      name: 'Hungary',
      slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Romania',
      slug: 'romania-electric-plug-types-will-you-need-an-adapter-in-romania',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Bulgaria',
      slug: 'bulgaria-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'North Macedonia',
      slug: 'north-macedonia-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Kosovo',
      slug: 'kosovo-electric-plug-types-will-you-need-an-adapter-in-pristina',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Montenegro',
      slug: 'montenegro-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Bosnia And Herzegovina',
      slug: 'bosnia-and-herzegovina-electric-plug-types-is-adapter-needed',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Croatia',
      slug: 'croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],

  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'common',
  accommodationNote:
    'Belgrade hotels range from international chains with modern amenities to characterful boutique stays in Dorćol and Savamala. All have standard Schuko outlets. Novi Sad accommodation is equally reliable. Rural monasteries that accept guests and smaller countryside guesthouses have basic but functional power.',

  faqs: [
    {
      question: 'Do I need a travel adapter for Serbia?',
      answer:
        'Yes, if you're from the US, UK, or Australia. Serbia uses the European-standard Type C and F plugs. Travelers from Germany and most of the EU can plug in directly without an adapter.',
    },
    {
      question: 'Is Serbian electricity the same as in neighboring countries?',
      answer:
        'Yes — Serbia uses the same Type C/F plugs at 230V/50Hz as Hungary, Romania, Bulgaria, Croatia, and all its neighbors. One adapter covers the entire region if you're traveling through the Balkans.',
    },
    {
      question: 'Where is the cheapest place to buy an adapter in Belgrade?',
      answer:
        'Gigatron, WinWin, or Tehnomanija in shopping centers like Ušće or Delta City offer adapters starting around €3. Prices in Serbia are generally lower than in Western Europe.',
    },
    {
      question: 'Does the Belgrade–Novi Sad train have outlets?',
      answer:
        'Yes — the new high-speed train (opened 2022) between Belgrade and Novi Sad has outlets at every seat. It's one of Serbia's newest pieces of infrastructure.',
    },
    {
      question: 'Will I have reliable power at EXIT Festival in Novi Sad?',
      answer:
        'The festival grounds at Petrovaradin Fortress have limited charging options. Bring a fully charged power bank. Your hotel or hostel in Novi Sad will have standard Schuko outlets for recharging overnight.',
    },
  ],

  metaTitle: 'Serbia Power Plugs — Which Adapter Will You Need in Belgrade? (Types C & F)',
  metaDescription:
    'Serbia uses Type C and F plugs at 230V/50Hz. Find out if you need an adapter for Belgrade, where to buy one cheaply, and Balkan travel tips.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Croatia', slug: 'croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip' },
    { name: 'Bosnia And Herzegovina', slug: 'bosnia-and-herzegovina-electric-plug-types-is-adapter-needed' },
    { name: 'Montenegro', slug: 'montenegro-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Hungary', slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest' },
    { name: 'Romania', slug: 'romania-electric-plug-types-will-you-need-an-adapter-in-romania' },
  ],
};

export default serbia;

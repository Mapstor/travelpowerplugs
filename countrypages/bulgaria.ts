import type { CountryPlugData } from '../types';

const bulgaria: CountryPlugData = {
  slug: 'bulgaria-electric-plug-types-do-you-need-an-adapter',
  name: 'Bulgaria',
  demonym: 'Bulgarian',
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
    'Bulgaria's Black Sea resorts (Sunny Beach, Golden Sands) are modern and well-wired, but budget all-inclusive properties occasionally have worn outlets in older room blocks — a short extension cord can help.',
  ],

  travelContext:
    'Bulgaria offers Sofia's cultural scene, Black Sea beach resorts, ski destinations like Bansko, and ancient Plovdiv. Power infrastructure is modern in cities and tourist areas. BDZ trains are being upgraded but older rolling stock on regional routes may lack outlets. Budget airlines connect Sofia to most European capitals.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs won't fit Bulgarian round sockets. Bring a Type A/B to C/F adapter. Most US chargers are dual-voltage.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs require an adapter. Same 230V voltage — no converter needed.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Bulgaria uses the same C/F standard as Germany and most of Europe. No adapter needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. Pack an adapter; voltage matches at 230V.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'Technopolis',
      type: 'electronics',
      city: 'Sofia',
      priceRange: '€3–€10',
      note: 'Bulgarian electronics chain with stores in major malls.',
    },
    {
      name: 'Technomarket',
      type: 'electronics',
      priceRange: '€3–€10',
      note: 'Electronics retailer found in cities across Bulgaria.',
    },
    {
      name: 'Kaufland',
      type: 'supermarket',
      priceRange: '€2–€8',
      note: 'German-owned hypermarket chain in Bulgaria with a small electronics section.',
    },
    {
      name: 'Sofia Airport (SOF)',
      type: 'airport',
      city: 'Sofia',
      priceRange: '€5–€15',
      note: 'Small convenience shops in the terminal stock basic adapters.',
    },
  ],

  airportName: 'Sofia Airport',
  airportCode: 'SOF',

  neighbors: [
    {
      name: 'Romania',
      slug: 'romania-electric-plug-types-will-you-need-an-adapter-in-romania',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Serbia',
      slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade',
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
      name: 'Greece',
      slug: 'greece-electric-plug-types-will-you-need-an-adapter-in-greece',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Turkey',
      slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],

  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'common',
  accommodationNote:
    'Sofia and Plovdiv hotels are modern and fully equipped. Black Sea resort hotels vary — newer properties are excellent while older Soviet-era blocks may have dated wiring. Ski resort accommodations in Bansko and Borovets have standard outlets. Rural guesthouses are simple but electrically reliable.',

  faqs: [
    {
      question: 'Do I need a travel adapter for Bulgaria?',
      answer:
        'Yes, if you're from the US, UK, or Australia. Bulgaria uses the standard European Type C and F plugs. European travelers with Schuko or Europlug devices can use them directly.',
    },
    {
      question: 'Is Bulgaria's electricity reliable?',
      answer:
        'Yes. Bulgaria's power grid is stable in cities, beach resorts, and ski destinations. Outages are very rare in tourist areas.',
    },
    {
      question: 'Where can I buy a cheap adapter in Sofia?',
      answer:
        'Technopolis or Technomarket in Paradise Center or The Mall are your best options. Adapters are inexpensive in Bulgaria — expect to pay around €3–€10. Kaufland supermarkets also carry them.',
    },
    {
      question: 'Will my adapter from Greece work in Bulgaria?',
      answer:
        'Yes — Greece and Bulgaria use the same Type C/F system at 230V/50Hz. No adapter change needed when crossing the border.',
    },
  ],

  metaTitle: 'Bulgaria Power Plugs — Do You Need an Adapter? (Types C & F)',
  metaDescription:
    'Bulgaria uses Type C and F plugs at 230V/50Hz. Find out if you need a travel adapter for Sofia or the Black Sea coast, and where to buy one locally.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Romania', slug: 'romania-electric-plug-types-will-you-need-an-adapter-in-romania' },
    { name: 'Greece', slug: 'greece-electric-plug-types-will-you-need-an-adapter-in-greece' },
    { name: 'Turkey', slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey' },
    { name: 'Serbia', slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade' },
  ],
};

export default bulgaria;

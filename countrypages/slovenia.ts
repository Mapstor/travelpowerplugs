import type { CountryPlugData } from '../types';

const slovenia: CountryPlugData = {
  slug: 'slovenia-electric-plug-types-will-you-need-an-adapter-for-slovenia',
  name: 'Slovenia',
  demonym: 'Slovenian',
  continent: 'Europe',
  region: 'Central Europe',
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
    'Only Type F outlets are permitted in new Slovenian installations — Type C sockets are being phased out, though Type C plugs still fit Type F sockets perfectly.',
  ],

  phaseOutNote: 'Only Type F outlets are permitted in new installations. Type C plugs still fit Type F sockets.',

  travelContext:
    'Slovenia is a compact gem offering Ljubljana's charming old town, Lake Bled, the Julian Alps, Postojna Cave, and a sliver of Adriatic coast at Piran. Power infrastructure is excellent throughout. Slovenske železnice (SŽ) trains on main routes have outlets. The country's small size means you're never far from a town with shops.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs require a Type A/B to C/F adapter. Most US chargers handle 230V natively.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs need an adapter. Same 230V voltage — no converter.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Slovenia uses the same Type C/F standard. Your European plugs work directly.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. Bring a travel adapter; voltage matches.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'Big Bang',
      type: 'electronics',
      city: 'Ljubljana',
      priceRange: '€5–€15',
      note: 'Slovenia's main electronics chain with stores in BTC City and other shopping centers.',
    },
    {
      name: 'Harvey Norman',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Electronics and appliance retailer with Slovenian locations.',
    },
    {
      name: 'Müller',
      type: 'convenience',
      priceRange: '€5–€12',
      note: 'Drugstore/lifestyle chain that carries basic electronics accessories including travel adapters.',
    },
    {
      name: 'Ljubljana Jože Pučnik Airport (LJU)',
      type: 'airport',
      city: 'Ljubljana',
      priceRange: '€8–€18',
      note: 'Small airport with limited shopping — adapter selection may be sparse. Buy before your trip if possible.',
    },
  ],

  airportName: 'Ljubljana Jože Pučnik Airport',
  airportCode: 'LJU',

  neighbors: [
    {
      name: 'Austria',
      slug: 'austria-electric-power-plug-types-do-you-need-an-adapter',
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
    {
      name: 'Hungary',
      slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Italy',
      slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters',
      plugTypes: ['C', 'F', 'L'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Italy also uses Type L, but C and F sockets are common there too. Most devices work without an adapter when crossing the border.',
    },
  ],

  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Ljubljana hotels and Lake Bled guesthouses have modern outlets. Alpine mountain huts in Triglav National Park have basic power. Coastal Piran accommodations are well-equipped. Slovenia's small size means you can always reach a town with electronics shops within a short drive.',

  faqs: [
    {
      question: 'Do I need a power adapter for Slovenia?',
      answer:
        'If you're from the US, UK, or Australia — yes. Slovenia uses Type C and F round-pin plugs, the same as most of continental Europe. Travelers from Germany, Austria, or Croatia can plug in directly.',
    },
    {
      question: 'Are Slovenian outlets the same as Austrian and Croatian ones?',
      answer:
        'Yes — Slovenia, Austria, and Croatia all use Type C and F at 230V/50Hz. One adapter (or none, if you're European) covers the whole region.',
    },
    {
      question: 'What does the Type C phase-out mean for travelers?',
      answer:
        'Slovenia requires Type F (Schuko) sockets in new installations, phasing out Type C-only outlets. This doesn't affect travelers at all — Type C plugs fit into Type F sockets without any issue.',
    },
    {
      question: 'Can I buy an adapter at Ljubljana Airport?',
      answer:
        'Ljubljana's airport is small and has limited shops. It's more reliable to buy an adapter in advance, at Big Bang in BTC City shopping center in Ljubljana, or at Müller in the city center.',
    },
    {
      question: 'Will I have power at Lake Bled accommodations?',
      answer:
        'Absolutely. Hotels and guesthouses around Lake Bled have fully modern Schuko outlets. Even smaller pensions in the surrounding villages are well-equipped.',
    },
  ],

  metaTitle: 'Slovenia Power Plugs — Will You Need an Adapter? (Types C & F)',
  metaDescription:
    'Slovenia uses Type C and F plugs at 230V/50Hz. Find out if you need an adapter for Ljubljana or Lake Bled, and where to buy one in this compact Alpine country.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Austria', slug: 'austria-electric-power-plug-types-do-you-need-an-adapter' },
    { name: 'Croatia', slug: 'croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
    { name: 'Hungary', slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest' },
  ],
};

export default slovenia;

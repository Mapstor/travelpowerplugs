import type { CountryPlugData } from '../types';

const spain: CountryPlugData = {
  slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain',
  name: 'Spain',
  demonym: 'Spanish',
  continent: 'Europe',
  region: 'Southern Europe',
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
    'Spain uses the same Type C/F (Schuko) system as Germany, making it one of the most straightforward European destinations for plug compatibility.',
    'Some older Spanish buildings — especially in rural areas and the Canary Islands — may have non-recessed outlets or legacy socket types, but these still accept standard Europlugs.',
    'The Canary Islands, Balearic Islands (Mallorca, Ibiza), and mainland Spain all use the same plug system and voltage.',
  ],
  travelContext:
    'Spain is a top European travel destination with excellent electrical infrastructure. Its plug system is one of the simplest in Europe — standard Type C and F, identical to Germany, Austria, and the Netherlands. Travelers from most of continental Europe can plug in without a second thought. Visitors from the US, UK, or Australia need a basic adapter but generally no converter for modern electronics.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs don\'t fit Spanish round-pin outlets. Bring a US-to-Schuko adapter. Modern electronics are dual-voltage; older devices like hair dryers may need a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are too large for Spanish sockets. Bring a UK-to-Schuko adapter. Same voltage (230V/50Hz), no converter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs won\'t fit Spanish sockets. Bring an AU-to-Schuko adapter. Same voltage, no converter necessary.',
    },
    {
      origin: 'Germany / Netherlands / Austria',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Identical plug system. Your German, Dutch, or Austrian devices plug right in with no adapter needed.',
    },
    {
      origin: 'France (Type E)',
      originPlugTypes: 'C, E',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'French Type E plugs are cross-compatible with Spanish Schuko (Type F) sockets. No adapter needed.',
    },
    {
      origin: 'Switzerland',
      originPlugTypes: 'C, J',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Swiss Type C Europlugs fit Spanish sockets fine. Three-pin Type J plugs do not fit Schuko sockets — bring an adapter for grounded Swiss devices.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'El Corte Inglés',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Spain\'s iconic department store chain. The electronics floor carries travel adapters and universal plug kits.',
    },
    {
      name: 'MediaMarkt Spain',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Large electronics retailer found in major Spanish cities and shopping centers.',
    },
    {
      name: 'FNAC Spain',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Electronics and media store with locations in Madrid, Barcelona, and other major cities.',
    },
    {
      name: 'Madrid Barajas Airport (MAD) shops',
      type: 'airport',
      city: 'Madrid',
      priceRange: '€10–€25',
      note: 'Electronics kiosks and convenience stores in Terminals 1–4 sell travel adapters at airport prices.',
    },
  ],
  airportName: 'Madrid Barajas Airport',
  airportCode: 'MAD',
  neighbors: [
    {
      name: 'France',
      slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'French Type E and Spanish Type F are cross-compatible. No adapter needed.',
    },
    {
      name: 'Portugal',
      slug: 'portugal-electric-plug-types-will-you-need-adapter-in-lisbon-porto',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Portugal uses the same Type C/F system as Spain. No adapter needed.',
    },
    {
      name: 'Andorra',
      slug: 'andorra-plug-types-electric-sockets-used-in-andorra-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Andorra uses the same plugs and voltage as Spain. No adapter needed.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Spanish hotels from 3 stars up reliably provide hair dryers and are increasingly installing USB ports at bedsides and desks. International chain hotels often have loaner adapters at the front desk. Beach resorts in popular areas like the Costa del Sol and Balearic Islands tend to be well-equipped for international guests. Older city-center apartments booked through rental platforms may have fewer outlets than expected — a compact power strip can help.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all Apple and major Android chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'Only a plug adapter is needed. No converter required.',
    },
    {
      device: 'Laptop (MacBook, Dell, etc.)',
      dualVoltage: 'Yes — virtually all laptop power bricks handle 100–240V.',
      adapterOnly: 'Yes',
      note: 'Use an adapter or buy a local power cable with a Schuko plug.',
    },
    {
      device: 'Hair dryer / Flat iron',
      dualVoltage: 'Rarely — most US models are 120V only.',
      adapterOnly: 'No — you likely need a converter or dual-voltage model.',
      note: 'Check your label. If it reads 120V only, don\'t plug it into a 230V Spanish outlet. Use the hotel\'s or buy a local one cheaply.',
    },
    {
      device: 'Electric razor / Toothbrush charger',
      dualVoltage: 'Usually yes — most are rated 100–240V.',
      adapterOnly: 'Yes',
      note: 'Verify on the label. Most modern models handle 230V just fine.',
    },
  ],
  faqs: [
    {
      question: 'Do I need an adapter for Spain?',
      answer:
        'If you\'re from the US, UK, or Australia — yes. Spain uses round-pin Type C and Type F (Schuko) sockets. Travelers from Germany, France, Portugal, and most of continental Europe don\'t need any adapter.',
    },
    {
      question: 'Are the outlets the same in mainland Spain and the Canary Islands?',
      answer:
        'Yes. The Canary Islands, Balearic Islands (Mallorca, Menorca, Ibiza), and mainland Spain all use the same Type C/F plugs at 230V/50Hz. No special adapter needed for the islands.',
    },
    {
      question: 'Will my French plugs work in Spain?',
      answer:
        'Yes. French Type E plugs are cross-compatible with Spanish Type F (Schuko) sockets. Your French devices will plug right in.',
    },
    {
      question: 'Can I charge my phone in Spain without a converter?',
      answer:
        'Yes. All modern smartphone chargers accept 100–240V input, making them compatible with Spain\'s 230V supply. You only need a plug adapter to fit the socket — no voltage converter needed.',
    },
    {
      question: 'Where can I buy an adapter in Spain?',
      answer:
        'El Corte Inglés department stores, MediaMarkt, and FNAC all carry travel adapters. You can also find them at supermarkets like Carrefour and Mercadona, or at airport shops — though airport prices are higher.',
    },
    {
      question: 'Do Spanish hotels provide power adapters?',
      answer:
        'Some larger hotels and international chains keep adapters at the front desk for guests. It\'s not universal, so bringing your own is recommended. Most hotels do have USB ports and hair dryers.',
    },
  ],
  metaTitle: 'Spain Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Spain uses Type C and Type F (Schuko) plugs at 230V/50Hz. Find out if you need an adapter, which plugs work, and where to buy one in Spain.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Portugal', slug: 'portugal-electric-plug-types-will-you-need-adapter-in-lisbon-porto' },
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
    { name: 'Andorra', slug: 'andorra-plug-types-electric-sockets-used-in-andorra-adapter' },
  ],
};

export default spain;

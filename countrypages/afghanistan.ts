import { CountryPlugData } from '../types';

const afghanistan: CountryPlugData = {
  slug: 'afghanistan-electric-plug-types',
  name: 'Afghanistan',
  demonym: 'Afghan',
  continent: 'Asia',
  region: 'Central Asia',
  voltage: 220,
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
    'Power infrastructure is severely damaged across much of the country. Most buildings rely on private generators and solar panels. Kabul has partial grid power, but rural areas are largely off-grid. A portable battery pack and solar charger are essential travel items.',
  ],
  travelContext:
    'Afghanistan presents one of the most challenging electrical environments for travelers. Grid electricity is unreliable even in Kabul, and completely absent in many rural areas. Most guesthouses and hotels operate on generators with limited hours of power. Bringing your own portable power solution is not optional — it is a necessity.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs will not fit Afghan outlets. You also need a voltage converter for any non-dual-voltage devices, as Afghanistan uses 220V. However, power availability itself is a bigger concern than plug compatibility.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs require an adapter for the Type C/F outlets in Afghanistan. Voltage is compatible at 220V.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs (Type C) will fit directly. Type E/F plugs are also compatible. No voltage conversion needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs will not fit. Bring a C/F adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Bush Bazaar electronics stalls',
      type: 'electronics',
      city: 'Kabul',
      priceRange: '$1–$5',
      note: 'Basic adapters can sometimes be found among electronics vendors, but selection is extremely limited.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Kabul',
      note: 'Some international-standard hotels in Kabul may have a small supply of adapters for guests.',
    },
  ],
  airportName: 'Kabul Hamid Karzai International Airport',
  airportCode: 'KBL',
  neighbors: [
    {
      name: 'Pakistan',
      slug: 'pakistan-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'D'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Pakistan uses Type C (shared) but also Type D which is not found in Afghanistan.',
    },
    {
      name: 'Iran',
      slug: 'iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote: 'Iran uses the same C/F plug types and 220V — no adapter needed.',
    },
    {
      name: 'Tajikistan',
      slug: 'tajikistan-electric-plug-types-which-adapter-will-you-need-in-tajikistan',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
    {
      name: 'Uzbekistan',
      slug: 'uzbekistan-electric-plug-types-which-adapter-for-uzbekistan',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
    {
      name: 'Turkmenistan',
      slug: 'turkmenistan-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Even the better hotels in Kabul run on generator power with scheduled outages. International-standard hotels may provide adapters on request, but do not count on it. Outside Kabul, guesthouses typically have minimal or no electricity. Always carry a portable battery and consider a small solar charger.',
  faqs: [
    {
      question: 'Is it safe to charge electronics in Afghanistan?',
      answer:
        'When grid or generator power is available, voltage fluctuations are common. Use a surge protector to safeguard your devices. Many travelers rely entirely on portable battery packs charged from vehicle power or solar panels.',
    },
    {
      question: 'Will I have electricity outside Kabul?',
      answer:
        'Most areas outside major cities have little to no grid power. Guesthouses may run a generator for a few hours in the evening. Bringing a portable solar charger and battery pack is strongly recommended for travel outside Kabul.',
    },
    {
      question: 'What kind of adapter should I bring to Afghanistan?',
      answer:
        'A universal travel adapter is the safest choice. Outlets you encounter may be Type C or Type F, but quality and standardization vary. A compact universal adapter handles any outlet you might find.',
    },
  ],
  metaTitle: 'Afghanistan Power Plugs — Types C & F | Adapter & Power Guide',
  metaDescription:
    'Afghanistan uses Type C and F plugs at 220V/50Hz. Power infrastructure is severely limited — find out what adapters, battery packs, and solar chargers to bring.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Pakistan', slug: 'pakistan-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Iran', slug: 'iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran' },
    { name: 'Tajikistan', slug: 'tajikistan-electric-plug-types-which-adapter-will-you-need-in-tajikistan' },
  ],
};

export default afghanistan;

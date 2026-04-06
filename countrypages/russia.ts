import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
  name: 'Russia',
  demonym: 'Russian',
  continent: 'Europe',
  region: 'Eastern Europe',
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
    'Older Soviet-era buildings have a slightly different socket design with narrower pin spacing — modern European plugs usually still fit but may feel loose in these outlets.',
    'Trans-Siberian Railway cabins have 220V outlets (Type C/F) in each compartment, but they can be unreliable and may cut out during stops.',
  ],
  travelContext:
    'Russia spans eleven time zones and the travel experience varies enormously. Moscow and St. Petersburg are thoroughly modern with reliable power in hotels, cafés, and coworking spaces. Smaller cities along the Trans-Siberian route have older infrastructure where socket quality may vary. A portable power bank is wise for long train journeys.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-pin plugs will not fit Russian round-pin sockets. Russia runs on 220V/50Hz, so non-dual-voltage US devices also need a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK three-pin rectangular plugs won\'t fit. You need a Type G to Type C/F adapter. Voltage is close enough (220V vs 230V) that UK devices work fine.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs fit directly. In very old Soviet-era sockets, a modern Schuko plug may feel slightly loose but will make electrical contact.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian angled flat-pin plugs won\'t fit. You need a Type I to Type C/F adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    { name: 'DNS', type: 'electronics', city: 'Moscow', priceRange: '₽300–800', note: 'Russia\'s largest electronics chain — adapters in accessories aisle' },
    { name: 'M.Video', type: 'electronics', city: 'Moscow', priceRange: '₽400–1000', note: 'Major electronics retailer found in most cities' },
    { name: 'Eldorado', type: 'electronics', city: 'St. Petersburg', priceRange: '₽300–900', note: 'Electronics chain with locations in malls nationwide' },
    { name: 'Auchan', type: 'supermarket', city: 'Moscow', priceRange: '₽200–600', note: 'Hypermarket with a small electronics section' },
  ],
  airportName: 'Moscow Sheremetyevo International Airport',
  airportCode: 'SVO',
  neighbors: [
    { name: 'Finland', slug: 'finland-electric-plug-type-will-you-need-an-adapter-in-helsinki', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'compatible', adapterNote: 'Same plug types, slightly different voltage rating' },
    { name: 'Estonia', slug: 'estonia-electric-plug-types-will-you-need-an-adapter-in-estonia', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'compatible' },
    { name: 'Latvia', slug: 'latvia-electric-plug-type-will-you-need-an-adapter-in-riga', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'compatible' },
    { name: 'Belarus', slug: 'belarus-electric-plug-types-will-you-need-an-adapter', plugTypes: ['C', 'F'], voltage: 220, sameAsSubject: 'identical' },
    { name: 'Ukraine', slug: 'ukraine-electric-plug-types-what-kind-of-adapter-do-you-need', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'compatible' },
    { name: 'Georgia', slug: 'georgia-electric-plug-types-will-you-need-an-adapter-in-tbilisi', plugTypes: ['C', 'F'], voltage: 220, sameAsSubject: 'identical' },
    { name: 'Azerbaijan', slug: 'azerbaijan-electric-socket-types-will-you-need-an-adapter', plugTypes: ['C', 'F'], voltage: 220, sameAsSubject: 'identical' },
    { name: 'Kazakhstan', slug: 'kazakhstan-electric-plug-types-will-you-need-an-adapter-probably-yes', plugTypes: ['C', 'F'], voltage: 220, sameAsSubject: 'identical' },
    { name: 'Mongolia', slug: 'mongolia-electric-plug-types-will-you-need-an-adapter-in-the-steppe', plugTypes: ['C', 'E'], voltage: 220, sameAsSubject: 'partially' },
    { name: 'China', slug: '3-electric-plug-types-in-china-will-you-need-an-adapter', plugTypes: ['A', 'C', 'I'], voltage: 220, sameAsSubject: 'partially', adapterNote: 'China uses a different plug mix — Type C overlaps but Type A/I do not' },
    { name: 'North Korea', slug: 'north-korea-electric-plug-types-will-you-need-an-adapter-yup', plugTypes: ['C', 'F'], voltage: 220, sameAsSubject: 'identical' },
    { name: 'Norway', slug: 'norway-electric-plug-types-will-you-need-an-adapter-for-oslo', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'compatible' },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Moscow and St. Petersburg hotels from mid-range upward provide USB charging ports and sometimes universal outlets. Budget hostels and guesthouses in smaller cities generally have standard Type C/F sockets only. Trans-Siberian sleeper cars have outlets in each compartment but power may fluctuate.',
  faqs: [
    {
      question: 'Will my European plugs work in older Russian apartments?',
      answer:
        'Usually yes, but Soviet-era sockets had slightly narrower pin spacing (3.5mm vs 4mm diameter). Modern Europlug (Type C) pins are tapered and typically fit, though the connection may be looser than in Western Europe. Schuko (Type F) plugs generally seat fine.',
    },
    {
      question: 'Can I charge my phone on the Trans-Siberian Railway?',
      answer:
        'Yes — compartments have 220V Type C/F outlets. However, power can be intermittent, especially at stops. Bring a power bank as backup for long stretches.',
    },
    {
      question: 'Is the voltage in Russia safe for my US hair dryer?',
      answer:
        'Only if your hair dryer is dual-voltage (120–240V). Russia uses 220V — plugging in a 120V-only device will burn it out. Check the label on your device before using it.',
    },
    {
      question: 'Do I need an adapter for St. Petersburg hotels?',
      answer:
        'If you\'re coming from continental Europe, no — your plugs will fit. From the US, UK, or Australia, you\'ll need an adapter. Modern hotels in St. Petersburg sometimes have universal sockets or USB ports, but don\'t count on it.',
    },
    {
      question: 'Are power strips easy to find in Russia?',
      answer:
        'Yes. DNS and M.Video stock affordable power strips and surge protectors. They use Type C/F sockets. Useful if your hotel room has few outlets.',
    },
  ],
  metaTitle: 'Russia Power Plugs — Types C & F | Adapter Guide for Travelers',
  metaDescription:
    'Russia uses Type C and F plugs at 220V/50Hz. US, UK, and Australian travelers need an adapter. Learn about Soviet-era socket quirks, Trans-Siberian charging, and where to buy adapters locally.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Belarus', slug: 'belarus-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Ukraine', slug: 'ukraine-electric-plug-types-what-kind-of-adapter-do-you-need' },
    { name: 'Kazakhstan', slug: 'kazakhstan-electric-plug-types-will-you-need-an-adapter-probably-yes' },
    { name: 'Finland', slug: 'finland-electric-plug-type-will-you-need-an-adapter-in-helsinki' },
  ],
};

export default data;

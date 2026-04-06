import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'cyprus-electric-plug-types-will-you-need-an-adapter',
  name: 'Cyprus',
  demonym: 'Cypriot',
  continent: 'Europe',
  region: 'Eastern Mediterranean',
  voltage: 230,
  frequency: 50,
  complexityTier: 'moderate',
  plugTypes: [
    {
      id: 'type-g',
      name: 'Type G',
      subtitle: 'British',
      pins: 3,
      pinShape: 'rectangular',
      pinDiameter: 6.35,
      pinSpacing: 22.2,
      ratedAmps: 13,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.6,
      bodyHeight: 1.2,
      bodyCornerRadius: 0.2,
      noseRadius: 0.55,
      recessRadius: 1.15,
      faceplateSize: 3.1,
    },
  ],
  quirks: [
    'Cyprus uses British Type G plugs despite being geographically in the Eastern Mediterranean — a legacy of British colonial rule (1878–1960). This catches many European tourists off guard, especially those arriving from Greece which uses Types C and F.',
    'Northern Cyprus (Turkish-controlled) also uses Type G outlets, so the same adapter works island-wide.',
  ],
  travelContext:
    'Cyprus is a major Mediterranean holiday destination, drawing visitors from across Europe — particularly the UK, Germany, Scandinavia, and Russia. British travelers feel at home with familiar Type G sockets, but everyone else needs an adapter. Many resort hotels anticipate this and provide adapters at reception.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs are completely incompatible with Cyprus\'s British-style Type G outlets. You need a US-to-UK adapter. No voltage converter needed for dual-voltage electronics.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Cyprus uses the same Type G outlets and 230V/50Hz as the UK. Your plugs work without any adapter — one of the few Mediterranean destinations where this is the case.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit Cypriot Type G sockets. This surprises many visitors arriving from Greece or other EU countries. Bring an EU-to-UK adapter or ask your hotel for one.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are not compatible with Type G. Bring an adapter; voltage is the same 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Public',
      type: 'electronics',
      city: 'Nicosia',
      priceRange: '€5–€12',
      note: 'Major electronics retailer with branches in Nicosia, Limassol, and Larnaca.',
    },
    {
      name: 'Jumbo',
      type: 'convenience',
      city: 'Larnaca',
      priceRange: '€3–€8',
      note: 'Greek-owned variety store found in all major Cypriot cities; stocks basic adapters.',
    },
    {
      name: 'Stephanis',
      type: 'electronics',
      city: 'Limassol',
      priceRange: '€5–€15',
      note: 'Electronics and appliance chain across Cyprus.',
    },
    {
      name: 'Larnaca Airport shops',
      type: 'airport',
      city: 'Larnaca',
      priceRange: '€8–€15',
      note: 'Small selection of travel adapters available in the arrivals area shops.',
    },
  ],
  airportName: 'Larnaca International Airport',
  airportCode: 'LCA',
  neighbors: [
    {
      name: 'Greece',
      slug: 'greece-electric-plug-types-will-you-need-an-adapter-in-greece',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Greece uses Types C/F while Cyprus uses Type G. Travelers between the two countries need different adapters — a common surprise.',
    },
    {
      name: 'Turkey',
      slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Turkey uses Types C/F. Even Northern Cyprus uses Type G, not the Turkish standard.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Resort hotels in Paphos, Ayia Napa, and Limassol routinely stock adapters at reception for European guests — just ask. Many newer properties have added universal or USB outlets alongside traditional Type G sockets. Airbnb apartments typically have Type G outlets only, so bring your own adapter.',
  faqs: [
    {
      question: 'Why does Cyprus use British plugs when it\'s next to Greece?',
      answer:
        'Cyprus was a British crown colony from 1878 to 1960. The electrical infrastructure was built to British standards, and the country has maintained the Type G system ever since. This makes Cyprus one of the few places in the Mediterranean with British-style outlets.',
    },
    {
      question: 'I\'m coming from Greece — will my charger work in Cyprus?',
      answer:
        'No. Greece uses Types C and F (round pins), while Cyprus uses Type G (rectangular pins). You will need an adapter. This is one of the most common surprises for travelers island-hopping from the Greek islands to Cyprus.',
    },
    {
      question: 'Does Northern Cyprus use different plugs?',
      answer:
        'No. Both the Republic of Cyprus and Northern Cyprus use Type G outlets at 230V/50Hz. Your adapter works across the entire island.',
    },
    {
      question: 'Will my hotel in Cyprus provide an adapter?',
      answer:
        'Most resort hotels and larger properties keep adapters at reception — especially those catering to European tourists. It is still wise to bring your own, as supplies can run out during peak season. Airbnb and villa rentals rarely provide them.',
    },
    {
      question: 'Can I plug my UK appliances directly into Cypriot outlets?',
      answer:
        'Yes. Cyprus uses the identical Type G plug and 230V/50Hz power as the UK. British visitors can use all their devices without any adapter or converter.',
    },
  ],
  metaTitle: 'Cyprus Power Plugs — Type G (British) | Do You Need an Adapter?',
  metaDescription:
    'Cyprus uses British Type G plugs at 230V/50Hz — a surprise for European visitors. UK travelers need no adapter. Find out who does and where to buy one.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'Greece', slug: 'greece-electric-plug-types-will-you-need-an-adapter-in-greece' },
    { name: 'Malta', slug: 'malta-electric-plug-types-will-you-need-an-adapter-for-valletta' },
    { name: 'Turkey', slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey' },
  ],
};

export default data;

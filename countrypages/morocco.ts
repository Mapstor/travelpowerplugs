import type { CountryPlugData } from '../types';

const morocco: CountryPlugData = {
  slug: 'morocco-electric-plug-types-will-you-need-an-adapter-in-morocco',
  name: 'Morocco',
  demonym: 'Moroccan',
  continent: 'Africa',
  region: 'North Africa',
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
      id: 'type-e',
      name: 'Type E',
      subtitle: 'French',
      pins: 2,
      pinShape: 'round',
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
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
    'Morocco uses the French electrical system with Type C and E sockets. European travelers with standard Europlug devices will have no issues.',
    'Riads (traditional guesthouses) in Marrakech and Fes medinas often have older wiring with limited outlets — packing a compact power strip is a smart move.',
  ],
  travelContext:
    'Morocco draws millions of visitors to its imperial cities, Saharan dunes, and Atlantic coastline. The French-style electrical system means most European travelers are set, while North American and British visitors will need an adapter. Desert camps in the Sahara (Merzouga, Zagora) may rely on generators or solar power with limited charging windows.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You will need a Type C or E adapter. Your flat-pronged plugs will not fit Moroccan round-pin sockets. Most modern electronics (phones, laptops) handle 220V, so a simple adapter is enough.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs will not fit. Bring a Type G to Type E/C adapter. Voltage is close enough (220V vs 230V) to pose no issues for any device.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C plugs fit directly. Type F (Schuko) plugs also fit Type E sockets in most cases. No adapter needed for the vast majority of European travelers.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs are incompatible. You will need a Type I to C/E adapter. Voltage is similar, so no converter is required for modern devices.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Electroplanet',
      type: 'electronics',
      city: 'Marrakech, Casablanca, Rabat',
      priceRange: '30–80 MAD',
      note: 'Major Moroccan electronics chain with a good adapter selection.',
    },
    {
      name: 'Marjane',
      type: 'supermarket',
      city: 'Nationwide',
      priceRange: '25–60 MAD',
      note: 'Large hypermarket chain; electronics aisle usually has basic adapters.',
    },
    {
      name: 'Carrefour Morocco',
      type: 'supermarket',
      city: 'Major cities',
      priceRange: '30–70 MAD',
      note: 'French hypermarket with travel adapters in the electronics section.',
    },
    {
      name: 'Medina electronics shops',
      type: 'convenience',
      city: 'Marrakech, Fes',
      priceRange: '20–50 MAD',
      note: 'Small vendors in the souks sell basic adapters — bargain for the best price.',
    },
  ],
  airportName: 'Marrakech Menara / Casablanca Mohammed V',
  airportCode: 'RAK / CMN',
  neighbors: [
    {
      name: 'Algeria',
      slug: 'algeria-electrical-plug-type',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Algeria uses C/F instead of C/E, but Type C plugs work in both countries.',
    },
    {
      name: 'Mauritania',
      slug: 'mauritania-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote: 'Mauritania uses Type C — same ungrounded plug works in both countries.',
    },
    {
      name: 'Spain',
      slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Spain uses C/F. Type C plugs work in both countries. Ferries from Tangier to Spain are common.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'International hotels in Marrakech, Casablanca, and Agadir often have adapters at reception. Riads in the medinas may have older wiring with limited outlets and no spare adapters — bring your own. Desert camps in the Sahara typically have generator or solar power with charging available only during certain hours.',
  faqs: [
    {
      question: 'Can I use my European charger in Morocco without an adapter?',
      answer:
        'Yes, if you have a standard Europlug (Type C), it will fit Moroccan outlets directly. Type F (Schuko) plugs also fit Type E sockets in most cases. No adapter is needed for continental European visitors.',
    },
    {
      question: 'Will my phone charger work in a Sahara desert camp?',
      answer:
        'Desert camps in areas like Merzouga and Zagora usually have generator or solar power, but charging is often limited to certain hours. Bring a portable battery pack to keep your devices topped up during camel treks and desert excursions.',
    },
    {
      question: 'Do riads in the medina have enough power outlets?',
      answer:
        'Many traditional riads in Marrakech and Fes have been converted from centuries-old buildings, so outlet availability can be limited. Bringing a compact power strip lets you charge multiple devices from a single socket.',
    },
    {
      question: 'Is the voltage in Morocco safe for my US hair dryer?',
      answer:
        'Morocco uses 220V, while US devices are designed for 120V. If your hair dryer is not dual-voltage (check the label), you will need a voltage converter or you risk damaging it. Most Moroccan hotels provide hair dryers.',
    },
    {
      question: 'Where can I buy an adapter if I forget mine?',
      answer:
        'Electroplanet and Marjane stores in major cities stock adapters. In the medinas of Marrakech and Fes, small electronics vendors in the souks sell basic adapters at bargain prices. Airport shops at Casablanca and Marrakech also carry them, though at a premium.',
    },
  ],
  metaTitle: 'Morocco Power Plugs: Types C & E — Do You Need an Adapter?',
  metaDescription:
    'Morocco uses Type C and E plugs at 220V/50Hz. European travelers are set; US, UK, and Australian visitors need an adapter. Tips for riads, desert camps, and local stores.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Algeria', slug: 'algeria-electrical-plug-type' },
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
    { name: 'Spain', slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain' },
    { name: 'Tunisia', slug: 'tunisia-electric-plug-types-which-adapter-will-you-need-for-tunisia' },
  ],
};

export default morocco;

import { CountryPlugData } from '../types';

const peru: CountryPlugData = {
  slug: 'peru-electric-plug-types-will-you-need-an-adapter-for-peru',
  name: 'Peru',
  demonym: 'Peruvian',
  continent: 'South America',
  region: 'Western South America',
  voltage: 220,
  frequency: 60,
  complexityTier: 'moderate',
  plugTypes: [
    {
      id: 'type-a',
      name: 'Type A',
      subtitle: 'US ungrounded',
      pins: 2,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: false,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.0,
      bodyHeight: 0.7,
      bodyCornerRadius: 0.15,
      noseRadius: 0.35,
      recessRadius: 0.85,
      faceplateSize: 2.5,
    },
    {
      id: 'type-b',
      name: 'Type B',
      subtitle: 'US grounded',
      pins: 3,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.2,
      bodyHeight: 0.9,
      bodyCornerRadius: 0.15,
      noseRadius: 0.4,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
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
  ],
  quirks: [
    'Peru uses 220V but with US-style Type A/B flat-pin outlets — an unusual and potentially dangerous combination. US plugs fit physically but receive double the voltage they expect. Always verify your device is dual-voltage (100–240V) before plugging in.',
    'Type C European round-pin outlets also exist throughout Peru, so you may encounter both styles in the same hotel or even the same room.',
  ],
  travelContext:
    'Peru draws visitors to Lima, Cusco, Machu Picchu, the Sacred Valley, and the Amazon basin. Lima and Cusco have modern electrical infrastructure with reliable power. Machu Pueblo (Aguas Calientes) and Sacred Valley hotels are well-equipped. Some Amazon jungle lodges near Iquitos or Puerto Maldonado run on generators with limited hours.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: 'maybe',
      notes:
        'US plugs fit Peruvian Type A/B outlets physically — no adapter needed. HOWEVER, Peru runs on 220V, which is almost double the US standard of 120V. Check that every device says "100–240V" on its label. Phone chargers and laptops are almost always fine. Hair dryers, curling irons, and other heating appliances rated for 120V only WILL be damaged.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type A/B or Type C adapter. UK devices run on 230V, which is compatible with Peru\'s 220V.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs fit directly into Peruvian Type C outlets. Voltage is compatible. For Type A/B outlets, you\'d need an adapter, but most hotels have at least some Type C outlets.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs won\'t fit either outlet type in Peru. You\'ll need an adapter. Voltage is compatible (230V vs 220V).',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Hiraoka',
      type: 'electronics',
      city: 'Lima',
      priceRange: '$5–$15 USD',
      note: 'Popular electronics retailer in Lima\'s city center with a wide adapter selection.',
    },
    {
      name: 'Oechsle',
      type: 'electronics',
      priceRange: '$5–$15 USD',
      note: 'Department store chain found in major Peruvian cities.',
    },
    {
      name: 'Saga Falabella',
      type: 'electronics',
      priceRange: '$6–$18 USD',
      note: 'Large department store with electronics sections in Lima and other cities.',
    },
    {
      name: 'Plaza Vea',
      type: 'supermarket',
      priceRange: '$3–$10 USD',
      note: 'Major supermarket chain; some locations carry basic adapters.',
    },
  ],
  airportName: 'Lima Jorge Chávez International Airport',
  airportCode: 'LIM',
  neighbors: [
    {
      name: 'Ecuador',
      slug: 'ecuador-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'partially',
      adapterNote: 'Same plug shapes but Ecuador uses 120V while Peru uses 220V — a significant difference if traveling between the two.',
    },
    {
      name: 'Colombia',
      slug: 'colombia-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 110,
      sameAsSubject: 'partially',
      adapterNote: 'Same plug types but Colombia is 110V while Peru is 220V. Devices that worked fine in Colombia may be damaged in Peru if not dual-voltage.',
    },
    {
      name: 'Brazil',
      slug: 'brazil-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'N'],
      voltage: 127,
      sameAsSubject: 'partially',
      adapterNote: 'Brazil uses Type C/N at either 127V or 220V depending on location. Type C is compatible with Peruvian Type C outlets.',
    },
    {
      name: 'Bolivia',
      slug: 'bolivia-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['A', 'C'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Bolivia uses the same plug types at a similar voltage. Good compatibility.',
    },
    {
      name: 'Chile',
      slug: 'chile-electric-plug-types-do-you-need-an-adapter-while-traveling',
      plugTypes: ['C', 'L'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Chile\'s Type C outlets accept Peruvian Type C plugs. Chile\'s Type L outlets are a different shape.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Hotels in Lima\'s Miraflores and Barranco districts and in Cusco\'s historic center have modern, well-maintained outlets — usually a mix of Type A/B and Type C in the same room. Machu Pueblo hotels are well-equipped. Amazon jungle lodges often run on generators with power available only during certain hours — bring a portable battery pack.',
  faqs: [
    {
      question: 'Do US plugs work in Peru?',
      answer:
        'US plugs physically fit into Peruvian Type A/B outlets, so you won\'t need an adapter. However, Peru runs on 220V — almost double the US standard. Your phone charger and laptop are almost certainly dual-voltage (check the label for "100–240V"), but single-voltage appliances like hair dryers or electric razors rated for 120V only will be seriously damaged.',
    },
    {
      question: 'Is the voltage in Peru dangerous for my US electronics?',
      answer:
        'Only for single-voltage devices. The vast majority of modern chargers, laptops, and camera batteries are dual-voltage (100–240V) and will work perfectly. The risk is with heating appliances — hair dryers, curling irons, and travel steamers — that are often 120V only. Always check the fine print on your device\'s label.',
    },
    {
      question: 'Will my European charger work in Cusco?',
      answer:
        'Yes. Cusco hotels typically have Type C (Europlug) outlets in addition to Type A/B. Your European charger should plug right in, and the 220V voltage is compatible with European devices.',
    },
    {
      question: 'What about electricity at Machu Picchu?',
      answer:
        'The town of Machu Pueblo (Aguas Calientes) at the base of Machu Picchu has normal electrical infrastructure with reliable outlets in hotels and restaurants. Inside the archaeological site itself, there are no power outlets — charge everything the night before your visit.',
    },
    {
      question: 'Do Amazon jungle lodges in Peru have electricity?',
      answer:
        'Many lodges near Iquitos and Puerto Maldonado use generators that provide power during limited hours, typically from dusk until around 10 PM. Bring a portable battery pack and charge everything when power is available.',
    },
  ],
  metaTitle:
    'Peru Plug Types & Adapter Guide — Type A/B/C, 220V Warning for US Travelers',
  metaDescription:
    'Peru uses Type A, B, and C plugs at 220V/60Hz. US plugs fit but the voltage is double — learn what\'s safe to plug in, what needs a converter, and where to buy adapters.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Colombia', slug: 'colombia-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Ecuador', slug: 'ecuador-electric-plug-type-will-you-need-an-adapter' },
    { name: 'Chile', slug: 'chile-electric-plug-types-do-you-need-an-adapter-while-traveling' },
    { name: 'Bolivia', slug: 'bolivia-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default peru;

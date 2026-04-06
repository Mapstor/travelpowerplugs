import type { CountryPlugData } from '../types';

const denmark: CountryPlugData = {
  slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2',
  name: 'Denmark',
  demonym: 'Danish',
  continent: 'Europe',
  region: 'Northern Europe',
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
    {
      id: 'type-k',
      name: 'Type K',
      subtitle: 'Danish',
      pins: 3,
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
    'Denmark has its own Type K plug (three round pins — similar to French Type E but with the grounding pin on the plug instead of the socket). However, most modern Danish sockets now also accept Type C, E, and F. Pure Type K-only sockets are rare in modern buildings.',
    'You'll encounter a mix of socket styles across Denmark, but standard European plugs work in the vast majority of outlets you'll find in hotels and public spaces.',
  ],

  travelContext:
    'Denmark draws visitors to Copenhagen, the fairy-tale castles of Zealand, and the wind-swept coasts of Jutland. Power infrastructure is impeccable. DSB trains on intercity routes have outlets at seats. Copenhagen's hotel scene ranges from design-forward boutiques to classic grand hotels — all fully equipped.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs won't fit any Danish socket. Bring a Type A/B to C/F adapter — it will work in all modern Danish outlets. Most US electronics handle 230V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs need an adapter. A G to F adapter works throughout Denmark. Same voltage.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European Type C and F plugs fit modern Danish sockets. You may encounter older Type K-only outlets very rarely, but in practice European plugs work everywhere.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are not compatible. Bring a Type I to C/F adapter.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'Elgiganten',
      type: 'electronics',
      city: 'Copenhagen',
      priceRange: '40–120 DKK',
      note: 'Major electronics chain with multiple Copenhagen locations.',
    },
    {
      name: 'Power',
      type: 'electronics',
      priceRange: '40–100 DKK',
      note: 'Electronics retailer found in Danish shopping centers.',
    },
    {
      name: 'Bilka',
      type: 'supermarket',
      priceRange: '30–80 DKK',
      note: 'Danish hypermarket chain with electronics sections that carry basic adapters.',
    },
    {
      name: 'Føtex',
      type: 'supermarket',
      priceRange: '30–80 DKK',
      note: 'Supermarket chain — larger stores may stock travel adapters.',
    },
    {
      name: 'Copenhagen Kastrup Airport (CPH)',
      type: 'airport',
      city: 'Copenhagen',
      priceRange: '60–180 DKK',
      note: 'Electronics and travel accessories shops in terminals sell universal adapters.',
    },
  ],

  airportName: 'Copenhagen Kastrup Airport',
  airportCode: 'CPH',

  neighbors: [
    {
      name: 'Germany',
      slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'German Type C/F plugs work in all modern Danish sockets.',
    },
    {
      name: 'Sweden',
      slug: 'sweden-electric-plug-types-will-you-need-an-adapter-for-sweden',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Swedish plugs work in modern Danish outlets without issues.',
    },
    {
      name: 'Norway',
      slug: 'norway-electric-plug-types-will-you-need-an-adapter-for-oslo',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Norwegian plugs work in Denmark's modern sockets.',
    },
  ],

  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Copenhagen hotels are modern and well-equipped — USB ports in rooms are increasingly standard. Even budget hostels have reliable outlets. Holiday rentals on the Jutland coast and Danish islands have standard European sockets, though older summer houses may have fewer outlet positions.',

  faqs: [
    {
      question: 'Do I need an adapter for Denmark?',
      answer:
        'If you're from the US, UK, or Australia — yes. Denmark uses round-pin sockets. European travelers with Type C or F plugs generally don't need one, as modern Danish outlets accept these plugs.',
    },
    {
      question: 'What is a Type K plug and will I encounter it?',
      answer:
        'Type K is Denmark's own grounded plug standard with three round pins. It looks similar to the French Type E but has the ground pin on the plug rather than in the socket. In practice, most modern Danish outlets are hybrid designs that accept Type C, E, and F plugs too, so you're unlikely to need a Type K-specific adapter.',
    },
    {
      question: 'Will my European Schuko plug work in Denmark?',
      answer:
        'Yes — modern Danish sockets accept Schuko (Type F) plugs. You might spot the occasional older Type K-only outlet in vintage apartments, but it's rare enough that you can bring standard European plugs with confidence.',
    },
    {
      question: 'Where can I buy an adapter in Copenhagen?',
      answer:
        'Elgiganten and Power stores in the city center or shopping malls are your best bets. Copenhagen Airport also has electronics shops with universal adapters.',
    },
    {
      question: 'Are there outlets on Danish trains?',
      answer:
        'DSB intercity trains have outlets at most seats. The Copenhagen S-train (commuter rail) and Metro generally don't have outlets, but journeys are short enough that it's rarely an issue.',
    },
    {
      question: 'Can I use the same adapter in Denmark and Sweden?',
      answer:
        'Yes. A standard European C/F adapter works in both countries. Denmark's additional Type K standard doesn't affect travelers since modern outlets accept C and F.',
    },
  ],

  metaTitle: 'Denmark Power Plugs — Will You Need an Adapter? (Types C, E, F & K)',
  metaDescription:
    'Denmark uses Types C, E, F, and K plugs at 230V/50Hz. Learn about the unique Type K socket, whether you need an adapter for Copenhagen, and where to buy one.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Sweden', slug: 'sweden-electric-plug-types-will-you-need-an-adapter-for-sweden' },
    { name: 'Norway', slug: 'norway-electric-plug-types-will-you-need-an-adapter-for-oslo' },
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Finland', slug: 'finland-electric-plug-type-will-you-need-an-adapter-in-helsinki' },
  ],
};

export default denmark;

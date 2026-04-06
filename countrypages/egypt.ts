import type { CountryPlugData } from '../types';

const egypt: CountryPlugData = {
  slug: 'egypt-electric-plug-type-will-you-need-an-adapter-in-egypt',
  name: 'Egypt',
  demonym: 'Egyptian',
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
    'Nile cruise ships have standard outlets in cabins, so your adapter works just as it would in a Cairo hotel.',
    'Older buildings in Cairo may have loose or ungrounded outlets. Some budget hotels only have 2-pin sockets without proper grounding.',
  ],
  travelContext:
    'Egypt is one of the world\'s top tourist destinations, from the Pyramids and Cairo\'s chaos to Luxor\'s temples and Red Sea diving. The country uses standard European-style C/F outlets, making it straightforward for continental European travelers. North American and British visitors need an adapter.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Flat-pronged US plugs do not fit Egyptian round-pin outlets. Bring a Type A/B to C adapter. Modern electronics handle 220V natively.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs require an adapter. Voltage difference (220V vs 230V) is negligible and safe for all devices.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C and F plugs fit Egyptian outlets directly. No adapter needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs are not compatible. Bring an adapter. Voltage is similar to Australia\'s 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'B.Tech',
      type: 'electronics',
      city: 'Cairo, Giza, Alexandria',
      priceRange: '50–150 EGP',
      note: 'Egypt\'s largest electronics retailer with branches in most malls.',
    },
    {
      name: 'Raya Shop',
      type: 'electronics',
      city: 'Cairo, major cities',
      priceRange: '60–120 EGP',
      note: 'Well-stocked electronics chain with travel accessories.',
    },
    {
      name: 'Carrefour Egypt',
      type: 'supermarket',
      city: 'Cairo, Alexandria',
      priceRange: '40–100 EGP',
      note: 'Hypermarket with an electronics section that carries adapters.',
    },
    {
      name: 'Cairo Airport shops',
      type: 'airport',
      city: 'Cairo',
      priceRange: '80–200 EGP',
      note: 'Available in the arrivals hall at Cairo International (CAI), but at tourist prices.',
    },
  ],
  airportName: 'Cairo International',
  airportCode: 'CAI',
  neighbors: [
    {
      name: 'Libya',
      slug: 'libya-electric-plug-types-will-you-need-an-adapter-in-libya',
      plugTypes: ['C', 'L'],
      voltage: 127,
      sameAsSubject: 'partially',
      adapterNote: 'Libya uses different voltage (127V) and adds Type L. Type C plugs overlap, but electrical conditions differ significantly.',
    },
    {
      name: 'Sudan',
      slug: 'sudan-electric-plug-types-which-adapter-will-you-need-in-sudan',
      plugTypes: ['C', 'D'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Sudan uses Type C and D. Type C devices from Egypt will work, but Type D requires a different plug shape.',
    },
    {
      name: 'Israel',
      slug: 'israel-electric-plug-type-will-you-need-an-adapter-for-israel',
      plugTypes: ['C', 'H'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Israel uses Type H (unique) alongside Type C. Your Egyptian Type C plugs will work, but Type H is Israel-specific.',
    },
    {
      name: 'Jordan',
      slug: 'jordan-electric-plug-types-will-you-need-adapter-traveling-to-jordan',
      plugTypes: ['C', 'D', 'F', 'G'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Jordan uses C/D/F/G — your Type C and F devices from Egypt will work in Jordanian outlets.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Major hotels in Cairo, Luxor, Hurghada, and Sharm el-Sheikh are well-equipped with modern outlets. Many international chains have adapters at the front desk. Nile cruise ships provide standard cabin outlets. Budget hotels and older downtown Cairo buildings may have loose sockets — a surge protector is wise.',
  faqs: [
    {
      question: 'Do I need an adapter for a Nile cruise in Egypt?',
      answer:
        'Nile cruise ships use standard Egyptian outlets (Type C/F). If you already have the right adapter for Egypt, it works on the boat too. Cabins typically have at least one or two outlets available.',
    },
    {
      question: 'Can I charge my devices at the Pyramids area?',
      answer:
        'There are no public outlets at the Pyramids of Giza. Charge your devices fully at your hotel and consider bringing a portable battery for a full day of sightseeing.',
    },
    {
      question: 'Are power outlets reliable in Hurghada and Sharm el-Sheikh resorts?',
      answer:
        'Red Sea resorts are built to modern standards and have reliable power with well-maintained outlets. Most resorts cater to European guests, so Type C/F sockets are standard.',
    },
    {
      question: 'Will my European hair straightener work in Egypt?',
      answer:
        'Yes, if it uses a Type C or F plug. Egypt runs at 220V/50Hz, which is close enough to Europe\'s 230V/50Hz that your device will work perfectly.',
    },
    {
      question: 'Where is the cheapest place to buy an adapter in Cairo?',
      answer:
        'B.Tech stores in malls across Cairo offer the best prices on adapters. Avoid buying at the airport if possible — prices there are significantly higher. Street electronics vendors near Tahrir Square also sell adapters cheaply.',
    },
  ],
  metaTitle: 'Egypt Power Plugs: Types C & F — Do You Need an Adapter?',
  metaDescription:
    'Egypt uses Type C and F plugs at 220V/50Hz. European travelers need no adapter; US, UK, and Australian visitors do. Tips for Nile cruises, resorts, and where to buy locally.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Jordan', slug: 'jordan-electric-plug-types-will-you-need-adapter-traveling-to-jordan' },
    { name: 'Israel', slug: 'israel-electric-plug-type-will-you-need-an-adapter-for-israel' },
    { name: 'Morocco', slug: 'morocco-electric-plug-types-will-you-need-an-adapter-in-morocco' },
    { name: 'Turkey', slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey' },
  ],
};

export default egypt;

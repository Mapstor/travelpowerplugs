import { CountryPlugData } from '../types';

const guatemala: CountryPlugData = {
  slug: 'guatemala-electric-plug-types-will-you-need-an-adapter-in-guatemala-city',
  name: 'Guatemala',
  demonym: 'Guatemalan',
  continent: 'North America',
  region: 'Central America',
  voltage: 120,
  frequency: 60,
  complexityTier: 'simple',
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
  ],
  quirks: [
    'Guatemala uses the same electrical system as the US. Tourist hubs like Antigua Guatemala and Lake Atitlán have reliable power. More remote highland villages may have limited outlets or less stable power.',
  ],
  travelContext:
    'Guatemala is a popular destination for its Mayan ruins (Tikal), colonial Antigua, Lake Atitlán, and highland indigenous culture. Guatemala City is the main entry point. Antigua and Lake Atitlán have well-developed tourist infrastructure with reliable power. Tikal area lodges in the Petén jungle and remote highland villages may have simpler electrical setups.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Identical to the US — Type A/B at 120V/60Hz. No adapter or converter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type A/B adapter. UK electronics are dual-voltage.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European plugs won\'t fit. You need an adapter and should verify your devices handle 120V.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Australian plugs won\'t fit. Adapter needed, plus a voltage check for 230V devices.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Cemaco',
      type: 'electronics',
      city: 'Guatemala City',
      priceRange: '$5–$15 USD',
      note: 'Home goods and electronics department store with locations in Guatemala City and Antigua.',
    },
    {
      name: 'Elektra',
      type: 'electronics',
      priceRange: '$4–$12 USD',
      note: 'Electronics and appliance chain found across Guatemala.',
    },
    {
      name: 'Max Distelsa',
      type: 'electronics',
      priceRange: '$5–$15 USD',
      note: 'Major electronics retailer with stores in Guatemala City and larger towns.',
    },
  ],
  airportName: 'Guatemala City La Aurora International Airport',
  airportCode: 'GUA',
  neighbors: [
    {
      name: 'Mexico',
      slug: 'mexico-electric-plug-types-will-you-need-an-adapter-in-mexico',
      plugTypes: ['A', 'B'],
      voltage: 127,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plug types, very similar voltage. Fully compatible.',
    },
    {
      name: 'Belize',
      slug: 'belize-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['A', 'B', 'G'],
      voltage: 110,
      sameAsSubject: 'compatible',
      adapterNote: 'Belize uses Type A/B (compatible) plus some British Type G outlets.',
    },
    {
      name: 'Honduras',
      slug: 'honduras-electric-plug-types-do-you-need-an-adapter-in-honduras',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Identical system. No adapter needed.',
    },
    {
      name: 'El Salvador',
      slug: 'el-salvador-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Same plugs and voltage. Fully compatible.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Antigua Guatemala and around Lake Atitlán cater to international travelers and have reliable power with US-style outlets. Guatemala City hotels are well-equipped. Jungle lodges near Tikal may have generator-based power with limited hours. Highland village homestays may have minimal outlets — bring a portable battery and a small power strip.',
  faqs: [
    {
      question: 'Do I need an adapter for Guatemala from the US?',
      answer:
        'No. Guatemala uses the same Type A/B plugs and 120V/60Hz electricity as the United States. Your devices will work exactly as they do at home.',
    },
    {
      question: 'Is the power reliable at Lake Atitlán?',
      answer:
        'Villages around Lake Atitlán like Panajachel, San Marcos, and San Pedro have generally reliable power. Brief outages can happen, but hotels and restaurants with generators handle them smoothly. More remote lakeside villages may have less consistent service.',
    },
    {
      question: 'What about electricity near Tikal?',
      answer:
        'Lodges in the Flores/Tikal area have power, though some jungle lodges use generators with set hours. The town of Flores on the island in Lake Petén Itzá has reliable grid power. Bring a portable battery if you\'re planning early morning or overnight trips to the ruins.',
    },
    {
      question: 'Can I charge my European devices in Antigua Guatemala?',
      answer:
        'You\'ll need a plug adapter to convert round pins to flat pins. Most phone chargers and laptops are dual-voltage (100–240V) and will work fine on 120V. Hair dryers and other heating appliances rated for 220V only won\'t work properly without a converter.',
    },
  ],
  metaTitle:
    'Guatemala Plug Types & Adapter Guide — Type A/B, 120V, Same as the US',
  metaDescription:
    'Guatemala uses Type A and B plugs at 120V/60Hz — identical to the US. Learn about power at Lake Atitlán, Tikal, Antigua, and where to buy adapters locally.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Honduras', slug: 'honduras-electric-plug-types-do-you-need-an-adapter-in-honduras' },
    { name: 'Mexico', slug: 'mexico-electric-plug-types-will-you-need-an-adapter-in-mexico' },
    { name: 'El Salvador', slug: 'el-salvador-electric-plug-type-will-you-need-an-adapter' },
    { name: 'Belize', slug: 'belize-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Costa Rica', slug: 'costa-rica-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default guatemala;

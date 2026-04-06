import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'belize-electric-plug-types-do-you-need-an-adapter',
  name: 'Belize',
  demonym: 'Belizean',
  continent: 'North America',
  region: 'Central America',
  voltage: 110,
  voltageNote: 'Most tourist areas use 110V with US-style outlets. Some older buildings have 220V British-style outlets. Always check.',
  frequency: 60,
  complexityTier: 'complex',
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
    'Belize uses US-style Type A/B at 110V alongside British Type G at 220V — a legacy of British colonial rule mixed with Central American US influence. Check the outlet type before plugging in to avoid voltage damage.',
  ],
  travelContext:
    'Belize is a former British colony in Central America that has adopted US-style electrical standards alongside its colonial British infrastructure. Tourist areas like San Pedro, Caye Caulker, and Placencia predominantly use US-style 110V outlets. However, some older buildings, especially in Belize City, retain British 220V Type G sockets. Always check which type of outlet you are plugging into.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Most outlets in tourist areas are US-style 110V Type A/B. Your devices plug in directly. Be cautious of older British 220V outlets in some buildings — do not plug in without checking.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Some older buildings have British Type G outlets at 220V, where UK devices work directly. However, most modern outlets are US-style Type A/B at 110V, requiring both an adapter and possibly a converter. Bring a universal adapter.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European plugs do not fit either US or British outlets in Belize. You need an adapter. The voltage question depends on which outlet you encounter — 110V or 220V. Check before plugging in.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Australian plugs are incompatible with both outlet types. A converter may be needed depending on which voltage outlet you encounter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Courts',
      type: 'electronics',
      city: 'Belize City',
      priceRange: '$8–20',
      note: 'Caribbean electronics retailer with adapter and converter selection.',
    },
    {
      name: 'Brodies',
      type: 'supermarket',
      city: 'Belize City',
      priceRange: '$5–15',
      note: 'Department store and supermarket that may carry travel adapters.',
    },
    {
      name: 'Local hardware stores',
      type: 'electronics',
      city: 'Belize City',
      priceRange: '$5–15',
      note: 'Hardware stores in Belize City stock plug adapters for both outlet types.',
    },
  ],
  airportName: 'Philip S. W. Goldson International Airport',
  airportCode: 'BZE',
  neighbors: [
    {
      name: 'Mexico',
      slug: 'mexico-electric-plug-types-will-you-need-an-adapter-in-mexico',
      plugTypes: ['A', 'B'],
      voltage: 127,
      sameAsSubject: 'mostly',
      adapterNote: 'Mexico uses US-style Type A/B. Same adapter works for Belize\'s US-style outlets.',
    },
    {
      name: 'Guatemala',
      slug: 'guatemala-electric-plug-types-will-you-need-an-adapter-in-guatemala-city',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'mostly',
      adapterNote: 'Guatemala also uses US-style plugs. Compatible with Belize\'s Type A/B outlets.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Tourist-oriented hotels in San Pedro, Caye Caulker, and Placencia almost exclusively use US-style 110V outlets. Budget accommodations in Belize City may have a mix of US and British outlets. When in doubt, ask the front desk.',
  faqs: [
    {
      question: 'Why does Belize have two different plug types?',
      answer:
        'Belize was a British colony (British Honduras) until 1981 but is geographically in Central America surrounded by US-standard countries. The result is a mix: most modern buildings use US-style Type A/B at 110V, while some older structures retain British Type G at 220V.',
    },
    {
      question: 'Which plug type will I find in tourist areas?',
      answer:
        'Hotels and resorts in popular areas like San Pedro, Caye Caulker, and Placencia predominantly use US-style Type A/B outlets at 110V. You are most likely to encounter British outlets in older buildings in Belize City.',
    },
    {
      question: 'Could I accidentally plug into a 220V outlet with a 110V device?',
      answer:
        'Yes, this is a real risk in some older buildings where British 220V Type G outlets coexist with US 110V outlets. Always check the outlet type. If it has three large rectangular pins, it is likely 220V.',
    },
    {
      question: 'Do I need a voltage converter for Belize?',
      answer:
        'Most tourist areas run at 110V, which is safe for US and Canadian devices. If you are coming from Europe or Australia, check your charger — most modern chargers are dual-voltage (100–240V). Avoid plugging non-dual-voltage devices into the occasional 220V British outlet.',
    },
  ],
  metaTitle: 'Belize Power Plugs — Type A, B & G Outlets, 110V/220V, Adapter Guide',
  metaDescription:
    'Belize uses both US-style Type A/B (110V) and British Type G (220V) outlets. Learn which you will encounter, what adapter to bring, and how to avoid voltage surprises.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Mexico', slug: 'mexico-electric-plug-types-will-you-need-an-adapter-in-mexico' },
    { name: 'Guatemala', slug: 'guatemala-electric-plug-types-will-you-need-an-adapter-in-guatemala-city' },
    { name: 'Jamaica', slug: 'jamaica-electric-plug-types-will-you-need-an-adapter-for-charging' },
  ],
};

export default data;

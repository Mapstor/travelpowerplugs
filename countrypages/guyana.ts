import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'guyana-electric-plug-types-will-you-need-an-adapter-in-georgetown',
  name: 'Guyana',
  demonym: 'Guyanese',
  continent: 'South America',
  region: 'Northern South America',
  voltage: 240,
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
    {
      id: 'type-d',
      name: 'Type D',
      subtitle: 'Old British (India)',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 5.08,
      pinSpacing: 19.1,
      ratedAmps: 5,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.3,
      bodyHeight: 1.0,
      bodyCornerRadius: 0.2,
      noseRadius: 0.48,
      recessRadius: 1.0,
      faceplateSize: 2.8,
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
    'Guyana has a chaotic mix of four plug types: US-style A/B, British Type G, and Indian Type D. US plugs fit some outlets but receive 240V — extremely dangerous for 120V-only devices. A universal adapter and voltage awareness are essential.',
  ],
  travelContext:
    'Guyana is an English-speaking South American country on the Caribbean coast, increasingly popular for eco-tourism in the Rupununi savanna and Kaieteur Falls. Georgetown, the capital, has a mix of outlet types reflecting British colonial and American influence. The power grid is unreliable — outages are frequent even in Georgetown.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: true,
      notes:
        'US-style Type A/B outlets exist, so your plug may physically fit. However, the voltage is 240V — plugging in a 120V-only device will destroy it. Always verify your device is dual-voltage (100–240V). A universal adapter is recommended since you may also encounter Type D or G outlets.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'British Type G outlets exist in many buildings. Your plug may fit directly and the 240V voltage matches. However, not every outlet will be Type G — a universal adapter is still wise.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs won\'t fit any of the four Guyanese socket types. Bring a universal adapter. Voltage is compatible with European devices.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter. Voltage is compatible at 240V.',
    },
  ],
  localPurchaseOptions: [
    { name: 'Courts', type: 'electronics', city: 'Georgetown', priceRange: 'GYD 2,000–6,000', note: 'Caribbean electronics and appliance chain' },
    { name: 'Massy Stores', type: 'supermarket', city: 'Georgetown', priceRange: 'GYD 1,500–4,000', note: 'Supermarket chain with some electrical accessories' },
    { name: 'Shops on Regent Street', type: 'electronics', city: 'Georgetown', priceRange: 'GYD 1,000–5,000', note: 'Georgetown\'s main commercial street with electronics vendors' },
  ],
  airportName: 'Georgetown Cheddi Jagan International Airport',
  airportCode: 'GEO',
  neighbors: [
    { name: 'Venezuela', slug: 'venezuela-electric-plug-types-will-you-need-an-adapter-for-venezuela', plugTypes: ['A', 'B'], voltage: 120, sameAsSubject: 'partially', adapterNote: 'Same plug shape but half the voltage' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter', plugTypes: ['C', 'N'], voltage: 127, sameAsSubject: 'different' },
    { name: 'Suriname', slug: 'suriname-electric-plug-types-will-you-need-an-adapter-for-suriname', plugTypes: ['A', 'B', 'C', 'F'], voltage: 127, sameAsSubject: 'partially', adapterNote: 'Shares Type A/B but at much lower voltage' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Georgetown hotels vary in outlet types — you might find Type A, D, or G in the same building. Ask at reception which outlets are available. Eco-lodges in the interior typically use generators with limited power hours. A universal adapter and a power bank are both essential.',
  faqs: [
    {
      question: 'Why is Guyana\'s plug situation so complicated?',
      answer:
        'Guyana\'s mix of four plug types reflects British colonial infrastructure (Type D and G), later American influence (Type A/B), and decades of uncoordinated development. There\'s no single standard — a universal adapter is the only practical solution.',
    },
    {
      question: 'Can I plug my US charger into a Guyanese Type A outlet?',
      answer:
        'Your plug will fit, but the voltage is 240V — double what US devices expect. If your charger says "100–240V" on the label, it\'s fine. If it says "120V only," do not plug it in or it will be destroyed.',
    },
    {
      question: 'Is the power supply reliable in Georgetown?',
      answer:
        'Not especially. Georgetown experiences frequent power outages, sometimes lasting hours. Hotels may or may not have generator backup. A high-capacity power bank is strongly recommended.',
    },
  ],
  metaTitle: 'Guyana Power Plugs — Types A, B, D & G at 240V | Voltage Danger Warning',
  metaDescription:
    'Guyana uses four plug types (A, B, D, G) at 240V/60Hz. US plugs fit some outlets but voltage is dangerously high. Universal adapter essential. Georgetown tips and local stores.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Suriname', slug: 'suriname-electric-plug-types-will-you-need-an-adapter-for-suriname' },
    { name: 'Venezuela', slug: 'venezuela-electric-plug-types-will-you-need-an-adapter-for-venezuela' },
    { name: 'Trinidad And Tobago', slug: 'trinidad-and-tobago-electric-plug-types-will-you-need-an-adapter' },
  ],
};

export default data;

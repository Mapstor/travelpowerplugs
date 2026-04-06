import { CountryPlugData } from '../types';

const liberia: CountryPlugData = {
  slug: 'liberia-electric-plug-types-will-you-need-an-adapter-in-liberia',
  name: 'Liberia',
  demonym: 'Liberian',
  continent: 'Africa',
  region: 'West Africa',
  voltage: 120,
  voltageNote:
    'Both 120V (older US-style outlets) and 220V (newer European-style outlets) exist, sometimes in the same building. Always verify before plugging in.',
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
    'Liberia is one of very few countries with a genuine dual-voltage situation at the wall. Founded by formerly enslaved Americans, the country adopted US-style Type A/B at 120V. More recent infrastructure uses European C/F at 220V. You may encounter both voltage levels in the same building — always check before plugging in.',
  ],
  travelContext:
    'Liberia presents one of the most complex electrical situations in the world. The country\'s unique history as a settlement founded by freed American slaves means US-style outlets and 120V wiring coexist with newer European 220V installations. There is no reliable way to tell which voltage an outlet carries without testing it. Dual-voltage devices are strongly recommended. The power grid is limited, and most buildings rely on generators.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Your US plugs will fit the older Type A/B outlets at 120V without any adapter or converter. However, newer outlets may be European Type C/F at 220V, requiring an adapter. Since both voltages exist, use dual-voltage devices whenever possible.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'British plugs need an adapter for either outlet type. Voltage is a concern — if you plug into a 120V outlet, some UK devices may not work properly. Dual-voltage devices are safest.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European Type C plugs fit the European-style outlets directly. However, you may also encounter US-style outlets where an adapter is needed. The voltage concern is that some outlets are 120V — ensure your devices are dual-voltage.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Type I plugs do not fit either outlet type. A universal adapter is recommended. Voltage varies between outlets.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Local market stalls',
      type: 'electronics',
      city: 'Monrovia',
      note: 'Very limited selection. Basic adapters may be found in market areas of Monrovia. Buy before traveling.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Monrovia',
      note: 'Some hotels in Monrovia serving international visitors may have adapters available.',
    },
  ],
  airportName: 'Monrovia Roberts International Airport',
  airportCode: 'ROB',
  neighbors: [
    {
      name: 'Sierra Leone',
      slug: 'sierra-leone-electric-plug-types-which-adapter-will-you-need-with-you',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Sierra Leone uses British-style plugs at 230V — completely different system.',
    },
    {
      name: 'Guinea',
      slug: 'guinea-electric-plug-types-will-you-need-an-adapter-in-conakry',
      plugTypes: ['C', 'F', 'K'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Guinea shares Type C/F but runs at a consistent 220V, unlike Liberia\'s dual-voltage situation.',
    },
    {
      name: 'Ivory Coast',
      slug: 'cote-divoire-electric-plug-type-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Ivory Coast uses French-style C/E at 220V only.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Monrovia run on generator power, with the better establishments providing electricity for most of the day. Always ask hotel staff about the voltage of the outlets in your room before plugging in — it could be 120V or 220V. USB charging from a laptop or portable battery is the safest approach.',
  deviceOverrides: [
    {
      device: 'Laptop / Phone charger',
      dualVoltage: 'Yes — most modern chargers accept 100–240V',
      adapterOnly: 'Bring a universal adapter to handle both US and European outlets',
      note: 'Check the fine print on your charger. If it says 100–240V, you are safe at either voltage.',
    },
    {
      device: 'Hair dryer / Curling iron',
      dualVoltage: 'Check carefully — many are single-voltage',
      adapterOnly: 'Not safe without confirming voltage at the outlet',
      note: 'Hair dryers are especially risky in Liberia. A 120V hair dryer in a 220V outlet will burn out. A 220V dryer in a 120V outlet will barely function. Consider leaving it at home.',
    },
  ],
  faqs: [
    {
      question: 'Why does Liberia have two different voltages?',
      answer:
        'Liberia was founded in 1847 by formerly enslaved Americans who brought US electrical standards (Type A/B at 120V). Later infrastructure projects introduced European standards (Type C/F at 220V). Both systems remain in use, sometimes within the same building, creating a unique dual-voltage environment.',
    },
    {
      question: 'How do I know which voltage an outlet is?',
      answer:
        'There is no reliable visual indicator. US-style flat-pin outlets are typically 120V and European round-pin outlets are typically 220V, but this is not guaranteed. Ask hotel staff, or use a small voltage tester if you are concerned. Using dual-voltage devices eliminates the risk entirely.',
    },
    {
      question: 'What is the safest adapter strategy for Liberia?',
      answer:
        'Bring a universal travel adapter that handles both US and European outlet types. Ensure all your devices are dual-voltage (100–240V input). This combination protects you regardless of which outlet type and voltage you encounter.',
    },
    {
      question: 'Is there a functioning power grid in Liberia?',
      answer:
        'Liberia\'s power grid is limited. The Monrovia area has expanding grid coverage, but most of the country relies on private generators. Hotels and businesses in Monrovia typically run their own generators. Expect power interruptions and bring a portable battery.',
    },
  ],
  metaTitle: 'Liberia Power Plugs — Types A, B, C & F | Dual Voltage Warning',
  metaDescription:
    'Liberia uses Type A, B, C, and F plugs with both 120V and 220V in the same buildings. Learn how to navigate this unique dual-voltage situation safely.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Sierra Leone', slug: 'sierra-leone-electric-plug-types-which-adapter-will-you-need-with-you' },
    { name: 'Guinea', slug: 'guinea-electric-plug-types-will-you-need-an-adapter-in-conakry' },
    { name: 'United States', slug: 'usa-electric-plug-types-will-you-need-an-adapter-traveling-to-the-us' },
  ],
};

export default liberia;

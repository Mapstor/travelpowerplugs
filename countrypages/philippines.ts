import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'philippines-electric-plug-types-will-you-need-an-adapter-for-philippines',
  name: 'Philippines',
  demonym: 'Filipino',
  continent: 'Asia',
  region: 'Southeast Asia',
  voltage: 220,
  frequency: 60,
  frequencyNote: 'The Philippines uses 60Hz — unusual for a 220V country. Most of the 220V world uses 50Hz.',
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
    'The Philippines uses 220V at 60Hz — an unusual combination globally. Most 220V countries run at 50Hz. US-style Type A/B outlets are very common due to American colonial history, but they are wired at 220V not 120V. This is a trap for US travelers who assume their 120V-only devices are safe because the plug fits.',
    'Type C Europlugs also work in many Filipino outlets, especially newer installations. Some outlets accept both flat and round pins.',
  ],
  travelContext:
    'The Philippines feels deceptively familiar to American travelers — the outlets look identical to US ones. But the voltage is 220V, not 120V. This catches people off guard more than in any other country. Always check your device label before plugging in. European travelers need an adapter but no converter.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: true,
      notes:
        'Your US plugs fit Philippine outlets perfectly — but the voltage is 220V, not 120V. This is the most important thing to know. Dual-voltage devices (laptops, phone chargers) are fine. Single-voltage US appliances like hair dryers will be destroyed. Check every device label.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs will not fit. Bring an adapter. Voltage is compatible at 220V.',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs fit many Philippine outlets. Larger Schuko (Type F) plugs may need an adapter in some locations. Voltage is compatible.',
    },
    {
      origin: 'Australia / NZ',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs do not fit. You need an adapter. Voltage difference (220V vs 240V) is within tolerance for most devices.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'SM Appliance Center',
      type: 'electronics',
      priceRange: '₱100–₱500',
      note: 'Found in SM Malls nationwide. Reliable source for adapters and power strips.',
    },
    {
      name: 'Octagon',
      type: 'electronics',
      priceRange: '₱150–₱600',
      note: 'Computer and electronics chain in major malls.',
    },
    {
      name: 'CD-R King',
      type: 'electronics',
      priceRange: '₱50–₱300',
      note: 'Budget electronics stores found in most malls. Basic adapters at low prices.',
    },
    {
      name: 'SM / Robinsons malls',
      type: 'electronics',
      priceRange: '₱100–₱500',
      note: 'Major mall chains with multiple electronics retailers inside.',
    },
    {
      name: 'Ninoy Aquino International Airport shops',
      type: 'airport',
      city: 'Manila',
      priceRange: '₱200–₱800',
      note: 'Airport shops carry travel adapters and USB chargers.',
    },
  ],
  airportName: 'Ninoy Aquino International / Mactan-Cebu International',
  airportCode: 'MNL / CEB',
  neighbors: [
    {
      name: 'Taiwan',
      slug: 'taiwan-electric-plug-types-which-adaptor-you-need-for-taiwan',
      plugTypes: ['A', 'B'],
      voltage: 110,
      sameAsSubject: 'partially',
      adapterNote: 'Taiwan shares Type A/B plugs but runs at 110V — half the Philippine voltage.',
    },
    {
      name: 'Vietnam',
      slug: 'vietnam-electric-plug-types-which-adapter-will-you-need-for-vietnam',
      plugTypes: ['A', 'C', 'F'],
      voltage: 220,
      sameAsSubject: 'mostly',
      adapterNote: 'Vietnam shares Type A and has similar voltage. Your devices should work.',
    },
    {
      name: 'Malaysia',
      slug: 'malaysia-electric-plug-types-will-you-need-an-adapter-in-kuala-lumpur',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Malaysia uses British Type G — completely different from Philippine outlets.',
    },
    {
      name: 'Indonesia',
      slug: 'indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Indonesia uses European-style plugs. Your Type C devices may work but Type A will not.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Hotels in Manila, Cebu, and Boracay typically have US-style outlets and may lend adapters for foreign guests. Many mid-range hotels provide hair dryers rated for 220V. Budget hostels usually have basic Type A outlets — bring your own multi-port charger.',
  faqs: [
    {
      question: 'Can I plug my US charger directly into Philippine outlets?',
      answer:
        'Physically, yes — the outlets look identical to US ones (Type A/B). But the voltage is 220V, not 120V. Check your charger label. If it says "100–240V" you are fine. If it says "120V only" you risk destroying it.',
    },
    {
      question: 'Why does the Philippines use 220V with US-style plugs?',
      answer:
        'The Philippines was a US territory until 1946, which established the Type A/B plug standard. After independence, the country switched to 220V for greater power efficiency while keeping the same physical outlets. This created the unusual 220V/60Hz combination.',
    },
    {
      question: 'Do European plugs work in the Philippines?',
      answer:
        'Type C Europlugs fit many newer Philippine outlets. However, older buildings may only have US-style Type A/B sockets. A small adapter is worth packing if you are relying on European plugs exclusively.',
    },
    {
      question: 'Is the power reliable in the Philippines?',
      answer:
        'Major cities like Manila and Cebu have generally reliable power. Provincial areas and smaller islands can experience brownouts, especially during peak summer months (March–May). A portable battery pack is a good idea for island-hopping trips.',
    },
    {
      question: 'What adapter do I need for the Philippines from the UK?',
      answer:
        'You need a Type G to Type A adapter. These are widely available at airports and electronics shops. The voltage (220V) is close to the UK\'s 230V, so your devices will work fine once plugged in.',
    },
  ],
  metaTitle: 'Philippines Power Plugs: Types A, B & C — 220V Warning for US Travelers',
  metaDescription:
    'The Philippines uses US-style Type A/B plugs but at 220V — not 120V. Find out if you need an adapter or converter, and what to watch out for.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Vietnam', slug: 'vietnam-electric-plug-types-which-adapter-will-you-need-for-vietnam' },
    { name: 'Taiwan', slug: 'taiwan-electric-plug-types-which-adaptor-you-need-for-taiwan' },
    { name: 'Indonesia', slug: 'indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia' },
    { name: 'Japan', slug: 'japan-electric-plug-types-will-you-need-an-adapter-probably-yes' },
  ],
};

export default data;

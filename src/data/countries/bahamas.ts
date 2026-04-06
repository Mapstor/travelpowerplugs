import { CountryPlugData } from '@/types';

const bahamas: CountryPlugData = {
  slug: 'bahamas-electric-socket-types-will-you-need-an-adapter',
  name: 'Bahamas',
  demonym: 'Bahamian',
  continent: 'North America',
  region: 'Caribbean',
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
    'The Bahamas uses an electrical system identical to the US, reflecting the heavy American tourism influence. Nassau and Paradise Island are fully modern. The Out Islands (Exumas, Eleuthera, Andros, etc.) may rely on generator-based power in some areas.',
  ],
  travelContext:
    'The Bahamas draws millions of visitors annually, mainly from the US, to Nassau, Paradise Island (home of Atlantis), and the Exuma Cays. Nassau and Grand Bahama have reliable infrastructure. The Out Islands offer a more remote experience — some smaller islands rely on generators with power that may be intermittent.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Identical to the US — Type A/B plugs at 120V/60Hz. No adapter or converter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type A/B adapter. UK devices handle 120V fine since they\'re dual-voltage.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European plugs won\'t fit. You need an adapter, and should check that your devices support 120V.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Australian plugs don\'t fit Bahamian outlets. You need an adapter and should verify voltage compatibility.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'John S. George',
      type: 'electronics',
      city: 'Nassau',
      priceRange: '$5–$15 USD',
      note: 'Hardware and home goods store with electrical accessories.',
    },
    {
      name: 'Kelly\'s Home Center',
      type: 'electronics',
      city: 'Nassau',
      priceRange: '$5–$15 USD',
      note: 'Large home improvement store in Nassau with adapter selections.',
    },
    {
      name: 'Nassau Airport shops',
      type: 'airport',
      city: 'Nassau',
      priceRange: '$8–$20 USD',
      note: 'Limited selection at higher prices — better to buy before your trip.',
    },
  ],
  airportName: 'Nassau Lynden Pindling International Airport',
  airportCode: 'NAS',
  neighbors: [
    {
      name: 'United States',
      slug: 'usa-electric-plug-types-will-you-need-an-adapter-traveling-to-the-us',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Identical electrical system.',
    },
    {
      name: 'Cuba',
      slug: 'cuba-electric-plug-type-do-you-need-an-adapter-for-trip',
      plugTypes: ['A', 'B'],
      voltage: 110,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plug types, but Cuba has dual-voltage outlets (110V and 220V).',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Nassau and Paradise Island resorts cater overwhelmingly to American visitors and have modern US-style outlets throughout. Atlantis and other major resorts provide hair dryers, USB ports, and abundant outlets. On the Out Islands, power may come from generators — smaller lodges may have fewer outlets and occasional interruptions.',
  faqs: [
    {
      question: 'Do I need an adapter for the Bahamas from the US?',
      answer:
        'No. The Bahamas uses the same Type A/B plugs and 120V/60Hz electricity as the United States. It\'s electrically identical to being at home.',
    },
    {
      question: 'Is the power reliable on the Out Islands?',
      answer:
        'It varies. While Nassau and Grand Bahama have reliable grid power, some Out Islands (Exumas, Cat Island, Long Island) rely on generator-based electricity that can be intermittent. Larger resorts have backup generators, but smaller guesthouses may experience outages.',
    },
    {
      question: 'What adapter do UK visitors need for the Bahamas?',
      answer:
        'UK travelers need a Type G to Type A/B adapter. Despite the Bahamas\' Commonwealth ties to Britain, the country uses American-style outlets. Your UK electronics are dual-voltage, so no converter is needed — just the plug adapter.',
    },
    {
      question: 'Can I charge my phone on a Bahamas cruise port stop?',
      answer:
        'Yes. Nassau\'s cruise port area, downtown shops, and restaurants all have standard US-type outlets. If you\'re coming from a US-departure cruise, your charger works exactly as it does on the ship.',
    },
  ],
  metaTitle:
    'Bahamas Plug Types & Adapter Guide — Type A/B, 120V, Identical to the US',
  metaDescription:
    'The Bahamas uses Type A and B plugs at 120V/60Hz — identical to the US. Learn about power on the Out Islands, resort outlets, and what UK or European visitors need.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Jamaica', slug: 'jamaica-electric-plug-types-will-you-need-an-adapter-for-charging' },
    { name: 'Cuba', slug: 'cuba-electric-plug-type-do-you-need-an-adapter-for-trip' },
    { name: 'Dominican Republic', slug: 'dominican-republic-electric-plug-types-do-you-need-an-adapter' },
    { name: 'United States', slug: 'usa-electric-plug-types-will-you-need-an-adapter-traveling-to-the-us' },
  ],
};

export default bahamas;

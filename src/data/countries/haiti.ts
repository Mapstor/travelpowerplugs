import type { CountryPlugData } from '@/types';

const haiti: CountryPlugData = {
  slug: 'haiti-electric-plug-types-do-you-need-an-adapter-for-haiti',
  name: 'Haiti',
  demonym: 'Haitian',
  continent: 'North America',
  region: 'Caribbean',
  voltage: 110,
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
    'Haiti\'s electrical grid is one of the least reliable in the Western Hemisphere. Power outages are constant — most hotels and guesthouses run on generators. A portable battery is absolutely essential.',
  ],
  travelContext:
    'Haiti uses the US-style electrical system at 110V/60Hz, so American travelers do not need an adapter. However, the grid is extremely unreliable. Even in Port-au-Prince, mains electricity is available for only a few hours per day. Hotels, NGO compounds, and businesses run almost entirely on diesel generators.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Haiti uses the same US-style plugs and 110V voltage. No adapter or converter needed.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'British plugs are incompatible. Haiti uses 110V, so UK devices designed for 230V may also need a converter unless dual-voltage.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'European round-pin plugs do not fit US-style flat-pin sockets. Voltage is 110V, so European devices designed for 220–240V need a converter unless dual-voltage.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'Australian plugs are incompatible. Both adapter and converter needed unless your device is dual-voltage.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Hardware stores in Pétionville',
      type: 'electronics',
      city: 'Pétionville',
      priceRange: '$5–15',
      note: 'Some hardware shops in Pétionville carry basic adapters. Availability is unreliable.',
    },
  ],
  airportName: 'Toussaint Louverture International Airport',
  airportCode: 'PAP',
  neighbors: [
    {
      name: 'Dominican Republic',
      slug: 'dominican-republic-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Same US-style system. One set of devices works in both countries.',
    },
    {
      name: 'Cuba',
      slug: 'cuba-electric-plug-type-do-you-need-an-adapter-for-trip',
      plugTypes: ['A', 'B'],
      voltage: 110,
      sameAsSubject: 'identical',
      adapterNote: 'Cuba also uses US-style Type A/B at 110V.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels and guesthouses in Haiti run primarily on generator power. Expect limited electricity hours even at higher-end accommodations. A high-capacity portable battery is essential for staying connected.',
  faqs: [
    {
      question: 'What plug type does Haiti use?',
      answer:
        'Haiti uses US-style Type A and Type B outlets at 110V/60Hz. If you are coming from the US, Canada, or Mexico, your devices plug in directly.',
    },
    {
      question: 'How bad is the power situation in Haiti?',
      answer:
        'Haiti has one of the least reliable electrical grids in the Western Hemisphere. Grid power in Port-au-Prince is often available for only a few hours per day. Nearly all hotels and businesses rely on diesel generators. A portable battery pack is absolutely essential.',
    },
    {
      question: 'Do I need a voltage converter for Haiti?',
      answer:
        'Only if your device is not dual-voltage. Haiti runs on 110V, which is the same as the US. European and Australian devices rated for 220–240V only will need a step-up converter. Most modern phone and laptop chargers are dual-voltage (100–240V) and work fine.',
    },
  ],
  metaTitle: 'Haiti Power Plugs — Type A & B Outlets, 110V, Adapter Guide',
  metaDescription:
    'Haiti uses US-style Type A and B plugs at 110V/60Hz. Learn about the extremely unreliable power grid, why you need a battery pack, and what adapter to bring.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Dominican Republic', slug: 'dominican-republic-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Cuba', slug: 'cuba-electric-plug-type-do-you-need-an-adapter-for-trip' },
    { name: 'Jamaica', slug: 'jamaica-electric-plug-types-will-you-need-an-adapter-for-charging' },
  ],
};

export default haiti;

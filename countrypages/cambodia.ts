import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'cambodia-electric-plug-types-will-you-need-an-adapter',
  name: 'Cambodia',
  demonym: 'Cambodian',
  continent: 'Asia',
  region: 'Southeast Asia',
  voltage: 230,
  frequency: 50,
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
    'Cambodia has a mix of Type A (US-style) and Type C (European) outlets, often both in the same room. Some hotels have multi-shape universal outlets. Voltage can be unstable — a surge protector is wise for expensive electronics.',
    'Islands like Koh Rong may rely on generators with limited hours of electricity. Siem Reap\'s tourist zone has generally reliable power.',
  ],
  travelContext:
    'Cambodia\'s electrical setup is forgiving for most travelers because both US flat-pin and European round-pin plugs tend to work somewhere in your room. That said, the 230V voltage catches US travelers off guard when their plug fits but the voltage is double what their device expects. Carry a universal adapter and a basic surge protector.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: true,
      notes:
        'US Type A flat-pin plugs fit many Cambodian outlets. However, the voltage is 230V — verify your device is dual-voltage. Grounded Type B plugs may not fit all sockets.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs will not fit. Bring an adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs fit Cambodian round-pin outlets. Voltage and frequency are compatible. Larger Schuko plugs may need a slight adapter in some locations.',
    },
    {
      origin: 'Australia / NZ',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs do not fit. You need an adapter. Voltage is close (230V vs 240V).',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Lucky Supermarket',
      type: 'supermarket',
      city: 'Phnom Penh',
      priceRange: '$2–$8',
      note: 'Electronics section carries basic adapters and power strips.',
    },
    {
      name: 'Local phone shops',
      type: 'electronics',
      city: 'Phnom Penh',
      priceRange: '$1–$5',
      note: 'Small electronics shops around Central Market and BKK1 carry cheap adapters.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      priceRange: 'Free (loaner)',
      note: 'Many tourist-oriented hotels in Siem Reap and Phnom Penh lend adapters to guests.',
    },
    {
      name: 'Phnom Penh / Siem Reap Airport shops',
      type: 'airport',
      priceRange: '$3–$10',
      note: 'Small shops at both airports carry basic travel adapters.',
    },
  ],
  airportName: 'Phnom Penh International / Siem Reap Angkor International',
  airportCode: 'PNH / SAI',
  neighbors: [
    {
      name: 'Thailand',
      slug: 'thailand-electric-plug-type-will-you-need-an-adapter-for-thailand',
      plugTypes: ['A', 'B', 'C', 'F'],
      voltage: 220,
      sameAsSubject: 'mostly',
      adapterNote: 'Thailand has a similarly mixed outlet situation. Your Cambodia adapter should work.',
    },
    {
      name: 'Vietnam',
      slug: 'vietnam-electric-plug-types-which-adapter-will-you-need-for-vietnam',
      plugTypes: ['A', 'C', 'F'],
      voltage: 220,
      sameAsSubject: 'mostly',
      adapterNote: 'Vietnam shares Type A and C with Cambodia. Same adapter works for both.',
    },
    {
      name: 'Laos',
      slug: 'laos-electric-plug-types-which-adapter-will-you-need-in-laos',
      plugTypes: ['A', 'B', 'C', 'E', 'F'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Laos uses a similar mix of plug types.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Siem Reap\'s tourist district and Phnom Penh\'s BKK1 area are well set up for international travelers, often with universal outlets. Budget guesthouses may have a single outlet per room. On islands like Koh Rong, generator-powered accommodation may only provide electricity in the evening.',
  faqs: [
    {
      question: 'Do I need an adapter for Cambodia?',
      answer:
        'If you carry US-style flat-pin or European round-pin plugs, you can usually find a socket that fits in Cambodian hotels. UK and Australian travelers will need an adapter. A universal adapter is the safest bet given the mixed outlet situation.',
    },
    {
      question: 'Is the voltage in Cambodia safe for US devices?',
      answer:
        'Cambodia uses 230V. Most US devices are rated for 120V only and could be damaged. Always check the label — dual-voltage devices (100–240V) are safe. Phone chargers and laptops are almost always dual-voltage.',
    },
    {
      question: 'Is the power reliable in Siem Reap?',
      answer:
        'Yes, power in Siem Reap\'s tourist areas is generally reliable. Hotels near Angkor Wat are well-served. Brief outages can happen but most hotels have backup generators. Rural areas and islands have less reliable electricity.',
    },
    {
      question: 'Should I bring a surge protector to Cambodia?',
      answer:
        'It is a good idea, especially if you are carrying expensive electronics like a laptop or camera equipment. Voltage fluctuations occur, particularly during storms or in areas with older wiring.',
    },
  ],
  metaTitle: 'Cambodia Power Plugs: Types A & C — Do You Need an Adapter?',
  metaDescription:
    'Cambodia uses Type A and C plugs at 230V/50Hz. Find out if you need an adapter, how to handle the voltage, and what power is like in Siem Reap, Phnom Penh, and the islands.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Vietnam', slug: 'vietnam-electric-plug-types-which-adapter-will-you-need-for-vietnam' },
    { name: 'Thailand', slug: 'thailand-electric-plug-type-will-you-need-an-adapter-for-thailand' },
    { name: 'Laos', slug: 'laos-electric-plug-types-which-adapter-will-you-need-in-laos' },
    { name: 'Myanmar', slug: 'myanmar-electric-plug-types-will-you-need-an-adapter-for-myanmar' },
  ],
};

export default data;

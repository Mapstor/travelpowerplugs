import { CountryPlugData } from '@/types';

const cuba: CountryPlugData = {
  slug: 'cuba-electric-plug-type-do-you-need-an-adapter-for-trip',
  name: 'Cuba',
  demonym: 'Cuban',
  continent: 'North America',
  region: 'Caribbean',
  voltage: 110,
  voltageNote: 'Older buildings use 110V with Type A outlets. Newer tourist hotels often have 220V with Type C. Some rooms have both voltages. Always check before plugging in.',
  frequency: 60,
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
  ],
  quirks: [
    'Cuba is one of the few countries with a genuine dual-voltage situation at the outlet level. Older hotels and casas particulares typically have 110V outlets with Type A plugs. Newer tourist hotels often have 220V outlets with Type C or a mix. Some rooms have BOTH voltages on different outlets — always check labels near the outlet or ask your host.',
    'Retail options for adapters and electronics are extremely limited in Cuba. Buy everything you need before arrival.',
  ],
  travelContext:
    'Cuba offers a unique travel experience with Havana\'s colonial architecture, Trinidad\'s cobblestone streets, Viñales Valley, and pristine Caribbean beaches. Infrastructure varies widely — newer international hotels are well-equipped, while casas particulares (private homestays) in smaller towns may have aging wiring and unpredictable voltage. Planning ahead for power needs is essential.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: 'maybe',
      notes:
        'US plugs fit Cuba\'s Type A/B outlets. However, some outlets run on 220V instead of 110V. Always check which voltage your specific outlet provides — look for labels or ask your host. Dual-voltage devices (100–240V) are safe regardless.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type A/B adapter. Buy this before traveling — adapters are very hard to find in Cuba. UK devices handle both 110V and 220V since they\'re designed for 230V.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs won\'t fit most Cuban outlets (though some newer hotels have Type C sockets). Bring an adapter and buy it before arriving in Cuba. European devices handle both voltage levels found in Cuba.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need an adapter purchased before your trip. Australian devices (230V) will handle either voltage found in Cuba.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Hotel front desks',
      type: 'hotel',
      city: 'Havana',
      note: 'Some larger tourist hotels can provide or lend adapters — availability is inconsistent.',
    },
    {
      name: 'La Rampa electronics shops',
      type: 'electronics',
      city: 'Havana',
      note: 'A few small shops on La Rampa (Calle 23) in Vedado may have basic adapters, but stock is unreliable.',
    },
  ],
  airportName: 'Havana José Martí International Airport',
  airportCode: 'HAV',
  neighbors: [
    {
      name: 'Jamaica',
      slug: 'jamaica-electric-plug-types-will-you-need-an-adapter-for-charging',
      plugTypes: ['A', 'B'],
      voltage: 110,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plug types and similar voltage, though Jamaica uses 50Hz instead of 60Hz.',
    },
    {
      name: 'Bahamas',
      slug: 'bahamas-electric-socket-types-will-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plugs, very similar voltage.',
    },
    {
      name: 'Mexico',
      slug: 'mexico-electric-plug-types-will-you-need-an-adapter-in-mexico',
      plugTypes: ['A', 'B'],
      voltage: 127,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plug shapes at a similar voltage. Compatible for most purposes.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'International tourist hotels in Havana and Varadero tend to have modern outlets and may even offer USB ports. Casas particulares — the more authentic Cuban stay — often have older wiring with a mix of 110V and 220V outlets. Always ask your host about voltage before plugging in anything. Bring your own adapter, power strip, and a portable battery pack.',
  faqs: [
    {
      question: 'Do I need an adapter for Cuba coming from the US?',
      answer:
        'You won\'t need a plug adapter since Cuba uses the same Type A/B flat-pin outlets as the US. However, Cuba has a dual-voltage situation — some outlets are 110V and others are 220V, sometimes in the same room. Make sure your devices are dual-voltage (100–240V) and check the outlet before plugging in.',
    },
    {
      question: 'How do I know which voltage a Cuban outlet is?',
      answer:
        'Look for labels or markings near the outlet. In casas particulares, ask your host directly. As a general rule, older-looking Type A outlets tend to be 110V, while newer Type C round-pin outlets are usually 220V. When in doubt, assume 220V and only plug in dual-voltage devices.',
    },
    {
      question: 'Can I buy an adapter in Havana?',
      answer:
        'It\'s extremely difficult. Cuba has very limited retail options for electronics. A few shops on La Rampa in Vedado may have basic adapters, but stock is unreliable. Some hotel front desks can lend adapters. The safest approach is to buy everything you need before traveling to Cuba.',
    },
    {
      question: 'Will my phone charger work in a Cuban casa particular?',
      answer:
        'Almost certainly yes. Modern phone chargers are dual-voltage (100–240V), so they\'ll work on either 110V or 220V outlets. Just make sure it says "100–240V" or "110–240V" on the charger label, and bring a small power strip since older casas may have very few outlets.',
    },
    {
      question: 'Should I bring a power bank to Cuba?',
      answer:
        'Absolutely. Power outages happen across Cuba, especially outside Havana. Internet access points (ETECSA Wi-Fi parks) don\'t have charging outlets. A good portable battery pack is one of the most useful things you can bring.',
    },
  ],
  metaTitle:
    'Cuba Plug Types & Adapter Guide — Dual Voltage Warning, Type A/B, What to Bring',
  metaDescription:
    'Cuba uses Type A/B plugs but has a tricky dual-voltage situation (110V and 220V). Learn what to bring, how to check outlets, and why you must buy adapters before arriving.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Jamaica', slug: 'jamaica-electric-plug-types-will-you-need-an-adapter-for-charging' },
    { name: 'Dominican Republic', slug: 'dominican-republic-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Mexico', slug: 'mexico-electric-plug-types-will-you-need-an-adapter-in-mexico' },
    { name: 'Bahamas', slug: 'bahamas-electric-socket-types-will-you-need-an-adapter' },
  ],
};

export default cuba;

import { CountryPlugData } from '../types';

const costaRica: CountryPlugData = {
  slug: 'costa-rica-electric-plug-types-do-you-need-an-adapter',
  name: 'Costa Rica',
  demonym: 'Costa Rican',
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
    'Costa Rica\'s power grid is famously over 99% renewable — powered by hydroelectric, geothermal, and wind energy. The electrical system itself is identical to the US (Type A/B, 120V, 60Hz).',
  ],
  travelContext:
    'Costa Rica is Central America\'s most popular eco-tourism destination, with cloud forests, volcanic hot springs, Pacific and Caribbean beaches, and abundant wildlife. San José is the main entry point, with Arenal, Monteverde, Manuel Antonio, and the Nicoya Peninsula as top destinations. Even remote jungle lodges and cloud forest eco-hotels generally have reliable power.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Identical electrical system to the US and Canada — Type A/B plugs at 120V/60Hz. No adapter or converter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type A/B adapter. UK electronics handle 120V fine since they\'re dual-voltage.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European plugs won\'t fit. You need an adapter, and you should confirm your devices support 120V — some European appliances only work on 220–240V.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Australian plugs won\'t fit Costa Rican outlets. You\'ll need an adapter and should verify your 230V devices handle 120V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Gollo',
      type: 'electronics',
      city: 'San José',
      priceRange: '$5–$15 USD',
      note: 'Costa Rica\'s largest electronics retailer with stores nationwide.',
    },
    {
      name: 'Monge',
      type: 'electronics',
      priceRange: '$4–$12 USD',
      note: 'Appliance and electronics chain with locations across the country.',
    },
    {
      name: 'Auto Mercado',
      type: 'supermarket',
      priceRange: '$5–$15 USD',
      note: 'Upscale supermarket that sometimes carries travel adapters in its home goods section.',
    },
  ],
  airportName: 'San José Juan Santamaría International Airport',
  airportCode: 'SJO',
  neighbors: [
    {
      name: 'Panama',
      slug: 'panama-electric-plug-types-will-you-need-an-adapter-for-panama',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Identical system — same plugs, same voltage. No adapter needed.',
    },
    {
      name: 'Nicaragua',
      slug: 'nicaragua-electric-plug-types-will-you-need-an-adapter-in-nicaragua',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Same plugs and voltage. No adapter needed when crossing the border.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Most eco-lodges and hotels throughout Costa Rica have reliable US-style outlets, even in remote areas like Corcovado or Tortuguero. Upscale resorts in Guanacaste and Manuel Antonio are well-equipped. Some very remote jungle cabins may have limited outlets, so a small power strip can be helpful.',
  faqs: [
    {
      question: 'Do I need an adapter for Costa Rica from the US?',
      answer:
        'No. Costa Rica uses the exact same Type A/B plugs and 120V/60Hz power as the US and Canada. Your devices will work without any adapter.',
    },
    {
      question: 'Is the electricity reliable in Costa Rica\'s cloud forests and jungle lodges?',
      answer:
        'Yes, surprisingly so. Costa Rica generates over 99% of its electricity from renewable sources, and even remote eco-lodges in Monteverde, Arenal, and the Osa Peninsula generally have reliable power. Brief outages during heavy rain are possible but uncommon.',
    },
    {
      question: 'What adapter does a European traveler need for Costa Rica?',
      answer:
        'You\'ll need a Type C/E/F to Type A adapter. Also check that your devices support 120V — Costa Rica runs on half the voltage of most European countries. Phone chargers and laptops are almost always dual-voltage, but hair dryers and other heating appliances may not be.',
    },
    {
      question: 'Can I charge my devices on liveaboard boats or in Tortuguero?',
      answer:
        'Tortuguero lodges have standard Costa Rican power despite being accessible only by boat or plane. Liveaboard dive boats typically have 120V outlets for charging, though the number of outlets may be limited — bring a small multi-port USB charger.',
    },
  ],
  metaTitle:
    'Costa Rica Plug Types & Adapter Guide — Type A/B, 120V, Same as the US',
  metaDescription:
    'Costa Rica uses Type A and B plugs at 120V/60Hz — identical to the US. Learn whether you need an adapter for your trip, from San José to the cloud forests.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Panama', slug: 'panama-electric-plug-types-will-you-need-an-adapter-for-panama' },
    { name: 'Nicaragua', slug: 'nicaragua-electric-plug-types-will-you-need-an-adapter-in-nicaragua' },
    { name: 'Colombia', slug: 'colombia-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Ecuador', slug: 'ecuador-electric-plug-type-will-you-need-an-adapter' },
  ],
};

export default costaRica;

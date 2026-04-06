import type { CountryPlugData } from '@/types';

const venezuela: CountryPlugData = {
  slug: 'venezuela-electric-plug-types-will-you-need-an-adapter-for-venezuela',
  name: 'Venezuela',
  demonym: 'Venezuelan',
  continent: 'South America',
  region: 'Northern South America',
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
    'Venezuela uses the same plug and voltage system as the United States. However, the national power grid has suffered severe deterioration — widespread blackouts occur, particularly outside Caracas. Always carry a portable battery.',
  ],
  travelContext:
    'Venezuela\'s electrical system is identical to the US (120V, Type A/B), but the country\'s power infrastructure has been in crisis for years. Caracas has the most reliable electricity, though blackouts still occur. Outside the capital, prolonged outages are common. A portable power bank is not optional — it\'s essential.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Same system as the US — your plugs fit and the voltage matches. No adapter or converter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'UK plugs won\'t fit. Venezuela runs at 120V/60Hz so UK devices designed for 230V may need a converter, though most modern chargers are dual-voltage.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'European round-pin plugs won\'t fit US-style flat-pin sockets. The 120V supply also means non-dual-voltage European devices may need a converter.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'Australian plugs won\'t fit. The 120V supply differs from Australia\'s 230V — check your devices.',
    },
  ],
  localPurchaseOptions: [
    { name: 'Centro Comercial Sambil', type: 'electronics', city: 'Caracas', priceRange: 'Variable', note: 'Major shopping mall with some electronics shops — availability fluctuates due to economic conditions' },
    { name: 'Buy adapters before traveling', type: 'electronics', note: 'Venezuela\'s retail landscape is severely limited — purchase adapters before departure' },
  ],
  airportName: 'Caracas Simón Bolívar International Airport',
  airportCode: 'CCS',
  neighbors: [
    { name: 'Colombia', slug: 'colombia-electric-plug-types-do-you-need-an-adapter', plugTypes: ['A', 'B'], voltage: 110, sameAsSubject: 'compatible', adapterNote: 'Same plug types, slightly lower voltage' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter', plugTypes: ['C', 'N'], voltage: 127, sameAsSubject: 'different', adapterNote: 'Brazil uses different plug types and mixed voltage' },
    { name: 'Guyana', slug: 'guyana-electric-plug-types-will-you-need-an-adapter-in-georgetown', plugTypes: ['A', 'B', 'D', 'G'], voltage: 240, sameAsSubject: 'partially', adapterNote: 'Guyana has Type A/B but at 240V — dangerous for 120V-only devices' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Caracas have US-style Type A/B outlets. Generator backup varies — even upscale hotels may experience power disruptions. Outside Caracas, expect frequent outages. A high-capacity power bank is essential for any trip to Venezuela.',
  faqs: [
    {
      question: 'Do US plugs work in Venezuela?',
      answer:
        'Yes. Venezuela uses the same Type A/B plugs and 120V/60Hz power as the United States. Your US devices work without any adapter or converter.',
    },
    {
      question: 'How bad are the power outages in Venezuela?',
      answer:
        'The power grid has been deteriorating for years. Caracas has the most reliable service but still experiences blackouts. Outside the capital, outages can last hours or even days. Always carry a fully charged power bank and charge devices whenever power is available.',
    },
    {
      question: 'Can I buy an adapter or power bank in Venezuela?',
      answer:
        'Availability is very limited due to ongoing economic difficulties. Electronics shops exist in Caracas malls like Sambil, but stock is unpredictable and prices may be high. Buy everything you need before traveling.',
    },
  ],
  metaTitle: 'Venezuela Power Plugs — Types A & B (US System) | Grid Reliability Warning',
  metaDescription:
    'Venezuela uses US-style Type A/B plugs at 120V/60Hz. American travelers need no adapter. European and UK visitors do. Warning: widespread power outages — bring a power bank.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Colombia', slug: 'colombia-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Guyana', slug: 'guyana-electric-plug-types-will-you-need-an-adapter-in-georgetown' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default venezuela;

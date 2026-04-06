import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'suriname-electric-plug-types-will-you-need-an-adapter-for-suriname',
  name: 'Suriname',
  demonym: 'Surinamese',
  continent: 'South America',
  region: 'Northern South America',
  voltage: 127,
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
    'Suriname\'s Dutch colonial legacy shows in its electrical mix — US-style (A/B) and European (C/F) plug types coexist at 127V. Paramaribo hotels generally have both available.',
  ],
  travelContext:
    'Suriname is South America\'s smallest country, with strong Dutch cultural ties. Paramaribo, the UNESCO-listed capital, is where most travelers spend their time. The city has a mix of US and European outlet types reflecting the country\'s diverse heritage. Power is generally stable in the capital but less so in the interior rainforest areas.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'US plugs fit Type A/B outlets directly. The 127V supply is close enough to US 120V for all devices. No adapter or converter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'UK plugs won\'t fit any Surinamese socket type. The 127V/60Hz supply also differs from UK 230V — check your devices.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: 'maybe',
      notes:
        'European Type C outlets exist in many buildings. However, the 127V supply is lower than European 230V — most phone chargers and laptops handle this fine (dual-voltage), but check appliances like hair dryers.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'Australian plugs need an adapter. The 127V supply is significantly lower than Australia\'s 230V — check device compatibility.',
    },
  ],
  localPurchaseOptions: [
    { name: 'Fernandes', type: 'electronics', city: 'Paramaribo', priceRange: 'SRD 30–80', note: 'Major Surinamese retailer and distributor' },
    { name: 'Kirpalani\'s', type: 'electronics', city: 'Paramaribo', priceRange: 'SRD 25–70', note: 'Department store chain with electronics section' },
    { name: 'Shops on Domineestraat', type: 'convenience', city: 'Paramaribo', priceRange: 'SRD 20–60', note: 'Central Paramaribo street with various small electronics shops' },
  ],
  airportName: 'Paramaribo Johan Adolf Pengel International Airport',
  airportCode: 'PBM',
  neighbors: [
    { name: 'Guyana', slug: 'guyana-electric-plug-types-will-you-need-an-adapter-in-georgetown', plugTypes: ['A', 'B', 'D', 'G'], voltage: 240, sameAsSubject: 'partially', adapterNote: 'Guyana shares Type A/B but at 240V — very different voltage' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter', plugTypes: ['C', 'N'], voltage: 127, sameAsSubject: 'partially', adapterNote: 'Similar voltage but Brazil uses Type N for grounded outlets' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Paramaribo typically have a mix of US-style (Type A/B) and European (Type C/F) outlets. Don\'t assume which type you\'ll find — it varies by building age and renovation. Interior jungle lodges have limited or generator-based electricity.',
  faqs: [
    {
      question: 'Will my US charger work in Suriname?',
      answer:
        'Yes. US-style Type A/B outlets are common throughout Suriname, and the 127V supply is close enough to US 120V for all practical purposes. No adapter or converter needed.',
    },
    {
      question: 'Why does Suriname have both US and European outlets?',
      answer:
        'Suriname was a Dutch colony, and its electrical infrastructure reflects a mix of European and American equipment imported over decades. Both standards coexist, particularly in Paramaribo.',
    },
    {
      question: 'Is there reliable electricity in the interior?',
      answer:
        'Jungle lodges and interior villages often rely on generators that run for limited hours. Charge everything fully in Paramaribo before heading into the rainforest, and bring a power bank.',
    },
  ],
  metaTitle: 'Suriname Power Plugs — Types A, B, C & F at 127V | Adapter Guide',
  metaDescription:
    'Suriname uses a mix of US and European plugs (A, B, C, F) at 127V/60Hz. US travelers need no adapter. European and UK visitors should check voltage. Tips for Paramaribo.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Guyana', slug: 'guyana-electric-plug-types-will-you-need-an-adapter-in-georgetown' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default data;

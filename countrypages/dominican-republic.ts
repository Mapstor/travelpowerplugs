import { CountryPlugData } from '../types';

const dominicanRepublic: CountryPlugData = {
  slug: 'dominican-republic-electric-plug-types-do-you-need-an-adapter',
  name: 'Dominican Republic',
  demonym: 'Dominican',
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
    'Power outages (called "apagones") are common outside resort areas. Most hotels and all-inclusive resorts have backup generators, but smaller local guesthouses may not.',
  ],
  travelContext:
    'The Dominican Republic is one of the Caribbean\'s most visited countries, anchored by the mega-resort zone of Punta Cana, the colonial charm of Santo Domingo\'s Zona Colonial, and the north coast beaches of Puerto Plata and Samaná. All-inclusive resorts have modern, reliable power. Outside resort zones, the electrical grid is less dependable.',
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
        'You\'ll need a Type G to Type A/B adapter. UK devices are dual-voltage and will work fine.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European plugs don\'t fit. You need an adapter, and confirm your devices handle 120V — some are 220–240V only.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Australian plugs won\'t fit. You need an adapter and should verify voltage compatibility.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'La Sirena',
      type: 'supermarket',
      city: 'Santo Domingo',
      priceRange: '$3–$10 USD',
      note: 'Major discount department store chain found across the country.',
    },
    {
      name: 'Jumbo',
      type: 'supermarket',
      priceRange: '$4–$12 USD',
      note: 'Large supermarket with electronics sections in Santo Domingo and Santiago.',
    },
    {
      name: 'CCN (Centro Cuesta Nacional)',
      type: 'supermarket',
      priceRange: '$4–$12 USD',
      note: 'Retail chain operating several store brands with electronics availability.',
    },
  ],
  airportName: 'Punta Cana International Airport',
  airportCode: 'PUJ',
  neighbors: [
    {
      name: 'Haiti',
      slug: 'haiti-electric-plug-types-do-you-need-an-adapter-for-haiti',
      plugTypes: ['A', 'B'],
      voltage: 110,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plug types, very similar voltage. Compatible systems.',
    },
    {
      name: 'Jamaica',
      slug: 'jamaica-electric-plug-types-will-you-need-an-adapter-for-charging',
      plugTypes: ['A', 'B'],
      voltage: 110,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plug types at a similar voltage, though Jamaica runs at 50Hz.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Punta Cana and Puerto Plata all-inclusive resorts have reliable power with backup generators and modern outlets. Santo Domingo\'s Zona Colonial boutique hotels are generally well-equipped. Budget accommodations outside resort areas may experience power outages — a small flashlight and portable battery are useful additions.',
  faqs: [
    {
      question: 'Do I need a plug adapter for the Dominican Republic from the US?',
      answer:
        'No. The Dominican Republic uses the same Type A/B plugs and 120V/60Hz electricity as the United States. Your devices work identically.',
    },
    {
      question: 'Are power outages common at Punta Cana resorts?',
      answer:
        'No. All-inclusive resorts in Punta Cana have backup generators and you\'re unlikely to notice any grid issues. Power outages ("apagones") are more common in residential areas and smaller towns outside the resort zones.',
    },
    {
      question: 'What adapter does a British traveler need for the Dominican Republic?',
      answer:
        'You\'ll need a Type G (UK) to Type A (US-style) adapter. Your chargers and electronics are dual-voltage, so no converter is necessary — just the plug adapter.',
    },
    {
      question: 'Can I use European appliances at my resort?',
      answer:
        'You\'ll need a plug adapter for the different socket shape. Check the voltage label on your appliance — the DR runs on 120V, which is half of Europe\'s 220–240V. Phone chargers and laptop adapters are usually dual-voltage and will work fine. Hair dryers and other heating devices often need 220V and won\'t work properly.',
    },
  ],
  metaTitle:
    'Dominican Republic Plug Types & Adapter Guide — Type A/B, 120V, Resort Tips',
  metaDescription:
    'The Dominican Republic uses Type A and B plugs at 120V/60Hz — identical to the US. Learn about power at Punta Cana resorts, outages, and which adapter to bring.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Cuba', slug: 'cuba-electric-plug-type-do-you-need-an-adapter-for-trip' },
    { name: 'Jamaica', slug: 'jamaica-electric-plug-types-will-you-need-an-adapter-for-charging' },
    { name: 'Haiti', slug: 'haiti-electric-plug-types-do-you-need-an-adapter-for-haiti' },
    { name: 'Bahamas', slug: 'bahamas-electric-socket-types-will-you-need-an-adapter' },
  ],
};

export default dominicanRepublic;

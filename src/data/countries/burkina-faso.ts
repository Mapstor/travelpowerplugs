import { CountryPlugData } from '@/types';

const burkinaFaso: CountryPlugData = {
  slug: 'burkina-faso-electric-plug-types',
  name: 'Burkina Faso',
  demonym: 'Burkinabé',
  continent: 'Africa',
  region: 'West Africa',
  voltage: 220,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
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
      id: 'type-e',
      name: 'Type E',
      subtitle: 'French',
      pins: 2,
      pinShape: 'round',
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.075,
      bodyWidth: 1.3,
      bodyHeight: 1.3,
      bodyCornerRadius: 0.25,
      noseRadius: 0.52,
      recessRadius: 1.05,
      faceplateSize: 2.9,
    },
  ],
  travelContext:
    'Burkina Faso uses the French electrical standard common across francophone West Africa. Ouagadougou has a developing power grid, but rolling blackouts remain a regular part of life. The country is landlocked and faces energy supply challenges, relying partly on imports from neighboring Ivory Coast.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs do not fit. You also need a converter for non-dual-voltage devices at 220V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European plugs fit directly. The French C/E standard is used throughout the country.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs need an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'CFAO',
      type: 'electronics',
      city: 'Ouagadougou',
      priceRange: '$5–$15',
      note: 'Major retail chain with a presence in Ouagadougou. May carry adapters and electrical accessories.',
    },
    {
      name: 'Marina Market',
      type: 'supermarket',
      city: 'Ouagadougou',
      priceRange: '$3–$10',
      note: 'Supermarket that occasionally stocks basic electrical accessories.',
    },
    {
      name: 'Local electronics stalls',
      type: 'electronics',
      city: 'Ouagadougou',
      priceRange: '$2–$8',
      note: 'Small electronics vendors in central Ouagadougou markets.',
    },
  ],
  airportName: 'Ouagadougou Thomas Sankara International Airport',
  airportCode: 'OUA',
  neighbors: [
    {
      name: 'Mali',
      slug: 'mali-electric-plug-types-which-adapter-will-you-need-in-mali',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
    {
      name: 'Niger',
      slug: 'niger-electric-plug-types-will-you-need-an-adapter-for-niger',
      plugTypes: ['C', 'D', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'compatible',
    },
    {
      name: 'Benin',
      slug: 'benin-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
    {
      name: 'Togo',
      slug: 'togo-electric-plug-types-which-adapter-will-you-need-for-togo',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
    {
      name: 'Ghana',
      slug: 'ghana-electric-plug-types-will-you-need-an-adapter-in-accra',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Ghana uses British-style Type G — completely different from Burkina Faso. You will need a different adapter.',
    },
    {
      name: 'Ivory Coast',
      slug: 'cote-divoire-electric-plug-type-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Ouagadougou range from budget guesthouses to mid-range business hotels. Generator backup is common at the better establishments. Outside the capital, accommodation is basic and power supply is unreliable. Bring a portable battery pack for travel outside Ouagadougou.',
  faqs: [
    {
      question: 'Can I use the same adapter across francophone West Africa?',
      answer:
        'Yes. Burkina Faso, Mali, Ivory Coast, Benin, Togo, Senegal, and other French-speaking West African countries all use Type C and E outlets. A single European adapter covers the entire region.',
    },
    {
      question: 'How often do power outages occur in Ouagadougou?',
      answer:
        'Rolling blackouts are fairly common in Ouagadougou, especially during the hot season when demand peaks. Hotels with generator backup can maintain power during outages, but budget accommodation may not.',
    },
    {
      question: 'Will I need a different adapter if crossing into Ghana?',
      answer:
        'Yes. Ghana uses British-style Type G outlets, which are completely different from the French C/E system in Burkina Faso. You will need a separate adapter for Ghana.',
    },
  ],
  metaTitle: 'Burkina Faso Power Plugs — Types C & E | Adapter Guide',
  metaDescription:
    'Burkina Faso uses French-style Type C and E plugs at 220V/50Hz. Find out if you need an adapter and what to expect from power supply in Ouagadougou.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Mali', slug: 'mali-electric-plug-types-which-adapter-will-you-need-in-mali' },
    { name: 'Ivory Coast', slug: 'cote-divoire-electric-plug-type-do-you-need-an-adapter' },
    { name: 'Ghana', slug: 'ghana-electric-plug-types-will-you-need-an-adapter-in-accra' },
  ],
};

export default burkinaFaso;

import type { CountryPlugData } from '@/types';

const bolivia: CountryPlugData = {
  slug: 'bolivia-electric-plug-types-do-you-need-an-adapter',
  name: 'Bolivia',
  demonym: 'Bolivian',
  continent: 'South America',
  region: 'Andean',
  voltage: 230,
  frequency: 50,
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
    'Bolivia uses US-style Type A alongside European Type C, but at 230V. US plugs fit the Type A outlets but are receiving nearly double the expected voltage — always check that your devices are dual-voltage before plugging in.',
  ],
  travelContext:
    'Bolivia is a popular backpacker and adventure destination known for the Salar de Uyuni, Lake Titicaca, and La Paz. The mix of Type A and Type C outlets means both US and European plugs can physically fit, but the 230V supply catches many US travelers off guard. La Paz and Sucre have a mix of both socket types, often in the same building.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: true,
      notes:
        'US Type A plugs fit many Bolivian outlets. However, the voltage is 230V — nearly double what US devices expect. Non-dual-voltage devices will be damaged. Always check the label. Type B (grounded) plugs may not find grounded outlets.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK plugs won\'t fit either socket type. You need an adapter. Voltage is compatible.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs fit Type C outlets directly. Type F (Schuko) may be too large for some outlets — carry a slim Europlug adapter as backup.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    { name: 'Multicenter', type: 'electronics', city: 'La Paz', priceRange: 'BOB 20–60', note: 'Department store with electronics section' },
    { name: 'Ketal supermarkets', type: 'supermarket', city: 'La Paz', priceRange: 'BOB 15–40', note: 'Supermarket chain with basic electrical accessories' },
    { name: 'Shops on Calle Eloy Salmón', type: 'electronics', city: 'La Paz', priceRange: 'BOB 10–50', note: 'La Paz\'s electronics street — dense with small shops selling adapters, chargers, and cables' },
  ],
  airportName: 'La Paz El Alto International Airport',
  airportCode: 'LPB',
  neighbors: [
    { name: 'Peru', slug: 'peru-electric-plug-types-will-you-need-an-adapter-for-peru', plugTypes: ['A', 'B', 'C'], voltage: 220, sameAsSubject: 'mostly' },
    { name: 'Chile', slug: 'chile-electric-plug-types-do-you-need-an-adapter-while-traveling', plugTypes: ['C', 'L'], voltage: 220, sameAsSubject: 'partially' },
    { name: 'Argentina', slug: 'argentina-electric-plug-types-do-you-need-an-adapter', plugTypes: ['C', 'I'], voltage: 220, sameAsSubject: 'partially' },
    { name: 'Paraguay', slug: 'paraguay-electric-plug-types-which-adapter-will-you-need', plugTypes: ['C'], voltage: 220, sameAsSubject: 'partially' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter', plugTypes: ['C', 'N'], voltage: 127, sameAsSubject: 'partially' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in La Paz, Sucre, and Santa Cruz have a mix of Type A and Type C outlets — sometimes both in the same room. Budget hostels may have limited outlets. USB ports are uncommon except in newer international hotels.',
  faqs: [
    {
      question: 'My US plug fits — is it safe to use?',
      answer:
        'Only if your device is dual-voltage (100–240V). Bolivia runs at 230V, which is nearly double the US standard of 120V. Plugging in a 120V-only device will damage it. Most phone chargers and laptops are dual-voltage — check the label.',
    },
    {
      question: 'What type of outlet will I find in La Paz?',
      answer:
        'A mix of Type A (US flat-pin) and Type C (European round-pin). Many buildings have both types. Calle Eloy Salmón in La Paz is lined with electronics shops where you can buy adapters cheaply.',
    },
    {
      question: 'Do I need a special adapter for the Salar de Uyuni?',
      answer:
        'Salt flat tours typically start from Uyuni town, where accommodations have the same Type A/C outlets as the rest of Bolivia. Salt hotel lodges may have limited power. Charge fully before heading out and bring a power bank.',
    },
  ],
  metaTitle: 'Bolivia Power Plugs — Types A & C at 230V | Voltage Warning for US Travelers',
  metaDescription:
    'Bolivia uses Types A and C at 230V/50Hz. US plugs fit but voltage is dangerously high for 120V devices. European travelers are fine. Tips for La Paz, Uyuni, and local stores.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Peru', slug: 'peru-electric-plug-types-will-you-need-an-adapter-for-peru' },
    { name: 'Argentina', slug: 'argentina-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Chile', slug: 'chile-electric-plug-types-do-you-need-an-adapter-while-traveling' },
  ],
};

export default bolivia;

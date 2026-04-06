import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'syria-electric-plug-types-which-adapter-will-you-need-in-syria',
  name: 'Syria',
  demonym: 'Syrian',
  continent: 'Asia',
  region: 'Middle East',
  voltage: 220,
  frequency: 50,
  complexityTier: 'moderate',
  plugTypes: [
    { id: 'type-c', name: 'Type C', subtitle: 'Europlug', pins: 2, pinShape: 'round', pinDiameter: 4.0, pinSpacing: 19, ratedAmps: 2.5, grounded: false, hasGroundClips: false, pinRadius: 0.063, bodyWidth: 1.18, bodyHeight: 0.72, bodyCornerRadius: 0.2, noseRadius: 0.42, recessRadius: 0.92, faceplateSize: 2.7 },
    { id: 'type-e', name: 'Type E', subtitle: 'French', pins: 2, pinShape: 'round', pinDiameter: 4.8, pinSpacing: 19, ratedAmps: 16, grounded: true, hasGroundClips: false, pinRadius: 0.075, bodyWidth: 1.3, bodyHeight: 1.3, bodyCornerRadius: 0.25, noseRadius: 0.52, recessRadius: 1.05, faceplateSize: 2.9 },
    { id: 'type-l', name: 'Type L', subtitle: 'Italian', pins: 3, pinShape: 'round', pinDiameter: 4.0, pinSpacing: 19, ratedAmps: 16, grounded: true, hasGroundClips: false, pinRadius: 0.063, bodyWidth: 1.2, bodyHeight: 0.8, bodyCornerRadius: 0.2, noseRadius: 0.45, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  quirks: [
    'Syria\'s plug mix reflects French colonial influence (C/E) alongside Italian-style Type L outlets. Power infrastructure has been severely damaged by years of conflict, and generator power is the norm in many areas.',
  ],
  travelContext: 'Travel to Syria is extremely restricted and most governments advise against all travel. Power infrastructure has been severely damaged by the ongoing conflict. Generator power is the norm in many areas, and electricity supply is highly unpredictable. If you do travel, bring all necessary adapters, battery packs, and a solar charger as backup.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: true, converterNeeded: true, notes: 'US plugs will not fit Syrian sockets. A voltage converter is needed for non-dual-voltage devices.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: false, notes: 'British plugs are not used in Syria. You need an adapter for C, E, or L outlets.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: false, notes: 'Type C will fit most sockets. Type F may not fit Type E sockets due to the ground pin, and Type L sockets require a separate adapter.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: true, converterNeeded: false, notes: 'Australian plugs are not used in Syria. Bring an adapter.' },
  ],
  localPurchaseOptions: [
    { name: 'Local electronics shops', type: 'electronics', city: 'Damascus', priceRange: '$2-5', note: 'Availability is extremely limited and unpredictable due to the conflict' },
  ],
  airportName: 'Damascus International Airport',
  airportCode: 'DAM',
  neighbors: [
    { name: 'Turkey', slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey', plugTypes: ['C', 'F'], voltage: 220, sameAsSubject: 'partially', adapterNote: 'Turkey uses C/F but not Type E or L' },
    { name: 'Iraq', slug: 'iraq-electric-plug-types-will-you-need-an-adapter-traveling-to-iraq', plugTypes: ['C', 'D', 'G'], voltage: 230, sameAsSubject: 'partially', adapterNote: 'Iraq uses a different plug mix' },
    { name: 'Jordan', slug: 'jordan-electric-plug-types-will-you-need-adapter-traveling-to-jordan', plugTypes: ['B', 'C', 'D', 'F', 'G', 'J'], voltage: 230, sameAsSubject: 'partially', adapterNote: 'Jordan shares Type C but uses many additional types' },
    { name: 'Lebanon', slug: 'lebanon-electric-plug-types-will-you-need-an-adapter-in-beirut', plugTypes: ['A', 'B', 'C', 'D', 'G'], voltage: 220, sameAsSubject: 'partially', adapterNote: 'Lebanon shares Type C but uses a different overall mix' },
    { name: 'Israel', slug: 'israel-electric-plug-type-will-you-need-an-adapter-for-israel', plugTypes: ['C', 'H'], voltage: 230, sameAsSubject: 'partially', adapterNote: 'Israel uses Type H which is unique to the region' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote: 'Hotel availability and quality vary dramatically depending on the region and security situation. Where hotels are operational, generator-based power with intermittent outages is common.',
  faqs: [
    { question: 'What plug types are used in Syria?', answer: 'Syria uses Types C, E, and L — a mix of French and Italian-style outlets inherited from the French Mandate period.' },
    { question: 'Is electricity reliable in Syria?', answer: 'No. Power infrastructure has been severely damaged by years of conflict. Many areas rely on generators, and supply is unpredictable even in Damascus.' },
    { question: 'Can I buy an adapter in Syria?', answer: 'Availability is extremely limited and unpredictable. Buy all adapters and bring backup battery packs before traveling.' },
  ],
  metaTitle: 'Syria Power Plugs — Which Adapter Will You Need?',
  metaDescription: 'Syria uses plug types C, E, and L at 220V/50Hz. Learn about the plug situation, power reliability, and what to bring if traveling to Syria.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Lebanon', slug: 'lebanon-electric-plug-types-will-you-need-an-adapter-in-beirut' },
    { name: 'Jordan', slug: 'jordan-electric-plug-types-will-you-need-adapter-traveling-to-jordan' },
    { name: 'Turkey', slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey' },
  ],
};

export default data;

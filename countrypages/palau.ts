import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'palau-electric-plug-types-will-you-need-an-adapter-for-palau',
  name: 'Palau',
  demonym: 'Palauan',
  continent: 'Oceania',
  region: 'Micronesia',
  voltage: 120,
  frequency: 60,
  complexityTier: 'simple',
  plugTypes: [
    { id: 'type-a', name: 'Type A', subtitle: 'US ungrounded', pins: 2, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 12.7, ratedAmps: 15, grounded: false, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.0, bodyHeight: 0.7, bodyCornerRadius: 0.15, noseRadius: 0.35, recessRadius: 0.85, faceplateSize: 2.5 },
    { id: 'type-b', name: 'Type B', subtitle: 'US grounded', pins: 3, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 12.7, ratedAmps: 15, grounded: true, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.2, bodyHeight: 0.9, bodyCornerRadius: 0.15, noseRadius: 0.4, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  travelContext: 'Palau has a Compact of Free Association with the United States and uses the identical US electrical system. Koror, the main town and tourist hub, has reliable power. Dive resorts throughout the Rock Islands provide their own electricity. Palau is a major diving destination, and resorts are well-equipped compared to other Pacific Island nations, though the retail options for electronics remain very limited.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: false, converterNeeded: false, notes: 'Palau uses the same system as the US. No adapter or converter needed.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: true, notes: 'British plugs will not fit, and the 120V supply requires a converter for non-dual-voltage devices.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: true, notes: 'European plugs are not compatible. A converter is also needed for the 120V voltage.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: true, converterNeeded: true, notes: 'Australian plugs will not fit. A converter is needed for the 120V supply.' },
  ],
  localPurchaseOptions: [
    { name: 'Surangel & Sons', type: 'supermarket', city: 'Koror', priceRange: '$5-15', note: 'Palau\'s largest retailer, may stock basic adapters' },
    { name: 'WCTC Shopping Center', type: 'supermarket', city: 'Koror', priceRange: '$5-12', note: 'Department store with some electronics' },
  ],
  airportName: 'Roman Tmetuchl International Airport',
  airportCode: 'ROR',
  neighbors: [
    { name: 'Micronesia', slug: 'micronesia-electric-plug-types-will-you-need-an-adapter-on-the-islands', plugTypes: ['A', 'B'], voltage: 120, sameAsSubject: 'identical', adapterNote: 'Same US-style system' },
    { name: 'Philippines', slug: 'philippines-electric-plug-types-will-you-need-an-adapter-for-philippines', plugTypes: ['A', 'B', 'C'], voltage: 220, sameAsSubject: 'partially', adapterNote: 'Philippines shares plug types A/B but runs at 220V' },
    { name: 'Indonesia', slug: 'indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'different', adapterNote: 'Indonesia uses European-style plugs at 230V' },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote: 'Dive resorts and hotels in Koror are well-equipped with reliable power and US-style outlets. The tourism infrastructure in Palau is more developed than in many Pacific Island nations due to the popularity of the diving.',
  faqs: [
    { question: 'Do I need an adapter for Palau?', answer: 'US and Canadian travelers do not need an adapter. Travelers from Europe, UK, Australia, and Asia need both an adapter and a voltage converter for non-dual-voltage devices.' },
    { question: 'Is the power reliable in Palau?', answer: 'Yes, Koror has reliable grid power and dive resorts maintain their own supply. Power is generally consistent throughout the tourist areas.' },
    { question: 'Can I buy an adapter in Palau?', answer: 'Surangel & Sons and WCTC Shopping Center in Koror may have basic adapters, but selection is limited. Buy before arriving to be safe.' },
  ],
  metaTitle: 'Palau Power Plugs — Will You Need an Adapter?',
  metaDescription: 'Palau uses US-style Types A and B plugs at 120V/60Hz. Find out if you need an adapter, where to buy one in Koror, and what to expect at dive resorts.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Micronesia', slug: 'micronesia-electric-plug-types-will-you-need-an-adapter-on-the-islands' },
    { name: 'Marshall Islands', slug: 'marshall-islands-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Philippines', slug: 'philippines-electric-plug-types-will-you-need-an-adapter-for-philippines' },
  ],
};

export default data;

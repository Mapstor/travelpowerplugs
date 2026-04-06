import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'kiribati-electric-plug-types-will-you-need-an-adapter-for-kiribati',
  name: 'Kiribati',
  demonym: 'I-Kiribati',
  continent: 'Oceania',
  region: 'Micronesia',
  voltage: 240,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    { id: 'type-i', name: 'Type I', subtitle: 'Australian', pins: 3, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 13.7, ratedAmps: 10, grounded: true, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.2, bodyHeight: 0.9, bodyCornerRadius: 0.15, noseRadius: 0.42, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  travelContext: 'Kiribati is one of the most remote countries on Earth, spread across 3.5 million square kilometres of Pacific Ocean. Tarawa, the capital atoll, has limited grid power. Outer atolls have very limited or no electricity, with solar being the primary source where power exists at all. Bring a battery pack, a solar charger if possible, and all necessary adapters — there is virtually nothing available to purchase once you leave Tarawa.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: true, converterNeeded: true, notes: 'US plugs will not fit. Kiribati runs at 240V, requiring a converter for non-dual-voltage devices.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: false, notes: 'British plugs are not used. Bring a Type I adapter.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: false, notes: 'European plugs will not fit. You need a Type I adapter.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: false, converterNeeded: false, notes: 'Australian and New Zealand plugs work directly in Kiribati.' },
  ],
  localPurchaseOptions: [
    { name: 'BTC shop', type: 'electronics', city: 'Tarawa', priceRange: '$5-10', note: 'Telecom shop on Tarawa — extremely limited selection' },
    { name: 'Small general stores', type: 'convenience', city: 'Tarawa', priceRange: '$3-8', note: 'A few general stores on South Tarawa may carry basic adapters' },
  ],
  airportName: 'Bonriki International Airport',
  airportCode: 'TRW',
  neighbors: [
    { name: 'Marshall Islands', slug: 'marshall-islands-electric-plug-types-will-you-need-an-adapter', plugTypes: ['A', 'B'], voltage: 120, sameAsSubject: 'different', adapterNote: 'Marshall Islands uses US-style plugs at 120V — completely different system' },
    { name: 'Nauru', slug: 'nauru-electric-plug-types-which-adapter-will-you-need-in-nauru', plugTypes: ['I'], voltage: 240, sameAsSubject: 'identical', adapterNote: 'Same Type I system' },
    { name: 'Tuvalu', slug: 'tuvalu-electric-plug-types-which-adapter-will-you-need-for-tuvalu', plugTypes: ['I'], voltage: 230, sameAsSubject: 'identical', adapterNote: 'Same plug type, very similar voltage' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote: 'Guesthouses on Tarawa have basic power but outages are common. Outer atolls may have solar-powered electricity for a few hours per day at best. Bring all power needs with you.',
  faqs: [
    { question: 'Do I need an adapter for Kiribati?', answer: 'If you are from Australia or New Zealand, no. All other travelers need a Type I adapter.' },
    { question: 'Is there electricity on Kiribati\'s outer atolls?', answer: 'Most outer atolls have very limited or no electricity. Where power exists, it is typically from small solar installations. Tarawa has limited grid power but outages are common.' },
    { question: 'Should I bring a solar charger to Kiribati?', answer: 'If you plan to visit outer atolls, a portable solar charger is highly recommended. There is abundant sunshine but very little infrastructure for charging devices.' },
  ],
  metaTitle: 'Kiribati Power Plugs — Will You Need an Adapter?',
  metaDescription: 'Kiribati uses Type I plugs at 240V/50Hz. Learn about power on one of the world\'s most remote nations, which adapter to bring, and how to stay charged on outer atolls.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Nauru', slug: 'nauru-electric-plug-types-which-adapter-will-you-need-in-nauru' },
    { name: 'Tuvalu', slug: 'tuvalu-electric-plug-types-which-adapter-will-you-need-for-tuvalu' },
    { name: 'Marshall Islands', slug: 'marshall-islands-electric-plug-types-will-you-need-an-adapter' },
  ],
};

export default data;

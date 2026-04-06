import type { CountryPlugData } from '@/types';

const tuvalu: CountryPlugData = {
  slug: 'tuvalu-electric-plug-types-which-adapter-will-you-need-for-tuvalu',
  name: 'Tuvalu',
  demonym: 'Tuvaluan',
  continent: 'Oceania',
  region: 'Polynesia',
  voltage: 230,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    { id: 'type-i', name: 'Type I', subtitle: 'Australian', pins: 3, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 13.7, ratedAmps: 10, grounded: true, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.2, bodyHeight: 0.9, bodyCornerRadius: 0.15, noseRadius: 0.42, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  travelContext: 'Tuvalu is one of the least-visited countries in the world, receiving fewer than 2,000 tourists per year. Funafuti, the capital atoll, has diesel generator power. Outer islands have very limited electricity, with some solar installations. There is virtually no retail for electronics — bring absolutely everything you need including adapters, battery packs, and cables.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: true, converterNeeded: true, notes: 'US plugs will not fit. Tuvalu runs at 230V, requiring a converter for non-dual-voltage devices.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: false, notes: 'British plugs are not used. You need a Type I adapter.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: false, notes: 'European plugs will not fit Tuvalu\'s Type I outlets.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: false, converterNeeded: false, notes: 'Australian and New Zealand plugs work directly in Tuvalu.' },
  ],
  localPurchaseOptions: [
    { name: 'Funafuti general stores', type: 'convenience', city: 'Funafuti', priceRange: '$3-10', note: 'A few small general stores exist but electronics are virtually unavailable — do not rely on local purchase' },
  ],
  airportName: 'Funafuti International Airport',
  airportCode: 'FUN',
  neighbors: [
    { name: 'Kiribati', slug: 'kiribati-electric-plug-types-will-you-need-an-adapter-for-kiribati', plugTypes: ['I'], voltage: 240, sameAsSubject: 'identical', adapterNote: 'Same Type I system' },
    { name: 'Fiji', slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva', plugTypes: ['I'], voltage: 240, sameAsSubject: 'identical', adapterNote: 'Same plug type' },
    { name: 'Samoa', slug: 'samoa-electric-plug-types-will-you-need-an-adapter-for-samoa', plugTypes: ['I'], voltage: 230, sameAsSubject: 'identical', adapterNote: 'Same plug type and voltage' },
  ],
  hotelAdapterAvailability: 'never',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote: 'Tuvalu has a small number of guesthouses on Funafuti. Power is diesel-generated and outages occur. Outer islands have extremely limited electricity. There are no hotel amenities like loaner adapters — come fully prepared.',
  faqs: [
    { question: 'Do I need an adapter for Tuvalu?', answer: 'Australian and New Zealand travelers do not need an adapter. All others need a Type I adapter — and you must buy it before traveling, as there is virtually no retail in Tuvalu.' },
    { question: 'How many tourists visit Tuvalu?', answer: 'Fewer than 2,000 per year, making it one of the least-visited countries in the world. Tourism infrastructure is extremely basic.' },
    { question: 'Is there electricity on Tuvalu\'s outer islands?', answer: 'Outer islands have very limited electricity, primarily from small solar installations. Funafuti has diesel generator power but outages are common.' },
  ],
  metaTitle: 'Tuvalu Power Plugs — Which Adapter Will You Need?',
  metaDescription: 'Tuvalu uses Type I plugs at 230V/50Hz. Learn about power on one of the world\'s least-visited nations, which adapter to bring, and why you must come prepared.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Kiribati', slug: 'kiribati-electric-plug-types-will-you-need-an-adapter-for-kiribati' },
    { name: 'Fiji', slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva' },
    { name: 'Nauru', slug: 'nauru-electric-plug-types-which-adapter-will-you-need-in-nauru' },
  ],
};

export default tuvalu;

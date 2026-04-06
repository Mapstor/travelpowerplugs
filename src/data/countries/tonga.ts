import type { CountryPlugData } from '@/types';

const tonga: CountryPlugData = {
  slug: 'tongo-electric-plug-types-which-adapter-will-you-need-for-tongo',
  name: 'Tonga',
  demonym: 'Tongan',
  continent: 'Oceania',
  region: 'Polynesia',
  voltage: 240,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    { id: 'type-i', name: 'Type I', subtitle: 'Australian', pins: 3, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 13.7, ratedAmps: 10, grounded: true, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.2, bodyHeight: 0.9, bodyCornerRadius: 0.15, noseRadius: 0.42, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  travelContext: 'Tonga uses the Australian-style Type I system at 240V. The main island of Tongatapu and the capital Nuku\'alofa have grid electricity. Outer islands such as the Ha\'apai and Vava\'u groups have more limited generator-based power, though tourist-oriented resorts generally maintain their own supply. Pack a battery pack for island-hopping days.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: true, converterNeeded: true, notes: 'US plugs will not fit. Tonga runs at 240V so a converter is needed for non-dual-voltage devices.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: false, notes: 'British plugs will not fit Type I sockets. Bring an adapter.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: false, notes: 'European plugs are not compatible with Tongan outlets. Bring a Type I adapter.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: false, converterNeeded: false, notes: 'Australian and New Zealand plugs fit Tongan sockets directly. No adapter needed.' },
  ],
  localPurchaseOptions: [
    { name: 'Tonga Communications Corporation shops', type: 'electronics', city: 'Nuku\'alofa', priceRange: '$5-12', note: 'Telecom store that may carry basic adapters' },
    { name: 'Molisi Tonga', type: 'electronics', city: 'Nuku\'alofa', priceRange: '$5-15', note: 'Electronics and general goods' },
    { name: 'Nuku\'alofa market area shops', type: 'convenience', city: 'Nuku\'alofa', priceRange: '$3-10', note: 'Small general stores near the market may stock adapters' },
  ],
  airportName: 'Fua\'amotu International Airport',
  airportCode: 'TBU',
  neighbors: [
    { name: 'Fiji', slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva', plugTypes: ['I'], voltage: 240, sameAsSubject: 'identical', adapterNote: 'Same Type I system' },
    { name: 'Samoa', slug: 'samoa-electric-plug-types-will-you-need-an-adapter-for-samoa', plugTypes: ['I'], voltage: 230, sameAsSubject: 'identical', adapterNote: 'Same plug type, voltage is very close' },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote: 'Hotels and resorts on Tongatapu generally have reliable power. On outer islands, accommodation often relies on generators with limited operating hours — resorts typically run theirs through the evening.',
  faqs: [
    { question: 'Do I need an adapter for Tonga?', answer: 'If you are from Australia or New Zealand, no — your Type I plugs will work. All other travelers need a Type I adapter.' },
    { question: 'Is there electricity on Tonga\'s outer islands?', answer: 'Outer islands in the Ha\'apai and Vava\'u groups rely on generators and some solar. Tourist resorts generally maintain their own power supply, but hours may be limited.' },
    { question: 'Can I buy an adapter in Tonga?', answer: 'There are a few shops in Nuku\'alofa that may stock adapters, but selection is limited. It is safer to buy one before you arrive.' },
  ],
  metaTitle: 'Tonga Power Plugs — Which Adapter Will You Need?',
  metaDescription: 'Tonga uses Type I plugs at 240V/50Hz, the same as Australia. Find out if you need an adapter and what to expect from power on Tonga\'s islands.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Fiji', slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva' },
    { name: 'Samoa', slug: 'samoa-electric-plug-types-will-you-need-an-adapter-for-samoa' },
    { name: 'Vanuatu', slug: 'vanuatu-electric-plug-types-which-adapter-do-you-need-for-vanuatu' },
  ],
};

export default tonga;

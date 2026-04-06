import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'solomon-islands-electric-plug-types-will-you-need-an-adapter-with-you',
  name: 'Solomon Islands',
  demonym: 'Solomon Islander',
  continent: 'Oceania',
  region: 'Melanesia',
  voltage: 230,
  frequency: 50,
  complexityTier: 'moderate',
  plugTypes: [
    { id: 'type-g', name: 'Type G', subtitle: 'British', pins: 3, pinShape: 'rectangular', pinDiameter: 6.35, pinSpacing: 22.2, ratedAmps: 13, grounded: true, hasGroundClips: false, pinRadius: 0.08, bodyWidth: 1.6, bodyHeight: 1.2, bodyCornerRadius: 0.2, noseRadius: 0.55, recessRadius: 1.15, faceplateSize: 3.1 },
    { id: 'type-i', name: 'Type I', subtitle: 'Australian', pins: 3, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 13.7, ratedAmps: 10, grounded: true, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.2, bodyHeight: 0.9, bodyCornerRadius: 0.15, noseRadius: 0.42, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  quirks: [
    'The Solomon Islands use both British Type G and Australian Type I sockets — a legacy of British colonial rule alongside strong Australian and New Zealand influence in the region.',
  ],
  travelContext: 'The Solomon Islands have a dual-socket system with both British Type G and Australian Type I outlets in use. Honiara has grid electricity that is reasonably reliable. Outer islands rely heavily on generators and solar power, and dive resorts in the Western Province generally maintain their own supply. Bring a battery pack for travel between islands.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: true, converterNeeded: true, notes: 'US plugs will not fit either socket type. Voltage is 230V so a converter is needed for non-dual-voltage devices.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: false, notes: 'Your Type G plug will fit some outlets, but Type I sockets are also common. Bring an adapter for both types.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: false, notes: 'European plugs are not used. You need an adapter for Type G or I sockets.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: true, converterNeeded: false, notes: 'Type I sockets are common, but you may also encounter Type G outlets. Bring a G adapter as backup.' },
  ],
  localPurchaseOptions: [
    { name: 'NPF Plaza shops', type: 'electronics', city: 'Honiara', priceRange: '$5-15', note: 'Small electronics shops in the main shopping complex' },
    { name: 'Hot Bread Kitchen area shops', type: 'convenience', city: 'Honiara', priceRange: '$3-10', note: 'General stores near this Honiara landmark may stock basic adapters' },
  ],
  airportName: 'Henderson International Airport',
  airportCode: 'HIR',
  neighbors: [
    { name: 'Papua New Guinea', slug: 'papua-new-guinea-electric-plug-types-which-adapter-will-you-need', plugTypes: ['I'], voltage: 240, sameAsSubject: 'partially', adapterNote: 'PNG uses Type I only, which is one of two types used in the Solomons' },
    { name: 'Vanuatu', slug: 'vanuatu-electric-plug-types-which-adapter-do-you-need-for-vanuatu', plugTypes: ['I'], voltage: 230, sameAsSubject: 'partially', adapterNote: 'Vanuatu uses only Type I' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote: 'Hotels in Honiara have power but you may encounter either Type G or I outlets. Dive resorts in the Western Province generally maintain reliable generator or solar power. Remote island guesthouses may have very limited electricity.',
  faqs: [
    { question: 'Why does the Solomon Islands have two plug types?', answer: 'The British Type G comes from the colonial era, while Australian Type I reflects the strong Australian presence and aid relationship in the Pacific region. Both remain in common use.' },
    { question: 'Is there electricity on outer islands?', answer: 'Outer islands rely on generators and solar. Dive resorts and tourist lodges generally have their own power supply, but guesthouses on non-tourist islands may have very limited electricity.' },
    { question: 'What adapter should I bring?', answer: 'A universal adapter is ideal since you may encounter both Type G (British) and Type I (Australian) sockets. At minimum, bring adapters for both types.' },
  ],
  metaTitle: 'Solomon Islands Power Plugs — Will You Need an Adapter?',
  metaDescription: 'Solomon Islands use plug types G and I at 230V/50Hz. Find out which adapter to bring, where to buy one in Honiara, and what to expect on outer islands.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Papua New Guinea', slug: 'papua-new-guinea-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Vanuatu', slug: 'vanuatu-electric-plug-types-which-adapter-do-you-need-for-vanuatu' },
    { name: 'Fiji', slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva' },
  ],
};

export default data;

import type { CountryPlugData } from '@/types';

const vanuatu: CountryPlugData = {
  slug: 'vanuatu-electric-plug-types-which-adapter-do-you-need-for-vanuatu',
  name: 'Vanuatu',
  demonym: 'Ni-Vanuatu',
  continent: 'Oceania',
  region: 'Melanesia',
  voltage: 230,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    { id: 'type-i', name: 'Type I', subtitle: 'Australian', pins: 3, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 13.7, ratedAmps: 10, grounded: true, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.2, bodyHeight: 0.9, bodyCornerRadius: 0.15, noseRadius: 0.42, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  travelContext: 'Vanuatu uses the Australian-style Type I system. Port Vila and Luganville have grid electricity that is generally reliable. Remote islands and eco-resorts may run on solar or diesel generators with limited operating hours — often just evenings. Many eco-lodges and dive resorts have charging stations where you can top up devices during generator hours.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: true, converterNeeded: true, notes: 'US plugs will not fit. Vanuatu runs at 230V so a converter is needed for non-dual-voltage devices.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: false, notes: 'British plugs are not compatible. Bring a Type I adapter.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: false, notes: 'European plugs will not fit Vanuatu\'s Type I sockets. An adapter is required.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: false, converterNeeded: false, notes: 'Australian and New Zealand plugs work directly. No adapter needed.' },
  ],
  localPurchaseOptions: [
    { name: 'Au Bon Marché', type: 'supermarket', city: 'Port Vila', priceRange: '$5-15', note: 'Vanuatu\'s main supermarket chain, may stock adapters' },
    { name: 'Vila Town market electronics', type: 'electronics', city: 'Port Vila', priceRange: '$3-10', note: 'Small electronics stalls near the central market' },
  ],
  airportName: 'Bauerfield International Airport',
  airportCode: 'VLI',
  neighbors: [
    { name: 'New Zealand', slug: 'new-zealand-electric-plug-types-which-adapter-should-you-get', plugTypes: ['I'], voltage: 230, sameAsSubject: 'identical', adapterNote: 'Same Type I system' },
    { name: 'Fiji', slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva', plugTypes: ['I'], voltage: 240, sameAsSubject: 'identical', adapterNote: 'Same plug type' },
    { name: 'Solomon Islands', slug: 'solomon-islands-electric-plug-types-will-you-need-an-adapter-with-you', plugTypes: ['G', 'I'], voltage: 230, sameAsSubject: 'partially', adapterNote: 'Solomon Islands uses Type I plus British Type G' },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote: 'Resorts and hotels in Port Vila have reliable power. Eco-lodges on outer islands typically run generators during evening hours and may have communal charging stations. Ask your accommodation about power schedules before booking.',
  faqs: [
    { question: 'Do I need an adapter for Vanuatu?', answer: 'If you are traveling from Australia or New Zealand, no. Everyone else needs a Type I adapter.' },
    { question: 'Will there be power on remote islands?', answer: 'Many eco-resorts and remote lodges run on generators or solar with limited hours, typically in the evenings. Bring a battery pack for daytime charging.' },
    { question: 'Can I buy an adapter in Port Vila?', answer: 'Au Bon Marché supermarket and small electronics shops near the market may have basic adapters, but selection is limited. Buy before you arrive for reliability.' },
  ],
  metaTitle: 'Vanuatu Power Plugs — Which Adapter Do You Need?',
  metaDescription: 'Vanuatu uses Type I plugs at 230V/50Hz. Find out if you need an adapter, where to buy one in Port Vila, and what to expect on remote islands.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Fiji', slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva' },
    { name: 'Solomon Islands', slug: 'solomon-islands-electric-plug-types-will-you-need-an-adapter-with-you' },
    { name: 'New Zealand', slug: 'new-zealand-electric-plug-types-which-adapter-should-you-get' },
  ],
};

export default vanuatu;

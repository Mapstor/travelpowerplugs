import type { CountryPlugData } from '@/types';

const micronesia: CountryPlugData = {
  slug: 'micronesia-electric-plug-types-will-you-need-an-adapter-on-the-islands',
  name: 'Micronesia',
  demonym: 'Micronesian',
  continent: 'Oceania',
  region: 'Micronesia',
  voltage: 120,
  frequency: 60,
  complexityTier: 'simple',
  plugTypes: [
    { id: 'type-a', name: 'Type A', subtitle: 'US ungrounded', pins: 2, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 12.7, ratedAmps: 15, grounded: false, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.0, bodyHeight: 0.7, bodyCornerRadius: 0.15, noseRadius: 0.35, recessRadius: 0.85, faceplateSize: 2.5 },
    { id: 'type-b', name: 'Type B', subtitle: 'US grounded', pins: 3, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 12.7, ratedAmps: 15, grounded: true, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.2, bodyHeight: 0.9, bodyCornerRadius: 0.15, noseRadius: 0.4, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  travelContext: 'The Federated States of Micronesia (FSM) is a former US territory with a Compact of Free Association, using the same electrical system as the United States. Pohnpei and Chuuk have basic grid power, while Yap and Kosrae have more limited infrastructure. Outer islands in any state may have no electricity at all. The country is spread across a vast ocean area, so bring all supplies with you.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: false, converterNeeded: false, notes: 'Same electrical system as the United States. No adapter or converter needed.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: true, notes: 'British plugs will not fit. The 120V supply also requires a converter for non-dual-voltage devices.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: true, notes: 'European plugs are not compatible, and the 120V voltage requires a converter for non-dual-voltage devices.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: true, converterNeeded: true, notes: 'Australian plugs will not fit, and a converter is needed for the 120V supply.' },
  ],
  localPurchaseOptions: [
    { name: 'FSM Telecom shops', type: 'electronics', city: 'Pohnpei', priceRange: '$5-12', note: 'Telecom store that may carry basic electronics' },
    { name: 'Ambros Inc', type: 'electronics', city: 'Pohnpei', priceRange: '$3-10', note: 'General goods store' },
    { name: 'Palm Terrace', type: 'convenience', city: 'Pohnpei', priceRange: '$5-15', note: 'Small shopping area in Kolonia' },
  ],
  airportName: 'Pohnpei International Airport',
  airportCode: 'PNI',
  neighbors: [
    { name: 'Palau', slug: 'palau-electric-plug-types-will-you-need-an-adapter-for-palau', plugTypes: ['A', 'B'], voltage: 120, sameAsSubject: 'identical', adapterNote: 'Same US-style system' },
    { name: 'Marshall Islands', slug: 'marshall-islands-electric-plug-types-will-you-need-an-adapter', plugTypes: ['A', 'B'], voltage: 120, sameAsSubject: 'identical', adapterNote: 'Same US-style system' },
    { name: 'Papua New Guinea', slug: 'papua-new-guinea-electric-plug-types-which-adapter-will-you-need', plugTypes: ['I'], voltage: 240, sameAsSubject: 'different', adapterNote: 'PNG uses the Australian Type I system at 240V — completely different' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote: 'Hotels on Pohnpei and Chuuk have US-style outlets with basic grid power. Yap and Kosrae have more limited options. Outer islands may have no electricity whatsoever.',
  faqs: [
    { question: 'Do I need an adapter for Micronesia?', answer: 'US and Canadian travelers do not need an adapter — the system is identical to the US. Travelers from Europe, the UK, and Australia need both an adapter and a voltage converter for non-dual-voltage devices.' },
    { question: 'Is there power on all the FSM islands?', answer: 'The four state capitals (Pohnpei, Chuuk, Yap, Kosrae) have basic grid electricity. Outer islands in each state may have no electricity at all.' },
    { question: 'Why does Micronesia use US plugs?', answer: 'The FSM was a US-administered Trust Territory after World War II and maintains a Compact of Free Association with the United States. The entire electrical infrastructure follows the US standard.' },
  ],
  metaTitle: 'Micronesia Power Plugs — Will You Need an Adapter?',
  metaDescription: 'Micronesia (FSM) uses US-style Types A and B plugs at 120V/60Hz. Find out if you need an adapter and what to expect from power across the islands.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Palau', slug: 'palau-electric-plug-types-will-you-need-an-adapter-for-palau' },
    { name: 'Marshall Islands', slug: 'marshall-islands-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Papua New Guinea', slug: 'papua-new-guinea-electric-plug-types-which-adapter-will-you-need' },
  ],
};

export default micronesia;

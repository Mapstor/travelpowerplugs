import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'marshall-islands-electric-plug-types-will-you-need-an-adapter',
  name: 'Marshall Islands',
  demonym: 'Marshallese',
  continent: 'Oceania',
  region: 'Micronesia',
  voltage: 120,
  frequency: 60,
  complexityTier: 'simple',
  plugTypes: [
    { id: 'type-a', name: 'Type A', subtitle: 'US ungrounded', pins: 2, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 12.7, ratedAmps: 15, grounded: false, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.0, bodyHeight: 0.7, bodyCornerRadius: 0.15, noseRadius: 0.35, recessRadius: 0.85, faceplateSize: 2.5 },
    { id: 'type-b', name: 'Type B', subtitle: 'US grounded', pins: 3, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 12.7, ratedAmps: 15, grounded: true, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.2, bodyHeight: 0.9, bodyCornerRadius: 0.15, noseRadius: 0.4, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  travelContext: 'The Marshall Islands are a former US territory with a Compact of Free Association, so the electrical system is identical to the United States — Types A and B at 120V/60Hz. Majuro has grid power, though it can be inconsistent. Outer atolls have very limited generator or solar power. The Marshall Islands are remote and supplies are limited, so bring everything you need.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: false, converterNeeded: false, notes: 'The Marshall Islands use the same electrical system as the United States. No adapter or converter needed.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: true, notes: 'British plugs will not fit. You also need a converter since the Marshall Islands run at 120V.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: true, notes: 'European plugs will not fit, and the 120V supply means you need a converter for non-dual-voltage devices.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: true, converterNeeded: true, notes: 'Australian plugs will not fit. Voltage is 120V, so a converter is required for non-dual-voltage devices.' },
  ],
  localPurchaseOptions: [
    { name: 'Payless Supermarket', type: 'supermarket', city: 'Majuro', priceRange: '$3-10', note: 'Main supermarket on Majuro, may carry basic adapters' },
    { name: 'RRE Electronics', type: 'electronics', city: 'Majuro', priceRange: '$5-15', note: 'Small electronics retailer' },
  ],
  airportName: 'Marshall Islands International Airport',
  airportCode: 'MAJ',
  neighbors: [
    { name: 'Kiribati', slug: 'kiribati-electric-plug-types-will-you-need-an-adapter-for-kiribati', plugTypes: ['I'], voltage: 240, sameAsSubject: 'different', adapterNote: 'Kiribati uses the Australian Type I system at 240V — completely different' },
    { name: 'Micronesia', slug: 'micronesia-electric-plug-types-will-you-need-an-adapter-on-the-islands', plugTypes: ['A', 'B'], voltage: 120, sameAsSubject: 'identical', adapterNote: 'Same US-style system' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote: 'Hotels and guesthouses on Majuro have US-style outlets with reasonably consistent power. Outer atolls have very limited generator or solar electricity — bring a battery pack if island-hopping.',
  faqs: [
    { question: 'Do I need an adapter for the Marshall Islands?', answer: 'If you are from the US, Canada, or other countries using Type A/B plugs, no adapter is needed. Travelers from Europe, the UK, Australia, and most of Asia will need an adapter and likely a voltage converter.' },
    { question: 'Why does the Marshall Islands use US plugs?', answer: 'The Marshall Islands were administered by the US after World War II and maintain a Compact of Free Association with the United States. The entire electrical infrastructure follows the US standard.' },
    { question: 'Is there electricity on outer atolls?', answer: 'Outer atolls have very limited power, typically from small generators or solar installations. Bring a battery pack and consider a solar charger for extended stays outside Majuro.' },
  ],
  metaTitle: 'Marshall Islands Power Plugs — Will You Need an Adapter?',
  metaDescription: 'Marshall Islands use US-style Types A and B plugs at 120V/60Hz. Find out if you need an adapter and what to expect from power on Majuro and outer atolls.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Micronesia', slug: 'micronesia-electric-plug-types-will-you-need-an-adapter-on-the-islands' },
    { name: 'Palau', slug: 'palau-electric-plug-types-will-you-need-an-adapter-for-palau' },
    { name: 'Kiribati', slug: 'kiribati-electric-plug-types-will-you-need-an-adapter-for-kiribati' },
  ],
};

export default data;

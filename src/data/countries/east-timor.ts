import type { CountryPlugData } from '@/types';

const east_timor: CountryPlugData = {
  slug: 'east-timor-electric-plug-types-do-you-need-an-adapter',
  name: 'East Timor',
  demonym: 'Timorese',
  continent: 'Asia',
  region: 'Southeast Asia',
  voltage: 220,
  frequency: 50,
  complexityTier: 'complex',
  plugTypes: [
    { id: 'type-c', name: 'Type C', subtitle: 'Europlug', pins: 2, pinShape: 'round', pinDiameter: 4.0, pinSpacing: 19, ratedAmps: 2.5, grounded: false, hasGroundClips: false, pinRadius: 0.063, bodyWidth: 1.18, bodyHeight: 0.72, bodyCornerRadius: 0.2, noseRadius: 0.42, recessRadius: 0.92, faceplateSize: 2.7 },
    { id: 'type-e', name: 'Type E', subtitle: 'French', pins: 2, pinShape: 'round', pinDiameter: 4.8, pinSpacing: 19, ratedAmps: 16, grounded: true, hasGroundClips: false, pinRadius: 0.075, bodyWidth: 1.3, bodyHeight: 1.3, bodyCornerRadius: 0.25, noseRadius: 0.52, recessRadius: 1.05, faceplateSize: 2.9 },
    { id: 'type-f', name: 'Type F', subtitle: 'Schuko', pins: 2, pinShape: 'round', pinDiameter: 4.8, pinSpacing: 19, ratedAmps: 16, grounded: true, hasGroundClips: true, pinRadius: 0.075, bodyWidth: 1.3, bodyHeight: 1.3, bodyCornerRadius: 0.25, noseRadius: 0.52, recessRadius: 1.05, faceplateSize: 2.9 },
    { id: 'type-i', name: 'Type I', subtitle: 'Australian', pins: 3, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 13.7, ratedAmps: 10, grounded: true, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.2, bodyHeight: 0.9, bodyCornerRadius: 0.15, noseRadius: 0.42, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  quirks: [
    'East Timor\'s electrical landscape reflects its layered colonial history — Portuguese (C/E/F), Indonesian, and Australian (Type I) influences all left their mark, so you may encounter several different socket types even within a single building.',
  ],
  travelContext: 'East Timor (Timor-Leste) has a complex electrical heritage. Portuguese colonial rule introduced European-style outlets, while the Australian-led UN administration brought Type I sockets. In Dili, hotels and guesthouses generally have functioning power, though you should expect a mix of socket types. Outside the capital, electricity becomes very unreliable, and many communities depend on generators with limited operating hours.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: true, converterNeeded: true, notes: 'No US-style outlets in East Timor. You will also need a converter for non-dual-voltage devices since the country uses 220V.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: false, notes: 'British Type G plugs are not used here. Bring an adapter for European (C/E/F) or Australian (I) sockets.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: false, notes: 'European plugs will fit many outlets, but you may encounter Type I sockets. A universal adapter provides full coverage.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: true, converterNeeded: false, notes: 'Type I sockets exist from the UN administration period, but European-style outlets are also common. Bring an adapter for C/E/F sockets.' },
  ],
  localPurchaseOptions: [
    { name: 'Timor Plaza', type: 'electronics', city: 'Dili', priceRange: '$3-10', note: 'The main shopping center in Dili has a few shops that may carry basic adapters' },
  ],
  airportName: 'Presidente Nicolau Lobato International Airport',
  airportCode: 'DIL',
  neighbors: [
    { name: 'Indonesia', slug: 'indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'partially', adapterNote: 'Indonesia shares Types C and F but does not use Type I or E' },
    { name: 'Australia', slug: 'australia-electric-plug-types-do-you-need-adapter', plugTypes: ['I'], voltage: 230, sameAsSubject: 'partially', adapterNote: 'Australia uses only Type I, which is one of several types found in East Timor' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote: 'Hotels in Dili typically have functioning power with a mix of European and Australian sockets. Outside the capital, guesthouses may rely on generators and availability of outlets is unpredictable.',
  faqs: [
    { question: 'Why does East Timor have so many plug types?', answer: 'The country was administered by Portugal (introducing European C/E/F types), then occupied by Indonesia, and later governed by a UN mission with heavy Australian involvement (introducing Type I). All these legacies coexist in the electrical infrastructure.' },
    { question: 'Is the power reliable in East Timor?', answer: 'In Dili, power is reasonably consistent at hotels and guesthouses. Outside the capital, electricity is very unreliable and many areas depend on generators with limited hours.' },
    { question: 'What adapter should I bring to East Timor?', answer: 'A universal adapter is the best choice since you may encounter Types C, E, F, and I. No single-type adapter will cover all situations.' },
  ],
  metaTitle: 'East Timor Power Plugs — Which Adapter Do You Need?',
  metaDescription: 'East Timor uses plug types C, E, F, and I at 220V/50Hz. Learn which adapter to bring, where to buy one in Dili, and what to expect from the power grid.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Indonesia', slug: 'indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia' },
    { name: 'Australia', slug: 'australia-electric-plug-types-do-you-need-adapter' },
    { name: 'Papua New Guinea', slug: 'papua-new-guinea-electric-plug-types-which-adapter-will-you-need' },
  ],
};

export default east_timor;

import type { CountryPlugData } from '@/types';

const yemen: CountryPlugData = {
  slug: 'yemen-electric-plug-types-do-you-need-an-adapter-for-yemen',
  name: 'Yemen',
  demonym: 'Yemeni',
  continent: 'Asia',
  region: 'Middle East',
  voltage: 230,
  frequency: 50,
  complexityTier: 'complex',
  plugTypes: [
    { id: 'type-a', name: 'Type A', subtitle: 'US ungrounded', pins: 2, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 12.7, ratedAmps: 15, grounded: false, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.0, bodyHeight: 0.7, bodyCornerRadius: 0.15, noseRadius: 0.35, recessRadius: 0.85, faceplateSize: 2.5 },
    { id: 'type-d', name: 'Type D', subtitle: 'Old British (India)', pins: 3, pinShape: 'round', pinDiameter: 5.08, pinSpacing: 19.1, ratedAmps: 5, grounded: true, hasGroundClips: false, pinRadius: 0.08, bodyWidth: 1.3, bodyHeight: 1.0, bodyCornerRadius: 0.2, noseRadius: 0.48, recessRadius: 1.0, faceplateSize: 2.8 },
    { id: 'type-g', name: 'Type G', subtitle: 'British', pins: 3, pinShape: 'rectangular', pinDiameter: 6.35, pinSpacing: 22.2, ratedAmps: 13, grounded: true, hasGroundClips: false, pinRadius: 0.08, bodyWidth: 1.6, bodyHeight: 1.2, bodyCornerRadius: 0.2, noseRadius: 0.55, recessRadius: 1.15, faceplateSize: 3.1 },
  ],
  quirks: [
    'Yemen uses an unusual combination of US (Type A), British Indian (Type D), and British (Type G) outlets — a legacy of varied historical influences. Power infrastructure has been severely damaged by the ongoing conflict.',
  ],
  travelContext: 'Yemen is currently experiencing an ongoing conflict and most governments advise against all travel. Commercial air travel is extremely limited. Power infrastructure has been severely damaged, and generator power is the primary electricity source in most areas. If you do travel, bring all adapters, battery packs, and backup power sources with you.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: true, converterNeeded: true, notes: 'Type A sockets exist but are not guaranteed. The 230V supply means a converter is essential for non-dual-voltage US devices.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: false, notes: 'Type G outlets exist in Yemen but are not universal. Bring an adapter for Type A and D sockets as well.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: false, notes: 'European plugs are not standard in Yemen. You will need an adapter for A, D, or G outlets.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: true, converterNeeded: false, notes: 'Australian plugs are not used in Yemen. Bring a universal adapter.' },
  ],
  localPurchaseOptions: [
    { name: 'Local shops', type: 'electronics', city: 'Aden', priceRange: '$2-5', note: 'Extremely limited availability due to the conflict — do not rely on local purchase' },
  ],
  airportName: 'Aden International Airport',
  airportCode: 'ADE',
  neighbors: [
    { name: 'Saudi Arabia', slug: 'saudi-arabia-electric-plug-types-which-adapter-will-you-need', plugTypes: ['A', 'B', 'G'], voltage: 220, sameAsSubject: 'partially', adapterNote: 'Saudi Arabia shares Types A and G with Yemen' },
    { name: 'Oman', slug: 'oman-electric-plug-types-which-adapter-will-you-need', plugTypes: ['C', 'G'], voltage: 240, sameAsSubject: 'partially', adapterNote: 'Oman shares Type G but uses different additional types' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote: 'Where hotels are operational, generator power with frequent outages is the norm. Bring your own adapter and backup battery — do not expect any hotel amenities.',
  faqs: [
    { question: 'What plug types does Yemen use?', answer: 'Yemen uses Types A, D, and G — a mix of US-style, old British Indian, and modern British outlets. A universal adapter is essential.' },
    { question: 'Is it safe to travel to Yemen?', answer: 'Most governments advise against all travel to Yemen due to the ongoing conflict. Commercial travel is extremely limited and power infrastructure has been severely damaged.' },
    { question: 'Can I buy an adapter in Yemen?', answer: 'Do not count on it. Retail availability is extremely limited due to the conflict. Buy all necessary adapters before departure.' },
  ],
  metaTitle: 'Yemen Power Plugs — Do You Need an Adapter for Yemen?',
  metaDescription: 'Yemen uses plug types A, D, and G at 230V/50Hz. Learn about the plug situation, power reliability, and what to prepare before traveling to Yemen.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Saudi Arabia', slug: 'saudi-arabia-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Oman', slug: 'oman-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Djibouti', slug: 'djibouti-electric-plug-types-do-you-need-to-take-an-adapter' },
  ],
};

export default yemen;

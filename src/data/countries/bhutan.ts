import type { CountryPlugData } from '@/types';

const bhutan: CountryPlugData = {
  slug: 'bhutan-electric-plug-types-do-you-need-an-adapter-in-bhutan',
  name: 'Bhutan',
  demonym: 'Bhutanese',
  continent: 'Asia',
  region: 'South Asia',
  voltage: 230,
  frequency: 50,
  complexityTier: 'complex',
  plugTypes: [
    { id: 'type-c', name: 'Type C', subtitle: 'Europlug', pins: 2, pinShape: 'round', pinDiameter: 4.0, pinSpacing: 19, ratedAmps: 2.5, grounded: false, hasGroundClips: false, pinRadius: 0.063, bodyWidth: 1.18, bodyHeight: 0.72, bodyCornerRadius: 0.2, noseRadius: 0.42, recessRadius: 0.92, faceplateSize: 2.7 },
    { id: 'type-d', name: 'Type D', subtitle: 'Old British (India)', pins: 3, pinShape: 'round', pinDiameter: 5.08, pinSpacing: 19.1, ratedAmps: 5, grounded: true, hasGroundClips: false, pinRadius: 0.08, bodyWidth: 1.3, bodyHeight: 1.0, bodyCornerRadius: 0.2, noseRadius: 0.48, recessRadius: 1.0, faceplateSize: 2.8 },
    { id: 'type-f', name: 'Type F', subtitle: 'Schuko', pins: 2, pinShape: 'round', pinDiameter: 4.8, pinSpacing: 19, ratedAmps: 16, grounded: true, hasGroundClips: true, pinRadius: 0.075, bodyWidth: 1.3, bodyHeight: 1.3, bodyCornerRadius: 0.25, noseRadius: 0.52, recessRadius: 1.05, faceplateSize: 2.9 },
    { id: 'type-g', name: 'Type G', subtitle: 'British', pins: 3, pinShape: 'rectangular', pinDiameter: 6.35, pinSpacing: 22.2, ratedAmps: 13, grounded: true, hasGroundClips: false, pinRadius: 0.08, bodyWidth: 1.6, bodyHeight: 1.2, bodyCornerRadius: 0.2, noseRadius: 0.55, recessRadius: 1.15, faceplateSize: 3.1 },
  ],
  quirks: [
    'Bhutan uses a mix of Indian-influenced plug types (C, D, F, G), so carrying a universal adapter is strongly recommended.',
  ],
  travelContext: 'Bhutan operates a daily tariff system for tourists that includes accommodation, meals, and a guide, meaning most visitors stay in pre-approved hotels with reliable power in Paro and Thimphu. The country generates most of its electricity from hydroelectric plants and exports surplus to India. Remote monastery guesthouses and farmhouse stays may have limited outlets, so a portable battery pack is useful for treks outside the main towns.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: true, converterNeeded: true, notes: 'US plugs will not fit any Bhutanese socket. You also need a voltage converter for non-dual-voltage devices, as Bhutan runs at 230V.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: false, notes: 'Type G sockets exist in Bhutan but are not universal. Bring an adapter for C, D, and F sockets as well.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: false, notes: 'Your Type C plug will fit some outlets, but you may encounter Type D or G sockets. An adapter covering all types is recommended.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: true, converterNeeded: false, notes: 'Australian plugs are not used in Bhutan. Bring an adapter. Voltage is compatible at 230V.' },
  ],
  localPurchaseOptions: [
    { name: 'Electronics shops on Norzin Lam', type: 'electronics', city: 'Thimphu', priceRange: '$3-8', note: 'A few small shops may stock basic adapters, but selection is very limited' },
  ],
  airportName: 'Paro International Airport',
  airportCode: 'PBH',
  neighbors: [
    { name: 'India', slug: 'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india', plugTypes: ['C', 'D', 'M'], voltage: 230, sameAsSubject: 'partially', adapterNote: 'India shares Types C and D with Bhutan but also uses Type M' },
    { name: 'China', slug: '3-electric-plug-types-in-china-will-you-need-an-adapter', plugTypes: ['A', 'C', 'I'], voltage: 220, sameAsSubject: 'partially', adapterNote: 'China uses a different plug mix — adapters needed when crossing the border' },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote: 'Hotels in Paro and Thimphu included in the tourist tariff are generally well-maintained with reliable power and multiple outlet types. Farmhouse stays and remote guesthouses may have just one or two outlets per room.',
  faqs: [
    { question: 'Do I need an adapter for Bhutan?', answer: 'Yes. Bhutan uses Types C, D, F, and G, so unless you happen to carry one of those plug types, you will need an adapter. A universal adapter is the safest choice given the mix of sockets.' },
    { question: 'Can I buy an adapter in Bhutan?', answer: 'Technically yes — there are a few electronics shops on Norzin Lam in Thimphu — but selection is extremely limited. Purchase your adapter before arrival.' },
    { question: 'Is the power supply reliable in Bhutan?', answer: 'In Paro and Thimphu, electricity is generally reliable thanks to the country\'s hydroelectric infrastructure. Remote areas and farmhouse stays may experience outages or have limited outlets.' },
  ],
  metaTitle: 'Bhutan Power Plugs — Do You Need an Adapter in Bhutan?',
  metaDescription: 'Bhutan uses plug types C, D, F, and G at 230V/50Hz. Find out which adapter you need, where to buy one, and what to expect from power in Paro and Thimphu.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'India', slug: 'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india' },
    { name: 'Nepal', slug: 'nepal-electric-plug-types-will-you-need-an-adapter-in-nepal' },
    { name: 'Bangladesh', slug: 'bangladesh-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default bhutan;

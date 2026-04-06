import { CountryPlugData } from '../types';

const panama: CountryPlugData = {
  slug: 'panama-electric-plug-types-will-you-need-an-adapter-for-panama',
  name: 'Panama',
  demonym: 'Panamanian',
  continent: 'North America',
  region: 'Central America',
  voltage: 120,
  frequency: 60,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-a',
      name: 'Type A',
      subtitle: 'US ungrounded',
      pins: 2,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: false,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.0,
      bodyHeight: 0.7,
      bodyCornerRadius: 0.15,
      noseRadius: 0.35,
      recessRadius: 0.85,
      faceplateSize: 2.5,
    },
    {
      id: 'type-b',
      name: 'Type B',
      subtitle: 'US grounded',
      pins: 3,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.2,
      bodyHeight: 0.9,
      bodyCornerRadius: 0.15,
      noseRadius: 0.4,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  travelContext:
    'Panama City is a modern, cosmopolitan hub with excellent infrastructure, while Bocas del Toro and the San Blas Islands offer tropical island experiences. The Canal Zone, Boquete highlands, and Darién Gap provide diverse travel settings. Power is reliable in urban areas and most tourist destinations.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Panama uses the same Type A/B plugs at 120V/60Hz as the US and Canada. No adapter or converter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type A/B adapter. UK electronics are dual-voltage and will handle 120V without issues.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European round-pin plugs don\'t fit. You\'ll need an adapter, and you should verify your devices support 120V since Panama runs on half the voltage of most European countries.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Australian plugs won\'t fit. You need an adapter and should check voltage compatibility (230V devices on 120V).',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Panafoto',
      type: 'electronics',
      city: 'Panama City',
      priceRange: '$5–$15 USD',
      note: 'Panama\'s main electronics retailer with multiple locations in the capital.',
    },
    {
      name: 'Do It Center',
      type: 'electronics',
      priceRange: '$3–$12 USD',
      note: 'Hardware and home improvement store with plug adapters and power strips.',
    },
    {
      name: 'Riba Smith',
      type: 'supermarket',
      priceRange: '$4–$12 USD',
      note: 'Upscale supermarket chain in Panama City; some locations carry travel adapters.',
    },
  ],
  airportName: 'Panama City Tocumen International Airport',
  airportCode: 'PTY',
  neighbors: [
    {
      name: 'Costa Rica',
      slug: 'costa-rica-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Identical electrical system. No adapter needed.',
    },
    {
      name: 'Colombia',
      slug: 'colombia-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 110,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plug types, very similar voltage (120V vs 110V). Fully compatible.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Panama City\'s hotels — from boutique spots in Casco Viejo to high-rises in the banking district — have modern US-style outlets. Beach resorts in Bocas del Toro and the Pearl Islands have reliable power. Remote San Blas island cabins may have limited or no electricity.',
  faqs: [
    {
      question: 'Do I need an adapter for Panama from the US?',
      answer:
        'No. Panama uses the same Type A/B plugs and 120V/60Hz electricity as the United States and Canada. Everything will work as it does at home.',
    },
    {
      question: 'What about power on the San Blas Islands?',
      answer:
        'The San Blas (Guna Yala) Islands are largely off-grid. Many cabins have no electricity at all, while some have solar panels or generators with limited hours. Bring a fully charged portable battery and minimize electronic expectations.',
    },
    {
      question: 'Can I use European electronics in Panama?',
      answer:
        'You\'ll need a plug adapter to convert round pins to flat pins. More importantly, check that your device supports 120V — Panama runs on half the voltage common in Europe. Phone chargers and laptops are usually fine; hair dryers and straighteners designed for 220V only will not work correctly.',
    },
    {
      question: 'Is the power reliable in Panama City?',
      answer:
        'Yes. Panama City has modern, reliable infrastructure. Brief outages during heavy tropical storms are possible but rare in tourist areas. Major hotels have backup generators.',
    },
  ],
  metaTitle:
    'Panama Plug Types & Adapter Guide — Type A/B, 120V, Same as the US',
  metaDescription:
    'Panama uses Type A and B plugs at 120V/60Hz — identical to the US. Find out if you need an adapter, what to expect in Bocas del Toro and San Blas, and where to buy locally.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Costa Rica', slug: 'costa-rica-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Colombia', slug: 'colombia-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Ecuador', slug: 'ecuador-electric-plug-type-will-you-need-an-adapter' },
    { name: 'Guatemala', slug: 'guatemala-electric-plug-types-will-you-need-an-adapter-in-guatemala-city' },
  ],
};

export default panama;

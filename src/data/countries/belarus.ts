import type { CountryPlugData } from '@/types';

const belarus: CountryPlugData = {
  slug: 'belarus-electric-plug-types-will-you-need-an-adapter',
  name: 'Belarus',
  demonym: 'Belarusian',
  continent: 'Europe',
  region: 'Eastern Europe',
  voltage: 220,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-c',
      name: 'Type C',
      subtitle: 'Europlug',
      pins: 2,
      pinShape: 'round',
      pinDiameter: 4.0,
      pinSpacing: 19,
      ratedAmps: 2.5,
      grounded: false,
      hasGroundClips: false,
      pinRadius: 0.063,
      bodyWidth: 1.18,
      bodyHeight: 0.72,
      bodyCornerRadius: 0.2,
      noseRadius: 0.42,
      recessRadius: 0.92,
      faceplateSize: 2.7,
    },
    {
      id: 'type-f',
      name: 'Type F',
      subtitle: 'Schuko',
      pins: 2,
      pinShape: 'round',
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: true,
      pinRadius: 0.075,
      bodyWidth: 1.3,
      bodyHeight: 1.3,
      bodyCornerRadius: 0.25,
      noseRadius: 0.52,
      recessRadius: 1.05,
      faceplateSize: 2.9,
    },
  ],
  travelContext:
    'Belarus shares the same electrical system as Russia. Minsk has modern hotels and reliable power throughout the city center. Outside the capital, infrastructure is generally well-maintained but simpler.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-pin plugs won\'t fit Belarusian round-pin sockets. The 220V supply also means non-dual-voltage US devices need a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK plugs require a Type G to C/F adapter. Voltage difference (220V vs 230V) is negligible.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European plugs fit directly. No adapter or converter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter. Voltage is compatible with Australian devices.',
    },
  ],
  localPurchaseOptions: [
    { name: '5 Element', type: 'electronics', city: 'Minsk', priceRange: 'BYN 10–25', note: 'Electronics retailer with travel adapter section' },
    { name: 'Electrosila', type: 'electronics', city: 'Minsk', priceRange: 'BYN 8–20', note: 'Appliance and electronics store' },
    { name: 'Korona Mall', type: 'electronics', city: 'Minsk', priceRange: 'BYN 10–30', note: 'Shopping mall with electronics shops inside' },
  ],
  airportName: 'Minsk National Airport',
  airportCode: 'MSQ',
  neighbors: [
    { name: 'Russia', slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia', plugTypes: ['C', 'F'], voltage: 220, sameAsSubject: 'identical' },
    { name: 'Ukraine', slug: 'ukraine-electric-plug-types-what-kind-of-adapter-do-you-need', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'compatible' },
    { name: 'Poland', slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland', plugTypes: ['C', 'E'], voltage: 230, sameAsSubject: 'compatible', adapterNote: 'Poland uses Type E instead of F — Type C plugs work in both' },
    { name: 'Lithuania', slug: 'lithuania-electric-plug-types-will-you-need-an-adapter-in-vilnius-2', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'compatible' },
    { name: 'Latvia', slug: 'latvia-electric-plug-type-will-you-need-an-adapter-in-riga', plugTypes: ['C', 'F'], voltage: 230, sameAsSubject: 'compatible' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in central Minsk generally offer standard European outlets and some have USB ports at the desk. Outside Minsk, accommodations tend to be basic with limited outlets — a small power strip can be handy.',
  faqs: [
    {
      question: 'Do I need an adapter traveling from Russia to Belarus?',
      answer:
        'No. Belarus and Russia use the same plug types (C and F) at the same voltage (220V). Your Russian chargers and devices will work without any changes.',
    },
    {
      question: 'Can I buy a travel adapter at Minsk airport?',
      answer:
        'Minsk National Airport has a small duty-free area but adapter selection is limited. It\'s better to buy one at a 5 Element or Electrosila store in the city, or bring one from home.',
    },
    {
      question: 'Is the power supply reliable in Belarus?',
      answer:
        'Yes. Belarus has a stable power grid. Outages are uncommon in Minsk and other major cities. Rural areas occasionally experience brief interruptions but nothing that should affect most travelers.',
    },
  ],
  metaTitle: 'Belarus Power Plugs — Types C & F | Do You Need an Adapter?',
  metaDescription:
    'Belarus uses Type C and F plugs at 220V/50Hz. European travelers are fine without an adapter. US, UK, and Australian visitors need one. Find local stores and practical tips.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Russia', slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia' },
    { name: 'Ukraine', slug: 'ukraine-electric-plug-types-what-kind-of-adapter-do-you-need' },
    { name: 'Poland', slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland' },
  ],
};

export default belarus;

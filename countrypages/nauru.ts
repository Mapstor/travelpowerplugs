import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'nauru-electric-plug-types-which-adapter-will-you-need-in-nauru',
  name: 'Nauru',
  demonym: 'Nauruan',
  continent: 'Oceania',
  region: 'Micronesia',
  voltage: 240,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    { id: 'type-i', name: 'Type I', subtitle: 'Australian', pins: 3, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 13.7, ratedAmps: 10, grounded: true, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.2, bodyHeight: 0.9, bodyCornerRadius: 0.15, noseRadius: 0.42, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  travelContext: 'Nauru is one of the smallest countries in the world at just 21 square kilometres. The entire island has a single power grid fuelled by diesel generators and some solar installations. Power outages do occur. Tourism infrastructure is minimal — there are a handful of basic hotels and guesthouses. Bring all necessary adapters and a battery pack, as local retail is extremely limited.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: true, converterNeeded: true, notes: 'US plugs will not fit. Nauru runs at 240V so a converter is needed for non-dual-voltage devices.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: false, notes: 'British plugs are not used. Bring a Type I adapter.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: false, notes: 'European plugs will not fit. A Type I adapter is required.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: false, converterNeeded: false, notes: 'Australian and New Zealand plugs work directly in Nauru.' },
  ],
  localPurchaseOptions: [
    { name: 'Capelle & Partner', type: 'supermarket', city: 'Yaren', priceRange: '$5-12', note: 'Nauru\'s main general store — may carry basic electronics but selection is extremely limited' },
    { name: 'Eigigu general store', type: 'convenience', city: 'Aiwo', priceRange: '$3-10', note: 'Small general store with unpredictable stock' },
  ],
  airportName: 'Nauru International Airport',
  airportCode: 'INU',
  neighbors: [
    { name: 'Kiribati', slug: 'kiribati-electric-plug-types-will-you-need-an-adapter-for-kiribati', plugTypes: ['I'], voltage: 240, sameAsSubject: 'identical', adapterNote: 'Same Type I system' },
    { name: 'Solomon Islands', slug: 'solomon-islands-electric-plug-types-will-you-need-an-adapter-with-you', plugTypes: ['G', 'I'], voltage: 230, sameAsSubject: 'partially', adapterNote: 'Solomon Islands uses Type I plus British Type G' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote: 'Nauru has a handful of basic hotels and guesthouses. Power is available but outages occur. Do not expect hotel amenities like loaner adapters or USB ports — bring everything you need.',
  faqs: [
    { question: 'Do I need an adapter for Nauru?', answer: 'Travelers from Australia and New Zealand do not need an adapter. Everyone else needs a Type I adapter.' },
    { question: 'Is the power reliable on Nauru?', answer: 'The island has a single grid powered mainly by diesel generators with some solar. Outages do occur, so a battery pack is a good idea.' },
    { question: 'Can I buy an adapter on Nauru?', answer: 'Capelle & Partner is the main store, but stock is unpredictable. Buy your adapter before traveling — Nauru has extremely limited retail.' },
  ],
  metaTitle: 'Nauru Power Plugs — Which Adapter Will You Need?',
  metaDescription: 'Nauru uses Type I plugs at 240V/50Hz. Learn about power on the world\'s smallest island nation, which adapter to bring, and how to prepare.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Kiribati', slug: 'kiribati-electric-plug-types-will-you-need-an-adapter-for-kiribati' },
    { name: 'Solomon Islands', slug: 'solomon-islands-electric-plug-types-will-you-need-an-adapter-with-you' },
    { name: 'Tuvalu', slug: 'tuvalu-electric-plug-types-which-adapter-will-you-need-for-tuvalu' },
  ],
};

export default data;

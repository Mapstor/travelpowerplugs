import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'north-korea-electric-plug-types-will-you-need-an-adapter-yup',
  name: 'North Korea',
  demonym: 'North Korean',
  continent: 'Asia',
  region: 'East Asia',
  voltage: 220,
  frequency: 50,
  frequencyNote: 'North Korea uses 50Hz, unlike South Korea which uses 60Hz — though this rarely affects modern devices.',
  complexityTier: 'simple',
  plugTypes: [
    { id: 'type-c', name: 'Type C', subtitle: 'Europlug', pins: 2, pinShape: 'round', pinDiameter: 4.0, pinSpacing: 19, ratedAmps: 2.5, grounded: false, hasGroundClips: false, pinRadius: 0.063, bodyWidth: 1.18, bodyHeight: 0.72, bodyCornerRadius: 0.2, noseRadius: 0.42, recessRadius: 0.92, faceplateSize: 2.7 },
    { id: 'type-f', name: 'Type F', subtitle: 'Schuko', pins: 2, pinShape: 'round', pinDiameter: 4.8, pinSpacing: 19, ratedAmps: 16, grounded: true, hasGroundClips: true, pinRadius: 0.075, bodyWidth: 1.3, bodyHeight: 1.3, bodyCornerRadius: 0.25, noseRadius: 0.52, recessRadius: 1.05, faceplateSize: 2.9 },
  ],
  quirks: [
    'Tourism is only possible via organized group tours. Your guide will handle most logistics, but bring your own adapter and a battery pack — charging opportunities on tour bus days may be limited.',
  ],
  travelContext: 'North Korea is only accessible to foreign tourists through government-approved group tours, typically arranged via specialist operators in Beijing. Hotels in Pyongyang such as the Yanggakdo and Koryo have power but outages do occur. Independent shopping is not possible, so bring all electronics and adapters with you. A portable battery pack is essential for days spent on tour buses with no access to outlets.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: true, converterNeeded: true, notes: 'US plugs will not fit. Voltage is 220V so a converter is needed for non-dual-voltage devices.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: false, notes: 'Type G plugs are not used. Bring a C/F adapter. Voltage is compatible.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: false, converterNeeded: false, notes: 'Standard European plugs (C and F) will fit North Korean sockets directly.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: true, converterNeeded: false, notes: 'Australian plugs will not fit. Bring an adapter for Type C/F outlets.' },
  ],
  localPurchaseOptions: [
    { name: 'Tour operator', type: 'hotel', note: 'No independent shopping is possible. Your tour operator may provide adapters if requested in advance.' },
  ],
  airportName: 'Pyongyang Sunan International Airport',
  airportCode: 'FNJ',
  neighbors: [
    { name: 'South Korea', slug: 'south-korea-electric-plug-types-will-you-need-an-adapter-in-seoul', plugTypes: ['C', 'F'], voltage: 220, sameAsSubject: 'compatible', adapterNote: 'Same plug shapes but South Korea uses 60Hz vs North Korea\'s 50Hz — not an issue for modern electronics' },
    { name: 'China', slug: '3-electric-plug-types-in-china-will-you-need-an-adapter', plugTypes: ['A', 'C', 'I'], voltage: 220, sameAsSubject: 'partially', adapterNote: 'China uses a different mix including Types A and I' },
    { name: 'Russia', slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia', plugTypes: ['C', 'F'], voltage: 220, sameAsSubject: 'identical', adapterNote: 'Russia uses the same C/F system at 220V/50Hz' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote: 'Hotels in Pyongyang are assigned by tour operators. The Yanggakdo and Koryo hotels have European-style C/F outlets but power outages occur. Rooms outside Pyongyang may have very limited electrical access.',
  faqs: [
    { question: 'Can I buy an adapter in North Korea?', answer: 'No. Independent shopping is not possible. Bring all adapters, chargers, and battery packs with you. Your tour operator may be able to provide one if requested well in advance.' },
    { question: 'Is the voltage in North Korea the same as South Korea?', answer: 'The voltage (220V) and plug types (C, F) are the same, but North Korea uses 50Hz while South Korea uses 60Hz. This difference does not affect modern dual-voltage electronics like phone chargers and laptops.' },
    { question: 'Should I bring a battery pack to North Korea?', answer: 'Absolutely. Tour schedules involve long days on buses with no access to power outlets. A portable battery pack ensures you can keep your camera and phone charged throughout the day.' },
  ],
  metaTitle: 'North Korea Power Plugs — Will You Need an Adapter? Yup.',
  metaDescription: 'North Korea uses plug types C and F at 220V/50Hz. Find out which adapter to bring, how power works in Pyongyang hotels, and what to pack for a group tour.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'South Korea', slug: 'south-korea-electric-plug-types-will-you-need-an-adapter-in-seoul' },
    { name: 'China', slug: '3-electric-plug-types-in-china-will-you-need-an-adapter' },
    { name: 'Russia', slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia' },
  ],
};

export default data;

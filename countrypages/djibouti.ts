import { CountryPlugData } from '../types';

const djibouti: CountryPlugData = {
  slug: 'djibouti-electric-plug-types-do-you-need-to-take-an-adapter',
  name: 'Djibouti',
  demonym: 'Djiboutian',
  continent: 'Africa',
  region: 'East Africa',
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
      id: 'type-e',
      name: 'Type E',
      subtitle: 'French',
      pins: 2,
      pinShape: 'round',
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
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
    'Djibouti follows the French electrical standard with Type C and E outlets at 220V, a legacy of French colonial rule. The country is a small but strategically important hub in the Horn of Africa hosting several foreign military bases. Power in Djibouti City is reasonably reliable for the region, though outages do occur.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-pin plugs will not fit. A converter is also needed for non-dual-voltage devices at 220V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and E/F plugs fit directly. This is the French standard. No conversion needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs need an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Local shops in Djibouti City',
      type: 'electronics',
      city: 'Djibouti City',
      note: 'Very limited selection. Buy adapters before traveling to Djibouti.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Djibouti City',
      note: 'International hotels near the military bases may have adapters for guests.',
    },
  ],
  airportName: 'Djibouti-Ambouli International Airport',
  airportCode: 'JIB',
  neighbors: [
    {
      name: 'Ethiopia',
      slug: 'ethiopia-electric-plug-types-will-you-need-an-adapter-in-addis-abeba',
      plugTypes: ['C', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote: 'Ethiopia uses the same core types (C/E) — your adapter will work in both countries.',
    },
    {
      name: 'Eritrea',
      slug: 'eritrea-electric-plug-types-will-you-need-an-adapter-in-eritrea',
      plugTypes: ['C', 'L'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Eritrea shares Type C but uses Italian Type L instead of French Type E.',
    },
    {
      name: 'Somalia',
      slug: 'somalia-electric-plug-types-which-adapter-will-you-need-in-somalia',
      plugTypes: ['C', 'L'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Somalia shares Type C but uses Italian Type L instead of French Type E.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'International hotels in Djibouti City, particularly those serving military and diplomatic personnel, are relatively well-equipped with reliable generator backup. Budget accommodations have more basic electrical setups. USB charging ports are available at newer hotels.',
  faqs: [
    {
      question: 'Does Djibouti use the same plugs as France?',
      answer:
        'Yes. As a former French territory, Djibouti uses the French electrical standard — Type C and Type E outlets at 220V/50Hz. If your devices work in France, they will work in Djibouti.',
    },
    {
      question: 'How reliable is electricity in Djibouti?',
      answer:
        'Power in Djibouti City is more reliable than in neighboring countries, though outages still occur. International hotels typically have generator backup. Outside the capital, power availability drops significantly.',
    },
    {
      question: 'Will my adapter from Ethiopia work in Djibouti?',
      answer:
        'Likely yes. Both countries use Type C and E outlets at similar voltages. An adapter that works in Ethiopia should work fine in Djibouti as well.',
    },
  ],
  metaTitle: 'Djibouti Power Plugs — Types C & E | Adapter Guide',
  metaDescription:
    'Djibouti uses French-style Type C and E plugs at 220V/50Hz. Find out if you need an adapter and what to expect from power supply in Djibouti.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Ethiopia', slug: 'ethiopia-electric-plug-types-will-you-need-an-adapter-in-addis-abeba' },
    { name: 'Eritrea', slug: 'eritrea-electric-plug-types-will-you-need-an-adapter-in-eritrea' },
    { name: 'Somalia', slug: 'somalia-electric-plug-types-which-adapter-will-you-need-in-somalia' },
  ],
};

export default djibouti;

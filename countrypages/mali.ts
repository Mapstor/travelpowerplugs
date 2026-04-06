import { CountryPlugData } from '../types';

const mali: CountryPlugData = {
  slug: 'mali-electric-plug-types-which-adapter-will-you-need-in-mali',
  name: 'Mali',
  demonym: 'Malian',
  continent: 'Africa',
  region: 'West Africa',
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
    'Mali uses the French electrical standard inherited from colonial rule. Bamako has reasonably consistent power, though outages are not unusual. The further north you travel, the less reliable electricity becomes. Northern regions including Timbuktu have very limited grid coverage.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs do not fit Malian outlets. A converter is needed for non-dual-voltage devices at 220V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs require an adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European plugs fit directly. Mali uses the same French-style C/E system found across francophone West Africa.',
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
      name: 'Orange boutiques',
      type: 'electronics',
      city: 'Bamako',
      priceRange: '$3–$10',
      note: 'Mobile phone shops that sometimes carry basic adapters and charging accessories.',
    },
    {
      name: 'Local electronics markets',
      type: 'electronics',
      city: 'Bamako',
      priceRange: '$2–$8',
      note: 'Market stalls near the center of Bamako sell basic electrical accessories.',
    },
  ],
  airportName: 'Bamako-Sénou International Airport',
  airportCode: 'BKO',
  neighbors: [
    {
      name: 'Senegal',
      slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar',
      plugTypes: ['C', 'D', 'E', 'K'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Senegal shares C/E types. Your European adapter works in both countries.',
    },
    {
      name: 'Mauritania',
      slug: 'mauritania-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C'],
      voltage: 220,
      sameAsSubject: 'compatible',
    },
    {
      name: 'Algeria',
      slug: 'algeria-electrical-plug-type',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
    },
    {
      name: 'Niger',
      slug: 'niger-electric-plug-types-will-you-need-an-adapter-for-niger',
      plugTypes: ['C', 'D', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'compatible',
    },
    {
      name: 'Burkina Faso',
      slug: 'burkina-faso-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
    {
      name: 'Ivory Coast',
      slug: 'cote-divoire-electric-plug-type-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
    {
      name: 'Guinea',
      slug: 'guinea-electric-plug-types-will-you-need-an-adapter-in-conakry',
      plugTypes: ['C', 'F', 'K'],
      voltage: 220,
      sameAsSubject: 'compatible',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Bamako range from basic to comfortable, with the better ones offering generator backup during outages. Outside Bamako, accommodation is simple and may have limited or no electricity. Bring your own charging accessories.',
  faqs: [
    {
      question: 'Will my adapter from France work in Mali?',
      answer:
        'Yes. Mali uses the same Type C and E outlets as France. If you have a French plug or any standard European charger, it will fit directly without an adapter.',
    },
    {
      question: 'How reliable is electricity outside Bamako?',
      answer:
        'Power availability decreases significantly outside the capital. Northern Mali has very limited grid coverage. If traveling beyond Bamako, a portable battery pack is strongly recommended.',
    },
    {
      question: 'Is the same adapter good for all of West Africa?',
      answer:
        'Most francophone West African countries use the French C/E standard. A single European-style adapter will work across Mali, Senegal, Burkina Faso, Ivory Coast, Benin, Togo, and others. The main exception is anglophone countries like Ghana and Nigeria, which use British Type G.',
    },
  ],
  metaTitle: 'Mali Power Plugs — Types C & E | Adapter Guide for Bamako',
  metaDescription:
    'Mali uses French-style Type C and E plugs at 220V/50Hz. Learn whether you need an adapter and what to expect from power supply across Mali.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Senegal', slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar' },
    { name: 'Burkina Faso', slug: 'burkina-faso-electric-plug-type-will-you-need-an-adapter' },
    { name: 'Niger', slug: 'niger-electric-plug-types-will-you-need-an-adapter-for-niger' },
  ],
};

export default mali;

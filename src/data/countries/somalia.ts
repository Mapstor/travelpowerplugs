import { CountryPlugData } from '@/types';

const somalia: CountryPlugData = {
  slug: 'somalia-electric-plug-types-which-adapter-will-you-need-in-somalia',
  name: 'Somalia',
  demonym: 'Somali',
  continent: 'Africa',
  region: 'East Africa',
  voltage: 220,
  frequency: 50,
  complexityTier: 'moderate',
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
      id: 'type-l',
      name: 'Type L',
      subtitle: 'Italian',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 4.0,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.063,
      bodyWidth: 1.2,
      bodyHeight: 0.8,
      bodyCornerRadius: 0.2,
      noseRadius: 0.45,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'Italian colonial legacy means Type L outlets appear alongside Type C. Power infrastructure is extremely limited — most buildings in Mogadishu use private generators, and outside the capital, generator or solar power is the norm.',
  ],
  travelContext:
    'Somalia has virtually no functioning national power grid. In Mogadishu, private generator companies sell electricity to neighborhoods through informal micro-grids, while rural areas depend on solar panels and small generators. The Italian colonial period left behind Type L outlets, but Type C is also widespread. Reliable power is not something to count on anywhere in the country.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs do not fit Somali outlets. You will also need a converter for non-dual-voltage devices since Somalia uses 220V. Power availability is a bigger concern than plug type.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs need an adapter. Voltage is compatible at 220V.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C plugs fit directly. No conversion needed.',
    },
    {
      origin: 'Italy',
      originPlugTypes: 'C, L',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Italian plugs fit perfectly — Somalia uses the same Type C and L outlets due to shared colonial history.',
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
      name: 'Bakara Market electronics stalls',
      type: 'electronics',
      city: 'Mogadishu',
      priceRange: '$1–$5',
      note: 'Basic adapters may be found among the electronics vendors, but selection is very limited and unreliable.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Mogadishu',
      note: 'International-standard hotels in Mogadishu may have adapters available on request.',
    },
  ],
  airportName: 'Mogadishu Aden Abdulle International Airport',
  airportCode: 'MGQ',
  neighbors: [
    {
      name: 'Ethiopia',
      slug: 'ethiopia-electric-plug-types-will-you-need-an-adapter-in-addis-abeba',
      plugTypes: ['C', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Ethiopia shares Type C but uses E/F instead of Type L.',
    },
    {
      name: 'Kenya',
      slug: 'kenya-electric-plug-types-will-you-need-an-adapter-traveling-to-kenya',
      plugTypes: ['G'],
      voltage: 240,
      sameAsSubject: 'different',
      adapterNote: 'Kenya uses British Type G only — completely different from Somali outlets.',
    },
    {
      name: 'Djibouti',
      slug: 'djibouti-electric-plug-types-do-you-need-to-take-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Djibouti shares Type C but uses French Type E instead of Italian Type L.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Mogadishu that cater to international visitors typically run their own generators and may have USB charging available. Outside Mogadishu, accommodation is extremely basic with little to no reliable electricity. A portable battery pack and solar charger are essential.',
  faqs: [
    {
      question: 'Why does Somalia use Italian-style plugs?',
      answer:
        'Italian Somaliland was under Italian colonial rule from the late 1800s until 1960. The electrical infrastructure installed during that period used Italian Type L outlets, which remain in use alongside European Type C.',
    },
    {
      question: 'Is there a functioning power grid in Somalia?',
      answer:
        'Somalia has no national power grid. In Mogadishu, private companies operate small generator-based networks that sell electricity to neighborhoods. Outside the capital, most buildings rely on individual generators or solar panels.',
    },
    {
      question: 'What power backup should I bring to Somalia?',
      answer:
        'A high-capacity portable battery pack is essential. A small foldable solar charger is also highly recommended, especially if traveling outside Mogadishu. Many travelers also bring a car charger adapter for charging during vehicle travel.',
    },
  ],
  metaTitle: 'Somalia Power Plugs — Types C & L | Adapter & Power Guide',
  metaDescription:
    'Somalia uses Type C and L plugs at 220V/50Hz. Power infrastructure is extremely limited — learn what adapters and portable power to bring.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Ethiopia', slug: 'ethiopia-electric-plug-types-will-you-need-an-adapter-in-addis-abeba' },
    { name: 'Djibouti', slug: 'djibouti-electric-plug-types-do-you-need-to-take-an-adapter' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
  ],
};

export default somalia;

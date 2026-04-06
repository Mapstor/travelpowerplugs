import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'pakistan-electric-plug-types-will-you-need-an-adapter',
  name: 'Pakistan',
  demonym: 'Pakistani',
  continent: 'Asia',
  region: 'South Asia',
  voltage: 230,
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
      id: 'type-d',
      name: 'Type D',
      subtitle: 'Old British (India)',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 5.08,
      pinSpacing: 19.1,
      ratedAmps: 5,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.3,
      bodyHeight: 1.0,
      bodyCornerRadius: 0.2,
      noseRadius: 0.48,
      recessRadius: 1.0,
      faceplateSize: 2.8,
    },
  ],
  quirks: [
    'Same plug system as India — Type C and Type D dominate. Load shedding is common outside major urban centres, and many households and hotels use UPS (uninterruptible power supply) systems as backup.',
    'Voltage can fluctuate — a surge protector is recommended for laptops and camera gear.',
  ],
  travelContext:
    'Pakistan\'s plug situation is straightforward — the same as India — but the power supply is less stable. Load shedding (scheduled power cuts) is part of daily life outside the major cities of Islamabad, Lahore, and Karachi. Hotels catering to international guests typically have UPS backup or generators, but bring a battery pack if you are heading to the northern areas (Hunza, Skardu, Gilgit).',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs do not fit Pakistani round-pin outlets. You need an adapter. Pakistan uses 230V — check your devices.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit Pakistani outlets. Bring an adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs fit Pakistani outlets directly. Voltage and frequency are compatible. No adapter needed.',
    },
    {
      origin: 'Australia / NZ',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs do not fit. Bring an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Hafeez Center',
      type: 'electronics',
      city: 'Lahore',
      priceRange: 'PKR 200–PKR 1,000',
      note: 'Lahore\'s famous electronics market. Hundreds of shops with every adapter imaginable.',
    },
    {
      name: 'Saddar electronics market',
      type: 'electronics',
      city: 'Karachi',
      priceRange: 'PKR 200–PKR 800',
      note: 'Karachi\'s central electronics bazaar. Bargaining expected.',
    },
    {
      name: 'Haier flagship stores',
      type: 'electronics',
      priceRange: 'PKR 300–PKR 1,200',
      note: 'Modern electronics stores in major cities with branded adapters.',
    },
    {
      name: 'Islamabad / Lahore / Karachi Airport shops',
      type: 'airport',
      priceRange: 'PKR 500–PKR 2,000',
      note: 'Airport electronics kiosks carry travel adapters at premium prices.',
    },
  ],
  airportName: 'Islamabad International / Allama Iqbal International / Jinnah International',
  airportCode: 'ISB / LHE / KHI',
  neighbors: [
    {
      name: 'India',
      slug: 'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india',
      plugTypes: ['C', 'D', 'M'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'India uses the same plug types. Your adapter works in both countries.',
    },
    {
      name: 'Afghanistan',
      slug: 'afghanistan-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Afghanistan shares Type C. A universal adapter is wise for both countries.',
    },
    {
      name: 'Iran',
      slug: 'iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Iran shares Type C with Pakistan.',
    },
    {
      name: 'China',
      slug: '3-electric-plug-types-in-china-will-you-need-an-adapter',
      plugTypes: ['A', 'C', 'I'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'China shares Type C but also uses types not found in Pakistan.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'International hotels in Islamabad, Lahore, and Karachi generally have reliable power with UPS backup and may provide adapters at reception. Guesthouses in the northern areas (Hunza Valley, Skardu) typically have basic outlets and may experience frequent power cuts. Many use solar panels or small generators as backup.',
  faqs: [
    {
      question: 'Do I need an adapter for Pakistan?',
      answer:
        'European travelers with Type C plugs do not need one — round-pin Europlugs fit directly. US, UK, and Australian travelers all need an adapter. The plug system is the same as India.',
    },
    {
      question: 'How bad is load shedding in Pakistan?',
      answer:
        'It varies by city and season. Islamabad and parts of Lahore have relatively stable power. Smaller cities and rural areas can experience several hours of scheduled power cuts per day, especially during summer heat waves when demand spikes. Hotels in tourist areas usually have generators or UPS.',
    },
    {
      question: 'Should I bring a surge protector?',
      answer:
        'Yes, especially if you are carrying a laptop, camera gear, or other expensive electronics. Voltage fluctuations are common, and a compact surge protector adds meaningful protection.',
    },
    {
      question: 'What about charging devices in northern Pakistan?',
      answer:
        'Hunza, Skardu, and the Karakoram Highway corridor have electricity in towns, but it can be unreliable. Guesthouses usually have outlets but power cuts are frequent. Bring a large battery pack for trekking and remote areas.',
    },
  ],
  metaTitle: 'Pakistan Power Plugs: Types C & D — Do You Need an Adapter?',
  metaDescription:
    'Pakistan uses Type C and D plugs at 230V/50Hz — same as India. Find out if you need an adapter, how to handle load shedding, and what to pack for the northern areas.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'India', slug: 'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india' },
    { name: 'Nepal', slug: 'nepal-electric-plug-types-will-you-need-an-adapter-in-nepal' },
    { name: 'Bangladesh', slug: 'bangladesh-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Iran', slug: 'iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran' },
  ],
};

export default data;

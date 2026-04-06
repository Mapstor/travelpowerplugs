import type { CountryPlugData } from '@/types';

const uganda: CountryPlugData = {
  slug: 'uganda-electric-plug-types-which-adapter-do-you-need-in-uganda',
  name: 'Uganda',
  demonym: 'Ugandan',
  continent: 'Africa',
  region: 'East Africa',
  voltage: 240,
  frequency: 50,
  complexityTier: 'moderate',
  plugTypes: [
    {
      id: 'type-g',
      name: 'Type G',
      subtitle: 'British',
      pins: 3,
      pinShape: 'rectangular',
      pinDiameter: 6.35,
      pinSpacing: 22.2,
      ratedAmps: 13,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.6,
      bodyHeight: 1.2,
      bodyCornerRadius: 0.2,
      noseRadius: 0.55,
      recessRadius: 1.15,
      faceplateSize: 3.1,
    },
  ],
  quirks: [
    'Uganda uses the British Type G plug exclusively. Gorilla trekking lodges in Bwindi Impenetrable Forest vary widely — luxury lodges have full mains power, while basic camps may run on solar panels or generators with limited charging windows.',
    'Kampala has generally reliable city power, but scheduled and unscheduled outages do occur, especially during dry seasons when hydroelectric output drops.',
  ],
  travelContext:
    'Uganda draws visitors for mountain gorilla trekking in Bwindi, chimpanzee tracking in Kibale, and safaris in Queen Elizabeth and Murchison Falls national parks. Kampala is a bustling capital with modern amenities. Outside the capital, power infrastructure thins quickly, and many lodges rely on generators or solar systems.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs are completely incompatible with British Type G sockets. An adapter is essential. Most US devices handle 240V, but verify the label on older appliances.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Uganda uses the same Type G outlets as the UK. Your plugs will fit directly, and the voltage is nearly identical at 240V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European two-round-pin plugs do not fit British Type G sockets. You need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian flat-angled plugs are incompatible with Type G outlets. Bring an adapter. Voltage is very close at 240V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Tiger Electronics',
      type: 'electronics',
      city: 'Kampala',
      priceRange: '10,000–30,000 UGX',
      note: 'Local electronics retailer in Kampala with a selection of adapters and power strips.',
    },
    {
      name: 'Game (Shoprite Group)',
      type: 'electronics',
      city: 'Kampala',
      priceRange: '15,000–40,000 UGX',
      note: 'South African department store chain at Acacia Mall. Stocks travel adapters in the electronics section.',
    },
    {
      name: 'Shoprite',
      type: 'supermarket',
      city: 'Kampala',
      priceRange: '10,000–25,000 UGX',
      note: 'Supermarket with basic electronics accessories including adapters.',
    },
    {
      name: 'Quality Supermarkets',
      type: 'supermarket',
      city: 'Kampala',
      priceRange: '8,000–20,000 UGX',
      note: 'Ugandan supermarket chain. May carry basic adapters near checkout or electronics aisles.',
    },
  ],
  airportName: 'Entebbe International Airport',
  airportCode: 'EBB',
  neighbors: [
    {
      name: 'Kenya',
      slug: 'kenya-electric-plug-types-will-you-need-an-adapter-traveling-to-kenya',
      plugTypes: ['G'],
      voltage: 240,
      sameAsSubject: 'identical',
      adapterNote:
        'Kenya uses the same Type G plug and 240V. Your adapter and devices work identically in both countries.',
    },
    {
      name: 'Rwanda',
      slug: 'rwanda-electric-plug-types-will-you-need-to-bring-an-adapter-with-you',
      plugTypes: ['C', 'J'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote:
        'Rwanda uses European Type C and Swiss Type J — completely different from Uganda\'s Type G. You will need a different adapter if crossing the border.',
    },
    {
      name: 'Congo',
      slug: 'congo-electric-plug-type-do-you-need-an-adapter',
      plugTypes: ['C', 'D', 'E'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote:
        'Congo uses different plug types. A universal adapter is recommended if traveling between the two countries.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Upscale safari lodges and international hotels in Kampala often have adapters available for guests. Mid-range lodges in national park areas are less consistent. For gorilla trekking in Bwindi, luxury camps like Sanctuary Gorilla Forest Camp have reliable power, while budget bandas may only offer a few hours of generator-powered electricity each evening.',
  faqs: [
    {
      question: 'What plug type does Uganda use?',
      answer:
        'Uganda uses the British Type G plug with three rectangular pins. This is the same socket used in the UK, Kenya, and several other former British colonies in East Africa.',
    },
    {
      question: 'Will there be power for charging at gorilla trekking lodges?',
      answer:
        'It depends on the lodge tier. High-end lodges in Bwindi and Mgahinga have full mains power or robust generator/solar systems. Basic community-run guesthouses and budget camps may only offer electricity during certain hours. A portable battery pack is highly recommended for trekking trips.',
    },
    {
      question: 'Is the voltage in Uganda safe for my electronics?',
      answer:
        'Uganda runs at 240V/50Hz, which is higher than US voltage but standard for British-system countries. All modern laptop chargers, phone chargers, and camera batteries are dual-voltage (100–240V). Older US appliances like hair dryers or curling irons may not be — check the label.',
    },
    {
      question: 'Can I use the same adapter in Uganda and Kenya?',
      answer:
        'Yes. Both countries use British Type G sockets at 240V. A single adapter covers both destinations, making an East Africa trip straightforward from an electrical standpoint.',
    },
    {
      question: 'Should I bring a power bank to Uganda?',
      answer:
        'A portable power bank is strongly recommended, particularly if your itinerary includes national parks, gorilla trekking, or rural areas. Even in Kampala, occasional power outages mean a backup charging source is valuable.',
    },
  ],
  metaTitle:
    'Uganda Power Plugs & Adapters: Type G – What You Need for Your Trip',
  metaDescription:
    'Uganda uses British Type G plugs at 240V/50Hz. Find out if you need an adapter, what to expect at gorilla trekking lodges, and where to buy adapters in Kampala.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Kenya',
      slug: 'kenya-electric-plug-types-will-you-need-an-adapter-traveling-to-kenya',
    },
    {
      name: 'Rwanda',
      slug: 'rwanda-electric-plug-types-will-you-need-to-bring-an-adapter-with-you',
    },
    {
      name: 'United Kingdom',
      slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk',
    },
  ],
};

export default uganda;

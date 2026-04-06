import { CountryPlugData } from '@/types';

const eritrea: CountryPlugData = {
  slug: 'eritrea-electric-plug-types-will-you-need-an-adapter-in-eritrea',
  name: 'Eritrea',
  demonym: 'Eritrean',
  continent: 'Africa',
  region: 'East Africa',
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
    'Italian colonial heritage means Type L sockets are widespread alongside Type C. Asmara has intermittent power supply, and outside the capital, electricity is very unreliable with frequent multi-hour outages.',
  ],
  travelContext:
    'Eritrea\'s well-preserved Italian colonial architecture in Asmara extends to its electrical infrastructure — Type L outlets from the Italian period remain common. The power grid is limited and subject to frequent outages, even in the capital. Outside Asmara, electricity coverage drops sharply. Travelers should bring everything they need, as retail options are extremely limited.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs will not fit Eritrean outlets. A voltage converter is needed for non-dual-voltage devices at 230V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type G plugs require an adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C plugs fit directly into Eritrean outlets. No conversion needed.',
    },
    {
      origin: 'Italy',
      originPlugTypes: 'C, L',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Italian plugs are a perfect match for Eritrean outlets — both Type C and L work directly.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs need an adapter. Voltage is compatible at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Local shops in Asmara',
      type: 'electronics',
      city: 'Asmara',
      note: 'Very limited retail options. Electronics shops may carry basic adapters but stock is unreliable. Bring everything you need from home.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Asmara',
      note: 'A few hotels in Asmara may have adapters to lend, but do not rely on this.',
    },
  ],
  airportName: 'Asmara International Airport',
  airportCode: 'ASM',
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
      name: 'Sudan',
      slug: 'sudan-electric-plug-types-which-adapter-will-you-need-in-sudan',
      plugTypes: ['C', 'D'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Sudan shares Type C but uses Type D instead of Type L.',
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
    'Hotels in Asmara range from basic to modest colonial-era guesthouses. Power outages are common even at the better hotels. Generator backup exists at some establishments but is not guaranteed. USB ports in rooms are uncommon. Bring a portable battery pack and a flashlight.',
  faqs: [
    {
      question: 'Why does Eritrea use Italian-style outlets?',
      answer:
        'Eritrea was an Italian colony from 1890 to 1941. Asmara in particular retains extensive Italian colonial infrastructure, including the electrical system. Type L outlets from this period remain in widespread use.',
    },
    {
      question: 'Can I buy electronics or adapters in Asmara?',
      answer:
        'Retail options are extremely limited in Eritrea due to import restrictions and economic isolation. You should bring all adapters, cables, and portable power from home. Do not count on finding specific electronics in Asmara.',
    },
    {
      question: 'How often do power outages occur in Eritrea?',
      answer:
        'Power outages happen regularly in Asmara and are even more frequent outside the capital. Scheduled load-shedding and unplanned outages are both common. A portable battery pack is strongly recommended.',
    },
  ],
  metaTitle: 'Eritrea Power Plugs — Types C & L | Adapter & Power Guide',
  metaDescription:
    'Eritrea uses Type C and L plugs at 230V/50Hz. Italian colonial heritage shapes the outlet types — learn what adapter to bring and how to handle frequent outages.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Ethiopia', slug: 'ethiopia-electric-plug-types-will-you-need-an-adapter-in-addis-abeba' },
    { name: 'Djibouti', slug: 'djibouti-electric-plug-types-do-you-need-to-take-an-adapter' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
  ],
};

export default eritrea;

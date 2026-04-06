import type { CountryPlugData } from '@/types';

const nicaragua: CountryPlugData = {
  slug: 'nicaragua-electric-plug-types-will-you-need-an-adapter-in-nicaragua',
  name: 'Nicaragua',
  demonym: 'Nicaraguan',
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
    'Nicaragua is Central America\'s largest country, drawing travelers to colonial Granada, the island of Ometepe, and the surf towns along the Pacific coast. The electrical system is identical to the US. Power is generally reliable in Managua and tourist areas, though rural regions and smaller islands may have occasional outages.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Same system as the US — your plugs fit and the voltage matches. No adapter or converter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'UK plugs won\'t fit. Nicaragua runs at 120V/60Hz, so UK devices designed for 230V may need a converter. Most modern chargers are dual-voltage — check the label.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'European round-pin plugs won\'t fit US-style flat-pin sockets. The 120V supply also means non-dual-voltage European devices need a converter.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'Australian plugs won\'t fit. The 120V supply differs from Australia\'s 230V — check your devices are dual-voltage.',
    },
  ],
  localPurchaseOptions: [
    { name: 'La Curacao', type: 'electronics', city: 'Managua', priceRange: 'C$100–300', note: 'Central American electronics and appliance chain' },
    { name: 'Gallo más Gallo', type: 'electronics', city: 'Managua', priceRange: 'C$80–250', note: 'Electronics retailer with locations in major cities' },
    { name: 'La Colonia supermarkets', type: 'supermarket', city: 'Managua', priceRange: 'C$60–200', note: 'Supermarket chain with a small electronics aisle' },
  ],
  airportName: 'Managua Augusto C. Sandino International Airport',
  airportCode: 'MGA',
  neighbors: [
    { name: 'Honduras', slug: 'honduras-electric-plug-types-do-you-need-an-adapter-in-honduras', plugTypes: ['A', 'B'], voltage: 120, sameAsSubject: 'identical' },
    { name: 'Costa Rica', slug: 'costa-rica-electric-plug-types-do-you-need-an-adapter', plugTypes: ['A', 'B'], voltage: 120, sameAsSubject: 'identical' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Managua, Granada, and San Juan del Sur have standard US-style Type A/B outlets. Beachfront eco-lodges and island accommodations on the Corn Islands may have limited outlets and occasional power fluctuations. USB ports are uncommon outside international chain hotels.',
  faqs: [
    {
      question: 'Do US plugs work in Nicaragua?',
      answer:
        'Yes. Nicaragua uses the same Type A/B plugs and 120V/60Hz system as the United States. No adapter or converter needed for US travelers.',
    },
    {
      question: 'Is the power reliable in Granada and San Juan del Sur?',
      answer:
        'Generally yes. Tourist areas have stable power most of the time. Occasional outages can occur, especially during the rainy season. A power bank is a good precaution for day trips.',
    },
    {
      question: 'Will my European hair dryer work in Nicaragua?',
      answer:
        'Only with both an adapter and a voltage converter. Nicaragua runs at 120V — a 230V European hair dryer won\'t heat properly and could be damaged. Consider buying a cheap one locally or using the hotel\'s.',
    },
  ],
  metaTitle: 'Nicaragua Power Plugs — Types A & B (US System) | Adapter Guide',
  metaDescription:
    'Nicaragua uses US-style Type A/B plugs at 120V/60Hz. American travelers need no adapter. European, UK, and Australian visitors need an adapter and possibly a converter.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Costa Rica', slug: 'costa-rica-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Honduras', slug: 'honduras-electric-plug-types-do-you-need-an-adapter-in-honduras' },
    { name: 'El Salvador', slug: 'el-salvador-electric-plug-type-will-you-need-an-adapter' },
  ],
};

export default nicaragua;

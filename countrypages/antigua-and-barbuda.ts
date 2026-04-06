import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'antigua-and-barbuda-electric-plug-types-adapter',
  name: 'Antigua And Barbuda',
  demonym: 'Antiguan',
  continent: 'North America',
  region: 'Caribbean',
  voltage: 230,
  frequency: 60,
  complexityTier: 'moderate',
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
  quirks: [
    'US-style plugs at 230V — American devices fit physically but receive nearly double the expected voltage. Always verify your device is dual-voltage (100–240V) before plugging in.',
  ],
  travelContext:
    'Antigua and Barbuda uses US-shaped Type A/B outlets but at 230V rather than the 110V found in the US. This means your American plug fits the socket, but the voltage could damage devices not rated for 230V. This is a common and potentially dangerous trap for US travelers. Modern phone chargers and laptops are almost always dual-voltage, but hair dryers, curling irons, and other appliances may not be.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: 'maybe',
      notes:
        'Your plug fits directly, but Antigua runs at 230V — nearly double US voltage. Most phone and laptop chargers are dual-voltage and work fine. Appliances rated only for 110V (hair dryers, shavers) will be damaged. Check every device label before plugging in.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit US-style outlets. You need an adapter, but voltage at 230V is compatible with UK devices.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit flat-pin US-style outlets. An adapter is needed. Voltage is compatible at 230V.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter for US-style outlets. Voltage at 230V is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Courts',
      type: 'electronics',
      city: "St. John's",
      priceRange: '$8–20',
      note: 'Caribbean electronics retailer with travel adapter selection.',
    },
    {
      name: 'Epicurean',
      type: 'supermarket',
      city: "St. John's",
      priceRange: '$5–15',
      note: 'Upscale supermarket that may carry adapters.',
    },
    {
      name: 'Woods Centre shops',
      type: 'electronics',
      city: "St. John's",
      priceRange: '$5–15',
      note: 'Shopping centre with several stores that stock adapters and electronics.',
    },
  ],
  airportName: 'V.C. Bird International Airport',
  airportCode: 'ANU',
  neighbors: [
    {
      name: 'Saint Kitts And Nevis',
      slug: 'saint-kitts-and-nevis-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Saint Kitts uses British Type D and G, which are different from Antigua\'s US-style outlets.',
    },
    {
      name: 'Dominica',
      slug: 'dominica-electric-plug-types-will-you-need-an-adapter-with-you',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Dominica uses British Type D and G. A different adapter is needed.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Resorts in Antigua are well-equipped and often provide hair dryers rated for the local 230V. Many resort rooms have USB charging ports. Staff at larger resorts can usually provide adapters for non-US guests.',
  faqs: [
    {
      question: 'What plug type does Antigua and Barbuda use?',
      answer:
        'Antigua and Barbuda uses US-style Type A and Type B outlets with flat pins. However, the voltage is 230V, not the 110V used in the US.',
    },
    {
      question: 'Can I use my US charger in Antigua?',
      answer:
        'Your plug fits directly, but check the voltage rating on your charger. If it says 100–240V, it is fine. If it only says 110V or 120V, do not plug it in — the 230V supply will damage it. Most phone chargers and laptops are dual-voltage.',
    },
    {
      question: 'Why is the voltage different from the US if the plugs are the same?',
      answer:
        'Several Caribbean islands adopted US-shaped plugs but kept the British 230V standard from their colonial era. This creates a hidden voltage mismatch that catches many American travelers off guard.',
    },
  ],
  metaTitle: 'Antigua & Barbuda Power Plugs — Type A & B at 230V, Adapter Guide',
  metaDescription:
    'Antigua and Barbuda uses US-style Type A/B plugs but at 230V. Learn about the voltage mismatch, what adapter you need, and how to protect your devices.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Saint Kitts And Nevis', slug: 'saint-kitts-and-nevis-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Dominica', slug: 'dominica-electric-plug-types-will-you-need-an-adapter-with-you' },
    { name: 'Barbados', slug: 'barbados-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default data;

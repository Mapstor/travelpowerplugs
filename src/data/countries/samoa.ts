import type { CountryPlugData } from '@/types';

const samoa: CountryPlugData = {
  slug: 'samoa-electric-plug-types-will-you-need-an-adapter-for-samoa',
  name: 'Samoa',
  demonym: 'Samoan',
  continent: 'Oceania',
  region: 'Polynesia',
  voltage: 230,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    { id: 'type-i', name: 'Type I', subtitle: 'Australian', pins: 3, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 13.7, ratedAmps: 10, grounded: true, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.2, bodyHeight: 0.9, bodyCornerRadius: 0.15, noseRadius: 0.42, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  quirks: [
    'Samoa switched from driving on the right to the left in 2009 to align with Australia and New Zealand, and its electrical system follows the same Australian standard.',
  ],
  travelContext: 'Samoa uses the Australian/New Zealand Type I system exclusively. Hotels and resorts in Apia and along the coast have reliable power. Beach fale (traditional open-sided thatched huts) are a popular accommodation style but may have limited or no electrical outlets. If you plan to stay in fale, bring a portable battery pack to keep your devices charged.',
  adapterNeeded: [
    { origin: 'US', originPlugTypes: 'A, B', adapterNeeded: true, converterNeeded: true, notes: 'US plugs will not fit Type I sockets, and Samoa runs at 230V so a converter is needed for non-dual-voltage devices.' },
    { origin: 'UK', originPlugTypes: 'G', adapterNeeded: true, converterNeeded: false, notes: 'British plugs will not fit. Bring a Type I adapter. Voltage is compatible.' },
    { origin: 'Europe', originPlugTypes: 'C, F', adapterNeeded: true, converterNeeded: false, notes: 'European plugs will not fit Samoan Type I outlets. An adapter is required.' },
    { origin: 'Australia', originPlugTypes: 'I', adapterNeeded: false, converterNeeded: false, notes: 'Australian and New Zealand plugs work directly in Samoa with no adapter needed.' },
  ],
  localPurchaseOptions: [
    { name: 'Courts', type: 'electronics', city: 'Apia', priceRange: '$5-15', note: 'Electronics and appliance store' },
    { name: 'Frankie\'s', type: 'supermarket', city: 'Apia', priceRange: '$3-10', note: 'Supermarket that may stock basic adapters' },
    { name: 'Chan Mow Supermarket', type: 'supermarket', city: 'Apia', priceRange: '$3-10', note: 'Large supermarket with some electronics' },
  ],
  airportName: 'Faleolo International Airport',
  airportCode: 'APW',
  neighbors: [
    { name: 'Tonga', slug: 'tongo-electric-plug-types-which-adapter-will-you-need-for-tongo', plugTypes: ['I'], voltage: 240, sameAsSubject: 'identical', adapterNote: 'Tonga uses the same Type I system' },
    { name: 'Fiji', slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva', plugTypes: ['I'], voltage: 240, sameAsSubject: 'identical', adapterNote: 'Fiji uses the same Type I system' },
    { name: 'New Zealand', slug: 'new-zealand-electric-plug-types-which-adapter-should-you-get', plugTypes: ['I'], voltage: 230, sameAsSubject: 'identical', adapterNote: 'Same plug type and similar voltage' },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote: 'Hotels and resorts in Apia have consistent power with Type I outlets. Beach fale — Samoa\'s signature traditional accommodation — are open-air and often have limited or no power outlets. Bring a battery pack if staying in fale.',
  faqs: [
    { question: 'Do I need an adapter for Samoa?', answer: 'If you are coming from Australia or New Zealand, no — your plugs will work directly. Travelers from the US, UK, and Europe all need a Type I adapter.' },
    { question: 'Will my devices work in a beach fale?', answer: 'Many beach fale have limited or no electrical outlets since they are traditional open-air structures. Bring a portable battery pack if this is your accommodation style.' },
    { question: 'Is the power reliable in Samoa?', answer: 'In Apia and at established resorts, power is generally reliable. More remote areas and outer islands may experience occasional outages.' },
  ],
  metaTitle: 'Samoa Power Plugs — Will You Need an Adapter?',
  metaDescription: 'Samoa uses Type I plugs at 230V/50Hz, the same as Australia and New Zealand. Find out if you need an adapter, where to buy one, and what to expect at beach fale.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Tonga', slug: 'tongo-electric-plug-types-which-adapter-will-you-need-for-tongo' },
    { name: 'Fiji', slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva' },
    { name: 'New Zealand', slug: 'new-zealand-electric-plug-types-which-adapter-should-you-get' },
  ],
};

export default samoa;

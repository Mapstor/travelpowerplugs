import { CountryPlugData } from '@/types';

const canada: CountryPlugData = {
  slug: 'canada-electric-plug-types-do-you-need-an-adapter',
  name: 'Canada',
  demonym: 'Canadian',
  continent: 'North America',
  region: 'North America',
  voltage: 120,
  frequency: 60,
  complexityTier: 'moderate',
  plugTypes: [
    { id: 'type-a', name: 'Type A', subtitle: 'US ungrounded', pins: 2, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 12.7, ratedAmps: 15, grounded: false, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.0, bodyHeight: 0.7, bodyCornerRadius: 0.15, noseRadius: 0.35, recessRadius: 0.85, faceplateSize: 2.5 },
    { id: 'type-b', name: 'Type B', subtitle: 'US grounded', pins: 3, pinShape: 'flat', pinDiameter: 6.35, pinSpacing: 12.7, ratedAmps: 15, grounded: true, hasGroundClips: false, pinRadius: 0.05, bodyWidth: 1.2, bodyHeight: 0.9, bodyCornerRadius: 0.15, noseRadius: 0.4, recessRadius: 0.95, faceplateSize: 2.7 },
  ],
  quirks: [
    'Canada follows the same NEMA standards as the United States — the electrical systems are identical. If your device works in the US, it works in Canada and vice versa.',
    'The Canadian Electrical Code (CEC) is separate from the US National Electrical Code but closely mirrors it. GFCI outlets are required in bathrooms, kitchens, and outdoor areas, just as in the US.',
  ],
  travelContext: 'If you\'re combining a Canada trip with the US — say, Niagara Falls from both sides, or a Toronto-to-New-York road trip — you won\'t need to think about power at all when crossing the border.',
  adapterNeeded: [
    { origin: 'United States', originPlugTypes: 'Type A / Type B', adapterNeeded: false, converterNeeded: false, notes: 'Canada and the US have identical electrical systems. Your US devices plug right in — no adapter, no converter, no surprises.' },
    { origin: 'Europe (Type C/E/F countries)', originPlugTypes: 'Type C / Type E / Type F', adapterNeeded: true, converterNeeded: 'maybe', notes: 'European plugs won\'t fit Canadian outlets. You need a Europlug-to-Type A/B adapter. Canada runs at 120V, so check your devices — phones and laptops are fine, but 230V-only hair appliances will underperform without a converter.' },
    { origin: 'United Kingdom & Ireland', originPlugTypes: 'Type G', adapterNeeded: true, converterNeeded: 'maybe', notes: 'UK\'s Type G is incompatible. You need an adapter. Same voltage concern as Europeans: check for "100–240V" on your charger labels. Most electronics are fine; heated styling tools usually are not.' },
    { origin: 'Australia & New Zealand', originPlugTypes: 'Type I', adapterNeeded: true, converterNeeded: 'maybe', notes: 'Australian plugs won\'t fit. Bring a Type I to Type A/B adapter. Australian mains is 230V, so verify your devices are dual-voltage.' },
    { origin: 'Asia (varies)', originPlugTypes: 'Various', adapterNeeded: true, converterNeeded: 'maybe', notes: 'Japanese Type A plugs work directly in Canadian outlets — no adapter needed. Travelers from China, Korea, India, and Southeast Asia need an adapter and should verify voltage compatibility.' },
  ],
  localPurchaseOptions: [
    { name: 'Best Buy Canada', type: 'electronics', note: 'Wide adapter selection, locations in every major city' },
    { name: 'Canadian Tire', type: 'electronics', note: 'Uniquely Canadian retailer — stocks adapters in the electrical section' },
    { name: 'Walmart Canada', type: 'supermarket', note: 'Budget-friendly adapters in electronics or travel accessories' },
    { name: 'London Drugs', type: 'pharmacy', city: 'Western Canada', note: 'Found in BC, Alberta, Saskatchewan, and Manitoba — carries travel adapters' },
    { name: 'Toronto Pearson Airport shops', type: 'airport', city: 'Toronto', priceRange: 'CA$15–30' },
  ],
  airportName: 'Toronto Pearson International Airport',
  airportCode: 'YYZ',
  neighbors: [
    { name: 'United States', slug: 'usa-electric-plug-types-will-you-need-an-adapter-traveling-to-the-us', plugTypes: ['A', 'B'], voltage: 120, sameAsSubject: 'identical', adapterNote: 'Identical electrical system. No adapter needed.' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote: 'Canadian hotels provide hair dryers as standard. International adapter loans are uncommon — staff may not stock them since most visitors come from the US. Newer chain hotels (Fairmont, Four Seasons, larger Marriotts) often have bedside USB-A and USB-C ports. Hostels in Vancouver, Toronto, and Montreal usually have adequate outlets but bring a power bar if you have many devices.',
  faqs: [
    { question: 'What power plug does Canada use?', answer: 'Canada uses Type A (two flat prongs) and Type B (two flat prongs plus a round ground pin) — the same plugs as the United States.' },
    { question: 'Do I need an adapter going from the US to Canada?', answer: 'No. Canada and the US share the same electrical system entirely — same plugs, same 120V voltage, same 60Hz frequency. Your devices will work identically on both sides of the border.' },
    { question: 'Can I use my European hair dryer in Canada?', answer: 'Technically yes with an adapter, but it will blow weak, lukewarm air. European hair dryers expect 230V and Canada supplies 120V. You\'d need a bulky step-up converter. Most travelers buy a cheap hair dryer at Canadian Tire or Walmart instead.' },
    { question: 'What voltage does Canada use?', answer: 'Canada uses 120V at 60Hz, identical to the United States and very close to Mexico\'s 127V. This is roughly half the voltage used in Europe, the UK, Australia, and most of Asia.' },
    { question: 'Where can I buy a power adapter in Toronto?', answer: 'Best Buy and Canadian Tire are your best options for selection and fair prices. Walmart works for budget picks. At Toronto Pearson airport, expect to pay a premium — CA$15–30 for a basic adapter.' },
    { question: 'Is Canadian electricity the same as American?', answer: 'Yes, completely identical. Same plug types (A and B), same voltage (120V), same frequency (60Hz), and the same NEMA connector standards. The two countries share an integrated power grid across much of the border region.' },
  ],
  metaTitle: 'Canada Power Plugs & Outlets — Do You Need an Adapter? (2026)',
  metaDescription: 'Canada uses Type A and B plugs at 120V/60Hz — identical to the US. Find out if you need an adapter, where to buy one, and what to know about voltage.',
  lastUpdated: '2026-03-30',
  relatedCountries: [
    { name: 'United States', slug: 'usa-electric-plug-types-will-you-need-an-adapter-traveling-to-the-us' },
    { name: 'Mexico', slug: 'mexico-electric-plug-types-will-you-need-an-adapter-in-mexico' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'Japan', slug: 'japan-electric-plug-types-will-you-need-an-adapter-probably-yes' },
  ],
};

export default canada;

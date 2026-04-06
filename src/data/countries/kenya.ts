import type { CountryPlugData } from '@/types';

const kenya: CountryPlugData = {
  slug: 'kenya-electric-plug-types-will-you-need-an-adapter-traveling-to-kenya',
  name: 'Kenya',
  demonym: 'Kenyan',
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
    'Kenya uses the British Type G system — a legacy of colonial-era infrastructure. Outlets have individual switches, just like in the UK.',
    'Safari lodges vary widely: luxury camps in the Masai Mara and Amboseli have reliable power and often provide adapters, while budget tented camps may run on solar or generator power with charging only at specific hours.',
  ],
  travelContext:
    'Kenya is one of Africa\'s most visited countries, famous for the Great Migration in the Masai Mara, Mount Kenya, and Mombasa\'s beaches. British visitors will feel right at home electrically. Everyone else needs a Type G adapter. A portable battery pack is essential for safari game drives and bush walks.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pronged plugs are completely incompatible with Kenya\'s Type G sockets. Bring an adapter. Modern electronics handle 240V without a converter.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Kenya uses the same Type G plug as the UK. Your chargers and devices will work directly — no adapter needed.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit Kenyan Type G sockets. You need an adapter. Voltage (240V) is close to Europe\'s 230V.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs will not fit. Bring a Type I to G adapter. Voltage is identical at 240V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Hotpoint',
      type: 'electronics',
      city: 'Nairobi',
      priceRange: '300–800 KES',
      note: 'Major Kenyan electronics and appliance retailer.',
    },
    {
      name: 'Naivas',
      type: 'supermarket',
      city: 'Nairobi, Mombasa, Nakuru',
      priceRange: '200–500 KES',
      note: 'Leading supermarket chain — check the electronics/travel aisle.',
    },
    {
      name: 'Carrefour Kenya',
      type: 'supermarket',
      city: 'Nairobi (Sarit Centre, Westgate, Two Rivers)',
      priceRange: '250–600 KES',
      note: 'International hypermarket in major Nairobi malls.',
    },
    {
      name: 'Jomo Kenyatta Airport shops',
      type: 'airport',
      city: 'Nairobi',
      priceRange: '500–1200 KES',
      note: 'Available at NBO arrivals, but expect airport markup.',
    },
  ],
  airportName: 'Nairobi Jomo Kenyatta International',
  airportCode: 'NBO',
  neighbors: [
    {
      name: 'Uganda',
      slug: 'uganda-electric-plug-types-which-adapter-do-you-need-in-uganda',
      plugTypes: ['G'],
      voltage: 240,
      sameAsSubject: 'identical',
      adapterNote: 'Uganda uses the same Type G system at 240V. No additional adapter needed.',
    },
    {
      name: 'Ethiopia',
      slug: 'ethiopia-electric-plug-types-will-you-need-an-adapter-in-addis-abeba',
      plugTypes: ['C', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Ethiopia uses European-style C/E/F plugs — completely different from Kenya\'s Type G. You will need a different adapter.',
    },
    {
      name: 'Somalia',
      slug: 'somalia-electric-plug-types-which-adapter-will-you-need-in-somalia',
      plugTypes: ['C'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Somalia uses Type C — incompatible with Kenya\'s Type G.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'International hotels in Nairobi (like those in Westlands and the CBD) are modern and well-equipped. Luxury safari lodges in the Masai Mara and Amboseli often lend adapters to guests. Budget and tented camps may rely on solar panels or generators — charging is typically available during meal times or designated hours only. Always carry a portable battery on safari.',
  faqs: [
    {
      question: 'Can I charge my phone at a safari lodge in the Masai Mara?',
      answer:
        'Luxury lodges have 24-hour electricity and standard Type G outlets, often with adapters available at reception. Budget tented camps may only have power during certain hours via generator or solar. A portable battery pack is highly recommended for any safari trip.',
    },
    {
      question: 'Do I need the same adapter for Kenya and the UK?',
      answer:
        'Yes — Kenya uses the identical British Type G plug. If you already own a UK adapter or travel with UK devices, they work directly in Kenya.',
    },
    {
      question: 'Is 240V safe for my American laptop?',
      answer:
        'Almost certainly yes. Check the fine print on your laptop\'s power brick — most read "100–240V," meaning they handle Kenyan voltage automatically. You just need a plug adapter, not a voltage converter.',
    },
    {
      question: 'Should I bring a power strip on safari?',
      answer:
        'It\'s a great idea. Safari lodge rooms often have only one or two outlets, and you may be sharing with a travel companion. A compact power strip lets everyone charge phones, cameras, and batteries overnight.',
    },
    {
      question: 'Where can I buy an adapter in Nairobi quickly?',
      answer:
        'Hotpoint stores and Carrefour at malls like Sarit Centre or Westgate are your best bet in Nairobi. If you land without one, Jomo Kenyatta Airport has shops in the arrivals area, though prices are higher.',
    },
  ],
  metaTitle: 'Kenya Power Plugs: Type G (British) — Do You Need an Adapter?',
  metaDescription:
    'Kenya uses British Type G plugs at 240V/50Hz. UK travelers need no adapter; US, European, and Australian visitors do. Safari charging tips and where to buy locally.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Uganda', slug: 'uganda-electric-plug-types-which-adapter-do-you-need-in-uganda' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'Ethiopia', slug: 'ethiopia-electric-plug-types-will-you-need-an-adapter-in-addis-abeba' },
    { name: 'South Africa', slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa' },
  ],
};

export default kenya;

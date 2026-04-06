import { CountryPlugData } from "@/types";

const data: CountryPlugData = {
  slug: "hong-kong-power-plug-type",
  name: "Hong Kong",
  region: "East Asia — City Guide",
  flag: "🇭🇰",
  voltage: 220,
  frequency: 50,
  plugTypes: [
    {
      id: "type-g",
      name: "Type G",
      subtitle: "British",
      pins: 3,
      pinShape: "rectangular",
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
  adapterNeeded: true,
  notes:
    "Hong Kong uses the British Type G plug at 220V/50Hz — completely different from mainland China, which uses Type A, C, and I. This catches many travelers off guard, especially those combining a Hong Kong and mainland China trip. If you're crossing the border to Shenzhen, you'll need a different adapter on each side.",
  travelContext:
    "Hong Kong is one of the world's most visited cities and its hospitality industry is geared toward international travelers. Adapters are easy to find — from airport electronics shops to 7-Elevens on every corner. Many hotels provide complimentary adapters as standard. The key thing to know: Hong Kong's plug system is completely separate from mainland China's.",

  parentCountry: {
    name: "China",
    slug: "3-electric-plug-types-in-china-will-you-need-an-adapter",
  },

  sections: [
    {
      heading: "What plug does Hong Kong use?",
      body: "Hong Kong uses Type G — the British three-pin rectangular plug at 220V/50Hz. This is a legacy of British colonial administration and is completely different from mainland China's electrical system.\n\n**Critical for China travelers:** Mainland China uses Type A (flat two-pin), Type C (round two-pin), and Type I (Australian-style). None of these are compatible with Hong Kong's Type G sockets. If your trip includes both Hong Kong and mainland China, you need two different adapters — or a universal travel adapter.\n\nFor details on mainland China's plug types, see our [China power plug guide](/3-electric-plug-types-in-china-will-you-need-an-adapter).",
    },
    {
      heading: "Where to buy an adapter in Hong Kong",
      body: "Hong Kong is one of the easiest cities in the world to buy electronics. Adapters are everywhere.\n\n**At Hong Kong Airport (HKG):** SmarTone and csl shops in the arrivals hall sell adapters, as do 7-Eleven stores in the terminal. Prices are slightly marked up but reasonable.\n\n**Fortress:** Hong Kong's largest electronics chain has locations in virtually every shopping mall across the city. You'll find them in IFC Mall (Central), Harbour City (Tsim Sha Tsui), Times Square (Causeway Bay), and dozens more.\n\n**Broadway:** Another major electronics chain with similar coverage, often right next to Fortress stores.\n\n**Sham Shui Po:** For the cheapest adapters in Hong Kong, head to the electronics street in Sham Shui Po (Apliu Street and surrounding blocks). This is Hong Kong's electronics district — you'll find adapters for as little as HK$10–20. Take the MTR to Sham Shui Po station.\n\n**Convenience stores:** 7-Eleven and Circle K stores are on nearly every block in Hong Kong and most carry basic adapters for HK$30–50.",
    },
    {
      heading: "Hotel district power guide",
      body: "**Central / Admiralty:** Luxury hotels in Hong Kong's financial district — Mandarin Oriental, Four Seasons, Conrad — universally provide adapters and many have universal outlets with USB ports in rooms.\n\n**Tsim Sha Tsui (TST):** Hong Kong's main tourist district on the Kowloon side has hotels at every price point. Most mid-range and above provide adapters on request. The area is packed with electronics shops if you need to buy one yourself.\n\n**Mong Kok:** Budget hotels and guesthouses in Mong Kok typically have standard Type G sockets without universal outlets. The Apliu Street electronics market in nearby Sham Shui Po is your cheapest option for adapters.\n\n**Causeway Bay:** A mix of business and tourist hotels. Most provide adapters. Times Square mall is nearby with a Fortress store.\n\n**Many Hong Kong hotels provide adapters as standard** — it's a tourism-oriented city that's well prepared for international visitors. Always worth asking at reception before buying one.",
    },
    {
      heading: "City-specific tips",
      body: "Airport Express stations (Hong Kong, Kowloon, Tsing Yi) have USB charging points available for passengers.\n\nIf you're taking a day trip to Macau, note that Macau uses a mix of Type G (same as Hong Kong) and some European-style outlets. Most Macau hotels and casinos have universal outlets, so your Hong Kong adapter will likely work — but a universal adapter is safest.\n\nIf you're crossing the border to Shenzhen via Lo Wu or Lok Ma Chau, buy your mainland China adapter before you cross. There's less availability immediately on the Shenzhen side of the border compared to the shops on the Hong Kong side.",
    },
  ],

  faqs: [
    {
      question: "Is Hong Kong the same plug as China?",
      answer:
        "No. This is one of the most common misconceptions. Hong Kong uses Type G (British three-pin rectangular), while mainland China uses Type A, C, and I. The two systems are completely incompatible. You need different adapters for each.",
    },
    {
      question:
        "Do I need a different adapter for Hong Kong and mainland China?",
      answer:
        "Yes. Hong Kong uses Type G (British). Mainland China uses Type A (US-style flat), Type C (European round), and Type I (Australian angled). If your trip covers both, bring a universal travel adapter or two separate adapters.",
    },
    {
      question: "Where can I buy an adapter in Tsim Sha Tsui?",
      answer:
        "Tsim Sha Tsui has plenty of options. Fortress and Broadway both have stores in Harbour City mall and iSQUARE. For convenience, there are 7-Eleven and Circle K shops on nearly every block. For the cheapest prices, take the MTR one stop to Sham Shui Po and visit the Apliu Street electronics market.",
    },
    {
      question: "Do Hong Kong hotels provide plug adapters?",
      answer:
        "Most hotels rated 3 stars and above provide complimentary adapters at the front desk. Hong Kong is a major international tourist destination and hotels are well prepared for visitors needing adapters. Budget guesthouses and hostels are less likely to have them available.",
    },
    {
      question: "Can I use my Hong Kong adapter in Macau?",
      answer:
        "Partially. Macau uses a mix of Type G (same as Hong Kong) and some European-style Type C/F outlets. Your Type G adapter will work in many Macau sockets, but not all. Most hotels and casinos in Macau have universal outlets. A universal travel adapter is the safest choice for a Hong Kong–Macau trip.",
    },
    {
      question:
        "What plug adapter do I need for the Hong Kong to Shenzhen border crossing?",
      answer:
        "In Hong Kong you need Type G (British). Once you cross into Shenzhen, you need an adapter for China's Type A, C, or I sockets. Buy your mainland China adapter on the Hong Kong side before crossing — there are 7-Elevens and electronics shops at both Lo Wu and Lok Ma Chau border crossings.",
    },
  ],
};

export default data;

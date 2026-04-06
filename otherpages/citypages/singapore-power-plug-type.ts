import { CountryPlugData } from "@/types";

const data: CountryPlugData = {
  slug: "singapore-power-plug-type",
  name: "Singapore",
  region: "Southeast Asia — City Guide",
  flag: "🇸🇬",
  voltage: 230,
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
    "Singapore uses the British Type G plug exclusively. If you're coming from anywhere outside the UK, Hong Kong, or a handful of other former British territories, you'll need an adapter. The good news: Singapore is one of the easiest cities in the world to buy one on arrival.",
  travelContext:
    "Singapore is a compact, hyper-efficient city-state where you can buy a plug adapter within minutes of landing. Changi Airport consistently ranks among the world's best — and its traveler-friendly power infrastructure reflects that. Most hotels in tourist districts cater to international guests with universal outlets or complimentary adapters.",

  parentCountry: {
    name: "Singapore",
    slug: "singapur-electric-plug-types-will-you-need-an-adapter-for-singapur",
  },

  sections: [
    {
      heading: "What plug does Singapore use?",
      body: "Singapore uses Type G — the British three-pin rectangular plug rated at 230V/50Hz. Every outlet in the country follows this standard. All sockets include a built-in safety shutter that blocks insertion unless the earth pin engages first, making Type G one of the safest socket designs in the world.\n\nFor full technical details on Singapore's electrical system, see our [Singapore power plug guide](/singapur-electric-plug-types-will-you-need-an-adapter-for-singapur).",
    },
    {
      heading: "Where to buy an adapter in Singapore",
      body: "You can buy a plug adapter almost anywhere in Singapore, often for under S$10.\n\n**At Changi Airport:** Every terminal has electronics shops and convenience stores selling adapters. Terminal 3 Basement 2 has a cluster of electronics retailers with the widest selection. Changi also offers free charging stations with universal outlets throughout all terminals — so you can charge immediately while you sort out an adapter.\n\n**In the city:** Challenger is Singapore's main electronics chain with locations in most major malls including Bugis Junction, VivoCity, and Tampines Mall. Mustafa Centre in Little India is open 24 hours and stocks a huge range of adapters and electronics at competitive prices — it's the go-to for budget travelers arriving on late flights. Courts and Best Denki are other reliable electronics chains found in suburban malls.\n\n**Budget option:** Any 7-Eleven or Cheers convenience store will have basic adapters for S$5–8.",
    },
    {
      heading: "Hotel district power guide",
      body: "**Marina Bay / Marina Bay Sands area:** Modern high-end hotels in this district typically feature universal outlets with built-in USB ports at the bedside. You may not need an adapter at all in newer 5-star properties.\n\n**Orchard Road:** Singapore's main shopping belt has hotels at every price point. All use standard Type G sockets. The upside: if you need an adapter, there are dozens of electronics shops within walking distance along Orchard Road itself.\n\n**Chinatown / Little India:** Budget hotels and hostels in these neighborhoods use standard Type G outlets with fewer sockets per room. Bring a multi-port USB charger if you're sharing a room and need to charge multiple devices.\n\n**Sentosa Island:** Resort properties here are modern and well-equipped, often with universal outlets and USB ports.",
    },
    {
      heading: "City-specific tips",
      body: "Some newer MRT stations have USB charging ports built into platform seating — handy if your phone is dying while you're in transit.\n\nSingapore's power grid is exceptionally reliable. Power outages are virtually unheard of in tourist areas.\n\nIf you're also visiting Malaysia on a day trip (Johor Bahru is just across the causeway), note that Malaysia also uses Type G — so the same adapter works in both countries.",
    },
  ],

  faqs: [
    {
      question: "Can I buy a plug adapter at Changi Airport?",
      answer:
        "Yes. Every terminal at Changi has convenience stores and electronics shops selling adapters, typically for S$8–15. Terminal 3 Basement 2 has the best selection. In the meantime, Changi's free universal charging stations let you charge your devices without any adapter.",
    },
    {
      question: "Do Singapore hotels provide adapters?",
      answer:
        "Most 4-star and 5-star hotels in Singapore provide complimentary adapters on request at the front desk. Many newer luxury hotels have universal outlets built into the room. Budget hotels and hostels generally don't provide adapters, so buy one at the airport or a nearby convenience store.",
    },
    {
      question: "Is Singapore the same plug as Malaysia?",
      answer:
        "Yes. Both Singapore and Malaysia use Type G (British three-pin) at 230V/50Hz. If you have an adapter for one country, it works in the other — convenient for travelers crossing the causeway to Johor Bahru.",
    },
    {
      question: "Where is the cheapest place to buy an adapter in Singapore?",
      answer:
        "Mustafa Centre in Little India offers the best prices on adapters and is open 24 hours. Expect to pay S$3–6 for a basic adapter. Action stores and Daiso (S$2 shops) also stock them cheaply. Convenience stores like 7-Eleven are slightly more expensive at S$5–8 but available everywhere.",
    },
    {
      question: "Does Changi Airport have universal charging stations?",
      answer:
        "Yes. Changi Airport has free charging stations with universal outlets and USB ports in every terminal. You'll find them near seating areas and gates. These accept most plug types without an adapter, so you can charge your devices immediately after landing.",
    },
  ],
};

export default data;

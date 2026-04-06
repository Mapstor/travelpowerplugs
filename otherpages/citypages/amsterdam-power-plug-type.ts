import { CountryPlugData } from "@/types";

const data: CountryPlugData = {
  slug: "amsterdam-power-plug-type",
  name: "Amsterdam",
  region: "Europe — City Guide",
  flag: "🇳🇱",
  voltage: 230,
  frequency: 50,
  plugTypes: [
    {
      id: "type-c",
      name: "Type C",
      subtitle: "Europlug",
      pins: 2,
      pinShape: "round",
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
      id: "type-f",
      name: "Type F",
      subtitle: "Schuko",
      pins: 2,
      pinShape: "round",
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: true,
      pinRadius: 0.075,
      bodyWidth: 1.3,
      bodyHeight: 1.3,
      bodyCornerRadius: 0.25,
      noseRadius: 0.52,
      recessRadius: 1.05,
      faceplateSize: 2.9,
    },
  ],
  adapterNeeded: false,
  notes:
    "Amsterdam uses the standard European Type C and Type F plugs at 230V/50Hz. Continental European travelers don't need an adapter. US, UK, and Australian travelers need a simple plug adapter — no voltage converter required for modern electronics. The real Amsterdam-specific challenge isn't the plug type: it's the limited outlets in the city's charming but centuries-old canal house hotels.",
  travelContext:
    "Amsterdam's accommodation ranges from sleek modern chain hotels to narrow 17th-century canal houses converted into boutique hotels. The plug type is standard European, but the canal house experience comes with a quirk: thick walls, limited outlets, and sometimes creative electrical setups. A short extension cord or multi-port USB charger is as important as your adapter.",

  parentCountry: {
    name: "Netherlands",
    slug: "netherlands-electric-plug-types-will-you-need-an-adapter",
  },

  sections: [
    {
      heading: "What plug does Amsterdam use?",
      body: "Amsterdam uses Type C (Europlug, two round pins) and Type F (Schuko, two round pins with ground clips) at 230V/50Hz. This is the same plug system used across continental Europe — Germany, France, Spain, Italy, and most other EU countries use the same standard.\n\nIf you're from anywhere in continental Europe, your chargers will work directly. Travelers from the US, UK, Australia, and most Asian countries need a simple plug adapter.\n\nFor full details on the Netherlands' electrical system, see our [Netherlands power plug guide](/netherlands-electric-plug-types-will-you-need-an-adapter).",
    },
    {
      heading: "Where to buy an adapter in Amsterdam",
      body: "Adapters are widely available, and you can pick one up before even leaving the airport.\n\n**At Schiphol Airport:**\n- **MediaMarkt at Schiphol Plaza:** Located before security in the main airport plaza — accessible to arriving passengers. Full electronics store with a wide adapter selection.\n- **Relay shops:** Found throughout the terminals with basic travel adapters.\n- **The Electronics Shop (Lounge 2):** Good selection of adapters and travel accessories.\n\n**In Amsterdam city center:**\n- **MediaMarkt (Oosterdoksstraat):** A large electronics store a 5-minute walk from Amsterdam Centraal station. Best selection and fair prices.\n- **Coolblue:** Dutch electronics retailer with multiple Amsterdam locations. They also offer same-day delivery if you'd rather order from your hotel.\n- **Action stores:** Budget chain with several locations in Amsterdam. Adapters for just €2–3 — the cheapest option in the city.\n- **Albert Heijn:** Some larger AH supermarkets carry basic adapters in the household aisle. The small AH To Go stores at train stations generally don't.\n- **HEMA:** Dutch department store chain with locations on Kalverstraat and other shopping streets. Stocks adapters in the electronics section.",
    },
    {
      heading: "Accommodation power guide",
      body: "**Canal house hotels (Jordaan, Herengracht, Keizersgracht):** These are Amsterdam's signature accommodations — gorgeous 17th-century townhouses converted into boutique hotels. The charm comes with trade-offs: thick brick walls that block WiFi, narrow staircases, and crucially, limited power outlets. Rooms may have only 2–3 outlets, sometimes in inconvenient locations. **Bring a short extension cord or multi-port USB charger** — this is the single most useful packing tip for Amsterdam.\n\n**Dam Square / Centrum:** Modern chain hotels in this area (NH, Mövenpick, Park Plaza) have standard power infrastructure with plenty of outlets and often USB ports at the desk.\n\n**Museumkwartier / Oud-Zuid:** A mix of modern hotels near the Rijksmuseum and Van Gogh Museum. No outlet issues at chain properties.\n\n**Houseboat accommodations:** Staying on an Amsterdam houseboat is a unique experience. Power is standard Type C/F, but outlets may be limited — houseboats run on shore power connections that occasionally trip during high usage. Avoid running multiple high-draw devices (hair dryer + space heater) simultaneously.\n\n**Jordaan boutique hotels:** Beautiful canal-side properties with character. Expect the canal house limitations mentioned above — limited outlets, quirky placement, thick walls.",
    },
    {
      heading: "City-specific tips",
      body: "Amsterdam's plug system is identical to Germany, Belgium, and France. If you're traveling through multiple European countries, one adapter covers all of them.\n\nTrains in the Netherlands (NS) have power outlets at most seats in intercity services — standard Type C/F. Useful for the ride from Schiphol to Centraal.\n\nIf you're taking a day trip to London via Eurostar, remember that the UK uses a completely different plug system (Type G). You'll need a separate adapter on the other side.\n\nAmsterdam's power grid is very reliable. Outages in the city center are rare.",
    },
  ],

  faqs: [
    {
      question: "Do I need a plug adapter for Amsterdam?",
      answer:
        "It depends where you're from. If you're from continental Europe, no — Amsterdam uses the same Type C/F plugs as Germany, France, Spain, and most of the EU. If you're from the US, UK, Australia, or most Asian countries, yes — you need a simple plug adapter. No voltage converter is needed for modern electronics.",
    },
    {
      question: "Can I buy an adapter at Schiphol Airport?",
      answer:
        "Yes. MediaMarkt at Schiphol Plaza (before security, accessible to arrivals) has a full range of adapters. Relay shops inside the terminals also carry basic travel adapters. Expect to pay €5–15 depending on the type.",
    },
    {
      question: "Do Amsterdam canal house hotels have enough outlets?",
      answer:
        "Often not. Canal house hotels are in 17th-century buildings with limited wiring. Rooms may have only 2–3 outlets, sometimes awkwardly placed. Bring a multi-port USB charger or short extension cord — it's the most practical thing you can pack for Amsterdam specifically.",
    },
    {
      question: "Is Amsterdam the same plug as Germany?",
      answer:
        "Yes. Amsterdam (and the entire Netherlands) uses the same Type C and Type F plugs as Germany, France, Spain, Belgium, Austria, and most of continental Europe. One adapter works across all these countries.",
    },
    {
      question: "Where can I buy a cheap adapter in Amsterdam city center?",
      answer:
        "Action stores have the best prices at €2–3 for a basic adapter. HEMA on Kalverstraat is another affordable option. MediaMarkt near Centraal station has the widest selection at mid-range prices. Avoid buying at tourist shops in the Red Light District area — they charge a premium.",
    },
  ],
};

export default data;

import { CountryPlugData } from "@/types";

const data: CountryPlugData = {
  slug: "bali-power-plug-type",
  name: "Bali",
  region: "Southeast Asia — City Guide",
  flag: "🇮🇩",
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
    "Bali uses the standard European Type C and Type F plugs at 230V/50Hz. If you're traveling from continental Europe, you won't need an adapter at all. Travelers from the US, UK, Australia, and other non-European countries will need a simple plug adapter. No voltage converter is needed for modern electronics.",
  travelContext:
    "Bali's accommodation ranges from modern luxury villas with USB-equipped outlets to eco-retreats in Ubud's rice terraces with limited power access. Where you stay matters more than in most destinations. Tourist areas like Seminyak and Canggu are well-powered and modern, while off-the-beaten-path spots on Nusa Penida or rural Ubud can have inconsistent electricity.",

  parentCountry: {
    name: "Indonesia",
    slug: "indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia",
  },

  sections: [
    {
      heading: "What plug does Bali use?",
      body: "Bali uses Type C (Europlug, two round pins) and Type F (Schuko, two round pins with ground clips) at 230V/50Hz. This is the same standard European plug system used across all of Indonesia.\n\nEuropean travelers: your chargers will work directly — no adapter needed. US, UK, and Australian travelers need a simple plug adapter.\n\nFor full details on Indonesia's electrical system, see our [Indonesia power plug guide](/indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia).",
    },
    {
      heading: "Where to buy an adapter in Bali",
      body: "Adapters are easy to find in Bali's tourist areas, though the selection isn't as wide as in major cities.\n\n**At Ngurah Rai Airport (DPS):** Small convenience shops in the arrivals area sell basic adapters. Limited selection but enough to get you going.\n\n**Hardy's Supermarket:** Bali's local supermarket chain has locations in Sanur and Seminyak. They stock basic adapters alongside other travel essentials.\n\n**Bintang Supermarket:** Found in Seminyak (Jalan Raya Seminyak) and several other tourist areas. A reliable option for adapters and other electronics.\n\n**Tiara Dewata:** A large department store in Denpasar with a proper electronics section. Worth the trip if you need something specific.\n\n**Mini-marts:** Indomaret and Alfamart convenience stores are on every street in tourist areas and occasionally stock basic adapters, though availability varies.\n\n**Tip:** Adapters in Bali are cheap — typically IDR 20,000–50,000 (roughly $1.50–3.50). Buy one at the airport or your first supermarket stop.",
    },
    {
      heading: "Accommodation power guide",
      body: "Bali's accommodation types vary wildly, and so does the power situation.\n\n**Seminyak & Canggu:** Modern villas and boutique hotels in these trendy areas are well-powered with abundant outlets, often including USB charging ports at the bedside. Many private villas have outdoor living areas — note that poolside and garden areas typically have no covered outlets, so charge your devices inside.\n\n**Ubud:** The spiritual heart of Bali has everything from luxury resorts to simple eco-retreats. Higher-end resorts (like those along the Ayung River valley) are fully modern. Budget eco-resorts and yoga retreats may have limited outlets — some rely partly on solar power and ask guests to be mindful of energy use.\n\n**Uluwatu:** Cliff-top resorts here are modern and well-powered. No issues with outlets or power stability.\n\n**Nusa Penida & Nusa Lembongan:** Some guesthouses on these islands run on generator power with limited hours (typically shut off between midnight and 6am). Check with your accommodation in advance if reliable 24-hour power matters to you.\n\n**Private villa tip:** Many Bali villas have stunning open-air living rooms and bathrooms. The tradeoff — no outlets near the pool or in covered outdoor areas. Charge everything inside before heading out for the day.",
    },
    {
      heading: "City-specific tips",
      body: "Bali's power grid is generally reliable in main tourist areas (Seminyak, Ubud center, Sanur, Nusa Dua). However, during the rainy season (November–March), brief power outages can occur, especially after heavy storms. Most mid-range and above hotels have backup generators.\n\nIf you're island-hopping to the Gili Islands (Lombok province), the plug type is the same — Type C/F throughout Indonesia.\n\nBali's voltage (230V) is compatible with most modern electronics worldwide. Your phone charger, laptop, and camera charger almost certainly support 100–240V input — check the label. You only need a plug adapter, not a voltage converter.",
    },
  ],

  faqs: [
    {
      question: "Do I need a plug adapter for Bali?",
      answer:
        "It depends where you're from. European travelers (using Type C or F plugs) don't need an adapter — Bali uses the same standard. Travelers from the US, UK, Australia, and most Asian countries need a simple plug adapter. No voltage converter is needed for modern electronics.",
    },
    {
      question: "Is Bali the same plug as Europe?",
      answer:
        "Yes. Bali uses Type C and Type F — the same round two-pin plugs used across continental Europe. If your chargers work in France, Germany, Spain, or the Netherlands, they'll work directly in Bali.",
    },
    {
      question: "Do Bali villas have enough power outlets?",
      answer:
        "Modern villas in Seminyak, Canggu, and Uluwatu generally have plenty of outlets, often with USB ports. However, outlets are typically only inside — Bali's open-air living spaces and poolside areas rarely have power points. Budget villas and traditional-style accommodation may have fewer outlets per room. A multi-port USB charger is a smart packing choice.",
    },
    {
      question: "Is the power reliable in Ubud?",
      answer:
        "In central Ubud and at established resorts, power is reliable. Budget eco-retreats and very rural locations outside town may experience occasional outages, especially during rainy season storms (November–March). If uninterrupted power matters for your work, choose a mid-range or higher property with a backup generator.",
    },
    {
      question: "Where can I buy an adapter near Seminyak?",
      answer:
        "Bintang Supermarket on Jalan Raya Seminyak is the most convenient option. Hardy's Supermarket in Seminyak is another reliable choice. Indomaret and Alfamart mini-marts on most streets occasionally stock adapters. Expect to pay IDR 20,000–50,000 (around $1.50–3.50).",
    },
  ],
};

export default data;

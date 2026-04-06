import { CountryPlugData } from "@/types";

const data: CountryPlugData = {
  slug: "dubai-power-plug-type",
  name: "Dubai",
  region: "Middle East — City Guide",
  flag: "🇦🇪",
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
    "Dubai uses the British Type G plug at 230V/50Hz. Unless you're coming from the UK, Hong Kong, Singapore, or another Type G country, you'll need an adapter. Dubai is extremely tourist-friendly — adapters are easy to find everywhere from airport duty-free to hypermarkets, and most mid-range and luxury hotels provide them free.",
  travelContext:
    "Dubai welcomes over 16 million international visitors a year, and its hospitality infrastructure reflects that. Most hotels above 3 stars keep adapters at the front desk, and many newer properties have universal outlets with USB-C ports built in. If you arrive without an adapter, you'll find one within minutes at DXB Airport or any of Dubai's massive malls.",

  parentCountry: {
    name: "United Arab Emirates",
    slug: "united-arab-emirates-electric-plug-types-which-adapter-for-uae",
  },

  sections: [
    {
      heading: "What plug does Dubai use?",
      body: "Dubai uses Type G — the British three-pin rectangular plug at 230V/50Hz. This is the same plug used across all seven emirates of the UAE.\n\nFor full details on the UAE's electrical system, see our [UAE power plug guide](/united-arab-emirates-electric-plug-types-which-adapter-for-uae).",
    },
    {
      heading: "Where to buy an adapter in Dubai",
      body: "Adapters are widely available across Dubai, from budget hypermarkets to electronics megastores.\n\n**At Dubai Airport (DXB):** Terminal 3 (Emirates terminal) has multiple electronics shops and duty-free counters selling adapters. Expect to pay AED 40–80 at duty-free — it's convenient but not cheap. The Terminal 1 and Terminal 2 arrivals halls also have small electronics kiosks.\n\n**Sharaf DG:** Dubai's largest electronics retailer has stores in Dubai Mall, Mall of the Emirates, and Ibn Battuta Mall. Prices are fair and the selection is excellent — they stock everything from basic adapters to universal travel kits.\n\n**Hypermarkets:** Carrefour (found in most malls including Dubai Mall and Deira City Centre) and Lulu Hypermarket (multiple locations across Dubai) sell adapters for AED 10–25 — the cheapest option in the city.\n\n**Plug Ins:** A smaller electronics chain with locations in several malls, useful if Sharaf DG is too busy.\n\n**Convenience stores:** Many grocery stores and pharmacies in tourist areas stock basic adapters.",
    },
    {
      heading: "Hotel district power guide",
      body: "**JBR & Dubai Marina:** Modern high-rise hotels in this area frequently have universal outlets with USB and USB-C ports. Some newer apart-hotels come with international adapter sets in the room. You may not need your own adapter.\n\n**Downtown / Burj Khalifa area:** Luxury hotels here — including the Address, Armani, and similar properties — typically provide complimentary adapters at the front desk. Many rooms have universal outlets at the desk and bedside.\n\n**Deira & Old Dubai:** Older 2–3 star hotels in Deira and Bur Dubai tend to have strictly Type G sockets without universal outlets. Buy an adapter before checking in — Deira City Centre mall is nearby with a Carrefour and Sharaf DG.\n\n**Palm Jumeirah:** Resort hotels on the Palm are modern and well-equipped. Most provide adapters and have universal outlets.\n\n**Most Dubai hotels above 3 stars provide complimentary adapters at the front desk** — just ask at check-in. Don't assume this at budget properties, though.",
    },
    {
      heading: "City-specific tips",
      body: "Some Dubai Metro stations offer USB charging at seating areas, though availability varies by station.\n\nIf you're visiting other emirates during your trip — Abu Dhabi, Sharjah, Ras Al Khaimah — the plug type is the same (Type G) everywhere in the UAE.\n\nDubai's power grid is highly reliable. Power outages in tourist areas are extremely rare, even during peak summer when air conditioning demand is at its highest.",
    },
  ],

  faqs: [
    {
      question: "Can I buy a plug adapter at Dubai Airport?",
      answer:
        "Yes. DXB Terminal 3 has electronics shops and duty-free counters with adapters, though prices are steep at AED 40–80. Terminal 1 and 2 also have small kiosks. For better prices, wait until you reach a Carrefour or Sharaf DG in the city — you'll save 50–70%.",
    },
    {
      question: "Do Dubai hotels provide power adapters?",
      answer:
        "Most Dubai hotels rated 3 stars and above provide complimentary adapters at the front desk — just ask at check-in. Many newer 4–5 star hotels have universal outlets with USB ports built into the rooms. Budget hotels and hostels typically don't provide adapters.",
    },
    {
      question: "Where is the nearest Sharaf DG to my hotel?",
      answer:
        "Sharaf DG has locations across Dubai's major malls: Dubai Mall (Downtown), Mall of the Emirates (Al Barsha/Sheikh Zayed Road), Ibn Battuta Mall (Jebel Ali), and Deira City Centre (Deira). Whichever district you're staying in, there's usually one within a short Metro or taxi ride.",
    },
    {
      question: "Is Dubai the same plug as the UK?",
      answer:
        "Yes. Dubai uses Type G, which is identical to the UK plug. If you already have a UK three-pin plug on your device, it will work directly in Dubai sockets without any adapter.",
    },
    {
      question: "Can I use my European charger in Dubai?",
      answer:
        "Not directly. European Type C (two-pin round) plugs don't fit Dubai's Type G (three-pin rectangular) sockets. You need a Type C to Type G adapter. The voltage is compatible (both 230V/50Hz), so you only need a simple plug adapter — not a voltage converter.",
    },
  ],
};

export default data;

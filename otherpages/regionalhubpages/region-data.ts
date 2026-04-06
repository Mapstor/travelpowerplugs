/**
 * Region hub page data — static content (overviews, insights, FAQs)
 * and country-to-region mapping used by all 6 region pages.
 */

export interface RegionConfig {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  overview: string;
  keyInsights: string[];
  faqs: { question: string; answer: string }[];
  /** Country names exactly as they appear in the data files (title-cased slug) */
  countries: string[];
}

// ─────────────────────────────────────────────
// Europe
// ─────────────────────────────────────────────
const europe: RegionConfig = {
  slug: "europe",
  name: "Europe",
  title: "Europe Power Plugs & Outlet Types — Complete Guide",
  metaDescription:
    "Europe uses Type C and F plugs at 230 V / 50 Hz in most countries. The UK, Ireland, Cyprus, and Malta use Type G. Full country-by-country table and adapter advice.",
  overview:
    "Most of Europe runs on Type C and Type F plugs at 230 V and 50 Hz. That uniformity makes travel within mainland Europe simple — a single C/F adapter covers the vast majority of countries from Portugal to Finland. The major exceptions are the United Kingdom, Ireland, Cyprus, and Malta, which use the chunky three-pin Type G plug. Switzerland and Liechtenstein add their own twist with the recessed Type J. Italy officially uses Type L alongside C and F, though most modern Italian outlets accept standard Europlug Type C connectors without trouble. Denmark historically used Type K, but dual-standard K/F sockets are now widespread.",
  keyInsights: [
    "A single Type C/F adapter handles most of mainland Europe — from Lisbon to Helsinki.",
    "The UK, Ireland, Cyprus, and Malta use Type G (three rectangular pins). You'll need a separate adapter for these countries.",
    "Switzerland and Liechtenstein use the unique Type J plug. A Type C Europlug fits Swiss outlets, but a Swiss appliance won't fit a standard European socket.",
    "Italy uses Type L in addition to C/F, but most modern Italian outlets accept the Europlug without an adapter.",
    "Voltage is 230 V across the continent. If your device is rated 100–240 V (most modern electronics), you only need a plug adapter — not a voltage converter.",
  ],
  faqs: [
    {
      question: "Do I need an adapter for traveling within Europe?",
      answer:
        "It depends on which countries you're visiting. Mainland Europe mostly uses Type C/F, so one adapter works across many countries. However, if your trip includes the UK, Ireland, Switzerland, or Italy you may need additional adapters for Type G, Type J, or Type L outlets.",
    },
    {
      question: "Can I use a UK plug in mainland Europe?",
      answer:
        "No. The UK Type G plug has three large rectangular pins and will not fit a European Type C or F outlet. You need a UK-to-Europe adapter (or a universal adapter) to use UK devices on the continent.",
    },
    {
      question:
        "Is the voltage the same across Europe?",
      answer:
        "Yes — virtually all of Europe uses 230 V at 50 Hz. Minor nominal differences (the UK technically specifies 230 V ±10 %) are irrelevant in practice. Any dual-voltage device (100–240 V) will work everywhere with the right plug adapter.",
    },
    {
      question:
        "Will my US phone charger work in Europe with just a plug adapter?",
      answer:
        "Almost certainly yes. Phone chargers, laptop chargers, and most modern electronics are rated 100–240 V, so they handle Europe's 230 V just fine. All you need is a plug adapter to physically fit the outlet — no voltage converter required. Check the fine print on your charger to be sure.",
    },
  ],
  countries: [
    "Albania", "Andorra", "Austria", "Belarus", "Belgium",
    "Bosnia And Herzegovina", "Bulgaria", "Croatia", "Cyprus",
    "Czech Republic", "Denmark", "Estonia", "Finland", "France",
    "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland",
    "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania",
    "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro",
    "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal",
    "Romania", "Russia", "San Marino", "Serbia", "Slovakia",
    "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine",
    "United Kingdom", "Vatican City",
  ],
};

// ─────────────────────────────────────────────
// North America
// ─────────────────────────────────────────────
const northAmerica: RegionConfig = {
  slug: "north-america",
  name: "North America",
  title: "North America Power Plugs & Outlet Types — Complete Guide",
  metaDescription:
    "North America and the Caribbean primarily use Type A and B plugs at 120 V / 60 Hz. See which islands differ and whether you need an adapter.",
  overview:
    "Type A and Type B plugs at 120 V and 60 Hz dominate North America and the Caribbean. The US, Canada, and Mexico all share the same flat-pin system, which means your devices work across borders without an adapter. Most Caribbean island nations follow suit — Bahamas, Jamaica, Dominican Republic, and others use A/B at 120 V. A handful of smaller islands inherited British-style Type G plugs (notably Saint Kitts and Nevis, Dominica, Saint Lucia, Grenada, and Saint Vincent and the Grenadines). Belize is the wildcard: it uses both Type A/B and Type G depending on the building.",
  keyInsights: [
    "The US, Canada, and Mexico all use Type A/B at 120 V / 60 Hz — no adapter needed between them.",
    "Most Caribbean nations also use A/B at 120 V, but several former British territories use Type G (UK-style) plugs.",
    "Belize is a mix — some buildings have US-style outlets, others have British Type G. Bring a universal adapter.",
    "120 V means higher-wattage appliances like hair dryers draw more current than they would on 230 V. If you're bringing a European hair dryer, you'll need a voltage converter — not just a plug adapter.",
    "Grounded Type B outlets (with the round ground pin) are standard in newer construction, but older buildings may only have ungrounded Type A sockets.",
  ],
  faqs: [
    {
      question:
        "Can I use my US devices in Mexico and Canada without an adapter?",
      answer:
        "Yes. Mexico and Canada use the same Type A/B outlets and 120 V / 60 Hz electricity as the United States. Your devices will plug right in.",
    },
    {
      question:
        "Which Caribbean islands need a different plug adapter?",
      answer:
        "Islands with British heritage — including Dominica, Grenada, Saint Kitts and Nevis, Saint Lucia, and Saint Vincent and the Grenadines — use the UK-style Type G plug. You'll need a Type A/B-to-G adapter for these destinations.",
    },
    {
      question:
        "Will my European 230 V hair dryer work in North America?",
      answer:
        "Only if it's dual-voltage (100–240 V). If it's rated for 230 V only, the 120 V supply won't power it properly and you'll get weak performance. A step-up voltage converter would be needed — though it's often easier to buy or borrow a local hair dryer.",
    },
    {
      question:
        "Do I need a grounded (Type B) adapter or is Type A enough?",
      answer:
        "Type A (two flat pins) fits both Type A and Type B outlets. If your device has a ground prong (three pins), it requires a Type B outlet — and you should not defeat the ground pin with a cheap adapter, especially for high-power devices.",
    },
  ],
  countries: [
    "Antigua And Barbuda", "Bahamas", "Barbados", "Belize", "Canada",
    "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador",
    "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico",
    "Nicaragua", "Panama", "Saint Kitts And Nevis", "Saint Lucia",
    "Saint Vincent And Grenadines", "Trinidad And Tobago", "United States",
  ],
};

// ─────────────────────────────────────────────
// South America
// ─────────────────────────────────────────────
const southAmerica: RegionConfig = {
  slug: "south-america",
  name: "South America",
  title: "South America Power Plugs & Outlet Types — Complete Guide",
  metaDescription:
    "South America mixes Type A/B and Type C/F plugs, with voltages ranging from 110 V to 240 V. Country-by-country breakdown and adapter advice.",
  overview:
    "South America is a patchwork of electrical standards — some countries lean toward the North American Type A/B system, others toward the European Type C/F, and Brazil has its own unique Type N. Voltages range from 110 V in Colombia and Venezuela to 220–240 V in Argentina, Chile, and Uruguay. Brazil complicates things further: voltage varies by city (127 V in São Paulo and Rio, 220 V in Brasília and Manaus). A universal adapter and dual-voltage devices are essential for multi-country South American trips.",
  keyInsights: [
    "Brazil uses its own Type N plug and has different voltages depending on the city — 127 V in São Paulo, 220 V in Brasília.",
    "Argentina uses the angled Type I plug (same as Australia/China), unlike its neighbors. Don't assume a shared border means shared outlets.",
    "Colombia, Ecuador, and Venezuela use Type A/B at 110–120 V — familiar to US travelers.",
    "Chile uses Type L (Italian-style) alongside Type C, at 220 V. US travelers need both an adapter and dual-voltage devices.",
    "A universal adapter is the safest choice for a multi-country South American itinerary. No single adapter covers every country.",
  ],
  faqs: [
    {
      question:
        "Do I need a voltage converter for South America?",
      answer:
        "It depends on the country and your device. Colombia, Venezuela, and Ecuador use 110–120 V (similar to the US), so US devices work fine. But Argentina, Chile, Peru, and Uruguay use 220–240 V — if your device isn't dual-voltage (100–240 V), you'll need a converter.",
    },
    {
      question:
        "What adapter works for all of South America?",
      answer:
        "No single adapter covers every country. You'll encounter Type A, B, C, F, I, L, and N across the continent. A quality universal adapter is the only reliable option for a multi-stop trip.",
    },
    {
      question:
        "Can I use my US charger in Brazil?",
      answer:
        "Check the voltage rating on your charger first. Brazil's Type N plug is physically unique, so you need an adapter. More importantly, voltage varies by city — some areas use 127 V (fine for US devices), while others use 220 V (which will damage 120 V-only appliances). Most hotel rooms indicate the local voltage near the outlet.",
    },
    {
      question:
        "Why does Argentina use a different plug from the rest of South America?",
      answer:
        "Argentina adopted the Type I plug (angled flat pins) historically — the same system used in Australia and China. It's an outlier on the continent, where most neighbors use Type A/B or Type C. There's no practical compatibility between Argentine outlets and Brazilian or Chilean ones.",
    },
  ],
  countries: [
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador",
    "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela",
  ],
};

// ─────────────────────────────────────────────
// Asia
// ─────────────────────────────────────────────
const asia: RegionConfig = {
  slug: "asia",
  name: "Asia",
  title: "Asia Power Plugs & Outlet Types — Complete Guide",
  metaDescription:
    "Asia has the widest plug and voltage variety of any continent — from Japan's 100 V Type A to India's multi-type 230 V system. Full guide with every country.",
  overview:
    "Asia has the widest electrical variety of any continent. Japan runs on just 100 V with Type A plugs. China uses Type A and I at 220 V. India employs Types C, D, and M — sometimes all three in the same building. Southeast Asia has largely settled on Type A/B and C at 220–240 V, but older wiring in Cambodia, Laos, and Myanmar can still surprise you. The Middle East mostly follows European-style C/F at 230 V, with a few Gulf states adding Type G (UK). There is no single adapter that neatly covers Asia — research your specific countries before you pack.",
  keyInsights: [
    "Japan is the only country in the world that uses 100 V. Most dual-voltage devices handle it fine, but high-power appliances may underperform.",
    "India uses three different plug types (C, D, and M) at 230 V. Many hotels install universal outlets, but budget guesthouses often have a mix of incompatible sockets.",
    "China officially uses Type I but many hotels and airports install universal multi-standard outlets that accept Type A, C, and G plugs without an adapter.",
    "Southeast Asia (Thailand, Vietnam, Indonesia, Philippines) is mostly Type A/B and C at 220–230 V — US-style plugs often physically fit, but the higher voltage can damage 120 V-only devices.",
    "Israel uses the unique Type H plug, though most modern Israeli outlets also accept Type C.",
  ],
  faqs: [
    {
      question: "Is the voltage the same across all of Asia?",
      answer:
        "Not even close. Japan uses 100 V, Taiwan uses 110 V, and most of the rest of Asia uses 220–240 V. Always check the voltage rating on your devices before plugging in. Most phone and laptop chargers are 100–240 V and work everywhere.",
    },
    {
      question:
        "Can I use a US plug in Southeast Asia without an adapter?",
      answer:
        "Physically, US-style Type A plugs often fit Southeast Asian outlets in Thailand, Vietnam, and the Philippines. But voltage is 220–230 V — double the US standard. If your device isn't dual-voltage, it could be damaged. Always check the label.",
    },
    {
      question:
        "What adapter do I need for Japan?",
      answer:
        "Japan uses Type A (ungrounded, two flat pins) — the same as the US. If your plug has a ground prong (Type B), you'll need a simple adapter or a two-prong workaround. Voltage is 100 V, which is lower than the US 120 V but fine for dual-voltage electronics.",
    },
    {
      question: "Do hotels in China provide universal outlets?",
      answer:
        "Many international hotels and airports in China install universal multi-standard outlets that accept US, European, and UK plugs. But don't count on it everywhere — budget hotels and older buildings typically have Type I outlets only. Carrying a Type I adapter is a safe bet.",
    },
    {
      question:
        "Will my UK plug work in the Middle East?",
      answer:
        "Several Gulf states — including the UAE, Qatar, Bahrain, and Kuwait — use Type G (UK) plugs alongside Type C. Your UK devices will work in these countries without an adapter. Other Middle Eastern countries (Iran, Iraq, Jordan, Lebanon) primarily use Type C/F.",
    },
  ],
  countries: [
    "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh",
    "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "East Timor",
    "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan",
    "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon",
    "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea",
    "Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore",
    "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand",
    "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan",
    "Vietnam", "Yemen",
  ],
};

// ─────────────────────────────────────────────
// Africa
// ─────────────────────────────────────────────
const africa: RegionConfig = {
  slug: "africa",
  name: "Africa",
  title: "Africa Power Plugs & Outlet Types — Complete Guide",
  metaDescription:
    "Africa uses a mix of Type C, D, G, and M plugs depending on colonial history. Voltage is mostly 220–240 V. Country-by-country adapter guide.",
  overview:
    "Africa's electrical landscape is shaped by colonial history. Former French and Belgian colonies across West and Central Africa generally use European-style Type C and E plugs at 220–230 V. Former British colonies in East and Southern Africa lean toward Type G (UK) or the large-pin Type D and M found in South Africa. South Africa itself uses the distinctive Type M (large three-pin round) plug, which is shared by several neighboring countries. North Africa mostly follows the European C/F standard. Power reliability varies widely — surge protectors and portable power banks are as important as the right adapter across much of the continent.",
  keyInsights: [
    "South Africa and neighbors (Botswana, Eswatini, Lesotho, Namibia, Mozambique) use the large Type M plug — you won't find this adapter in most generic 'universal' kits.",
    "Former French colonies (Senegal, Ivory Coast, Cameroon, etc.) typically use Type C/E at 220 V — a standard Europlug adapter works.",
    "Former British colonies in East Africa (Kenya, Uganda, Tanzania) use Type G (UK three-pin) at 240 V.",
    "Power outages are common across the continent. A portable power bank and a small surge protector are just as essential as your adapter.",
    "Ethiopia uses Type C, D, J, and L — up to four plug types in one country. A universal adapter is the only safe choice there.",
  ],
  faqs: [
    {
      question:
        "What adapter do I need for a safari in Southern Africa?",
      answer:
        "For South Africa, Botswana, Namibia, and neighboring countries you need a Type M adapter (large three-round-pin). This is a less common adapter — most 'universal' kits don't include it. Buy one specifically labeled for South Africa before you travel.",
    },
    {
      question:
        "Can I use a European plug in North Africa?",
      answer:
        "Yes, in most cases. Morocco, Tunisia, Algeria, and Egypt use Type C (and sometimes F) at 220–230 V. A standard Europlug adapter works. Egypt also uses some Type F outlets.",
    },
    {
      question:
        "Is the voltage in Africa safe for my electronics?",
      answer:
        "Most of Africa uses 220–240 V at 50 Hz. If your device is dual-voltage (100–240 V, printed on the charger label), it will work with just a plug adapter. If it's rated for 110–120 V only, you need a voltage converter to avoid damage.",
    },
    {
      question:
        "Do hotels in Africa have universal outlets?",
      answer:
        "Some international hotel chains and safari lodges install universal or multi-standard outlets. But it's not reliable enough to skip bringing your own adapter. Always carry the adapter specific to your destination country.",
    },
  ],
  countries: [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros",
    "Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea",
    "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea",
    "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya",
    "Madagascar", "Malawi", "Mali", "Mauritania", "Morocco", "Mozambique",
    "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome And Principe",
    "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa",
    "Sudan", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe",
  ],
};

// ─────────────────────────────────────────────
// Oceania
// ─────────────────────────────────────────────
const oceania: RegionConfig = {
  slug: "oceania",
  name: "Oceania",
  title: "Oceania Power Plugs & Outlet Types — Complete Guide",
  metaDescription:
    "Australia and New Zealand use Type I plugs at 230 V / 50 Hz. Pacific islands vary — some use US-style A/B. Full country-by-country breakdown.",
  overview:
    "Australia and New Zealand anchor the region with Type I plugs at 230 V and 50 Hz — the angled-flat-pin design you'll need for the two most-visited countries in Oceania. Many smaller Pacific island nations also use Type I, inherited from Australasian influence. However, some Pacific islands with US ties — notably Palau, Marshall Islands, and Micronesia — use North American Type A/B at 120 V. Samoa switched from right-hand to left-hand traffic in 2009 and uses a mix of Type I and Type A/B depending on the age of the building. Fiji uses Type I at 240 V. For island-hopping across the Pacific, a universal adapter covers the widest range of possibilities.",
  keyInsights: [
    "Australia and New Zealand both use Type I at 230 V / 50 Hz — one adapter covers both countries.",
    "US-affiliated Pacific islands (Palau, Marshall Islands, Micronesia) use Type A/B at 120 V — the same as the United States.",
    "Fiji, Papua New Guinea, Tonga, and Vanuatu use Type I, consistent with the Australian standard.",
    "Samoa uses both Type I and Type A/B — check with your accommodation in advance.",
    "Power supply on remote Pacific islands can be unreliable. A portable power bank is strongly recommended for trips beyond the main cities.",
  ],
  faqs: [
    {
      question:
        "Do I need the same adapter for Australia and New Zealand?",
      answer:
        "Yes. Both countries use Type I plugs at 230 V / 50 Hz. One adapter works for both. If you're also visiting Fiji, Tonga, or Papua New Guinea, the same Type I adapter applies.",
    },
    {
      question:
        "Can I use a US plug in Pacific island nations?",
      answer:
        "It depends on the island. US-affiliated nations like Palau, Marshall Islands, and Micronesia use Type A/B at 120 V — identical to the US. Most other Pacific islands use Type I (Australian-style). Check your specific destination.",
    },
    {
      question:
        "Will my European devices work in Australia?",
      answer:
        "Voltage is compatible — Australia uses 230 V, same as Europe. But the plug shape is different. You'll need a Type C/F-to-Type I adapter to physically fit Australian outlets. No voltage converter needed for dual-voltage devices.",
    },
    {
      question:
        "Is power reliable across Pacific islands?",
      answer:
        "In Australian and New Zealand cities, absolutely. On remote Pacific islands, power outages and limited generation capacity are common. Carry a power bank, and check whether your accommodation has backup generators.",
    },
  ],
  countries: [
    "Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia",
    "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa",
    "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu",
  ],
};

// ─────────────────────────────────────────────
// Export map
// ─────────────────────────────────────────────
export const REGIONS: Record<string, RegionConfig> = {
  europe,
  "north-america": northAmerica,
  "south-america": southAmerica,
  asia,
  africa,
  oceania,
};

export function getRegion(slug: string): RegionConfig | undefined {
  return REGIONS[slug];
}

/**
 * Convert a country name (e.g. "Bosnia And Herzegovina") to its URL slug
 * (e.g. "bosnia-and-herzegovina").
 */
export function countrySlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

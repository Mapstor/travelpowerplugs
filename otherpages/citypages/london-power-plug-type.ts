import { CountryPlugData } from "@/types";

const data: CountryPlugData = {
  slug: "london-power-plug-type",
  name: "London",
  region: "Europe — City Guide",
  flag: "🇬🇧",
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
    "London uses the British Type G plug at 230V/50Hz. This is different from continental Europe — if you're arriving from France, Germany, or anywhere else on the continent, you need an adapter. The good news: adapters are available everywhere in London, from airport terminals to corner shops.",
  travelContext:
    "London is one of the most visited cities on earth and buying an adapter is trivially easy at any point in your journey — Heathrow alone has dozens of shops selling them. What catches European visitors off guard is that London does not use the same plug as the rest of Europe. The British Type G is unique to the UK, Ireland, and a handful of former colonies.",

  parentCountry: {
    name: "United Kingdom",
    slug: "united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk",
  },

  sections: [
    {
      heading: "What plug does London use?",
      body: "London uses Type G — the British three-pin rectangular plug at 230V/50Hz. This is the standard across the entire UK.\n\nImportant for European travelers: London does not use the same plug as the rest of Europe. Continental Europe uses Type C/F (round two-pin), while the UK uses Type G (rectangular three-pin). You will need an adapter.\n\nFor full details on the UK's electrical system, see our [UK power plug guide](/united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk).",
    },
    {
      heading: "Where to buy an adapter in London",
      body: "Adapters are sold practically everywhere in London. You won't have trouble finding one.\n\n**At the airports:**\n- **Heathrow:** WHSmith and Dixons Travel stores are in every terminal (Terminals 2, 3, 4, and 5). Expect to pay £10–15 for a basic adapter. Available both landside and airside.\n- **Gatwick, Stansted, Luton, City Airport:** Similar shops with slightly smaller selections.\n\n**In central London:**\n- **Argos:** Order online and collect in-store within hours. Multiple central London locations including Tottenham Court Road, Victoria, and Old Street. Often the best combination of price and convenience.\n- **Currys:** Major electronics retailer with stores on Tottenham Court Road and other locations.\n- **Boots and Superdrug:** High-street pharmacies that stock travel adapters near the tills.\n- **Tesco Metro, Sainsbury's Local, M&S Food:** Even small-format supermarkets in central London carry adapters in the travel/electronics aisle.\n\n**Specific locations worth knowing:**\n- **Tottenham Court Road:** London's traditional electronics street. Multiple shops with competitive prices.\n- **Primark (Oxford Street):** Surprisingly stocks cheap adapters (under £5) near the accessories section.\n- **Paddington Station shops:** Useful for travelers arriving on the Heathrow Express who need an adapter immediately.",
    },
    {
      heading: "Hotel district power guide",
      body: "**West End / Mayfair / Covent Garden:** Luxury and upmarket hotels in this area commonly provide adapters at the front desk on request. Newer refurbishments include bedside USB ports.\n\n**King's Cross / Bloomsbury:** A popular mid-range hotel district near major train stations. Most hotels can lend adapters at reception — ask when you check in. If not, there are multiple shops along Euston Road and within King's Cross station.\n\n**South Kensington / Earl's Court:** Another hotel-dense area, particularly popular with international visitors. The area's convenience stores and Boots pharmacies all stock adapters.\n\n**Shoreditch / East London:** Boutique and design hotels in this area often have USB charging ports built into rooms. Standard outlets are Type G throughout.\n\n**Note on shaver sockets:** Nearly all UK hotel bathrooms have a two-pin \"shaver socket\" labeled 110V/230V. This accepts Type C (European) plugs. You can technically charge a phone from it slowly, but it's designed for low-wattage devices like electric shavers and toothbrushes — not hair dryers or laptops.",
    },
    {
      heading: "City-specific tips",
      body: "Some newer Elizabeth Line (Crossrail) trains have USB charging ports under the seats. Availability on other Tube lines is inconsistent — don't count on it.\n\nLondon's power grid is highly reliable. Outages in central London are extremely rare.\n\nIf you're taking the Eurostar to Paris or Brussels, remember that you'll be switching from Type G (UK) to Type C/F (continental Europe) when you arrive. If you have a universal adapter, keep it handy for the other end of the journey.\n\nIf you're visiting Scotland, Wales, or Northern Ireland during your UK trip, the plug type is the same — Type G everywhere in the UK.",
    },
  ],

  faqs: [
    {
      question: "Can I buy a plug adapter at Heathrow Airport?",
      answer:
        "Yes. WHSmith and Dixons Travel stores are in every Heathrow terminal, both before and after security. Adapters cost £10–15. If you'd rather save money, wait until you reach central London where Argos and Primark sell them for under £5.",
    },
    {
      question:
        "Where is the cheapest place to buy an adapter in central London?",
      answer:
        "Primark on Oxford Street sells basic adapters for under £5. Argos offers a good range at reasonable prices with convenient click-and-collect. Poundland and other discount shops occasionally stock them for £1–3. Avoid buying at hotel gift shops or tourist-trap electronics stalls, which mark up significantly.",
    },
    {
      question: "Do London hotels provide power adapters?",
      answer:
        "Many 4-star and 5-star London hotels provide complimentary adapters on request at the front desk. Mid-range hotels often have a limited supply — ask early. Budget hotels and hostels generally don't provide them. Newer hotel refurbishments increasingly include USB ports at the bedside, reducing the need for an adapter altogether.",
    },
    {
      question:
        "Can I charge my phone from a shaver socket in a London hotel bathroom?",
      answer:
        "Technically yes, but it's not ideal. The two-pin shaver socket in UK bathrooms accepts European Type C plugs and runs at a low wattage. It will charge a phone very slowly. It won't power a laptop or hair dryer. Use it only as a last resort — buy a proper Type G adapter instead.",
    },
    {
      question: "Is London the same plug as the rest of Europe?",
      answer:
        "No. This is a common misconception. London (and the entire UK) uses Type G — a three-pin rectangular plug. Continental Europe uses Type C and F — round two-pin plugs. They are completely incompatible. If you're arriving from any European country other than Ireland, Malta, or Cyprus, you need an adapter.",
    },
  ],
};

export default data;

// src/data/plug-types.ts
// All 14 plug type data objects for travelpowerplugs.com

export interface PlugTypeSpec {
  pinCount: number;
  pinShape: string;
  pinDiameter?: string;
  pinSpacing?: string;
  ratedAmps: string;
  maxWatts?: string;
  grounded: boolean;
  voltageRange: string;
}

export interface CompatibilityInfo {
  fitsIntoSockets: string[];
  acceptsPlugTypes: string[];
  crossCompatNotes: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PlugTypeData {
  slug: string;
  letter: string;
  subtitle: string;
  commonName?: string;
  spec: PlugTypeSpec;
  whatIsIt: string;
  historyOrigin: string;
  originCountry: string;
  standardizedYear: string;
  standardName: string;
  compatibility: CompatibilityInfo;
  faqs: FAQ[];
  relatedTypes: string[];
  phasingOutNote?: string;
  uniqueFeature?: string;
  continentGrouping: Record<string, string[]>;
}

export const plugTypes: Record<string, PlugTypeData> = {
  "type-a": {
    slug: "type-a",
    letter: "A",
    subtitle: "US Two-Prong Ungrounded",
    commonName: "NEMA 1-15",
    spec: {
      pinCount: 2,
      pinShape: "Flat parallel blades",
      pinDiameter: "6.35mm wide × 1.52mm thick",
      pinSpacing: "12.7mm center-to-center",
      ratedAmps: "15A",
      maxWatts: "1,800W at 120V",
      grounded: false,
      voltageRange: "100–127V",
    },
    whatIsIt: `The Type A plug has two flat, parallel metal blades — one slightly wider than the other on polarized versions. It's the slimmest, simplest plug design still in active use. You'll recognize it instantly: two thin rectangular prongs sticking straight out, with no third pin and no round shapes anywhere. Americans often call it "the two-prong plug." It's the default for low-power devices like phone chargers, lamps, and radios. The flat blade design makes it compact and easy to insert, but the lack of grounding means it's restricted to devices that don't need earth protection. Polarized versions use one wider blade to ensure the hot and neutral wires connect correctly — a safety upgrade introduced decades after the original design.`,
    historyOrigin: `Harvey Hubbell II patented the first detachable electric plug in 1904 in Bridgeport, Connecticut. Before Hubbell's invention, appliances were hardwired into light sockets — you literally screwed your iron into the ceiling fixture. Hubbell's separable plug-and-socket was revolutionary. The flat-blade design wasn't accidental: flat pins are cheaper to stamp from sheet metal than round pins, which gave American manufacturers a cost advantage. The plug became the NEMA 1-15 standard. Japan adopted a nearly identical design, though Japanese pins are identical in width (unpolarized), and the country runs on both 50Hz and 60Hz — a quirk left over from Tokyo and Osaka importing different generators in the 1890s.`,
    originCountry: "United States",
    standardizedYear: "1904 (patented), NEMA standardized mid-20th century",
    standardName: "NEMA 1-15",
    compatibility: {
      fitsIntoSockets: ["Type A", "Type B"],
      acceptsPlugTypes: ["Type A only"],
      crossCompatNotes:
        "A Type A plug fits into any Type B socket because the B socket simply has an additional ground hole. The reverse is not true — a Type B plug cannot fit into a Type A socket due to the extra ground pin.",
    },
    faqs: [
      {
        question: "Why do US plugs have one wider blade?",
        answer:
          "The wider blade is the neutral conductor. Polarization ensures the hot wire always connects to the correct terminal inside the device, reducing shock risk when a device is switched off but still plugged in. Older Type A plugs had identical blades and could be inserted either way.",
      },
      {
        question: "Can I use a Type A plug in Japan?",
        answer:
          "Yes — Japanese sockets accept Type A plugs. However, Japan uses both 100V/50Hz (eastern regions) and 100V/60Hz (western regions), compared to 120V/60Hz in the US. Most modern electronics handle this automatically, but some older motorized appliances may run slightly slower.",
      },
      {
        question: "Is Type A being phased out?",
        answer:
          "Not entirely, but it's declining. Modern US electrical codes require grounded (Type B) outlets in most locations. Type A persists for double-insulated devices like phone chargers and laptops that don't need a ground connection.",
      },
      {
        question: "Why doesn't the US switch to a safer plug design?",
        answer:
          "Installed base. There are over 300 million Type A and B outlets in US homes. Replacing them would cost billions and require rewiring. Instead, safety has been improved through GFCIs, tamper-resistant outlets, and polarization — all of which work with the existing form factor.",
      },
    ],
    relatedTypes: ["type-b", "type-i"],
    continentGrouping: {
      "North America": ["United States", "Canada", "Mexico"],
      "Central America": [
        "Belize",
        "Costa Rica",
        "El Salvador",
        "Guatemala",
        "Honduras",
        "Nicaragua",
        "Panama",
      ],
      Caribbean: [
        "Bahamas",
        "Barbados",
        "Bermuda",
        "Cayman Islands",
        "Cuba",
        "Dominican Republic",
        "Haiti",
        "Jamaica",
        "Puerto Rico",
        "Trinidad and Tobago",
        "US Virgin Islands",
      ],
      "South America": ["Colombia", "Ecuador", "Venezuela"],
      Asia: ["Japan", "Taiwan", "Philippines"],
    },
  },

  "type-b": {
    slug: "type-b",
    letter: "B",
    subtitle: "US Three-Prong Grounded",
    commonName: "NEMA 5-15",
    spec: {
      pinCount: 3,
      pinShape: "2 flat parallel blades + 1 round ground pin",
      pinDiameter: "6.35mm wide blades; 4.75mm ground pin",
      pinSpacing: "12.7mm between blades",
      ratedAmps: "15A",
      maxWatts: "1,800W at 120V",
      grounded: true,
      voltageRange: "100–127V",
    },
    whatIsIt: `The Type B plug looks like a Type A with an extra round pin below the two flat blades, forming a triangular arrangement. That third pin is the earth ground. It's the standard grounded plug across North America — the one you see on computers, kitchen appliances, and power tools. The ground pin is slightly longer than the blades so it makes contact first when you insert the plug, establishing a safe path to earth before the live connections engage. This is a deliberate safety feature. The plug body is larger than Type A to accommodate the third pin, which is why some people find it bulkier than European designs.`,
    historyOrigin: `Grounding became a concern in the 1920s as electric appliances grew more powerful and metal-cased devices became common. The third pin was added to the Type A design around 1928, creating what we now call Type B. It became formalized as NEMA 5-15 and was gradually required in US building codes starting in the 1960s. The National Electrical Code mandated grounded outlets in all new construction by the 1970s. Today, every new US outlet must be a Type B (or higher-rated variant). The design has remained remarkably stable for nearly a century — proof that sometimes the first adequate solution becomes the permanent one.`,
    originCountry: "United States",
    standardizedYear: "1928 (introduced), 1960s (mandated in code)",
    standardName: "NEMA 5-15",
    compatibility: {
      fitsIntoSockets: ["Type B"],
      acceptsPlugTypes: ["Type A", "Type B"],
      crossCompatNotes:
        "Type A plugs fit into Type B sockets — the ground hole simply remains empty. Type B plugs cannot fit into Type A sockets because the ground pin has nowhere to go. This one-way compatibility was intentional: it lets older ungrounded devices work in modern outlets.",
    },
    faqs: [
      {
        question: "Can I remove the ground pin from a Type B plug?",
        answer:
          "Technically possible but dangerous and illegal in most jurisdictions. The ground pin exists to protect you from electrocution if an appliance develops a fault. Removing it defeats this protection entirely. Use a proper adapter instead.",
      },
      {
        question:
          "What's the difference between NEMA 5-15 and NEMA 5-20?",
        answer:
          "NEMA 5-15 is rated for 15 amps with two parallel flat blades. NEMA 5-20 handles 20 amps and has one blade turned perpendicular. A 5-15 plug fits a 5-20 outlet, but not vice versa — this prevents overloading a 15A circuit.",
      },
      {
        question: "Why is the ground pin round instead of flat?",
        answer:
          "The round shape physically prevents you from inserting the plug upside-down or with the ground pin in a blade slot. It's a form of mechanical keying that ensures correct orientation every time.",
      },
      {
        question:
          "Do I need a voltage converter for Type B devices in Europe?",
        answer:
          "You need both a plug adapter AND a voltage converter (or transformer) unless your device is dual-voltage. Type B runs at 120V; most European countries use 220–240V. Plugging a 120V-only device into 240V will likely destroy it. Check your device's label for '100–240V' — if present, you only need the adapter.",
      },
    ],
    relatedTypes: ["type-a", "type-i"],
    continentGrouping: {
      "North America": ["United States", "Canada", "Mexico"],
      "Central America": [
        "Belize",
        "Costa Rica",
        "El Salvador",
        "Guatemala",
        "Honduras",
        "Nicaragua",
        "Panama",
      ],
      Caribbean: [
        "Bahamas",
        "Bermuda",
        "Cuba",
        "Dominican Republic",
        "Haiti",
        "Jamaica",
        "Puerto Rico",
        "Trinidad and Tobago",
      ],
      "South America": ["Colombia", "Ecuador", "Venezuela"],
      Asia: ["Japan", "Taiwan", "Philippines"],
    },
  },

  "type-c": {
    slug: "type-c",
    letter: "C",
    subtitle: "European Two-Pin Ungrounded",
    commonName: "Europlug",
    spec: {
      pinCount: 2,
      pinShape: "Round",
      pinDiameter: "4.0mm",
      pinSpacing: "19mm center-to-center",
      ratedAmps: "2.5A",
      maxWatts: "575W at 230V",
      grounded: false,
      voltageRange: "220–240V",
    },
    whatIsIt: `The Type C plug — universally known as the Europlug — is the world's most versatile travel companion. Two thin round pins, 4mm in diameter, spaced exactly 19mm apart. The plug body is flat and slim, with slightly flexible pins that can splay outward just enough to grip various socket depths. You'll find it molded onto phone chargers, shavers, and laptop power bricks sold across Europe. It's deliberately limited to 2.5 amps because it has no grounding — this isn't a flaw, it's a design constraint that keeps it small and compatible with the widest possible range of sockets. The Europlug is the closest thing the world has to a universal standard: it physically fits into at least six different socket types across 130+ countries.`,
    historyOrigin: `The Europlug emerged from decades of European frustration. By the mid-20th century, continental Europe had accumulated a patchwork of incompatible grounded plugs — French, German, Italian, Swiss, Danish — each shaped differently. The International Commission on the Rules for the Approval of Electrical Equipment (CEE) published standard CEE 7/16 in 1963 to create a single ungrounded plug that would fit all European socket types. The genius was in the constraints: by limiting the current to 2.5A and omitting grounding, the designers could make the pins thin enough (4mm) and the body flat enough to slide into any European recessed socket. It was never meant for high-power devices — just the everyday small electronics that travelers carry. The standard was updated and absorbed into IEC 60083, and today the Europlug is manufactured by the billions. No single plug type has done more to enable international travel with electronics.`,
    originCountry: "Pan-European standard",
    standardizedYear: "1963 (CEE 7/16)",
    standardName: "CEE 7/16 / IEC 60083",
    compatibility: {
      fitsIntoSockets: [
        "Type C",
        "Type E",
        "Type F",
        "Type H (modern)",
        "Type J",
        "Type K",
        "Type L (10A)",
        "Type N",
      ],
      acceptsPlugTypes: ["Type C only"],
      crossCompatNotes:
        "The Europlug's superpower is fitting into almost every European and many non-European sockets. It slides into French (E), German (F), Swiss (J), Danish (K), Italian 10A (L), and Brazilian (N) sockets. However, it does NOT fit British (G), Australian (I), or American (A/B) sockets. And because Type C sockets are recessed, only Type C plugs fit into dedicated Type C outlets — no larger grounded plugs will work.",
    },
    faqs: [
      {
        question: "Can I use a Type C plug in a Type F (Schuko) socket?",
        answer:
          "Yes. The Europlug slides right into a Schuko socket. The pins are thinner than Schuko pins (4mm vs 4.8mm), so the fit is slightly loose, but it works fine for the low-current devices the Europlug is designed for. You won't have grounding, which is fine for double-insulated devices.",
      },
      {
        question: "Why is the Europlug limited to only 2.5 amps?",
        answer:
          "The thin 4mm pins and lack of grounding set the safety limit. Drawing more than 2.5A through those thin pins would generate excessive heat. High-power appliances like hair dryers and kettles need a grounded plug (Type E, F, or the local standard) with thicker pins rated for 16A.",
      },
      {
        question: "Is the Europlug the same as a Schuko plug?",
        answer:
          "No. The Europlug (Type C) has 4mm pins and is flat, ungrounded, and rated for 2.5A. The Schuko (Type F) has thicker 4.8mm pins, metal grounding clips on the sides, and handles 16A. They look similar at a glance but are different standards for different purposes. A Europlug fits in a Schuko socket, but a Schuko plug does not fit in a Europlug socket.",
      },
      {
        question:
          "Can I use a Europlug in the UK?",
        answer:
          "No. British Type G sockets have a shutter mechanism that requires the longer earth pin to be inserted first before the live holes open. A two-pin Europlug cannot trigger this mechanism. You need a proper UK adapter.",
      },
      {
        question:
          "Is the Europlug safe for charging laptops?",
        answer:
          "Yes, for most laptop chargers. Modern laptop power bricks typically draw 1.5–2A, well within the 2.5A limit. The charger itself handles voltage conversion. Check your charger's label — if it shows '100–240V' input, a Europlug will work anywhere it physically fits.",
      },
    ],
    relatedTypes: ["type-e", "type-f", "type-j", "type-l", "type-n"],
    continentGrouping: {
      Europe: [
        "Albania",
        "Andorra",
        "Armenia",
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia and Herzegovina",
        "Bulgaria",
        "Croatia",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Italy",
        "Kazakhstan",
        "Latvia",
        "Lithuania",
        "Luxembourg",
        "Moldova",
        "Monaco",
        "Montenegro",
        "Netherlands",
        "North Macedonia",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Russia",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
      ],
      "South America": [
        "Argentina",
        "Bolivia",
        "Brazil",
        "Chile",
        "Colombia",
        "Paraguay",
        "Peru",
        "Uruguay",
      ],
      Asia: [
        "Afghanistan",
        "Bangladesh",
        "Cambodia",
        "Indonesia",
        "Iran",
        "Iraq",
        "Israel",
        "Jordan",
        "Laos",
        "Lebanon",
        "Mongolia",
        "Myanmar",
        "Nepal",
        "Pakistan",
        "South Korea",
        "Syria",
        "Thailand",
        "Timor-Leste",
        "Uzbekistan",
        "Vietnam",
      ],
      Africa: [
        "Algeria",
        "Angola",
        "Burkina Faso",
        "Cameroon",
        "Chad",
        "Côte d'Ivoire",
        "Democratic Republic of the Congo",
        "Djibouti",
        "Egypt",
        "Ethiopia",
        "Guinea",
        "Madagascar",
        "Mali",
        "Mauritania",
        "Morocco",
        "Mozambique",
        "Niger",
        "Rwanda",
        "Senegal",
        "Somalia",
        "Sudan",
        "Tunisia",
      ],
      "Middle East": ["Kuwait", "Oman", "Qatar", "Saudi Arabia"],
    },
  },

  "type-d": {
    slug: "type-d",
    letter: "D",
    subtitle: "Old British Round-Pin / Indian Standard",
    commonName: "BS 546 (5A)",
    spec: {
      pinCount: 3,
      pinShape: "Large round pins in triangular pattern",
      pinDiameter: "5.08mm",
      pinSpacing: "19.1mm between live and neutral",
      ratedAmps: "5A",
      maxWatts: "1,150W at 230V",
      grounded: true,
      voltageRange: "220–240V",
    },
    whatIsIt: `Type D is a hefty, three-pin plug with large round pins arranged in a triangle — one earth pin on top, two current-carrying pins below. The pins are noticeably thicker than European standards at 5.08mm. It looks overbuilt by modern standards, and it is: this is a colonial-era British design that has outlived the empire that created it. You'll recognize it by its size — it's bulkier than a Europlug but smaller than the Type M it's related to. In India, it's simply "the plug" — so ubiquitous that Indian-made adapters and power strips are built around it.`,
    historyOrigin: `Type D is the 5-amp version of British Standard BS 546, published in 1934. Britain developed this round-pin plug system for its domestic market before World War II, and it spread throughout the British Empire — India, Pakistan, Sri Lanka, Nepal, and parts of Africa. When Britain itself switched to the rectangular-pin Type G (BS 1363) after 1947, the former colonies kept using Type D. India adopted it as IS 5765 and has never changed. Today, Type D is essentially an Indian standard maintained by the Bureau of Indian Standards. It serves over 1.4 billion people, making it one of the most-used plug types by population despite being relatively unknown outside South Asia.`,
    originCountry: "United Kingdom (now primarily India)",
    standardizedYear: "1934 (BS 546)",
    standardName: "BS 546 (5A) / IS 5765",
    compatibility: {
      fitsIntoSockets: ["Type D", "Type M (sometimes)"],
      acceptsPlugTypes: ["Type D only"],
      crossCompatNotes:
        "Type D plugs sometimes fit into Type M sockets because M is the larger (15A) version of the same BS 546 layout. However, this isn't guaranteed — the pin diameters differ (5.08mm vs 7.06mm), and some Type M sockets have tighter tolerances. No other plug types fit Type D sockets, and Type D doesn't fit any other socket type. The Europlug (Type C) does NOT fit — the pin spacing and diameter are different.",
    },
    faqs: [
      {
        question: "Is Type D the same as Type M?",
        answer:
          "They're siblings, not twins. Both come from British Standard BS 546 and share the same triangular pin layout. Type D is the smaller 5A version (5.08mm pins) while Type M is the larger 15A version (7.06mm pins). A Type D plug can sometimes fit loosely into a Type M socket, but a Type M plug will never fit in a Type D socket.",
      },
      {
        question: "Why does India still use Type D?",
        answer:
          "Scale and cost. India has hundreds of millions of Type D outlets installed. Changing the national standard would require replacing every socket in the country — an impractical expense for a developing economy. The plug works reliably, and India has no strong incentive to switch.",
      },
      {
        question:
          "Can I use a European (Type C) plug in India?",
        answer:
          "Not directly in a Type D socket. The pin diameter and spacing are different. You'll need an adapter. However, many modern Indian buildings install multi-standard sockets or dedicated Europlug outlets alongside Type D, especially in hotels and offices.",
      },
      {
        question: "Is Type D safe by modern standards?",
        answer:
          "It's adequate but not ideal. The grounding works, but Type D lacks features found in newer designs: no shuttered socket openings, no built-in fuses, and partially exposed pins during insertion. India's Bureau of Indian Standards has considered adopting Type N as a future replacement, but no timeline exists.",
      },
    ],
    relatedTypes: ["type-m", "type-g"],
    continentGrouping: {
      "South Asia": ["India", "Nepal", "Sri Lanka", "Pakistan", "Bangladesh"],
      Africa: [
        "Ghana",
        "Kenya",
        "Nigeria",
        "Sudan",
        "Tanzania",
        "Zimbabwe",
      ],
      "Middle East": ["Iraq"],
    },
  },

  "type-e": {
    slug: "type-e",
    letter: "E",
    subtitle: "French Grounded with Socket-Mounted Earth Pin",
    commonName: "CEE 7/5",
    spec: {
      pinCount: 2,
      pinShape: "Round (grounding pin protrudes from socket)",
      pinDiameter: "4.8mm",
      pinSpacing: "19mm center-to-center",
      ratedAmps: "16A",
      maxWatts: "3,680W at 230V",
      grounded: true,
      voltageRange: "220–240V",
    },
    whatIsIt: `Type E looks like a beefier Europlug — two round 4.8mm pins, same 19mm spacing — but with one critical difference: the grounding pin isn't on the plug. Instead, a round metal pin protrudes from the socket itself and fits into a hole in the plug body. This is the French approach to grounding, and it's the opposite of the German Schuko (Type F), which uses spring clips on the sides. You can spot a Type E socket by the single pin sticking up out of the receptacle. The plug has a round hole to receive it. This "female ground on the plug" design means Type E plugs have a visible hole in the face — that's the giveaway.`,
    historyOrigin: `France developed its own grounding standard — CEE 7/5 — rather than adopt the German Schuko. The reasoning was partly technical, partly political. The French design puts the ground pin on the socket, ensuring the earth connection is always present regardless of which plug is inserted. Germany's side-clip approach (Type F) was seen as less reliable by French engineers. The standard became entrenched in France and spread to Belgium, Poland, the Czech Republic, and several francophone African nations. For decades, the Type E / Type F divide split Europe in half. The solution came with the hybrid E/F plug (CEE 7/7), which has both a ground hole (for French sockets) and side ground clips (for German sockets), allowing one plug to work in both systems.`,
    originCountry: "France",
    standardizedYear: "Mid-20th century (CEE 7/5)",
    standardName: "CEE 7/5",
    compatibility: {
      fitsIntoSockets: ["Type E", "Type F (via hybrid CEE 7/7 plug)"],
      acceptsPlugTypes: ["Type C", "Type E", "Type F (hybrid CEE 7/7)"],
      crossCompatNotes:
        "Type C (Europlug) fits into Type E sockets — the ground pin simply enters the empty hole in the Europlug body or sits in the space around it. The hybrid CEE 7/7 plug was designed to bridge the E/F divide: it has both a ground hole and side clips, working in both French and German sockets. A pure Type F plug (with side clips only) can physically fit a Type E socket but won't make a ground connection.",
    },
    faqs: [
      {
        question:
          "What's the difference between Type E and Type F?",
        answer:
          "Both have two 4.8mm round pins at 19mm spacing and handle 16A. The difference is grounding: Type E has a protruding ground pin in the socket that enters a hole in the plug. Type F has spring-loaded ground clips on the sides of the socket that contact metal strips on the plug. Most appliances sold in Europe now use the hybrid CEE 7/7 plug that works with both.",
      },
      {
        question:
          "Can I plug a Type C Europlug into a French Type E socket?",
        answer:
          "Yes. The Europlug's thinner 4mm pins fit the 4.8mm socket holes, and the socket's ground pin either fits into a hole in the plug body or sits harmlessly between the pins. You won't have grounding, but that's fine for low-power double-insulated devices.",
      },
      {
        question: "Why did France choose a different system than Germany?",
        answer:
          "Technical philosophy. French engineers believed a fixed ground pin on the socket was more reliable than Germany's side-clip approach — the pin guarantees ground contact regardless of insertion depth. There was also national pride: post-war France wasn't eager to adopt a German standard.",
      },
      {
        question:
          "Do I need an adapter for French sockets if I have a Schuko plug?",
        answer:
          "If your Schuko plug is a modern hybrid CEE 7/7 (check for a ground hole in the face), it will work in French sockets. If it's a pure Type F with only side clips and no hole, it will physically fit but won't ground properly. Most European appliances manufactured after the 1990s use the hybrid design.",
      },
    ],
    relatedTypes: ["type-f", "type-c"],
    continentGrouping: {
      Europe: [
        "France",
        "Belgium",
        "Poland",
        "Czech Republic",
        "Slovakia",
        "Monaco",
      ],
      Africa: [
        "Benin",
        "Burkina Faso",
        "Cameroon",
        "Central African Republic",
        "Chad",
        "Comoros",
        "Côte d'Ivoire",
        "Democratic Republic of the Congo",
        "Djibouti",
        "Gabon",
        "Guinea",
        "Madagascar",
        "Mali",
        "Mauritania",
        "Morocco",
        "Niger",
        "Republic of the Congo",
        "Senegal",
        "Togo",
        "Tunisia",
      ],
    },
  },

  "type-f": {
    slug: "type-f",
    letter: "F",
    subtitle: "German Schuko with Side Earth Clips",
    commonName: "Schuko (CEE 7/4)",
    spec: {
      pinCount: 2,
      pinShape: "Round (grounding via side clips on socket)",
      pinDiameter: "4.8mm",
      pinSpacing: "19mm center-to-center",
      ratedAmps: "16A",
      maxWatts: "3,680W at 230V",
      grounded: true,
      voltageRange: "220–240V",
    },
    whatIsIt: `The Schuko — short for "Schutzkontakt" (protective contact) — is Europe's workhorse plug. Two round 4.8mm pins carry the current, and grounding happens through metal clips on the top and bottom edges of the plug that contact spring-loaded earth strips inside the recessed socket. The plug is circular in profile with a slightly recessed face, and you can see the two parallel metallic ground strips running along the sides. The socket itself is deeply recessed — the plug sinks in about 18mm, which prevents accidental finger contact with live pins. It's a robust, high-current design: 16 amps, enough for kettles, ovens, and workshop tools.`,
    historyOrigin: `Albert Büttner, a Bavarian manufacturer, patented the Schutzkontakt system in 1926 — making it one of the earliest grounded plug designs in the world. The name means "protective contact," reflecting its purpose: connecting metal appliance housings safely to earth. Germany standardized it as CEE 7/4 (now also DIN 49441). The Schuko spread through central and northern Europe — the Netherlands, Spain, Sweden, Finland, Norway, Austria, Portugal, Greece, Turkey, and beyond. Its deep recess design was ahead of its time for safety, and the side-clip grounding allows the plug to be inserted in either orientation (unlike the French Type E). Today, the Schuko is used in roughly 50 countries, making it the most common grounded plug in Europe.`,
    originCountry: "Germany",
    standardizedYear: "1926 (patent), CEE 7/4 standard",
    standardName: "CEE 7/4 (Schuko) / DIN 49441",
    compatibility: {
      fitsIntoSockets: ["Type F", "Type E (via hybrid CEE 7/7 plug)"],
      acceptsPlugTypes: ["Type C", "Type E (hybrid CEE 7/7)", "Type F"],
      crossCompatNotes:
        "Type C Europlugs fit Schuko sockets easily — the thinner pins work fine, and the recessed socket protects the connection. The hybrid CEE 7/7 plug bridges the French/German divide. A pure Type E plug (with ground hole but no side clips) will physically enter a Schuko socket but won't establish a ground connection through the side clips.",
    },
    faqs: [
      {
        question:
          "What's the difference between Type E and Type F?",
        answer:
          "Grounding method. Type F (Schuko) grounds through metal clips on the sides of the plug that contact spring strips in the socket. Type E (French) grounds through a fixed pin protruding from the socket that enters a hole in the plug. The pins, spacing, and amperage are identical. The hybrid CEE 7/7 plug accommodates both.",
      },
      {
        question: "Why is the Schuko socket recessed?",
        answer:
          "Safety. The 18mm recess ensures that your fingers can't touch the live pins while inserting or removing the plug. It also provides mechanical stability — the plug is gripped firmly in place. This recessed design influenced many subsequent socket standards around the world.",
      },
      {
        question: "Can a Schuko plug be inserted upside-down?",
        answer:
          "Yes, and it works either way. The side-clip grounding is symmetrical — ground strips exist on both sides of the socket, making contact regardless of plug orientation. This reversibility is a key advantage over the French Type E, which has a fixed ground pin position.",
      },
      {
        question:
          "Why do some countries use Schuko and others use French-style?",
        answer:
          "Historical influence. Countries that were in Germany's economic orbit adopted Schuko. Former French colonies and countries with close French trade ties adopted Type E. The hybrid CEE 7/7 plug has largely made this distinction irrelevant for consumers — most appliances sold in continental Europe work with both.",
      },
      {
        question: "Is the Schuko the best plug design?",
        answer:
          "It's among the safest and most robust, but it has downsides: the recessed socket makes it bulkier, the plug body is larger than necessary, and it lacks the built-in fuse of the British Type G. For sheer engineering elegance and versatility, the Schuko is hard to beat — but the British and Brazilian designs each have advantages in specific areas.",
      },
    ],
    relatedTypes: ["type-e", "type-c"],
    continentGrouping: {
      Europe: [
        "Germany",
        "Austria",
        "Netherlands",
        "Spain",
        "Portugal",
        "Sweden",
        "Norway",
        "Finland",
        "Greece",
        "Turkey",
        "Hungary",
        "Romania",
        "Bulgaria",
        "Croatia",
        "Serbia",
        "Bosnia and Herzegovina",
        "Montenegro",
        "North Macedonia",
        "Albania",
        "Iceland",
        "Estonia",
        "Latvia",
        "Lithuania",
        "Luxembourg",
      ],
      Asia: [
        "Indonesia",
        "South Korea",
        "Afghanistan",
        "Iran",
        "Laos",
        "Myanmar",
        "Timor-Leste",
      ],
      Africa: [
        "Angola",
        "Cape Verde",
        "Guinea-Bissau",
        "Mozambique",
        "São Tomé and Príncipe",
      ],
      "South America": ["Bolivia", "Chile", "Paraguay", "Peru", "Uruguay"],
    },
  },

  "type-g": {
    slug: "type-g",
    letter: "G",
    subtitle: "British Fused Rectangular Pin",
    commonName: "BS 1363",
    spec: {
      pinCount: 3,
      pinShape: "Rectangular flat pins in triangular pattern",
      pinDiameter: "6.35mm × 3.18mm (live/neutral), 3.18mm × 8mm (earth)",
      pinSpacing: "22.2mm between live and neutral",
      ratedAmps: "13A (fused: 3A or 13A)",
      maxWatts: "3,000W at 230V",
      grounded: true,
      voltageRange: "220–240V",
    },
    whatIsIt: `The British Type G is the largest, most over-engineered domestic plug in the world — and arguably the safest. Three chunky rectangular pins arranged in a triangle: a long earth pin on top, two shorter live and neutral pins below. Every single plug contains a fuse — a small cartridge inside the plug body that blows if too much current flows, protecting the individual appliance's cable. The socket has shutters: spring-loaded covers over the live and neutral holes that only open when the longer earth pin is pushed in first. This means a child can't poke something into a live hole. The whole assembly is large, heavy, and unmistakable. Stepping on one in bare feet is a famously painful British experience.`,
    historyOrigin: `The story of Type G begins with a shortage. After World War II, copper was scarce in Britain. The existing BS 546 round-pin system (Types D and M) used a dedicated fuse in each circuit's junction box, requiring heavy copper wiring all the way from the consumer unit. In 1947, the Institution of Electrical Engineers published a new wiring standard: ring circuits. Instead of running a separate heavy cable to each outlet, a lighter cable loops around the room in a ring, with each plug carrying its own fuse. This was the birth of BS 1363. The fused plug meant thinner wiring could serve more outlets safely — saving precious copper. The rectangular pin shape was chosen for better contact area and mechanical strength. Shuttered sockets were mandated for child safety. The standard became compulsory for all new British installations and spread throughout the Commonwealth — Singapore, Malaysia, Hong Kong, UAE, Kenya, Nigeria, and about 40 countries in total. Despite frequent mockery for its size, the BS 1363 system is widely regarded by electrical engineers as the safest domestic plug standard ever designed.`,
    originCountry: "United Kingdom",
    standardizedYear: "1947 (BS 1363)",
    standardName: "BS 1363",
    uniqueFeature:
      "Only plug type with a built-in fuse; shuttered sockets for child safety",
    compatibility: {
      fitsIntoSockets: ["Type G only"],
      acceptsPlugTypes: ["Type G only"],
      crossCompatNotes:
        "Type G is an island. Nothing else fits into a British socket — the shutters prevent it. And the large rectangular pins won't fit any other socket type in the world. This is the price of maximum safety: zero cross-compatibility. Every traveler from or to the UK needs an adapter.",
    },
    faqs: [
      {
        question: "Why is the British plug so big?",
        answer:
          "Three reasons: the rectangular pins need space for good contact area, the built-in fuse requires a cartridge holder inside the plug body, and the shuttered socket mechanism demands a longer earth pin to operate. Each feature adds size, but each also adds safety. The alternative — a smaller plug without these features — would be less safe.",
      },
      {
        question:
          "Why does every British plug have a fuse?",
        answer:
          "Britain uses ring circuits: a single cable loops around a room serving multiple outlets. Without per-plug fuses, a fault in one appliance could draw excessive current through thin cable before the circuit breaker trips. The plug fuse protects the individual appliance cable — it's a second line of defense. Most countries use radial circuits with one cable per outlet, which don't need this approach.",
      },
      {
        question:
          "Can I use any device in a UK socket with an adapter?",
        answer:
          "With caution. A plug adapter changes the physical shape but not the voltage. UK sockets deliver 230V. If your device is only rated for 110–120V, you need a voltage converter as well as an adapter. Most modern electronics (laptops, phones) are dual-voltage (100–240V) and only need the adapter.",
      },
      {
        question:
          "Is the British plug really the safest in the world?",
        answer:
          "Most electrical engineers say yes. It has three independent safety features no other domestic plug combines: a built-in fuse to protect the cable, shuttered sockets that prevent foreign objects entering live holes, and insulated pin sleeves that prevent finger contact during insertion. The Danish Type K and Swiss Type J are also safe but lack the fused plug.",
      },
      {
        question:
          "Why doesn't the rest of the world adopt Type G?",
        answer:
          "Cost and installed base. Type G plugs are more expensive to manufacture than simpler designs. And the ring circuit wiring that makes fused plugs necessary is itself a British peculiarity — most countries wire radial circuits where per-plug fuses aren't needed. The safety benefits don't outweigh the cost of replacing billions of existing outlets worldwide.",
      },
      {
        question:
          "What fuse should I use in a Type G plug?",
        answer:
          "Use 3A (red) for appliances under 700W (lamps, radios, phone chargers) and 13A (brown) for appliances up to 3,000W (kettles, heaters, irons). Using too high a fuse defeats the purpose — it won't blow before the cable overheats. Check the appliance's wattage and choose accordingly.",
      },
    ],
    relatedTypes: ["type-d", "type-m"],
    continentGrouping: {
      Europe: ["United Kingdom", "Ireland", "Malta", "Cyprus", "Gibraltar"],
      Asia: [
        "Singapore",
        "Malaysia",
        "Hong Kong",
        "Brunei",
        "Bahrain",
        "Qatar",
        "UAE",
        "Oman",
        "Kuwait",
        "Yemen",
        "Iraq",
        "Myanmar",
        "Sri Lanka",
      ],
      Africa: [
        "Kenya",
        "Nigeria",
        "Ghana",
        "Tanzania",
        "Uganda",
        "Zimbabwe",
        "Zambia",
        "Malawi",
        "Mauritius",
        "Seychelles",
        "Botswana",
        "Cameroon",
        "Gambia",
        "Sierra Leone",
      ],
      Caribbean: ["Bermuda", "Grenada", "Saint Lucia", "Dominica"],
    },
  },

  "type-h": {
    slug: "type-h",
    letter: "H",
    subtitle: "Israeli Three-Pin",
    commonName: "SI 32",
    spec: {
      pinCount: 3,
      pinShape: "Round pins in V pattern (originally flat)",
      pinDiameter: "4.5mm",
      pinSpacing: "19mm between live and neutral",
      ratedAmps: "16A",
      maxWatts: "3,680W at 230V",
      grounded: true,
      voltageRange: "220–240V",
    },
    whatIsIt: `Type H is unique to Israel — the only plug type used exclusively by a single country (and the Palestinian territories). Three round pins arranged in a V or Y shape: two current-carrying pins angled inward with a ground pin centered above them. The current version uses 4.5mm round pins, but if you find an older plug, the live and neutral pins may be flat. Pre-1989 Type H plugs had flat, V-angled blades that looked unlike anything else in the world. The redesign to round pins in 1989 had a practical benefit: modern Type H sockets now accept Type C Europlugs as well.`,
    historyOrigin: `Israel developed its own plug standard — SI 32 — because the country inherited a messy mix of electrical infrastructure from the British Mandate period. Rather than adopt the British BS 1363 or the European standards, Israel's Standards Institution designed a unique plug suited to local conditions. The original design used flat, angled pins — visually distinctive but incompatible with everything else on earth. In 1989, Israel revised SI 32 to use round pins, aligning the dimensions just enough that Type C Europlugs could fit the new sockets. This was a pragmatic concession to the flood of European electronics entering the Israeli market. The unique pin angle remains, though — no other country's plug has pins set at this angle.`,
    originCountry: "Israel",
    standardizedYear: "1950s (SI 32), redesigned 1989",
    standardName: "SI 32",
    compatibility: {
      fitsIntoSockets: ["Type H"],
      acceptsPlugTypes: ["Type C (in modern sockets)", "Type H"],
      crossCompatNotes:
        "Modern Type H sockets (post-1989, round pin version) accept Type C Europlugs. The round pin dimensions are close enough for the Europlug's flexible pins to make contact. However, Type H plugs don't fit any other socket type — the V-angle of the pins is unique. Older flat-pin Type H sockets accept nothing else.",
    },
    faqs: [
      {
        question: "Can I use a Europlug in Israel?",
        answer:
          "In modern sockets, yes. Post-1989 Type H sockets were specifically redesigned to accept Type C Europlugs. If you encounter an older socket with narrow flat-pin slots, you'll need an adapter. Hotels and newer buildings almost always have the modern round-pin sockets.",
      },
      {
        question:
          "Why does Israel have its own unique plug type?",
        answer:
          "Historical circumstances. The British Mandate left mixed electrical infrastructure, and the newly independent Israel chose to create its own standard rather than adopt a foreign one. It's one of several examples (along with Types I and J) of countries designing nationally unique plugs.",
      },
      {
        question:
          "What's the difference between old and new Type H plugs?",
        answer:
          "Old Type H (pre-1989) had flat, V-angled pins — completely unique. New Type H has round 4.5mm pins at the same V-angle. The socket was redesigned to accept both versions as well as Type C Europlugs. If you have old flat-pin appliances, they still work in new sockets.",
      },
      {
        question:
          "Do I need a voltage converter for Israel?",
        answer:
          "Only if your device isn't dual-voltage. Israel uses 230V/50Hz. If your device says '100–240V' on the label, you only need a plug adapter. If it's rated 110–120V only (common with some US appliances), you need both an adapter and a converter.",
      },
    ],
    relatedTypes: ["type-c"],
    continentGrouping: {
      "Middle East": ["Israel", "Palestinian territories"],
    },
  },

  "type-i": {
    slug: "type-i",
    letter: "I",
    subtitle: "Australian/Chinese Angled Flat Pin",
    commonName: "AS/NZS 3112",
    spec: {
      pinCount: 3,
      pinShape: "2 angled flat pins + 1 vertical flat ground pin",
      pinDiameter: "6.35mm × 1.63mm",
      pinSpacing: "13.7mm horizontal between pins",
      ratedAmps: "10A",
      maxWatts: "2,400W at 240V",
      grounded: true,
      voltageRange: "220–240V",
    },
    whatIsIt: `Type I has a distinctive look: two flat pins angled inward to form an inverted V shape, with a vertical ground pin centered below them. It's compact, clearly directional, and can only be inserted one way. The angled pins are the visual giveaway — no other plug type uses this arrangement. You'll find it in Australia, New Zealand, China, and a handful of Pacific Island and South American nations. The 10A rating is lower than European standards but sufficient for the 240V Australian supply. A two-pin version (without ground) exists for double-insulated devices.`,
    historyOrigin: `Australia developed its plug standard in the early 20th century, partly inspired by the American flat-blade design but with pins angled to prevent the plug from being inserted incorrectly. The standard was formalized as AS 3112 (now AS/NZS 3112 with New Zealand) and has been refined several times — most recently adding insulated pin sleeves in 2005 for improved safety. China adopted a compatible standard (GB 2099.1) for one of its socket types, creating an unexpected link between two very different countries' electrical systems. Argentina also uses a similar plug, though its standard (IRAM 2073) has some differences in pin dimensions. The standard's reach across the Pacific Rim and into South America makes it one of the more geographically scattered plug types.`,
    originCountry: "Australia",
    standardizedYear: "Early 20th century, formalized as AS 3112",
    standardName: "AS/NZS 3112",
    compatibility: {
      fitsIntoSockets: ["Type I"],
      acceptsPlugTypes: ["Type I"],
      crossCompatNotes:
        "Type I is largely self-contained. Chinese GB 2099.1 sockets accept Australian plugs, and some Chinese power strips include both Type I and Type A slots. Argentine IRAM 2073 is visually similar but pin dimensions may differ slightly — not all Argentine plugs fit Australian sockets perfectly. No European, American, or British plugs fit Type I sockets.",
    },
    faqs: [
      {
        question: "Can I use Australian plugs in China?",
        answer:
          "Usually yes, for the Type I compatible sockets. China uses multiple socket types (including Type A), and many Chinese outlets are multi-standard designs that accept Australian-style angled flat pins. Check the socket — if it has angled slots, your Australian plug will fit.",
      },
      {
        question: "Are Australian and Argentine plugs the same?",
        answer:
          "Very similar but not identical. Both use angled flat pins, but the Argentine IRAM 2073 standard has slightly different pin dimensions in some variants. Modern plugs from both countries are increasingly interchangeable, but you may encounter older Argentine outlets that are tighter.",
      },
      {
        question: "Why are the pins angled?",
        answer:
          "The angled pins serve as mechanical keying — the plug can only be inserted one way, ensuring the live and neutral connections are always correct. This is a safety feature that flat parallel pins (Type A) lack unless they use polarization with different blade widths.",
      },
      {
        question:
          "Do I need an adapter for New Zealand if I have an Australian plug?",
        answer:
          "No. New Zealand and Australia share the AS/NZS 3112 standard. Both countries use the same plug, the same socket, and the same voltage (230V/50Hz). No adapter needed.",
      },
    ],
    relatedTypes: ["type-a", "type-b"],
    continentGrouping: {
      Oceania: [
        "Australia",
        "New Zealand",
        "Fiji",
        "Papua New Guinea",
        "Samoa",
        "Tonga",
        "Solomon Islands",
      ],
      Asia: ["China", "Myanmar"],
      "South America": ["Argentina", "Uruguay"],
    },
  },

  "type-j": {
    slug: "type-j",
    letter: "J",
    subtitle: "Swiss Three-Pin Offset",
    commonName: "SEV 1011",
    spec: {
      pinCount: 3,
      pinShape: "Round pins, ground pin offset from center line",
      pinDiameter: "4.0mm",
      pinSpacing: "19mm between live and neutral",
      ratedAmps: "10A",
      maxWatts: "2,300W at 230V",
      grounded: true,
      voltageRange: "220–240V",
    },
    whatIsIt: `The Swiss Type J plug is a refined three-pin design where the ground pin is offset — not centered between the live and neutral pins, but displaced to one side, forming an asymmetric triangle. The live and neutral pins are 4.0mm round, same as the Europlug, spaced 19mm apart. The ground pin sits slightly off-center below them. The socket is recessed and hexagonal in shape, one of the more distinctive socket profiles in the world. The offset ground pin means the plug can only be inserted in one orientation, which ensures correct polarity — a safety feature that many other standards lack. It's a compact, elegant design that reflects Swiss precision engineering.`,
    historyOrigin: `Switzerland, true to form, designed its own electrically precise standard rather than adopt a neighbor's system. The SEV 1011 standard (Swiss Electrotechnical Association) has been used since the mid-20th century. Liechtenstein, which shares Switzerland's electrical grid, uses the same plug. Rwanda also adopted Type J — an unexpected connection that traces back to Swiss development aid and electrical infrastructure projects in the country. The offset ground pin is the most distinctive feature: it prevents wrong-polarity insertion while keeping the plug compact enough that the two current-carrying pins remain compatible with Type C sockets. A Schuko (Type F) plug does NOT fit Swiss sockets — the socket recess is too narrow for the wider Schuko body. Switzerland briefly considered adopting a European harmonized standard but ultimately kept its own system.`,
    originCountry: "Switzerland",
    standardizedYear: "Mid-20th century",
    standardName: "SEV 1011",
    compatibility: {
      fitsIntoSockets: ["Type J"],
      acceptsPlugTypes: ["Type C", "Type J"],
      crossCompatNotes:
        "The Europlug (Type C) fits into Swiss Type J sockets — the two 4mm pins align perfectly, and the missing ground pin is simply absent. However, a Type F (Schuko) plug does NOT fit because the Schuko body is too wide for the Swiss socket recess. Swiss plugs don't fit into any non-Swiss socket except via an adapter. This makes Switzerland one of the more adapter-dependent countries for travelers.",
    },
    faqs: [
      {
        question: "Can I use a Europlug in Switzerland?",
        answer:
          "Yes. Type C Europlugs fit Type J sockets perfectly — the 4mm pins and 19mm spacing are identical. You won't have grounding, but that's fine for phone chargers, laptops, and other double-insulated devices. This is the easiest way to charge your electronics in Switzerland.",
      },
      {
        question:
          "Why can't I use a Schuko plug in Switzerland?",
        answer:
          "Swiss sockets have a narrower, hexagonal recess that physically won't accommodate the wider cylindrical body of a Schuko plug. This is a deliberate design choice — the Swiss socket's shape acts as mechanical filtering, accepting only Type C and Type J plugs.",
      },
      {
        question: "Why does Rwanda use Swiss plugs?",
        answer:
          "Swiss development organizations played a significant role in building Rwanda's electrical infrastructure. The country adopted the SEV 1011 standard through these partnerships, making it one of only three places in the world that uses Type J (alongside Switzerland and Liechtenstein).",
      },
      {
        question:
          "Is a Swiss travel adapter easy to find?",
        answer:
          "In Switzerland, yes — hardware stores and airports sell them. Outside Switzerland, they're less common because relatively few travelers think to buy Swiss-specific adapters. A universal travel adapter that includes Type J is the safest bet. Alternatively, just use a Type C Europlug for low-power devices.",
      },
    ],
    relatedTypes: ["type-c", "type-f", "type-n"],
    continentGrouping: {
      Europe: ["Switzerland", "Liechtenstein"],
      Africa: ["Rwanda"],
    },
  },

  "type-k": {
    slug: "type-k",
    letter: "K",
    subtitle: "Danish Three-Pin with Ground on Plug",
    commonName: "DS 60884-2-D1",
    spec: {
      pinCount: 3,
      pinShape: "Round pins, ground pin on the plug (not socket)",
      pinDiameter: "4.8mm",
      pinSpacing: "19mm between live and neutral",
      ratedAmps: "16A",
      maxWatts: "3,680W at 230V",
      grounded: true,
      voltageRange: "220–240V",
    },
    whatIsIt: `Type K is Denmark's national plug — three round pins with a distinctive feature: the ground pin sits on the plug itself, protruding below the two live/neutral pins. This is the opposite of the French Type E, where the ground pin is on the socket. The plug face shows three pins in a triangular arrangement: two 4.8mm current-carrying pins on top, one ground pin below. The socket has a corresponding hole for the ground pin plus two live/neutral holes. The socket design also accommodates Europlugs and, in many cases, French Type E and German Type F plugs through careful dimensional compatibility.`,
    historyOrigin: `Denmark developed its own plug standard in the mid-20th century, choosing to put the ground pin on the plug rather than adopt the French (ground on socket) or German (side clips) approach. The standard — DS 60884-2-D1 — reflects a Scandinavian preference for clean, compact design. Denmark's former territories and trade partners also adopted it: Greenland uses Type K exclusively, and several West African countries — Senegal, Guinea, and Madagascar — use it alongside other standards, a legacy of Danish trade and aid connections. In 2008, Denmark updated the standard to a new "D2" version that includes shuttered sockets and improved child safety, bringing it closer to British safety standards while maintaining the same pin configuration.`,
    originCountry: "Denmark",
    standardizedYear: "Mid-20th century (DS 60884-2-D1)",
    standardName: "DS 60884-2-D1",
    compatibility: {
      fitsIntoSockets: ["Type K"],
      acceptsPlugTypes: ["Type C", "Type E", "Type F", "Type K"],
      crossCompatNotes:
        "Danish Type K sockets are remarkably accommodating. They accept Type C Europlugs (the ground hole just stays empty), and many Type K sockets can accept Type E and F plugs because the pin dimensions are compatible (4.8mm pins, 19mm spacing). Type K plugs, however, only fit Type K sockets — the protruding ground pin won't work in any other standard.",
    },
    faqs: [
      {
        question:
          "Can I use a Schuko (Type F) plug in Denmark?",
        answer:
          "In many cases, yes. Modern Danish Type K sockets are dimensionally compatible with Type F plugs — the 4.8mm pins and 19mm spacing match. The Schuko's side ground clips won't make contact, but the live and neutral connections work. For grounded connections, use a proper Type K plug or adapter.",
      },
      {
        question:
          "Why does Denmark have its own plug type?",
        answer:
          "Like Switzerland (Type J) and Israel (Type H), Denmark designed a national standard rather than adopt a neighbor's. The ground-pin-on-plug approach was seen as more reliable than the French ground-pin-on-socket design. Once established, the installed base made switching impractical.",
      },
      {
        question:
          "Is Denmark switching to a European standard plug?",
        answer:
          "There's been discussion but no concrete plan. The 2008 update to DS 60884-2-D2 modernized safety features while keeping the same pin layout. Denmark's EU membership hasn't forced a plug change — electrical standards remain a national competency. The high compatibility of Type K sockets with European plugs reduces the pressure to switch.",
      },
      {
        question:
          "Do I need a special adapter for Greenland?",
        answer:
          "Greenland uses Type K, same as mainland Denmark. If you have a Danish plug or a Europlug, you're set. A universal travel adapter with European compatibility will also work in most Greenlandic outlets.",
      },
    ],
    relatedTypes: ["type-e", "type-f", "type-c"],
    continentGrouping: {
      Europe: ["Denmark", "Greenland", "Faroe Islands"],
      Africa: ["Senegal", "Guinea", "Madagascar"],
    },
  },

  "type-l": {
    slug: "type-l",
    letter: "L",
    subtitle: "Italian Three-Pin In-Line",
    commonName: "CEI 23-50",
    spec: {
      pinCount: 3,
      pinShape: "Round pins in a straight line",
      pinDiameter: "4.0mm (10A) / 4.8mm (16A)",
      pinSpacing: "5.5mm center-to-center (10A) / 8mm (16A)",
      ratedAmps: "10A and 16A variants",
      maxWatts: "2,300W (10A) / 3,680W (16A) at 230V",
      grounded: true,
      voltageRange: "220–240V",
    },
    whatIsIt: `The Italian Type L is unique among plug types: three round pins arranged in a straight line. No triangle, no offset — just three pins in a row. The center pin is the earth ground, flanked by live and neutral. This linear arrangement gives the plug a slim, narrow profile. The catch: Type L comes in two versions. The 10A variant has thinner 4.0mm pins spaced 5.5mm from center pin to outer pin. The 16A variant has thicker 4.8mm pins spaced 8mm apart. The two versions are physically incompatible with each other — a 16A plug won't fit a 10A socket and vice versa. Italy addressed this problem with the "bipasso" socket, which has overlapping holes that accept both sizes plus Type C Europlugs.`,
    historyOrigin: `Italy developed its own plug standard — CEI 23-50 (Comitato Elettrotecnico Italiano) — because no existing European standard suited Italian preferences. The in-line pin arrangement was chosen for compactness: it allows narrower sockets that take up less wall space. Having two sizes (10A and 16A) was meant to prevent users from plugging heavy appliances into light circuits, but in practice it just confused people and required stocking two types of plugs and sockets. The "bipasso" multi-standard socket emerged as the Italian solution — an elegant kludge that accepts both L variants plus Europlugs through a clever arrangement of oversized and overlapping pin holes. Chile adopted the 10A version of Type L, making Italian-Chilean electrical compatibility an unexpected travel convenience.`,
    originCountry: "Italy",
    standardizedYear: "Mid-20th century",
    standardName: "CEI 23-50",
    compatibility: {
      fitsIntoSockets: ["Type L (matching amperage)"],
      acceptsPlugTypes: [
        "Type C (10A socket only)",
        "Type L (matching amperage)",
      ],
      crossCompatNotes:
        "Type C Europlugs fit the 10A version of Type L sockets because the pin diameter (4mm) and spacing match. They do NOT fit the 16A version — the pin holes are wider apart. The Italian 'bipasso' socket solves this by accepting 10A, 16A, and Europlug pins in a single receptacle. Type L plugs don't fit any non-Italian socket. The 10A and 16A versions don't fit each other's sockets.",
    },
    faqs: [
      {
        question:
          "Why are there two sizes of Italian plugs?",
        answer:
          "The 10A version (4.0mm pins) handles normal household devices up to 2,300W. The 16A version (4.8mm pins) is for heavy-draw appliances like ovens, air conditioners, and washing machines. The size difference prevents plugging a 16A appliance into a 10A-rated circuit. In practice, it's a hassle — which is why the multi-standard 'bipasso' socket was invented.",
      },
      {
        question: "What is a 'bipasso' socket?",
        answer:
          "A bipasso is a multi-standard Italian socket with overlapping holes that accept both 10A and 16A Type L plugs as well as Type C Europlugs. It's become the standard socket in Italian new construction, solving the compatibility headache of having two plug sizes.",
      },
      {
        question:
          "Can I use a Europlug in Italy?",
        answer:
          "Yes — in 10A sockets and bipasso sockets. The Europlug's 4mm pins and 19mm spacing align with the 10A Type L holes. You won't have grounding, but that's fine for chargers and small electronics. If you only have 16A sockets, you'll need an adapter.",
      },
      {
        question:
          "Do Italian plugs work in Chile?",
        answer:
          "The 10A version does. Chile adopted the same CEI 23-50 10A standard, so Italian small-appliance plugs fit Chilean outlets directly. The 16A version is not used in Chile — Chile has its own higher-power solutions.",
      },
    ],
    relatedTypes: ["type-c", "type-n"],
    continentGrouping: {
      Europe: ["Italy", "San Marino"],
      "South America": ["Chile", "Uruguay"],
      Africa: ["Libya", "Eritrea", "Ethiopia"],
      "Middle East": ["Syria"],
    },
  },

  "type-m": {
    slug: "type-m",
    letter: "M",
    subtitle: "South African Large Round-Pin",
    commonName: "BS 546 (15A)",
    spec: {
      pinCount: 3,
      pinShape: "Large round pins in triangular pattern",
      pinDiameter: "7.06mm",
      pinSpacing: "25.4mm between live and neutral",
      ratedAmps: "15A",
      maxWatts: "3,450W at 230V",
      grounded: true,
      voltageRange: "220–240V",
    },
    whatIsIt: `Type M is the big sibling of Type D — same triangular layout of three round pins, but everything is scaled up. The pins are 7.06mm in diameter (vs 5.08mm for Type D), and the spacing is wider at 25.4mm. It's a chunky, heavy-duty plug designed for higher-current applications. In South Africa, it's the standard household plug — you'll find it on everything from table lamps to refrigerators. The large pin size gives a very solid, tight connection but makes the plug noticeably bulkier than European or American designs. The socket is large and often deeply recessed.`,
    historyOrigin: `Type M is the 15-amp version of British Standard BS 546, the same pre-war standard that gave us Type D. While Britain abandoned BS 546 for the fused rectangular BS 1363 (Type G) in 1947, South Africa kept the large round-pin version. It became the de facto standard across southern Africa — Lesotho, Eswatini (Swaziland), Namibia, Botswana, and Mozambique all use it. South Africa is now officially transitioning to Type N (the Brazilian/IEC standard) through its SANS 164-2 regulations, but the installed base of Type M sockets is enormous and the transition will take decades. For now, Type M remains dominant in South African homes and businesses.`,
    originCountry: "United Kingdom (adopted by South Africa)",
    standardizedYear: "1934 (BS 546), adopted in South Africa mid-20th century",
    standardName: "BS 546 (15A) / SANS 164-1",
    phasingOutNote:
      "South Africa is officially transitioning to Type N (SANS 164-2). New installations should use Type N, but Type M remains widely installed and will coexist for decades.",
    compatibility: {
      fitsIntoSockets: ["Type M"],
      acceptsPlugTypes: ["Type D (sometimes)", "Type M"],
      crossCompatNotes:
        "Type D plugs (the smaller 5A version) can sometimes fit into Type M sockets because the pin layout is the same — just smaller. The fit is loose and not always reliable, but it works in a pinch. No other plug types fit Type M sockets. Type M plugs don't fit any other sockets.",
    },
    faqs: [
      {
        question: "Is South Africa really switching to Type N?",
        answer:
          "Yes, SANS 164-2 mandates Type N (IEC 60906-1) for new installations. But with millions of Type M outlets installed, the transition is gradual. Most South African homes still have Type M, and it will remain common for years. New buildings increasingly have both socket types.",
      },
      {
        question: "Can I use a Type D (Indian) plug in a Type M socket?",
        answer:
          "Sometimes. Both share the BS 546 triangular layout, but Type D has thinner pins (5.08mm vs 7.06mm). In some Type M sockets, Type D plugs fit loosely. It's not a reliable connection — the loose fit can cause arcing. Use a proper adapter for safety.",
      },
      {
        question:
          "Why is the Type M plug so big?",
        answer:
          "The 15A rating requires thicker pins for safe current transfer, and the BS 546 design uses generous pin spacing for insulation. It's a 1930s design philosophy — overbuilt and durable. Modern standards achieve similar safety with smaller dimensions, which is why South Africa is transitioning to the more compact Type N.",
      },
      {
        question:
          "Do I need a special adapter for South Africa?",
        answer:
          "Yes. Type M is incompatible with almost every other plug type. A dedicated South African adapter (or a universal adapter that includes Type M) is essential. Some South African hotels provide adapters at reception — ask when you check in.",
      },
    ],
    relatedTypes: ["type-d", "type-n"],
    continentGrouping: {
      Africa: [
        "South Africa",
        "Lesotho",
        "Eswatini",
        "Namibia",
        "Botswana",
        "Mozambique",
      ],
      Asia: ["Hong Kong (some older installations)", "Macau"],
    },
  },

  "type-n": {
    slug: "type-n",
    letter: "N",
    subtitle: "Brazilian / IEC World Standard",
    commonName: "NBR 14136 / IEC 60906-1",
    spec: {
      pinCount: 3,
      pinShape: "Round pins in triangular pattern (ground offset)",
      pinDiameter: "4.0mm (10A) / 4.8mm (20A)",
      pinSpacing: "19mm between live and neutral",
      ratedAmps: "10A / 20A",
      maxWatts: "2,300W (10A) / 4,600W (20A) at 230V",
      grounded: true,
      voltageRange: "100–240V (Brazil uses both 127V and 220V)",
    },
    whatIsIt: `Type N looks deceptively simple: three round pins in a compact triangular arrangement, with the ground pin slightly offset. It comes in two sizes — 10A (4.0mm pins) and 20A (4.8mm pins) — mirroring the Italian approach but with standardized IEC dimensions. The socket is hexagonal and recessed. What makes Type N special isn't its appearance — it's its pedigree. This was supposed to be the plug that unified the world. The International Electrotechnical Commission designed IEC 60906-1 as a universal standard that combined the best features of existing plugs: compact size, grounding, recessed socket safety, and reversibility. Only Brazil and South Africa actually adopted it.`,
    historyOrigin: `The IEC 60906-1 story is a tale of great ambition and limited success. In the 1980s, the International Electrotechnical Commission designed a universal plug standard — one plug to rule them all. It took the best ideas from existing systems: round pins (reliable contact), recessed sockets (finger safety), compact dimensions (less material), and a ground pin (safety). The standard was published and... almost nobody adopted it. Countries with billions of existing outlets had no economic incentive to switch. Brazil became the champion, adapting IEC 60906-1 as NBR 14136 and making it mandatory for new installations in 2007 (fully enforced by 2011). South Africa chose it as SANS 164-2 to replace the aging Type M. The "universal" standard serves exactly two countries — a reminder that standardization requires not just good engineering but political and economic alignment.`,
    originCountry: "International (IEC), adopted by Brazil",
    standardizedYear: "1986 (IEC 60906-1), 2007 (Brazil NBR 14136)",
    standardName: "IEC 60906-1 / NBR 14136 / SANS 164-2",
    compatibility: {
      fitsIntoSockets: ["Type N"],
      acceptsPlugTypes: ["Type C", "Type N"],
      crossCompatNotes:
        "Type C Europlugs fit Type N sockets — the 4mm pin diameter and 19mm spacing are compatible with the 10A version. Type N plugs only fit Type N sockets. Despite being based on an international standard, Type N is NOT compatible with Swiss Type J (socket shape differs), Italian Type L (pin arrangement differs), or any other existing standard. The irony of a 'universal' standard that's incompatible with everything else is not lost on the electrical engineering community.",
    },
    faqs: [
      {
        question:
          "Why was the universal plug standard only adopted by Brazil?",
        answer:
          "Installed base. Every country already had millions of outlets that worked. Switching standards means replacing every socket in every building — an astronomical cost with no immediate benefit to consumers. Brazil was in a unique position: it previously used a chaotic mix of Type A, B, and C plugs with no single standard, making the transition less disruptive. Adopting Type N brought order to chaos.",
      },
      {
        question:
          "Can I use a Europlug in Brazil?",
        answer:
          "In 10A Type N sockets, yes. The pin dimensions match. However, be aware that Brazil uses both 127V and 220V depending on the state and city — not all outlets are the same voltage. Check before plugging in devices that aren't dual-voltage.",
      },
      {
        question:
          "Why does Brazil have two different voltages?",
        answer:
          "Historical accident. Different Brazilian cities and states built their electrical grids at different times, some choosing 127V (inspired by American 120V) and others 220V (following the European model). The government chose not to mandate a single voltage due to the enormous conversion cost. Today, you'll find 127V in São Paulo and Rio de Janeiro, 220V in Brasília and much of the northeast, and sometimes both in the same city.",
      },
      {
        question:
          "Is Type N safer than other plug types?",
        answer:
          "It incorporates many modern safety features: recessed socket, insulated pin sleeves, and a mandatory ground pin. It's comparable in safety to the Schuko (Type F) and arguably more compact. It lacks the individual fuse of the British Type G but doesn't need one — Brazil uses radial circuits, not ring circuits.",
      },
    ],
    relatedTypes: ["type-c", "type-j", "type-m"],
    continentGrouping: {
      "South America": ["Brazil"],
      Africa: ["South Africa (new standard)"],
    },
  },
};

/** Helper: get all plug type slugs for static params */
export function getAllPlugTypeSlugs(): string[] {
  return Object.keys(plugTypes);
}

/** Helper: get plug type data by slug */
export function getPlugTypeBySlug(slug: string): PlugTypeData | undefined {
  return plugTypes[slug];
}

/** Helper: slugify a country name for linking */
export function countrySlug(country: string): string {
  return country
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

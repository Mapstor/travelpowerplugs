// Comprehensive plug type information with history, technical details, and extended content

export const plugTypeDetails = {
  'type-a': {
    history: {
      invented: '1904',
      inventor: 'Harvey Hubbell II',
      country: 'United States',
      story: `The Type A plug was invented by Harvey Hubbell II in 1904, revolutionizing electrical connectivity. Before Hubbell's invention, electrical devices were hardwired into the electrical system, making them permanent fixtures. His "Separable Attachment-Plug" patent created the foundation for modern electrical plugs. The design featured two flat parallel blades that could be easily inserted and removed from a socket, transforming how we interact with electrical devices.

      The original design has remained remarkably unchanged for over a century, testament to its fundamental soundness. During the 1920s and 1930s, Type A plugs became the de facto standard across North America as electrification spread rapidly. The simplicity of the design made it cheap to manufacture and easy to use, contributing to the rapid adoption of electrical appliances in American homes.
      
      Interestingly, Japan adopted the Type A plug in 1915 but with a crucial difference - they use 100V instead of the American 120V. This decision was made for safety reasons, as Japan wanted to minimize electrical accidents during their early electrification period. Today, Type A remains prevalent in over 40 countries, particularly in the Americas and parts of Asia influenced by American electrical standards.`
    },
    technical: {
      standard: 'NEMA 1-15 (ungrounded)',
      iecCode: null,
      dimensions: {
        bladeWidth: '6.35mm',
        bladeThickness: '1.524mm',
        bladeLength: '15.875-18.256mm',
        spacing: '12.7mm'
      },
      materials: 'Brass or bronze blades, thermoplastic body',
      maxPower: '1875W at 125V',
      testVoltage: '2500V for 1 minute',
      insertionForce: '13.3-66.7N',
      temperature: '-25°C to +75°C operating range'
    },
    advantages: [
      'Simple and economical design',
      'Compact size suitable for small devices',
      'Widely available worldwide',
      'Compatible with Type B sockets',
      'Low manufacturing cost'
    ],
    disadvantages: [
      'No grounding protection',
      'Can be inserted reversed (no polarization enforcement)',
      'Blades can bend or break',
      'Can partially fall out of worn sockets',
      'No protection against accidental contact'
    ],
    evolution: `The Type A plug has seen several evolutionary improvements despite maintaining its basic design. In 1928, polarized plugs were introduced with one blade wider than the other to ensure correct insertion orientation, crucial for devices where the live and neutral connections matter.

    The 1960s saw the introduction of hospital-grade plugs with more robust construction and tighter tolerances. Modern Type A plugs often feature partially insulated blades to prevent accidental contact when partially inserted. Some manufacturers now produce tamper-resistant receptacles that require simultaneous insertion of both blades to open safety shutters.`,
    usage: {
      residential: 'Common for small appliances, lamps, and electronics',
      commercial: 'Limited to low-power equipment',
      industrial: 'Rarely used except for portable tools'
    }
  },
  'type-b': {
    history: {
      invented: '1928',
      inventor: 'Philip F. Labre',
      country: 'United States',
      story: `The Type B plug emerged in 1928 when Philip F. Labre, while working for Hubbell, invented the grounding pin addition to the existing Type A design. This innovation came in response to increasing electrical accidents and the need for better safety in electrical appliances. The grounding pin was a revolutionary safety feature that provided a path for fault current to flow to earth rather than through a person.

      The adoption of Type B was gradual but steady throughout the 1930s and 1940s, accelerating after World War II when electrical codes began requiring grounded outlets for certain applications. The National Electrical Code (NEC) in the United States began mandating grounded receptacles in specific locations starting in 1947, beginning with laundry areas and gradually expanding to kitchens, bathrooms, and eventually all areas.

      The design philosophy behind Type B was elegant in its simplicity: the ground pin is longer than the power blades, ensuring it makes contact first when inserting and breaks contact last when removing. This sequence ensures the device is always grounded when power is present. The round shape of the ground pin also prevents it from being inserted into older Type A outlets, enforcing the safety upgrade.`
    },
    technical: {
      standard: 'NEMA 5-15 (grounded)',
      iecCode: null,
      dimensions: {
        bladeWidth: '6.35mm',
        bladeThickness: '1.524mm', 
        bladeLength: '15.875-18.256mm',
        spacing: '12.7mm',
        groundPin: '4.8mm diameter, 19.05mm long'
      },
      materials: 'Brass or bronze blades and pin, thermoplastic or rubber body',
      maxPower: '1875W at 125V',
      testVoltage: '2500V for 1 minute',
      insertionForce: '13.3-111.2N',
      temperature: '-40°C to +75°C operating range'
    },
    advantages: [
      'Grounding protection against electrical shock',
      'Ground pin ensures correct orientation',
      'Backwards compatible (accepts Type A plugs)',
      'Robust construction',
      'Required by code for many applications'
    ],
    disadvantages: [
      'Larger than Type A',
      'Ground pin can break off if mishandled',
      'Not compatible with Type A-only outlets',
      'Still allows partial exposure of live blades',
      'No shutters on standard versions'
    ],
    evolution: `Type B has evolved significantly since 1928. The 1950s saw the introduction of the U-ground configuration where the ground pin faces up, becoming the standard orientation. In 1962, the twist-lock variant (NEMA L5-15) was developed for applications requiring secure connections.

    The 1990s brought tamper-resistant receptacles (TRR) with spring-loaded shutters that require simultaneous insertion of all three prongs. In 2008, the National Electrical Code began requiring TRRs in new residential construction. Modern Type B outlets often include GFCI (Ground Fault Circuit Interrupter) or AFCI (Arc Fault Circuit Interrupter) protection for enhanced safety.

    Recent innovations include USB-integrated outlets, smart outlets with WiFi connectivity, and outlets with built-in surge protection. The fundamental Type B design has proven so successful that it remains the North American standard despite various attempts at introducing alternatives.`,
    usage: {
      residential: 'Standard for all grounded applications',
      commercial: 'Universal in offices and retail spaces',
      industrial: 'Used for portable equipment up to 15A'
    }
  },
  'type-c': {
    history: {
      invented: '1963',
      inventor: 'International Electrotechnical Commission',
      country: 'International Standard',
      story: `The Type C plug, known as the Europlug, represents one of the most successful international standardization efforts in electrical history. Developed by the International Electrotechnical Commission (IEC) in 1963 as CEE 7/16, it was designed to be a universal solution for low-power devices across Europe, addressing the chaos of incompatible national standards that emerged after World War II.

      The design process took over a decade of negotiations between European nations, each protecting their existing electrical infrastructure investments. The breakthrough came when engineers proposed a slim, 2.5-amp limited plug that could fit into virtually any European socket accepting 4.0-4.8mm round contacts with 19mm spacing. This meant it could work in German Schuko, French, Italian, Swiss, Danish, and many other national sockets.

      The Europlug's adoption was remarkably swift. By 1970, most European manufacturers were using it for radios, shavers, and small appliances. The European Union's formation accelerated standardization, and by 1990, the Europlug had become ubiquitous. Today, it's used in over 130 countries, making it the most widely compatible plug design in the world. Its success lies not in being perfect, but in being good enough for everyone - a masterclass in international compromise.`
    },
    technical: {
      standard: 'CEE 7/16 (Europlug)',
      iecCode: 'IEC 60884-1',
      dimensions: {
        pinDiameter: '4.0mm at tip, 4.8mm at base',
        pinLength: '19mm',
        pinSpacing: '18.6mm at tip, 19mm at base',
        bodyWidth: 'Maximum 35.3mm'
      },
      materials: 'Nickel-plated brass pins, thermoplastic body',
      maxPower: '575W at 230V (2.5A limit)',
      testVoltage: '2500V for 1 minute',
      insertionForce: '10-50N',
      temperature: '-25°C to +70°C operating range'
    },
    advantages: [
      'Universal compatibility across Europe',
      'Slim design fits recessed sockets',
      'Partially insulated pins for safety',
      'Flexible pins accommodate socket variations',
      'No live blade exposure when partially inserted'
    ],
    disadvantages: [
      'No grounding capability',
      'Limited to 2.5A (575W at 230V)',
      'Can feel loose in some sockets',
      'Not suitable for high-power devices',
      'Pins can bend under stress'
    ],
    evolution: `The Europlug's evolution reflects European integration. The original 1963 design had straight pins, but the 1990 revision introduced slightly convergent pins (narrower at the tips) to ensure better contact in various socket types. The pins are also flexible, bending up to 5 degrees to accommodate socket variations.

    Modern Europlugs feature partially insulated pins - the first 10mm from the body are insulated, preventing accidental contact when partially inserted. This safety feature became mandatory in 1994. Some manufacturers now produce reinforced versions with thicker pins for frequent insertion/removal cycles.

    The success of Type C influenced the development of the IEC 60906-1 standard (Type N), which aims to be a universal grounded plug. However, the Europlug's installed base is so vast that it will likely remain in use for decades to come.`,
    usage: {
      residential: 'Phone chargers, small electronics, LED lights',
      commercial: 'IT equipment, small appliances',
      industrial: 'Control circuits, instrumentation'
    }
  },
  'type-g': {
    history: {
      invented: '1947',
      inventor: 'British Standards Institution',
      country: 'United Kingdom',
      story: `The Type G plug emerged from tragedy and necessity in post-World War II Britain. During the war, Britain faced a copper shortage, and after the war, the country needed to rebuild its bombed infrastructure efficiently. The Electrical Installation Committee, led by Dame Caroline Haslett, was tasked with creating a new electrical standard that would be safe, use minimal materials, and support Britain's reconstruction.

      The resulting BS 1363 standard, introduced in 1947, was revolutionary. Each plug contained its own fuse, a unique feature that allowed the use of ring circuits - a wiring method that used less copper than traditional radial circuits. This was crucial for post-war Britain, where copper was scarce and expensive. The ring circuit could deliver 30 amps to multiple sockets using thinner wire than would otherwise be required.

      The three rectangular pins were arranged to be incompatible with any existing plug type, forcing a complete infrastructure renewal. The earth pin was made longer and positioned to open safety shutters in the socket, preventing children from inserting objects into live contacts. This design was so advanced that many consider it the safest plug design ever created.

      The plug's adoption was mandated in all new British construction from 1947, and by the 1960s, it had completely replaced older round-pin plugs. Former British colonies largely adopted the standard, making it one of the most widespread plug types globally, used by over 750 million people today.`
    },
    technical: {
      standard: 'BS 1363',
      iecCode: 'Type G per IEC 60083',
      dimensions: {
        livePins: '6.35mm x 4.0mm x 17.7mm',
        earthPin: '8.0mm x 4.0mm x 22.2mm',
        pinSpacing: '22.2mm (live/neutral), 22.2mm to earth',
        fuseSize: '25.4mm x 6.3mm cartridge'
      },
      materials: 'Brass pins (often sleeved), thermoplastic body',
      maxPower: '3120W at 240V (13A fused)',
      testVoltage: '3000V for 1 minute',
      insertionForce: '40-80N',
      temperature: '-5°C to +40°C operating range'
    },
    advantages: [
      'Integrated fuse provides device-specific protection',
      'Safety shutters prevent foreign object insertion',
      'Longer earth pin ensures grounding before power',
      'Partially insulated pins prevent shock',
      'Robust construction resists damage',
      'Cable exits downward reducing strain'
    ],
    disadvantages: [
      'Large and bulky design',
      'Painful if stepped on',
      'Fuse replacement required for faults',
      'Not compatible with any other standard',
      'Expensive to manufacture'
    ],
    evolution: `The Type G plug has seen continuous refinement since 1947. The original design used 15-amp and 5-amp fuses; 3-amp and 13-amp became standard in the 1950s. Pin sleeves (insulation on the live and neutral pins) became mandatory in 1984, preventing accidental contact.

    The 1990s saw the introduction of molded plugs that couldn\'t be opened, improving safety but preventing fuse replacement. Modern variants include USB charging ports, Wi-Fi smart plugs, and timer-controlled versions. Despite various attempts to harmonize with European standards, Britain has retained Type G, with Brexit reinforcing this decision.

    Safety improvements continue: modern sockets have improved shutter mechanisms, and some feature built-in RCD protection. The design has proven so successful that the United Arab Emirates adopted it in 2009, and Saudi Arabia is transitioning to it from 2010 onwards.`,
    usage: {
      residential: 'Universal standard for all applications',
      commercial: 'Required in all installations',
      industrial: 'Used up to 13A single phase requirements'
    }
  },
  'type-d': {
    history: {
      invented: '1915',
      inventor: 'British Standards Institution',
      country: 'United Kingdom/India',
      story: `Type D plugs, officially known as BS 546, originated in the British Empire during the height of colonial expansion. Introduced in 1915, this three-pin round plug became the standard across British territories, from India to South Africa, from Hong Kong to the Middle East. The design featured three round pins in a triangular configuration, with the earth pin being thicker than the live and neutral pins.

      The plug was designed for tropical conditions - the large pins and robust construction could withstand humidity, dust, and temperature extremes better than contemporary alternatives. This made it ideal for the challenging environments of British colonies. The 5-amp version became standard for lighting circuits, while 15-amp variants powered heavier appliances.

      India's relationship with Type D is particularly fascinating. After independence in 1947, while Britain moved to Type G, India retained Type D as its primary standard. This decision was partly economic - replacing millions of existing outlets would have been prohibitively expensive - and partly practical, as the robust design suited India's diverse climate conditions. Today, India represents the largest user base of Type D plugs, with over 1.3 billion people using this "colonial legacy" daily.

      The persistence of Type D in former British territories creates an interesting historical map of the British Empire. Countries still using Type D today include India, Pakistan, Bangladesh, Sri Lanka, Nepal, and parts of Africa - essentially tracing the footprint of British colonial influence in electrical infrastructure.`
    },
    technical: {
      standard: 'BS 546',
      iecCode: 'Type D per IEC 60083',
      dimensions: {
        livePins: '5.08mm diameter x 19.05mm',
        earthPin: '7.06mm diameter x 20.6mm',
        pinSpacing: '19.05mm triangular',
        variants: '5A, 15A, and 30A versions'
      },
      materials: 'Brass pins, bakelite or thermoplastic body',
      maxPower: '1150W at 230V (5A), 3450W (15A)',
      testVoltage: '2000V for 1 minute',
      insertionForce: '30-60N',
      temperature: '-10°C to +55°C operating range'
    },
    advantages: [
      'Robust construction for harsh environments',
      'Good contact pressure with round pins',
      'Earth pin prevents reverse insertion',
      'Works well in high humidity',
      'Simple, reliable design'
    ],
    disadvantages: [
      'No shuttered sockets in standard version',
      'Large size for the current rating',
      'Pins can become loose over time',
      'Not compatible with modern compact devices',
      'Limited to specific former British territories'
    ],
    evolution: `Type D has remained remarkably unchanged since 1915, a testament to its fundamental soundness. India has made some modernizations: shuttered sockets became available in the 1980s, and combination sockets accepting both Type C (Europlug) and Type D became common in the 2000s.

    South Africa used Type D until the 1990s when they began transitioning to Type M (larger version of the same design) and later to Type N. Nepal and Pakistan continue using Type D alongside Type C and Type M. Modern Indian manufacturers produce "universal" sockets that accept Type C, D, and M plugs, reflecting the country's electrical diversity.`,
    usage: {
      residential: 'Standard in India, Nepal, Pakistan',
      commercial: 'Widely used in South Asian businesses',
      industrial: '15A version for machinery'
    }
  },
  'type-e': {
    history: {
      invented: '1959',
      inventor: 'French Standards Committee',
      country: 'France',
      story: `The Type E plug represents France's determination to maintain electrical independence during European integration. Developed in 1959 as French standard NF C 61-314, it was France's answer to the German Schuko plug (Type F). While Germany developed a plug with side clips for grounding, France chose a protruding earth pin in the socket - a seemingly small difference that would affect millions of travelers for decades to come.

      This decision wasn't merely technical; it was deeply political. Post-war Europe saw nations protecting their industrial standards as matters of national pride and economic interest. France had invested heavily in their electrical infrastructure and changing to the German standard would have meant admitting German technical superiority - unthinkable in the political climate of the time.

      The Type E design actually offers some advantages: the earth pin connection is more reliable than side clips, and the recessed socket design provides better protection against accidental contact. French engineers argued their design was superior for safety, particularly in preventing children from touching live contacts.

      Belgium, Poland, Czechia, Slovakia, and several former French colonies adopted Type E, creating a francophone electrical zone. The modern CEE 7/7 plug, which works in both French Type E and German Type F sockets, represents one of the most successful examples of European technical compromise, though pure Type E plugs remain common in France.`
    },
    technical: {
      standard: 'NF C 61-314, CEE 7/5',
      iecCode: 'Type E per IEC 60083',
      dimensions: {
        pins: '4.8mm diameter x 19mm',
        pinSpacing: '19mm',
        earthPin: '4.8mm diameter x 14mm (socket protrusion)',
        recessDepth: '15mm'
      },
      materials: 'Nickel-plated brass pins, thermoplastic body',
      maxPower: '3680W at 230V (16A)',
      testVoltage: '2500V for 1 minute',
      insertionForce: '20-75N',
      temperature: '-25°C to +70°C operating range'
    },
    advantages: [
      'Recessed socket prevents accidental contact',
      'Reliable earth pin connection',
      'Compatible with CEE 7/7 hybrid plugs',
      'Robust 16A capacity',
      'Partially insulated pins on modern versions'
    ],
    disadvantages: [
      'Not compatible with German Type F',
      'Earth pin can break if forced',
      'Requires deep wall boxes',
      'Cannot be used with flat wall-mount devices',
      'Limited international compatibility'
    ],
    evolution: `The evolution of Type E reflects European integration struggles. The 1980s saw the development of the CEE 7/7 plug, which brilliantly works in both French and German sockets by combining side clips with a hole for the French earth pin. This compromise plug is now standard on most appliances sold in Continental Europe.

    Modern French sockets often include safety shutters (introduced in 1991) and some feature built-in USB charging ports. The pure Type E plug (CEE 7/5) is becoming rarer, replaced by the universal CEE 7/7, though millions of Type E sockets remain installed across France and Belgium.`,
    usage: {
      residential: 'Universal in France, Belgium, Poland',
      commercial: 'Standard in French commercial buildings',
      industrial: 'Used for single-phase equipment up to 16A'
    }
  },
  'type-f': {
    history: {
      invented: '1926',
      inventor: 'Albert Büttner',
      country: 'Germany',
      story: `The Type F plug, universally known as "Schuko" (short for Schutzkontakt, meaning "protective contact"), was patented by Albert Büttner in 1926 as "Stecker mit Schutzkontakt". This German innovation introduced a revolutionary grounding system using spring clips on the sides, creating a secure earth connection before the live pins made contact.

      Schuko emerged during the Weimar Republic's industrial boom, when Germany was rapidly electrifying and workplace electrical accidents were common. The design prioritized safety and robustness - the recessed socket prevented accidental contact, while the side clips provided grounding without requiring a third pin. This elegant solution allowed for reversible insertion while maintaining safety.

      The plug's adoption accelerated under the Nazi regime's standardization efforts in the 1930s, ironically making it one of the few positive legacies of that era's industrial policies. Post-WWII, divided Germany maintained Schuko in both East and West, and it spread throughout Central and Eastern Europe, becoming the de facto standard from Portugal to Russia.

      Today, Schuko is used by over 400 million people across Europe. Its success lies in German engineering philosophy: over-engineered for safety, built to last decades, and standardized rigorously. The 16-amp rating (3,680 watts) handles most household appliances, while the robust construction survives industrial use.`
    },
    technical: {
      standard: 'CEE 7/4 (Schuko)',
      iecCode: 'Type F per IEC 60083',
      dimensions: {
        pins: '4.8mm diameter x 19mm',
        pinSpacing: '19mm',
        earthClips: 'Side spring clips, 4mm wide',
        recessDepth: '17.5mm minimum'
      },
      materials: 'Nickel-plated brass pins, spring steel earth clips',
      maxPower: '3680W at 230V (16A)',
      testVoltage: '2500V for 1 minute',
      insertionForce: '20-80N',
      temperature: '-25°C to +70°C operating range'
    },
    advantages: [
      'Robust side clip grounding system',
      'Reversible insertion',
      'Deep recess prevents accidental contact',
      'High 16A current rating',
      'Compatible with CEE 7/7 and Type C plugs',
      'Excellent mechanical strength'
    ],
    disadvantages: [
      'Bulky design requires space',
      'Not compatible with French Type E sockets',
      'Side clips can weaken over time',
      'Expensive to manufacture',
      'Deep wall boxes required'
    ],
    evolution: `Schuko's evolution reflects German industrial perfectionism. The 1970s brought partially insulated pins, preventing shock if touched during insertion. The 1980s saw the CEE 7/7 compromise plug that works in both German and French sockets.

    Modern improvements include shuttered sockets (mandatory in Germany since 1973), sockets with integrated RCD protection, and orientation-specific variants for data-sensitive equipment. Smart Schuko sockets with WiFi control and energy monitoring are now common. Despite EU harmonization attempts, Germany steadfastly maintains Schuko, viewing alternatives as inferior compromises.`,
    usage: {
      residential: 'Universal standard in Germany, Netherlands, Spain',
      commercial: 'Required in all German commercial installations',
      industrial: 'Standard for portable tools and equipment'
    }
  },
  'type-h': {
    history: {
      invented: '1959',
      inventor: 'Israel Standards Institute',
      country: 'Israel',
      story: `Type H is perhaps the most politically symbolic plug in existence. Created in 1959 by the newly established Israel Standards Institute, it represented the young nation's determination to establish independent infrastructure. The unique three-pin configuration - originally flat pins in a V-shape, later changed to round pins - was deliberately incompatible with any other standard, reflecting Israel's geopolitical isolation and self-reliance philosophy.

      The timing wasn\'t coincidental. In 1959, Israel was just 11 years old, surrounded by hostile nations, and couldn\'t rely on neighboring countries for technical standards or equipment. Creating their own plug type meant Israeli electrical equipment wouldn\'t work anywhere else, and vice versa - a form of technical protectionism that secured local manufacturers' market dominance.

      The original flat-pin design proved problematic, causing arcing and overheating. In 1989, Israel redesigned Type H with round pins, maintaining the unique triangular configuration but improving safety. This change required national socket replacement - a massive undertaking that demonstrated Israel's commitment to their independent standard.

      Interestingly, Palestinian territories also use Type H, creating a rare area of Israeli-Palestinian standardization. The plug has become so entrenched that despite globalization pressures, Israel maintains Type H as a matter of national identity, though modern sockets now accept Europlugs (Type C) as a concession to tourism and imported devices.`
    },
    technical: {
      standard: 'SI 32',
      iecCode: 'Type H per IEC 60083',
      dimensions: {
        pins: '4.5mm diameter x 19mm',
        pinSpacing: '19mm triangular',
        groundPin: 'Same dimensions, forms triangle',
        modernVersion: 'Round pins since 1989'
      },
      materials: 'Brass pins, thermoplastic body',
      maxPower: '3680W at 230V (16A)',
      testVoltage: '2500V for 1 minute',
      insertionForce: '20-60N',
      temperature: '-10°C to +50°C operating range'
    },
    advantages: [
      'Compact triangular design',
      'Grounded for safety',
      'Modern sockets accept Type C',
      'Good for hot climates',
      'Unique prevention of incompatible equipment'
    ],
    disadvantages: [
      'Incompatible with all other standards',
      'Limited availability outside Israel',
      'Requires adapters for all imports',
      'Older flat-pin versions problematic',
      'Isolation from international standards'
    ],
    evolution: `Type H's evolution mirrors Israel's journey from isolation to cautious integration. The 1989 round-pin redesign was crucial for safety. In 2007, Israel modified the standard to accept Type C Europlugs, acknowledging global realities while maintaining their unique grounded standard.

    Modern Israeli sockets are dual-standard, accepting both Type H and Type C. Some newer installations include USB ports. Despite recurring proposals to adopt European standards, Type H persists - replacing millions of outlets would cost billions of shekels, and there\'s national pride in maintaining their unique system.`,
    usage: {
      residential: 'Universal in Israel and Palestinian territories',
      commercial: 'Standard in all Israeli buildings',
      industrial: 'Used for all single-phase equipment'
    }
  },
  'type-i': {
    history: {
      invented: '1937',
      inventor: 'Pat O\'Brien (attributed)',
      country: 'Australia',
      story: `The Type I plug tells the story of Australia's unique approach to electrical safety. Developed in 1937 and formalized in 1938 as Australian Standard C112, it features two flat pins arranged in a V-shape with an optional ground pin - a configuration unlike any other global standard. The angled pins were a deliberate safety feature, making it impossible to insert the plug incorrectly and ensuring proper polarity.

      The design\'s originator is disputed, but often attributed to Pat O\'Brien of the New South Wales Electricity Commission. Australia needed a plug that could handle their 240V system safely while being distinct from British standards - a statement of independence from the colonial power. The V-configuration also provided mechanical advantages, creating a more secure connection that wouldn't easily pull out.

      China's adoption of Type I in the 1990s gave this standard its largest user base. As China modernized its electrical infrastructure, they chose the Australian standard for its safety features and 10-amp capacity. Argentina independently developed an almost identical standard, creating an interesting case of convergent evolution in electrical design.

      New Zealand adopted Type I simultaneously with Australia, and the two countries have maintained perfect electrical compatibility ever since. The plug has become so identified with the region that it's often called the "Australian/New Zealand standard" despite its use in China affecting far more people.`
    },
    technical: {
      standard: 'AS/NZS 3112',
      iecCode: 'Type I per IEC 60083',
      dimensions: {
        livePins: '6.5mm x 1.6mm x 17.3mm',
        pinAngle: '30° from vertical (V-shape)',
        groundPin: '8.0mm x 2.8mm x 20mm',
        spacing: '13.7mm between live/neutral'
      },
      materials: 'Brass pins (partially insulated), thermoplastic body',
      maxPower: '2400W at 240V (10A), 3840W (15A variant)',
      testVoltage: '3000V for 1 minute',
      insertionForce: '20-50N',
      temperature: '-10°C to +60°C operating range'
    },
    advantages: [
      'V-shape prevents incorrect insertion',
      'Secure connection resists pulling',
      'Partially insulated pins standard since 2005',
      'Compact design for 10A rating',
      'Safety certified for 240V systems'
    ],
    disadvantages: [
      'Not compatible with any other type',
      'Pins can bend if forced',
      'Ground pin sometimes omitted unsafely',
      'Different Chinese and Australian versions',
      'Requires specific orientation'
    ],
    evolution: `Type I has evolved significantly for safety. Australia mandated partially insulated pins in 2005, with 10mm of insulation preventing finger contact with live metal. New Zealand followed in 2008. Modern Australian sockets include safety shutters, and "extra safe" designs require simultaneous insertion of all pins.

    China\'s version differs slightly - while visually identical, Chinese Type I operates at 220V/50Hz versus Australia's 230V/50Hz, and build quality varies significantly. Argentina uses a wider-spaced variant that\'s incompatible with Australian/Chinese Type I, despite looking similar.

    Smart Type I plugs with app control and energy monitoring are now common in Australia. The standard remains strongly entrenched in all user countries with no serious consideration of change.`,
    usage: {
      residential: 'Universal in Australia, New Zealand, China',
      commercial: 'Standard across all sectors',
      industrial: '15A version for higher power equipment'
    }
  },
  'type-j': {
    history: {
      invented: '1956',
      inventor: 'Swiss Federal Office for Standardization',
      country: 'Switzerland',
      story: `Type J epitomizes Swiss exceptionalism and precision engineering. Introduced in 1956 as SEV 1011, it was Switzerland's response to the emerging European electrical standards. Rather than adopt German Schuko or French standards, the Swiss created their own - a three-pin system with a unique diamond-shaped configuration that\'s incompatible with all other plugs.

      This decision reflected deep Swiss values: neutrality meant not choosing sides between French and German standards, while the compact, efficient design embodied Swiss minimalism. The plug is notably smaller than Schuko while handling the same current - a triumph of engineering efficiency that allows for more sockets in less space.

      The Swiss argued their design was superior: the recessed hexagonal socket prevented finger contact, the offset ground pin ensured correct polarity, and the compact size suited Switzerland's dense urban environments. The fact that it isolated Switzerland electrically was seen as a benefit, not a drawback - maintaining independence was worth the inconvenience.

      Liechtenstein adopted Type J through its customs union with Switzerland, and Rwanda surprisingly uses it due to Swiss development aid in the 1970s that included electrical infrastructure. Despite EU pressure to harmonize, Switzerland maintains Type J as steadfastly as it maintains the Swiss Franc - a symbol of independence that every Swiss citizen interacts with daily.`
    },
    technical: {
      standard: 'SEV 1011 / SN 441011',
      iecCode: 'Type J per IEC 60083',
      dimensions: {
        pins: '4.0mm diameter x 19mm',
        pinSpacing: '19mm between live/neutral',
        groundPin: '4.0mm diameter, offset 5mm',
        hexSocket: 'Often hexagonal shaped'
      },
      materials: 'Nickel-plated brass pins, thermoplastic body',
      maxPower: '2300W at 230V (10A), 3680W (16A T12/T13)',
      testVoltage: '2500V for 1 minute',
      insertionForce: '10-40N',
      temperature: '-25°C to +70°C operating range'
    },
    advantages: [
      'Very compact design',
      'Recessed socket for safety',
      'Diamond pattern ensures correct polarity',
      'Efficient use of wall space',
      'Robust despite small size'
    ],
    disadvantages: [
      'Completely incompatible internationally',
      'Requires adapters for all foreign devices',
      'Limited to 10A in basic version',
      'Expensive for travelers to Switzerland',
      'No compatibility with Europlugs in older sockets'
    ],
    evolution: `Type J evolved through Swiss precision. The original 1956 design was refined in 1986 to accept Europlugs (Type C) - a pragmatic concession to tourism and imported electronics. The T12 variant (16A) was introduced for higher power applications, maintaining the same pin configuration but rated for 3680W.

    Modern Swiss sockets often combine T13 (10A) and T23 (16A) in one unit. Safety shutters became standard in 2016. Despite being surrounded by EU countries using incompatible standards, Switzerland shows no intention of changing - Type J is protected by Swiss building codes and deeply embedded infrastructure.`,
    usage: {
      residential: 'Universal in Switzerland and Liechtenstein',
      commercial: 'Mandatory in Swiss buildings',
      industrial: 'T23 variant for higher power needs'
    }
  },
  'type-k': {
    history: {
      invented: '1947',
      inventor: 'DEMKO (Danish Electrical Standards)',
      country: 'Denmark',
      story: `Type K represents Danish pragmatism meeting Scandinavian safety consciousness. Developed in 1947 by DEMKO (Danmarks Elektriske Materielkontrol), it emerged when Denmark was rebuilding after German occupation. Rather than adopt German standards (politically unpalatable so soon after the war) or British standards (incompatible with Continental voltage), Denmark created its own grounded plug system.

      The design featured three round pins with the ground pin offset - similar to Type F but incompatible, ensuring Danish electrical sovereignty. This wasn't mere nationalism; Denmark argued their design was safer, with the earth pin making contact first and breaking last, and the compact size better suited Danish homes than bulky Schuko plugs.

      Greenland adopted Type K through its connection to Denmark, as did the Faroe Islands. Bangladesh uses it due to Danish development projects in the 1970s-80s that installed Danish electrical systems. Parts of West Africa encountered Type K through Danish aid programs, creating unexpected pockets of Danish electrical standards in developing nations.

      Denmark's 2008 decision to phase out Type K in favor of Type E/F was controversial. While new installations use European standards, millions of Type K sockets remain, and many Danes see their unique plug as part of national identity - hygge extends even to electrical fittings. The transition is slow, with Type K likely to persist for decades.`
    },
    technical: {
      standard: 'DS 60884-2-D1 (formerly DS 107-2-D1)',
      iecCode: 'Type K per IEC 60083',
      dimensions: {
        pins: '4.8mm diameter x 19mm',
        pinSpacing: '19mm between live/neutral',
        groundPin: '4.8mm diameter, offset 13.5mm',
        configuration: 'Similar to Type E but incompatible'
      },
      materials: 'Brass pins, thermoplastic body',
      maxPower: '3680W at 230V (16A)',
      testVoltage: '2500V for 1 minute',
      insertionForce: '20-60N',
      temperature: '-20°C to +60°C operating range'
    },
    advantages: [
      'Compact design for 16A rating',
      'Earth pin configuration ensures safety',
      'Accepts Type C Europlugs',
      'Robust construction',
      'Good for Nordic climate conditions'
    ],
    disadvantages: [
      'Incompatible with Type E/F',
      'Being phased out in Denmark',
      'Limited international compatibility',
      'Requires adapters for most devices',
      'Declining availability of compatible equipment'
    ],
    evolution: `Type K's story is one of gradual obsolescence. While technically sound, EU harmonization pressure led Denmark to adopt Type E/F for new installations from 2008. However, the transition is generational - existing Type K sockets aren't required to be replaced, meaning Danish homes often have both standards.

    Modern Danish sockets are "combo" units accepting Type K, E, F, and C plugs - an expensive but practical solution. Greenland maintains Type K more strictly than Denmark itself, while Bangladesh is gradually transitioning to Type C/D. The phase-out illustrates how even good technical standards can succumb to international harmonization pressures.`,
    usage: {
      residential: 'Legacy standard in Denmark, current in Greenland',
      commercial: 'Being replaced with Type E/F in Denmark',
      industrial: 'Still used for older equipment'
    }
  },
  'type-l': {
    history: {
      invented: '1965',
      inventor: 'CEI (Italian Electrotechnical Committee)',
      country: 'Italy',
      story: `Type L embodies Italian style meeting electrical pragmatism. Standardized in 1965 as CEI 23-16, it features three inline pins - a configuration that Italians argue is more elegant and space-efficient than other European standards. The inline design allows for narrower sockets and plugs, fitting beautifully into Italian architectural aesthetics where wall space is precious.

      Italy's electrical independence wasn't accidental. Post-war Italy was asserting its industrial capability, and creating a national plug standard supported domestic manufacturers while creating a captive market. The Italian electrical industry, centered in Milan and Turin, lobbied successfully against adopting German or French standards, arguing that Italian design and engineering deserved recognition.

      Uniquely, Italy standardized two incompatible versions: 10A (with 4mm pins) for normal use and 16A (with 5mm pins and wider spacing) for high-power appliances. This dual system confuses visitors but makes perfect sense to Italians - why have one solution when you can have two? It reflects Italian philosophy: life is complicated, deal with it.

      San Marino, Vatican City, and parts of North Africa use Type L due to Italian influence. Chile and Uruguay adopted it during waves of Italian immigration, though they've since moved toward Type C. Despite EU pressure, Italy maintains Type L alongside European standards, resulting in Italian homes having multiple socket types - a uniquely Italian solution to European integration.`
    },
    technical: {
      standard: 'CEI 23-16/VII',
      iecCode: 'Type L per IEC 60083',
      dimensions: {
        pins10A: '4.0mm diameter x 19mm, 19mm spacing',
        pins16A: '5.0mm diameter x 19mm, 26mm spacing',
        configuration: 'Three pins in a straight line',
        socket: 'Often bipasso (dual-standard)'
      },
      materials: 'Brass or steel pins, thermoplastic body',
      maxPower: '2300W at 230V (10A), 3680W (16A)',
      testVoltage: '2500V for 1 minute',
      insertionForce: '10-50N',
      temperature: '-5°C to +40°C operating range'
    },
    advantages: [
      'Space-efficient inline design',
      'Two current ratings available',
      'Bipasso sockets accept multiple standards',
      'Aesthetically pleasing slim profile',
      'Modern versions accept Europlugs'
    ],
    disadvantages: [
      'Two incompatible Italian versions',
      'Not compatible with Type E/F',
      'Confusing for international visitors',
      'Center pin can bend easily',
      'Limited availability outside Italy'
    ],
    evolution: `Type L evolution reflects Italian adaptability. The 1990s brought "bipasso" sockets accepting both 10A and 16A Type L plugs. Modern "universal" Italian sockets accept Type L, C, E, and F - an engineering marvel of compatibility that only Italians could design and actually use daily.

    Italy now requires Type F (Schuko) in new installations alongside Type L, creating a transitional period expected to last generations. Italian manufacturers produce elegant designer sockets that handle multiple standards while looking like art pieces - function following form in true Italian style.`,
    usage: {
      residential: 'Still primary in Italian homes',
      commercial: 'Mixed with Type F in new buildings',
      industrial: '16A version for equipment'
    }
  },
  'type-m': {
    history: {
      invented: '1947',
      inventor: 'SABS (South African Bureau of Standards)',
      country: 'South Africa',
      story: `Type M represents South Africa's unique electrical evolution, rooted in British colonial history but adapted for African conditions. Based on the British BS 546 15-amp standard (a larger version of Type D), it was formalized in 1947 as SABS 164-1. The massive 15-amp round pins were designed to handle South Africa's mining equipment and agricultural machinery - this wasn't a domestic plug originally, but an industrial standard that became residential.

      The apartheid era saw Type M become entrenched as South Africa isolated itself from international standards. The plug's incompatibility with the rest of the world mirrors the country's political isolation during this period. Ironically, this isolation protected South African electrical manufacturers, creating a captive market that made several companies very wealthy.

      The plug's robustness suited South African conditions - from the humidity of Durban to the dry heat of the Karoo, from urban Johannesburg to rural farms without stable power. The large pins handle voltage fluctuations better than delicate modern plugs, important in a country with significant infrastructure challenges.

      Post-apartheid South Africa considered adopting international standards, but the cost of replacing millions of sockets proved prohibitive. In 2013, South Africa announced adoption of Type N as the new standard, but Type M remains dominant. Neighboring countries like Namibia, Swaziland (Eswatini), and Lesotho use Type M due to South African influence, creating a southern African electrical zone.`
    },
    technical: {
      standard: 'SANS 164-1 (formerly SABS 164-1)',
      iecCode: 'Type M per IEC 60083',
      dimensions: {
        livePins: '7.05mm diameter x 18.15mm',
        earthPin: '8.7mm diameter x 28.5mm',
        pinSpacing: '25.4mm triangular',
        current: '15A standard'
      },
      materials: 'Brass pins, high-impact thermoplastic',
      maxPower: '3450W at 230V (15A)',
      testVoltage: '3000V for 1 minute',
      insertionForce: '40-100N',
      temperature: '-10°C to +55°C operating range'
    },
    advantages: [
      'Extremely robust construction',
      'Handles 15A without heating',
      'Large pins resist damage',
      'Good for unstable power conditions',
      'Deep insertion provides secure connection'
    ],
    disadvantages: [
      'Bulky and space-consuming',
      'Incompatible globally',
      'Overkill for most domestic appliances',
      'Expensive adapters required',
      'Being phased out for Type N'
    ],
    evolution: `Type M's evolution reflects South Africa's changing politics. The post-apartheid government's 2013 decision to adopt Type N (IEC 60906-1) aimed to align with international standards, but implementation has been slow. New buildings might have Type N, but Type M dominates existing infrastructure.

    Modern South African sockets sometimes combine Type M with Type C (Europlug) compatibility. Load-shedding (rolling blackouts) has made surge-protected Type M plugs popular. The transition to Type N is expected to take 50+ years, making Type M a persistent standard despite official phase-out.`,
    usage: {
      residential: 'Still dominant in South African homes',
      commercial: 'Standard in existing buildings',
      industrial: 'Preferred for high-power equipment'
    }
  },
  'type-n': {
    history: {
      invented: '1986/2007',
      inventor: 'IEC (International Electrotechnical Commission)',
      country: 'Brazil/IEC Standard',
      story: `Type N represents two parallel histories: Brazil's 2001 adoption of their NBR 14136 standard, and the IEC's 1986 publication of IEC 60906-1, intended as a universal international plug standard. These standards are nearly identical, making Brazil the first major country to implement what was supposed to become the global standard.

      Brazil's adoption was born from chaos. By 2000, Brazil had 12 different plug types in use - a legacy of importing electrical standards from various countries. The government mandated a single standard to reduce electrical fires and accidents. They chose a modified version of IEC 60906-1, adding a clever innovation: three pin diameters (4mm for 10A, 4.5mm for 16A, and 4.8mm for 20A) preventing overloading.

      The IEC's vision was grander - IEC 60906-1 was designed as the future universal plug, combining the best features of existing standards. It offered grounding, compact size, shuttered sockets, and no exposed metal during insertion. The IEC hoped all countries would eventually migrate to this standard, ending plug incompatibility forever.

      South Africa became the second major adopter in 2013, seeing Type N as their path to international compatibility. However, global adoption has stalled - established economies won't spend billions replacing functioning infrastructure for marginal improvements. Type N may be technically superior, but it arrived too late in a world with entrenched standards.`
    },
    technical: {
      standard: 'NBR 14136 (Brazil) / IEC 60906-1',
      iecCode: 'Type N per IEC 60083',
      dimensions: {
        pins10A: '4.0mm diameter x 19mm',
        pins20A: '4.8mm diameter x 21mm',
        pinSpacing: '19mm triangular',
        hexPattern: 'Hexagonal pin arrangement'
      },
      materials: 'Brass pins with insulation sleeves',
      maxPower: '2200W (10A), 3520W (20A) at 220V',
      testVoltage: '2500V for 1 minute',
      insertionForce: '10-50N',
      temperature: '-5°C to +40°C operating range'
    },
    advantages: [
      'Designed as universal standard',
      'Multiple current ratings in one design',
      'Mandatory pin insulation',
      'Shuttered sockets standard',
      'Compatible with Type C (Europlug)',
      'No live metal exposed during insertion'
    ],
    disadvantages: [
      'Limited global adoption',
      'Not compatible with any older standard',
      'Multiple pin sizes confuse users',
      'Arrived too late to replace established types',
      'Requires all-new infrastructure'
    ],
    evolution: `Type N's evolution is still being written. Brazil's implementation has been successful - electrical accidents decreased significantly after adoption. The standard continues evolving: Brazil added requirements for surge protection and some sockets include USB ports.

    South Africa\'s adoption is slower, running parallel with existing Type M. The IEC continues promoting 60906-1, but realistic prospects for global adoption have faded. Type N may represent the best plug design, but it also proves that technical superiority doesn\'t guarantee adoption - timing, economics, and politics matter more.`,
    usage: {
      residential: 'Mandatory in Brazil since 2010',
      commercial: 'Standard in new South African buildings',
      industrial: '20A version for equipment'
    }
  },
  'type-o': {
    history: {
      invented: '1989',
      inventor: 'Thai Industrial Standards Institute',
      country: 'Thailand',
      story: `Type O is one of the newest and most unusual plug standards, representing Thailand's attempt to create order from electrical chaos. Introduced in 1989 as TIS 166-2549, it was Thailand's response to having three incompatible plug types in use: American Type A/B, European Type C, and British Type G from various historical influences.

      Rather than choose one standard and force expensive replacements, Thailand created a hybrid socket that accepts Types A, B, and C - but with a twist. Type O added a ground pin to the Type A configuration, creating a grounded version that\'s almost-but-not-quite compatible with Type B. This grounding pin is offset differently than Type B, making Type O unique to Thailand.

      The decision reflected Thai pragmatism (kwam sa-duak sa-baai - convenience and comfort). Instead of forcing citizens to replace all their appliances, the government created a socket accepting existing plugs while encouraging grounded connections for safety. It's a uniquely Thai solution - accommodating everyone while gently pushing toward improvement.

      The standard hasn't spread beyond Thailand, making it one of the most geographically limited plug types. Visitors to Thailand encounter a bewildering array of sockets - some accept Type O only, others are "universal" accepting A, B, C, and O. This flexibility embodies Thai culture: rules exist but flexibility matters more. Despite official standardization, electrical compatibility in Thailand remains delightfully chaotic.`
    },
    technical: {
      standard: 'TIS 166-2549',
      iecCode: 'Not officially recognized by IEC',
      dimensions: {
        flatPins: '6.3mm wide x 15.9-18.3mm',
        groundPin: '4.8mm diameter x 19.1mm',
        pinSpacing: '12.7mm (live/neutral)',
        groundOffset: '11.9mm (differs from Type B)'
      },
      materials: 'Brass pins, thermoplastic body',
      maxPower: '3680W at 230V (16A)',
      testVoltage: '2500V for 1 minute',
      insertionForce: '20-60N',
      temperature: '0°C to +45°C operating range'
    },
    advantages: [
      'Accepts multiple plug types',
      'Grounded version of Type A',
      'Flexible compatibility approach',
      'Suits Thai mixed infrastructure perfectly',
      'Pragmatic transition solution'
    ],
    disadvantages: [
      'Used only in Thailand',
      'Confusing for visitors',
      'Not truly compatible with Type B',
      'Inconsistent implementation',
      'No international recognition'
    ],
    evolution: `Type O continues evolving as Thailand modernizes. Modern Thai "universal" sockets accept A, B, C, and O plugs - an engineering marvel of compatibility. Some upscale hotels install Type G (British) sockets for international guests, adding another standard to the mix.

    Thailand shows no intention of enforcing strict Type O adoption, preferring flexibility. This approach works domestically but creates challenges for manufacturing and tourism. The country effectively has four parallel electrical standards, making Thailand perhaps the world's most electrically diverse nation.`,
    usage: {
      residential: 'Mixed with Types A, B, C in Thai homes',
      commercial: 'Universal sockets common in hotels',
      industrial: 'Various standards depending on equipment origin'
    }
  }
} as const;

export const plugTypeFacts = {
  'type-a': [
    'Used by over 700 million people across the Americas and Japan',
    'The oldest plug design still in widespread use (since 1904)',
    'Japan uses Type A at 100V - the world\'s lowest standard voltage',
    'Can deliver up to 1875 watts of power at 125V',
    'Found in 44 countries across 4 continents'
  ],
  'type-b': [
    'Standard in all new North American construction since 1962',
    'The ground pin is 3mm longer to ensure safety sequencing',
    'Handles 80% of all electrical connections in the United States',
    'Required by code for all kitchen and bathroom outlets',
    'Compatible with over 50 million Type A devices'
  ],
  'type-c': [
    'The most widely compatible plug - works in 130+ countries',
    'Over 2 billion Europlugs are in use worldwide',
    'Fits into 12 different socket types',
    'Limited to 2.5 amps for universal compatibility',
    'The result of 10 years of international negotiations'
  ],
  'type-d': [
    'Used by 1.3+ billion people in India alone',
    'Unchanged design since 1915 - over 100 years old',
    'Standard across former British colonies in South Asia',
    'Designed specifically for tropical and dusty conditions',
    'Three round pins in triangular formation'
  ],
  'type-e': [
    'France\'s answer to German electrical dominance',
    'Earth pin protrudes from the socket, not the plug',
    'Used in France, Belgium, Poland, and Czech Republic',
    'Compatible with modern CEE 7/7 hybrid plugs',
    'Represents French technical independence since 1959'
  ],
  'type-f': [
    'Known as "Schuko" - German for "protective contact"',
    'Used by over 400 million Europeans',
    'Side clips provide grounding before pins make contact',
    'Can handle 3,680 watts at 16 amps',
    'The most robust plug design in Europe'
  ],
  'type-g': [
    'Contains a replaceable fuse in every plug for safety',
    'Considered the world\'s safest plug design by many experts',
    'Used in over 50 countries and territories',
    'Can deliver up to 3120 watts of power',
    'The earth pin opens mechanical safety shutters in the socket'
  ],
  'type-h': [
    'Unique to Israel and Palestinian territories',
    'Redesigned in 1989 from flat to round pins',
    'Deliberately incompatible with all other standards',
    'Symbol of Israeli technical independence',
    'Modern sockets accept both Type H and Type C'
  ],
  'type-i': [
    'Used in Australia, New Zealand, China, and Argentina',
    'Flat pins arranged in distinctive V-shape',
    'China\'s adoption made it the most-used 240V plug',
    'Mandatory pin insulation in Australia since 2005',
    'Handles up to 2400 watts at 10 amps'
  ],
  'type-j': [
    'Exclusive to Switzerland and Liechtenstein',
    'More compact than German Schuko at same power',
    'Diamond-shaped pin configuration',
    'Symbol of Swiss neutrality and independence',
    'Also used in Rwanda due to Swiss development aid'
  ],
  'type-k': [
    'Danish design being phased out since 2008',
    'Similar to but incompatible with Type E',
    'Used in Denmark, Greenland, and Bangladesh',
    'Accepts Type C Europlugs for compatibility',
    'Part of Danish "hygge" cultural identity'
  ],
  'type-l': [
    'Italian design with pins in a straight line',
    'Two versions: 10A and 16A with different spacing',
    'Most space-efficient European grounded plug',
    '"Bipasso" sockets accept both Italian versions',
    'Used in Italy, San Marino, and Vatican City'
  ],
  'type-m': [
    'South Africa\'s heavy-duty 15-amp standard',
    'Largest domestic plug pins in the world',
    'Based on old British BS 546 industrial standard',
    'Handles voltage fluctuations in unstable grids',
    'Being replaced by Type N but will persist for decades'
  ],
  'type-n': [
    'Brazil\'s solution to 12 different plug types',
    'The IEC\'s failed attempt at a universal standard',
    'Three different pin sizes prevent overloading',
    'Newest major plug standard (2001/2007)',
    'Technically superior but adopted too late globally'
  ],
  'type-o': [
    'Thailand\'s unique hybrid standard since 1989',
    'Accepts Types A, B, and C in one socket',
    'Used only in Thailand',
    'Grounded version of Type A but incompatible with Type B',
    'Represents Thai cultural flexibility and pragmatism'
  ]
} as const;

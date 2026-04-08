export interface PlugDescription {
  type: string;
  name: string;
  commonNames: string[];
  description: string;
  technicalSpecs: {
    pins: number;
    pinDiameter?: string;
    pinSpacing?: string;
    voltage: string;
    current: string;
    grounding: boolean;
  };
  usedIn: string[];
  photoAlt: string;
  animationAlt: string;
  seoDescription: string;
}

export const PLUG_DESCRIPTIONS: Record<string, PlugDescription> = {
  'a': {
    type: 'A',
    name: 'Type A - North American/Japanese 2-pin',
    commonNames: ['NEMA 1-15', 'US 2-pin', 'Japanese 2-pin'],
    description: 'Type A electrical plug features two flat parallel blades and is the standard ungrounded plug used in North America, Central America, and Japan. This plug design dates back to 1904 and remains one of the most widely used plug types globally.',
    technicalSpecs: {
      pins: 2,
      pinDiameter: '1.5mm thick',
      pinSpacing: '12.7mm apart',
      voltage: '100-127V',
      current: '15A',
      grounding: false
    },
    usedIn: ['United States', 'Canada', 'Mexico', 'Japan', 'Central America'],
    photoAlt: 'Type A electrical plug and socket showing two flat parallel blades standard in North America',
    animationAlt: 'Animation demonstrating Type A plug insertion into socket with two flat parallel blades',
    seoDescription: 'Type A plug (NEMA 1-15) with two flat parallel blades, used in USA, Canada, Mexico, and Japan. Rated for 100-127V, 15A, no grounding pin.'
  },
  'b': {
    type: 'B',
    name: 'Type B - North American/Japanese 3-pin grounded',
    commonNames: ['NEMA 5-15', 'US 3-pin', 'Grounded US plug'],
    description: 'Type B electrical plug is the grounded version of Type A, featuring two flat parallel blades plus a round grounding pin. This three-prong plug provides additional safety through its ground connection and is the standard grounded plug in North America.',
    technicalSpecs: {
      pins: 3,
      pinDiameter: '4.8mm ground pin',
      pinSpacing: '12.7mm blade spacing',
      voltage: '100-127V',
      current: '15A',
      grounding: true
    },
    usedIn: ['United States', 'Canada', 'Mexico', 'Japan', 'Central America'],
    photoAlt: 'Type B electrical plug and socket with two flat blades and round grounding pin used in North America',
    animationAlt: 'Animation showing Type B three-prong plug with ground pin inserting into North American outlet',
    seoDescription: 'Type B plug (NEMA 5-15) with two flat blades and round ground pin. Standard grounded plug in USA, Canada, Mexico. Rated 100-127V, 15A.'
  },
  'c': {
    type: 'C',
    name: 'Type C - Europlug',
    commonNames: ['Europlug', 'CEE 7/16', 'Euro 2-pin'],
    description: 'Type C Europlug is the most widely used international plug type, featuring two round pins. This ungrounded plug is designed for devices requiring 2.5 amps or less and fits in any socket that accepts 4.0-4.8mm round pin plugs with 19mm spacing.',
    technicalSpecs: {
      pins: 2,
      pinDiameter: '4.0-4.8mm',
      pinSpacing: '19mm apart',
      voltage: '220-240V',
      current: '2.5A',
      grounding: false
    },
    usedIn: ['Europe', 'South America', 'Asia', 'Africa'],
    photoAlt: 'Type C Europlug with two round pins, the most common plug type used across Europe and internationally',
    animationAlt: 'Animation displaying Type C Europlug with two round pins entering European socket',
    seoDescription: 'Type C Europlug (CEE 7/16) with two round 4mm pins, 19mm spacing. Most widely used plug internationally. Rated 220-240V, 2.5A, ungrounded.'
  },
  'd': {
    type: 'D',
    name: 'Type D - India 5A',
    commonNames: ['BS 546 5A', 'Indian 5A', 'Small Indian plug'],
    description: 'Type D electrical plug features three large round pins in a triangular pattern and is primarily used in India and Nepal. Originally defined in British Standard BS 546, this 5-amp plug is used for smaller appliances and lighting.',
    technicalSpecs: {
      pins: 3,
      pinDiameter: '5.08mm',
      pinSpacing: 'Triangular pattern',
      voltage: '220-240V',
      current: '5A',
      grounding: true
    },
    usedIn: ['India', 'Nepal', 'Sri Lanka', 'Namibia', 'Myanmar'],
    photoAlt: 'Type D electrical plug showing three round pins in triangular configuration used in India',
    animationAlt: 'Animation of Type D plug with three round pins in triangle pattern inserting into Indian socket',
    seoDescription: 'Type D plug (BS 546 5A) with three round 5mm pins in triangular pattern. Standard in India, Nepal. Rated 220-240V, 5A, with ground pin.'
  },
  'e': {
    type: 'E',
    name: 'Type E - French',
    commonNames: ['French plug', 'CEE 7/5', 'French standard'],
    description: 'Type E electrical plug is the French standard featuring two round pins plus a hole for the socket\'s protruding male grounding pin. This design provides reliable grounding through a pin that emerges from the socket rather than the plug.',
    technicalSpecs: {
      pins: 2,
      pinDiameter: '4.8mm',
      pinSpacing: '19mm apart',
      voltage: '220-240V',
      current: '16A',
      grounding: true
    },
    usedIn: ['France', 'Belgium', 'Poland', 'Slovakia', 'Czech Republic', 'Tunisia'],
    photoAlt: 'Type E French electrical plug with two round pins and hole for socket ground pin',
    animationAlt: 'Animation showing Type E French plug with ground pin hole connecting to protruding socket pin',
    seoDescription: 'Type E plug (CEE 7/5) French standard with two 4.8mm pins and ground pin hole. Used in France, Belgium, Poland. Rated 220-240V, 16A.'
  },
  'f': {
    type: 'F',
    name: 'Type F - Schuko',
    commonNames: ['Schuko', 'CEE 7/4', 'German plug'],
    description: 'Type F Schuko (short for Schutzkontakt, German for "protective contact") features two round pins with ground clips on the sides. This robust plug design is the standard in Germany and much of Europe, providing reliable grounding through side contacts.',
    technicalSpecs: {
      pins: 2,
      pinDiameter: '4.8mm',
      pinSpacing: '19mm apart',
      voltage: '220-240V',
      current: '16A',
      grounding: true
    },
    usedIn: ['Germany', 'Austria', 'Netherlands', 'Spain', 'Portugal', 'Eastern Europe'],
    photoAlt: 'Type F Schuko plug with two round pins and side grounding clips used in Germany and Europe',
    animationAlt: 'Animation demonstrating Type F Schuko plug with side ground clips entering German socket',
    seoDescription: 'Type F Schuko plug (CEE 7/4) with two 4.8mm pins and side ground clips. Standard in Germany, Austria. Rated 220-240V, 16A, grounded.'
  },
  'g': {
    type: 'G',
    name: 'Type G - British',
    commonNames: ['BS 1363', 'UK 3-pin', 'British Standard'],
    description: 'Type G electrical plug is the British standard featuring three rectangular blades in a triangular pattern. Considered one of the safest plug designs, it includes a fuse in the plug itself and shuttered sockets for additional protection.',
    technicalSpecs: {
      pins: 3,
      pinDiameter: 'Rectangular blades',
      pinSpacing: 'Triangular pattern',
      voltage: '230V',
      current: '13A',
      grounding: true
    },
    usedIn: ['United Kingdom', 'Ireland', 'Malta', 'Malaysia', 'Singapore', 'Hong Kong'],
    photoAlt: 'Type G British plug with three rectangular blades in triangular arrangement and built-in fuse',
    animationAlt: 'Animation of Type G UK plug with three rectangular pins and fuse inserting into British socket',
    seoDescription: 'Type G plug (BS 1363) British standard with three rectangular blades and fuse. Used in UK, Ireland, Singapore. Rated 230V, 13A, grounded.'
  },
  'h': {
    type: 'H',
    name: 'Type H - Israeli',
    commonNames: ['SI 32', 'Israeli 3-pin', 'Israel standard'],
    description: 'Type H electrical plug is unique to Israel, featuring three round pins in a Y-shaped configuration. Modern versions have wider pins to accommodate both old flat-pin and new round-pin sockets, making them backwards compatible.',
    technicalSpecs: {
      pins: 3,
      pinDiameter: '4mm',
      pinSpacing: 'Y-configuration',
      voltage: '230V',
      current: '16A',
      grounding: true
    },
    usedIn: ['Israel', 'Palestine', 'Gaza Strip', 'West Bank'],
    photoAlt: 'Type H Israeli plug showing three pins in unique Y-shaped configuration',
    animationAlt: 'Animation displaying Type H Israeli plug with Y-shaped pin arrangement entering socket',
    seoDescription: 'Type H plug (SI 32) Israeli standard with three pins in Y-configuration. Unique to Israel and Palestine. Rated 230V, 16A, grounded.'
  },
  'i': {
    type: 'I',
    name: 'Type I - Australian/Chinese',
    commonNames: ['AS/NZS 3112', 'Australian plug', 'Chinese 3-pin'],
    description: 'Type I electrical plug features three flat blades, with two angled blades forming an inverted V-shape and a vertical grounding blade. This design is standard in Australia, New Zealand, China, and Argentina, offering secure connection and safety.',
    technicalSpecs: {
      pins: 3,
      pinDiameter: 'Flat blades',
      pinSpacing: 'Angled configuration',
      voltage: '220-240V',
      current: '10A',
      grounding: true
    },
    usedIn: ['Australia', 'New Zealand', 'China', 'Argentina', 'Fiji'],
    photoAlt: 'Type I Australian plug with three flat blades, two angled and one vertical ground pin',
    animationAlt: 'Animation showing Type I Australian/Chinese plug with angled flat blades inserting into socket',
    seoDescription: 'Type I plug (AS/NZS 3112) with three flat blades in angled configuration. Used in Australia, New Zealand, China. Rated 220-240V, 10A.'
  },
  'j': {
    type: 'J',
    name: 'Type J - Swiss',
    commonNames: ['SEV 1011', 'Swiss 3-pin', 'Switzerland plug'],
    description: 'Type J electrical plug is unique to Switzerland, featuring three round pins with the ground pin offset. Similar to Type C but with an additional grounding pin, this plug is incompatible with other European standards despite similar pin diameter.',
    technicalSpecs: {
      pins: 3,
      pinDiameter: '4mm',
      pinSpacing: '19mm + offset ground',
      voltage: '230V',
      current: '10A',
      grounding: true
    },
    usedIn: ['Switzerland', 'Liechtenstein', 'Rwanda'],
    photoAlt: 'Type J Swiss plug with three round pins including offset ground pin unique to Switzerland',
    animationAlt: 'Animation of Type J Swiss plug with distinctive offset ground pin configuration',
    seoDescription: 'Type J plug (SEV 1011) Swiss standard with three round pins and offset ground. Unique to Switzerland. Rated 230V, 10A, grounded.'
  },
  'k': {
    type: 'K',
    name: 'Type K - Danish',
    commonNames: ['DS 60884-2-D1', 'Danish 3-pin', 'Denmark plug'],
    description: 'Type K electrical plug is the Danish standard featuring two round pins with a D-shaped ground pin. This design is similar to Type F but with a different grounding system, used primarily in Denmark and Greenland.',
    technicalSpecs: {
      pins: 3,
      pinDiameter: '4.8mm',
      pinSpacing: '19mm + ground',
      voltage: '230V',
      current: '16A',
      grounding: true
    },
    usedIn: ['Denmark', 'Greenland', 'Faroe Islands'],
    photoAlt: 'Type K Danish plug with two round pins and D-shaped ground pin used in Denmark',
    animationAlt: 'Animation showing Type K Danish plug with distinctive D-shaped ground pin',
    seoDescription: 'Type K plug (DS 60884-2-D1) Danish standard with round pins and D-shaped ground. Used in Denmark, Greenland. Rated 230V, 16A.'
  },
  'l': {
    type: 'L',
    name: 'Type L - Italian',
    commonNames: ['CEI 23-50', 'Italian 3-pin', 'Italy plug'],
    description: 'Type L electrical plug is the Italian standard featuring three round pins in a straight line. Available in two versions: 10A (4mm pins) and 16A (5mm pins), with the 10A version being compatible with Type C Europlugs.',
    technicalSpecs: {
      pins: 3,
      pinDiameter: '4mm (10A) or 5mm (16A)',
      pinSpacing: 'Linear arrangement',
      voltage: '230V',
      current: '10A or 16A',
      grounding: true
    },
    usedIn: ['Italy', 'San Marino', 'Vatican City', 'Chile', 'Uruguay'],
    photoAlt: 'Type L Italian plug showing three round pins arranged in a straight line',
    animationAlt: 'Animation of Type L Italian plug with three inline pins entering Italian socket',
    seoDescription: 'Type L plug (CEI 23-50) Italian standard with three inline round pins. Used in Italy, Chile, Uruguay. Rated 230V, 10A/16A, grounded.'
  },
  'm': {
    type: 'M',
    name: 'Type M - South African 15A',
    commonNames: ['BS 546 15A', 'South African plug', 'Large Indian plug'],
    description: 'Type M electrical plug features three large round pins in a triangular pattern, similar to Type D but with larger pins for higher current. This 15-amp plug is standard in South Africa and used for larger appliances in India.',
    technicalSpecs: {
      pins: 3,
      pinDiameter: '7.06mm',
      pinSpacing: 'Triangular pattern',
      voltage: '220-240V',
      current: '15A',
      grounding: true
    },
    usedIn: ['South Africa', 'India', 'Nepal', 'Namibia', 'Swaziland', 'Lesotho'],
    photoAlt: 'Type M South African plug with three large round pins in triangular configuration',
    animationAlt: 'Animation demonstrating Type M plug with large triangular pin arrangement used in South Africa',
    seoDescription: 'Type M plug (BS 546 15A) with three large 7mm pins in triangle. Standard in South Africa, large appliances in India. Rated 220-240V, 15A.'
  },
  'n': {
    type: 'N',
    name: 'Type N - Brazilian',
    commonNames: ['NBR 14136', 'Brazilian plug', 'IEC 60906-1'],
    description: 'Type N electrical plug is the Brazilian standard based on IEC 60906-1, featuring two round pins plus a grounding pin. This newer standard (adopted 2002) comes in 10A and 20A versions and is designed to be safer than previous plug types.',
    technicalSpecs: {
      pins: 3,
      pinDiameter: '4mm (10A) or 4.8mm (20A)',
      pinSpacing: '19mm + ground',
      voltage: '127V/220V',
      current: '10A or 20A',
      grounding: true
    },
    usedIn: ['Brazil', 'South Africa'],
    photoAlt: 'Type N Brazilian plug with two round pins and recessed ground pin, newest IEC standard',
    animationAlt: 'Animation showing Type N Brazilian standard plug based on IEC 60906-1 design',
    seoDescription: 'Type N plug (NBR 14136) Brazilian standard based on IEC 60906-1. Two pins plus ground. Used in Brazil. Rated 127V/220V, 10A/20A.'
  },
  'o': {
    type: 'O',
    name: 'Type O - Thai',
    commonNames: ['TIS 166-2549', 'Thai plug', 'Thailand standard'],
    description: 'Type O electrical plug is unique to Thailand, featuring three round pins with one pin having a different shape. This design accepts Type C, E, and F plugs while maintaining its own standard for grounded connections.',
    technicalSpecs: {
      pins: 3,
      pinDiameter: '4.8mm',
      pinSpacing: '19mm + ground',
      voltage: '230V',
      current: '16A',
      grounding: true
    },
    usedIn: ['Thailand'],
    photoAlt: 'Type O Thai plug with three round pins in unique configuration used only in Thailand',
    animationAlt: 'Animation of Type O Thai plug showing compatibility with multiple plug types',
    seoDescription: 'Type O plug (TIS 166-2549) Thai standard with three round pins. Unique to Thailand, accepts C, E, F plugs. Rated 230V, 16A, grounded.'
  }
};
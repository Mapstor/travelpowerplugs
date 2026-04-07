export interface Country {
  slug: string;
  name: string;
  iso2: string;
  continent: string;
  voltage: number;
  frequency: number;
  plugTypes: string[];
  neighbors: string[];
}

export const COUNTRIES: Country[] = [
  {
    slug: 'afghanistan-electric-plug-types',
    name: 'Afghanistan',
    iso2: 'AF',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F'],
    neighbors: []
  },
  {
    slug: 'albanian-plug-types',
    name: 'Albania',
    iso2: 'AL',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'algeria-electrical-plug-type',
    name: 'Algeria',
    iso2: 'DZ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'argentina-electric-plug-types-do-you-need-an-adapter',
    name: 'Argentina',
    iso2: 'AR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I', 'C'],
    neighbors: []
  },
  {
    slug: 'armenia-electric-socket-types-do-you-need-to-pack-an-adapter',
    name: 'Armenia',
    iso2: 'AM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'australia-electric-plug-types-do-you-need-adapter',
    name: 'Australia',
    iso2: 'AU',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'austria-electric-power-plug-types-do-you-need-an-adapter',
    name: 'Austria',
    iso2: 'AT',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'azerbaijan-electric-socket-types-will-you-need-an-adapter',
    name: 'Azerbaijan',
    iso2: 'AZ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'bahamas-electric-socket-types-will-you-need-an-adapter',
    name: 'Bahamas',
    iso2: 'BS',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'bahrain-electric-plug-types-will-you-need-an-adapter',
    name: 'Bahrain',
    iso2: 'BH',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'bangladesh-electric-plug-types-do-you-need-an-adapter',
    name: 'Bangladesh',
    iso2: 'BD',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'C', 'D'],
    neighbors: []
  },
  {
    slug: 'barbados-electric-plug-types-do-you-need-an-adapter',
    name: 'Barbados',
    iso2: 'BB',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'belarus-electric-plug-types-will-you-need-an-adapter',
    name: 'Belarus',
    iso2: 'BY',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'belgium-electric-plug-types-do-you-need-an-adapter',
    name: 'Belgium',
    iso2: 'BE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'belize-electric-plug-types-do-you-need-an-adapter',
    name: 'Belize',
    iso2: 'BZ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'benin-electric-plug-types-do-you-need-an-adapter',
    name: 'Benin',
    iso2: 'BJ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'bhutan-electric-plug-types-do-you-need-an-adapter-in-bhutan',
    name: 'Bhutan',
    iso2: 'BT',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['D', 'C', 'G'],
    neighbors: []
  },
  {
    slug: 'bolivia-electric-plug-types-do-you-need-an-adapter',
    name: 'Bolivia',
    iso2: 'BO',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'C'],
    neighbors: []
  },
  {
    slug: 'bosnia-and-herzegovina-electric-plug-types-is-adapter-needed',
    name: 'Bosnia and Herzegovina',
    iso2: 'BA',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'botswana-electric-plug-types-do-you-need-an-adapter',
    name: 'Botswana',
    iso2: 'BW',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['D', 'G', 'M'],
    neighbors: []
  },
  {
    slug: 'brazil-electric-plug-types-do-you-need-an-adapter',
    name: 'Brazil',
    iso2: 'BR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['N', 'C', 'A'],
    neighbors: []
  },
  {
    slug: 'brunei-electric-plug-types-do-you-need-an-adapter',
    name: 'Brunei',
    iso2: 'BN',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'bulgaria-electric-plug-types-do-you-need-an-adapter',
    name: 'Bulgaria',
    iso2: 'BG',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'burkina-faso-electric-plug-type-will-you-need-an-adapter',
    name: 'Burkina Faso',
    iso2: 'BF',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'burundi-electric-plug-types-do-you-need-an-adapter',
    name: 'Burundi',
    iso2: 'BI',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'E'],
    neighbors: []
  },
  {
    slug: 'cabo-verde-electric-plug-types-do-you-need-an-adapter',
    name: 'Cabo Verde',
    iso2: 'CV',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'cambodia-electric-plug-types-will-you-need-an-adapter',
    name: 'Cambodia',
    iso2: 'KH',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'C', 'G'],
    neighbors: []
  },
  {
    slug: 'cameroon-electric-plug-types-do-you-need-to-pack-an-adapter',
    name: 'Cameroon',
    iso2: 'CM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'canada-electric-plug-types-do-you-need-an-adapter',
    name: 'Canada',
    iso2: 'CA',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'central-african-republic-electric-plug-types-need-an-adapter',
    name: 'Central African Republic',
    iso2: 'CF',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'chad-electric-plug-types-do-you-need-to-pack-an-adapter',
    name: 'Chad',
    iso2: 'TD',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'chile-electric-plug-types-do-you-need-an-adapter-while-traveling',
    name: 'Chile',
    iso2: 'CL',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'L'],
    neighbors: []
  },
  {
    slug: '3-electric-plug-types-in-china-will-you-need-an-adapter',
    name: 'China',
    iso2: 'CN',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'I', 'C'],
    neighbors: []
  },
  {
    slug: 'colombia-electric-plug-types-do-you-need-an-adapter',
    name: 'Colombia',
    iso2: 'CO',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'B'],
    neighbors: []
  },
  {
    slug: 'comoros-electric-plug-type-do-you-need-an-adapter',
    name: 'Comoros',
    iso2: 'KM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'congo-electric-plug-type-do-you-need-an-adapter',
    name: 'Congo',
    iso2: 'CG',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'democratic-republic-of-congo-electric-plug-types',
    name: 'Democratic Republic of the Congo',
    iso2: 'CD',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'E'],
    neighbors: []
  },
  {
    slug: 'cook-islands-electric-plug-types',
    name: 'Cook Islands',
    iso2: 'CK',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'costa-rica-electric-plug-types-do-you-need-an-adapter',
    name: 'Costa Rica',
    iso2: 'CR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'cote-divoire-electric-plug-type-do-you-need-an-adapter',
    name: 'Côte d\'Ivoire',
    iso2: 'CI',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip',
    name: 'Croatia',
    iso2: 'HR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'cuba-electric-plug-type-do-you-need-an-adapter-for-trip',
    name: 'Cuba',
    iso2: 'CU',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'B', 'C'],
    neighbors: []
  },
  {
    slug: 'cyprus-electric-plug-types-will-you-need-an-adapter',
    name: 'Cyprus',
    iso2: 'CY',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'czech-republic-electric-plug-type-will-you-need-an-adapter',
    name: 'Czech Republic',
    iso2: 'CZ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2',
    name: 'Denmark',
    iso2: 'DK',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['K', 'C', 'F'],
    neighbors: []
  },
  {
    slug: 'djibouti-electric-plug-types-do-you-need-to-take-an-adapter',
    name: 'Djibouti',
    iso2: 'DJ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'dominica-electric-plug-types-will-you-need-an-adapter-with-you',
    name: 'Dominica',
    iso2: 'DM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'dominican-republic-electric-plug-types-do-you-need-an-adapter',
    name: 'Dominican Republic',
    iso2: 'DO',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'ecuador-electric-plug-type-will-you-need-an-adapter',
    name: 'Ecuador',
    iso2: 'EC',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'B'],
    neighbors: []
  },
  {
    slug: 'egypt-electric-plug-type-will-you-need-an-adapter-in-egypt',
    name: 'Egypt',
    iso2: 'EG',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F'],
    neighbors: []
  },
  {
    slug: 'el-salvador-electric-plug-type-will-you-need-an-adapter',
    name: 'El Salvador',
    iso2: 'SV',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'equatorial-guinea-electric-plug-types-will-you-need-to-take-an-adapter-with-you',
    name: 'Equatorial Guinea',
    iso2: 'GQ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'eritrea-electric-plug-types-will-you-need-an-adapter-in-eritrea',
    name: 'Eritrea',
    iso2: 'ER',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'L'],
    neighbors: []
  },
  {
    slug: 'estonia-electric-plug-types-will-you-need-an-adapter-in-estonia',
    name: 'Estonia',
    iso2: 'EE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'eswatini-electric-plug-types-will-you-need-an-adapter-in-mbabane',
    name: 'Eswatini',
    iso2: 'SZ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['M', 'D'],
    neighbors: []
  },
  {
    slug: 'ethiopia-electric-plug-types-will-you-need-an-adapter-in-addis-abeba',
    name: 'Ethiopia',
    iso2: 'ET',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F'],
    neighbors: []
  },
  {
    slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva',
    name: 'Fiji',
    iso2: 'FJ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'finland-electric-plug-type-will-you-need-an-adapter-in-helsinki',
    name: 'Finland',
    iso2: 'FI',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris',
    name: 'France',
    iso2: 'FR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'gabon-electric-plug-types-will-you-need-an-adapter-libreville',
    name: 'Gabon',
    iso2: 'GA',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C'],
    neighbors: []
  },
  {
    slug: 'gambia-electric-plug-types-will-you-need-an-adapter-in-banjul',
    name: 'Gambia',
    iso2: 'GM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'georgia-electric-plug-types-will-you-need-an-adapter-in-tbilisi',
    name: 'Georgia',
    iso2: 'GE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
    name: 'Germany',
    iso2: 'DE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'ghana-electric-plug-types-will-you-need-an-adapter-in-accra',
    name: 'Ghana',
    iso2: 'GH',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'D'],
    neighbors: []
  },
  {
    slug: 'greece-electric-plug-types-will-you-need-an-adapter-in-greece',
    name: 'Greece',
    iso2: 'GR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'greenland-electric-plug-types',
    name: 'Greenland',
    iso2: 'GL',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['K', 'C'],
    neighbors: []
  },
  {
    slug: 'grenada-electric-plug-types-will-you-need-an-adapter-in-grenada',
    name: 'Grenada',
    iso2: 'GD',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'guatemala-electric-plug-types-will-you-need-an-adapter-in-guatemala-city',
    name: 'Guatemala',
    iso2: 'GT',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'guinea-electric-plug-types-will-you-need-an-adapter-in-conakry',
    name: 'Guinea',
    iso2: 'GN',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'guinea-bissau-electric-plug-type-will-you-need-an-adapter-in-bissau',
    name: 'Guinea-Bissau',
    iso2: 'GW',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C'],
    neighbors: []
  },
  {
    slug: 'guyana-electric-plug-types-will-you-need-an-adapter-in-georgetown',
    name: 'Guyana',
    iso2: 'GY',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'A', 'B'],
    neighbors: []
  },
  {
    slug: 'haiti-electric-plug-types-do-you-need-an-adapter-for-haiti',
    name: 'Haiti',
    iso2: 'HT',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'B'],
    neighbors: []
  },
  {
    slug: 'honduras-electric-plug-types-do-you-need-an-adapter-in-honduras',
    name: 'Honduras',
    iso2: 'HN',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'hong-kong-electric-plug-types',
    name: 'Hong Kong',
    iso2: 'HK',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest',
    name: 'Hungary',
    iso2: 'HU',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'iceland-electric-plug-types-will-you-need-an-adapter-in-reykjavik',
    name: 'Iceland',
    iso2: 'IS',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india',
    name: 'India',
    iso2: 'IN',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['D', 'M', 'C'],
    neighbors: []
  },
  {
    slug: 'indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia',
    name: 'Indonesia',
    iso2: 'ID',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F'],
    neighbors: []
  },
  {
    slug: 'iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran',
    name: 'Iran',
    iso2: 'IR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F'],
    neighbors: []
  },
  {
    slug: 'iraq-electric-plug-types-will-you-need-an-adapter-traveling-to-iraq',
    name: 'Iraq',
    iso2: 'IQ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['D', 'G'],
    neighbors: []
  },
  {
    slug: 'ireland-electric-plug-types-will-you-need-an-adapter-for-ireland',
    name: 'Ireland',
    iso2: 'IE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'isle-of-man-electric-plug-types',
    name: 'Isle of Man',
    iso2: 'IM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'israel-electric-plug-type-will-you-need-an-adapter-for-israel',
    name: 'Israel',
    iso2: 'IL',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['H'],
    neighbors: []
  },
  {
    slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters',
    name: 'Italy',
    iso2: 'IT',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'L', 'C'],
    neighbors: []
  },
  {
    slug: 'jamaica-electric-plug-types-will-you-need-an-adapter-for-charging',
    name: 'Jamaica',
    iso2: 'JM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'japan-electric-plug-types-will-you-need-an-adapter-probably-yes',
    name: 'Japan',
    iso2: 'JP',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'B'],
    neighbors: []
  },
  {
    slug: 'jersey-electric-plug-types',
    name: 'Jersey',
    iso2: 'JE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'jordan-electric-plug-types-will-you-need-adapter-traveling-to-jordan',
    name: 'Jordan',
    iso2: 'JO',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'C', 'D'],
    neighbors: []
  },
  {
    slug: 'kazakhstan-electric-plug-types-will-you-need-an-adapter-probably-yes',
    name: 'Kazakhstan',
    iso2: 'KZ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'kenya-electric-plug-types-will-you-need-an-adapter-traveling-to-kenya',
    name: 'Kenya',
    iso2: 'KE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'kiribati-electric-plug-types-will-you-need-an-adapter-for-kiribati',
    name: 'Kiribati',
    iso2: 'KI',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'north-korea-electric-plug-types-will-you-need-an-adapter-yup',
    name: 'North Korea',
    iso2: 'KP',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F'],
    neighbors: []
  },
  {
    slug: 'south-korea-electric-plug-types-will-you-need-an-adapter-in-seoul',
    name: 'South Korea',
    iso2: 'KR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'kuwait-electric-plug-types-will-you-need-an-adapter-in-kuwait-city',
    name: 'Kuwait',
    iso2: 'KW',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'kyrgyzstan-electric-plug-type-will-you-need-an-adapter',
    name: 'Kyrgyzstan',
    iso2: 'KG',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F'],
    neighbors: []
  },
  {
    slug: 'laos-electric-plug-types-which-adapter-will-you-need-in-laos',
    name: 'Laos',
    iso2: 'LA',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'B', 'C'],
    neighbors: []
  },
  {
    slug: 'latvia-electric-plug-type-will-you-need-an-adapter-in-riga',
    name: 'Latvia',
    iso2: 'LV',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'lebanon-electric-plug-types-will-you-need-an-adapter-in-beirut',
    name: 'Lebanon',
    iso2: 'LB',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['D', 'G', 'A'],
    neighbors: []
  },
  {
    slug: 'lesotho-electric-plug-types-which-adapter-do-you-need-for-lesotho',
    name: 'Lesotho',
    iso2: 'LS',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['M'],
    neighbors: []
  },
  {
    slug: 'liberia-electric-plug-types-will-you-need-an-adapter-in-liberia',
    name: 'Liberia',
    iso2: 'LR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'libya-electric-plug-types-will-you-need-an-adapter-in-libya',
    name: 'Libya',
    iso2: 'LY',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['D', 'C'],
    neighbors: []
  },
  {
    slug: 'liechtenstein-electric-plug-types-will-you-need-an-adapter',
    name: 'Liechtenstein',
    iso2: 'LI',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['J', 'C'],
    neighbors: []
  },
  {
    slug: 'lithuania-electric-plug-types-will-you-need-an-adapter-in-vilnius-2',
    name: 'Lithuania',
    iso2: 'LT',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'luxembourg-electric-plug-types-will-you-need-an-adapter-in-luxembourg',
    name: 'Luxembourg',
    iso2: 'LU',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'macao-electric-plug-types',
    name: 'Macao',
    iso2: 'MO',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'D'],
    neighbors: []
  },
  {
    slug: 'madagascar-electric-plug-types-will-you-need-an-adapter',
    name: 'Madagascar',
    iso2: 'MG',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'E'],
    neighbors: []
  },
  {
    slug: 'malawi-electric-plug-types-which-adapter-will-you-need-in-malawi',
    name: 'Malawi',
    iso2: 'MW',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'malaysia-electric-plug-types-will-you-need-an-adapter-in-kuala-lumpur',
    name: 'Malaysia',
    iso2: 'MY',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'maldives-electric-plug-types-will-you-need-an-adapter-for-maldives',
    name: 'Maldives',
    iso2: 'MV',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['D', 'G'],
    neighbors: []
  },
  {
    slug: 'mali-electric-plug-types-which-adapter-will-you-need-in-mali',
    name: 'Mali',
    iso2: 'ML',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'malta-electric-plug-types-will-you-need-an-adapter-for-valletta',
    name: 'Malta',
    iso2: 'MT',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'marshall-islands-electric-plug-types-will-you-need-an-adapter',
    name: 'Marshall Islands',
    iso2: 'MH',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'mauritania-electric-plug-types-will-you-need-an-adapter',
    name: 'Mauritania',
    iso2: 'MR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C'],
    neighbors: []
  },
  {
    slug: 'mauritius-electric-plug-types-will-you-need-an-adapter',
    name: 'Mauritius',
    iso2: 'MU',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'C'],
    neighbors: []
  },
  {
    slug: 'mexico-electric-plug-types-will-you-need-an-adapter-in-mexico',
    name: 'Mexico',
    iso2: 'MX',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'micronesia-electric-plug-types-will-you-need-an-adapter-on-the-islands',
    name: 'Micronesia',
    iso2: 'FM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'moldova-electric-plug-types-will-you-need-an-adapter-for-moldova',
    name: 'Moldova',
    iso2: 'MD',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'monaco-electric-plug-types-will-you-need-an-adapter-in-monaco',
    name: 'Monaco',
    iso2: 'MC',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'mongolia-electric-plug-types-will-you-need-an-adapter-in-the-steppe',
    name: 'Mongolia',
    iso2: 'MN',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'E'],
    neighbors: []
  },
  {
    slug: 'montenegro-electric-plug-types-will-you-need-an-adapter',
    name: 'Montenegro',
    iso2: 'ME',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'morocco-electric-plug-types-will-you-need-an-adapter-in-morocco',
    name: 'Morocco',
    iso2: 'MA',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'mozambique-electric-plug-types-will-you-need-an-adapter',
    name: 'Mozambique',
    iso2: 'MZ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F', 'M'],
    neighbors: []
  },
  {
    slug: 'myanmar-electric-plug-types-will-you-need-an-adapter-for-myanmar',
    name: 'Myanmar',
    iso2: 'MM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['D', 'G', 'C'],
    neighbors: []
  },
  {
    slug: 'namibia-electric-plug-types-which-adapter-will-you-need',
    name: 'Namibia',
    iso2: 'NA',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['M'],
    neighbors: []
  },
  {
    slug: 'nauru-electric-plug-types-which-adapter-will-you-need-in-nauru',
    name: 'Nauru',
    iso2: 'NR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'nepal-electric-plug-types-will-you-need-an-adapter-in-nepal',
    name: 'Nepal',
    iso2: 'NP',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['D', 'C'],
    neighbors: []
  },
  {
    slug: 'netherlands-electric-plug-types-will-you-need-an-adapter',
    name: 'Netherlands',
    iso2: 'NL',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'new-zealand-electric-plug-types-which-adapter-should-you-get',
    name: 'New Zealand',
    iso2: 'NZ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'nicaragua-electric-plug-types-will-you-need-an-adapter-in-nicaragua',
    name: 'Nicaragua',
    iso2: 'NI',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'niger-electric-plug-types-will-you-need-an-adapter-for-niger',
    name: 'Niger',
    iso2: 'NE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'nigeria-electric-plug-types-which-adapter-will-you-need',
    name: 'Nigeria',
    iso2: 'NG',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'D'],
    neighbors: []
  },
  {
    slug: 'niue-electric-plug-types',
    name: 'Niue',
    iso2: 'NU',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'norfolk-island-electric-plug-types',
    name: 'Norfolk Island',
    iso2: 'NF',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'north-macedonia-electric-plug-types-will-you-need-an-adapter',
    name: 'North Macedonia',
    iso2: 'MK',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'northern-mariana-islands-electric-plug-types',
    name: 'Northern Mariana Islands',
    iso2: 'MP',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'norway-electric-plug-types-will-you-need-an-adapter-for-oslo',
    name: 'Norway',
    iso2: 'NO',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'oman-electric-plug-types-which-adapter-will-you-need',
    name: 'Oman',
    iso2: 'OM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'pakistan-electric-plug-types-will-you-need-an-adapter',
    name: 'Pakistan',
    iso2: 'PK',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['D', 'G'],
    neighbors: []
  },
  {
    slug: 'palau-electric-plug-types-will-you-need-an-adapter-for-palau',
    name: 'Palau',
    iso2: 'PW',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'palestine-electric-plug-types',
    name: 'Palestine',
    iso2: 'PS',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['H', 'C'],
    neighbors: []
  },
  {
    slug: 'panama-electric-plug-types-will-you-need-an-adapter-for-panama',
    name: 'Panama',
    iso2: 'PA',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'papua-new-guinea-electric-plug-types-which-adapter-will-you-need',
    name: 'Papua New Guinea',
    iso2: 'PG',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'paraguay-electric-plug-types-which-adapter-will-you-need',
    name: 'Paraguay',
    iso2: 'PY',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C'],
    neighbors: []
  },
  {
    slug: 'peru-electric-plug-types-will-you-need-an-adapter-for-peru',
    name: 'Peru',
    iso2: 'PE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'B', 'C'],
    neighbors: []
  },
  {
    slug: 'philippines-electric-plug-types-will-you-need-an-adapter-for-philippines',
    name: 'Philippines',
    iso2: 'PH',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'B', 'C'],
    neighbors: []
  },
  {
    slug: 'pitcairn-islands-electric-plug-types',
    name: 'Pitcairn Islands',
    iso2: 'PN',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland',
    name: 'Poland',
    iso2: 'PL',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'portugal-electric-plug-types-will-you-need-adapter-in-lisbon-porto',
    name: 'Portugal',
    iso2: 'PT',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'puerto-rico-electric-plug-types',
    name: 'Puerto Rico',
    iso2: 'PR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'qatar-electric-plug-types-which-adapter-will-you-need-in-qatar',
    name: 'Qatar',
    iso2: 'QA',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'romania-electric-plug-types-will-you-need-an-adapter-in-romania',
    name: 'Romania',
    iso2: 'RO',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
    name: 'Russia',
    iso2: 'RU',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'rwanda-electric-plug-types-will-you-need-to-bring-an-adapter-with-you',
    name: 'Rwanda',
    iso2: 'RW',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'J'],
    neighbors: []
  },
  {
    slug: 'saint-barthelemy-electric-plug-types',
    name: 'Saint Barthélemy',
    iso2: 'BL',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'saint-helena-electric-plug-types',
    name: 'Saint Helena',
    iso2: 'SH',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'saint-kitts-and-nevis-electric-plug-types-will-you-need-an-adapter',
    name: 'Saint Kitts and Nevis',
    iso2: 'KN',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'D'],
    neighbors: []
  },
  {
    slug: 'saint-lucia-electric-plug-types-which-adapter-will-you-need',
    name: 'Saint Lucia',
    iso2: 'LC',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'saint-martin-electric-plug-types',
    name: 'Saint Martin',
    iso2: 'MF',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'saint-pierre-and-miquelon-electric-plug-types',
    name: 'Saint Pierre and Miquelon',
    iso2: 'PM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E'],
    neighbors: []
  },
  {
    slug: 'saint-vincent-and-the-grenadines-electric-plug-types-adapter-a-must',
    name: 'Saint Vincent and the Grenadines',
    iso2: 'VC',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'A', 'B'],
    neighbors: []
  },
  {
    slug: 'samoa-electric-plug-types-will-you-need-an-adapter-for-samoa',
    name: 'Samoa',
    iso2: 'WS',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'san-marino-electric-plug-types-will-you-need-an-adapter',
    name: 'San Marino',
    iso2: 'SM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'L', 'C'],
    neighbors: []
  },
  {
    slug: 'sao-tome-and-principe-electric-plug-types-which-adapter-will-you-need',
    name: 'São Tomé and Príncipe',
    iso2: 'ST',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F'],
    neighbors: []
  },
  {
    slug: 'saudi-arabia-electric-plug-types-which-adapter-will-you-need',
    name: 'Saudi Arabia',
    iso2: 'SA',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar',
    name: 'Senegal',
    iso2: 'SN',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade',
    name: 'Serbia',
    iso2: 'RS',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'seychelles-electric-plug-types-which-adapter-will-you-need-with-you',
    name: 'Seychelles',
    iso2: 'SC',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'sierra-leone-electric-plug-types-which-adapter-will-you-need-with-you',
    name: 'Sierra Leone',
    iso2: 'SL',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'D'],
    neighbors: []
  },
  {
    slug: 'singapore-electric-plug-types-will-you-need-an-adapter-for-singapore',
    name: 'Singapore',
    iso2: 'SG',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'sint-maarten-electric-plug-types',
    name: 'Sint Maarten',
    iso2: 'SX',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'B'],
    neighbors: []
  },
  {
    slug: 'slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava',
    name: 'Slovakia',
    iso2: 'SK',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'slovenia-electric-plug-types-will-you-need-an-adapter-for-slovenia',
    name: 'Slovenia',
    iso2: 'SI',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'solomon-islands-electric-plug-types-will-you-need-an-adapter-with-you',
    name: 'Solomon Islands',
    iso2: 'SB',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'I'],
    neighbors: []
  },
  {
    slug: 'somalia-electric-plug-types-which-adapter-will-you-need-in-somalia',
    name: 'Somalia',
    iso2: 'SO',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C'],
    neighbors: []
  },
  {
    slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa',
    name: 'South Africa',
    iso2: 'ZA',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['M', 'C', 'N'],
    neighbors: []
  },
  {
    slug: 'south-georgia-electric-plug-types',
    name: 'South Georgia',
    iso2: 'GS',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'south-sudan-electric-plug-types',
    name: 'South Sudan',
    iso2: 'SS',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'D'],
    neighbors: []
  },
  {
    slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain',
    name: 'Spain',
    iso2: 'ES',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'sri-lanka-electric-plug-types-will-you-need-an-adapter-in-sri-lanka',
    name: 'Sri Lanka',
    iso2: 'LK',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'D'],
    neighbors: []
  },
  {
    slug: 'sudan-electric-plug-types-which-adapter-will-you-need-in-sudan',
    name: 'Sudan',
    iso2: 'SD',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'D'],
    neighbors: []
  },
  {
    slug: 'suriname-electric-plug-types-will-you-need-an-adapter-for-suriname',
    name: 'Suriname',
    iso2: 'SR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F'],
    neighbors: []
  },
  {
    slug: 'svalbard-electric-plug-types',
    name: 'Svalbard',
    iso2: 'SJ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'sweden-electric-plug-types-will-you-need-an-adapter-for-sweden',
    name: 'Sweden',
    iso2: 'SE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you',
    name: 'Switzerland',
    iso2: 'CH',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['J', 'C'],
    neighbors: []
  },
  {
    slug: 'syria-electric-plug-types-which-adapter-will-you-need-in-syria',
    name: 'Syria',
    iso2: 'SY',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'E'],
    neighbors: []
  },
  {
    slug: 'taiwan-electric-plug-types-which-adaptor-you-need-for-taiwan',
    name: 'Taiwan',
    iso2: 'TW',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'B'],
    neighbors: []
  },
  {
    slug: 'tajikistan-electric-plug-types-which-adapter-will-you-need-in-tajikistan',
    name: 'Tajikistan',
    iso2: 'TJ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F'],
    neighbors: []
  },
  {
    slug: 'tanzania-electric-plug-types-which-adapter-will-you-need-in-tanzania',
    name: 'Tanzania',
    iso2: 'TZ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'D'],
    neighbors: []
  },
  {
    slug: 'thailand-electric-plug-type-will-you-need-an-adapter-for-thailand',
    name: 'Thailand',
    iso2: 'TH',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'B', 'C', 'O'],
    neighbors: []
  },
  {
    slug: 'east-timor-electric-plug-types-do-you-need-an-adapter',
    name: 'Timor-Leste',
    iso2: 'TL',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'E', 'F'],
    neighbors: []
  },
  {
    slug: 'togo-electric-plug-types-which-adapter-will-you-need-for-togo',
    name: 'Togo',
    iso2: 'TG',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C'],
    neighbors: []
  },
  {
    slug: 'tokelau-electric-plug-types',
    name: 'Tokelau',
    iso2: 'TK',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'tongo-electric-plug-types-which-adapter-will-you-need-for-tongo',
    name: 'Tonga',
    iso2: 'TO',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'trinidad-and-tobago-electric-plug-types-will-you-need-an-adapter',
    name: 'Trinidad and Tobago',
    iso2: 'TT',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'tunisia-electric-plug-types-which-adapter-will-you-need-for-tunisia',
    name: 'Tunisia',
    iso2: 'TN',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey',
    name: 'Turkey',
    iso2: 'TR',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'turkmenistan-electric-plug-types-which-adapter-will-you-need',
    name: 'Turkmenistan',
    iso2: 'TM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'F'],
    neighbors: []
  },
  {
    slug: 'turks-and-caicos-islands-electric-plug-types',
    name: 'Turks and Caicos Islands',
    iso2: 'TC',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'tuvalu-electric-plug-types-which-adapter-will-you-need-for-tuvalu',
    name: 'Tuvalu',
    iso2: 'TV',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'uganda-electric-plug-types-which-adapter-do-you-need-in-uganda',
    name: 'Uganda',
    iso2: 'UG',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'ukraine-electric-plug-types-what-kind-of-adapter-do-you-need',
    name: 'Ukraine',
    iso2: 'UA',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'C'],
    neighbors: []
  },
  {
    slug: 'united-arab-emirates-electric-plug-types-which-adapter-for-uae',
    name: 'United Arab Emirates',
    iso2: 'AE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk',
    name: 'United Kingdom',
    iso2: 'GB',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G'],
    neighbors: []
  },
  {
    slug: 'usa-electric-plug-types-will-you-need-an-adapter-traveling-to-the-us',
    name: 'United States',
    iso2: 'US',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'uruguay-electric-plug-types-which-adapter-will-you-need-in-uruguay',
    name: 'Uruguay',
    iso2: 'UY',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F'],
    neighbors: []
  },
  {
    slug: 'uzbekistan-electric-plug-types-which-adapter-for-uzbekistan',
    name: 'Uzbekistan',
    iso2: 'UZ',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'F'],
    neighbors: []
  },
  {
    slug: 'vanuatu-electric-plug-types-which-adapter-do-you-need-for-vanuatu',
    name: 'Vanuatu',
    iso2: 'VU',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['I'],
    neighbors: []
  },
  {
    slug: 'vatican-city-electric-plug-types-do-you-need-an-adapter-for-vatican-city',
    name: 'Vatican City',
    iso2: 'VA',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['F', 'L', 'C'],
    neighbors: []
  },
  {
    slug: 'venezuela-electric-plug-types-will-you-need-an-adapter-for-venezuela',
    name: 'Venezuela',
    iso2: 'VE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'B'],
    neighbors: []
  },
  {
    slug: 'vietnam-electric-plug-types-which-adapter-will-you-need-for-vietnam',
    name: 'Vietnam',
    iso2: 'VN',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['A', 'C', 'D'],
    neighbors: []
  },
  {
    slug: 'us-virgin-islands-electric-plug-types',
    name: 'US Virgin Islands',
    iso2: 'VI',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['B', 'A'],
    neighbors: []
  },
  {
    slug: 'wallis-and-futuna-electric-plug-types',
    name: 'Wallis and Futuna',
    iso2: 'WF',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['E', 'C'],
    neighbors: []
  },
  {
    slug: 'western-sahara-electric-plug-types',
    name: 'Western Sahara',
    iso2: 'EH',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C'],
    neighbors: []
  },
  {
    slug: 'yemen-electric-plug-types-do-you-need-an-adapter-for-yemen',
    name: 'Yemen',
    iso2: 'YE',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['D', 'A', 'G'],
    neighbors: []
  },
  {
    slug: 'zambia-electric-plug-types-which-adapter-do-you-need-in-zambia',
    name: 'Zambia',
    iso2: 'ZM',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['C', 'D', 'G'],
    neighbors: []
  },
  {
    slug: 'zimbabwe-electric-plug-types-which-adapter-do-you-need-for-zimbabwe',
    name: 'Zimbabwe',
    iso2: 'ZW',
    continent: 'africa',
    voltage: 230,
    frequency: 50,
    plugTypes: ['G', 'D'],
    neighbors: []
  }
];

export const continents = {
  europe: 'Europe',
  asia: 'Asia',
  africa: 'Africa',
  'north-america': 'North America',
  'south-america': 'South America',
  oceania: 'Oceania',
  'middle-east': 'Middle East'
};

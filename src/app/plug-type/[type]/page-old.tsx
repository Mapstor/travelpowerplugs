import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COUNTRIES } from '@/data/countries';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Header from '@/components/layout/Header';

const plugTypes = {
  'type-a': {
    type: 'A',
    name: 'Type A',
    title: 'Type A Electric Plug - North American Standard',
    description: 'Type A plugs have two flat parallel pins. Used in USA, Canada, Mexico, Japan and Central America. Learn about compatibility and adapters.',
    image: '/images/plugs/type-a-electric-plug-and-socket.webp',
    specs: {
      pins: '2 flat parallel pins',
      voltage: '100-127V',
      current: '15A',
      grounding: 'No',
      compatibility: 'Works in Type B sockets'
    },
    overview: 'Type A plugs are primarily used in North and Central America, as well as Japan. They feature two flat parallel pins and are designed for devices that don\'t require grounding. This plug type is one of the oldest still in use and dates back to the early 20th century.',
    safety: 'Type A plugs lack grounding, making them less safe for high-power appliances. They can sometimes partially fall out of sockets, exposing live pins. Many countries are phasing them out in favor of grounded alternatives.'
  },
  'type-b': {
    type: 'B',
    name: 'Type B',
    title: 'Type B Electric Plug - Grounded North American Standard',
    description: 'Type B plugs have two flat pins plus a grounding pin. Standard in USA, Canada, and Mexico. Essential guide for travelers.',
    image: '/images/plugs/type-b-electric-plug-and-socket.webp',
    specs: {
      pins: '2 flat pins + 1 round grounding pin',
      voltage: '100-127V',
      current: '15A',
      grounding: 'Yes',
      compatibility: 'Accepts Type A plugs'
    },
    overview: 'Type B is the grounded version of Type A, featuring an additional round grounding pin. It\'s the standard plug for appliances requiring grounding in North America. The grounding pin is longer to ensure it makes contact first for safety.',
    safety: 'Type B plugs are safer than Type A due to the grounding pin, which provides protection against electric shock. The grounding pin makes contact first when inserting and breaks contact last when removing.'
  },
  'type-c': {
    type: 'C',
    name: 'Type C',
    title: 'Type C Electric Plug - Europlug Standard',
    description: 'Type C Europlug with two round pins. Most common plug in Europe, South America, and Asia. Universal European travel adapter.',
    image: '/images/plugs/type-c-electric-plug-and-socket.webp',
    specs: {
      pins: '2 round pins (4.0-4.8mm)',
      voltage: '220-240V',
      current: '2.5A',
      grounding: 'No',
      compatibility: 'Works in E, F, J, K, L sockets'
    },
    overview: 'Type C, known as the Europlug, is the most widely used international plug. It features two round pins and is designed for low-power devices. Its slim design allows it to fit into any socket that accepts 4.0-4.8mm round contacts with 19mm spacing.',
    safety: 'Type C plugs are limited to 2.5A and lack grounding, making them suitable only for double-insulated devices. The pins are partially insulated to prevent accidental contact when partially inserted.'
  },
  'type-d': {
    type: 'D',
    name: 'Type D',
    title: 'Type D Electric Plug - India and South Africa Standard',
    description: 'Type D plugs have three round pins in triangular pattern. Used in India, Nepal, Sri Lanka. Based on old British BS 546 standard.',
    image: '/images/plugs/type-d-electric-plug-and-socket.webp',
    specs: {
      pins: '3 round pins (triangular)',
      voltage: '220-240V',
      current: '5A',
      grounding: 'Yes',
      compatibility: 'None'
    },
    overview: 'Type D plugs are based on the British BS 546 standard and feature three round pins arranged in a triangular pattern. They\'re primarily used in India and some former British colonies. This is essentially a smaller version of Type M.',
    safety: 'Type D plugs include grounding for safety. However, the large round pins can be a hazard if stepped on, and the plugs can be difficult to insert and remove from sockets.'
  },
  'type-e': {
    type: 'E',
    name: 'Type E',
    title: 'Type E Electric Plug - French Standard',
    description: 'Type E plugs used in France, Belgium, Poland. Two round pins with socket grounding pin. Compatible with Type C plugs.',
    image: '/images/plugs/type-e-electric-plug-and-socket.webp',
    specs: {
      pins: '2 round pins + socket earth pin',
      voltage: '220-240V',
      current: '16A',
      grounding: 'Yes (via socket pin)',
      compatibility: 'Accepts Type C plugs'
    },
    overview: 'Type E is the French standard plug featuring two round pins and a hole to accept the socket\'s grounding pin. It\'s used in France, Belgium, Poland, and some African countries. The grounding is provided by a pin that protrudes from the socket.',
    safety: 'Type E provides grounding through the socket\'s earth pin, offering good protection. The recessed socket design prevents accidental contact with live pins during insertion.'
  },
  'type-f': {
    type: 'F',
    name: 'Type F',
    title: 'Type F Electric Plug - Schuko (German) Standard',
    description: 'Type F Schuko plugs used across Europe. Two round pins with side grounding clips. Works with Type C and E plugs.',
    image: '/images/plugs/type-f-electric-plug-and-socket.webp',
    specs: {
      pins: '2 round pins + 2 side clips',
      voltage: '220-240V',
      current: '16A',
      grounding: 'Yes (via side clips)',
      compatibility: 'Accepts Type C, works in Type E'
    },
    overview: 'Type F, known as "Schuko" (from German "Schutzkontakt" meaning protective contact), is widely used across Europe. It features two round pins and grounding clips on the sides. It\'s one of the most common plug types in the EU.',
    safety: 'Type F plugs are very safe with grounding clips and recessed sockets. The CEE 7/7 plug combines Type E and F, working in both French and German sockets.'
  },
  'type-g': {
    type: 'G',
    name: 'Type G',
    title: 'Type G Electric Plug - British Standard',
    description: 'Type G plugs with three rectangular pins. Used in UK, Ireland, Singapore, Malaysia. Features built-in fuse for safety.',
    image: '/images/plugs/type-g-electric-plug-and-socket.webp',
    specs: {
      pins: '3 rectangular pins',
      voltage: '220-240V',
      current: '13A',
      grounding: 'Yes',
      compatibility: 'None'
    },
    overview: 'Type G is the British standard featuring three rectangular pins in a triangular configuration. It\'s known for having a fuse inside the plug itself, making it one of the safest designs. Used in UK, Ireland, and many former British territories.',
    safety: 'Type G is considered one of the safest plug designs with mandatory shutters on sockets, a fuse in each plug, and insulated pins. The earth pin is longer to ensure grounding before power connection.'
  },
  'type-h': {
    type: 'H',
    name: 'Type H',
    title: 'Type H Electric Plug - Israel Standard',
    description: 'Type H plugs unique to Israel and Palestine. Three flat pins in triangular arrangement. Not compatible with other standards.',
    image: '/images/plugs/type-h-electric-plug-and-socket.webp',
    specs: {
      pins: '3 flat pins (Y-shape)',
      voltage: '220-240V',
      current: '16A',
      grounding: 'Yes',
      compatibility: 'Modified to accept Type C'
    },
    overview: 'Type H is unique to Israel and features three flat pins arranged in a triangular pattern. Modern Israeli sockets are designed to accept both the flat-pin Type H and round-pin Type C plugs, though older sockets may not be compatible.',
    safety: 'Type H includes grounding for safety. Newer versions have partially insulated pins to prevent accidental contact. The unique design means travelers to Israel specifically need Type H adapters.'
  },
  'type-i': {
    type: 'I',
    name: 'Type I',
    title: 'Type I Electric Plug - Australian/New Zealand Standard',
    description: 'Type I plugs with angled flat pins. Used in Australia, New Zealand, China, Argentina. Distinctive V-shaped pin arrangement.',
    image: '/images/plugs/type-i-electric-plug-and-socket.webp',
    specs: {
      pins: '2 or 3 flat pins (angled)',
      voltage: '220-240V',
      current: '10A',
      grounding: 'Optional third pin',
      compatibility: 'None'
    },
    overview: 'Type I features two flat pins arranged in a V-shape, with an optional grounding pin. It\'s the standard in Australia and New Zealand, and is also used in China and Argentina. The angled pins prevent incorrect insertion.',
    safety: 'Type I plugs with grounding are safe, and many sockets have switches for additional safety. The angled pin design ensures correct polarity. Partially insulated pins prevent accidental contact.'
  },
  'type-j': {
    type: 'J',
    name: 'Type J',
    title: 'Type J Electric Plug - Swiss Standard',
    description: 'Type J plugs used in Switzerland and Liechtenstein. Three round pins with unique offset grounding pin. Accepts Type C plugs.',
    image: '/images/plugs/type-j-electric-plug-and-socket.webp',
    specs: {
      pins: '3 round pins (offset ground)',
      voltage: '220-240V',
      current: '10A',
      grounding: 'Yes',
      compatibility: 'Accepts Type C plugs'
    },
    overview: 'Type J is the Swiss standard featuring three round pins, with the grounding pin offset from the center line. It\'s used exclusively in Switzerland and Liechtenstein. Swiss sockets are recessed and accept Type C Europlugs.',
    safety: 'Type J provides grounding and the recessed socket design prevents accidental contact. Switzerland maintains its own standard despite EU harmonization efforts, prioritizing safety and compatibility.'
  },
  'type-k': {
    type: 'K',
    name: 'Type K',
    title: 'Type K Electric Plug - Danish Standard',
    description: 'Type K plugs used in Denmark and Greenland. Similar to Type C with additional grounding pin. Being phased out for Type E.',
    image: '/images/plugs/type-k-electric-plug-and-socket.webp',
    specs: {
      pins: '2 round pins + 1 ground pin',
      voltage: '220-240V',
      current: '16A',
      grounding: 'Yes',
      compatibility: 'Accepts Type C plugs'
    },
    overview: 'Type K is the Danish standard, similar to Type C but with an additional grounding pin. It\'s primarily used in Denmark and Greenland. Denmark is gradually transitioning to Type E sockets for new installations to align with EU standards.',
    safety: 'Type K includes grounding for safety. The design is similar to Type E but with the grounding pin on the plug rather than the socket. Newer installations often use Type E for better EU compatibility.'
  },
  'type-l': {
    type: 'L',
    name: 'Type L',
    title: 'Type L Electric Plug - Italian Standard',
    description: 'Type L plugs used in Italy and Chile. Three round pins in a line. Available in 10A and 16A versions.',
    image: '/images/plugs/type-l-electric-plug-and-socket.webp',
    specs: {
      pins: '3 round pins (inline)',
      voltage: '220-240V',
      current: '10A or 16A',
      grounding: 'Yes',
      compatibility: '10A accepts Type C'
    },
    overview: 'Type L is the Italian standard featuring three round pins in a straight line. It comes in two versions: 10A (smaller pins) and 16A (larger pins). The 10A version accepts Type C Europlugs. Also used in Chile and parts of North Africa.',
    safety: 'Type L includes grounding for safety. The inline pin arrangement is unique among European plugs. Italian sockets often accommodate both 10A and 16A plugs with a bipasso (dual-size) design.'
  },
  'type-m': {
    type: 'M',
    name: 'Type M',
    title: 'Type M Electric Plug - South African Standard',
    description: 'Type M plugs with large round pins. Used in South Africa, India (for heavy appliances). Based on old British 15A BS 546.',
    image: '/images/plugs/type-m-electric-plug-and-socket.webp',
    specs: {
      pins: '3 large round pins',
      voltage: '220-240V',
      current: '15A',
      grounding: 'Yes',
      compatibility: 'None'
    },
    overview: 'Type M features three large round pins in a triangular configuration. It\'s based on the old British 15A BS 546 standard and is primarily used in South Africa. In India, it\'s used for heavy appliances like air conditioners.',
    safety: 'Type M provides grounding but the large pins can be cumbersome. South Africa is considering adopting Type N (IEC 60906-1) as a new standard for improved safety and international compatibility.'
  },
  'type-n': {
    type: 'N',
    name: 'Type N',
    title: 'Type N Electric Plug - Brazilian Standard (IEC 60906-1)',
    description: 'Type N plugs are the new IEC international standard. Used in Brazil and South Africa. Compatible with Type C plugs.',
    image: '/images/plugs/type-n-electric-plug-and-socket.webp',
    specs: {
      pins: '3 round pins',
      voltage: '100-240V',
      current: '10A or 20A',
      grounding: 'Yes',
      compatibility: 'Accepts Type C plugs'
    },
    overview: 'Type N is based on IEC 60906-1, intended as an international standard. Brazil adopted it in 2002, and South Africa is transitioning to it. It features three round pins with the grounding pin slightly longer. Available in 10A and 20A versions.',
    safety: 'Type N is one of the safest designs, incorporating lessons from other standards. It includes mandatory shutters, recessed sockets, and partially insulated pins. Designed to be a universal standard for the 21st century.'
  }
} as const;

type PlugTypeKey = keyof typeof plugTypes;

interface PageProps {
  params: Promise<{ type: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params;
  const plugType = plugTypes[type as PlugTypeKey];
  
  if (!plugType) {
    return { title: 'Plug Type Not Found' };
  }

  return {
    title: plugType.title,
    description: plugType.description,
    openGraph: {
      title: plugType.title,
      description: plugType.description,
      type: 'website',
      images: [plugType.image],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(plugTypes).map((type) => ({
    type,
  }));
}

export default async function PlugTypePage({ params }: PageProps) {
  const { type } = await params;
  const plugType = plugTypes[type as PlugTypeKey];
  
  if (!plugType) {
    notFound();
  }

  // Find all countries using this plug type
  const countriesUsingType = COUNTRIES.filter(country => 
    country.plugTypes.includes(plugType.type as any)
  ).sort((a, b) => a.name.localeCompare(b.name));

  // Group countries by continent
  const countriesByContinent: { [key: string]: typeof countriesUsingType } = {};
  countriesUsingType.forEach(country => {
    const continent = country.continent;
    if (!countriesByContinent[continent]) {
      countriesByContinent[continent] = [];
    }
    countriesByContinent[continent].push(country);
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header showFullNav={true} />

      {/* Main Content */}
      <main className="max-w-[960px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Plug Types', href: '/#plug-types' },
              { label: plugType.name }
            ]}
          />
        </div>
        
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Left Column - Image and Specs */}
          <div>
            <div className="border border-gray-300 rounded-lg p-4 mb-6 bg-gray-50">
              <img
                src={plugType.image}
                alt={`${plugType.name} plug and socket`}
                className="w-full h-auto"
              />
              <h1 className="text-xl font-serif font-semibold text-center mt-4">
                {plugType.name} Plug
              </h1>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Technical Specifications</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Pins:</dt>
                  <dd className="text-gray-900">{plugType.specs.pins}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Voltage:</dt>
                  <dd className="text-gray-900">{plugType.specs.voltage}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Current:</dt>
                  <dd className="text-gray-900">{plugType.specs.current}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Grounding:</dt>
                  <dd className="text-gray-900">{plugType.specs.grounding}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Compatibility:</dt>
                  <dd className="text-gray-900">{plugType.specs.compatibility}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h1 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              {plugType.title}
            </h1>
            
            <div className="prose prose-sm max-w-none">
              <section className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Overview</h2>
                <p className="text-[15px] leading-[1.7] text-gray-800">
                  {plugType.overview}
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Safety Features</h2>
                <p className="text-[15px] leading-[1.7] text-gray-800">
                  {plugType.safety}
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Countries Using {plugType.name} ({countriesUsingType.length} total)
                </h2>
                
                <div className="space-y-4">
                  {Object.entries(countriesByContinent).map(([continent, countries]) => (
                    <div key={continent} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-2">
                        {continent} ({countries.length} countries)
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {countries.map(country => (
                          <Link
                            key={country.iso2}
                            href={`/${country.slug}`}
                            className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
                          >
                            <img
                              src={`https://flagcdn.com/w20/${country.iso2.toLowerCase()}.png`}
                              alt=""
                              width={20}
                              height={15}
                            />
                            <span>{country.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Related Plug Types</h2>
                <div className="grid grid-cols-4 gap-3">
                  {Object.entries(plugTypes)
                    .filter(([key]) => key !== type)
                    .slice(0, 4)
                    .map(([key, plug]) => (
                      <Link
                        key={key}
                        href={`/plug-type/${key}`}
                        className="border border-gray-200 rounded p-3 text-center hover:bg-gray-50 transition-colors"
                      >
                        <img
                          src={plug.image}
                          alt={plug.name}
                          className="w-full h-16 object-contain mb-2"
                        />
                        <div className="text-sm font-medium">{plug.name}</div>
                      </Link>
                    ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-12">
        <div className="max-w-[960px] mx-auto px-4 text-sm text-gray-600">
          © 2026 Travel Power Plugs
        </div>
      </footer>
    </div>
  );
}
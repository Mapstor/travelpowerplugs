import { Metadata } from 'next';
import { Country } from '@/data/countries';

/**
 * Generate country page title with consistent pattern
 */
export function countryPageTitle(country: Country): string {
  return `${country.name} Electric Plug Types: Adapters & Voltage (${country.voltage}V)`;
}

/**
 * Generate unique country page description
 */
export function countryPageDescription(country: Country): string {
  const plugTypes = country.plugTypes.join(' and ');
  const mainCities = getMainCities(country.name);
  
  return `${country.name} uses Type ${plugTypes} plugs at ${country.voltage}V/${country.frequency}Hz. Find the right adapter for your trip to ${mainCities ? mainCities + ' and other ' + country.name + ' destinations' : country.name}.`;
}

/**
 * Generate country page keywords
 */
export function countryPageKeywords(country: Country): string {
  const plugTypes = country.plugTypes.map(p => `Type ${p} plug`).join(', ');
  return `${country.name} plug type, ${country.name} adapter, ${country.name} voltage, ${plugTypes}, travel adapter, electrical outlet, power plug ${country.name}`;
}

/**
 * Generate canonical URL
 */
export function canonicalUrl(path: string): string {
  const baseUrl = 'https://travelpowerplugs.com';
  // Ensure trailing slash for consistency
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Generate Open Graph image URL
 */
export function ogImageUrl(country: Country): string {
  return `/og/${country.iso2.toLowerCase()}.png`;
}

/**
 * Generate complete metadata for country pages
 */
export async function generateCountryMetadata(country: Country): Promise<Metadata> {
  const title = countryPageTitle(country);
  const description = countryPageDescription(country);
  const keywords = countryPageKeywords(country);
  const canonical = canonicalUrl(country.slug);
  const ogImage = ogImageUrl(country);

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Marko Visic' }],
    creator: 'Marko Visic',
    publisher: 'Travel Power Plugs',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonical,
      siteName: 'Travel Power Plugs',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${country.name} plug types and electrical information`,
        },
      ],
      locale: 'en_US',
      authors: ['Marko Visic'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@travelpowerplugs',
    },
    alternates: {
      canonical,
    },
    verification: {
      google: 'google-site-verification-code',
    },
  };
}

/**
 * Generate metadata for tool pages
 */
export function generateToolMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: string
): Metadata {
  const canonical = canonicalUrl(path);
  
  return {
    title,
    description,
    keywords: keywords || 'travel adapter, plug adapter, voltage calculator, trip planner, electrical compatibility',
    authors: [{ name: 'Marko Visic' }],
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
      siteName: 'Travel Power Plugs',
      images: [
        {
          url: '/og/tools.png',
          width: 1200,
          height: 630,
          alt: 'Travel Power Plugs Tools',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og/tools.png'],
    },
    alternates: {
      canonical,
    },
  };
}

/**
 * Get main cities for better SEO
 */
function getMainCities(countryName: string): string | null {
  const cityMap: Record<string, string> = {
    'Vietnam': 'Ho Chi Minh City, Hanoi',
    'Thailand': 'Bangkok, Phuket',
    'Japan': 'Tokyo, Osaka',
    'United Kingdom': 'London, Edinburgh',
    'France': 'Paris, Nice',
    'Germany': 'Berlin, Munich',
    'Italy': 'Rome, Milan',
    'Spain': 'Madrid, Barcelona',
    'United States': 'New York, Los Angeles',
    'Australia': 'Sydney, Melbourne',
    'India': 'Delhi, Mumbai',
    'China': 'Beijing, Shanghai',
    'Brazil': 'São Paulo, Rio de Janeiro',
    'Mexico': 'Mexico City, Cancun',
    'Canada': 'Toronto, Vancouver',
    'Indonesia': 'Jakarta, Bali',
    'Turkey': 'Istanbul, Ankara',
    'Egypt': 'Cairo, Alexandria',
    'Greece': 'Athens, Santorini',
    'Netherlands': 'Amsterdam, Rotterdam',
    // Add more as needed
  };
  
  return cityMap[countryName] || null;
}

/**
 * Generate comparison page metadata
 */
export function generateComparisonMetadata(
  typeA: string,
  typeB: string
): Metadata {
  const title = `Type ${typeA} vs Type ${typeB} Plug: Differences & Compatibility`;
  const description = `Compare Type ${typeA} and Type ${typeB} electrical plugs. Learn about compatibility, voltage differences, and which countries use each plug type.`;
  const canonical = canonicalUrl(`/compare/type-${typeA.toLowerCase()}-vs-type-${typeB.toLowerCase()}`);
  
  return {
    title,
    description,
    keywords: `Type ${typeA} plug, Type ${typeB} plug, plug comparison, electrical compatibility, travel adapter`,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonical,
      siteName: 'Travel Power Plugs',
    },
  };
}

/**
 * Generate continent page metadata
 */
export function generateContinentMetadata(
  continent: string,
  countryCount: number
): Metadata {
  const formattedContinent = continent.charAt(0).toUpperCase() + continent.slice(1).replace('-', ' ');
  const title = `${formattedContinent} Electric Plug Types - All ${countryCount} Countries`;
  const description = `Complete guide to electrical plugs and voltage in ${formattedContinent}. Find adapter requirements for all ${countryCount} countries in ${formattedContinent}.`;
  const canonical = canonicalUrl(`/continent/${continent}`);
  
  return {
    title,
    description,
    keywords: `${formattedContinent} plug types, ${formattedContinent} adapters, ${formattedContinent} voltage, travel ${formattedContinent}`,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
      siteName: 'Travel Power Plugs',
    },
  };
}

/**
 * Generate plug type page metadata
 */
export function generatePlugTypeMetadata(
  plugType: string,
  plugName: string,
  countries: string[]
): Metadata {
  const countryList = countries.slice(0, 3).join(', ');
  const title = `Type ${plugType} Plug: ${plugName} - Used in ${countries.length} Countries`;
  const description = `Type ${plugType} (${plugName}) electrical plug guide. Used in ${countryList} and ${countries.length - 3} more countries. Learn about compatibility and specifications.`;
  const canonical = canonicalUrl(`/plug-type/type-${plugType.toLowerCase()}`);
  
  return {
    title,
    description,
    keywords: `Type ${plugType} plug, ${plugName}, electrical plug, plug specifications, ${countryList}`,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonical,
      siteName: 'Travel Power Plugs',
    },
  };
}
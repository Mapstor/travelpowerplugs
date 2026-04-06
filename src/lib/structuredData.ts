import { Country } from '@/data/countries';

export interface FAQ {
  question: string;
  answer: string;
}

export interface Breadcrumb {
  name: string;
  url: string;
}

export interface PageMeta {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export interface ListItem {
  name: string;
  url?: string;
  description?: string;
  position?: number;
}

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export interface DatasetMeta {
  name: string;
  description: string;
  keywords: string[];
  version: string;
}

/**
 * Generate FAQPage schema for country pages and guides
 */
export function faqPageSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function breadcrumbSchema(crumbs: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

/**
 * Generate WebPage schema
 */
export function webPageSchema(page: PageMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page.title,
    "description": page.description,
    "url": page.url,
    ...(page.author && {
      "author": {
        "@type": "Person",
        "name": page.author
      }
    }),
    ...(page.datePublished && { "datePublished": page.datePublished }),
    ...(page.dateModified && { "dateModified": page.dateModified }),
    "publisher": {
      "@type": "Organization",
      "name": "Travel Power Plugs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://travelpowerplugs.com/logo.png"
      }
    }
  };
}

/**
 * Generate WebSite schema for homepage
 */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Travel Power Plugs",
    "url": "https://travelpowerplugs.com",
    "description": "Find the right power adapter for your travels. Check plug types, voltage, and socket compatibility for 227 countries and territories worldwide.",
    "publisher": {
      "@type": "Organization",
      "name": "Travel Power Plugs"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://travelpowerplugs.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Generate ItemList schema for continent and comparison pages
 */
export function itemListSchema(items: ListItem[], listName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": listName,
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": item.position || index + 1,
      "item": {
        "@type": "Thing",
        "name": item.name,
        ...(item.url && { "url": item.url }),
        ...(item.description && { "description": item.description })
      }
    }))
  };
}

/**
 * Generate HowTo schema for tool pages
 */
export function howToSchema(name: string, description: string, steps: HowToStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "name": step.name,
      "text": step.text,
      "position": index + 1,
      ...(step.image && {
        "image": {
          "@type": "ImageObject",
          "url": step.image
        }
      })
    }))
  };
}

/**
 * Generate Dataset schema for compatibility matrix
 */
export function datasetSchema(meta: DatasetMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": meta.name,
    "description": meta.description,
    "keywords": meta.keywords,
    "creator": {
      "@type": "Organization",
      "name": "Travel Power Plugs",
      "url": "https://travelpowerplugs.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Travel Power Plugs",
      "url": "https://travelpowerplugs.com"
    },
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "version": meta.version,
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString()
  };
}

/**
 * Generate Organization schema
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Travel Power Plugs",
    "url": "https://travelpowerplugs.com",
    "logo": "https://travelpowerplugs.com/logo.png",
    "description": "The definitive guide to electrical plugs, sockets, and adapters for international travel.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "contact@travelpowerplugs.com"
    }
  };
}

/**
 * Generate country-specific FAQs
 */
export function generateCountryFAQs(country: Country): FAQ[] {
  return [
    {
      question: `What plug type does ${country.name} use?`,
      answer: `${country.name} uses Type ${country.plugTypes.join(' and Type ')} electrical outlets. The standard voltage is ${country.voltage}V at ${country.frequency}Hz frequency.`
    },
    {
      question: `Do I need a travel adapter for ${country.name}?`,
      answer: country.hasAdapter
        ? `Whether you need an adapter depends on your home country. US travelers need an adapter since ${country.name} uses Type ${country.plugTypes.join(', ')} plugs. UK travelers ${country.plugTypes.includes('G') ? 'do not need an adapter' : 'need an adapter'}. EU travelers ${country.plugTypes.some(p => ['C', 'E', 'F'].includes(p)) ? 'typically do not need an adapter' : 'need an adapter'}.`
        : `Most travelers do not need an adapter for ${country.name} as it uses Type ${country.plugTypes.join(', ')} plugs which are widely compatible.`
    },
    {
      question: `What is the voltage in ${country.name}?`,
      answer: `The standard voltage in ${country.name} is ${country.voltage} volts at ${country.frequency}Hz. ${country.voltage > 127 ? 'This is higher than North American voltage (120V), so check device compatibility.' : 'This voltage is compatible with most modern electronics.'}`
    },
    {
      question: `Do I need a voltage converter for ${country.name}?`,
      answer: country.voltage > 127
        ? `You may need a voltage converter for ${country.name} if your devices only support 120V. Most modern electronics (phones, laptops, cameras) support dual voltage (100-240V) and only need a plug adapter.`
        : `Most travelers do not need a voltage converter for ${country.name} as the ${country.voltage}V supply is compatible with dual voltage devices.`
    },
    {
      question: `What is the best travel adapter for ${country.name}?`,
      answer: `For ${country.name}, you need an adapter that supports Type ${country.plugTypes.join(' and Type ')} plugs. A universal travel adapter with these plug types will work perfectly.`
    }
  ];
}
import { Metadata } from "next";
import { getAllCountries } from "@/lib/countries";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title:
    "Travel Power Plugs — Power Outlets & Adapters for Every Country (2026)",
  description:
    "Check which power plugs, outlets, and voltage are used in 192 countries. Interactive map, adapter checker, and complete travel power guides.",
  openGraph: {
    title:
      "Travel Power Plugs — Power Outlets & Adapters for Every Country (2026)",
    description:
      "Check which power plugs, outlets, and voltage are used in 192 countries. Interactive map, adapter checker, and complete travel power guides.",
    type: "website",
    url: "https://travelpowerplugs.com/",
  },
};

export default async function HomePage() {
  const countries = await getAllCountries();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Travel Power Plugs",
    url: "https://travelpowerplugs.com/",
    description:
      "Check which power plugs, outlets, and voltage are used in 192 countries.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://travelpowerplugs.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient countries={countries} />
    </>
  );
}

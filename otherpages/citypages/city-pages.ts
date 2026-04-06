/**
 * City page slugs for inclusion in generateStaticParams().
 *
 * These are city-specific power plug guide pages that use the same
 * dynamic route and page template as country pages.
 *
 * Each slug corresponds to a data file in src/data/countries/.
 */

export const citySlugs = [
  "singapore-power-plug-type",
  "dubai-power-plug-type",
  "hong-kong-power-plug-type",
  "bali-power-plug-type",
  "london-power-plug-type",
  "amsterdam-power-plug-type",
] as const;

export type CitySlug = (typeof citySlugs)[number];

/**
 * Map of city slugs to their parent country slugs.
 * Useful for breadcrumbs, related links, and SEO.
 */
export const cityToCountryMap: Record<CitySlug, string> = {
  "singapore-power-plug-type":
    "singapur-electric-plug-types-will-you-need-an-adapter-for-singapur",
  "dubai-power-plug-type":
    "united-arab-emirates-electric-plug-types-which-adapter-for-uae",
  "hong-kong-power-plug-type":
    "3-electric-plug-types-in-china-will-you-need-an-adapter",
  "bali-power-plug-type":
    "indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia",
  "london-power-plug-type":
    "united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk",
  "amsterdam-power-plug-type":
    "netherlands-electric-plug-types-will-you-need-an-adapter",
};

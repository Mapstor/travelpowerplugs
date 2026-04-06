import { Metadata } from "next";
import RegionHub, { buildRegionMetadata } from "@/components/RegionHub";
import { getRegion } from "@/lib/region-data";
import "@/styles/region-hub.css";

const region = getRegion("north-america")!;

export const metadata: Metadata = buildRegionMetadata(region);

export default function NorthAmericaPage() {
  return <RegionHub region={region} />;
}

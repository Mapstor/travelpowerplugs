import { Metadata } from "next";
import RegionHub, { buildRegionMetadata } from "@/components/RegionHub";
import { getRegion } from "@/lib/region-data";
import "@/styles/region-hub.css";

const region = getRegion("south-america")!;

export const metadata: Metadata = buildRegionMetadata(region);

export default function SouthAmericaPage() {
  return <RegionHub region={region} />;
}

/**
 * Plug compatibility logic for travel adapter tools.
 *
 * Cross-compatibility rules:
 *  - Type C (Europlug, 2-pin round) fits into E, F, J, K, L, N sockets
 *  - Type E and F sockets are cross-compatible (both accept the other's plug)
 *  - Type A plug fits into Type B sockets (B is A + grounding pin)
 *  - Type G (UK) has no cross-compatibility
 *  - Type I (AU/CN) has no cross-compatibility
 */

/** Which *sockets* a given plug type can physically fit into. */
export const PLUG_FITS_INTO: Record<string, string[]> = {
  A: ["A", "B"],
  B: ["B"],
  C: ["C", "E", "F", "J", "K", "L", "N"],
  D: ["D"],
  E: ["E", "F"],
  F: ["E", "F"],
  G: ["G"],
  H: ["H"],
  I: ["I"],
  J: ["J"],
  K: ["K"],
  L: ["L"],
  M: ["M"],
  N: ["N"],
  O: ["O"],
};

export interface CompatibilityResult {
  status: "compatible" | "incompatible" | "partial";
  matchingFromTypes: string[];
  nonMatchingFromTypes: string[];
  voltageOk: boolean;
  voltageDiff: number;
  frequencyMatch: boolean;
  fromVoltage: string;
  toVoltage: string;
  fromFrequency: string;
  toFrequency: string;
  fromPlugTypes: string[];
  toPlugTypes: string[];
}

/**
 * Parse a voltage string like "230V" or "100-127V" into [min, max].
 */
export function parseVoltageRange(v: string): [number, number] {
  const nums = v.match(/\d+/g)?.map(Number) ?? [];
  if (nums.length >= 2) return [Math.min(...nums), Math.max(...nums)];
  if (nums.length === 1) return [nums[0], nums[0]];
  return [0, 0];
}

export function checkCompatibility(
  fromPlugTypes: string[],
  toPlugTypes: string[],
  fromVoltage: string,
  toVoltage: string,
  fromFrequency: string,
  toFrequency: string
): CompatibilityResult {
  const matching: string[] = [];
  const nonMatching: string[] = [];

  for (const fp of fromPlugTypes) {
    const fitsSockets = PLUG_FITS_INTO[fp] ?? [fp];
    const fits = toPlugTypes.some((tp) => fitsSockets.includes(tp));
    if (fits) matching.push(fp);
    else nonMatching.push(fp);
  }

  const status: CompatibilityResult["status"] =
    matching.length === fromPlugTypes.length
      ? "compatible"
      : matching.length > 0
        ? "partial"
        : "incompatible";

  // Voltage comparison
  const [fromMin, fromMax] = parseVoltageRange(fromVoltage);
  const [toMin, toMax] = parseVoltageRange(toVoltage);
  const diff = Math.abs(fromMin - toMin);
  const voltageOk = diff <= 20;

  // Frequency
  const freqMatch = fromFrequency === toFrequency;

  return {
    status,
    matchingFromTypes: matching,
    nonMatchingFromTypes: nonMatching,
    voltageOk,
    voltageDiff: diff,
    frequencyMatch: freqMatch,
    fromVoltage,
    toVoltage,
    fromFrequency,
    toFrequency,
    fromPlugTypes,
    toPlugTypes,
  };
}

/**
 * Generate a human-readable adapter recommendation.
 */
export function getAdapterRecommendation(
  nonMatchingFromTypes: string[],
  toPlugTypes: string[]
): string {
  if (nonMatchingFromTypes.length === 0) return "";
  const from = nonMatchingFromTypes.map((t) => `Type ${t}`).join("/");
  const to = toPlugTypes.map((t) => `Type ${t}`).join("/");
  return `Get a ${from} to ${to} adapter`;
}

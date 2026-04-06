export interface PlugTypeDetail {
  id: string;
  name: string;
  subtitle: string;
  pins: number;
  pinShape: 'round' | 'flat' | 'mixed' | 'rectangular';
  pinDiameter: number;
  pinSpacing: number;
  ratedAmps: number;
  grounded: boolean;
  hasGroundClips: boolean;
  pinRadius: number;
  bodyWidth: number;
  bodyHeight: number;
  bodyCornerRadius: number;
  noseRadius: number;
  recessRadius: number;
  faceplateSize: number;
}

export interface AdapterInfo {
  origin: string;
  originPlugTypes: string;
  adapterNeeded: boolean;
  converterNeeded: boolean | 'maybe';
  notes: string;
}

export interface LocalPurchaseOption {
  name: string;
  type: 'electronics' | 'supermarket' | 'convenience' | 'airport' | 'hardware' | 'hotel';
  city?: string;
  priceRange: string;
  note: string;
}

export interface NeighborCountry {
  name: string;
  slug: string;
  plugTypes: string[];
  voltage: number;
  sameAsSubject: 'identical' | 'compatible' | 'mostly' | 'partially' | 'different';
  adapterNote?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedCountry {
  name: string;
  slug: string;
}

export interface DeviceOverride {
  device: string;
  dualVoltage: string;
  adapterOnly: string;
  note: string;
}

export interface CountryPlugData {
  slug: string;
  name: string;
  demonym: string;
  continent: string;
  region: string;
  voltage: number;
  frequency: 50 | 60;
  complexityTier: 'simple' | 'moderate' | 'complex';
  plugTypes: PlugTypeDetail[];
  quirks?: string[];
  phaseOutNote?: string;
  travelContext: string;
  adapterNeeded: AdapterInfo[];
  localPurchaseOptions: LocalPurchaseOption[];
  airportName?: string;
  airportCode?: string;
  neighbors: NeighborCountry[];
  hotelAdapterAvailability: 'rare' | 'sometimes' | 'common' | 'always';
  hotelUSBPorts: 'rare' | 'sometimes' | 'common' | 'always';
  hotelHairDryers: 'rare' | 'sometimes' | 'common' | 'always' | 'standard';
  accommodationNote: string;
  deviceOverrides?: DeviceOverride[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  relatedCountries: RelatedCountry[];
}
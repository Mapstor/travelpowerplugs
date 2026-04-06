import { PlugType } from '../data/countries';
import { COMPATIBILITY_MATRIX } from '../data/plugTypes';
import countriesPlugsData from '../data/countries-plugs.json';

export interface PlugTypeDetail {
  type: PlugType;
  status: 'primary' | 'secondary' | 'legacy';
  note?: string;
}

export interface CountryPlugData {
  name: string;
  slug: string;
  plugTypes: PlugTypeDetail[];
  voltage: {
    standard: number;
    range?: string;
  };
  frequency: {
    standard: 50 | 60;
  };
  notes?: string[];
}

export type CompatibilityLevel = 'perfect' | 'good' | 'partial' | 'adapter_required' | 'incompatible';

export interface CompatibilityResult {
  level: CompatibilityLevel;
  recommendation: string;
  details: {
    originPrimaryPlugs: PlugType[];
    destinationPrimarySockets: PlugType[];
    physicalCompatibility: boolean;
    voltageCompatible: boolean;
    frequencyCompatible: boolean;
    needsAdapter: boolean;
    needsVoltageConverter: boolean;
  };
  warnings?: string[];
}

class CompatibilityEngine {
  private countriesData: Record<string, CountryPlugData>;

  constructor() {
    this.countriesData = countriesPlugsData as Record<string, CountryPlugData>;
  }

  getCountryByCode(iso2: string): CountryPlugData | null {
    return this.countriesData[iso2.toLowerCase()] || null;
  }

  getPrimaryPlugTypes(country: CountryPlugData): PlugType[] {
    return country.plugTypes
      .filter(p => p.status === 'primary')
      .map(p => p.type);
  }

  checkPhysicalCompatibility(originPlug: PlugType, destinationSocket: PlugType): boolean {
    const compatibility = COMPATIBILITY_MATRIX[originPlug];
    return compatibility?.[destinationSocket] === 'full' || compatibility?.[destinationSocket] === 'partial';
  }

  checkVoltageCompatibility(originVoltage: number, destinationVoltage: number): boolean {
    const tolerance = 0.1;
    const ratio = Math.abs(originVoltage - destinationVoltage) / Math.max(originVoltage, destinationVoltage);
    return ratio <= tolerance;
  }

  checkFrequencyCompatibility(originFreq: number, destinationFreq: number): boolean {
    return originFreq === destinationFreq;
  }

  analyzeCompatibility(originIso2: string, destinationIso2: string): CompatibilityResult {
    const originCountry = this.getCountryByCode(originIso2);
    const destinationCountry = this.getCountryByCode(destinationIso2);

    if (!originCountry || !destinationCountry) {
      return {
        level: 'incompatible',
        recommendation: 'Country data not found',
        details: {
          originPrimaryPlugs: [],
          destinationPrimarySockets: [],
          physicalCompatibility: false,
          voltageCompatible: false,
          frequencyCompatible: false,
          needsAdapter: true,
          needsVoltageConverter: true,
        },
      };
    }

    const originPrimaryPlugs = this.getPrimaryPlugTypes(originCountry);
    const destinationPrimarySockets = this.getPrimaryPlugTypes(destinationCountry);

    let bestPhysicalMatch = false;
    let hasAnyPhysicalMatch = false;

    for (const originPlug of originPrimaryPlugs) {
      for (const destinationSocket of destinationPrimarySockets) {
        const isCompatible = this.checkPhysicalCompatibility(originPlug, destinationSocket);
        if (isCompatible) {
          hasAnyPhysicalMatch = true;
          if (COMPATIBILITY_MATRIX[originPlug]?.[destinationSocket] === 'full') {
            bestPhysicalMatch = true;
          }
        }
      }
    }

    const voltageCompatible = this.checkVoltageCompatibility(
      originCountry.voltage.standard,
      destinationCountry.voltage.standard
    );

    const frequencyCompatible = this.checkFrequencyCompatibility(
      originCountry.frequency.standard,
      destinationCountry.frequency.standard
    );

    const needsAdapter = !bestPhysicalMatch;
    const needsVoltageConverter = !voltageCompatible;

    let level: CompatibilityLevel;
    let recommendation: string;
    const warnings: string[] = [];

    if (bestPhysicalMatch && voltageCompatible && frequencyCompatible) {
      level = 'perfect';
      recommendation = `Your ${originCountry.name} devices will work directly in ${destinationCountry.name} without any adapters.`;
    } else if (bestPhysicalMatch && voltageCompatible) {
      level = 'good';
      recommendation = `Your ${originCountry.name} devices will work directly in ${destinationCountry.name}. The frequency difference (${originCountry.frequency.standard}Hz vs ${destinationCountry.frequency.standard}Hz) may affect some sensitive electronics.`;
      if (!frequencyCompatible) {
        warnings.push('Frequency difference may affect clocks, motors, and some electronic devices');
      }
    } else if (hasAnyPhysicalMatch && voltageCompatible) {
      level = 'partial';
      recommendation = `You may need a simple plug adapter for ${destinationCountry.name}. Most ${originCountry.name} devices will fit, but grounding may not work perfectly.`;
      warnings.push('Physical fit may be loose or require force');
    } else if (bestPhysicalMatch && !voltageCompatible) {
      level = 'adapter_required';
      recommendation = `You need a voltage converter for ${destinationCountry.name}. Plugs fit perfectly, but voltage differs (${originCountry.voltage.standard}V vs ${destinationCountry.voltage.standard}V).`;
      warnings.push(`Voltage difference: ${originCountry.voltage.standard}V → ${destinationCountry.voltage.standard}V`);
    } else {
      level = 'adapter_required';
      recommendation = `You need both a plug adapter and ${needsVoltageConverter ? 'voltage converter' : 'just an adapter'} for ${destinationCountry.name}.`;
      if (needsVoltageConverter) {
        warnings.push(`Voltage difference: ${originCountry.voltage.standard}V → ${destinationCountry.voltage.standard}V`);
      }
    }

    return {
      level,
      recommendation,
      details: {
        originPrimaryPlugs,
        destinationPrimarySockets,
        physicalCompatibility: bestPhysicalMatch,
        voltageCompatible,
        frequencyCompatible,
        needsAdapter,
        needsVoltageConverter,
      },
      warnings: warnings.length > 0 ? warnings : undefined,
    };
  }

  findRequiredAdapter(originIso2: string, destinationIso2: string): PlugType[] | null {
    const result = this.analyzeCompatibility(originIso2, destinationIso2);
    
    if (!result.details.needsAdapter) {
      return null;
    }

    const destinationCountry = this.getCountryByCode(destinationIso2);
    if (!destinationCountry) {
      return null;
    }

    return this.getPrimaryPlugTypes(destinationCountry);
  }

  getUniversalAdapterRecommendation(countries: string[]): PlugType[] {
    const allRequiredTypes = new Set<PlugType>();
    
    countries.forEach(iso2 => {
      const country = this.getCountryByCode(iso2);
      if (country) {
        this.getPrimaryPlugTypes(country).forEach(type => allRequiredTypes.add(type));
      }
    });

    return Array.from(allRequiredTypes).sort();
  }
}

export const compatibilityEngine = new CompatibilityEngine();

export function checkCompatibility(originIso2: string, destinationIso2: string): CompatibilityResult {
  return compatibilityEngine.analyzeCompatibility(originIso2, destinationIso2);
}

export function getRequiredAdapter(originIso2: string, destinationIso2: string): PlugType[] | null {
  return compatibilityEngine.findRequiredAdapter(originIso2, destinationIso2);
}

export function getUniversalAdapter(countries: string[]): PlugType[] {
  return compatibilityEngine.getUniversalAdapterRecommendation(countries);
}

export function getCountryPlugData(iso2: string): CountryPlugData | null {
  return compatibilityEngine.getCountryByCode(iso2);
}
'use client';

import React, { useState, useEffect } from 'react';
import { COUNTRIES, Country, PlugType } from '@/data/countries';
import { COMPATIBILITY_MATRIX } from '@/data/plugTypes';
import { getCountryPlugData, checkCompatibility } from '@/lib/compatibility';

const TripPlannerTool: React.FC = () => {
  const [homeCountry, setHomeCountry] = useState<Country | null>(null);
  const [destinations, setDestinations] = useState<Country[]>([]);
  const [homeQuery, setHomeQuery] = useState('');
  const [destinationQuery, setDestinationQuery] = useState('');
  const [homeSuggestions, setHomeSuggestions] = useState<Country[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<Country[]>([]);
  const [showHomeSuggestions, setShowHomeSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);

  // Handle home country search
  useEffect(() => {
    if (homeQuery.length > 1) {
      const filtered = COUNTRIES.filter(country =>
        country.name.toLowerCase().includes(homeQuery.toLowerCase())
      ).slice(0, 8);
      setHomeSuggestions(filtered);
      setShowHomeSuggestions(true);
    } else {
      setHomeSuggestions([]);
      setShowHomeSuggestions(false);
    }
  }, [homeQuery]);

  // Handle destination search
  useEffect(() => {
    if (destinationQuery.length > 1) {
      const filtered = COUNTRIES.filter(country =>
        country.name.toLowerCase().includes(destinationQuery.toLowerCase()) &&
        !destinations.some(dest => dest.slug === country.slug)
      ).slice(0, 8);
      setDestinationSuggestions(filtered);
      setShowDestinationSuggestions(true);
    } else {
      setDestinationSuggestions([]);
      setShowDestinationSuggestions(false);
    }
  }, [destinationQuery, destinations]);

  const selectHomeCountry = (country: Country) => {
    setHomeCountry(country);
    setHomeQuery(country.name);
    setShowHomeSuggestions(false);
  };

  const addDestination = (country: Country) => {
    if (destinations.length < 8 && !destinations.some(dest => dest.slug === country.slug)) {
      setDestinations([...destinations, country]);
      setDestinationQuery('');
      setShowDestinationSuggestions(false);
    }
  };

  const removeDestination = (countrySlug: string) => {
    setDestinations(destinations.filter(dest => dest.slug !== countrySlug));
  };

  const analyzeTripRequirements = () => {
    if (!homeCountry || destinations.length === 0) return null;

    // Get practical plug data for all countries
    const homePlugData = getCountryPlugData(homeCountry.iso2);
    const destPlugDataMap = new Map();
    destinations.forEach(dest => {
      const plugData = getCountryPlugData(dest.iso2);
      destPlugDataMap.set(dest.slug, plugData);
    });

    // Check practical compatibility for each destination
    const compatibilityMap = new Map<string, { 
      compatible: boolean; 
      needsAdapter: boolean;
      practicallyCompatible: boolean;
      primaryPlugsOnly: string[];
      warnings: string[];
    }>();
    
    destinations.forEach(dest => {
      const compatibility = checkCompatibility(homeCountry.iso2, dest.iso2);
      const destPlugData = destPlugDataMap.get(dest.slug);
      const primaryPlugs = destPlugData?.plugTypes.filter((p: any) => p.status === 'primary').map((p: any) => p.type) || [];
      
      // Check if home country plugs work with destination's PRIMARY plugs
      const practicallyCompatible = homePlugData?.plugTypes
        .filter(p => p.status === 'primary')
        .some(homePlug => 
          primaryPlugs.some((destPlug: any) => {
            const compat = (COMPATIBILITY_MATRIX as any)[homePlug.type]?.[destPlug];
            return compat === 'full' || compat === 'partial';
          })
        ) || false;

      const warnings = [];
      if (compatibility && !practicallyCompatible) {
        if (compatibility.details?.needsAdapter) {
          warnings.push('Adapter required for different plug standards');
        }
        if (compatibility.details?.needsVoltageConverter) {
          warnings.push('Voltage converter may be needed for some devices');
        }
      }

      compatibilityMap.set(dest.slug, {
        compatible: practicallyCompatible, // Use practical compatibility
        needsAdapter: !practicallyCompatible,
        practicallyCompatible,
        primaryPlugsOnly: primaryPlugs,
        warnings
      });
    });

    // Get all PRIMARY plug types needed
    const allPrimaryPlugs = new Set<PlugType>();
    destinations.forEach(dest => {
      const destPlugData = destPlugDataMap.get(dest.slug);
      const primaryPlugs = destPlugData?.plugTypes.filter((p: any) => p.status === 'primary') || [];
      primaryPlugs.forEach((plug: any) => allPrimaryPlugs.add(plug.type));
    });

    // Find universal adapter coverage (based on PRIMARY plugs only)
    const universalPlugTypes: PlugType[] = ['A', 'C', 'G', 'I']; // Most common universal adapter types
    const universalCoverage = destinations.filter(dest => {
      const destPlugData = destPlugDataMap.get(dest.slug);
      const primaryPlugs = destPlugData?.plugTypes.filter((p: any) => p.status === 'primary') || [];
      return primaryPlugs.some((plug: any) => universalPlugTypes.includes(plug.type));
    });

    // Check voltage compatibility using practical data
    const voltageIssues = destinations.filter(dest => {
      const destPlugData = destPlugDataMap.get(dest.slug);
      const homeVoltage = homePlugData?.voltage?.standard || homeCountry.voltage;
      const destVoltage = destPlugData?.voltage?.standard || dest.voltage;
      return Math.abs(homeVoltage - destVoltage) > 20;
    });

    // Group countries by PRIMARY plug types needed
    const plugTypeGroups = new Map<string, Country[]>();
    destinations.forEach(dest => {
      const compatibility = compatibilityMap.get(dest.slug);
      if (compatibility && !compatibility.compatible) {
        const primaryPlugsStr = compatibility.primaryPlugsOnly.join(',');
        if (primaryPlugsStr && !plugTypeGroups.has(primaryPlugsStr)) {
          plugTypeGroups.set(primaryPlugsStr, []);
        }
        if (primaryPlugsStr) {
          plugTypeGroups.get(primaryPlugsStr)!.push(dest);
        }
      }
    });

    // Calculate practical vs official differences
    const practicalDifferences = destinations.filter(dest => {
      const destPlugData = destPlugDataMap.get(dest.slug);
      const allPlugTypes = dest.plugTypes;
      const primaryPlugTypes = destPlugData?.plugTypes.filter((p: any) => p.status === 'primary').map((p: any) => p.type) || [];
      return allPlugTypes.length !== primaryPlugTypes.length;
    });

    return {
      totalDestinations: destinations.length,
      needingAdapters: destinations.filter(dest => compatibilityMap.get(dest.slug)?.needsAdapter).length,
      universalCoverage: universalCoverage.length,
      universalCoveragePercent: Math.round((universalCoverage.length / destinations.length) * 100),
      voltageIssues,
      plugTypeGroups,
      compatibilityMap,
      allPrimaryPlugs: Array.from(allPrimaryPlugs),
      practicalDifferences: practicalDifferences.length,
      destPlugDataMap,
    };
  };

  const analysis = analyzeTripRequirements();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      {/* Home Country Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Home Country (where your devices are from):
        </label>
        <div className="relative">
          <input
            type="text"
            value={homeQuery}
            onChange={(e) => setHomeQuery(e.target.value)}
            placeholder="Search your home country..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {homeCountry && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <button
                onClick={() => {
                  setHomeCountry(null);
                  setHomeQuery('');
                }}
                className="text-gray-400 hover:text-gray-600 text-sm mr-1"
                title="Clear selection"
              >
                ×
              </button>
              <span className="text-sm text-gray-600">Type {homeCountry.plugTypes.join(', ')}</span>
              <img
                src={`https://flagcdn.com/w40/${homeCountry.iso2.toLowerCase()}.png`}
                alt={`${homeCountry.name} flag`}
                className="w-8 h-6 object-cover rounded"
              />
            </div>
          )}
        </div>
        
        {showHomeSuggestions && homeSuggestions.length > 0 && !homeCountry && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {homeSuggestions.map((country) => (
              <button
                key={country.slug}
                onClick={() => selectHomeCountry(country)}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center gap-3"
              >
                <img
                  src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                  alt={`${country.name} flag`}
                  className="w-8 h-6 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{country.name}</p>
                  <p className="text-sm text-gray-600">
                    Type {country.plugTypes.join(', ')} • {country.voltage}V
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Current Destinations */}
      {destinations.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            Your Destinations ({destinations.length}/8):
          </h3>
          <div className="flex flex-wrap gap-2">
            {destinations.map((dest) => (
              <div
                key={dest.slug}
                className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                <img
                  src={`https://flagcdn.com/w40/${dest.iso2.toLowerCase()}.png`}
                  alt={`${dest.name} flag`}
                  className="w-5 h-3 object-cover rounded"
                />
                <span className="text-sm font-medium">{dest.name}</span>
                <button
                  onClick={() => removeDestination(dest.slug)}
                  className="text-blue-600 hover:text-blue-800 ml-1"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Destination */}
      <div className="mb-8 relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add Destination (up to 8 countries):
        </label>
        <input
          type="text"
          value={destinationQuery}
          onChange={(e) => setDestinationQuery(e.target.value)}
          placeholder="Search destination countries..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={destinations.length >= 8}
        />
        
        {showDestinationSuggestions && destinationSuggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {destinationSuggestions.map((country) => (
              <button
                key={country.slug}
                onClick={() => addDestination(country)}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center gap-3"
              >
                <img
                  src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                  alt={`${country.name} flag`}
                  className="w-8 h-6 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{country.name}</p>
                  <p className="text-sm text-gray-600">
                    Type {country.plugTypes.join(', ')} • {country.voltage}V
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Analysis Results */}
      {analysis && homeCountry && (
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-6">Your Trip Analysis</h2>

          {/* Summary Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Trip Summary</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{analysis.totalDestinations}</div>
                <div className="text-sm text-blue-700">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{analysis.universalCoveragePercent}%</div>
                <div className="text-sm text-blue-700">Universal Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{analysis.allPrimaryPlugs.length}</div>
                <div className="text-sm text-blue-700">Primary Plug Types</div>
              </div>
            </div>
            
            {analysis.practicalDifferences > 0 && (
              <div className="mt-4 p-3 bg-yellow-100 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>💡 Practical Insight:</strong> {analysis.practicalDifferences} of your destinations have secondary/legacy plug types that are rare in modern buildings. Our recommendations focus on what you'll actually encounter.
                </p>
              </div>
            )}
          </div>

          {/* Packing List */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">📦 Recommended Packing List</h3>
            
            <div className="space-y-3">
              {/* Universal Adapter */}
              {analysis.universalCoverage > 0 && (
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <p className="font-medium">Universal Travel Adapter</p>
                    <p className="text-sm text-gray-600">
                      Covers {analysis.universalCoverage} of {analysis.totalDestinations} destinations: {
                        destinations.filter(dest => {
                          const destPlugData = analysis.destPlugDataMap.get(dest.slug);
                          const primaryPlugs = destPlugData?.plugTypes.filter((p: any) => p.status === 'primary') || [];
                          return primaryPlugs.some((plug: any) => ['A', 'C', 'G', 'I'].includes(plug.type));
                        }).map(d => d.name).join(', ')
                      }
                    </p>
                    <a
                      href="https://amazon.com/s?k=universal+travel+adapter&tag=your-affiliate-tag"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Shop Universal Adapters →
                    </a>
                  </div>
                </div>
              )}

              {/* Specific Adapters */}
              {Array.from(analysis.plugTypeGroups.entries()).map(([plugTypes, countries]) => (
                <div key={plugTypes} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center text-white text-sm">!</div>
                  <div>
                    <p className="font-medium">Type {plugTypes.replace(',', '/')} Adapter</p>
                    <p className="text-sm text-gray-600">
                      For: {countries.map(c => c.name).join(', ')}
                    </p>
                    <a
                      href={`https://amazon.com/s?k=travel+adapter+type+${plugTypes.split(',')[0]}&tag=your-affiliate-tag`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Shop Type {plugTypes.replace(',', '/')} Adapters →
                    </a>
                  </div>
                </div>
              ))}

              {/* Voltage Converters */}
              {analysis.voltageIssues.length > 0 && (
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-sm">⚡</div>
                  <div>
                    <p className="font-medium">Voltage Converter (Optional)</p>
                    <p className="text-sm text-gray-600">
                      Voltage differences in: {analysis.voltageIssues.map(c => `${c.name} (${c.voltage}V)`).join(', ')}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Most modern electronics are dual voltage and don't need converters. Check hair tools and appliances.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Country-by-Country Breakdown */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Country-by-Country Breakdown</h3>
            
            <div className="space-y-3">
              {destinations.map((dest) => {
                const compatibility = analysis.compatibilityMap.get(dest.slug);
                const destPlugData = analysis.destPlugDataMap.get(dest.slug);
                const primaryPlugs = destPlugData?.plugTypes.filter((p: any) => p.status === 'primary').map((p: any) => p.type) || [];
                const homeVoltage = getCountryPlugData(homeCountry.iso2)?.voltage?.standard || homeCountry.voltage;
                const destVoltage = destPlugData?.voltage?.standard || dest.voltage;
                
                return (
                  <div key={dest.slug} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://flagcdn.com/w40/${dest.iso2.toLowerCase()}.png`}
                        alt={`${dest.name} flag`}
                        className="w-8 h-6 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{dest.name}</p>
                        <p className="text-sm text-gray-600">
                          Primary: Type {primaryPlugs.join(', ') || 'N/A'} • {destVoltage}V
                        </p>
                        {compatibility?.warnings && compatibility.warnings.length > 0 && (
                          <p className="text-xs text-amber-600 mt-1">
                            ⚠️ {compatibility.warnings[0]}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        compatibility?.compatible
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {compatibility?.compatible ? 'No Adapter' : 'Adapter Needed'}
                      </span>
                      {Math.abs(homeVoltage - destVoltage) > 20 && (
                        <div className="text-xs text-orange-600 mt-1">
                          Voltage: {homeVoltage}V → {destVoltage}V
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Buy Everything Link */}
          <div className="mt-6 text-center">
            <a
              href="https://amazon.com/s?k=universal+travel+adapter+kit&tag=your-affiliate-tag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              🛒 Shop Complete Travel Adapter Kit →
            </a>
          </div>
        </div>
      )}

      {!homeCountry && (
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>Select your home country to start planning your trip</p>
        </div>
      )}

      {/* Enhanced Educational Content */}
      <div className="mt-12 space-y-8">
        {/* Multi-Country Travel Scenarios */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">🌍 Popular Multi-Country Routes & Adapter Strategies</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Easy Routes (One Adapter)</h3>
                <div className="space-y-4 text-sm">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-semibold">🇪🇺 Europe Grand Tour</h4>
                    <p className="text-gray-600 mb-2">UK → France → Germany → Italy → Spain</p>
                    <p><strong>Strategy:</strong> Type C universal adapter covers 80% of sockets</p>
                    <p><strong>Bonus:</strong> Same 230V voltage across all countries</p>
                  </div>
                  
                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-semibold">🌏 Southeast Asia Circuit</h4>
                    <p className="text-gray-600 mb-2">Thailand → Singapore → Malaysia → Vietnam</p>
                    <p><strong>Strategy:</strong> Type A/C combination adapter</p>
                    <p><strong>Bonus:</strong> 220V voltage consistent across region</p>
                  </div>

                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-semibold">🇺🇸 North America Road Trip</h4>
                    <p className="text-gray-600 mb-2">US → Canada → Mexico</p>
                    <p><strong>Strategy:</strong> No adapters needed!</p>
                    <p><strong>Bonus:</strong> Same Type A/B plugs throughout</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Complex Routes (Multiple Adapters)</h3>
                <div className="space-y-4 text-sm">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold">🌍 Around the World</h4>
                    <p className="text-gray-600 mb-2">US → Japan → Australia → India → UK</p>
                    <p><strong>Challenge:</strong> 5 different plug types (A, A, I, D, G)</p>
                    <p><strong>Strategy:</strong> Universal adapter + Type I for Australia</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold">🌍 Africa Safari</h4>
                    <p className="text-gray-600 mb-2">Kenya → Tanzania → South Africa</p>
                    <p><strong>Challenge:</strong> Type G → Type D → Type M transition</p>
                    <p><strong>Strategy:</strong> Country-specific adapters needed</p>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold">🌎 Americas Adventure</h4>
                    <p className="text-gray-600 mb-2">US → Brazil → Argentina → Chile</p>
                    <p><strong>Challenge:</strong> Type A → Type N → Type I → Type C</p>
                    <p><strong>Strategy:</strong> Universal adapter essential</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adapter Buying Guide */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">🛒 Universal Adapter Types</h3>
            
            <div className="space-y-4 text-sm">
              <div className="border border-green-200 rounded p-3 bg-green-50">
                <h4 className="font-semibold text-green-800">🌟 Premium Universal</h4>
                <p className="text-gray-700 mb-2">$25-40 • Covers 150+ countries</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Built-in USB ports (4-6)</li>
                  <li>• Surge protection</li>
                  <li>• LED power indicator</li>
                  <li>• Safety shutters</li>
                </ul>
                <p className="text-green-700 font-medium mt-2">Best for: Frequent travelers</p>
              </div>
              
              <div className="border border-blue-200 rounded p-3 bg-blue-50">
                <h4 className="font-semibold text-blue-800">💼 Business Travel</h4>
                <p className="text-gray-700 mb-2">$15-25 • Compact design</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Slim profile for briefcases</li>
                  <li>• 2-3 USB ports</li>
                  <li>• Covers 100+ countries</li>
                  <li>• Fast charging support</li>
                </ul>
                <p className="text-blue-700 font-medium mt-2">Best for: Business trips</p>
              </div>
              
              <div className="border border-gray-200 rounded p-3 bg-gray-50">
                <h4 className="font-semibold text-gray-800">🎒 Budget Basic</h4>
                <p className="text-gray-700 mb-2">$8-15 • Essential coverage</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• No USB ports</li>
                  <li>• Basic plug conversion</li>
                  <li>• Covers 50+ countries</li>
                  <li>• Larger size</li>
                </ul>
                <p className="text-gray-700 font-medium mt-2">Best for: Occasional travel</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">⚡ Power Management Tips</h3>
            
            <div className="space-y-4 text-sm">
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                <h4 className="font-semibold text-yellow-800 mb-2">🔌 Hotel Room Strategy</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Check for multiple outlet types in room</li>
                  <li>• Look for USB outlets in modern hotels</li>
                  <li>• Ask front desk for adapter loans</li>
                  <li>• Use bathroom outlets for shavers only</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded p-3">
                <h4 className="font-semibold text-blue-800 mb-2">📱 Device Charging Priority</h4>
                <ol className="text-gray-700 space-y-1">
                  <li>1. Phone (emergency communication)</li>
                  <li>2. Power bank (backup power)</li>
                  <li>3. Camera (capture memories)</li>
                  <li>4. Laptop (work/entertainment)</li>
                  <li>5. Other electronics</li>
                </ol>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded p-3">
                <h4 className="font-semibold text-green-800 mb-2">💡 Power Saving Mode</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Enable low power mode on phones</li>
                  <li>• Download offline maps before travel</li>
                  <li>• Use airplane mode in areas with poor signal</li>
                  <li>• Carry portable power bank</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">🌍 Regional Insights</h3>
            
            <div className="space-y-4 text-sm">
              <div className="bg-purple-50 border border-purple-200 rounded p-3">
                <h4 className="font-semibold text-purple-800 mb-2">🇪🇺 Europe Notes</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Type C works in most EU countries</li>
                  <li>• UK/Ireland need Type G adapter</li>
                  <li>• Swiss outlets often recessed</li>
                  <li>• Hotel bathrooms may have Type A/C</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded p-3">
                <h4 className="font-semibold text-orange-800 mb-2">🌏 Asia-Pacific</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Japan uses unique 100V voltage</li>
                  <li>• Australia/NZ use angled Type I</li>
                  <li>• China has mixed Type A/C/I</li>
                  <li>• Singapore has Type G (British style)</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded p-3">
                <h4 className="font-semibold text-red-800 mb-2">🌍 Africa & Middle East</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• South Africa uses unique Type M</li>
                  <li>• Many countries use Type D/G</li>
                  <li>• Power outages more common</li>
                  <li>• Bring power bank for backup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Scenarios */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6 text-red-800">🚨 Emergency Travel Scenarios & Solutions</h3>
          
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-red-700 mb-4">😱 Forgot Your Adapter?</h4>
              <div className="space-y-3">
                <div className="bg-white rounded p-3 border border-red-200">
                  <strong className="text-red-800">At Airport:</strong>
                  <ul className="text-gray-700 mt-1 space-y-1">
                    <li>• Electronics stores (expect 3-5x markup)</li>
                    <li>• Hotel gift shops (limited selection)</li>
                    <li>• Ask airline staff for recommendations</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded p-3 border border-red-200">
                  <strong className="text-red-800">In City:</strong>
                  <ul className="text-gray-700 mt-1 space-y-1">
                    <li>• Electronics stores (better prices)</li>
                    <li>• Pharmacies often carry basic adapters</li>
                    <li>• Hotel concierge can direct you</li>
                    <li>• Local convenience stores</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-700 mb-4">⚡ Power Emergency?</h4>
              <div className="space-y-3">
                <div className="bg-white rounded p-3 border border-red-200">
                  <strong className="text-red-800">Phone Dying:</strong>
                  <ul className="text-gray-700 mt-1 space-y-1">
                    <li>• Find cafes with charging stations</li>
                    <li>• Use public USB charging points</li>
                    <li>• Ask hotel reception for charger loan</li>
                    <li>• Download offline maps immediately</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded p-3 border border-red-200">
                  <strong className="text-red-800">Adapter Broken:</strong>
                  <ul className="text-gray-700 mt-1 space-y-1">
                    <li>• Check if hotel has spares</li>
                    <li>• Ask other guests (many carry extras)</li>
                    <li>• Use laptop USB ports to charge phone</li>
                    <li>• Find 24/7 electronics store</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Planning Tips */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900">🧠 Expert Trip Planning Strategies</h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white rounded-lg p-6 border border-indigo-200">
              <h4 className="font-semibold text-indigo-800 mb-4">📋 Pre-Trip Checklist</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" disabled />
                  <span>Research hotel room outlet types</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" disabled />
                  <span>Check device voltage compatibility</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" disabled />
                  <span>Pack universal adapter + USB chargers</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" disabled />
                  <span>Bring fully charged power bank</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" disabled />
                  <span>Download this tool for offline use</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" disabled />
                  <span>Test all adapters before departure</span>
                </label>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-4">💡 Smart Packing</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Pack adapters in carry-on (not checked bags)</li>
                <li>• Bring one extra adapter as backup</li>
                <li>• Use cable organizer for neat packing</li>
                <li>• Label adapters for different countries</li>
                <li>• Pack dual-voltage devices when possible</li>
                <li>• Consider GaN chargers (smaller, lighter)</li>
                <li>• Bring international power strip for groups</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-4">🎯 Money-Saving Tips</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Buy adapters at home (much cheaper)</li>
                <li>• Share adapters with travel companions</li>
                <li>• Check if credit card offers travel perks</li>
                <li>• Use hotel USB outlets when available</li>
                <li>• Buy local chargers for extended stays</li>
                <li>• Look for combo deals (adapter + power bank)</li>
                <li>• Check airport lounges for free charging</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlannerTool;
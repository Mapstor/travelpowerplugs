'use client';

import React, { useState, useEffect } from 'react';
import { COUNTRIES, Country } from '@/data/countries';
import { getCountryPlugData, CountryPlugData } from '@/lib/compatibility';

const VoltageCalculatorTool: React.FC = () => {
  const [deviceWattage, setDeviceWattage] = useState(50);
  const [originCountry, setOriginCountry] = useState<Country | null>(null);
  const [destinationCountry, setDestinationCountry] = useState<Country | null>(null);
  const [originQuery, setOriginQuery] = useState('');
  const [destinationQuery, setDestinationQuery] = useState('');
  const [originSuggestions, setOriginSuggestions] = useState<Country[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<Country[]>([]);
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);

  // Handle origin country search
  useEffect(() => {
    if (originQuery.length > 1) {
      const filtered = COUNTRIES.filter(country =>
        country.name.toLowerCase().includes(originQuery.toLowerCase())
      ).slice(0, 8);
      setOriginSuggestions(filtered);
      setShowOriginSuggestions(true);
    } else {
      setOriginSuggestions([]);
      setShowOriginSuggestions(false);
    }
  }, [originQuery]);

  // Handle destination country search
  useEffect(() => {
    if (destinationQuery.length > 1) {
      const filtered = COUNTRIES.filter(country =>
        country.name.toLowerCase().includes(destinationQuery.toLowerCase())
      ).slice(0, 8);
      setDestinationSuggestions(filtered);
      setShowDestinationSuggestions(true);
    } else {
      setDestinationSuggestions([]);
      setShowDestinationSuggestions(false);
    }
  }, [destinationQuery]);

  const selectOriginCountry = (country: Country) => {
    setOriginCountry(country);
    setOriginQuery(country.name);
    setShowOriginSuggestions(false);
  };

  const selectDestinationCountry = (country: Country) => {
    setDestinationCountry(country);
    setDestinationQuery(country.name);
    setShowDestinationSuggestions(false);
  };

  const calculateCompatibility = () => {
    if (!originCountry || !destinationCountry) return null;

    // Get enhanced voltage data
    const originPlugData = getCountryPlugData(originCountry.iso2);
    const destinationPlugData = getCountryPlugData(destinationCountry.iso2);
    
    // Use enhanced voltage data if available, otherwise fallback to basic data
    const originVoltage = originPlugData?.voltage.standard || originCountry.voltage;
    const destinationVoltage = destinationPlugData?.voltage.standard || destinationCountry.voltage;
    const originFrequency = originPlugData?.frequency.standard || originCountry.frequency;
    const destinationFrequency = destinationPlugData?.frequency.standard || destinationCountry.frequency;
    
    const voltageRatio = destinationVoltage / originVoltage;
    const voltageDifference = Math.abs(originVoltage - destinationVoltage);
    const frequencyDifference = originFrequency !== destinationFrequency;
    
    // Determine safety level
    let status: 'safe' | 'warning' | 'danger' = 'safe';
    let statusText = '';
    let recommendation = '';
    let converterNeeded = false;

    // Same voltage (±10V tolerance)
    if (voltageDifference <= 10) {
      status = 'safe';
      statusText = 'Safe - Compatible Voltage';
      recommendation = 'Your device will work safely. Only a plug adapter may be needed.';
    }
    // Dual voltage range (most modern devices)
    else if (
      (originVoltage >= 100 && originVoltage <= 127) &&
      (destinationVoltage >= 200 && destinationVoltage <= 240)
    ) {
      status = 'warning';
      statusText = 'Check Device - Dual Voltage Required';
      recommendation = 'Most modern electronics support 100-240V and will work fine. Check your device label for "INPUT: 100-240V". Hair dryers and some appliances may need a converter.';
    }
    // High to low voltage (usually safe but less efficient)
    else if (voltageRatio < 0.8) {
      status = 'warning';
      statusText = 'Lower Voltage - May Work Slower';
      recommendation = 'Your device may work but at reduced power/speed. Generally safe for electronics.';
    }
    // Low to high voltage (dangerous without converter)
    else if (voltageRatio > 1.2) {
      status = 'danger';
      statusText = 'Voltage Converter Required';
      recommendation = 'Your device will be damaged without a voltage converter. Do NOT plug in directly.';
      converterNeeded = true;
    }

    // Calculate recommended converter wattage (add 25% safety margin)
    const recommendedConverterWattage = Math.ceil(deviceWattage * 1.25 / 50) * 50;

    // Add practical insights
    const practicalInsights = [];
    
    // Voltage range insights
    if (originPlugData?.voltage.range || destinationPlugData?.voltage.range) {
      if (originPlugData?.voltage.range) {
        practicalInsights.push(`${originCountry.name} voltage can vary: ${originPlugData.voltage.range}`);
      }
      if (destinationPlugData?.voltage.range) {
        practicalInsights.push(`${destinationCountry.name} voltage can vary: ${destinationPlugData.voltage.range}`);
      }
    }
    
    // Practical notes from enhanced data
    if (originPlugData?.notes) {
      const notes = Array.isArray(originPlugData.notes) ? originPlugData.notes : [originPlugData.notes];
      practicalInsights.push(...notes.filter(note => 
        note.toLowerCase().includes('voltage') || note.toLowerCase().includes('power')
      ));
    }
    if (destinationPlugData?.notes) {
      const notes = Array.isArray(destinationPlugData.notes) ? destinationPlugData.notes : [destinationPlugData.notes];
      practicalInsights.push(...notes.filter(note => 
        note.toLowerCase().includes('voltage') || note.toLowerCase().includes('power')
      ));
    }

    return {
      status,
      statusText,
      recommendation,
      converterNeeded,
      voltageRatio,
      voltageDifference,
      frequencyDifference,
      recommendedConverterWattage,
      deviceWattageOk: deviceWattage <= 3000, // Most converters max out around 3000W
      originVoltage,
      destinationVoltage,
      originFrequency,
      destinationFrequency,
      originPlugData,
      destinationPlugData,
      practicalInsights,
    };
  };

  const compatibility = calculateCompatibility();

  const getStatusColor = (status: 'safe' | 'warning' | 'danger') => {
    switch (status) {
      case 'safe': return 'bg-green-50 border-green-200 text-green-800';
      case 'warning': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'danger': return 'bg-red-50 border-red-200 text-red-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getStatusIcon = (status: 'safe' | 'warning' | 'danger') => {
    switch (status) {
      case 'safe': return '✅';
      case 'warning': return '⚠️';
      case 'danger': return '❌';
      default: return 'ℹ️';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      {/* Device Wattage */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Device Wattage: {deviceWattage}W
        </label>
        <div className="px-3 py-2 bg-gray-50 rounded-lg">
          <input
            type="range"
            min="1"
            max="3000"
            value={deviceWattage}
            onChange={(e) => setDeviceWattage(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1W</span>
            <span>1500W</span>
            <span>3000W</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Common: Phone charger (5W), Laptop (65W), Hair dryer (1800W)
        </div>
      </div>

      {/* Country Inputs */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Origin Country */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Device is from:
          </label>
          <div className="relative">
            <input
              type="text"
              value={originQuery}
              onChange={(e) => setOriginQuery(e.target.value)}
              placeholder="Search your home country..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {originCountry && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <button
                  onClick={() => {
                    setOriginCountry(null);
                    setOriginQuery('');
                  }}
                  className="text-gray-400 hover:text-gray-600 text-sm mr-1"
                  title="Clear selection"
                >
                  ×
                </button>
                <span className="text-sm text-gray-600">{originCountry.voltage}V</span>
                <img
                  src={`https://flagcdn.com/w40/${originCountry.iso2.toLowerCase()}.png`}
                  alt={`${originCountry.name} flag`}
                  className="w-6 h-4 object-cover rounded"
                />
              </div>
            )}
          </div>
          
          {showOriginSuggestions && originSuggestions.length > 0 && !originCountry && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {originSuggestions.map((country) => (
                <button
                  key={country.slug}
                  onClick={() => selectOriginCountry(country)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                      alt={`${country.name} flag`}
                      className="w-6 h-4 object-cover rounded"
                    />
                    <span className="font-medium">{country.name}</span>
                  </div>
                  <span className="text-sm text-gray-600">{country.voltage}V</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Destination Country */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Using it in:
          </label>
          <div className="relative">
            <input
              type="text"
              value={destinationQuery}
              onChange={(e) => setDestinationQuery(e.target.value)}
              placeholder="Search destination country..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {destinationCountry && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <button
                  onClick={() => {
                    setDestinationCountry(null);
                    setDestinationQuery('');
                  }}
                  className="text-gray-400 hover:text-gray-600 text-sm mr-1"
                  title="Clear selection"
                >
                  ×
                </button>
                <span className="text-sm text-gray-600">{destinationCountry.voltage}V</span>
                <img
                  src={`https://flagcdn.com/w40/${destinationCountry.iso2.toLowerCase()}.png`}
                  alt={`${destinationCountry.name} flag`}
                  className="w-6 h-4 object-cover rounded"
                />
              </div>
            )}
          </div>
          
          {showDestinationSuggestions && destinationSuggestions.length > 0 && !destinationCountry && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {destinationSuggestions.map((country) => (
                <button
                  key={country.slug}
                  onClick={() => selectDestinationCountry(country)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                      alt={`${country.name} flag`}
                      className="w-6 h-4 object-cover rounded"
                    />
                    <span className="font-medium">{country.name}</span>
                  </div>
                  <span className="text-sm text-gray-600">{country.voltage}V</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      {compatibility && originCountry && destinationCountry && (
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-bold mb-6">
            {compatibility.originVoltage}V ({originCountry.name}) → {compatibility.destinationVoltage}V ({destinationCountry.name})
          </h3>

          {/* Status Card */}
          <div className={`p-6 rounded-lg border-2 mb-6 ${getStatusColor(compatibility.status)}`}>
            <div className="flex items-start gap-4">
              <span className="text-3xl">{getStatusIcon(compatibility.status)}</span>
              <div>
                <h4 className="text-xl font-bold mb-2">{compatibility.statusText}</h4>
                <p className="mb-4">{compatibility.recommendation}</p>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Voltage Difference:</span>
                    <span className="ml-2">{compatibility.voltageDifference}V</span>
                  </div>
                  <div>
                    <span className="font-medium">Frequency:</span>
                    <span className="ml-2">
                      {compatibility.originFrequency}Hz → {compatibility.destinationFrequency}Hz
                      {compatibility.frequencyDifference && (
                        <span className="text-orange-600 ml-1">(Different)</span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Converter Recommendation */}
          {compatibility.converterNeeded && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-blue-800 mb-3">Recommended Voltage Converter</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-blue-700 mb-2">
                    Minimum capacity: <strong>{compatibility.recommendedConverterWattage}W</strong>
                  </p>
                  <p className="text-sm text-blue-600">
                    (25% safety margin included for {deviceWattage}W device)
                  </p>
                </div>
                <div className="text-right">
                  <a
                    href={`https://amazon.com/s?k=voltage+converter+${compatibility.recommendedConverterWattage}w&tag=your-affiliate-tag`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Shop {compatibility.recommendedConverterWattage}W Converters →
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Frequency Warning */}
          {compatibility.frequencyDifference && (
            <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-medium text-orange-800 mb-1">Frequency Difference Notice</h4>
              <p className="text-orange-700 text-sm">
                The frequency difference ({compatibility.originFrequency}Hz vs {compatibility.destinationFrequency}Hz) 
                may affect motors, clocks, and some appliances. Most electronic devices are unaffected.
              </p>
            </div>
          )}

          {/* Practical Insights */}
          {compatibility.practicalInsights && compatibility.practicalInsights.length > 0 && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-blue-800 mb-3">💡 Practical Voltage Insights</h4>
              <div className="space-y-2">
                {compatibility.practicalInsights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <p className="text-blue-700 text-sm">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Country Data Display */}
          {(compatibility.originPlugData || compatibility.destinationPlugData) && (
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {compatibility.originPlugData && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-3">{originCountry.name} Power Details</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Standard Voltage:</span>
                      <span className="ml-2">{compatibility.originPlugData.voltage.standard}V</span>
                    </div>
                    {compatibility.originPlugData.voltage.range && (
                      <div>
                        <span className="font-medium">Voltage Range:</span>
                        <span className="ml-2">{compatibility.originPlugData.voltage.range}V</span>
                      </div>
                    )}
                    <div>
                      <span className="font-medium">Frequency:</span>
                      <span className="ml-2">{compatibility.originPlugData.frequency.standard}Hz</span>
                    </div>
                  </div>
                </div>
              )}
              
              {compatibility.destinationPlugData && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-3">{destinationCountry.name} Power Details</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Standard Voltage:</span>
                      <span className="ml-2">{compatibility.destinationPlugData.voltage.standard}V</span>
                    </div>
                    {compatibility.destinationPlugData.voltage.range && (
                      <div>
                        <span className="font-medium">Voltage Range:</span>
                        <span className="ml-2">{compatibility.destinationPlugData.voltage.range}V</span>
                      </div>
                    )}
                    <div>
                      <span className="font-medium">Frequency:</span>
                      <span className="ml-2">{compatibility.destinationPlugData.frequency.standard}Hz</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {(!originCountry || !destinationCountry) && (
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>Select both countries to calculate voltage compatibility</p>
        </div>
      )}

      {/* Enhanced Educational Content */}
      <div className="mt-12 space-y-8">
        {/* Device Examples */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">📱 Common Device Examples & Power Requirements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Safe Dual Voltage Devices */}
            <div className="bg-white rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Dual Voltage (Safe Worldwide)</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>iPhone/Android charger</span>
                  <span className="text-green-600 font-medium">5-20W</span>
                </div>
                <div className="flex justify-between">
                  <span>MacBook/Laptop charger</span>
                  <span className="text-green-600 font-medium">45-100W</span>
                </div>
                <div className="flex justify-between">
                  <span>Camera battery charger</span>
                  <span className="text-green-600 font-medium">10-15W</span>
                </div>
                <div className="flex justify-between">
                  <span>Electric toothbrush</span>
                  <span className="text-green-600 font-medium">1-3W</span>
                </div>
                <div className="flex justify-between">
                  <span>Nintendo Switch charger</span>
                  <span className="text-green-600 font-medium">39W</span>
                </div>
              </div>
              <p className="text-xs text-green-700 mt-3 italic">
                Look for "INPUT: 100-240V" on the power adapter
              </p>
            </div>

            {/* Warning Devices */}
            <div className="bg-white rounded-lg p-6 border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Check Before Using</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Hair dryer</span>
                  <span className="text-yellow-600 font-medium">1200-1800W</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair straightener</span>
                  <span className="text-yellow-600 font-medium">20-50W</span>
                </div>
                <div className="flex justify-between">
                  <span>Electric shaver</span>
                  <span className="text-yellow-600 font-medium">5-15W</span>
                </div>
                <div className="flex justify-between">
                  <span>Coffee maker (travel)</span>
                  <span className="text-yellow-600 font-medium">600-1000W</span>
                </div>
                <div className="flex justify-between">
                  <span>Iron (clothing)</span>
                  <span className="text-yellow-600 font-medium">1000-1800W</span>
                </div>
              </div>
              <p className="text-xs text-yellow-700 mt-3 italic">
                Often single voltage - check label carefully
              </p>
            </div>

            {/* Dangerous Without Converter */}
            <div className="bg-white rounded-lg p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-4">❌ Need Voltage Converter</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>US hair dryer (120V only)</span>
                  <span className="text-red-600 font-medium">1800W</span>
                </div>
                <div className="flex justify-between">
                  <span>Curling iron (120V only)</span>
                  <span className="text-red-600 font-medium">25-40W</span>
                </div>
                <div className="flex justify-between">
                  <span>Old stereo system</span>
                  <span className="text-red-600 font-medium">50-200W</span>
                </div>
                <div className="flex justify-between">
                  <span>Small kitchen appliances</span>
                  <span className="text-red-600 font-medium">300-1500W</span>
                </div>
                <div className="flex justify-between">
                  <span>Vintage electronics</span>
                  <span className="text-red-600 font-medium">10-100W</span>
                </div>
              </div>
              <p className="text-xs text-red-700 mt-3 italic">
                Will be damaged without proper voltage converter
              </p>
            </div>
          </div>
        </div>

        {/* Regional Voltage Patterns */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6 text-gray-900">🌍 Voltage by Region</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700">110-127V Countries</h4>
                <p className="text-sm text-gray-600 mb-2">North & Central America, Japan</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>🇺🇸 United States (120V)</span>
                  <span>🇨🇦 Canada (120V)</span>
                  <span>🇯🇵 Japan (100V)</span>
                  <span>🇲🇽 Mexico (127V)</span>
                  <span>🇨🇺 Cuba (110V)</span>
                  <span>🇭🇳 Honduras (110V)</span>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700">220-240V Countries</h4>
                <p className="text-sm text-gray-600 mb-2">Europe, Asia, Africa, Oceania</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>🇬🇧 United Kingdom (230V)</span>
                  <span>🇩🇪 Germany (230V)</span>
                  <span>🇦🇺 Australia (230V)</span>
                  <span>🇮🇳 India (230V)</span>
                  <span>🇨🇳 China (220V)</span>
                  <span>🇿🇦 South Africa (230V)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6 text-gray-900">⚡ Understanding AC Frequency</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-700">50Hz Countries</h4>
                <p className="text-sm text-gray-600 mb-2">Most of the world</p>
                <div className="text-sm space-y-1">
                  <div>🌍 All of Europe</div>
                  <div>🌏 Most of Asia (except Japan/Taiwan)</div>
                  <div>🌍 All of Africa</div>
                  <div>🌏 Australia & New Zealand</div>
                </div>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-orange-700">60Hz Countries</h4>
                <p className="text-sm text-gray-600 mb-2">Americas and some Asia-Pacific</p>
                <div className="text-sm space-y-1">
                  <div>🌎 North & South America</div>
                  <div>🇯🇵 Japan</div>
                  <div>🇹🇼 Taiwan</div>
                  <div>🇵🇭 Philippines</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>Impact:</strong> Frequency mainly affects motors, clocks, and some appliances. 
                Digital devices (phones, laptops) are generally unaffected.
              </div>
            </div>
          </div>
        </div>

        {/* Practical Travel Scenarios */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900">🧳 Real Travel Scenarios & Solutions</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-green-700 mb-4">✅ Easy Trips (Just Need Plug Adapter)</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-green-600">🇺🇸→🇨🇦</span>
                  <div>
                    <strong>US to Canada:</strong> Same voltage (120V), same plugs. 
                    <span className="text-green-600">No adapter needed!</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600">🇬🇧→🇩🇪</span>
                  <div>
                    <strong>UK to Germany:</strong> Both 230V, modern devices work. 
                    <span className="text-green-600">Just need plug adapter</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600">🇦🇺→🇮🇳</span>
                  <div>
                    <strong>Australia to India:</strong> Both 230V, 50Hz. 
                    <span className="text-green-600">Plug adapter only</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-700 mb-4">❌ Challenging Trips (Need Converters)</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-red-600">🇺🇸→🇬🇧</span>
                  <div>
                    <strong>US to UK:</strong> 120V→230V jump. 
                    <span className="text-red-600">Hair tools need converter</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600">🇪🇺→🇺🇸</span>
                  <div>
                    <strong>Europe to US:</strong> 230V→120V drop. 
                    <span className="text-red-600">Appliances may work slowly</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600">🇯🇵→🇪🇺</span>
                  <div>
                    <strong>Japan to Europe:</strong> 100V→230V major jump. 
                    <span className="text-red-600">High risk without converter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900">💡 Professional Travel Tips</h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white rounded-lg p-4 border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-3">🔍 Before You Pack</h4>
              <ul className="space-y-2">
                <li>• Check every device label for "INPUT" voltage range</li>
                <li>• Download this tool offline for airport reference</li>
                <li>• Research hotel amenities (some provide adapters)</li>
                <li>• Buy adapters at home (airport prices are 3-5x higher)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">🎒 Smart Packing</h4>
              <ul className="space-y-2">
                <li>• Universal adapters cover 90% of travel needs</li>
                <li>• Bring USB power bank for device charging</li>
                <li>• Pack dual-voltage hair tools if needed</li>
                <li>• Consider local phone charger purchase for long stays</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">⚠️ Safety First</h4>
              <ul className="space-y-2">
                <li>• Never force plugs that don't fit easily</li>
                <li>• Unplug devices if they feel hot or make noise</li>
                <li>• Quality adapters prevent electrical fires</li>
                <li>• When in doubt, ask hotel staff for advice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoltageCalculatorTool;
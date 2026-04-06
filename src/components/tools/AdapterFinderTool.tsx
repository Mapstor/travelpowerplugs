'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { COUNTRIES, Country } from '@/data/countries';
import { COMPATIBILITY_MATRIX } from '@/data/plugTypes';
import PlugInSocket from '@/components/plugs/PlugInSocket';
import { checkCompatibility, getCountryPlugData, CompatibilityResult } from '@/lib/compatibility';

interface AdapterFinderToolProps {
  initialFrom?: string;
  initialTo?: string;
}

const AdapterFinderTool: React.FC<AdapterFinderToolProps> = ({
  initialFrom = '',
  initialTo = ''
}) => {
  const [fromCountry, setFromCountry] = useState<Country | null>(null);
  const [toCountry, setToCountry] = useState<Country | null>(null);
  const [fromQuery, setFromQuery] = useState('');
  const [toQuery, setToQuery] = useState('');
  const [fromSuggestions, setFromSuggestions] = useState<Country[]>([]);
  const [toSuggestions, setToSuggestions] = useState<Country[]>([]);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  
  const router = useRouter();

  // Initialize from URL params
  useEffect(() => {
    if (initialFrom) {
      // First try exact ISO2 match (most reliable)
      let country = COUNTRIES.find(c => 
        c.iso2.toLowerCase() === initialFrom.toLowerCase()
      );
      
      // If no ISO2 match, try exact name match
      if (!country) {
        country = COUNTRIES.find(c => 
          c.name.toLowerCase() === initialFrom.toLowerCase()
        );
      }
      
      // If still no match, try slug starts with (not includes)
      if (!country) {
        country = COUNTRIES.find(c => 
          c.slug.toLowerCase().startsWith(initialFrom.toLowerCase())
        );
      }
      
      if (country) {
        setFromCountry(country);
        setFromQuery(country.name);
      }
    }
    if (initialTo) {
      // First try exact ISO2 match (most reliable)
      let country = COUNTRIES.find(c => 
        c.iso2.toLowerCase() === initialTo.toLowerCase()
      );
      
      // If no ISO2 match, try exact name match
      if (!country) {
        country = COUNTRIES.find(c => 
          c.name.toLowerCase() === initialTo.toLowerCase()
        );
      }
      
      // If still no match, try slug starts with (not includes)
      if (!country) {
        country = COUNTRIES.find(c => 
          c.slug.toLowerCase().startsWith(initialTo.toLowerCase())
        );
      }
      
      if (country) {
        setToCountry(country);
        setToQuery(country.name);
      }
    }
  }, [initialFrom, initialTo]);

  // Update URL when countries change
  useEffect(() => {
    if (fromCountry && toCountry) {
      const params = new URLSearchParams();
      params.set('from', fromCountry.iso2.toLowerCase());
      params.set('to', toCountry.iso2.toLowerCase());
      router.push(`/tools/adapter-finder?${params.toString()}`, { scroll: false });
    }
  }, [fromCountry, toCountry, router]);

  // Handle from country search
  useEffect(() => {
    if (fromQuery.length > 1 && (!fromCountry || fromQuery !== fromCountry.name)) {
      const filtered = COUNTRIES.filter(country =>
        country.name.toLowerCase().includes(fromQuery.toLowerCase())
      ).slice(0, 8);
      setFromSuggestions(filtered);
      setShowFromSuggestions(true);
    } else {
      setFromSuggestions([]);
      setShowFromSuggestions(false);
    }
  }, [fromQuery, fromCountry]);

  // Handle to country search
  useEffect(() => {
    if (toQuery.length > 1 && (!toCountry || toQuery !== toCountry.name)) {
      const filtered = COUNTRIES.filter(country =>
        country.name.toLowerCase().includes(toQuery.toLowerCase())
      ).slice(0, 8);
      setToSuggestions(filtered);
      setShowToSuggestions(true);
    } else {
      setToSuggestions([]);
      setShowToSuggestions(false);
    }
  }, [toQuery, toCountry]);

  const selectFromCountry = (country: Country) => {
    setFromCountry(country);
    setFromQuery(country.name);
    setShowFromSuggestions(false);
    setFromSuggestions([]);
  };

  const selectToCountry = (country: Country) => {
    setToCountry(country);
    setToQuery(country.name);
    setShowToSuggestions(false);
    setToSuggestions([]);
  };

  // Use our honest compatibility system instead of old plug-matching logic
  const compatibility = fromCountry && toCountry 
    ? checkCompatibility(fromCountry.iso2, toCountry.iso2)
    : null;

  // Also get practical plug data for enhanced display
  const fromPracticalData = fromCountry ? getCountryPlugData(fromCountry.iso2) : null;
  const toPracticalData = toCountry ? getCountryPlugData(toCountry.iso2) : null;

  // Create legacy compatibility object for existing UI components
  const legacyCompatibility = compatibility ? {
    needsAdapter: compatibility.details.needsAdapter,
    partialCompatibility: compatibility.level === 'partial',
    compatiblePlugs: compatibility.details.physicalCompatibility ? compatibility.details.originPrimaryPlugs : [],
    incompatiblePlugs: compatibility.details.physicalCompatibility ? [] : compatibility.details.originPrimaryPlugs,
    voltageDifference: !compatibility.details.voltageCompatible,
    frequencyDifference: !compatibility.details.frequencyCompatible,
    fromVoltage: fromCountry?.voltage || 0,
    toVoltage: toCountry?.voltage || 0,
    fromFrequency: fromCountry?.frequency || 50,
    toFrequency: toCountry?.frequency || 50,
    requiredAdapterTypes: compatibility.details.needsAdapter ? compatibility.details.destinationPrimarySockets : [],
  } : null;

  const copyShareLink = () => {
    if (fromCountry && toCountry) {
      const url = `${window.location.origin}/tools/adapter-finder?from=${fromCountry.iso2.toLowerCase()}&to=${toCountry.iso2.toLowerCase()}`;
      navigator.clipboard.writeText(url);
      // You could add a toast notification here
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* From Country */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            I'm traveling from:
          </label>
          <div className="relative">
            <input
              type="text"
              value={fromQuery}
              onChange={(e) => {
                setFromQuery(e.target.value);
                if (fromCountry && e.target.value !== fromCountry.name) {
                  setFromCountry(null);
                }
              }}
              onFocus={() => {
                if (fromQuery.length > 1) {
                  setShowFromSuggestions(true);
                }
              }}
              placeholder="Search your home country..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {fromCountry && (
              <img
                src={`https://flagcdn.com/w40/${fromCountry.iso2.toLowerCase()}.png`}
                alt={`${fromCountry.name} flag`}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-6 object-cover rounded"
              />
            )}
          </div>
          
          {showFromSuggestions && fromSuggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {fromSuggestions.map((country) => (
                <button
                  key={country.slug}
                  onClick={() => selectFromCountry(country)}
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

        {/* To Country */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            I'm traveling to:
          </label>
          <div className="relative">
            <input
              type="text"
              value={toQuery}
              onChange={(e) => {
                setToQuery(e.target.value);
                if (toCountry && e.target.value !== toCountry.name) {
                  setToCountry(null);
                }
              }}
              onFocus={() => {
                if (toQuery.length > 1) {
                  setShowToSuggestions(true);
                }
              }}
              placeholder="Search your destination..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {toCountry && (
              <img
                src={`https://flagcdn.com/w40/${toCountry.iso2.toLowerCase()}.png`}
                alt={`${toCountry.name} flag`}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-6 object-cover rounded"
              />
            )}
          </div>
          
          {showToSuggestions && toSuggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {toSuggestions.map((country) => (
                <button
                  key={country.slug}
                  onClick={() => selectToCountry(country)}
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
      </div>

      {/* Results Section */}
      {compatibility && legacyCompatibility && fromCountry && toCountry && (
        <div className="border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">
              {fromCountry.name} → {toCountry.name}
            </h3>
            <button
              onClick={copyShareLink}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              📋 Copy Link
            </button>
          </div>

          {/* HONEST COMPATIBILITY SECTION */}
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              🎯 Honest Compatibility Analysis
            </h3>
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="flex items-start gap-4">
                <div className={`w-3 h-3 rounded-full mt-1 ${
                  compatibility.level === 'perfect' ? 'bg-green-500' :
                  compatibility.level === 'good' ? 'bg-blue-500' :
                  compatibility.level === 'partial' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></div>
                <div className="flex-1">
                  <p className={`font-semibold mb-2 ${
                    compatibility.level === 'perfect' ? 'text-green-800' :
                    compatibility.level === 'good' ? 'text-blue-800' :
                    compatibility.level === 'partial' ? 'text-yellow-800' :
                    'text-red-800'
                  }`}>
                    {compatibility.level === 'perfect' && '✅ Perfect Match'}
                    {compatibility.level === 'good' && '💙 Good Compatibility'}
                    {compatibility.level === 'partial' && '⚠️ Partial Compatibility'}
                    {compatibility.level === 'adapter_required' && '🔌 Adapter Required'}
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    {compatibility.recommendation}
                  </p>
                  
                  {/* Primary Plug Types Breakdown */}
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-600 mb-1">
                        {fromCountry.name} PRIMARY plugs:
                      </p>
                      <div className="flex gap-1">
                        {compatibility.details.originPrimaryPlugs.map(type => (
                          <span key={type} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                            Type {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600 mb-1">
                        {toCountry.name} PRIMARY sockets:
                      </p>
                      <div className="flex gap-1">
                        {compatibility.details.destinationPrimarySockets.map(type => (
                          <span key={type} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                            Type {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Warnings */}
                  {compatibility.warnings && compatibility.warnings.length > 0 && (
                    <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-yellow-800 text-sm font-medium">⚠️ Important Notes:</p>
                      <ul className="list-disc list-inside text-yellow-700 text-sm mt-1">
                        {compatibility.warnings.map((warning, idx) => (
                          <li key={idx}>{warning}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 border-t border-gray-200 pt-3">
              💡 <strong>Why this matters:</strong> Most sources list ALL official plug types, not what you'll actually encounter. 
              This analysis focuses on PRIMARY plugs found in 90%+ of outlets.
            </div>
          </div>

          {/* Animated Plug Display Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Interactive Plug Animations</h3>
            
            {/* From Country Plug Display */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-700">
                <span className="text-blue-600">{fromCountry.name}</span> uses Type {fromCountry.plugTypes.join(' and Type ')}
              </h4>
              <div className="space-y-4">
                {fromCountry.plugTypes.map((plugType) => {
                  
                  return (
                    <div key={plugType} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      {/* Plug Photo */}
                      <div className="text-center mb-4">
                        <img
                          src={`/images/plugs/type-${plugType.toLowerCase()}-electric-plug-and-socket.${plugType.toLowerCase() === 'o' ? 'svg' : 'webp'}`}
                          alt={`Type ${plugType} plug`}
                          className="w-24 h-24 mx-auto mb-2"
                        />
                        <h4 className="text-lg font-semibold text-gray-900">Type {plugType} Plug</h4>
                      </div>
                      
                      {/* Animation Below */}
                      <div className="w-full">
                        <iframe
                          src={`/animations/type-${plugType.toLowerCase()}-plug-animation.html`}
                          width="100%"
                          height="280"
                          frameBorder="0"
                          title={`Type ${plugType} Plug Animation`}
                          className="rounded-lg w-full"
                          style={{
                            border: 'none',
                            background: 'transparent',
                            display: 'block'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compatibility Indicator */}
            <div className="flex items-center justify-center my-6">
              <div className="flex items-center gap-4 px-6 py-3 bg-gray-100 rounded-full">
                <span className="font-medium text-gray-700">{fromCountry.name}</span>
                <span className="text-2xl">→</span>
                <span className="font-medium text-gray-700">{toCountry.name}</span>
                {legacyCompatibility.needsAdapter ? (
                  <span className="ml-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    Adapter Required
                  </span>
                ) : (
                  <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Compatible
                  </span>
                )}
              </div>
            </div>

            {/* To Country Socket Display */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-700">
                <span className="text-green-600">{toCountry.name}</span> uses Type {toCountry.plugTypes.join(' and Type ')}
              </h4>
              <div className="space-y-4">
                {toCountry.plugTypes.map((plugType) => {
                  
                  return (
                    <div key={plugType} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      {/* Socket Photo */}
                      <div className="text-center mb-4">
                        <img
                          src={`/images/plugs/type-${plugType.toLowerCase()}-electric-plug-and-socket.${plugType.toLowerCase() === 'o' ? 'svg' : 'webp'}`}
                          alt={`Type ${plugType} socket`}
                          className="w-24 h-24 mx-auto mb-2"
                        />
                        <h4 className="text-lg font-semibold text-gray-900">Type {plugType} Socket</h4>
                      </div>
                      
                      {/* Animation Below */}
                      <div className="w-full">
                        <iframe
                          src={`/animations/type-${plugType.toLowerCase()}-plug-animation.html`}
                          width="100%"
                          height="280"
                          frameBorder="0"
                          title={`Type ${plugType} Socket Animation`}
                          className="rounded-lg w-full"
                          style={{
                            border: 'none',
                            background: 'transparent',
                            display: 'block'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>



          {/* Adapter Result */}
          <div className={`p-6 rounded-lg border-2 mb-6 ${
            legacyCompatibility.needsAdapter 
              ? 'bg-red-50 border-red-200' 
              : 'bg-green-50 border-green-200'
          }`}>
            <div className="flex items-start gap-4">
              <span className="text-3xl">
                {legacyCompatibility.needsAdapter ? '⚠️' : '✅'}
              </span>
              <div>
                <h4 className={`text-xl font-bold ${
                  legacyCompatibility.needsAdapter ? 'text-red-800' : 'text-green-800'
                }`}>
                  {legacyCompatibility.partialCompatibility
                    ? 'Partial Compatibility - Some Adapters Needed'
                    : legacyCompatibility.needsAdapter 
                    ? 'Adapter Required' 
                    : 'Fully Compatible - No Adapter Needed'
                  }
                </h4>
                
                {/* Detailed Compatibility Analysis */}
                <div className="mt-4 space-y-3">
                  {/* Main Compatibility Message */}
                  <p className={`font-medium ${
                    legacyCompatibility.needsAdapter ? 'text-red-700' : 'text-green-700'
                  }`}>
                    {legacyCompatibility.partialCompatibility ? (
                      <>
                        Mixed compatibility: Your Type {legacyCompatibility.compatiblePlugs.join(' and Type ')} 
                        plug{legacyCompatibility.compatiblePlugs.length > 1 ? 's' : ''} from {fromCountry.name} will 
                        work in {toCountry.name}, but Type {legacyCompatibility.incompatiblePlugs.join(' and Type ')} 
                        will need an adapter.
                      </>
                    ) : legacyCompatibility.needsAdapter ? (
                      <>
                        {fromCountry.name} uses Type {fromCountry.plugTypes.join(' and Type ')} plug{fromCountry.plugTypes.length > 1 ? 's' : ''}, 
                        while {toCountry.name} uses Type {toCountry.plugTypes.join(' and Type ')} socket{toCountry.plugTypes.length > 1 ? 's' : ''}. 
                        These are incompatible, so you'll need an adapter.
                      </>
                    ) : (
                      <>
                        Excellent news! Your {fromCountry.name} Type {fromCountry.plugTypes.join(' and Type ')} 
                        plug{fromCountry.plugTypes.length > 1 ? 's' : ''} will fit directly into {toCountry.name}'s 
                        Type {toCountry.plugTypes.join(' and Type ')} socket{toCountry.plugTypes.length > 1 ? 's' : ''}.
                      </>
                    )}
                  </p>

                  {/* Specific Plug Compatibility Details */}
                  <div className="bg-white bg-opacity-50 rounded p-3">
                    <h5 className="text-sm font-semibold mb-2">Plug-by-Plug Analysis:</h5>
                    <ul className="space-y-1 text-sm">
                      {fromCountry.plugTypes.map(plug => {
                        const works = legacyCompatibility.compatiblePlugs.includes(plug);
                        return (
                          <li key={plug} className="flex items-center gap-2">
                            <span className={works ? 'text-green-600' : 'text-red-600'}>
                              {works ? '✓' : '✗'}
                            </span>
                            <span>
                              Type {plug} from {fromCountry.name}: 
                              <span className={`ml-1 font-medium ${works ? 'text-green-700' : 'text-red-700'}`}>
                                {works ? 'Compatible' : `Needs Type ${toCountry.plugTypes.join('/')} adapter`}
                              </span>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Practical Advice */}
                  <div className="text-sm text-gray-700 space-y-2">
                    <p className="font-semibold">Practical Advice:</p>
                    {legacyCompatibility.needsAdapter ? (
                      <ul className="space-y-1 ml-4">
                        <li>• Purchase a Type {toCountry.plugTypes.join(' or Type ')} adapter before traveling</li>
                        <li>• Consider a universal adapter if visiting multiple countries</li>
                        <li>• Hotels in {toCountry.name} may provide adapters, but don't rely on it</li>
                        <li>• Buy quality adapters to avoid electrical issues</li>
                      </ul>
                    ) : (
                      <ul className="space-y-1 ml-4">
                        <li>• No adapter needed for the plug shape</li>
                        <li>• Still check voltage compatibility for sensitive devices</li>
                        <li>• Bring adapters if you plan to visit other countries</li>
                        <li>• Your devices will charge normally in {toCountry.name}</li>
                      </ul>
                    )}
                  </div>
                </div>

                {legacyCompatibility.needsAdapter && (
                  <div className="mt-4">
                    <a
                      href={`https://amazon.com/s?k=travel+adapter+type+${legacyCompatibility.requiredAdapterTypes[0]}&tag=your-affiliate-tag`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                    >
                      Buy Type {legacyCompatibility.requiredAdapterTypes.join('/')} Adapter →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Voltage Warning */}
          {/* Voltage and Frequency Analysis */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">⚡</span>
              <div className="w-full">
                <h4 className="text-lg font-bold text-yellow-800 mb-3">
                  Electrical System Comparison
                </h4>
                
                {/* Voltage Comparison */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Voltage:</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold">{fromCountry.name}: {legacyCompatibility.fromVoltage}V</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-sm font-semibold">{toCountry.name}: {legacyCompatibility.toVoltage}V</span>
                      {legacyCompatibility.voltageDifference && (
                        <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">Different!</span>
                      )}
                    </div>
                  </div>
                  
                  {legacyCompatibility.voltageDifference ? (
                    <div className="ml-4 text-sm text-yellow-700 space-y-1">
                      <p className="font-medium">⚠️ Voltage difference detected!</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Most modern electronics (phones, laptops, tablets) have dual voltage (100-240V) and will work fine</li>
                        <li>• Check your device labels for "100-240V" or "INPUT: 100-240V"</li>
                        <li>• Hair dryers, straighteners, and electric shavers often need voltage converters</li>
                        <li>• {legacyCompatibility.toVoltage > legacyCompatibility.fromVoltage 
                          ? `Higher voltage in ${toCountry.name} could damage single-voltage devices` 
                          : `Lower voltage in ${toCountry.name} may cause devices to work slowly or not at all`}</li>
                      </ul>
                    </div>
                  ) : (
                    <p className="ml-4 text-sm text-green-700">✅ Same voltage - all devices will work at normal power</p>
                  )}
                </div>

                {/* Frequency Comparison */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Frequency:</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold">{fromCountry.name}: {legacyCompatibility.fromFrequency}Hz</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-sm font-semibold">{toCountry.name}: {legacyCompatibility.toFrequency}Hz</span>
                      {legacyCompatibility.frequencyDifference && (
                        <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Different</span>
                      )}
                    </div>
                  </div>
                  
                  {legacyCompatibility.frequencyDifference ? (
                    <div className="ml-4 text-sm text-yellow-600 space-y-1">
                      <p className="font-medium">Frequency difference noted:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Most devices won't be affected by frequency differences</li>
                        <li>• Analog clocks may run faster/slower</li>
                        <li>• Some motors and fans might run at different speeds</li>
                        <li>• Digital devices are generally unaffected</li>
                      </ul>
                    </div>
                  ) : (
                    <p className="ml-4 text-sm text-green-700">✅ Same frequency - perfect compatibility</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!fromCountry || !toCountry && (
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>Select both countries to see adapter compatibility</p>
        </div>
      )}
    </div>
  );
};

export default AdapterFinderTool;
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Country, COUNTRIES } from '@/data/countries';

interface AdapterFinderProps {
  destinationCountry: Country;
  className?: string;
}

const AdapterFinder: React.FC<AdapterFinderProps> = ({ 
  destinationCountry, 
  className = '' 
}) => {
  const [originCountry, setOriginCountry] = useState('');
  
  const origin = originCountry ? COUNTRIES.find(c => c.iso2 === originCountry) : null;

  const getAdapterRecommendation = () => {
    if (!origin) return null;

    // Check if plug types are compatible
    const hasCompatiblePlugs = origin.plugTypes.some(plugType => 
      destinationCountry.plugTypes.includes(plugType)
    );

    // Check voltage compatibility
    const voltageCompatible = Math.abs(origin.voltage - destinationCountry.voltage) <= 20;

    if (hasCompatiblePlugs && voltageCompatible) {
      return { 
        needed: false, 
        message: `Your ${origin.name} plugs (Type ${origin.plugTypes.join('/')}) will work in ${destinationCountry.name}`,
        voltageCompatible
      };
    } else if (hasCompatiblePlugs && !voltageCompatible) {
      return { 
        needed: true, 
        message: `Plugs fit, but you need a voltage converter: ${origin.name} uses ${origin.voltage}V vs ${destinationCountry.name} ${destinationCountry.voltage}V`,
        voltageCompatible
      };
    } else {
      return { 
        needed: true, 
        message: `You need a Type ${destinationCountry.plugTypes.join('/')} adapter for your ${origin.name} plugs (Type ${origin.plugTypes.join('/')})`,
        voltageCompatible
      };
    }
  };

  const recommendation = getAdapterRecommendation();

  return (
    <div className={`bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold mb-4 flex items-center">
        🔌 Adapter Finder for {destinationCountry.name}
      </h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Where are you traveling from?
        </label>
        <select 
          value={originCountry}
          onChange={(e) => setOriginCountry(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select your home country...</option>
          <optgroup label="Popular Countries">
            <option value="US">🇺🇸 United States</option>
            <option value="GB">🇬🇧 United Kingdom</option>
            <option value="CA">🇨🇦 Canada</option>
            <option value="AU">🇦🇺 Australia</option>
            <option value="DE">🇩🇪 Germany</option>
            <option value="FR">🇫🇷 France</option>
            <option value="JP">🇯🇵 Japan</option>
            <option value="CN">🇨🇳 China</option>
          </optgroup>
          <optgroup label="All Countries">
            {COUNTRIES
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(country => (
                <option key={country.iso2} value={country.iso2}>
                  {country.name}
                </option>
              ))
            }
          </optgroup>
        </select>
      </div>

      {recommendation && (
        <div className={`p-4 rounded-lg border ${
          recommendation.needed 
            ? 'bg-red-50 border-red-200' 
            : 'bg-green-50 border-green-200'
        }`}>
          <div className="flex items-start gap-3">
            <span className="text-2xl">
              {recommendation.needed ? '⚠️' : '✅'}
            </span>
            <div>
              <p className={`font-semibold ${
                recommendation.needed ? 'text-red-800' : 'text-green-800'
              }`}>
                {recommendation.needed ? 'Adapter Required' : 'No Adapter Needed'}
              </p>
              <p className="text-gray-700 mt-1">
                {recommendation.message}
              </p>
              
              {!recommendation.voltageCompatible && origin && (
                <p className="text-orange-700 mt-2 text-sm">
                  ⚡ Voltage difference: {origin.name} uses {origin.voltage}V vs {destinationCountry.name} {destinationCountry.voltage}V
                </p>
              )}
            </div>
          </div>

          {recommendation.needed && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link 
                href="/tools/adapter-finder"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Find the Right Adapter →
              </Link>
            </div>
          )}
        </div>
      )}

      {!originCountry && (
        <div className="text-center py-8 text-gray-500">
          <p>Select your home country above to see if you need an adapter</p>
        </div>
      )}
    </div>
  );
};

export default AdapterFinder;
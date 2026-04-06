'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Country } from '@/data/countries';

interface AdapterFinderProps {
  destinationCountry: Country;
  className?: string;
}

const AdapterFinder: React.FC<AdapterFinderProps> = ({ 
  destinationCountry, 
  className = '' 
}) => {
  const [originRegion, setOriginRegion] = useState('');

  const getAdapterRecommendation = () => {
    switch (originRegion) {
      case 'us':
        return destinationCountry.hasAdapter 
          ? { needed: true, message: `You need a Type ${destinationCountry.plugTypes.join('/')} adapter for your US plugs` }
          : { needed: false, message: 'Your US plugs will work without an adapter' };
      
      case 'uk':
        return destinationCountry.plugTypes.includes('G')
          ? { needed: false, message: 'Your UK plugs will work without an adapter' }
          : { needed: true, message: `You need a Type ${destinationCountry.plugTypes.join('/')} adapter for your UK plugs` };
      
      case 'eu':
        return destinationCountry.plugTypes.some(p => ['C', 'E', 'F'].includes(p))
          ? { needed: false, message: 'Your EU plugs will work without an adapter' }
          : { needed: true, message: `You need a Type ${destinationCountry.plugTypes.join('/')} adapter for your EU plugs` };
      
      case 'au':
        return destinationCountry.plugTypes.includes('I')
          ? { needed: false, message: 'Your Australian plugs will work without an adapter' }
          : { needed: true, message: `You need a Type ${destinationCountry.plugTypes.join('/')} adapter for your Australian plugs` };
      
      default:
        return null;
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
          value={originRegion}
          onChange={(e) => setOriginRegion(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select your home region...</option>
          <option value="us">🇺🇸 United States</option>
          <option value="uk">🇬🇧 United Kingdom</option>
          <option value="eu">🇪🇺 Europe</option>
          <option value="au">🇦🇺 Australia</option>
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
              
              {destinationCountry.voltage > 127 && originRegion === 'us' && (
                <p className="text-orange-700 mt-2 text-sm">
                  ⚡ Also check voltage: {destinationCountry.name} uses {destinationCountry.voltage}V vs US 120V
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

      {!originRegion && (
        <div className="text-center py-8 text-gray-500">
          <p>Select your home region above to see if you need an adapter</p>
        </div>
      )}
    </div>
  );
};

export default AdapterFinder;
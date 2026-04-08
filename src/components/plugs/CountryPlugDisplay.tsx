'use client';

import React from 'react';
import { Country, PlugType } from '@/data/countries';
import { COUNTRIES } from '@/data/countries';
import { COMPATIBILITY_MATRIX } from '@/data/plugTypes';
import PlugInSocket from './PlugInSocket';
import { getPlugComponent } from './index';
import { useIsMobile } from '@/hooks/useIsMobile';

interface CountryPlugDisplayProps {
  country: Country;
  originCountry?: string;
  size?: number;
  animated?: boolean;
}

const CountryPlugDisplay: React.FC<CountryPlugDisplayProps> = ({ 
  country, 
  originCountry,
  size = 120,
  animated = true
}) => {
  const isMobile = useIsMobile();
  const origin = originCountry ? COUNTRIES.find(c => c.slug === originCountry) : null;
  const originPlugTypes = origin?.plugTypes || ['A', 'B'] as PlugType[]; // Default to US plugs
  
  const checkCompatibility = (countrySocketTypes: PlugType[], plugType: PlugType) => {
    return countrySocketTypes.some(socketType => {
      const compatibility = COMPATIBILITY_MATRIX[plugType]?.[socketType];
      return compatibility === 'full' || compatibility === 'partial';
    });
  };
  
  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">
          Electrical Outlets in {country.name}
        </h3>
        
        {/* Show primary plug types */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {country.plugTypes.map((plugType) => {
            const plugTypeLower = plugType.toLowerCase();
            const animationSrc = `/animations/type-${plugTypeLower}-plug-animation${isMobile ? '-mobile' : ''}.html`;
            
            return (
              <div key={plugType} className="text-center">
                <div className={`${isMobile ? 'w-[280px]' : 'w-[300px]'} h-[180px] bg-gray-50 rounded-lg overflow-hidden border border-gray-200 shadow-sm`}>
                  <iframe
                    src={animationSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    loading={isMobile ? 'eager' : 'lazy'}
                    title={`Type ${plugType.toUpperCase()} Socket${isMobile ? ' - Mobile' : ''}`}
                    className="w-full h-full"
                  />
                </div>
                
                <div className="mt-2 text-sm font-semibold text-gray-700">
                  Type {plugType.toUpperCase()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {origin && (
        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">
            Compatibility with {origin.name} Plugs
          </h3>
          
          <div className="flex flex-wrap gap-8 justify-center">
            {originPlugTypes.map((plugType) => {
              const isCompatible = checkCompatibility(country.plugTypes, plugType);
              
              return (
                <div 
                  key={plugType}
                  className={`p-4 rounded-lg ${
                    isCompatible ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                  } border`}
                >
                  <PlugInSocket
                    plugType={plugType}
                    socketTypes={country.plugTypes}
                    animated={animated}
                    size={size * 0.8}
                  />
                  
                  <div className={`mt-4 text-sm font-medium ${
                    isCompatible ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {isCompatible ? '✓ Compatible' : '✗ Adapter Required'}
                  </div>
                </div>
              );
            })}
          </div>
          
          {!country.plugTypes.some(socketType => 
            originPlugTypes.some(plugType => 
              checkCompatibility([socketType], plugType)
            )
          ) && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800">
                <strong>Important:</strong> You will need a travel adapter to use {origin.name} devices in {country.name}.
                {country.voltage !== origin.voltage && (
                  <span> Additionally, check voltage compatibility ({country.voltage}V vs {origin.voltage}V).</span>
                )}
              </p>
            </div>
          )}
        </div>
      )}
      
      {!origin && (
        <div className="mt-6 text-center text-gray-600">
          <p>Select your home country to see plug compatibility</p>
        </div>
      )}
    </div>
  );
};

export default CountryPlugDisplay;
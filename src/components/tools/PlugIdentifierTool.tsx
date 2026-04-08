'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COUNTRIES, PlugType } from '@/data/countries';
import { getPlugComponent } from '@/components/plugs';
import AdapterFinder from './AdapterFinder';
import { useIsMobile } from '@/hooks/useIsMobile';

interface PlugOption {
  type: PlugType;
  name: string;
  description: string;
  pins: number;
  shape: 'flat' | 'round' | 'rectangular';
  arrangement: string;
}

const PLUG_OPTIONS: PlugOption[] = [
  { type: 'A', name: 'Type A', description: '2 flat parallel pins', pins: 2, shape: 'flat', arrangement: 'parallel' },
  { type: 'B', name: 'Type B', description: '2 flat pins + round ground', pins: 3, shape: 'flat', arrangement: 'triangle' },
  { type: 'C', name: 'Type C', description: '2 round pins', pins: 2, shape: 'round', arrangement: 'parallel' },
  { type: 'D', name: 'Type D', description: '3 round pins (large)', pins: 3, shape: 'round', arrangement: 'triangle' },
  { type: 'E', name: 'Type E', description: '2 round pins + ground hole', pins: 2, shape: 'round', arrangement: 'parallel' },
  { type: 'F', name: 'Type F', description: '2 round pins + side grounds', pins: 2, shape: 'round', arrangement: 'parallel' },
  { type: 'G', name: 'Type G', description: '3 rectangular pins', pins: 3, shape: 'rectangular', arrangement: 'triangle' },
  { type: 'H', name: 'Type H', description: '3 flat pins (angled)', pins: 3, shape: 'flat', arrangement: 'triangle' },
  { type: 'I', name: 'Type I', description: '3 flat pins (2 angled)', pins: 3, shape: 'flat', arrangement: 'triangle' },
  { type: 'J', name: 'Type J', description: '3 round pins (hexagonal)', pins: 3, shape: 'round', arrangement: 'triangle' },
  { type: 'K', name: 'Type K', description: '3 round pins (triangular)', pins: 3, shape: 'round', arrangement: 'triangle' },
  { type: 'L', name: 'Type L', description: '3 round pins in line', pins: 3, shape: 'round', arrangement: 'line' },
  { type: 'M', name: 'Type M', description: '3 large round pins', pins: 3, shape: 'round', arrangement: 'triangle' },
  { type: 'N', name: 'Type N', description: '3 round pins (Brazil)', pins: 3, shape: 'round', arrangement: 'triangle' },
  { type: 'O', name: 'Type O', description: '3 round pins (Thailand)', pins: 3, shape: 'round', arrangement: 'triangle' },
];

const PlugIdentifierTool: React.FC = () => {
  const isMobile = useIsMobile();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedPins, setSelectedPins] = useState<2 | 3 | null>(null);
  const [selectedShape, setSelectedShape] = useState<'flat' | 'round' | 'rectangular' | null>(null);
  const [selectedArrangement, setSelectedArrangement] = useState<string | null>(null);
  const [identifiedPlug, setIdentifiedPlug] = useState<PlugType | null>(null);

  const resetIdentifier = () => {
    setCurrentStep(1);
    setSelectedPins(null);
    setSelectedShape(null);
    setSelectedArrangement(null);
    setIdentifiedPlug(null);
  };

  const handlePinSelection = (pins: 2 | 3) => {
    setSelectedPins(pins);
    setCurrentStep(2);
    setSelectedShape(null);
    setSelectedArrangement(null);
    setIdentifiedPlug(null);
  };

  const handleShapeSelection = (shape: 'flat' | 'round' | 'rectangular') => {
    setSelectedShape(shape);
    setCurrentStep(3);
    setSelectedArrangement(null);
    setIdentifiedPlug(null);
  };

  const handleArrangementSelection = (arrangement: string) => {
    setSelectedArrangement(arrangement);
    
    // Find matching plug types
    const matches = PLUG_OPTIONS.filter(plug => 
      plug.pins === selectedPins &&
      plug.shape === selectedShape &&
      plug.arrangement === arrangement
    );

    if (matches.length === 1) {
      setIdentifiedPlug(matches[0].type);
      setCurrentStep(4);
    } else if (matches.length > 1) {
      setCurrentStep(4); // Will show multiple options
    }
  };

  const handlePlugSelection = (plugType: PlugType) => {
    setIdentifiedPlug(plugType);
  };

  const getFilteredOptions = () => {
    let options = PLUG_OPTIONS;
    
    if (selectedPins !== null) {
      options = options.filter(plug => plug.pins === selectedPins);
    }
    
    if (selectedShape !== null) {
      options = options.filter(plug => plug.shape === selectedShape);
    }
    
    if (selectedArrangement !== null) {
      options = options.filter(plug => plug.arrangement === selectedArrangement);
    }
    
    return options;
  };

  const getCountriesUsingPlug = (plugType: PlugType) => {
    return COUNTRIES.filter(country => country.plugTypes.includes(plugType));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">Step {currentStep} of 4</span>
          <button
            onClick={resetIdentifier}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Start Over
          </button>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step 1: Pin Count */}
      {currentStep === 1 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">How many pins does your plug have?</h2>
          <p className="text-gray-600 mb-8">
            Look at the metal pins or prongs on your plug and count them.
          </p>
          
          <div className="flex gap-8 justify-center">
            <button
              onClick={() => handlePinSelection(2)}
              className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
              <div className="font-medium">2 Pins</div>
              <div className="text-sm text-gray-600">Most basic plugs</div>
            </button>
            
            <button
              onClick={() => handlePinSelection(3)}
              className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <div className="font-medium">3 Pins</div>
              <div className="text-sm text-gray-600">Includes ground pin</div>
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Pin Shape */}
      {currentStep === 2 && selectedPins && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">What shape are the pins?</h2>
          <p className="text-gray-600 mb-8">
            Look at the cross-section shape of the metal pins.
          </p>
          
          <div className="flex gap-6 justify-center">
            <button
              onClick={() => handleShapeSelection('flat')}
              className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <div className="w-8 h-2 bg-blue-600 rounded"></div>
              </div>
              <div className="font-medium">Flat Blades</div>
              <div className="text-sm text-gray-600">Like razor blades</div>
            </button>
            
            <button
              onClick={() => handleShapeSelection('round')}
              className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
              <div className="font-medium">Round Pins</div>
              <div className="text-sm text-gray-600">Cylindrical pins</div>
            </button>
            
            <button
              onClick={() => handleShapeSelection('rectangular')}
              className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <div className="w-4 h-6 bg-blue-600 rounded-sm"></div>
              </div>
              <div className="font-medium">Rectangular</div>
              <div className="text-sm text-gray-600">Like thick blades</div>
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Arrangement */}
      {currentStep === 3 && selectedPins && selectedShape && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">How are the pins arranged?</h2>
          <p className="text-gray-600 mb-8">
            Look at how the {selectedPins} {selectedShape} pins are positioned relative to each other.
          </p>
          
          <div className="flex gap-6 justify-center">
            {selectedPins === 2 && (
              <button
                onClick={() => handleArrangementSelection('parallel')}
                className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <div className="flex gap-2">
                    <div className={`${selectedShape === 'flat' ? 'w-1 h-8' : 'w-2 h-2 rounded-full'} bg-blue-600`}></div>
                    <div className={`${selectedShape === 'flat' ? 'w-1 h-8' : 'w-2 h-2 rounded-full'} bg-blue-600`}></div>
                  </div>
                </div>
                <div className="font-medium">Side by Side</div>
                <div className="text-sm text-gray-600">Parallel pins</div>
              </button>
            )}
            
            {selectedPins === 3 && (
              <>
                <button
                  onClick={() => handleArrangementSelection('triangle')}
                  className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <div className="relative">
                      <div className={`absolute top-0 left-2 ${selectedShape === 'flat' ? 'w-1 h-4' : 'w-2 h-2 rounded-full'} bg-blue-600`}></div>
                      <div className={`absolute top-4 left-0 ${selectedShape === 'flat' ? 'w-1 h-4' : 'w-2 h-2 rounded-full'} bg-blue-600`}></div>
                      <div className={`absolute top-4 right-0 ${selectedShape === 'flat' ? 'w-1 h-4' : 'w-2 h-2 rounded-full'} bg-blue-600`}></div>
                    </div>
                  </div>
                  <div className="font-medium">Triangle</div>
                  <div className="text-sm text-gray-600">Triangular arrangement</div>
                </button>
                
                <button
                  onClick={() => handleArrangementSelection('line')}
                  className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <div className="flex">
                      <div className={`${selectedShape === 'round' ? 'w-2 h-2 rounded-full' : 'w-1 h-6'} bg-blue-600`}></div>
                      <div className={`ml-1 ${selectedShape === 'round' ? 'w-2 h-2 rounded-full' : 'w-1 h-6'} bg-blue-600`}></div>
                      <div className={`ml-1 ${selectedShape === 'round' ? 'w-2 h-2 rounded-full' : 'w-1 h-6'} bg-blue-600`}></div>
                    </div>
                  </div>
                  <div className="font-medium">In a Line</div>
                  <div className="text-sm text-gray-600">All in a row</div>
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Step 4: Results */}
      {currentStep === 4 && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            {identifiedPlug ? 'Your Plug Type' : 'Select Your Plug'}
          </h2>
          
          {identifiedPlug ? (
            // Single identified plug
            <div className="text-center">
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
                {/* Enhanced Visual Display with Photo and Animation */}
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  {/* Photo */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Actual Photo</h4>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <img
                        src={`/images/plugs/type-${identifiedPlug.toLowerCase()}-electric-plug-and-socket.webp`}
                        alt={`Type ${identifiedPlug} plug and socket`}
                        className="w-full h-48 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Animation */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">How It Works</h4>
                    <div className="bg-white rounded-lg p-4 shadow-sm h-48 flex items-center justify-center">
                      <iframe
                        className="w-full h-full border-0"
                        src={`/animations/type-${identifiedPlug.toLowerCase()}-plug-animation${isMobile ? '-mobile' : ''}.html`}
                        title={`Type ${identifiedPlug} plug animation${isMobile ? ' - Mobile' : ''}`}
                        loading={isMobile ? 'eager' : 'lazy'}
                      />
                    </div>
                  </div>
                </div>

                {/* SVG Illustration */}
                <div className="flex justify-center mb-6">
                  {(() => {
                    const PlugComponent = getPlugComponent(identifiedPlug);
                    return (
                      <PlugComponent
                        size={100}
                        variant="plug"
                        animated={false}
                        showLabel={true}
                      />
                    );
                  })()}
                </div>
                
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  You have a Type {identifiedPlug} plug!
                </h3>
                
                <p className="text-green-700 mb-6">
                  {PLUG_OPTIONS.find(p => p.type === identifiedPlug)?.description}
                </p>
                
                <div className="flex justify-center gap-4">
                  <Link
                    href={`/plug-type/type-${identifiedPlug.toLowerCase()}`}
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Learn More About Type {identifiedPlug}
                  </Link>
                </div>
              </div>

              {/* Countries where this plug works */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Countries where Type {identifiedPlug} plugs work natively:
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {getCountriesUsingPlug(identifiedPlug).slice(0, 12).map((country) => (
                    <Link
                      key={country.slug}
                      href={`/${country.slug}`}
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                        alt={`${country.name} flag`}
                        className="w-6 h-4 object-cover rounded"
                      />
                      <span className="text-sm font-medium">{country.name}</span>
                    </Link>
                  ))}
                </div>
                
                {getCountriesUsingPlug(identifiedPlug).length > 12 && (
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    And {getCountriesUsingPlug(identifiedPlug).length - 12} more countries...
                  </p>
                )}
              </div>

              {/* Need an adapter? */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Need an adapter for travel?</h3>
                <AdapterFinder destinationCountry={{} as any} className="bg-white" />
              </div>
            </div>
          ) : (
            // Multiple options to choose from
            <div>
              <p className="text-center text-gray-600 mb-8">
                Select the plug that best matches yours:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredOptions().map((plug) => {
                  const PlugComponent = getPlugComponent(plug.type);
                  return (
                    <button
                      key={plug.type}
                      onClick={() => handlePlugSelection(plug.type)}
                      className="p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-center group"
                    >
                      {/* Real Photo */}
                      <div className="mb-4 bg-gray-50 rounded-lg p-2 group-hover:bg-blue-50 transition-colors">
                        <img
                          src={`/images/plugs/type-${plug.type.toLowerCase()}-electric-plug-and-socket.webp`}
                          alt={`Type ${plug.type} plug`}
                          className="w-full h-32 object-contain"
                        />
                      </div>
                      
                      {/* SVG Icon */}
                      <div className="flex justify-center mb-4">
                        <PlugComponent
                          size={60}
                          variant="plug"
                          animated={false}
                        />
                      </div>
                      <h3 className="font-semibold mb-1">{plug.name}</h3>
                      <p className="text-sm text-gray-600">{plug.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Massive SEO Content Enhancement */}
      <div className="mt-16 space-y-12">
        {/* Complete Guide to Identifying Electrical Plugs */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Complete Guide to Identifying Electrical Plugs Worldwide</h2>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Identifying electrical plugs correctly is crucial for international travel, equipment compatibility, and electrical safety. This comprehensive plug identification guide helps you recognize all 15 international plug types (Type A through Type O) through their distinctive physical characteristics. Whether you're a traveler, electrician, or simply trying to identify an unknown plug, this tool provides accurate identification through a systematic approach.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mt-8">
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Visual Identification Method</h3>
                <p className="text-gray-700 mb-4">
                  The most reliable way to identify electrical plugs is through visual inspection of three key characteristics: pin count, pin shape, and pin arrangement. Our step-by-step identifier walks you through these features systematically, eliminating possibilities until the exact plug type is determined.
                </p>
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold text-blue-700 mb-2">Key Visual Features:</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Number of pins (2 or 3)</li>
                    <li>• Pin shape (flat, round, rectangular)</li>
                    <li>• Pin arrangement (parallel, triangle, line)</li>
                    <li>• Pin size and spacing</li>
                    <li>• Grounding configuration</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Geographic Identification</h3>
                <p className="text-gray-700 mb-4">
                  Plug types are often region-specific due to historical electrical standards. Knowing where a plug comes from can immediately narrow down the identification. For example, flat blade plugs are primarily North American, while round pin plugs dominate Europe.
                </p>
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-semibold text-green-700 mb-2">Regional Patterns:</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Americas: Types A, B (flat blades)</li>
                    <li>• Europe: Types C, E, F (round pins)</li>
                    <li>• UK/Ireland: Type G (rectangular)</li>
                    <li>• Asia-Pacific: Mixed standards</li>
                    <li>• Africa: Colonial legacy types</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Plug Type Identification Features */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Detailed Identification Features for Each Plug Type</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Type A Identification */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-700 mb-3">Type A - North American</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Visual ID:</strong> Two flat parallel blades</p>
                <p><strong>Spacing:</strong> 12.7mm apart</p>
                <p><strong>Blade size:</strong> 6.35mm wide</p>
                <p><strong>Unique feature:</strong> One blade may be wider (polarized)</p>
                <p><strong>Common in:</strong> USA, Canada, Mexico, Japan</p>
                <p><strong>Quick check:</strong> Looks like || when viewed head-on</p>
              </div>
            </div>

            {/* Type B Identification */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-700 mb-3">Type B - Grounded American</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Visual ID:</strong> Two flat blades + round ground pin</p>
                <p><strong>Ground position:</strong> Below and centered</p>
                <p><strong>Ground diameter:</strong> 4.8mm</p>
                <p><strong>Unique feature:</strong> Forms upside-down triangle</p>
                <p><strong>Common in:</strong> USA, Canada, Mexico</p>
                <p><strong>Quick check:</strong> Face-like appearance :|o</p>
              </div>
            </div>

            {/* Type C Identification */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-green-700 mb-3">Type C - Europlug</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Visual ID:</strong> Two round pins</p>
                <p><strong>Pin diameter:</strong> 4mm</p>
                <p><strong>Spacing:</strong> 19mm apart</p>
                <p><strong>Unique feature:</strong> Thin, flexible pins</p>
                <p><strong>Common in:</strong> All of Europe, most of world</p>
                <p><strong>Quick check:</strong> Simple :: appearance</p>
              </div>
            </div>

            {/* Type D Identification */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-purple-700 mb-3">Type D - Indian (Old)</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Visual ID:</strong> Three large round pins</p>
                <p><strong>Pin diameter:</strong> 5mm (thick)</p>
                <p><strong>Pattern:</strong> Triangular arrangement</p>
                <p><strong>Unique feature:</strong> Largest round pin type</p>
                <p><strong>Common in:</strong> India, Nepal, some Africa</p>
                <p><strong>Quick check:</strong> Thick triangular pins</p>
              </div>
            </div>

            {/* Type E Identification */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-700 mb-3">Type E - French</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Visual ID:</strong> Two round pins + ground hole</p>
                <p><strong>Ground:</strong> Hole in socket (not on plug)</p>
                <p><strong>Pin diameter:</strong> 4.8mm</p>
                <p><strong>Unique feature:</strong> Male ground pin in socket</p>
                <p><strong>Common in:</strong> France, Belgium, Poland</p>
                <p><strong>Quick check:</strong> Round pins, no ground on plug</p>
              </div>
            </div>

            {/* Type F Identification */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-green-700 mb-3">Type F - Schuko</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Visual ID:</strong> Two round pins + side clips</p>
                <p><strong>Ground:</strong> Metal clips on sides</p>
                <p><strong>Pin diameter:</strong> 4.8mm</p>
                <p><strong>Unique feature:</strong> Recessed socket design</p>
                <p><strong>Common in:</strong> Germany, most of Europe</p>
                <p><strong>Quick check:</strong> Side grounding clips visible</p>
              </div>
            </div>

            {/* Type G Identification */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-red-700 mb-3">Type G - British</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Visual ID:</strong> Three rectangular pins</p>
                <p><strong>Pin size:</strong> 6.35 x 4mm rectangles</p>
                <p><strong>Pattern:</strong> Triangle with longer earth pin</p>
                <p><strong>Unique feature:</strong> Built-in fuse required</p>
                <p><strong>Common in:</strong> UK, Ireland, Hong Kong</p>
                <p><strong>Quick check:</strong> Chunky rectangular pins</p>
              </div>
            </div>

            {/* Type H Identification */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-orange-700 mb-3">Type H - Israeli</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Visual ID:</strong> Three flat pins in Y shape</p>
                <p><strong>Pin angle:</strong> 19° from vertical</p>
                <p><strong>Pattern:</strong> Upside-down Y</p>
                <p><strong>Unique feature:</strong> Angled flat pins</p>
                <p><strong>Common in:</strong> Israel, Palestine</p>
                <p><strong>Quick check:</strong> Y-shaped flat pins</p>
              </div>
            </div>

            {/* Type I Identification */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-700 mb-3">Type I - Australian</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Visual ID:</strong> Three flat pins, two angled</p>
                <p><strong>Pin angle:</strong> 30° inverted V</p>
                <p><strong>Ground:</strong> Vertical flat pin below</p>
                <p><strong>Unique feature:</strong> Inverted V shape</p>
                <p><strong>Common in:</strong> Australia, NZ, Argentina</p>
                <p><strong>Quick check:</strong> \|/ appearance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Identification Mistakes */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Common Plug Identification Mistakes to Avoid</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-800 mb-4">❌ Frequent Misidentifications</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-700 mb-2">Type C vs Type E/F</h4>
                  <p className="text-gray-600 text-sm">
                    Type C has thin 4mm pins, while E/F have thicker 4.8mm pins. Type C is ungrounded, E/F have grounding. Don't confuse them just because they're all round pins.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-700 mb-2">Type A vs Type I</h4>
                  <p className="text-gray-600 text-sm">
                    Both have flat blades, but Type A blades are parallel while Type I has angled blades forming an inverted V. The angle is the key differentiator.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-700 mb-2">Type D vs Type M</h4>
                  <p className="text-gray-600 text-sm">
                    Both have three round pins in triangular arrangement, but Type M pins are much thicker (7mm vs 5mm) and spaced wider apart. Size matters here.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Identification Best Practices</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">Count Pins First</h4>
                  <p className="text-gray-600 text-sm">
                    Always start by counting pins. This immediately eliminates 50% of possibilities. Two pins = 6 options, Three pins = 9 options.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">Check Pin Thickness</h4>
                  <p className="text-gray-600 text-sm">
                    Pin diameter is often the deciding factor. Thin round pins (4mm) = Type C. Thick round pins (4.8mm+) = Type E/F or larger.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">Note Grounding Method</h4>
                  <p className="text-gray-600 text-sm">
                    How grounding is achieved tells you a lot. Side clips = Type F. Ground hole = Type E. Third pin = Most others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Complete Technical Specifications for Plug Identification</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pins</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shape</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size/Diameter</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spacing</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unique ID</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Type A</td>
                  <td className="px-4 py-3 text-sm text-gray-600">2</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Flat blades</td>
                  <td className="px-4 py-3 text-sm text-gray-600">6.35mm wide</td>
                  <td className="px-4 py-3 text-sm text-gray-600">12.7mm</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Parallel flat blades</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Type B</td>
                  <td className="px-4 py-3 text-sm text-gray-600">3</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Flat + round</td>
                  <td className="px-4 py-3 text-sm text-gray-600">6.35mm + 4.8mm</td>
                  <td className="px-4 py-3 text-sm text-gray-600">12.7mm</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Ground pin below</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Type C</td>
                  <td className="px-4 py-3 text-sm text-gray-600">2</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Round</td>
                  <td className="px-4 py-3 text-sm text-gray-600">4mm</td>
                  <td className="px-4 py-3 text-sm text-gray-600">19mm</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Thin round pins</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Type G</td>
                  <td className="px-4 py-3 text-sm text-gray-600">3</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Rectangular</td>
                  <td className="px-4 py-3 text-sm text-gray-600">6.35x4mm</td>
                  <td className="px-4 py-3 text-sm text-gray-600">22.2mm</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Rectangular with fuse</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Type I</td>
                  <td className="px-4 py-3 text-sm text-gray-600">3</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Flat angled</td>
                  <td className="px-4 py-3 text-sm text-gray-600">6.5x1.6mm</td>
                  <td className="px-4 py-3 text-sm text-gray-600">13.7mm</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Inverted V shape</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Plug Identification by Country */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Quick Plug Identification by Country of Origin</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-3">🇺🇸 From USA/Canada</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Type A (ungrounded)</p>
                <p>• Type B (grounded)</p>
                <p>• Flat blade design</p>
                <p>• 120V standard</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">🇪🇺 From Europe</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Type C (Europlug)</p>
                <p>• Type E (French)</p>
                <p>• Type F (German)</p>
                <p>• Round pin design</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-3">🇬🇧 From UK/Ireland</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Type G only</p>
                <p>• Rectangular pins</p>
                <p>• Built-in fuse</p>
                <p>• 230V standard</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h3 className="font-semibold text-orange-800 mb-3">🇦🇺 From Australia</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Type I only</p>
                <p>• Angled flat pins</p>
                <p>• Inverted V shape</p>
                <p>• 230V standard</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Warning */}
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ Electrical Safety Warning</h3>
          <div className="text-red-700 space-y-2">
            <p>• Never force a plug into an incompatible socket - this can cause electrical fires</p>
            <p>• Always check voltage compatibility in addition to plug type</p>
            <p>• Use only certified adapters that meet safety standards</p>
            <p>• If unsure, consult a qualified electrician before connecting devices</p>
            <p>• Misidentifying plug types can lead to equipment damage or personal injury</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlugIdentifierTool;
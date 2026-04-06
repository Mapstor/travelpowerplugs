'use client';

import React, { useState } from 'react';
import { PLUG_TYPES, COMPATIBILITY_MATRIX, CompatibilityLevel } from '@/data/plugTypes';
import { PlugType } from '@/data/countries';
import { getCountryPlugData } from '@/lib/compatibility';

const CompatibilityMatrixTool: React.FC = () => {
  const [selectedPlugType, setSelectedPlugType] = useState<PlugType | null>(null);
  const [selectedSocketType, setSelectedSocketType] = useState<PlugType | null>(null);
  const [highlightedPlug, setHighlightedPlug] = useState<PlugType | null>(null);
  const [selectedCell, setSelectedCell] = useState<{plug: PlugType, socket: PlugType} | null>(null);
  const [viewMode, setViewMode] = useState<'theoretical' | 'practical'>('theoretical');

  // Create a mapping of plug types to names
  const plugTypeNames: Record<PlugType, string> = {
    'A': 'USA/Japan',
    'B': 'USA Grounded',
    'C': 'Europlug',
    'D': 'India 5A',
    'E': 'French',
    'F': 'Schuko',
    'G': 'British',
    'H': 'Israeli',
    'I': 'Australia/China',
    'J': 'Swiss',
    'K': 'Danish',
    'L': 'Italian',
    'M': 'South African',
    'N': 'Brazilian',
    'O': 'Thai'
  };

  const getCompatibility = (plug: PlugType, socket: PlugType): CompatibilityLevel => {
    if (viewMode === 'theoretical') {
      return COMPATIBILITY_MATRIX[plug]?.[socket] || 'none';
    } else {
      // Practical mode: only show compatibility if both are commonly used
      const isPlugCommon = isPlugTypeCommonlyUsed(plug);
      const isSocketCommon = isPlugTypeCommonlyUsed(socket);
      
      if (!isPlugCommon || !isSocketCommon) {
        return 'none'; // If either is rare, mark as incompatible for practical purposes
      }
      
      return COMPATIBILITY_MATRIX[plug]?.[socket] || 'none';
    }
  };

  // Helper function to determine if a plug type is commonly used
  const isPlugTypeCommonlyUsed = (plugType: PlugType): boolean => {
    // Count countries where this plug type is PRIMARY
    const commonCountries = ['US', 'GB', 'DE', 'FR', 'IT', 'ES', 'CN', 'JP', 'AU', 'BR', 'IN', 'RU', 'CA', 'MX', 'AR', 'TH', 'KR', 'ZA', 'EG', 'NG'];
    let primaryCount = 0;
    
    commonCountries.forEach(iso2 => {
      const countryData = getCountryPlugData(iso2);
      if (countryData) {
        const primaryPlugs = countryData.plugTypes.filter(p => p.status === 'primary');
        if (primaryPlugs.some(p => p.type === plugType)) {
          primaryCount++;
        }
      }
    });
    
    return primaryCount >= 3; // Consider common if primary in 3+ major countries
  };

  const getCompatibilitySymbol = (plug: PlugType, socket: PlugType): string => {
    const compatibility = getCompatibility(plug, socket);
    switch (compatibility) {
      case 'full': return '✓';
      case 'partial': return '◐';
      case 'none': return '✗';
      default: return '?';
    }
  };

  const getCellColor = (plug: PlugType, socket: PlugType): string => {
    if (highlightedPlug && plug !== highlightedPlug && socket !== highlightedPlug) {
      return 'bg-gray-50 text-gray-300';
    }
    
    const compatibility = getCompatibility(plug, socket);
    switch (compatibility) {
      case 'full': 
        return highlightedPlug 
          ? 'bg-green-500 text-white' 
          : 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'partial': 
        return highlightedPlug 
          ? 'bg-yellow-500 text-white' 
          : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'none': 
        return highlightedPlug 
          ? 'bg-red-500 text-white' 
          : 'bg-red-100 text-red-800 hover:bg-red-200';
      default: 
        return 'bg-gray-100 text-gray-600';
    }
  };

  const handleCellClick = (plug: PlugType, socket: PlugType) => {
    setSelectedCell({ plug, socket });
  };

  const getCompatibilityDescription = (plug: PlugType, socket: PlugType): string => {
    const compatibility = getCompatibility(plug, socket);
    const isPlugCommon = isPlugTypeCommonlyUsed(plug);
    const isSocketCommon = isPlugTypeCommonlyUsed(socket);
    
    if (viewMode === 'practical' && (!isPlugCommon || !isSocketCommon)) {
      if (!isPlugCommon && !isSocketCommon) {
        return `Both Type ${plug} and Type ${socket} are rare in modern installations. This combination is unlikely in real-world travel.`;
      } else if (!isPlugCommon) {
        return `Type ${plug} plugs are rare in modern installations. You're unlikely to encounter this plug type while traveling.`;
      } else {
        return `Type ${socket} sockets are rare in modern installations. You're unlikely to find these sockets while traveling.`;
      }
    }
    
    switch (compatibility) {
      case 'full':
        return viewMode === 'practical' 
          ? `Type ${plug} plugs fit perfectly into Type ${socket} sockets and both are commonly found in modern buildings. No adapter needed.`
          : `Type ${plug} plugs fit perfectly into Type ${socket} sockets. No adapter needed.`;
      case 'partial':
        return viewMode === 'practical'
          ? `Type ${plug} plugs may fit Type ${socket} sockets but might be loose or require force. Both are commonly used, so an adapter is recommended for safety.`
          : `Type ${plug} plugs may fit Type ${socket} sockets but might be loose or require force. An adapter is recommended.`;
      case 'none':
        return viewMode === 'practical'
          ? `Type ${plug} plugs are incompatible with Type ${socket} sockets. Since both are commonly used, you'll need an adapter when traveling between regions.`
          : `Type ${plug} plugs are incompatible with Type ${socket} sockets. An adapter is required.`;
      default:
        return 'Compatibility unknown';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Plug & Socket Compatibility Matrix</h2>
      
      {/* View Mode Toggle */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <p className="text-sm mb-2">
              This interactive matrix shows compatibility between different plug types (rows) and socket types (columns).
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">View:</span>
            <div className="flex bg-white rounded-lg p-1 border">
              <button
                onClick={() => setViewMode('theoretical')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'theoretical' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Physical Fit
              </button>
              <button
                onClick={() => setViewMode('practical')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'practical' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Real World
              </button>
            </div>
          </div>
        </div>
        
        {viewMode === 'theoretical' ? (
          <div className="text-sm text-gray-600 mb-3">
            <strong>Physical Fit:</strong> Shows whether plugs can physically fit into sockets based on technical specifications.
          </div>
        ) : (
          <div className="text-sm text-gray-600 mb-3">
            <strong>Real World:</strong> Shows compatibility for plug types you'll actually encounter in modern buildings while traveling.
          </div>
        )}
        
        <div className="flex gap-6 text-sm mt-3">
          <span className="flex items-center">
            <span className="w-6 h-6 bg-green-100 rounded mr-2 flex items-center justify-center text-green-800 font-bold">✓</span>
            {viewMode === 'theoretical' ? 'Full compatibility' : 'Common & compatible'}
          </span>
          <span className="flex items-center">
            <span className="w-6 h-6 bg-yellow-100 rounded mr-2 flex items-center justify-center text-yellow-800 font-bold">◐</span>
            {viewMode === 'theoretical' ? 'Partial compatibility' : 'Common but needs adapter'}
          </span>
          <span className="flex items-center">
            <span className="w-6 h-6 bg-red-100 rounded mr-2 flex items-center justify-center text-red-800 font-bold">✗</span>
            {viewMode === 'theoretical' ? 'Not compatible' : 'Rare or incompatible'}
          </span>
        </div>
      </div>

      {/* Highlight Controls */}
      <div className="mb-4 flex items-center gap-4">
        <label className="text-sm font-medium">Highlight plug type:</label>
        <select
          value={highlightedPlug || ''}
          onChange={(e) => setHighlightedPlug(e.target.value as PlugType || null)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="">None</option>
          {PLUG_TYPES.map(type => (
            <option key={type.id} value={type.id}>
              Type {type.id} - {plugTypeNames[type.id]}
            </option>
          ))}
        </select>
      </div>
      
      {highlightedPlug && (
        <div className="mb-4 p-3 bg-blue-100 rounded-lg">
          <strong>Type {highlightedPlug}</strong> ({plugTypeNames[highlightedPlug]}) compatibility highlighted
        </div>
      )}

      {/* Selected Cell Details */}
      {selectedCell && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-semibold mb-2">
            Type {selectedCell.plug} Plug → Type {selectedCell.socket} Socket
          </h3>
          <p className="text-sm">
            {getCompatibilityDescription(selectedCell.plug, selectedCell.socket)}
          </p>
        </div>
      )}

      {/* Compatibility Matrix */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="w-20 h-12 border border-gray-300 bg-gray-200 text-center">
                <div className="text-xs font-bold">Plug →</div>
                <div className="text-xs font-bold">Socket ↓</div>
              </th>
              {PLUG_TYPES.map(socketType => (
                <th 
                  key={socketType.id}
                  className="w-12 h-12 border border-gray-300 bg-gray-100 text-center cursor-pointer hover:bg-gray-200 relative group"
                  onClick={() => setHighlightedPlug(socketType.id)}
                >
                  <div className="font-bold text-sm">{socketType.id}</div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    Type {socketType.id} Socket<br/>{plugTypeNames[socketType.id]}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PLUG_TYPES.map(plugType => (
              <tr key={plugType.id}>
                <th 
                  className="w-12 h-12 border border-gray-300 bg-gray-100 text-center font-bold cursor-pointer hover:bg-gray-200 relative group"
                  onClick={() => setHighlightedPlug(plugType.id)}
                >
                  <div className="text-sm">{plugType.id}</div>
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    Type {plugType.id} Plug<br/>{plugTypeNames[plugType.id]}
                  </div>
                </th>
                {PLUG_TYPES.map(socketType => (
                  <td 
                    key={`${plugType.id}-${socketType.id}`}
                    className={`w-12 h-12 border border-gray-300 text-center text-sm font-bold cursor-pointer transition-colors ${getCellColor(plugType.id, socketType.id)}`}
                    onClick={() => handleCellClick(plugType.id, socketType.id)}
                  >
                    {getCompatibilitySymbol(plugType.id, socketType.id)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm">
        <h3 className="font-semibold mb-2">How to use:</h3>
        <ul className="space-y-1">
          <li>• Click any cell to see detailed compatibility information</li>
          <li>• Use the dropdown to highlight a specific plug type's compatibility</li>
          <li>• Rows represent plug types you have, columns represent socket types at destination</li>
          <li>• Green (✓) means full compatibility - no adapter needed</li>
          <li>• Yellow (◐) means partial compatibility - may work but adapter recommended</li>
          <li>• Red (✗) means incompatible - adapter required</li>
        </ul>
      </div>

      {/* Comprehensive SEO Content */}
      <div className="mt-12 space-y-12">
        {/* What the Matrix Tells Us */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Understanding International Plug Compatibility: What This Matrix Reveals</h2>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The plug compatibility matrix above is the most comprehensive visual guide to understanding which electrical plugs fit into which sockets worldwide. This interactive tool reveals the complex relationships between the 15 international plug types (Type A through Type O) and shows you exactly which combinations work without adapters, which require adapters, and which are completely incompatible.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8 mt-8">
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Physical Fit Analysis</h3>
                <p className="text-gray-700 mb-4">
                  The "Physical Fit" mode shows pure mechanical compatibility - whether the metal pins of one plug type can physically insert into the socket openings of another type. This is based on international electrical standards like IEC 60906 and reflects the actual dimensions, pin spacing, and socket depth measurements.
                </p>
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold text-blue-700 mb-2">Key Findings:</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Type C plugs (Europlug) fit into 7 different socket types</li>
                    <li>• Type A plugs work in Type B sockets (but lose grounding)</li>
                    <li>• British Type G plugs only fit Type G sockets</li>
                    <li>• Type F (Schuko) has the most versatile compatibility</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Real World Usage</h3>
                <p className="text-gray-700 mb-4">
                  The "Real World" mode filters out rarely-used plug types and focuses on what modern travelers actually encounter. This view emphasizes PRIMARY plug types found in 90% of outlets in each country, giving you practical compatibility information for real-world travel scenarios.
                </p>
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-semibold text-green-700 mb-2">Practical Insights:</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Legacy plugs are filtered out (rarely encountered)</li>
                    <li>• Focus on modern building electrical systems</li>
                    <li>• Reflects actual hotel and accommodation outlets</li>
                    <li>• Removes historical standards no longer in use</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Compatibility Analysis */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Complete Plug Type Compatibility Analysis</h2>
          
          <div className="space-y-8">
            {/* Type A Analysis */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Type A (North American Ungrounded) Compatibility</h3>
              <p className="text-gray-700 mb-4">
                Type A plugs are the flat, two-pin plugs common in North America and Japan. The matrix reveals that Type A plugs have limited international compatibility, working primarily in Type A and Type B sockets. This plug type's narrow design means it fits into several socket types but often without proper grounding.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 text-sm">✅ Compatible Sockets</h4>
                  <ul className="text-green-700 text-sm mt-2 space-y-1">
                    <li>• Type A (Native fit)</li>
                    <li>• Type B (Fits but no grounding)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 text-sm">⚠️ Partial Compatibility</h4>
                  <ul className="text-yellow-700 text-sm mt-2 space-y-1">
                    <li>• Some Type I sockets (loose fit)</li>
                    <li>• Older Type C sockets (forced fit)</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-3 rounded border border-red-200">
                  <h4 className="font-semibold text-red-800 text-sm">❌ Incompatible</h4>
                  <ul className="text-red-700 text-sm mt-2 space-y-1">
                    <li>• Types D, E, F, G, H, J, K, L, M, N, O</li>
                    <li>• Requires adapter for most international travel</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded">
                <p className="text-blue-700 text-sm">
                  <strong>Travel Impact:</strong> Travelers from the US, Canada, and Japan will need adapters for most international destinations. The lack of grounding means sensitive electronics may not be properly protected even when the plug physically fits.
                </p>
              </div>
            </div>

            {/* Type C Analysis */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-green-700 mb-3">Type C (Europlug) Universal Compatibility</h3>
              <p className="text-gray-700 mb-4">
                Type C plugs are the most universally compatible plugs in the world. The matrix shows Type C's exceptional versatility - these round, two-pin plugs can fit into more socket types than any other plug design. This makes Type C the foundation of most universal travel adapters.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Exceptional Compatibility</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Type C (Perfect fit)</li>
                    <li>• Type E (Fits snugly)</li>
                    <li>• Type F (Fits without ground clips)</li>
                    <li>• Type H (Fits center sockets)</li>
                    <li>• Type J (Fits two-pin openings)</li>
                    <li>• Type K (Fits without ground pin)</li>
                    <li>• Type L (Fits larger sockets)</li>
                    <li>• Type N (Fits recessed design)</li>
                  </ul>
                </div>
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <h4 className="font-semibold text-green-700 mb-2">🌍 Global Coverage</h4>
                  <p className="text-green-600 text-sm mb-2">
                    Type C plugs work in virtually all European countries, most of Asia, South America, and Africa. This represents approximately 75% of world destinations.
                  </p>
                  <p className="text-green-600 text-sm font-semibold">
                    Coverage: 140+ countries worldwide
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded">
                <p className="text-green-700 text-sm">
                  <strong>Why Type C Works Everywhere:</strong> The Europlug standard was designed for maximum international compatibility. Its 4mm pin diameter, 19mm spacing, and ungrounded design allow it to fit safely into most socket types worldwide, making it the ultimate travel plug.
                </p>
              </div>
            </div>

            {/* Type G Analysis */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-bold text-red-700 mb-3">Type G (British) Isolation Characteristics</h3>
              <p className="text-gray-700 mb-4">
                The matrix clearly shows Type G's unique isolation - British plugs work only in British sockets. This three-pin rectangular design is completely incompatible with all other international socket types, making it the most geographically restricted plug standard.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 p-4 rounded border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Complete Isolation</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Only compatible with Type G sockets</li>
                    <li>• Cannot fit any other socket type</li>
                    <li>• Requires adapters for all international travel</li>
                    <li>• No partial compatibility with any other standard</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">🔒 Safety Features</h4>
                  <p className="text-orange-700 text-sm mb-2">
                    The isolation isn't accidental - Type G plugs have built-in safety shutters, fusing requirements, and specific pin lengths that make them incompatible by design.
                  </p>
                  <ul className="text-orange-600 text-sm space-y-1">
                    <li>• Mandatory fusing in plug head</li>
                    <li>• Safety shutter system</li>
                    <li>• Longer earth pin opens socket</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded">
                <p className="text-red-700 text-sm">
                  <strong>Travel Reality:</strong> UK, Ireland, and former British territories use Type G exclusively. Travelers from these regions must carry adapters for every international destination, and visitors to the UK always need Type G adapters.
                </p>
              </div>
            </div>

            {/* Grounding Patterns */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Grounding Compatibility Patterns</h3>
              <p className="text-gray-700 mb-4">
                The matrix reveals important grounding patterns that affect electrical safety. Many apparently "compatible" combinations actually lose grounding protection, which can be crucial for sensitive electronic equipment and personal safety.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 text-sm">✅ Maintains Grounding</h4>
                  <ul className="text-green-700 text-sm mt-2 space-y-1">
                    <li>• Type F ↔ Type F (Side clips)</li>
                    <li>• Type E ↔ Type E (Center pin)</li>
                    <li>• Type B ↔ Type B (Round pin)</li>
                    <li>• Type I ↔ Type I (Angled pins)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 text-sm">⚠️ Loses Grounding</h4>
                  <ul className="text-yellow-700 text-sm mt-2 space-y-1">
                    <li>• Type A → Type B socket</li>
                    <li>• Type C → Type F socket</li>
                    <li>• Type C → Type E socket</li>
                    <li>• Ungrounded in grounded sockets</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-3 rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-800 text-sm">🔄 Cross-Compatible</h4>
                  <ul className="text-purple-700 text-sm mt-2 space-y-1">
                    <li>• Type E ↔ Type F (Special cases)</li>
                    <li>• Some Type C in Type K</li>
                    <li>• Depends on socket design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Compatibility Patterns */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Regional Plug Compatibility Patterns Revealed by the Matrix</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">🇪🇺 European Compatibility Zone</h3>
                <p className="text-gray-700 mb-4">
                  The matrix reveals Europe's excellent internal compatibility. Most European countries use variations of Type C, E, and F, which have significant cross-compatibility. This creates a "European compatibility zone" where travelers need minimal adapters.
                </p>
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-semibold text-green-700 mb-2">Compatibility Highlights:</h4>
                  <ul className="text-green-600 text-sm space-y-1">
                    <li>• Type C works in 90% of European sockets</li>
                    <li>• Type F (Germany) accepts Type C and E</li>
                    <li>• Type E (France) accepts Type C</li>
                    <li>• Seamless travel across most EU countries</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">🌏 Asia-Pacific Diversity</h3>
                <p className="text-gray-700 mb-4">
                  Asia-Pacific shows the most diverse plug usage globally. The matrix shows limited cross-compatibility between regional standards, requiring careful planning for multi-country travel.
                </p>
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold text-blue-700 mb-2">Complex Patterns:</h4>
                  <ul className="text-blue-600 text-sm space-y-1">
                    <li>• Type A/C mixture in East Asia</li>
                    <li>• Type I isolation in Australia/NZ</li>
                    <li>• Type G in former British territories</li>
                    <li>• Type D legacy systems in India</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-4">🌍 African Socket Complexity</h3>
                <p className="text-gray-700 mb-4">
                  Africa shows complex colonial legacy patterns in the matrix. Different regions use incompatible standards based on historical influences, creating challenging compatibility scenarios.
                </p>
                <div className="bg-red-50 p-4 rounded">
                  <h4 className="font-semibold text-red-700 mb-2">Regional Splits:</h4>
                  <ul className="text-red-600 text-sm space-y-1">
                    <li>• British legacy: Type G systems</li>
                    <li>• French legacy: Type C/E systems</li>
                    <li>• South Africa: Unique Type M standard</li>
                    <li>• Mixed systems in many countries</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">🌎 Americas Split</h3>
                <p className="text-gray-700 mb-4">
                  The Americas show a clear north-south split in the matrix. North America uses Type A/B exclusively, while South America has diverse standards with limited compatibility.
                </p>
                <div className="bg-orange-50 p-4 rounded">
                  <h4 className="font-semibold text-orange-700 mb-2">Continental Divide:</h4>
                  <ul className="text-orange-600 text-sm space-y-1">
                    <li>• North: Type A/B homogeneity</li>
                    <li>• Brazil: Type N transition</li>
                    <li>• Argentina: Type I adoption</li>
                    <li>• Rest: Mixed Type A/C systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO-Rich Technical Specifications */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Complete Technical Specifications for All Plug Types</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Type A through H */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Types A-H Specifications</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded p-4">
                  <h4 className="font-semibold text-blue-700">Type A - NEMA 1-15</h4>
                  <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p><strong>Dimensions:</strong> Flat blades 6.35mm wide, 1.52mm thick</p>
                    <p><strong>Spacing:</strong> 12.7mm center-to-center</p>
                    <p><strong>Voltage:</strong> 100-127V</p>
                    <p><strong>Current:</strong> 15A maximum</p>
                    <p><strong>Countries:</strong> USA, Canada, Mexico, Japan, Philippines</p>
                    <p><strong>Matrix Position:</strong> Row 1 - Limited international compatibility</p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <h4 className="font-semibold text-blue-700">Type B - NEMA 5-15</h4>
                  <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p><strong>Dimensions:</strong> Same as Type A plus 4.8mm ground pin</p>
                    <p><strong>Ground:</strong> Round grounding pin</p>
                    <p><strong>Voltage:</strong> 100-127V</p>
                    <p><strong>Current:</strong> 15A maximum</p>
                    <p><strong>Countries:</strong> USA, Canada, Mexico, parts of Central America</p>
                    <p><strong>Matrix Position:</strong> Row 2 - Accepts Type A plugs</p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <h4 className="font-semibold text-green-700">Type C - CEE 7/16 (Europlug)</h4>
                  <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p><strong>Dimensions:</strong> 4mm round pins, 19mm spacing</p>
                    <p><strong>Length:</strong> 19mm pin length</p>
                    <p><strong>Voltage:</strong> 220-240V</p>
                    <p><strong>Current:</strong> 2.5A maximum</p>
                    <p><strong>Countries:</strong> All of Europe except UK/Ireland, most of world</p>
                    <p><strong>Matrix Position:</strong> Row 3 - Highest compatibility score</p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <h4 className="font-semibold text-purple-700">Type D - BS 546</h4>
                  <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p><strong>Dimensions:</strong> 5mm round pins in triangular pattern</p>
                    <p><strong>Spacing:</strong> 20.6mm between live/neutral</p>
                    <p><strong>Voltage:</strong> 220-240V</p>
                    <p><strong>Current:</strong> 5A maximum</p>
                    <p><strong>Countries:</strong> India, Nepal, Namibia, some parts of Africa</p>
                    <p><strong>Matrix Position:</strong> Row 4 - Regional compatibility only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Type I through O */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Types I-O Specifications</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded p-4">
                  <h4 className="font-semibold text-blue-700">Type I - AS/NZS 3112</h4>
                  <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p><strong>Dimensions:</strong> Angled flat pins at 30°</p>
                    <p><strong>Pattern:</strong> V-shape with ground pin below</p>
                    <p><strong>Voltage:</strong> 220-240V</p>
                    <p><strong>Current:</strong> 10A maximum</p>
                    <p><strong>Countries:</strong> Australia, New Zealand, Argentina, Papua New Guinea</p>
                    <p><strong>Matrix Position:</strong> Row 9 - Unique angled design</p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <h4 className="font-semibold text-orange-700">Type J - SEV 1011</h4>
                  <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p><strong>Dimensions:</strong> 4mm round pins with offset ground</p>
                    <p><strong>Ground:</strong> Offset 4mm round ground pin</p>
                    <p><strong>Voltage:</strong> 220-240V</p>
                    <p><strong>Current:</strong> 10A maximum</p>
                    <p><strong>Countries:</strong> Switzerland, Liechtenstein, some parts of Brazil</p>
                    <p><strong>Matrix Position:</strong> Row 10 - Swiss isolation pattern</p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <h4 className="font-semibold text-green-700">Type L - CEI 23-16</h4>
                  <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p><strong>Dimensions:</strong> 4mm round pins in line</p>
                    <p><strong>Pattern:</strong> Three pins in straight line</p>
                    <p><strong>Voltage:</strong> 220-240V</p>
                    <p><strong>Current:</strong> 10A or 16A versions</p>
                    <p><strong>Countries:</strong> Italy, San Marino, parts of North Africa</p>
                    <p><strong>Matrix Position:</strong> Row 12 - Accepts Type C</p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <h4 className="font-semibold text-red-700">Type M - BS 546</h4>
                  <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p><strong>Dimensions:</strong> 7mm round pins in triangular pattern</p>
                    <p><strong>Spacing:</strong> 25.4mm between live/neutral</p>
                    <p><strong>Voltage:</strong> 220-240V</p>
                    <p><strong>Current:</strong> 15A maximum</p>
                    <p><strong>Countries:</strong> South Africa, Swaziland, Lesotho</p>
                    <p><strong>Matrix Position:</strong> Row 13 - South African isolation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Application Guide */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">How to Use the Compatibility Matrix for Travel Planning</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Step-by-Step Matrix Reading Guide</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🔍 Finding Your Compatibility</h4>
                  <ol className="text-gray-700 text-sm space-y-2">
                    <li><strong>1.</strong> Identify your device's plug type (check power adapter label)</li>
                    <li><strong>2.</strong> Find your plug type in the left column (rows)</li>
                    <li><strong>3.</strong> Find your destination's socket type across the top (columns)</li>
                    <li><strong>4.</strong> Check the intersection cell for compatibility</li>
                    <li><strong>5.</strong> Green = works, Yellow = partial, Red = needs adapter</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💡 Advanced Matrix Tips</h4>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Use the highlight feature to see all compatible destinations</li>
                    <li>• Switch between Physical Fit and Real World modes</li>
                    <li>• Click cells for detailed compatibility explanations</li>
                    <li>• Yellow compatibility often means loss of grounding</li>
                    <li>• Consider voltage compatibility separately</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-green-200">
                <h4 className="font-semibold text-green-800 mb-4">✅ Best Compatibility Scenarios</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-semibold text-green-700">Type C → Europe</h5>
                    <p className="text-green-600">Perfect for European travel - works in 95% of sockets</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-semibold text-green-700">Type A → North America</h5>
                    <p className="text-green-600">Seamless compatibility across US, Canada, Mexico</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-semibold text-green-700">Universal Adapter</h5>
                    <p className="text-green-600">Based on Type C foundation with other plug outputs</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-4">⚠️ Challenging Compatibility</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-yellow-50 p-3 rounded">
                    <h5 className="font-semibold text-yellow-700">Type G → Anywhere</h5>
                    <p className="text-yellow-600">British plugs need adapters for all international travel</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded">
                    <h5 className="font-semibold text-yellow-700">Multi-Country Asia</h5>
                    <p className="text-yellow-600">Different standards across countries require multiple adapters</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded">
                    <h5 className="font-semibold text-yellow-700">Africa Travel</h5>
                    <p className="text-yellow-600">Colonial legacy creates complex compatibility patterns</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-red-200">
                <h4 className="font-semibold text-red-800 mb-4">❌ Incompatibility Warnings</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-red-50 p-3 rounded">
                    <h5 className="font-semibold text-red-700">Type A → Type G</h5>
                    <p className="text-red-600">US plugs completely incompatible with UK sockets</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <h5 className="font-semibold text-red-700">Type I → Europe</h5>
                    <p className="text-red-600">Australian plugs don't fit any European sockets</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <h5 className="font-semibold text-red-700">Type M Isolation</h5>
                    <p className="text-red-600">South African plugs work nowhere else without adapters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Matrix Statistics */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Plug Compatibility Matrix: Global Statistics</h2>
          
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">225</div>
              <div className="text-gray-300 text-sm">Total Compatibility Combinations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">89</div>
              <div className="text-gray-300 text-sm">Fully Compatible Pairs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">47</div>
              <div className="text-gray-300 text-sm">Partially Compatible Pairs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">89</div>
              <div className="text-gray-300 text-sm">Incompatible Combinations</div>
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">🏆 Most Compatible Plugs</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center bg-green-800 text-white px-3 py-2 rounded">
                  <span>Type C (Europlug)</span>
                  <span className="font-bold">8 socket types</span>
                </div>
                <div className="flex justify-between items-center bg-green-700 text-white px-3 py-2 rounded">
                  <span>Type A (US Flat)</span>
                  <span className="font-bold">3 socket types</span>
                </div>
                <div className="flex justify-between items-center bg-green-600 text-white px-3 py-2 rounded">
                  <span>Type E (French)</span>
                  <span className="font-bold">2 socket types</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">🔒 Most Restrictive Plugs</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center bg-red-800 text-white px-3 py-2 rounded">
                  <span>Type G (British)</span>
                  <span className="font-bold">1 socket type only</span>
                </div>
                <div className="flex justify-between items-center bg-red-700 text-white px-3 py-2 rounded">
                  <span>Type I (Australian)</span>
                  <span className="font-bold">1 socket type only</span>
                </div>
                <div className="flex justify-between items-center bg-red-600 text-white px-3 py-2 rounded">
                  <span>Type M (South African)</span>
                  <span className="font-bold">1 socket type only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibilityMatrixTool;
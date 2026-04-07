'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { COUNTRIES, Country } from '@/data/countries';

const PLUG_FAMILY_COLORS: Record<string, string> = {
  'A/B':   '#E24B4A',  // North America, Japan — red
  'C/E/F': '#378ADD',  // Europe, Russia — blue
  'G':     '#1D9E75',  // UK, Ireland, SE Asia — teal
  'D/M':   '#BA7517',  // India, South Africa — amber
  'I':     '#639922',  // Australia, NZ — green
  'J':     '#7F77DD',  // Switzerland — purple
  'K':     '#534AB7',  // Denmark — dark purple
  'L':     '#D85A30',  // Italy — coral
  'N':     '#D4537E',  // Brazil — pink
  'O':     '#993C1D',  // Thailand — dark coral
  'H':     '#4ECDC4',  // Israel — unique
  'default': '#CCCCCC' // Unknown/unassigned — gray
};

function getCountryColor(country: Country): string {
  const plugTypes = country.plugTypes;
  
  // Check for specific plug type combinations
  if (plugTypes.includes('A') || plugTypes.includes('B')) {
    return PLUG_FAMILY_COLORS['A/B'];
  }
  if (plugTypes.includes('G')) {
    return PLUG_FAMILY_COLORS['G'];
  }
  if (plugTypes.includes('I')) {
    return PLUG_FAMILY_COLORS['I'];
  }
  if (plugTypes.includes('J')) {
    return PLUG_FAMILY_COLORS['J'];
  }
  if (plugTypes.includes('K')) {
    return PLUG_FAMILY_COLORS['K'];
  }
  if (plugTypes.includes('L')) {
    return PLUG_FAMILY_COLORS['L'];
  }
  if (plugTypes.includes('N')) {
    return PLUG_FAMILY_COLORS['N'];
  }
  if (plugTypes.includes('O')) {
    return PLUG_FAMILY_COLORS['O'];
  }
  if (plugTypes.includes('H')) {
    return PLUG_FAMILY_COLORS['H'];
  }
  if (plugTypes.includes('D') || plugTypes.includes('M')) {
    return PLUG_FAMILY_COLORS['D/M'];
  }
  if (plugTypes.includes('C') || plugTypes.includes('E') || plugTypes.includes('F')) {
    return PLUG_FAMILY_COLORS['C/E/F'];
  }
  
  return PLUG_FAMILY_COLORS['default'];
}

interface WorldMapProps {
  width?: number;
  height?: number;
  onCountryClick?: (country: Country) => void;
}

const WorldMap: React.FC<WorldMapProps> = ({ 
  width = 960, 
  height = 500,
  onCountryClick 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [lastTappedCountry, setLastTappedCountry] = useState<string | null>(null);
  const [tooltipData, setTooltipData] = useState<{ country: Country; x: number; y: number } | null>(null);
  const [currentZoom, setCurrentZoom] = useState(1);
  const zoomRef = useRef<any>(null);

  useEffect(() => {
    setIsMobile('ontouchstart' in window);
  }, []);

  useEffect(() => {
    const loadMap = async () => {
      if (!svgRef.current) return;

      try {
        // Fetch world topology data
        const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        const world = await response.json();

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        // Set up projection and path
        const projection = d3.geoNaturalEarth1()
          .scale(width / 6.5)
          .translate([width / 2, height / 2]);

        const path = d3.geoPath().projection(projection);

        // Add zoom behavior
        const zoom = d3.zoom()
          .scaleExtent([1, 8])
          .on('zoom', (event) => {
            svg.select('g').attr('transform', event.transform);
            setCurrentZoom(event.transform.k);
          });

        svg.call(zoom as any);
        zoomRef.current = zoom;

        // Create a group for all map elements
        const g = svg.append('g');

        // Create multiple mappings for better country matching
        const nameMapping = new Map<string, Country>();
        const iso2Mapping = new Map<string, Country>();
        const iso3Mapping = new Map<string, Country>();
        
        COUNTRIES.forEach(country => {
          nameMapping.set(country.name.toLowerCase(), country);
          iso2Mapping.set(country.iso2.toLowerCase(), country);
          // Note: our countries data doesn't have iso3 field
          
          // Add common name variations
          if (country.name === 'United States') {
            nameMapping.set('united states of america', country);
            nameMapping.set('usa', country);
            nameMapping.set('u.s.a.', country);
            nameMapping.set('us', country);
          }
          if (country.name === 'United Kingdom') {
            nameMapping.set('uk', country);
            nameMapping.set('britain', country);
            nameMapping.set('great britain', country);
          }
          if (country.name === 'Congo (Democratic Republic)') {
            nameMapping.set('democratic republic of the congo', country);
            nameMapping.set('democratic republic of congo', country);
            nameMapping.set('congo (dem. rep.)', country);
            nameMapping.set('congo, dem. rep.', country);
            nameMapping.set('dem. rep. congo', country);
            nameMapping.set('drc', country);
            nameMapping.set('congo (kinshasa)', country);
            nameMapping.set('dr congo', country);
          }
          if (country.name === 'Congo') {
            nameMapping.set('republic of the congo', country);
            nameMapping.set('congo (brazzaville)', country);
            nameMapping.set('congo, rep.', country);
            nameMapping.set('congo-brazzaville', country);
            nameMapping.set('republic of congo', country);
          }
          if (country.name === 'Central African Republic') {
            nameMapping.set('central african rep.', country);
            nameMapping.set('car', country);
          }
          if (country.name === 'South Sudan') {
            nameMapping.set('s. sudan', country);
          }
          if (country.name === 'South Korea') {
            nameMapping.set('korea', country);
            nameMapping.set('republic of korea', country);
            nameMapping.set('korea (republic of)', country);
            nameMapping.set('rok', country);
          }
          if (country.name === 'North Korea') {
            nameMapping.set('dprk', country);
            nameMapping.set('democratic people\'s republic of korea', country);
            nameMapping.set('korea (democratic people\'s republic of)', country);
          }
          if (country.name === 'Czech Republic') {
            nameMapping.set('czechia', country);
            nameMapping.set('czech rep.', country);
          }
          if (country.name === 'Bosnia and Herzegovina') {
            nameMapping.set('bosnia', country);
            nameMapping.set('bosnia & herzegovina', country);
            nameMapping.set('bosnia-herzegovina', country);
            nameMapping.set('bosnia and herz.', country);
            nameMapping.set('bih', country);
          }
          if (country.name === 'Macedonia') {
            nameMapping.set('north macedonia', country);
            nameMapping.set('macedonia', country);
            nameMapping.set('fyrom', country);
          }
          if (country.name === 'Swaziland') {
            nameMapping.set('eswatini', country);
            nameMapping.set('swaziland', country);
          }
          if (country.name === 'East Timor') {
            nameMapping.set('timor-leste', country);
            nameMapping.set('timor leste', country);
          }
          if (country.name === 'Ivory Coast') {
            nameMapping.set('côte d\'ivoire', country);
            nameMapping.set('cote d\'ivoire', country);
          }
        });

        // Helper function to find country data from map properties
        const findCountryData = (d: any): Country | null => {
          let countryData = null;
          
          // Try matching by name
          if (d.properties.name) {
            const nameLower = d.properties.name.toLowerCase();
            countryData = nameMapping.get(nameLower);
          }
          
          // Try matching by ISO codes if available in properties
          if (!countryData && d.properties.iso_a2) {
            countryData = iso2Mapping.get(d.properties.iso_a2.toLowerCase());
          }
          
          // Special cases for countries with different names in the map data
          if (!countryData && d.properties.name) {
            const specialCases: Record<string, string> = {
              'United States of America': 'United States',
              'United States': 'United States',
              'USA': 'United States',
              'Russian Federation': 'Russia',
              'Russia': 'Russia',
              'Korea': 'South Korea',
              'Republic of Korea': 'South Korea',
              'Korea (Republic)': 'South Korea',
              'Korea, Democratic People\'s Rep.': 'North Korea',
              'Korea (Democratic People\'s Republic)': 'North Korea',
              'Czechia': 'Czech Republic',
              'Bosnia and Herz.': 'Bosnia and Herzegovina',
              'Dominican Rep.': 'Dominican Republic',
              'Dem. Rep. Congo': 'Congo (Democratic Republic)',
              'Democratic Republic of the Congo': 'Congo (Democratic Republic)',
              'Congo (Kinshasa)': 'Congo (Democratic Republic)',
              'Congo (Brazzaville)': 'Congo',
              'Republic of the Congo': 'Congo',
              'Central African Rep.': 'Central African Republic',
              'S. Sudan': 'South Sudan',
              'The Gambia': 'Gambia',
              'eSwatini': 'Swaziland',
              'North Macedonia': 'Macedonia',
              'Brunei': 'Brunei Darussalam',
              'Vatican': 'Vatican City',
              'Timor-Leste': 'East Timor',
              'Myanmar': 'Myanmar',
              'Burma': 'Myanmar',
              'Côte d\'Ivoire': 'Ivory Coast',
              'Cote d\'Ivoire': 'Ivory Coast',
              'Eq. Guinea': 'Equatorial Guinea',
              'W. Sahara': 'Western Sahara',
              'Solomon Is.': 'Solomon Islands',
              'Fr. S. Antarctic Lands': 'French Southern Territories',
              'N. Cyprus': 'Northern Cyprus',
              'Somaliland': 'Somalia',
              'United Republic of Tanzania': 'Tanzania',
              'Falkland Is.': 'Falkland Islands',
              'Fr. Guiana': 'French Guiana',
            };
            
            const mappedName = specialCases[d.properties.name];
            if (mappedName) {
              countryData = COUNTRIES.find(c => c.name === mappedName);
            }
          }
          
          return countryData || null;
        };

        // Draw countries
        const countries = topojson.feature(world, world.objects.countries) as any;
        
        g.selectAll('path')
          .data(countries.features)
          .enter()
          .append('path')
          .attr('d', path as any)
          .attr('class', 'country')
          .attr('fill', (d: any) => {
            const countryData = findCountryData(d);
            
            if (!countryData) {
              // Only log countries that aren't small islands or territories
              const name = d.properties.name;
              if (name && !name.includes('Is.') && !name.includes('I.') && name.length > 3) {
                console.log('No data for:', name, '| ISO2:', d.properties.iso_a2, '| ISO3:', d.properties.iso_a3);
              }
              return PLUG_FAMILY_COLORS['default'];
            }
            
            const color = getCountryColor(countryData);
            return selectedFamily && color !== PLUG_FAMILY_COLORS[selectedFamily] 
              ? '#f0f0f0' 
              : color;
          })
          .attr('stroke', '#fff')
          .attr('stroke-width', 0.5)
          .style('cursor', 'pointer')
          .style('transition', 'fill 0.3s')
          .on('mouseover', function(event: MouseEvent, d: any) {
            const countryData = findCountryData(d);
            if (!countryData) return;

            // Highlight country
            d3.select(this).style('opacity', 0.8);
            
            // Show tooltip by setting state
            setTooltipData({
              country: countryData,
              x: event.clientX,
              y: event.clientY
            });
          })
          .on('mousemove', function(event: MouseEvent) {
            // Update tooltip position as mouse moves
            if (tooltipData) {
              setTooltipData(prev => prev ? { ...prev, x: event.clientX, y: event.clientY } : null);
            }
          })
          .on('mouseout', function() {
            d3.select(this).style('opacity', 1);
            setTooltipData(null);
          })
          .on('click', function(event: MouseEvent, d: any) {
            const countryData = findCountryData(d);
            if (!countryData) return;

            if (isMobile) {
              if (lastTappedCountry === countryData.slug) {
                // Second tap - navigate
                router.push(`/${countryData.slug}`);
              } else {
                // First tap - show tooltip
                setLastTappedCountry(countryData.slug);
                // Show tooltip logic here
              }
            } else {
              if (onCountryClick) {
                onCountryClick(countryData);
              } else {
                router.push(`/${countryData.slug}`);
              }
            }
          });

        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading world map:', error);
      }
    };

    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoaded) {
          loadMap();
        }
      },
      { threshold: 0.1 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, [width, height, router, onCountryClick, selectedFamily, isMobile, lastTappedCountry, isLoaded]);

  const handleZoomIn = () => {
    if (svgRef.current && zoomRef.current) {
      const svg = d3.select(svgRef.current);
      svg.transition().duration(300).call(zoomRef.current.scaleBy, 1.5);
    }
  };

  const handleZoomOut = () => {
    if (svgRef.current && zoomRef.current) {
      const svg = d3.select(svgRef.current);
      svg.transition().duration(300).call(zoomRef.current.scaleBy, 0.67);
    }
  };

  const handleResetZoom = () => {
    if (svgRef.current && zoomRef.current) {
      const svg = d3.select(svgRef.current);
      svg.transition().duration(300).call(zoomRef.current.transform, d3.zoomIdentity);
    }
  };

  return (
    <div className="relative w-full">
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-lg">
          <p className="text-gray-500">Loading map...</p>
        </div>
      )}
      
      {/* SVG Map */}
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
      />
      
      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="bg-white border-2 border-gray-300 rounded-lg p-2 hover:bg-gray-100 transition-colors shadow-lg"
          title="Zoom In"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button
          onClick={handleZoomOut}
          className="bg-white border-2 border-gray-300 rounded-lg p-2 hover:bg-gray-100 transition-colors shadow-lg"
          title="Zoom Out"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <button
          onClick={handleResetZoom}
          className="bg-white border-2 border-gray-300 rounded-lg p-2 hover:bg-gray-100 transition-colors shadow-lg"
          title="Reset Zoom"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      
      {/* Enhanced Tooltip */}
      {tooltipData && (
        <div
          className="fixed bg-white border-2 border-gray-300 rounded-lg pointer-events-none shadow-2xl p-3"
          style={{ 
            left: `${Math.min(tooltipData.x + 10, window.innerWidth - 330)}px`,
            top: `${Math.min(tooltipData.y - 10, window.innerHeight - 150)}px`,
            maxWidth: '320px',
            minWidth: '280px',
            zIndex: 9999,
            transition: 'opacity 0.2s'
          }}
        >
          <div className="font-bold text-sm flex items-center mb-2">
            <img 
              src={`https://flagcdn.com/w20/${tooltipData.country.iso2.toLowerCase()}.png`}
              alt={tooltipData.country.name}
              className="w-6 h-4 object-cover mr-2 rounded shadow-sm"
            />
            {tooltipData.country.name}
          </div>
          <div className="text-xs space-y-1">
            <div><strong>Plug Types:</strong> Type {tooltipData.country.plugTypes.join(', Type ')}</div>
            <div><strong>Voltage:</strong> {tooltipData.country.voltage}V / {tooltipData.country.frequency}Hz</div>
            <div className={`font-semibold mt-2 ${tooltipData.country.plugTypes.some(p => !['A', 'B'].includes(p)) ? 'text-red-600' : 'text-green-600'}`}>
              {tooltipData.country.plugTypes.some(p => !['A', 'B'].includes(p)) 
                ? '⚠️ Adapter needed for US travelers' 
                : '✓ Compatible with US plugs'}
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2">Click to view details →</div>
        </div>
      )}
      
      {/* Legend */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {Object.entries(PLUG_FAMILY_COLORS).filter(([key]) => key !== 'default').map(([family, color]) => (
          <button
            key={family}
            onClick={() => setSelectedFamily(selectedFamily === family ? null : family)}
            className={`flex items-center gap-2 px-3 py-1 rounded border transition ${
              selectedFamily === family ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            <span
              className="w-4 h-4 rounded"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm">{family}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorldMap;
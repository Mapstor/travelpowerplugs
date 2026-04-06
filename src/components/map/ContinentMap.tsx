'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { COUNTRIES } from '@/data/countries';

interface ContinentMapProps {
  continent: string;
}

// Continent bounds for zooming [west, south], [east, north]
const CONTINENT_BOUNDS: { [key: string]: [[number, number], [number, number]] } = {
  'europe': [[-25, 34], [45, 72]],
  'asia': [[25, -10], [180, 55]], 
  'africa': [[-20, -35], [55, 38]],
  'north america': [[-170, 15], [-50, 85]],
  'south america': [[-82, -56], [-34, 13]],
  'oceania': [[100, -50], [180, 10]],
  'middle east': [[25, 12], [65, 42]]
};

const ContinentMap: React.FC<ContinentMapProps> = ({ 
  continent 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    country: any;
  } | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const handleResize = () => {
      const container = svgRef.current?.parentElement;
      if (container) {
        const width = container.offsetWidth;
        const height = Math.min(width * 0.6, 600);
        setDimensions({ width, height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Create country name mapping for better matching
    const countryNameMap = new Map();
    COUNTRIES.forEach(country => {
      countryNameMap.set(country.name.toLowerCase(), country);
      
      // Add alternative name mappings - Global
      if (country.name === 'United States') {
        countryNameMap.set('united states of america', country);
        countryNameMap.set('usa', country);
        countryNameMap.set('united states', country);
      }
      if (country.name === 'United Kingdom') {
        countryNameMap.set('united kingdom', country);
        countryNameMap.set('uk', country);
        countryNameMap.set('britain', country);
        countryNameMap.set('great britain', country);
      }
      if (country.name === 'Congo (Democratic Republic)') {
        countryNameMap.set('democratic republic of the congo', country);
        countryNameMap.set('congo (dem. rep.)', country);
        countryNameMap.set('dem. rep. congo', country);
        countryNameMap.set('congo, dem. rep.', country);
        countryNameMap.set('dr congo', country);
      }
      if (country.name === 'Congo (Republic)') {
        countryNameMap.set('republic of the congo', country);
        countryNameMap.set('congo (rep.)', country);
        countryNameMap.set('congo, rep.', country);
        countryNameMap.set('congo', country);
      }
      if (country.name === 'Tanzania') {
        countryNameMap.set('united republic of tanzania', country);
      }
      if (country.name === 'Central African Republic') {
        countryNameMap.set('central african rep.', country);
      }
      if (country.name === 'South Sudan') {
        countryNameMap.set('s. sudan', country);
      }
      if (country.name === 'Ivory Coast') {
        countryNameMap.set("côte d'ivoire", country);
        countryNameMap.set('cote d\'ivoire', country);
      }
      if (country.name === 'Czech Republic') {
        countryNameMap.set('czechia', country);
      }
      if (country.name === 'North Macedonia') {
        countryNameMap.set('macedonia', country);
      }
      if (country.name === 'Bosnia and Herzegovina') {
        countryNameMap.set('bosnia and herz.', country);
        countryNameMap.set('bosnia', country);
      }
      if (country.name === 'Dominican Republic') {
        countryNameMap.set('dominican rep.', country);
      }
      if (country.name === 'Equatorial Guinea') {
        countryNameMap.set('eq. guinea', country);
      }
      
      // Asian country mappings
      if (country.name === 'Hong Kong') {
        countryNameMap.set('hong kong s.a.r.', country);
        countryNameMap.set('hong kong sar', country);
        countryNameMap.set('hong kong special administrative region', country);
      }
      if (country.name === 'Macao') {
        countryNameMap.set('macau', country);
        countryNameMap.set('macao s.a.r.', country);
        countryNameMap.set('macao sar', country);
        countryNameMap.set('macau s.a.r.', country);
        countryNameMap.set('macau sar', country);
      }
      if (country.name === 'North Korea') {
        countryNameMap.set('dem. rep. korea', country);
        countryNameMap.set('korea (dem. rep.)', country);
        countryNameMap.set('korea, dem. rep.', country);
        countryNameMap.set('democratic people\'s republic of korea', country);
        countryNameMap.set('dprk', country);
      }
      if (country.name === 'South Korea') {
        countryNameMap.set('korea (republic)', country);
        countryNameMap.set('korea, republic of', country);
        countryNameMap.set('republic of korea', country);
        countryNameMap.set('korea', country);
      }
      if (country.name === 'Myanmar') {
        countryNameMap.set('myanmar (burma)', country);
        countryNameMap.set('burma', country);
      }
      if (country.name === 'Taiwan') {
        countryNameMap.set('taiwan, province of china', country);
        countryNameMap.set('chinese taipei', country);
        countryNameMap.set('republic of china', country);
      }
      if (country.name === 'Timor-Leste') {
        countryNameMap.set('east timor', country);
        countryNameMap.set('timor leste', country);
      }
      if (country.name === 'Laos') {
        countryNameMap.set('lao people\'s democratic republic', country);
        countryNameMap.set('lao pdr', country);
        countryNameMap.set('lao', country);
      }
      if (country.name === 'Brunei') {
        countryNameMap.set('brunei darussalam', country);
      }
      if (country.name === 'Sri Lanka') {
        countryNameMap.set('sri lanka (ceylon)', country);
        countryNameMap.set('ceylon', country);
      }
      if (country.name === 'Russia') {
        countryNameMap.set('russian federation', country);
        countryNameMap.set('russia (federation)', country);
      }
      // Special Asian territories that might be grouped differently in TopoJSON
      if (country.name === 'Singapore') {
        countryNameMap.set('singapore republic', country);
      }
      if (country.name === 'Maldives') {
        countryNameMap.set('maldive islands', country);
        countryNameMap.set('maldive is.', country);
      }
      
      // Middle East country mappings
      if (country.name === 'United Arab Emirates') {
        countryNameMap.set('uae', country);
        countryNameMap.set('u.a.e.', country);
        countryNameMap.set('emirates', country);
      }
      if (country.name === 'Saudi Arabia') {
        countryNameMap.set('saudi', country);
        countryNameMap.set('kingdom of saudi arabia', country);
      }
      if (country.name === 'Palestinian Territories') {
        countryNameMap.set('palestine', country);
        countryNameMap.set('west bank and gaza', country);
        countryNameMap.set('palestinian territory', country);
      }
    });

    // Set up projection based on continent
    const continentKey = continent.toLowerCase().trim();
    const bounds = CONTINENT_BOUNDS[continentKey] || CONTINENT_BOUNDS['europe'];
    
    console.log('Setting up projection for:', continentKey);
    
    // Use appropriate projection for each continent
    let projection;
    if (continentKey === 'africa') {
      projection = d3.geoMercator()
        .center([20, 0]) // Center on Africa
        .scale(dimensions.width / 2.5)
        .translate([dimensions.width / 2, dimensions.height / 2]);
    } else if (continentKey === 'europe') {
      projection = d3.geoMercator()
        .center([10, 50]) // Center on Europe
        .scale(dimensions.width / 1.5)
        .translate([dimensions.width / 2, dimensions.height / 2]);
    } else if (continentKey === 'asia') {
      projection = d3.geoMercator()
        .center([90, 30]) // Center on Asia
        .scale(dimensions.width / 4)
        .translate([dimensions.width / 2, dimensions.height / 2]);
    } else if (continentKey === 'north america') {
      projection = d3.geoMercator()
        .center([-100, 45]) // Center on North America
        .scale(dimensions.width / 3)
        .translate([dimensions.width / 2, dimensions.height / 2]);
    } else if (continentKey === 'south america') {
      projection = d3.geoMercator()
        .center([-60, -15]) // Center on South America
        .scale(dimensions.width / 2.5)
        .translate([dimensions.width / 2, dimensions.height / 2]);
    } else if (continentKey === 'oceania') {
      projection = d3.geoMercator()
        .center([140, -25]) // Center on Oceania
        .scale(dimensions.width / 3)
        .translate([dimensions.width / 2, dimensions.height / 2]);
    } else {
      // Default fallback
      projection = d3.geoMercator()
        .fitSize([dimensions.width, dimensions.height], {
          type: 'Polygon',
          coordinates: [[
            [bounds[0][0], bounds[0][1]],
            [bounds[1][0], bounds[0][1]],
            [bounds[1][0], bounds[1][1]],
            [bounds[0][0], bounds[1][1]],
            [bounds[0][0], bounds[0][1]]
          ]]
        });
    }

    const path = d3.geoPath().projection(projection);

    // Load and render world data
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(response => response.json())
      .then(world => {
        const countries = feature(world, world.objects.countries) as any;
        
        console.log('Loading map for continent:', continent);
        console.log('Total countries loaded:', countries.features.length);
        
        // Keep track of unmatched countries for debugging
        const unmatchedCountries: string[] = [];
        
        // Filter countries for this continent
        const continentCountries = countries.features.filter((d: any) => {
          const name = d.properties.name || d.properties.NAME || d.properties.name_long || d.properties.name_en;
          const lowerName = name?.toLowerCase() || '';
          
          let countryData = countryNameMap.get(lowerName);
          
          // Try various name formats
          if (!countryData && name) {
            // Try without "the" prefix
            countryData = countryNameMap.get(lowerName.replace(/^the /, ''));
            
            // Try with spaces replaced by hyphens
            if (!countryData) {
              countryData = countryNameMap.get(lowerName.replace(/\s+/g, '-'));
            }
            
            // Try first word only (for compound names)
            if (!countryData) {
              const firstName = lowerName.split(' ')[0];
              countryData = countryNameMap.get(firstName);
            }
          }
          
          if (!countryData) {
            unmatchedCountries.push(name || 'Unknown');
            return false;
          }
          
          const continentName = continent.toLowerCase().replace(/[-\s]+/g, ' ');
          const countryContinent = countryData.continent.toLowerCase().replace(/[-\s]+/g, ' ');
          
          // Handle special cases
          if (continentName === 'middle east') {
            return ['AE', 'SA', 'IL', 'JO', 'LB', 'SY', 'IQ', 'IR', 'KW', 'QA', 'BH', 'OM', 'YE']
              .includes(countryData.iso2);
          }
          
          // Special case: Russia appears on Asia map too (majority of landmass is in Asia)
          if (continentName === 'asia' && countryData.name === 'Russia') {
            return true;
          }
          
          // Special case: Middle East countries appear on Asia map too (geographically in Asia)
          if (continentName === 'asia' && countryContinent === 'middle-east') {
            return true;
          }
          
          // More flexible comparison
          return countryContinent === continentName;
        });
        
        console.log('Filtered countries for', continent, ':', continentCountries.length);
        if (unmatchedCountries.length > 0) {
          console.log('Unmatched TopoJSON countries:', unmatchedCountries);
        }
        
        // Helper function to find country data
        const findCountryData = (d: any) => {
          const name = d.properties.name || d.properties.NAME || d.properties.name_long || d.properties.name_en;
          const lowerName = name?.toLowerCase() || '';
          
          let countryData = countryNameMap.get(lowerName);
          
          if (!countryData && name) {
            // Try without "the" prefix
            countryData = countryNameMap.get(lowerName.replace(/^the /, ''));
            
            // Try with spaces replaced by hyphens
            if (!countryData) {
              countryData = countryNameMap.get(lowerName.replace(/\s+/g, '-'));
            }
            
            // Try first word only (for compound names)
            if (!countryData) {
              const firstName = lowerName.split(' ')[0];
              countryData = countryNameMap.get(firstName);
            }
          }
          
          return countryData;
        };

        
        // If no countries matched, render all countries for debugging
        if (continentCountries.length === 0) {
          console.warn('No countries matched for continent:', continent);
          console.log('Sample country properties:', countries.features[0]?.properties);
          // Use all countries as fallback for now
          // continentCountries = countries.features;
        }

        // Use the same color scheme as the homepage WorldMap
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

        const getCountryColor = (country: any) => {
          const plugTypes = country.plugTypes;
          
          // Check for specific plug type combinations (same logic as WorldMap)
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
        };

        // Create a set of continent country names for quick lookup
        const continentCountrySet = new Set(
          continentCountries.map((d: any) => {
            const name = d.properties.name || d.properties.NAME || d.properties.name_long || d.properties.name_en;
            return name?.toLowerCase();
          })
        );

        // Draw ALL countries (but highlight only continent countries)
        svg.selectAll('path')
          .data(countries.features) // Use all countries, not just filtered
          .enter()
          .append('path')
          .attr('d', path)
          .attr('fill', (d: any) => {
            const countryData = findCountryData(d);
            const name = d.properties.name || d.properties.NAME || d.properties.name_long || d.properties.name_en;
            const isInContinent = continentCountrySet.has(name?.toLowerCase());
            
            // Only color countries that are in this continent
            if (isInContinent && countryData) {
              return getCountryColor(countryData);
            }
            return '#F3F4F6'; // Light gray for countries outside continent
          })
          .attr('opacity', (d: any) => {
            const name = d.properties.name || d.properties.NAME || d.properties.name_long || d.properties.name_en;
            const isInContinent = continentCountrySet.has(name?.toLowerCase());
            return isInContinent ? 1 : 0.3; // Fade out countries not in continent
          })
          .attr('stroke', '#FFFFFF')
          .attr('stroke-width', 1)
          .style('cursor', 'pointer')
          .on('mouseenter', function(event, d: any) {
            const name = d.properties.name || d.properties.NAME || d.properties.name_long || d.properties.name_en;
            const isInContinent = continentCountrySet.has(name?.toLowerCase());
            
            if (isInContinent) {
              const countryData = findCountryData(d);
              if (countryData) {
                d3.select(this)
                  .attr('stroke-width', 2)
                  .attr('stroke', '#2563EB');
                  
                const [x, y] = d3.pointer(event, svgRef.current);
                setTooltip({
                  x: x + 10,
                  y: y - 10,
                  country: countryData
                });
              }
            }
          })
          .on('mouseleave', function(event, d: any) {
            d3.select(this)
              .attr('stroke-width', 1)
              .attr('stroke', '#FFFFFF');
              
            setTooltip(null);
          })
          .on('click', function(event, d: any) {
            const name = d.properties.name || d.properties.NAME || d.properties.name_long || d.properties.name_en;
            const isInContinent = continentCountrySet.has(name?.toLowerCase());
            
            if (isInContinent) {
              const countryData = findCountryData(d);
              if (countryData && countryData.slug) {
                window.location.href = `/${countryData.slug}`;
              }
            }
          });

        // Add country labels for major countries
        svg.selectAll('.country-label')
          .data(continentCountries.filter((d: any) => {
            const countryData = findCountryData(d);
            return countryData && ['United States', 'China', 'Russia', 'Brazil', 'India', 'Australia', 'Germany', 'France', 'United Kingdom', 'Italy', 'Spain'].includes(countryData.name);
          }))
          .enter()
          .append('text')
          .attr('class', 'country-label')
          .attr('x', (d: any) => {
            const centroid = path.centroid(d);
            return centroid[0];
          })
          .attr('y', (d: any) => {
            const centroid = path.centroid(d);
            return centroid[1];
          })
          .attr('text-anchor', 'middle')
          .attr('font-size', '12px')
          .attr('font-weight', 'bold')
          .attr('fill', '#374151')
          .attr('stroke', '#FFFFFF')
          .attr('stroke-width', 3)
          .attr('paint-order', 'stroke')
          .style('pointer-events', 'none')
          .text((d: any) => {
            const countryData = findCountryData(d);
            return countryData?.name || d.properties.name || d.properties.NAME;
          });
      })
      .catch(error => {
        console.error('Error loading world data:', error);
      });

  }, [continent, dimensions]);

  return (
    <div className="relative w-full">
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-auto border border-gray-200 rounded-lg bg-blue-50"
      />
      
      {tooltip && (
        <div
          className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg p-3 pointer-events-none max-w-xs"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <img
              src={`https://flagcdn.com/w20/${tooltip.country.iso2.toLowerCase()}.png`}
              alt=""
              width={20}
              height={15}
              className="rounded"
            />
            <span className="font-semibold">{tooltip.country.name}</span>
          </div>
          <div className="text-sm space-y-1">
            <div>
              <span className="text-gray-600">Plugs:</span> 
              <span className="font-medium ml-1">
                {tooltip.country.plugTypes.map((type: string) => `Type ${type}`).join(', ')}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Voltage:</span> 
              <span className="font-medium ml-1">{tooltip.country.voltage}V</span>
            </div>
            <div className="text-xs text-blue-600 mt-2">
              Click to view details →
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContinentMap;
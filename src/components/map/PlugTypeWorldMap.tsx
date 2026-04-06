'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { COUNTRIES } from '@/data/countries';

interface PlugTypeWorldMapProps {
  plugType: string;
  className?: string;
}

export default function PlugTypeWorldMap({ plugType, className = '' }: PlugTypeWorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ countries: 0, population: 0, percentage: 0 });
  const router = useRouter();

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 400;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    // Create background
    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', '#f0f9ff');

    const projection = d3.geoNaturalEarth1()
      .scale(130)
      .center([0, 20])
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    // Find countries that use this plug type
    const countriesUsingType = COUNTRIES.filter(country => 
      country.plugTypes.includes(plugType as any)
    );

    const countrySet = new Set(countriesUsingType.map(c => c.name.toLowerCase()));
    
    // Calculate statistics
    const totalCountries = COUNTRIES.length;
    const usingCount = countriesUsingType.length;
    const percentage = Math.round((usingCount / totalCountries) * 100);
    
    setStats({
      countries: usingCount,
      population: 0, // Would need population data
      percentage
    });

    // Load world topology
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(response => response.json())
      .then(world => {
        const countries = feature(world, world.objects.countries) as any;

        // Draw countries
        svg.append('g')
          .selectAll('path')
          .data(countries.features)
          .enter()
          .append('path')
          .attr('d', pathGenerator as any)
          .attr('fill', (d: any) => {
            const name = d.properties.name?.toLowerCase() || '';
            
            // Check if this country uses the plug type
            const usesType = countrySet.has(name) ||
              countriesUsingType.some(c => {
                const cName = c.name.toLowerCase();
                return name.includes(cName) || cName.includes(name) ||
                       (c.name === 'United States' && name === 'united states of america') ||
                       (c.name === 'United Kingdom' && (name === 'united kingdom' || name === 'uk')) ||
                       (c.name === 'Czech Republic' && name === 'czechia');
              });

            return usesType ? '#3b82f6' : '#e5e7eb';
          })
          .attr('stroke', '#ffffff')
          .attr('stroke-width', 0.5)
          .on('mouseover', function(event: MouseEvent, d: any) {
            const name = d.properties.name;
            
            // Try to find the country in our data
            let countryData = countriesUsingType.find(c => {
              const cName = c.name.toLowerCase();
              const dName = name?.toLowerCase() || '';
              return cName === dName ||
                     (c.name === 'United States' && dName === 'united states of america') ||
                     (c.name === 'United Kingdom' && (dName === 'united kingdom' || dName === 'uk')) ||
                     (c.name === 'Czech Republic' && dName === 'czechia') ||
                     (c.name === 'Democratic Republic of the Congo' && dName.includes('congo')) ||
                     (c.name === 'North Macedonia' && dName.includes('macedonia'));
            });

            if (!countryData) {
              // Check all countries, not just ones using this plug type
              countryData = COUNTRIES.find(c => {
                const cName = c.name.toLowerCase();
                const dName = name?.toLowerCase() || '';
                return cName === dName ||
                       (c.name === 'United States' && dName === 'united states of america') ||
                       (c.name === 'United Kingdom' && (dName === 'united kingdom' || dName === 'uk')) ||
                       (c.name === 'Czech Republic' && dName === 'czechia');
              });
            }

            if (tooltipRef.current) {
              const usesThisType = countryData && countryData.plugTypes.includes(plugType as any);
              
              if (usesThisType) {
                d3.select(this).attr('fill', '#1d4ed8');
              } else {
                d3.select(this).attr('fill', '#d1d5db');
              }
              
              if (countryData) {
                const adapterNeeded = !countryData.plugTypes.includes(plugType as any);
                tooltipRef.current.innerHTML = `
                  <div class="font-semibold">${countryData.name}</div>
                  <div class="text-sm mt-1">
                    <div class="flex items-center">
                      <span class="font-medium">Plug Types:</span>
                      <span class="ml-1">${countryData.plugTypes.join(', ')}</span>
                    </div>
                    <div class="flex items-center">
                      <span class="font-medium">Voltage:</span>
                      <span class="ml-1">${countryData.voltage}V</span>
                    </div>
                    <div class="flex items-center">
                      <span class="font-medium">Frequency:</span>
                      <span class="ml-1">${countryData.frequency}Hz</span>
                    </div>
                    ${usesThisType ? 
                      '<div class="mt-1 text-green-400">✓ Uses Type ' + plugType + '</div>' : 
                      '<div class="mt-1 text-yellow-400">⚠ Different plug type</div>'
                    }
                  </div>
                `;
              } else {
                tooltipRef.current.innerHTML = `
                  <div class="font-semibold">${name}</div>
                  <div class="text-sm text-gray-400">No data available</div>
                `;
              }
              
              tooltipRef.current.style.display = 'block';
              tooltipRef.current.style.left = event.pageX + 10 + 'px';
              tooltipRef.current.style.top = event.pageY - 28 + 'px';
            }
          })
          .on('mouseout', function(event: MouseEvent, d: any) {
            const name = d.properties.name?.toLowerCase() || '';
            const usesType = countrySet.has(name) || 
              countriesUsingType.some(c => {
                const cName = c.name.toLowerCase();
                return cName === name ||
                       (c.name === 'United States' && name === 'united states of america') ||
                       (c.name === 'United Kingdom' && (name === 'united kingdom' || name === 'uk'));
              });
            
            d3.select(this).attr('fill', usesType ? '#3b82f6' : '#e5e7eb');
            
            if (tooltipRef.current) {
              tooltipRef.current.style.display = 'none';
            }
          })
          .on('click', function(event: MouseEvent, d: any) {
            const name = d.properties.name;
            
            // Find the country in our data
            const countryData = COUNTRIES.find(c => {
              const cName = c.name.toLowerCase();
              const dName = name?.toLowerCase() || '';
              return cName === dName ||
                     (c.name === 'United States' && dName === 'united states of america') ||
                     (c.name === 'United Kingdom' && (dName === 'united kingdom' || dName === 'uk')) ||
                     (c.name === 'Czech Republic' && dName === 'czechia') ||
                     (c.name === 'Democratic Republic of the Congo' && dName.includes('congo')) ||
                     (c.name === 'North Macedonia' && dName.includes('macedonia'));
            });
            
            if (countryData && countryData.slug) {
              // Navigate to the country page
              router.push(`/${countryData.slug}`);
            }
          })
          .style('cursor', 'pointer');

        // Add title
        svg.append('text')
          .attr('x', width / 2)
          .attr('y', 30)
          .attr('text-anchor', 'middle')
          .attr('font-size', '18')
          .attr('font-weight', 'bold')
          .attr('fill', '#1f2937')
          .text(`Countries Using Type ${plugType} Plugs`);

        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading world data:', error);
        setLoading(false);
      });

  }, [plugType]);

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
          <div className="text-gray-600">Loading map...</div>
        </div>
      )}
      
      <svg ref={svgRef} className="w-full h-auto" />
      
      <div 
        ref={tooltipRef}
        className="fixed hidden bg-gray-900 text-white p-2 rounded-lg text-sm z-50 pointer-events-none"
        style={{ maxWidth: '200px' }}
      />

      {/* Statistics Bar */}
      <div className="grid grid-cols-3 gap-4 mt-4 p-4 bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.countries}</div>
          <div className="text-sm text-gray-600">Countries</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.percentage}%</div>
          <div className="text-sm text-gray-600">Global Coverage</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">
            {plugType === 'A' || plugType === 'B' ? '120V' : '230V'}
          </div>
          <div className="text-sm text-gray-600">Common Voltage</div>
        </div>
      </div>
    </div>
  );
}
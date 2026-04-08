'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const continents = [
  { name: 'Europe', slug: 'europe' },
  { name: 'Asia', slug: 'asia' },
  { name: 'Africa', slug: 'africa' },
  { name: 'North America', slug: 'north-america' },
  { name: 'South America', slug: 'south-america' },
  { name: 'Oceania', slug: 'oceania' },
  { name: 'Middle East', slug: 'middle-east' },
];

const tools = [
  { name: 'Adapter Finder', slug: 'adapter-finder', icon: '🔌' },
  { name: 'Voltage Calculator', slug: 'voltage-calculator', icon: '⚡' },
  { name: 'Trip Planner', slug: 'trip-planner', icon: '✈️' },
  { name: 'Compatibility Matrix', slug: 'compatibility-matrix', icon: '📊' },
  { name: 'Plug Identifier', slug: 'plug-identifier', icon: '🔍' },
];

const plugTypes = [
  { name: 'Type A - American', slug: 'type-a', icon: '🇺🇸' },
  { name: 'Type B - American Grounded', slug: 'type-b', icon: '🇺🇸' },
  { name: 'Type C - Europlug', slug: 'type-c', icon: '🇪🇺' },
  { name: 'Type D - Indian', slug: 'type-d', icon: '🇮🇳' },
  { name: 'Type E - French', slug: 'type-e', icon: '🇫🇷' },
  { name: 'Type F - Schuko', slug: 'type-f', icon: '🇩🇪' },
  { name: 'Type G - British', slug: 'type-g', icon: '🇬🇧' },
  { name: 'Type H - Israeli', slug: 'type-h', icon: '🇮🇱' },
  { name: 'Type I - Australian', slug: 'type-i', icon: '🇦🇺' },
  { name: 'Type J - Swiss', slug: 'type-j', icon: '🇨🇭' },
  { name: 'Type K - Danish', slug: 'type-k', icon: '🇩🇰' },
  { name: 'Type L - Italian', slug: 'type-l', icon: '🇮🇹' },
  { name: 'Type M - South African', slug: 'type-m', icon: '🇿🇦' },
  { name: 'Type N - Brazilian', slug: 'type-n', icon: '🇧🇷' },
  { name: 'Type O - Thai', slug: 'type-o', icon: '🇹🇭' },
];

const comparisons = [
  { name: 'Type A vs Type B', slug: 'type-a-vs-type-b-plug', icon: '🇺🇸' },
  { name: 'Type C vs Type F', slug: 'type-c-vs-type-f-plug', icon: '🇪🇺' },
  { name: 'Type C vs Type E', slug: 'type-c-vs-type-e-plug', icon: '🇫🇷' },
  { name: 'Type E vs Type F', slug: 'type-e-vs-type-f-plug', icon: '🇩🇪' },
  { name: 'Type D vs Type M', slug: 'type-d-vs-type-m-plug', icon: '🇿🇦' },
];

interface HeaderProps {
  showFullNav?: boolean;
}

export default function Header({ showFullNav = true }: HeaderProps) {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isPlugTypesOpen, setIsPlugTypesOpen] = useState(false);
  const [isComparisonsOpen, setIsComparisonsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsToolsOpen(false);
        setIsPlugTypesOpen(false);
        setIsComparisonsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleToolsDropdown = () => {
    setIsToolsOpen(!isToolsOpen);
    setIsPlugTypesOpen(false);
    setIsComparisonsOpen(false);
  };

  const togglePlugTypesDropdown = () => {
    setIsPlugTypesOpen(!isPlugTypesOpen);
    setIsToolsOpen(false);
    setIsComparisonsOpen(false);
  };

  const toggleComparisonsDropdown = () => {
    setIsComparisonsOpen(!isComparisonsOpen);
    setIsToolsOpen(false);
    setIsPlugTypesOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/favicon.ico" 
                alt="Travel Power Plugs" 
                className="w-8 h-8"
              />
              <div>
                <span className="text-xl font-serif font-bold text-gray-900">Travel Power Plugs</span>
                <span className="hidden sm:block text-xs text-gray-500">Electrical Standards Guide</span>
              </div>
            </Link>
          </div>
        
        {showFullNav && (
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Continents */}
            <div className="flex space-x-4">
              {continents.slice(0, 4).map((continent) => (
                <Link
                  key={continent.slug}
                  href={`/continent/${continent.slug}`}
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {continent.name}
                </Link>
              ))}
            </div>
            
            {/* Plug Types Dropdown */}
            <div className="relative dropdown-container">
              <button 
                onClick={togglePlugTypesDropdown}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors flex items-center"
              >
                Plug Types <span className="ml-1">▼</span>
              </button>
              
              {isPlugTypesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-[500px] overflow-y-auto">
                  {plugTypes.map((plugType) => (
                    <Link
                      key={plugType.slug}
                      href={`/plug-type/${plugType.slug}`}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setIsPlugTypesOpen(false)}
                    >
                      <span className="mr-3">{plugType.icon}</span>
                      {plugType.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Comparisons Dropdown */}
            <div className="relative dropdown-container">
              <button 
                onClick={toggleComparisonsDropdown}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors flex items-center"
              >
                Comparisons <span className="ml-1">▼</span>
              </button>
              
              {isComparisonsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {comparisons.map((comparison) => (
                    <Link
                      key={comparison.slug}
                      href={`/${comparison.slug}`}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setIsComparisonsOpen(false)}
                    >
                      <span className="mr-3">{comparison.icon}</span>
                      {comparison.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <Link
                      href="/about"
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors last:rounded-b-lg"
                      onClick={() => setIsComparisonsOpen(false)}
                    >
                      <span className="mr-3">ℹ️</span>
                      About
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* Tools Dropdown */}
            <div className="relative dropdown-container">
              <button 
                onClick={toggleToolsDropdown}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors flex items-center"
              >
                Tools <span className="ml-1">▼</span>
              </button>
              
              {isToolsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {tools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setIsToolsOpen(false)}
                    >
                      <span className="mr-3">{tool.icon}</span>
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        )}
        
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 p-2 rounded-md hover:bg-gray-100"
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && showFullNav && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            {/* Continents section */}
            <div className="border-b border-gray-100 pb-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Continents</h3>
              <div className="grid grid-cols-2 gap-2">
                {continents.map((continent) => (
                  <Link
                    key={continent.slug}
                    href={`/continent/${continent.slug}`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {continent.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Plug Types section */}
            <div className="border-b border-gray-100 pb-2">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md">
                  Plug Types
                  <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-2 ml-3 space-y-1">
                  {plugTypes.map((plugType) => (
                    <Link
                      key={plugType.slug}
                      href={`/plug-type/${plugType.slug}`}
                      className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-2">{plugType.icon}</span>
                      {plugType.name}
                    </Link>
                  ))}
                </div>
              </details>
            </div>

            {/* Comparisons section */}
            <div className="border-b border-gray-100 pb-2">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md">
                  Comparisons
                  <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-2 ml-3 space-y-1">
                  {comparisons.map((comparison) => (
                    <Link
                      key={comparison.slug}
                      href={`/${comparison.slug}`}
                      className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-2">{comparison.icon}</span>
                      {comparison.name}
                    </Link>
                  ))}
                </div>
              </details>
            </div>

            {/* Tools section */}
            <div className="pb-2">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md">
                  Tools
                  <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-2 ml-3 space-y-1">
                  {tools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-2">{tool.icon}</span>
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </details>
            </div>

            {/* About link */}
            <div className="pt-2 border-t border-gray-100">
              <Link
                href="/about"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-2">ℹ️</span>
                About
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
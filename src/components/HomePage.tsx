'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { COUNTRIES } from '@/data/countries';
import CountrySearch from '@/components/CountrySearch';

const WorldMap = dynamic(() => import('@/components/map/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-50 flex items-center justify-center">
      <p className="text-gray-500 text-sm">Loading map...</p>
    </div>
  ),
});

const plugTypes = [
  { type: 'a', image: 'type-a-electric-plug-and-socket.svg' },
  { type: 'b', image: 'type-b-electric-plug-and-socket.svg' },
  { type: 'c', image: 'type-c-electric-plug-and-socket.svg' },
  { type: 'd', image: 'type-d-electric-plug-and-socket.svg' },
  { type: 'e', image: 'type-e-electric-plug-and-socket.svg' },
  { type: 'f', image: 'type-f-electric-plug-and-socket.svg' },
  { type: 'g', image: 'type-g-electric-plug-and-socket.svg' },
  { type: 'h', image: 'type-h-electric-plug-and-socket.svg' },
  { type: 'i', image: 'type-i-electric-plug-and-socket.svg' },
  { type: 'j', image: 'type-j-electric-plug-and-socket.svg' },
  { type: 'k', image: 'type-k-electric-plug-and-socket.svg' },
  { type: 'l', image: 'type-l-electric-plug-and-socket.svg' },
  { type: 'm', image: 'type-m-electric-plug-and-socket.svg' },
  { type: 'n', image: 'type-n-electric-plug-and-socket.svg' },
];

const continents = [
  { name: 'Europe', slug: 'europe' },
  { name: 'Asia', slug: 'asia' },
  { name: 'Africa', slug: 'africa' },
  { name: 'North America', slug: 'north-america' },
  { name: 'South America', slug: 'south-america' },
  { name: 'Oceania', slug: 'oceania' },
];

export default function HomePage() {
  const sortedCountries = useMemo(() => {
    return [...COUNTRIES].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Travel Power Plugs
          </Link>
          <nav className="hidden md:flex space-x-6">
            {continents.map((continent) => (
              <Link
                key={continent.slug}
                href={`/continent/${continent.slug}`}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                {continent.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <CountrySearch />
      </div>

      {/* Intro Text */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              When traveling abroad, you need the ability to charge your phones, laptops, mobile power banks, and so on. 
              That's why it's quite important you check which types of electric plug a country you are about to visit have.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Pretty much the worst thing is panicking your mobile phone battery is dying while you try to use Google Maps 
              to locate an electronics store that sells the right type of adapter you need.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              That's why we at Travel Power Plugs listed all electric plug types for all countries in the world and give 
              you a heads up if you will need an adapter. You can navigate to the country you are traveling to using this 
              interactive world map (you will get electric socket types and if you need adapter info for every country):
            </p>
          </div>
        </div>
      </div>

      {/* World Map */}
      <div className="max-w-7xl mx-auto px-4">
        <WorldMap />
        
        {/* Map Legend */}
        <div className="flex flex-wrap gap-2 mt-4 text-xs">
          <span className="inline-flex items-center px-2 py-1 bg-gray-100 rounded">
            <span className="w-3 h-3 rounded-full bg-red-500 mr-1.5"></span>
            Type A/B (Americas)
          </span>
          <span className="inline-flex items-center px-2 py-1 bg-gray-100 rounded">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-1.5"></span>
            Type C/E/F (Europe)
          </span>
          <span className="inline-flex items-center px-2 py-1 bg-gray-100 rounded">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-1.5"></span>
            Type G (UK/Ireland)
          </span>
          <span className="inline-flex items-center px-2 py-1 bg-gray-100 rounded">
            <span className="w-3 h-3 rounded-full bg-purple-500 mr-1.5"></span>
            Type I (Australia)
          </span>
          <span className="inline-flex items-center px-2 py-1 bg-gray-100 rounded">
            <span className="w-3 h-3 rounded-full bg-orange-500 mr-1.5"></span>
            Mixed Standards
          </span>
        </div>
      </div>

      {/* Plug Types Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Electric Plug Types</h2>
        <div className="grid grid-cols-7 gap-4">
          {plugTypes.map((plug) => (
            <Link
              key={plug.type}
              href={`/plug-type/type-${plug.type}`}
              className="block bg-white border border-gray-200 rounded hover:border-gray-400 transition-colors"
            >
              <div className="relative w-full h-[125px] bg-white">
                <Image
                  src={`/images/plugs/${plug.image}`}
                  alt={`Type ${plug.type.toUpperCase()} plug`}
                  width={150}
                  height={125}
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Countries Table */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">All Countries</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Country</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Plug Types</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Voltage</th>
              </tr>
            </thead>
            <tbody>
              {sortedCountries.map((country, index) => (
                <tr 
                  key={country.iso2}
                  className={`border-b border-gray-100 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <td className="py-2 px-3">
                    <Link
                      href={`/${country.slug}`}
                      className="text-blue-600 hover:underline flex items-center space-x-2"
                    >
                      <img
                        src={`https://flagcdn.com/w20/${country.iso2.toLowerCase()}.png`}
                        alt=""
                        width={20}
                        height={15}
                        className="inline-block"
                      />
                      <span>{country.name}</span>
                    </Link>
                  </td>
                  <td className="py-2 px-3 text-gray-600">
                    {country.plugTypes.join(', ')}
                  </td>
                  <td className="py-2 px-3 text-gray-600">
                    {country.voltage}V / {country.frequency}Hz
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
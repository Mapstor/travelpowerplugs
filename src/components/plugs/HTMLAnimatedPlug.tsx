'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PLUG_DESCRIPTIONS } from '@/data/plug-descriptions';
import { useIsMobile } from '@/hooks/useIsMobile';

interface HTMLAnimatedPlugProps {
  plugType: string; // e.g., 'A', 'B', 'C', etc.
  width?: number;
  height?: number;
}

const HTMLAnimatedPlug: React.FC<HTMLAnimatedPlugProps> = ({ 
  plugType, 
  width = 700, 
  height = 240 
}) => {
  const isMobile = useIsMobile();
  
  // Ensure plugType is lowercase for file paths
  const normalizedPlugType = plugType.toLowerCase();
  const animationPath = `/animations/type-${normalizedPlugType}-plug-animation${isMobile ? '-mobile' : ''}.html`;
  const imagePath = `/images/plugs/type-${normalizedPlugType}-electric-plug-and-socket.webp`;
  
  // Get plug description data
  const plugInfo = PLUG_DESCRIPTIONS[normalizedPlugType];
  
  return (
    <div className="w-full">
      {/* Plug Description Section */}
      {plugInfo && (
        <div className="mb-6 prose prose-gray max-w-none">
          <h3 className="text-xl font-bold mb-3">{plugInfo.name}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {plugInfo.description}
          </p>
        </div>
      )}
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
        {isMobile ? (
          // Mobile Layout: Image above animation (vertical stack)
          <div className="flex flex-col items-center gap-4">
          {/* Plug Image on top for mobile - clickable */}
          <Link 
            href={`/plug-type/type-${normalizedPlugType}`}
            className="flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
            title={`Learn more about Type ${plugType} plugs`}
          >
            <Image
              src={imagePath}
              alt={plugInfo?.photoAlt || `Type ${plugType} Plug and Socket`}
              width={200}
              height={200}
              className="rounded-lg"
              style={{ objectFit: 'contain' }}
            />
          </Link>
          
          {/* Animation below image for mobile - using mobile-optimized animation */}
          <div className="w-full flex justify-center">
            <iframe
              src={animationPath}
              width="100%"
              height={200}
              className="border-0 rounded-lg overflow-hidden w-full max-w-md"
              style={{ 
                backgroundColor: '#f7f5f2',
                minHeight: '200px'
              }}
              title={plugInfo?.animationAlt || `Type ${plugType} Plug Animation`}
              loading="eager"
            />
          </div>
          
          {/* Technical Specs for Mobile */}
          {plugInfo && (
            <div className="w-full bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-sm mb-3">Technical Specifications</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400">Pins</span>
                  <span className="font-medium">{plugInfo.technicalSpecs.pins}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400">Voltage</span>
                  <span className="font-medium">{plugInfo.technicalSpecs.voltage}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400">Current</span>
                  <span className="font-medium">{plugInfo.technicalSpecs.current}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400">Grounding</span>
                  <span className="font-medium">{plugInfo.technicalSpecs.grounding ? 'Yes' : 'No'}</span>
                </div>
                {plugInfo.technicalSpecs.pinDiameter && (
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400">Pin Size</span>
                    <span className="font-medium">{plugInfo.technicalSpecs.pinDiameter}</span>
                  </div>
                )}
                {plugInfo.technicalSpecs.pinSpacing && (
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400">Spacing</span>
                    <span className="font-medium">{plugInfo.technicalSpecs.pinSpacing}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        ) : (
          // Desktop Layout: Image on left, animation on right (horizontal)
          <div className="flex items-center justify-center gap-4">
          {/* Plug Image on the left - clickable */}
          <Link 
            href={`/plug-type/type-${normalizedPlugType}`}
            className="flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
            title={`Learn more about Type ${plugType} plugs`}
          >
            <Image
              src={imagePath}
              alt={plugInfo?.photoAlt || `Type ${plugType} Plug and Socket`}
              width={150}
              height={150}
              className="rounded-lg"
              style={{ objectFit: 'contain' }}
            />
          </Link>
          
          {/* Animation on the right - using desktop animation */}
          <div className="flex-grow flex justify-center">
            <iframe
              src={animationPath}
              width={width}
              height={height}
              className="border-0 rounded-lg overflow-hidden"
              style={{ 
                maxWidth: '100%',
                backgroundColor: '#f7f5f2'
              }}
              title={plugInfo?.animationAlt || `Type ${plugType} Plug Animation`}
              loading="eager"
            />
          </div>
        </div>
        )}
      </div>
      
      {/* Common Names / Also Known As */}
      {plugInfo && plugInfo.commonNames.length > 0 && (
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <strong>Also known as:</strong> {plugInfo.commonNames.join(', ')}
        </div>
      )}
    </div>
  );
};

export default HTMLAnimatedPlug;
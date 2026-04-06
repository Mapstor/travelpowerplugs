'use client';

import React from 'react';
import { TypeAAnimated, TypeBAnimated, TypeCAnimated } from './animated';

interface AnimatedPlugDisplayProps {
  plugTypes: string[];
  width?: number;
  height?: number;
  loop?: boolean;
}

const AnimatedPlugDisplay: React.FC<AnimatedPlugDisplayProps> = ({ 
  plugTypes, 
  width = 500, 
  height = 300,
  loop = false 
}) => {
  // Map plug type to component
  const getPlugComponent = (plugType: string) => {
    switch (plugType) {
      case 'A':
        return <TypeAAnimated width={1020} height={460} animate={true} loop={loop} />;
      case 'B':
        return <TypeBAnimated width={width} height={height} animate={true} loop={loop} />;
      case 'C':
        return <TypeCAnimated width={1020} height={460} animate={true} loop={loop} />;
      // TODO: Add cases for D through O as we create them
      default:
        // Fallback to simple display for now
        return (
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="text-2xl font-bold text-gray-700 mb-2">Type {plugType}</div>
            <div className="text-gray-500">Animation coming soon</div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-4">
      {plugTypes.map((plugType) => (
        <div key={plugType} className="bg-white rounded-xl shadow-lg">
          <div className="flex justify-center">
            {getPlugComponent(plugType)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedPlugDisplay;
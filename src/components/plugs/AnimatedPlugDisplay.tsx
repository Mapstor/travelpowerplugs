'use client';

import React from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

interface AnimatedPlugDisplayProps {
  plugTypes: string[];
  width?: number;
  height?: number;
  loop?: boolean;
}

const AnimatedPlugDisplay: React.FC<AnimatedPlugDisplayProps> = ({ 
  plugTypes, 
  width = 700, 
  height = 200,
  loop = false 
}) => {
  const isMobile = useIsMobile();
  
  const getPlugComponent = (plugType: string) => {
    const plugTypeLower = plugType.toLowerCase();
    const animationSrc = `/animations/type-${plugTypeLower}-plug-animation${isMobile ? '-mobile' : ''}.html`;
    
    return (
      <div className={`w-full ${isMobile ? 'max-w-[400px]' : 'max-w-[700px]'} h-[200px] bg-gray-50 rounded-lg overflow-hidden border border-gray-200`}>
        <iframe
          src={animationSrc}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          loading={isMobile ? 'eager' : 'lazy'}
          title={`Type ${plugType.toUpperCase()} Plug Animation${isMobile ? ' - Mobile' : ''}`}
          className="w-full h-full"
        />
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {plugTypes.map((plugType) => (
        <div key={plugType} className="bg-white rounded-xl shadow-sm">
          <div className="flex justify-center p-4">
            {getPlugComponent(plugType)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedPlugDisplay;
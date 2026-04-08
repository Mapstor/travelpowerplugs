'use client';

import React from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

interface PlugAnimationProps {
  plugType: string;
  width?: number;
  height?: number;
}

const PlugAnimation: React.FC<PlugAnimationProps> = ({ 
  plugType, 
  width = 420, // 40% smaller (was 700)
  height = 168 // 40% smaller (was 280)
}) => {
  const isMobile = useIsMobile();
  // Use iframe with HTML animations for all plug types
  const animationSrc = `/animations/type-${plugType.toLowerCase()}-plug-animation${isMobile ? '-mobile' : ''}.html`;
  
  return (
    <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm border border-gray-200">
      {/* Plug Photo on Left */}
      <div className="flex-shrink-0">
        <img
          src={`/images/plugs/type-${plugType.toLowerCase()}-electric-plug-and-socket.svg`}
          alt={`Type ${plugType} plug`}
          className="w-20 h-20"
        />
        <p className="text-center mt-2 text-sm font-medium text-gray-700">Type {plugType}</p>
      </div>
      
      {/* Animation on Right */}
      <div className="flex-1">
        <iframe
          src={animationSrc}
          width="100%"
          height={height}
          frameBorder="0"
          title={`Type ${plugType} Plug Animation${isMobile ? ' - Mobile' : ''}`}
          className="rounded-lg"
          style={{
            border: 'none',
            background: 'transparent',
            display: 'block',
            maxWidth: width,
            ...((!isMobile) && {
              transform: 'scale(0.6)',
              transformOrigin: 'top left',
              width: `${100 / 0.6}%`,
              height: `${height / 0.6}px`
            })
          }}
        />
      </div>
    </div>
  );
};

export default PlugAnimation;
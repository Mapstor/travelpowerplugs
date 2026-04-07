'use client';

import React from 'react';
import Image from 'next/image';

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
  // Ensure plugType is lowercase for file paths
  const normalizedPlugType = plugType.toLowerCase();
  const animationPath = `/animations/type-${normalizedPlugType}-plug-animation.html`;
  const imagePath = `/images/plugs/type-${normalizedPlugType}-electric-plug-and-socket.webp`;
  
  return (
    <div className="w-full flex items-center justify-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-4">
      {/* Plug Image on the left */}
      <div className="flex-shrink-0">
        <Image
          src={imagePath}
          alt={`Type ${plugType} Plug and Socket`}
          width={150}
          height={150}
          className="rounded-lg"
          style={{ objectFit: 'contain' }}
        />
      </div>
      
      {/* Animation on the right */}
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
          title={`Type ${plugType} Plug Animation`}
          loading="eager"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};

export default HTMLAnimatedPlug;
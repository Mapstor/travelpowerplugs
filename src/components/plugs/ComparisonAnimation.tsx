'use client';

import React from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

interface ComparisonAnimationProps {
  plugType: string;
  title: string;
}

const ComparisonAnimation: React.FC<ComparisonAnimationProps> = ({ plugType, title }) => {
  const isMobile = useIsMobile();
  const plugTypeLower = plugType.toLowerCase();
  const animationSrc = `/animations/type-${plugTypeLower}-plug-animation${isMobile ? '-mobile' : ''}.html`;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      {title && <h3 className="text-lg font-semibold p-3 bg-gray-50 border-b">{title}</h3>}
      
      <div style={{ height: isMobile ? '200px' : '220px' }}>
        <iframe
          src={animationSrc}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title={`Type ${plugType.toUpperCase()} Plug Animation${isMobile ? ' - Mobile' : ''}`}
          loading={isMobile ? 'eager' : 'lazy'}
        />
      </div>
    </div>
  );
};

export default ComparisonAnimation;
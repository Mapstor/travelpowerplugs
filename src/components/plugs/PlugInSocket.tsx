'use client';

import React, { useState, useEffect } from 'react';
import { PlugType } from '@/data/countries';
import { COMPATIBILITY_MATRIX } from '@/data/plugTypes';
import TypeA from './TypeA';
import TypeB from './TypeB';
import TypeC from './TypeC';
import TypeD from './TypeD';
import TypeE from './TypeE';
import TypeF from './TypeF';
import TypeG from './TypeG';
import TypeH from './TypeH';
import TypeI from './TypeI';
import TypeJ from './TypeJ';
import TypeK from './TypeK';
import TypeL from './TypeL';
import TypeM from './TypeM';
import TypeN from './TypeN';
import TypeO from './TypeO';

interface PlugInSocketProps {
  plugType: PlugType;
  socketTypes: PlugType[];
  animated?: boolean;
  size?: number;
}

const getPlugComponent = (type: PlugType) => {
  const components = {
    'A': TypeA,
    'B': TypeB,
    'C': TypeC,
    'D': TypeD,
    'E': TypeE,
    'F': TypeF,
    'G': TypeG,
    'H': TypeH,
    'I': TypeI,
    'J': TypeJ,
    'K': TypeK,
    'L': TypeL,
    'M': TypeM,
    'N': TypeN,
    'O': TypeO,
  };
  return components[type];
};

const PlugInSocket: React.FC<PlugInSocketProps> = ({ 
  plugType, 
  socketTypes, 
  animated = true,
  size = 120 
}) => {
  const [showResult, setShowResult] = useState(false);
  const [plugDescended, setPlugDescended] = useState(false);
  
  const primarySocket = socketTypes[0];
  const isCompatible = socketTypes.some(socketType => {
    const compatibility = COMPATIBILITY_MATRIX[plugType]?.[socketType];
    return compatibility === 'full' || compatibility === 'partial';
  });
  
  const PlugComponent = getPlugComponent(plugType);
  const SocketComponent = getPlugComponent(primarySocket);
  
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setPlugDescended(true);
        setTimeout(() => {
          setShowResult(true);
        }, 400);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setShowResult(true);
    }
  }, [animated]);
  
  if (!PlugComponent || !SocketComponent) {
    return null;
  }
  
  return (
    <div className="relative inline-block">
      <div className="relative">
        {/* Socket (bottom layer) */}
        <div className="relative">
          <SocketComponent
            size={size}
            variant="socket"
            animated={false}
          />
        </div>
        
        {/* Plug (top layer) */}
        <div 
          className={`absolute top-0 left-0 transition-transform duration-400 ease-out ${
            animated ? (plugDescended ? 'translate-y-0' : '-translate-y-10') : ''
          }`}
          style={{
            transform: animated && !plugDescended ? 'translateY(-40px)' : 'translateY(0)'
          }}
        >
          <PlugComponent
            size={size}
            variant="plug"
            animated={false}
            className="opacity-90"
          />
        </div>
        
        {/* Result indicator */}
        {showResult && (
          <div className="absolute top-2 right-2">
            {isCompatible ? (
              <div className="bg-green-500 text-white rounded-full p-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path 
                    d="M7 10l2 2 4-4" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : (
              <div className="bg-red-500 text-white rounded-full p-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path 
                    d="M6 6l8 8M14 6l-8 8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Labels */}
      <div className="text-center mt-2 text-sm">
        <span className="font-medium">Plug {plugType}</span>
        {' → '}
        <span className="font-medium">Socket {socketTypes.join(', ')}</span>
      </div>
    </div>
  );
};

export default PlugInSocket;
'use client';

import React from 'react';
import { PlugProps } from './types';

const TypeF: React.FC<PlugProps> = ({ 
  size = 120, 
  variant = 'plug', 
  animated = false,
  showLabel = false,
  className = ''
}) => {
  const height = variant === 'plug' ? 180 : 140;
  const animationClass = animated ? 'plug-animated' : '';
  
  return (
    <div className={className}>
      <svg
        width={size}
        height={(height * size) / 120}
        viewBox={`0 0 120 ${height}`}
        role="img"
        aria-label="Type F Schuko plug"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          :root {
            --plug-body: #f5f3ef;
            --plug-border: #888;
            --socket-hole: #222;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --plug-body: #2a2a2a;
              --plug-border: #555;
              --socket-hole: #000;
            }
          }
          .plug-animated {
            animation: plugDescend 0.4s ease-out forwards;
          }
          @keyframes plugDescend {
            from { transform: translateY(-40px); }
            to { transform: translateY(0); }
          }
        `}</style>
        
        <g className={animationClass}>
          {variant === 'plug' ? (
            <>
              {/* Plug body */}
              <rect
                x="20"
                y="60"
                width="80"
                height="100"
                rx="8"
                fill="var(--plug-body)"
                stroke="var(--plug-border)"
                strokeWidth="2"
              />
              
              {/* Left round pin */}
              <circle
                cx="42"
                cy="35"
                r="3"
                fill="#888"
                stroke="#666"
                strokeWidth="1"
              />
              <rect
                x="40"
                y="20"
                width="4"
                height="45"
                fill="#888"
                stroke="#666"
                strokeWidth="1"
              />
              
              {/* Right round pin */}
              <circle
                cx="78"
                cy="35"
                r="3"
                fill="#888"
                stroke="#666"
                strokeWidth="1"
              />
              <rect
                x="76"
                y="20"
                width="4"
                height="45"
                fill="#888"
                stroke="#666"
                strokeWidth="1"
              />
              
              {/* Left earth clip */}
              <rect
                x="15"
                y="85"
                width="12"
                height="30"
                rx="2"
                fill="#6a6a6a"
                stroke="#555"
                strokeWidth="1"
              />
              
              {/* Right earth clip */}
              <rect
                x="93"
                y="85"
                width="12"
                height="30"
                rx="2"
                fill="#6a6a6a"
                stroke="#555"
                strokeWidth="1"
              />
            </>
          ) : (
            <>
              {/* Socket face */}
              <rect
                x="10"
                y="20"
                width="100"
                height="100"
                rx="8"
                fill="var(--plug-body)"
                stroke="var(--plug-border)"
                strokeWidth="2"
              />
              
              {/* Left round hole */}
              <circle
                cx="42"
                cy="70"
                r="5"
                fill="var(--socket-hole)"
              />
              
              {/* Right round hole */}
              <circle
                cx="78"
                cy="70"
                r="5"
                fill="var(--socket-hole)"
              />
              
              {/* Left earth contact */}
              <rect
                x="10"
                y="60"
                width="8"
                height="20"
                fill="#6a6a6a"
              />
              
              {/* Right earth contact */}
              <rect
                x="102"
                y="60"
                width="8"
                height="20"
                fill="#6a6a6a"
              />
            </>
          )}
        </g>
      </svg>
      
      {showLabel && (
        <div className="text-center mt-2 text-sm font-medium">Type F</div>
      )}
    </div>
  );
};

export default TypeF;
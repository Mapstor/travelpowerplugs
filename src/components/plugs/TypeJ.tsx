'use client';

import React from 'react';
import { PlugProps } from './types';

const TypeJ: React.FC<PlugProps> = ({ 
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
        aria-label="Type J Swiss plug"
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
                x="25"
                y="60"
                width="70"
                height="100"
                rx="8"
                fill="var(--plug-body)"
                stroke="var(--plug-border)"
                strokeWidth="2"
              />
              
              {/* Left round pin */}
              <circle
                cx="42"
                cy="40"
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
                cy="40"
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
              
              {/* Center ground pin (offset) */}
              <circle
                cx="60"
                cy="30"
                r="3"
                fill="#6a6a6a"
                stroke="#555"
                strokeWidth="1"
              />
              <rect
                x="58"
                y="15"
                width="4"
                height="45"
                fill="#6a6a6a"
                stroke="#555"
                strokeWidth="1"
              />
            </>
          ) : (
            <>
              {/* Socket face (hexagonal outline typical for Swiss) */}
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
                cy="75"
                r="5"
                fill="var(--socket-hole)"
              />
              
              {/* Right round hole */}
              <circle
                cx="78"
                cy="75"
                r="5"
                fill="var(--socket-hole)"
              />
              
              {/* Center ground hole */}
              <circle
                cx="60"
                cy="55"
                r="5"
                fill="var(--socket-hole)"
              />
            </>
          )}
        </g>
      </svg>
      
      {showLabel && (
        <div className="text-center mt-2 text-sm font-medium">Type J</div>
      )}
    </div>
  );
};

export default TypeJ;
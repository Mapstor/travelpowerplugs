'use client';

import React from 'react';
import { PlugProps } from './types';

const TypeD: React.FC<PlugProps> = ({ 
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
        aria-label="Type D plug"
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
              
              {/* Top ground pin (larger) */}
              <circle
                cx="60"
                cy="25"
                r="4"
                fill="#6a6a6a"
                stroke="#555"
                strokeWidth="1"
              />
              <rect
                x="57"
                y="15"
                width="6"
                height="50"
                fill="#6a6a6a"
                stroke="#555"
                strokeWidth="1"
              />
              
              {/* Bottom left pin */}
              <circle
                cx="45"
                cy="45"
                r="3"
                fill="#888"
                stroke="#666"
                strokeWidth="1"
              />
              <rect
                x="43"
                y="25"
                width="4"
                height="40"
                fill="#888"
                stroke="#666"
                strokeWidth="1"
              />
              
              {/* Bottom right pin */}
              <circle
                cx="75"
                cy="45"
                r="3"
                fill="#888"
                stroke="#666"
                strokeWidth="1"
              />
              <rect
                x="73"
                y="25"
                width="4"
                height="40"
                fill="#888"
                stroke="#666"
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
              
              {/* Top ground hole */}
              <circle
                cx="60"
                cy="50"
                r="6"
                fill="var(--socket-hole)"
              />
              
              {/* Bottom left hole */}
              <circle
                cx="45"
                cy="80"
                r="5"
                fill="var(--socket-hole)"
              />
              
              {/* Bottom right hole */}
              <circle
                cx="75"
                cy="80"
                r="5"
                fill="var(--socket-hole)"
              />
            </>
          )}
        </g>
      </svg>
      
      {showLabel && (
        <div className="text-center mt-2 text-sm font-medium">Type D</div>
      )}
    </div>
  );
};

export default TypeD;
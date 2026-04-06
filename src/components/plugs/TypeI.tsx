'use client';

import React from 'react';
import { PlugProps } from './types';

const TypeI: React.FC<PlugProps> = ({ 
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
        aria-label="Type I Australian plug"
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
              
              {/* Left angled flat blade */}
              <rect
                x="40"
                y="20"
                width="6"
                height="45"
                transform="rotate(-30 43 42.5)"
                fill="#888"
                stroke="#666"
                strokeWidth="1"
              />
              
              {/* Right angled flat blade */}
              <rect
                x="74"
                y="20"
                width="6"
                height="45"
                transform="rotate(30 77 42.5)"
                fill="#888"
                stroke="#666"
                strokeWidth="1"
              />
              
              {/* Ground pin (vertical) */}
              <rect
                x="57"
                y="15"
                width="6"
                height="50"
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
              
              {/* Left angled slot */}
              <rect
                x="40"
                y="60"
                width="6"
                height="25"
                transform="rotate(-30 43 72.5)"
                fill="var(--socket-hole)"
              />
              
              {/* Right angled slot */}
              <rect
                x="74"
                y="60"
                width="6"
                height="25"
                transform="rotate(30 77 72.5)"
                fill="var(--socket-hole)"
              />
              
              {/* Ground slot */}
              <rect
                x="57"
                y="85"
                width="6"
                height="20"
                fill="var(--socket-hole)"
              />
            </>
          )}
        </g>
      </svg>
      
      {showLabel && (
        <div className="text-center mt-2 text-sm font-medium">Type I</div>
      )}
    </div>
  );
};

export default TypeI;
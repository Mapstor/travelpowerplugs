'use client';

import React from 'react';
import { PlugProps } from './types';

const TypeK: React.FC<PlugProps> = ({ 
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
        aria-label="Type K Danish plug"
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
              
              {/* Bottom horseshoe ground pin */}
              <path
                d="M 50 25 Q 60 15, 70 25"
                stroke="#6a6a6a"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <rect
                x="48"
                y="20"
                width="4"
                height="45"
                fill="#6a6a6a"
                stroke="#555"
                strokeWidth="1"
              />
              <rect
                x="68"
                y="20"
                width="4"
                height="45"
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
              
              {/* Bottom horseshoe ground slot */}
              <path
                d="M 50 90 Q 60 95, 70 90"
                stroke="var(--socket-hole)"
                strokeWidth="6"
                fill="none"
              />
            </>
          )}
        </g>
      </svg>
      
      {showLabel && (
        <div className="text-center mt-2 text-sm font-medium">Type K</div>
      )}
    </div>
  );
};

export default TypeK;
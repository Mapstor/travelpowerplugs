'use client';

import React, { useState, useEffect } from 'react';

interface TypeBAnimatedProps {
  width?: number;
  height?: number;
  animate?: boolean;
  loop?: boolean;
}

const TypeBAnimated: React.FC<TypeBAnimatedProps> = ({ 
  width = 500, 
  height = 300,
  animate = true,
  loop = false
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (animate && !hasAnimated) {
      setTimeout(() => {
        setIsAnimating(true);
        setHasAnimated(true);
      }, 500);
    }
  }, [animate, hasAnimated]);

  const handleClick = () => {
    if (!loop && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3500);
    }
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 300"
      className="cursor-pointer"
      onClick={handleClick}
    >
      <defs>
        {/* Gradients for 3D effect */}
        <linearGradient id="plugBodyGradientB" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="50%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>
        
        <linearGradient id="socketGradientB" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f5f5f5" />
          <stop offset="50%" stopColor="#e8e8e8" />
          <stop offset="100%" stopColor="#d8d8d8" />
        </linearGradient>

        <linearGradient id="prongGradientB" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e0e0e0" />
          <stop offset="50%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#d0d0d0" />
        </linearGradient>

        {/* Shadow filters */}
        <filter id="plugShadowB" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.2"/>
        </filter>

        <filter id="socketShadowB" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
        </filter>

        {/* Inner shadow for socket holes */}
        <filter id="innerShadowB">
          <feGaussianBlur stdDeviation="2"/>
          <feOffset dx="0" dy="1"/>
        </filter>
      </defs>

      {/* Socket on the right side */}
      <g id="socket-b">
        {/* Socket plate */}
        <rect 
          x="320" 
          y="75" 
          width="150" 
          height="150" 
          rx="15" 
          fill="url(#socketGradientB)" 
          stroke="#bbb" 
          strokeWidth="2"
          filter="url(#socketShadowB)"
        />
        
        {/* Socket mounting screws */}
        <circle cx="345" cy="100" r="4" fill="#999">
          <animate
            attributeName="fill"
            values="#999;#888;#999"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="445" cy="100" r="4" fill="#999">
          <animate
            attributeName="fill"
            values="#999;#888;#999"
            dur="4s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="345" cy="200" r="4" fill="#999">
          <animate
            attributeName="fill"
            values="#999;#888;#999"
            dur="4s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="445" cy="200" r="4" fill="#999">
          <animate
            attributeName="fill"
            values="#999;#888;#999"
            dur="4s"
            begin="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Socket slots for Type B (two vertical slots + ground) */}
        <g id="socket-slots-b">
          {/* Left slot */}
          <rect 
            x="375" 
            y="120" 
            width="8" 
            height="35" 
            rx="4" 
            fill="#2a2a2a"
            opacity="0.8"
          />
          <rect 
            x="376" 
            y="121" 
            width="6" 
            height="33" 
            rx="3" 
            fill="#1a1a1a"
            filter="url(#innerShadowB)"
          />
          
          {/* Right slot */}
          <rect 
            x="407" 
            y="120" 
            width="8" 
            height="35" 
            rx="4" 
            fill="#2a2a2a"
            opacity="0.8"
          />
          <rect 
            x="408" 
            y="121" 
            width="6" 
            height="33" 
            rx="3" 
            fill="#1a1a1a"
            filter="url(#innerShadowB)"
          />
          
          {/* Ground pin hole (D-shaped) */}
          <path 
            d="M 387 170 Q 395 165 403 170 L 403 180 Q 395 185 387 180 Z" 
            fill="#2a2a2a"
            opacity="0.8"
          />
          <path 
            d="M 388 171 Q 395 166 402 171 L 402 179 Q 395 184 388 179 Z" 
            fill="#1a1a1a"
            filter="url(#innerShadowB)"
          />
        </g>

        {/* Socket label */}
        <text x="395" y="215" fontSize="10" fill="#888" textAnchor="middle" fontFamily="monospace">
          TYPE B
        </text>
      </g>

      {/* Plug on the left side - initially facing the user */}
      <g 
        id="plug-b" 
        className={isAnimating || (loop && animate) ? 'plug-animate-b' : ''}
      >
        {/* Plug body */}
        <rect 
          x="80" 
          y="100" 
          width="100" 
          height="100" 
          rx="12" 
          fill="url(#plugBodyGradientB)"
          filter="url(#plugShadowB)"
        />
        
        {/* Plug face details */}
        <rect 
          x="90" 
          y="110" 
          width="80" 
          height="80" 
          rx="8" 
          fill="#2a2a2a"
          opacity="0.3"
        />
        
        {/* Prongs (facing the user) */}
        <g id="prongs-b">
          {/* Left Prong */}
          <rect 
            x="105" 
            y="125" 
            width="8" 
            height="35" 
            rx="2"
            fill="url(#prongGradientB)"
            stroke="#aaa"
            strokeWidth="0.5"
          />
          
          {/* Right Prong */}
          <rect 
            x="147" 
            y="125" 
            width="8" 
            height="35" 
            rx="2"
            fill="url(#prongGradientB)"
            stroke="#aaa"
            strokeWidth="0.5"
          />
          
          {/* Ground Prong (round, longer) */}
          <circle 
            cx="130" 
            cy="170" 
            r="5"
            fill="url(#prongGradientB)"
            stroke="#aaa"
            strokeWidth="0.5"
          />
          <rect 
            x="127" 
            y="165" 
            width="6" 
            height="15" 
            fill="url(#prongGradientB)"
            stroke="#aaa"
            strokeWidth="0.5"
          />
          
          {/* Prong tips (darker) */}
          <rect x="106" y="155" width="6" height="4" fill="#999" />
          <rect x="148" y="155" width="6" height="4" fill="#999" />
          <rect x="128" y="176" width="4" height="3" fill="#999" />
        </g>
        
        {/* Plug brand/label */}
        <text x="130" y="145" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold" opacity="0.7">
          125V
        </text>
        <text x="130" y="195" fontSize="8" fill="#888" textAnchor="middle" fontFamily="monospace">
          TYPE B
        </text>
        
        {/* Power cord */}
        <path
          d="M 80 150 Q 50 150 30 150"
          stroke="#333"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 80 150 Q 50 150 30 150"
          stroke="#222"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Ground wire indicator */}
      <g opacity="0.7">
        <path
          d="M 30 150 L 30 165"
          stroke="#4a4"
          strokeWidth="2"
          strokeDasharray="3,2"
        />
        <circle cx="30" cy="170" r="3" fill="#4a4" />
        <text x="45" y="173" fontSize="9" fill="#4a4" fontFamily="monospace">
          GROUND
        </text>
      </g>

      {/* Instruction Text */}
      <text x="250" y="270" fontSize="14" fill="#666" textAnchor="middle">
        {isAnimating ? 'Connecting grounded plug...' : 'Click to see grounded plug connection'}
      </text>

      {/* Animation Styles */}
      <style>{`
        @keyframes plugConnectB {
          0% {
            transform: translate(0, 0) rotateY(0deg);
          }
          25% {
            transform: translate(0, -30px) rotateY(0deg);
          }
          50% {
            transform: translate(130px, -30px) rotateY(180deg);
          }
          75% {
            transform: translate(200px, -30px) rotateY(180deg);
          }
          100% {
            transform: translate(200px, 0) rotateY(180deg);
          }
        }
        
        .plug-animate-b {
          animation: plugConnectB 3s ease-in-out ${loop ? 'infinite' : 'forwards'};
          transform-origin: center center;
          transform-style: preserve-3d;
        }
      `}</style>
    </svg>
  );
};

export default TypeBAnimated;
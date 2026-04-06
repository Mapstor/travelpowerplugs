'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TypeCAnimatedProps {
  width?: number;
  height?: number;
  animate?: boolean;
  loop?: boolean;
}

const TypeCAnimated: React.FC<TypeCAnimatedProps> = ({ 
  width = 1020, 
  height = 460,
  animate = true,
  loop = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | null>(null);
  const [status, setStatus] = useState('Ready');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set up canvas resolution
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Dark mode detection
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const cl = (light: string, dark: string) => isDark ? dark : light;

    // Colors
    const colors = {
      bg: cl('#f4f2ec', '#1a1a18'),
      plate: cl('#d4d2ca', '#3c3b38'),
      plateStroke: cl('#aaa8a0', '#2a2928'),
      recess: cl('#bcbab2', '#2c2b28'),
      hole: cl('#252523', '#0c0c0a'),
      holeDeep: cl('#141412', '#060605'),
      plugBody: cl('#2a2a28', '#333'),
      plugTop: cl('#3a3a38', '#444'),
      pinChrome: cl('#a8a59c', '#b8b5ac'),
      pinHighlight: cl('rgba(215,213,205,0.7)', 'rgba(225,223,215,0.7)'),
      pinStroke: cl('rgba(90,88,80,1)', 'rgba(80,78,70,1)'),
      sleeve: cl('rgba(30,30,28,1)', 'rgba(50,50,48,1)'),
      text: cl('#4a4840', '#c0beb4'),
      dim: cl('#88857e', '#7a776e'),
      red: '#d44',
      greenBg: cl('#E1F5EE', '#085041'),
      greenText: cl('#085041', '#9FE1CB'),
    };

    // Geometry constants - adjusted for wider canvas
    const OX = 735, OY = 230; // Outlet center (moved right for wider canvas)
    const PLATE = 160;  // Slightly larger for better proportions
    const REC_R = 60;    // Slightly larger recess
    const HR = 9;        // Slightly larger holes
    const HSP = 38;      // Standard 19mm spacing (38px at 2x)
    const HL = { x: OX - HSP / 2, y: OY };
    const HRt = { x: OX + HSP / 2, y: OY };

    // Plug constants
    const PIN_CHROME = 32;
    const PIN_SLEEVE = 14;
    const PIN_TOTAL = 46;
    const PIN_R = 5.5;
    const PIN_START_SPREAD = 18;
    const BODY_NARROW = 32;
    const BODY_WIDE = 44;
    const BODY_LEN = 70;

    const PLUG_FACE_START = 80; // Start further left for more travel
    const PLUG_FACE_END = OX - PIN_TOTAL + 2;

    // Timing functions
    const DURATION = 7500;
    
    const easeInOut = (t: number) => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };
    
    const smoothstep = (t: number) => {
      return t * t * (3 - 2 * t);
    };

    const getPhase = (progress: number) => {
      if (progress < 0.10) return { frac: 0, phase: 'wait' };
      if (progress < 0.50) {
        const t = easeInOut((progress - 0.10) / 0.40);
        return { frac: t * 0.68, phase: 'approach' };
      }
      if (progress < 0.78) {
        const t = smoothstep((progress - 0.50) / 0.28);
        return { frac: 0.68 + t * 0.32, phase: 'insert' };
      }
      return { frac: 1, phase: 'done' };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // Drawing functions
    const drawBackground = () => {
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
    };

    const drawOutlet = () => {
      const s = PLATE / 2;
      
      // Wall plate - ensure it's perfectly square
      ctx.save();
      ctx.fillStyle = colors.plate;
      ctx.strokeStyle = colors.plateStroke;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(OX - s, OY - s, PLATE, PLATE, 10);
      ctx.fill();
      ctx.stroke();
      
      // Recess - ensure it's perfectly circular
      ctx.fillStyle = colors.recess;
      ctx.beginPath();
      ctx.arc(OX, OY, REC_R, 0, Math.PI * 2, false);
      ctx.fill();
      
      // Add recess inner shadow for depth
      ctx.strokeStyle = 'rgba(0,0,0,0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(OX, OY, REC_R - 1, 0, Math.PI * 2, false);
      ctx.stroke();
      
      // Socket holes - ensure they're perfectly circular
      [HL, HRt].forEach(hole => {
        // Outer hole
        ctx.fillStyle = colors.hole;
        ctx.beginPath();
        ctx.arc(hole.x, hole.y, HR, 0, Math.PI * 2, false);
        ctx.fill();
        
        // Inner hole (deeper)
        ctx.fillStyle = colors.holeDeep;
        ctx.beginPath();
        ctx.arc(hole.x, hole.y, HR - 2, 0, Math.PI * 2, false);
        ctx.fill();
      });
      
      // Screws - positioned symmetrically
      const screwOffset = 20;
      [[OX - s + screwOffset, OY - s + screwOffset], 
       [OX + s - screwOffset, OY - s + screwOffset],
       [OX - s + screwOffset, OY + s - screwOffset], 
       [OX + s - screwOffset, OY + s - screwOffset]].forEach(([x, y]) => {
        ctx.fillStyle = colors.dim;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2, false);
        ctx.fill();
      });
      
      ctx.restore();
    };

    const drawPin = (x: number, y: number, visibleLength: number, isFar: boolean) => {
      if (visibleLength <= 0) return;
      
      const opacity = isFar ? 0.82 : 1.0;
      ctx.globalAlpha = opacity;
      
      const chromeVis = Math.max(0, visibleLength - PIN_SLEEVE);
      const sleeveVis = Math.min(PIN_SLEEVE, visibleLength);
      
      // Chrome barrel
      if (chromeVis > 0) {
        // Main body
        ctx.fillStyle = colors.pinChrome;
        ctx.fillRect(x, y - PIN_R, chromeVis, PIN_R * 2);
        
        // Highlight strip
        ctx.fillStyle = colors.pinHighlight;
        ctx.fillRect(x, y - PIN_R, chromeVis, 3);
        
        // Rounded tip
        ctx.beginPath();
        ctx.arc(x + chromeVis, y, PIN_R, 0, Math.PI * 2);
        ctx.fillStyle = colors.pinChrome;
        ctx.fill();
      }
      
      // Insulation sleeve
      if (sleeveVis > 0) {
        ctx.fillStyle = colors.sleeve;
        ctx.fillRect(x - sleeveVis, y - PIN_R + 1, sleeveVis, PIN_R * 2 - 2);
      }
      
      ctx.globalAlpha = 1.0;
    };

    const drawPlug = (faceX: number, frac: number) => {
      // Calculate pin convergence
      const spread = lerp(PIN_START_SPREAD, 0, Math.min(frac / 0.68, 1));
      const nearPinY = OY + spread;
      const farPinY = OY - spread;
      
      // Calculate pin visibility
      const nearVis = Math.max(0, Math.min(PIN_TOTAL, HL.x - faceX));
      const farVis = Math.max(0, Math.min(PIN_TOTAL, HRt.x - faceX));
      
      // Draw cord
      ctx.strokeStyle = colors.plugBody;
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(20, OY);
      ctx.lineTo(faceX - BODY_LEN, OY);
      ctx.stroke();
      
      // Draw pins (far pin first)
      drawPin(faceX, farPinY, farVis, true);
      drawPin(faceX, nearPinY, nearVis, false);
      
      // Draw plug body (trapezoidal)
      ctx.fillStyle = colors.plugBody;
      ctx.beginPath();
      ctx.moveTo(faceX - BODY_LEN, OY - BODY_WIDE / 2);
      ctx.lineTo(faceX, OY - BODY_NARROW / 2);
      ctx.lineTo(faceX, OY + BODY_NARROW / 2);
      ctx.lineTo(faceX - BODY_LEN, OY + BODY_WIDE / 2);
      ctx.closePath();
      ctx.fill();
      
      // Add grip ridges
      ctx.strokeStyle = colors.dim;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 5; i++) {
        const x = faceX - BODY_LEN + 15 + i * 8;
        ctx.beginPath();
        ctx.moveTo(x, OY - BODY_WIDE / 2 + 5);
        ctx.lineTo(x, OY + BODY_WIDE / 2 - 5);
        ctx.stroke();
      }
    };

    const drawLabels = (phase: string, opacity: number) => {
      ctx.font = 'bold 18px -apple-system, sans-serif';
      ctx.fillStyle = colors.text;
      ctx.textAlign = 'center';
      
      // Title
      ctx.fillText('TYPE', width / 2 - 30, 40);
      ctx.fillStyle = colors.red;
      ctx.fillText('C', width / 2 + 15, 40);
      
      ctx.font = '12px -apple-system, sans-serif';
      ctx.fillStyle = colors.dim;
      
      if (phase === 'wait' || phase === 'approach') {
        ctx.textAlign = 'left';
        ctx.fillText('Europlug / CEE 7/16 · 2.5A', 80, 320);
        ctx.textAlign = 'right';
        ctx.fillText('Type C socket / 230V · 50Hz', width - 80, 320);
      }
      
      if (phase === 'done' && opacity > 0) {
        ctx.globalAlpha = opacity;
        ctx.textAlign = 'center';
        ctx.fillText('19mm spacing · 4mm ø pins', width / 2, 380);
        ctx.globalAlpha = 1;
      }
    };

    // Animation loop
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      
      const elapsed = timestamp - startTimeRef.current;
      const progress = (elapsed % DURATION) / DURATION;
      const { frac, phase } = getPhase(progress);
      
      // Update status
      if (phase === 'wait') setStatus('Ready');
      else if (phase === 'approach') setStatus('Approaching...');
      else if (phase === 'insert') setStatus('Inserting...');
      else if (phase === 'done') setStatus('Connected');
      
      // Calculate plug position
      const faceX = lerp(PLUG_FACE_START, PLUG_FACE_END, frac);
      
      // Draw scene
      drawBackground();
      drawOutlet();
      drawPlug(faceX, frac);
      
      const labelOpacity = phase === 'done' ? Math.min((progress - 0.78) / 0.1, 1) : 0;
      drawLabels(phase, labelOpacity);
      
      if (animate && (loop || elapsed < DURATION)) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (animate) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Draw static initial state
      drawBackground();
      drawOutlet();
      drawPlug(PLUG_FACE_START, 0);
      drawLabels('wait', 0);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [width, height, animate, loop]);

  const handleReplay = () => {
    startTimeRef.current = null;
    setStatus('Ready');
  };

  return (
    <div className="flex flex-col items-center">
      <canvas 
        ref={canvasRef} 
        width={width} 
        height={height}
        className="block max-w-full"
        style={{ width, height }}
      />
      <div className="flex items-center gap-4 mt-2">
        <button
          onClick={handleReplay}
          className="px-4 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Replay
        </button>
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
          status === 'Connected' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : status === 'Ready'
            ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
            : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
        }`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default TypeCAnimated;
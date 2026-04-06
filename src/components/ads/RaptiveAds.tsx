'use client';

import Script from 'next/script';

/**
 * Raptive Head Script - Loads Raptive ad library
 * Include this once in the layout when Raptive is configured
 * Raptive will automatically handle ad placement throughout the site
 */
export function RaptiveHead() {
  // Only load in production when Raptive ID is configured
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_RAPTIVE_ID) {
    return (
      <>
        <Script
          id="raptive-ads"
          src={`//cdn.raptive.com/js/${process.env.NEXT_PUBLIC_RAPTIVE_ID}.js`}
          strategy="lazyOnload"
          async
        />
        <Script
          id="raptive-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.raptive = window.raptive || {};
              window.raptive.cmd = window.raptive.cmd || [];
            `,
          }}
        />
      </>
    );
  }
  
  return null;
}

// Type for window with raptive
declare global {
  interface Window {
    raptive?: {
      cmd: Array<() => void>;
      display: (id: string) => void;
    };
  }
}
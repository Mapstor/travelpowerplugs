'use client';

import Script from 'next/script';

// Raptive will handle ad placement automatically
// This component just loads the Raptive script when configured
const RaptiveAd: React.FC = () => {
  // Only load in production when Raptive ID is configured
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_RAPTIVE_ID) {
    return (
      <Script
        id="raptive-ads"
        strategy="lazyOnload"
        src={`https://cdn.raptive.com/js/${process.env.NEXT_PUBLIC_RAPTIVE_ID}.js`}
        async
      />
    );
  }

  return null;
};

export default RaptiveAd;
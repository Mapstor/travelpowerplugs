#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const EXPECTED_REDIRECTS = [
  {
    source: '/albanian-plug-types',
    destination: '/albania-electric-plug-types'
  },
  {
    source: '/algeria-electrical-plug-type',
    destination: '/algeria-electric-plug-types'
  },
  {
    source: '/andorra-plug-types-electric-sockets-used-in-andorra-adapter',
    destination: '/andorra-electric-plug-types'
  },
  {
    source: '/armenia-electric-socket-types-do-you-need-to-pack-an-adapter',
    destination: '/armenia-electric-plug-types'
  },
  {
    source: '/austria-electric-power-plug-types-do-you-need-an-adapter',
    destination: '/austria-electric-plug-types'
  },
  {
    source: '/azerbaijan-electric-socket-types-will-you-need-an-adapter',
    destination: '/azerbaijan-electric-plug-types'
  },
  {
    source: '/bahamas-electric-socket-types-will-you-need-an-adapter',
    destination: '/bahamas-electric-plug-types'
  }
];

console.log('Verifying redirects in vercel.json...\n');

try {
  const vercelConfigPath = path.join(process.cwd(), 'vercel.json');
  const vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf8'));
  
  let missingCount = 0;
  let foundCount = 0;
  
  EXPECTED_REDIRECTS.forEach((expectedRedirect) => {
    const found = vercelConfig.redirects?.find(
      r => r.source === expectedRedirect.source && 
           r.destination === expectedRedirect.destination &&
           r.permanent === true
    );
    
    if (!found) {
      console.error(`❌ Missing redirect: ${expectedRedirect.source} → ${expectedRedirect.destination}`);
      missingCount++;
    } else {
      console.log(`✅ Found redirect: ${expectedRedirect.source} → ${expectedRedirect.destination}`);
      foundCount++;
    }
  });
  
  console.log('\n=== Redirect Verification Results ===');
  console.log(`✅ Found: ${foundCount}/7 redirects`);
  console.log(`❌ Missing: ${missingCount} redirects`);
  
  if (missingCount === 0) {
    console.log('\n🎉 SUCCESS! All 7 redirects are properly configured.');
    process.exit(0);
  } else {
    console.error('\n⚠️  WARNING! Some redirects are missing. Old URLs will break.');
    process.exit(1);
  }
  
} catch (error) {
  console.error('❌ Error reading vercel.json:', error.message);
  process.exit(1);
}
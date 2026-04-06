#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const countriesDir = '/Users/markovisic/Desktop/travelpowerplugs/src/data/countries';

// List of files that are known to have issues
const problematicFiles = [
  'austria.ts', 'bahrain.ts', 'belgium.ts', 'bulgaria.ts', 'croatia.ts', 
  'czech-republic.ts', 'denmark.ts', 'eritrea.ts', 'finland.ts', 'hungary.ts',
  'iceland.ts', 'kuwait.ts', 'libya.ts', 'norway.ts', 'poland.ts', 'romania.ts',
  'serbia.ts', 'slovenia.ts', 'sweden.ts', 'tunisia.ts', 'mexico.ts', 
  'united-kingdom.ts', 'usa.ts', 'brazil.ts'
];

function fixFile(filePath) {
  const fileName = path.basename(filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  console.log(`Processing ${fileName}...`);
  
  // Fix unquoted strings in specific contexts
  // 1. travelContext field
  const travelContextRegex = /travelContext:\s*\n?\s*'([^']*(?:\\'[^']*)*)'/gs;
  content = content.replace(travelContextRegex, (match, inner) => {
    const fixed = inner.replace(/(?<!\\)'/g, "\\'");
    if (fixed !== inner) {
      modified = true;
      console.log(`  Fixed travelContext apostrophes`);
    }
    return `travelContext:\n    '${fixed}'`;
  });

  // 2. For non-quoted travelContext (like Austria)
  const unquotedTravelContextRegex = /travelContext:\s*\n?\s*([^'"][^,\n}]*)/g;
  content = content.replace(unquotedTravelContextRegex, (match, value) => {
    if (!value.trim().startsWith("'") && !value.trim().startsWith('"')) {
      const cleanValue = value.trim().replace(/,$/, '');
      const escapedValue = cleanValue.replace(/'/g, "\\'");
      modified = true;
      console.log(`  Fixed unquoted travelContext: ${cleanValue.substring(0, 50)}...`);
      return `travelContext:\n    '${escapedValue}',\n`;
    }
    return match;
  });

  // 3. Fix arrays of strings with apostrophes
  content = content.replace(/\[\s*\n?\s*'([^']*(?:\\'[^']*)*)'/gs, (match, inner) => {
    const fixed = inner.replace(/(?<!\\)'/g, "\\'");
    if (fixed !== inner) {
      modified = true;
      console.log(`  Fixed array string apostrophes`);
    }
    return `[\n    '${fixed}'`;
  });

  // 4. Fix notes fields and other string fields
  content = content.replace(/notes:\s*\n?\s*'([^']*(?:\\'[^']*)*)'/gs, (match, inner) => {
    const fixed = inner.replace(/(?<!\\)'/g, "\\'");
    if (fixed !== inner) {
      modified = true;
      console.log(`  Fixed notes apostrophes`);
    }
    return `notes:\n        '${fixed}'`;
  });

  // 5. Fix export naming issues
  const exportPattern = /export\s+default\s+(\w+);?$/m;
  const exportMatch = content.match(exportPattern);
  
  if (exportMatch) {
    const currentExportName = exportMatch[1];
    const expectedName = path.basename(fileName, '.ts').replace(/-/g, '_');
    
    if (currentExportName !== expectedName) {
      // Find and replace the variable declaration
      const varPatterns = [
        new RegExp(`const\\s+${currentExportName}\\s*:\\s*CountryPlugData\\s*=`, 'm'),
        new RegExp(`const\\s+${currentExportName}Data\\s*:\\s*CountryPlugData\\s*=`, 'm'),
      ];
      
      for (const varPattern of varPatterns) {
        if (varPattern.test(content)) {
          content = content.replace(varPattern, `const ${expectedName}: CountryPlugData =`);
          content = content.replace(exportPattern, `export default ${expectedName};`);
          modified = true;
          console.log(`  Fixed export: ${currentExportName} → ${expectedName}`);
          break;
        }
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed: ${fileName}`);
    return true;
  }

  return false;
}

// Process all problematic files
let fixedCount = 0;

problematicFiles.forEach(fileName => {
  const filePath = path.join(countriesDir, fileName);
  if (fs.existsSync(filePath)) {
    try {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`✗ Error fixing ${fileName}:`, error.message);
    }
  } else {
    console.log(`⚠ File not found: ${fileName}`);
  }
});

console.log(`\nFixed ${fixedCount} files`);
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const countriesDir = '/Users/markovisic/Desktop/travelpowerplugs/src/data/countries';

// Get all TypeScript files
const files = fs.readdirSync(countriesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`Processing ${files.length} files...`);

let totalFixed = 0;

function processFile(fileName) {
  const filePath = path.join(countriesDir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  console.log(`\nProcessing ${fileName}:`);
  
  // 1. Fix apostrophes within single-quoted strings
  // This regex captures single-quoted strings and fixes unescaped apostrophes within them
  let apostropheCount = 0;
  content = content.replace(/'([^']*)'/g, (match, inner) => {
    let fixed = inner.replace(/(?<!\\)'/g, "\\'");
    if (fixed !== inner) {
      apostropheCount++;
      modified = true;
    }
    return `'${fixed}'`;
  });
  
  if (apostropheCount > 0) {
    console.log(`  Fixed ${apostropheCount} apostrophe issues`);
  }
  
  // 2. Fix unquoted/malformed string contexts (like bahrain.ts, kuwait.ts)
  // Look for lines that should be quoted strings but aren't
  const unquotedLines = content.match(/:\s*\n?\s*([^'"][^,\n}]*[a-zA-Z][^,\n}]*)\s*$/gm);
  if (unquotedLines) {
    content = content.replace(/:\s*\n?\s*([^'"][^,\n}]*[a-zA-Z][^,\n}]*)\s*$/gm, (match, value) => {
      if (!value.trim().startsWith('{') && !value.trim().startsWith('[')) {
        let cleanValue = value.trim().replace(/,$/, '');
        let escapedValue = cleanValue.replace(/'/g, "\\'");
        console.log(`  Fixed unquoted string: "${cleanValue.substring(0, 40)}..."`);
        modified = true;
        return `:\n    '${escapedValue}',\n`;
      }
      return match;
    });
  }
  
  // 3. Fix export names
  const expectedName = path.basename(fileName, '.ts').replace(/-/g, '_');
  const exportPattern = /export\s+default\s+(\w+);?$/m;
  const exportMatch = content.match(exportPattern);
  
  if (exportMatch) {
    const currentExportName = exportMatch[1];
    
    if (currentExportName !== expectedName) {
      // Try various patterns for the variable declaration
      const patterns = [
        new RegExp(`const\\s+${currentExportName}\\s*:\\s*CountryPlugData\\s*=`, 'm'),
        new RegExp(`const\\s+${currentExportName}Data\\s*:\\s*CountryPlugData\\s*=`, 'm'),
        new RegExp(`const\\s+data\\s*:\\s*CountryPlugData\\s*=`, 'm'),
      ];
      
      for (const pattern of patterns) {
        if (pattern.test(content)) {
          content = content.replace(pattern, `const ${expectedName}: CountryPlugData =`);
          content = content.replace(exportPattern, `export default ${expectedName};`);
          console.log(`  Fixed export: ${currentExportName} → ${expectedName}`);
          modified = true;
          break;
        }
      }
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Updated ${fileName}`);
    return true;
  } else {
    console.log(`  - No changes needed for ${fileName}`);
    return false;
  }
}

// Process all files
files.forEach(fileName => {
  try {
    if (processFile(fileName)) {
      totalFixed++;
    }
  } catch (error) {
    console.error(`✗ Error processing ${fileName}:`, error.message);
  }
});

console.log(`\n=== SUMMARY ===`);
console.log(`Total files processed: ${files.length}`);
console.log(`Files fixed: ${totalFixed}`);
console.log(`Files unchanged: ${files.length - totalFixed}`);
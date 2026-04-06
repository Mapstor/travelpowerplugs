#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const countriesDir = '/Users/markovisic/Desktop/travelpowerplugs/src/data/countries';

// Get all TypeScript files
const files = fs.readdirSync(countriesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`Processing ${files.length} country files...`);

let fixedCount = 0;
let errorCount = 0;

function fixStringContent(content) {
  // Handle multiline strings and regular strings
  // This regex handles template literals, single quotes, and double quotes
  let fixed = content;
  
  // Fix single quotes in string literals (both ' and " delimited)
  fixed = fixed.replace(/(["'`])((?:[^"'`\\]|\\.)*)(\1)/gs, (match, quote, inner, endQuote) => {
    if (quote === quote && quote === endQuote) {
      // Escape any unescaped single quotes inside the string
      let fixedInner = inner;
      
      // Fix apostrophes that aren't already escaped
      fixedInner = fixedInner.replace(/(?<!\\)'/g, "\\'");
      
      // Fix double backslashes that might have been created
      fixedInner = fixedInner.replace(/\\\\\'/g, "\\'");
      
      return quote + fixedInner + endQuote;
    }
    return match;
  });
  
  return fixed;
}

function fixTravelContext(content) {
  // Fix specific travelContext issues
  // Look for travelContext: followed by text that isn't properly quoted
  const travelContextRegex = /travelContext:\s*([^'"][^,\n}]*)/g;
  
  return content.replace(travelContextRegex, (match, value) => {
    // If it's not quoted, quote it
    if (!value.trim().startsWith("'") && !value.trim().startsWith('"')) {
      const cleanValue = value.trim().replace(/,$/, '');
      return `travelContext:\n    '${cleanValue.replace(/'/g, "\\'")}',`;
    }
    return match;
  });
}

files.forEach(file => {
  const filePath = path.join(countriesDir, file);
  const countryName = path.basename(file, '.ts');
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix string content first
    content = fixStringContent(content);
    
    // Fix unquoted travelContext
    content = fixTravelContext(content);
    
    // Fix export name to match filename
    const exportPattern = /export\s+default\s+(\w+);?$/m;
    const exportMatch = content.match(exportPattern);
    
    if (exportMatch) {
      const currentExportName = exportMatch[1];
      const expectedName = countryName.replace(/-/g, '_');
      
      if (currentExportName !== expectedName) {
        // Find the variable declaration and fix both
        const varPattern = new RegExp(`const\\s+${currentExportName}\\s*:\\s*CountryPlugData\\s*=`, 'm');
        if (varPattern.test(content)) {
          content = content.replace(varPattern, `const ${expectedName}: CountryPlugData =`);
          content = content.replace(exportPattern, `export default ${expectedName};`);
          console.log(`  Fixed export: ${file} (${currentExportName} → ${expectedName})`);
        }
      }
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
      console.log(`✓ Fixed: ${file}`);
    }
    
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\nResults:`);
console.log(`  Files fixed: ${fixedCount}`);
console.log(`  Errors: ${errorCount}`);
console.log(`  Unchanged: ${files.length - fixedCount - errorCount}`);
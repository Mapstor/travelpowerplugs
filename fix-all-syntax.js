#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const countriesDir = '/Users/markovisic/Desktop/travelpowerplugs/src/data/countries';

// Get all TypeScript files
const files = fs.readdirSync(countriesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`Processing ${files.length} country files...`);

let fixedCount = 0;
let errorCount = 0;

files.forEach(file => {
  const filePath = path.join(countriesDir, file);
  const countryName = path.basename(file, '.ts');
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix apostrophes in string literals
    // This regex matches string content between quotes and escapes apostrophes
    content = content.replace(/(['"`])((?:[^'"`\\]|\\.)*)(['"`])/g, (match, openQuote, stringContent, closeQuote) => {
      if (openQuote === closeQuote) {
        // Only process if quotes match (valid string)
        const fixed = stringContent.replace(/(?<!\\)'/g, "\\'");
        if (fixed !== stringContent) {
          modified = true;
        }
        return openQuote + fixed + closeQuote;
      }
      return match;
    });
    
    // Fix export name to match filename
    const exportPattern = /export\s+default\s+(\w+);?$/m;
    const exportMatch = content.match(exportPattern);
    
    if (exportMatch) {
      const currentExportName = exportMatch[1];
      const expectedName = countryName.replace(/-/g, '_');
      
      if (currentExportName !== expectedName) {
        // Also check if the variable is defined with the wrong name
        const varPattern = new RegExp(`const\\s+${currentExportName}\\s*:\\s*CountryPlugData\\s*=`, 'm');
        if (varPattern.test(content)) {
          // Replace both the variable declaration and the export
          content = content.replace(varPattern, `const ${expectedName}: CountryPlugData =`);
          content = content.replace(exportPattern, `export default ${expectedName};`);
          modified = true;
          console.log(`  Fixed export: ${file} (${currentExportName} → ${expectedName})`);
        }
      }
    }
    
    // Special handling for common patterns that cause issues
    // Fix double apostrophes that might have been created
    content = content.replace(/\\\\''/g, "\\'");
    content = content.replace(/'\\'/g, "\\'");
    
    if (modified) {
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
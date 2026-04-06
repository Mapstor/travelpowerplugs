#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const countriesDir = '/Users/markovisic/Desktop/travelpowerplugs/src/data/countries';

// Get all TypeScript files
const files = fs.readdirSync(countriesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`Scanning ${files.length} files for apostrophe issues...`);

let fixedFiles = 0;

files.forEach(file => {
  const filePath = path.join(countriesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Find all single-quoted strings and fix unescaped apostrophes inside them
  content = content.replace(/'((?:[^'\\]|\\.)*)'/g, (match, inner) => {
    // Look for unescaped apostrophes inside the string
    let fixed = inner.replace(/(?<!\\)'/g, "\\'");
    return `'${fixed}'`;
  });
  
  // Also fix export names if needed
  const fileName = path.basename(file, '.ts');
  const expectedName = fileName.replace(/-/g, '_');
  
  // Check if export is wrong
  const exportMatch = content.match(/export\s+default\s+(\w+);?$/m);
  if (exportMatch && exportMatch[1] !== expectedName) {
    const currentExportName = exportMatch[1];
    
    // Try to find and fix the variable declaration
    const varPattern = new RegExp(`const\\s+${currentExportName}(Data)?\\s*:\\s*CountryPlugData\\s*=`, 'm');
    if (varPattern.test(content)) {
      content = content.replace(varPattern, `const ${expectedName}: CountryPlugData =`);
      content = content.replace(/export\s+default\s+\w+;?$/m, `export default ${expectedName};`);
      console.log(`Fixed export in ${file}: ${currentExportName} → ${expectedName}`);
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedFiles++;
    console.log(`✓ Fixed ${file}`);
  }
});

console.log(`\nFixed ${fixedFiles} files total`);
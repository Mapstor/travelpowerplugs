#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sourceDir = '/Users/markovisic/Desktop/travelpowerplugs/countrypages';
const targetDir = '/Users/markovisic/Desktop/travelpowerplugs/src/data/countries';

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Get all TypeScript files from source
const sourceFiles = fs.readdirSync(sourceDir).filter(f => f.endsWith('.ts')).sort();

console.log(`Found ${sourceFiles.length} country files to process\n`);

const processedFiles = [];
const failedFiles = [];

function fixCountryFile(content, fileName) {
  let fixed = content;
  
  // 1. Fix import path variations
  fixed = fixed.replace(/from\s+['"]\.\.\/types['"]/g, "from '@/types'");
  fixed = fixed.replace(/from\s+['"]\.\.\/\.\.\/types\/country['"]/g, "from '@/types'");
  
  // 2. Fix all apostrophes in a more comprehensive way
  // First, let's handle the most common patterns
  const replacements = {
    // Possessives
    "Vienna's": "Vienna\\'s",
    "Ljubljana's": "Ljubljana\\'s",
    "Dubrovnik's": "Dubrovnik\\'s",
    "Prague's": "Prague\\'s",
    "Bulgaria's": "Bulgaria\\'s",
    "Slovenia's": "Slovenia\\'s",
    "Croatia's": "Croatia\\'s",
    "Denmark's": "Denmark\\'s",
    "Eritrea's": "Eritrea\\'s",
    "Finland's": "Finland\\'s",
    "Hungary's": "Hungary\\'s",
    "Iceland's": "Iceland\\'s",
    "Libya's": "Libya\\'s",
    "Norway's": "Norway\\'s",
    "Poland's": "Poland\\'s",
    "Romania's": "Romania\\'s",
    "Serbia's": "Serbia\\'s",
    "Sweden's": "Sweden\\'s",
    "Tunisia's": "Tunisia\\'s",
    "country's": "country\\'s",
    "apartment's": "apartment\\'s",
    "hotel's": "hotel\\'s",
    // Contractions
    "won't": "won\\'t",
    "don't": "don\\'t",
    "can't": "can\\'t",
    "couldn't": "couldn\\'t",
    "shouldn't": "shouldn\\'t",
    "wouldn't": "wouldn\\'t",
    "doesn't": "doesn\\'t",
    "didn't": "didn\\'t",
    "isn't": "isn\\'t",
    "aren't": "aren\\'t",
    "wasn't": "wasn\\'t",
    "weren't": "weren\\'t",
    "it's": "it\\'s",
    "that's": "that\\'s",
    "what's": "what\\'s",
    "there's": "there\\'s",
    "here's": "here\\'s",
    "you're": "you\\'re",
    "they're": "they\\'re",
    "we're": "we\\'re",
    "you've": "you\\'ve",
    "they've": "they\\'ve",
    "I've": "I\\'ve",
    "we've": "we\\'ve",
    "you'll": "you\\'ll",
    "they'll": "they\\'ll",
    "I'll": "I\\'ll",
    "we'll": "we\\'ll",
    "I'm": "I\\'m",
    "let's": "let\\'s",
    "You'll": "You\\'ll",
    "It's": "It\\'s",
    "Don't": "Don\\'t",
    "Won't": "Won\\'t"
  };
  
  // Apply replacements
  Object.entries(replacements).forEach(([from, to]) => {
    fixed = fixed.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
  });
  
  // 3. Fix export name
  const expectedName = fileName.replace('.ts', '').replace(/-/g, '_');
  
  // Find current export name
  const exportMatch = fixed.match(/export\s+default\s+(\w+);?$/m);
  if (exportMatch) {
    const currentName = exportMatch[1];
    if (currentName !== expectedName) {
      // Fix variable declaration - try multiple patterns
      fixed = fixed.replace(
        new RegExp(`const\\s+${currentName}Data?\\s*:\\s*CountryPlugData`, 'g'),
        `const ${expectedName}: CountryPlugData`
      );
      fixed = fixed.replace(
        new RegExp(`const\\s+data\\s*:\\s*CountryPlugData`, 'g'),
        `const ${expectedName}: CountryPlugData`
      );
      
      // Fix export statement
      fixed = fixed.replace(/export\s+default\s+\w+Data?;?$/m, `export default ${expectedName};`);
    }
  }
  
  // 4. Fix specific problem patterns
  // Fix unquoted travelContext (like in Bahrain, Kuwait)
  fixed = fixed.replace(/travelContext:\s+([^'"\n][^,\n}]+)(?=,?\s*adapterNeeded)/gs, (match, content) => {
    const trimmed = content.trim();
    if (!trimmed.startsWith("'") && !trimmed.startsWith('"')) {
      const escaped = trimmed.replace(/'/g, "\\'").replace(/,$/, '');
      return `travelContext:\n    '${escaped}',\n`;
    }
    return match;
  });
  
  return fixed;
}

function simpleValidate(content) {
  // Basic validation checks
  const checks = [];
  
  // Check for unescaped apostrophes in common problem areas
  const problemPatterns = [
    /Vienna's(?!\\)/,
    /Ljubljana's(?!\\)/,
    /won't(?!\\)/,
    /don't(?!\\)/,
    /it's(?!\\)/,
    /you're(?!\\)/,
    /I'm(?!\\)/,
  ];
  
  for (const pattern of problemPatterns) {
    if (pattern.test(content)) {
      checks.push(`Unescaped apostrophe: ${pattern.source}`);
    }
  }
  
  // Check for balanced brackets
  const openBrackets = (content.match(/\{/g) || []).length;
  const closeBrackets = (content.match(/\}/g) || []).length;
  if (openBrackets !== closeBrackets) {
    checks.push(`Unbalanced brackets: ${openBrackets} open, ${closeBrackets} close`);
  }
  
  // Check for balanced square brackets
  const openSquare = (content.match(/\[/g) || []).length;
  const closeSquare = (content.match(/\]/g) || []).length;
  if (openSquare !== closeSquare) {
    checks.push(`Unbalanced square brackets: ${openSquare} open, ${closeSquare} close`);
  }
  
  return checks.length === 0 ? { valid: true } : { valid: false, errors: checks };
}

// Process each file
let successCount = 0;
sourceFiles.forEach((fileName, index) => {
  process.stdout.write(`[${index + 1}/${sourceFiles.length}] Processing ${fileName}... `);
  
  try {
    const sourcePath = path.join(sourceDir, fileName);
    const targetPath = path.join(targetDir, fileName);
    
    // Read source file
    const content = fs.readFileSync(sourcePath, 'utf8');
    
    // Fix the content
    const fixedContent = fixCountryFile(content, fileName);
    
    // Basic validation
    const validation = simpleValidate(fixedContent);
    
    if (validation.valid) {
      // Write to target
      fs.writeFileSync(targetPath, fixedContent, 'utf8');
      console.log('✓ OK');
      processedFiles.push(fileName);
      successCount++;
    } else {
      console.log('✗ VALIDATION FAILED');
      validation.errors.forEach(err => console.log(`  - ${err}`));
      failedFiles.push({ file: fileName, errors: validation.errors });
    }
    
  } catch (error) {
    console.log('✗ ERROR');
    console.log(`  ${error.message}`);
    failedFiles.push({ file: fileName, error: error.message });
  }
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('PROCESSING COMPLETE');
console.log('='.repeat(60));
console.log(`✓ Successfully processed: ${processedFiles.length}/${sourceFiles.length} files`);
console.log(`✗ Failed: ${failedFiles.length} files`);

if (failedFiles.length > 0 && failedFiles.length <= 20) {
  console.log('\nFailed files:');
  failedFiles.forEach(({ file, errors, error }) => {
    console.log(`  - ${file}`);
    if (errors) {
      errors.forEach(err => console.log(`    ${err}`));
    } else if (error) {
      console.log(`    ${error}`);
    }
  });
}

// Create index.ts with only the working files
if (processedFiles.length > 0) {
  console.log('\nGenerating index.ts...');
  
  const imports = processedFiles.map(file => {
    const name = file.replace('.ts', '').replace(/-/g, '_');
    const fileName = file.replace('.ts', '');
    return `import ${name} from './${fileName}';`;
  }).join('\n');
  
  const mapEntries = processedFiles.map(file => {
    const name = file.replace('.ts', '').replace(/-/g, '_');
    return `  ['${name}', ${name}],`;
  }).join('\n');
  
  const indexContent = `${imports}

export const ENHANCED_COUNTRIES = new Map([
${mapEntries}
]);

export function getCountryDataBySlug(slug: string) {
  // Convert slug to expected key format (replace - with _)
  const key = slug.replace(/-/g, '_');
  return ENHANCED_COUNTRIES.get(key);
}

export function getCountryDataByName(name: string) {
  // Try to find by name match
  for (const [key, country] of ENHANCED_COUNTRIES.entries()) {
    if (country.name === name) {
      return country;
    }
  }
  return undefined;
}
`;
  
  fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf8');
  console.log(`✓ Generated index.ts with ${processedFiles.length} countries`);
}

console.log('\nNext step: Test with "npm run build"');
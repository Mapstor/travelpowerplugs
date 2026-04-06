#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
  
  // 1. Fix import path
  fixed = fixed.replace(/from ['"]\.\.\/types['"]/, "from '@/types'");
  
  // 2. Fix all common apostrophe patterns
  const apostrophePatterns = [
    // Possessives
    [/([a-zA-Z]+)'s/g, "$1\\'s"],
    // Contractions
    [/won't/g, "won\\'t"],
    [/don't/g, "don\\'t"],
    [/can't/g, "can\\'t"],
    [/couldn't/g, "couldn\\'t"],
    [/shouldn't/g, "shouldn\\'t"],
    [/wouldn't/g, "wouldn\\'t"],
    [/doesn't/g, "doesn\\'t"],
    [/didn't/g, "didn\\'t"],
    [/isn't/g, "isn\\'t"],
    [/aren't/g, "aren\\'t"],
    [/wasn't/g, "wasn\\'t"],
    [/weren't/g, "weren\\'t"],
    [/it's/g, "it\\'s"],
    [/that's/g, "that\\'s"],
    [/what's/g, "what\\'s"],
    [/there's/g, "there\\'s"],
    [/here's/g, "here\\'s"],
    [/you're/g, "you\\'re"],
    [/they're/g, "they\\'re"],
    [/we're/g, "we\\'re"],
    [/you've/g, "you\\'ve"],
    [/they've/g, "they\\'ve"],
    [/I've/g, "I\\'ve"],
    [/we've/g, "we\\'ve"],
    [/you'll/g, "you\\'ll"],
    [/they'll/g, "they\\'ll"],
    [/I'll/g, "I\\'ll"],
    [/we'll/g, "we\\'ll"],
    [/I'm/g, "I\\'m"],
    [/let's/g, "let\\'s"],
  ];
  
  // Apply apostrophe fixes only within string literals
  apostrophePatterns.forEach(([pattern, replacement]) => {
    // This regex matches content within single quotes
    fixed = fixed.replace(/'([^']*)'/g, (match, inner) => {
      const fixedInner = inner.replace(pattern, replacement);
      return `'${fixedInner}'`;
    });
  });
  
  // 3. Fix export name
  const expectedName = fileName.replace('.ts', '').replace(/-/g, '_');
  
  // Find current export name
  const exportMatch = fixed.match(/export\s+default\s+(\w+);?$/m);
  if (exportMatch) {
    const currentName = exportMatch[1];
    if (currentName !== expectedName) {
      // Fix variable declaration
      const patterns = [
        new RegExp(`const\\s+${currentName}\\s*:\\s*CountryPlugData`, 'g'),
        new RegExp(`const\\s+${currentName}Data\\s*:\\s*CountryPlugData`, 'g'),
        new RegExp(`const\\s+data\\s*:\\s*CountryPlugData`, 'g'),
      ];
      
      patterns.forEach(pattern => {
        fixed = fixed.replace(pattern, `const ${expectedName}: CountryPlugData`);
      });
      
      // Fix export statement
      fixed = fixed.replace(/export\s+default\s+\w+;?$/m, `export default ${expectedName};`);
    }
  }
  
  return fixed;
}

function validateFile(filePath) {
  try {
    // Try to parse the file with TypeScript compiler
    execSync(`npx tsc --noEmit --allowJs --checkJs ${filePath}`, { 
      stdio: 'pipe',
      encoding: 'utf8' 
    });
    return { valid: true };
  } catch (error) {
    // Extract relevant error message
    const errorOutput = error.stdout || error.stderr || error.toString();
    const lines = errorOutput.split('\n').slice(0, 5).join('\n');
    return { valid: false, error: lines };
  }
}

// Process each file
sourceFiles.forEach((fileName, index) => {
  process.stdout.write(`[${index + 1}/${sourceFiles.length}] Processing ${fileName}... `);
  
  try {
    const sourcePath = path.join(sourceDir, fileName);
    const targetPath = path.join(targetDir, fileName);
    
    // Read source file
    const content = fs.readFileSync(sourcePath, 'utf8');
    
    // Fix the content
    const fixedContent = fixCountryFile(content, fileName);
    
    // Write to target
    fs.writeFileSync(targetPath, fixedContent, 'utf8');
    
    // Validate the fixed file
    const validation = validateFile(targetPath);
    
    if (validation.valid) {
      console.log('✓ OK');
      processedFiles.push(fileName);
    } else {
      console.log('✗ SYNTAX ERROR');
      console.log('  Error:', validation.error.split('\n')[0]);
      failedFiles.push({ file: fileName, error: validation.error });
      // Remove the invalid file
      fs.unlinkSync(targetPath);
    }
    
  } catch (error) {
    console.log('✗ FAILED');
    console.log('  Error:', error.message);
    failedFiles.push({ file: fileName, error: error.message });
  }
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('PROCESSING COMPLETE');
console.log('='.repeat(60));
console.log(`✓ Successfully processed: ${processedFiles.length} files`);
console.log(`✗ Failed: ${failedFiles.length} files`);

if (failedFiles.length > 0) {
  console.log('\nFailed files:');
  failedFiles.forEach(({ file, error }) => {
    console.log(`  - ${file}`);
    if (error && error.length < 200) {
      console.log(`    ${error.split('\n')[0]}`);
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

console.log('\nYou can now test the build with: npm run build');
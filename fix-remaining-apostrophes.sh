#!/bin/bash

# Find and report all files with unescaped apostrophes
echo "Finding files with potential apostrophe issues..."

for file in /Users/markovisic/Desktop/travelpowerplugs/src/data/countries/*.ts; do
  # Skip if file doesn't exist
  [ -e "$file" ] || continue
  
  # Check for patterns like word's (possessive) that might not be escaped
  if grep -q "[a-zA-Z]'[st]\\b" "$file"; then
    echo "Fixing: $(basename "$file")"
    
    # More comprehensive fix for possessives and contractions
    # Fix any word followed by 's or 't
    sed -i '' "s/\\([a-zA-Z]\\)'\\([st]\\b\\)/\\1\\\\'\\2/g" "$file"
  fi
done

echo "Done!"
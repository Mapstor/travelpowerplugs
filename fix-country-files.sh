#!/bin/bash

# Fix all country files
for file in /Users/markovisic/Desktop/travelpowerplugs/src/data/countries/*.ts; do
  # Skip if file doesn't exist
  [ -e "$file" ] || continue
  
  echo "Processing: $(basename "$file")"
  
  # Fix import path
  sed -i '' "s|import type { CountryPlugData } from '\.\./types';|import type { CountryPlugData } from '@/types';|g" "$file"
  
  # Fix common apostrophe issues
  sed -i '' "s/won't/won\\'t/g" "$file"
  sed -i '' "s/don't/don\\'t/g" "$file"
  sed -i '' "s/can't/can\\'t/g" "$file"
  sed -i '' "s/wouldn't/wouldn\\'t/g" "$file"
  sed -i '' "s/couldn't/couldn\\'t/g" "$file"
  sed -i '' "s/shouldn't/shouldn\\'t/g" "$file"
  sed -i '' "s/isn't/isn\\'t/g" "$file"
  sed -i '' "s/aren't/aren\\'t/g" "$file"
  sed -i '' "s/wasn't/wasn\\'t/g" "$file"
  sed -i '' "s/weren't/weren\\'t/g" "$file"
  sed -i '' "s/haven't/haven\\'t/g" "$file"
  sed -i '' "s/hasn't/hasn\\'t/g" "$file"
  sed -i '' "s/hadn't/hadn\\'t/g" "$file"
  sed -i '' "s/you're/you\\'re/g" "$file"
  sed -i '' "s/they're/they\\'re/g" "$file"
  sed -i '' "s/we're/we\\'re/g" "$file"
  sed -i '' "s/you've/you\\'ve/g" "$file"
  sed -i '' "s/they've/they\\'ve/g" "$file"
  sed -i '' "s/we've/we\\'ve/g" "$file"
  sed -i '' "s/I've/I\\'ve/g" "$file"
  sed -i '' "s/you'll/you\\'ll/g" "$file"
  sed -i '' "s/they'll/they\\'ll/g" "$file"
  sed -i '' "s/we'll/we\\'ll/g" "$file"
  sed -i '' "s/I'll/I\\'ll/g" "$file"
  sed -i '' "s/it'll/it\\'ll/g" "$file"
  sed -i '' "s/that'll/that\\'ll/g" "$file"
  sed -i '' "s/you'd/you\\'d/g" "$file"
  sed -i '' "s/they'd/they\\'d/g" "$file"
  sed -i '' "s/we'd/we\\'d/g" "$file"
  sed -i '' "s/I'd/I\\'d/g" "$file"
  sed -i '' "s/it's/it\\'s/g" "$file"
  sed -i '' "s/that's/that\\'s/g" "$file"
  sed -i '' "s/what's/what\\'s/g" "$file"
  sed -i '' "s/there's/there\\'s/g" "$file"
  sed -i '' "s/here's/here\\'s/g" "$file"
  sed -i '' "s/where's/where\\'s/g" "$file"
  sed -i '' "s/who's/who\\'s/g" "$file"
  sed -i '' "s/how's/how\\'s/g" "$file"
  sed -i '' "s/let's/let\\'s/g" "$file"
  sed -i '' "s/I'm/I\\'m/g" "$file"
  
  # Fix possessives (country names and common words)
  sed -i '' "s/\\([A-Z][a-z]*\\)'s /\\1\\'s /g" "$file"
  sed -i '' "s/country's/country\\'s/g" "$file"
  sed -i '' "s/hotel's/hotel\\'s/g" "$file"
  sed -i '' "s/airport's/airport\\'s/g" "$file"
  sed -i '' "s/city's/city\\'s/g" "$file"
  sed -i '' "s/world's/world\\'s/g" "$file"
  sed -i '' "s/nation's/nation\\'s/g" "$file"
  sed -i '' "s/device's/device\\'s/g" "$file"
  sed -i '' "s/adapter's/adapter\\'s/g" "$file"
  sed -i '' "s/traveler's/traveler\\'s/g" "$file"
  sed -i '' "s/apartment's/apartment\\'s/g" "$file"
done

echo "All files processed!"
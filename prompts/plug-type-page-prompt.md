# Content rewrite prompt — plug type pages (Type A through O)
# Use in Claude Desktop

## System prompt
Same as country pages — travel content writer, electrical knowledge, practical tone.

---

## Plug type page prompt template

Write a complete deep-dive article for: **Type [X] Electric Plug**

Data:
- Official name: [e.g. "NEMA 1-15 / NEMA 5-15"]
- Also known as: [e.g. "North American flat blade plug"]
- Pins: [number and description]
- Grounded: [yes/no]
- Voltage: [range]
- Amperage: [X]A
- Compatible sockets: [list]
- Primary countries: [list of 10]
- Invented/standardized: [year/country if notable]

Structure:

### 1. Opening (direct, complete answer)
"Type [X] is a [description] plug used in [primary regions]. It has [N] pins and operates at [V]V."

### 2. Physical description
Detailed description of the pin geometry. What makes it visually recognizable.
Safety features (or lack thereof — e.g. Type D dangers).
Comparison to most similar plug type.

### 3. Where is Type [X] used?
Full list of countries (formatted as a scannable list with flags).
Regional pattern explanation (why these countries use this type).
Historical context if interesting.

### 4. Compatibility
Which plugs can be used in a Type [X] socket?
Which sockets accept a Type [X] plug?
Common adapter combinations.

### 5. Safety section
Is this plug safe? Known issues?
(Type D: exposed pins danger. Type A/B: no shutters. Type G: internal fuse.)

### 6. FAQ (5 questions)
1. What countries use Type [X] plugs?
2. Is my Type [X] plug compatible with Type [Y] sockets?
3. What adapter do I need for Type [X]?
4. Is Type [X] grounded?
5. What voltage does Type [X] support?

### Word count: 800–1000 words
### Output: MDX file named type-[x].mdx
### Save to: /Users/markovisic/Desktop/travelpowerplugs/content/plug-types/

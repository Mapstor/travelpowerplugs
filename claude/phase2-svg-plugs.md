# Phase 2 prompt — SVG plug components (Type A through O)

Paste into Claude Code at /Users/markovisic/Desktop/travelpowerplugs

---

Create all 15 React SVG plug components in /src/components/plugs/

## Interface for all plug components
```typescript
interface PlugProps {
  size?: number        // default 120
  variant: 'plug' | 'socket'
  animated?: boolean   // plug descends into socket on mount
  showLabel?: boolean  // show "Type X" label below
  className?: string
}
```

## Design rules (apply to ALL 15 types)
- ViewBox: 120 × 180 (plug) or 120 × 140 (socket face-on)
- Plug body: rounded rect, fill var(--plug-body, #f5f3ef), stroke var(--plug-border, #888)
- Pins: fill #888 (metallic gray), stroke #666
- Grounding pin: fill #6a6a6a, slightly longer
- Socket: same body, holes punched (dark fill #222 on light, #000 on dark)
- NO hardcoded colors for anything except pins — use CSS vars
- Dark mode: body inverts to #2a2a2a, border to #555
- Animated variant: plug starts 40px above socket, translateY(0) on mount, 0.4s ease-out
- role="img" aria-label="Type X [plug/socket]" on every SVG

## Create these files:
- /src/components/plugs/TypeA.tsx  — 2 flat parallel blades
- /src/components/plugs/TypeB.tsx  — 2 flat blades + round ground pin
- /src/components/plugs/TypeC.tsx  — 2 round pins (Europlug)
- /src/components/plugs/TypeD.tsx  — 3 round pins triangular (India)
- /src/components/plugs/TypeE.tsx  — 2 round pins + hole for socket pin (France)
- /src/components/plugs/TypeF.tsx  — 2 round pins + side earth clips (Schuko)
- /src/components/plugs/TypeG.tsx  — 3 rectangular pins triangular (UK)
- /src/components/plugs/TypeH.tsx  — V-shape flat pins + round ground (Israel)
- /src/components/plugs/TypeI.tsx  — V-shape flat pins (Australia)
- /src/components/plugs/TypeJ.tsx  — 3 round pins triangular (Switzerland)
- /src/components/plugs/TypeK.tsx  — 2 round pins + horseshoe ground (Denmark)
- /src/components/plugs/TypeL.tsx  — 3 round pins in line (Italy)
- /src/components/plugs/TypeM.tsx  — 3 large round pins triangular (South Africa)
- /src/components/plugs/TypeN.tsx  — 3 round pins triangular recessed (Brazil)
- /src/components/plugs/TypeO.tsx  — 3 round pins triangular (Thailand)

## Also create:
- /src/components/plugs/PlugInSocket.tsx
  Shows plug above socket with animation. Props: plugType, socketTypes[], animated
  Renders: plug SVG floating above socket SVG, on mount animates plug down
  If plug is compatible: green checkmark appears when seated
  If plug is NOT compatible: red X, plug bounces back up

- /src/components/plugs/index.ts
  Exports all components + a getPlugComponent(type: PlugType) helper function

## CountryPlugDisplay component
- /src/components/plugs/CountryPlugDisplay.tsx
  Props: country: Country, originCountry?: string
  Shows all plug types used in that country as PlugInSocket components
  If originCountry is set, highlight which plugs are compatible
  Used on every country page above the fold

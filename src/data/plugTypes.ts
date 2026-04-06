import { PlugType } from './countries';

export interface PlugTypeSpec {
  id: PlugType;
  name: string;
  aka: string;
  pins: number;
  pinShape: 'flat' | 'round' | 'rectangular';
  grounded: boolean;
  voltage: string;
  amperage: number;
  compatibleSockets: PlugType[];
  primaryCountries: string[];
  mapColor: string;
}

export const PLUG_TYPES: PlugTypeSpec[] = [
  {
    id: 'A',
    name: 'Type A',
    aka: 'American Standard',
    pins: 2,
    pinShape: 'flat',
    grounded: false,
    voltage: '100-127V',
    amperage: 15,
    compatibleSockets: ['A', 'B'],
    primaryCountries: ['United States', 'Canada', 'Mexico', 'Japan', 'Taiwan'],
    mapColor: '#4A90E2'
  },
  {
    id: 'B',
    name: 'Type B',
    aka: 'American with Ground',
    pins: 3,
    pinShape: 'flat',
    grounded: true,
    voltage: '100-127V',
    amperage: 15,
    compatibleSockets: ['B'],
    primaryCountries: ['United States', 'Canada', 'Mexico', 'Costa Rica', 'Ecuador'],
    mapColor: '#5A9FE7'
  },
  {
    id: 'C',
    name: 'Type C',
    aka: 'Europlug',
    pins: 2,
    pinShape: 'round',
    grounded: false,
    voltage: '220-240V',
    amperage: 2.5,
    compatibleSockets: ['C', 'E', 'F', 'H', 'J', 'K', 'L', 'N'],
    primaryCountries: ['Most of Europe', 'Asia', 'South America', 'Africa'],
    mapColor: '#50C878'
  },
  {
    id: 'D',
    name: 'Type D',
    aka: 'Old British Standard',
    pins: 3,
    pinShape: 'round',
    grounded: true,
    voltage: '220-240V',
    amperage: 5,
    compatibleSockets: ['D'],
    primaryCountries: ['India', 'Nepal', 'Pakistan', 'Bangladesh', 'Sri Lanka'],
    mapColor: '#FF9500'
  },
  {
    id: 'E',
    name: 'Type E',
    aka: 'French Standard',
    pins: 2,
    pinShape: 'round',
    grounded: true,
    voltage: '220-240V',
    amperage: 16,
    compatibleSockets: ['E', 'F'],
    primaryCountries: ['France', 'Belgium', 'Poland', 'Slovakia', 'Czech Republic'],
    mapColor: '#7B68EE'
  },
  {
    id: 'F',
    name: 'Type F',
    aka: 'Schuko',
    pins: 2,
    pinShape: 'round',
    grounded: true,
    voltage: '220-240V',
    amperage: 16,
    compatibleSockets: ['C', 'E', 'F'],
    primaryCountries: ['Germany', 'Austria', 'Netherlands', 'Spain', 'Russia'],
    mapColor: '#8A7FEE'
  },
  {
    id: 'G',
    name: 'Type G',
    aka: 'British Standard',
    pins: 3,
    pinShape: 'rectangular',
    grounded: true,
    voltage: '220-240V',
    amperage: 13,
    compatibleSockets: ['G'],
    primaryCountries: ['United Kingdom', 'Ireland', 'Hong Kong', 'Singapore', 'Malaysia'],
    mapColor: '#FF6B6B'
  },
  {
    id: 'H',
    name: 'Type H',
    aka: 'Israeli Standard',
    pins: 3,
    pinShape: 'round',
    grounded: true,
    voltage: '220-240V',
    amperage: 16,
    compatibleSockets: ['H'],
    primaryCountries: ['Israel', 'Palestinian Territories'],
    mapColor: '#4ECDC4'
  },
  {
    id: 'I',
    name: 'Type I',
    aka: 'Australian Standard',
    pins: 3,
    pinShape: 'flat',
    grounded: true,
    voltage: '220-240V',
    amperage: 10,
    compatibleSockets: ['I'],
    primaryCountries: ['Australia', 'New Zealand', 'Argentina', 'China', 'Fiji'],
    mapColor: '#FFD93D'
  },
  {
    id: 'J',
    name: 'Type J',
    aka: 'Swiss Standard',
    pins: 3,
    pinShape: 'round',
    grounded: true,
    voltage: '220-240V',
    amperage: 10,
    compatibleSockets: ['C', 'J'],
    primaryCountries: ['Switzerland', 'Liechtenstein', 'Rwanda'],
    mapColor: '#A8E6CF'
  },
  {
    id: 'K',
    name: 'Type K',
    aka: 'Danish Standard',
    pins: 3,
    pinShape: 'round',
    grounded: true,
    voltage: '220-240V',
    amperage: 16,
    compatibleSockets: ['C', 'K'],
    primaryCountries: ['Denmark', 'Greenland'],
    mapColor: '#C8B6DB'
  },
  {
    id: 'L',
    name: 'Type L',
    aka: 'Italian Standard',
    pins: 3,
    pinShape: 'round',
    grounded: true,
    voltage: '220-240V',
    amperage: 10,
    compatibleSockets: ['C', 'L'],
    primaryCountries: ['Italy', 'Chile', 'Uruguay'],
    mapColor: '#FDCB6E'
  },
  {
    id: 'M',
    name: 'Type M',
    aka: 'South African Standard',
    pins: 3,
    pinShape: 'round',
    grounded: true,
    voltage: '220-240V',
    amperage: 15,
    compatibleSockets: ['M'],
    primaryCountries: ['South Africa', 'Namibia', 'Swaziland', 'Lesotho', 'Mozambique'],
    mapColor: '#FD79A8'
  },
  {
    id: 'N',
    name: 'Type N',
    aka: 'Brazilian Standard',
    pins: 3,
    pinShape: 'round',
    grounded: true,
    voltage: '127-220V',
    amperage: 20,
    compatibleSockets: ['C', 'N'],
    primaryCountries: ['Brazil', 'South Africa'],
    mapColor: '#82C3A6'
  },
  {
    id: 'O',
    name: 'Type O',
    aka: 'Thai Standard',
    pins: 3,
    pinShape: 'round',
    grounded: true,
    voltage: '220-240V',
    amperage: 16,
    compatibleSockets: ['C', 'E', 'F', 'O'],
    primaryCountries: ['Thailand'],
    mapColor: '#DDA0DD'
  }
];

// Compatibility matrix: which plugs fit into which sockets
// Value is 'full', 'partial', or 'none' (implicit if not listed)
export type CompatibilityLevel = 'full' | 'partial' | 'none';

export const COMPATIBILITY_MATRIX: Record<PlugType, Partial<Record<PlugType, CompatibilityLevel>>> = {
  'A': { 'A': 'full', 'B': 'full' },
  'B': { 'B': 'full' },
  'C': { 'C': 'full', 'E': 'full', 'F': 'full', 'H': 'partial', 'J': 'full', 'K': 'full', 'L': 'full', 'N': 'full', 'O': 'full' },
  'D': { 'D': 'full' },
  'E': { 'C': 'partial', 'E': 'full', 'F': 'partial' },
  'F': { 'C': 'partial', 'E': 'partial', 'F': 'full' },
  'G': { 'G': 'full' },
  'H': { 'C': 'partial', 'H': 'full' },
  'I': { 'I': 'full' },
  'J': { 'C': 'partial', 'J': 'full' },
  'K': { 'C': 'partial', 'K': 'full' },
  'L': { 'C': 'partial', 'L': 'full' },
  'M': { 'M': 'full' },
  'N': { 'C': 'partial', 'N': 'full' },
  'O': { 'C': 'partial', 'E': 'partial', 'F': 'partial', 'O': 'full' }
};
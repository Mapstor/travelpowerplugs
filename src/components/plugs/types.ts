export interface PlugProps {
  size?: number;        // default 120
  variant: 'plug' | 'socket';
  animated?: boolean;   // plug descends into socket on mount
  showLabel?: boolean;  // show "Type X" label below
  className?: string;
}
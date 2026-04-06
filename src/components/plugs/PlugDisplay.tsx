import React from 'react';
import { PlugType } from '@/data/countries';
import { getPlugComponent } from './index';

interface PlugDisplayProps {
  type: string;
  size?: number;
}

export default function PlugDisplay({ type, size = 80 }: PlugDisplayProps) {
  const Component = getPlugComponent(type as PlugType);
  if (!Component) return null;
  return <Component size={size} variant="plug" />;
}
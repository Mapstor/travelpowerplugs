import { PlugType } from '@/data/countries';
import TypeA from './TypeA';
import TypeB from './TypeB';
import TypeC from './TypeC';
import TypeD from './TypeD';
import TypeE from './TypeE';
import TypeF from './TypeF';
import TypeG from './TypeG';
import TypeH from './TypeH';
import TypeI from './TypeI';
import TypeJ from './TypeJ';
import TypeK from './TypeK';
import TypeL from './TypeL';
import TypeM from './TypeM';
import TypeN from './TypeN';
import TypeO from './TypeO';
import PlugInSocket from './PlugInSocket';
import CountryPlugDisplay from './CountryPlugDisplay';
import PlugDisplay from './PlugDisplay';

export {
  TypeA,
  TypeB,
  TypeC,
  TypeD,
  TypeE,
  TypeF,
  TypeG,
  TypeH,
  TypeI,
  TypeJ,
  TypeK,
  TypeL,
  TypeM,
  TypeN,
  TypeO,
  PlugInSocket,
  CountryPlugDisplay,
  PlugDisplay,
};

export function getPlugComponent(type: PlugType) {
  const components = {
    'A': TypeA,
    'B': TypeB,
    'C': TypeC,
    'D': TypeD,
    'E': TypeE,
    'F': TypeF,
    'G': TypeG,
    'H': TypeH,
    'I': TypeI,
    'J': TypeJ,
    'K': TypeK,
    'L': TypeL,
    'M': TypeM,
    'N': TypeN,
    'O': TypeO,
  };
  return components[type];
}
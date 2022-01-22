import { Rect } from 'arpon/core/graphics/geometric/CGRect';
import { Point } from '../core/graphics/geometric/CGPoint';

export type Frame = Point &
  Rect & {
    rounded?: boolean;
    radius?: number;
    clipToBounds?: boolean;
  };

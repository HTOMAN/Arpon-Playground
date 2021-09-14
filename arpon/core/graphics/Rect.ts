import { CGPoint } from './types/CGPoint';
import { CGSize } from './types/CGSize';

/* eslint-disable no-console */
export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class CGRect implements Rect {
  static init(rect: Rect) {
    return new CGRect(rect.x, rect.y, rect.width, rect.height);
  }

  public constructor(
    public readonly x = 0,
    public readonly y = 0,
    public readonly width = 0,
    public readonly height = 0
  ) {}

  get size(): CGSize {
    return new CGSize(this.width, this.height);
  }

  get origin(): CGPoint {
    return new CGPoint(this.x, this.y);
  }
}

const rect1 = new CGRect(1, 1, 0, 0);
const rect2 = new CGRect(10, 10, 20, 20);
const rect3 = new CGRect();
const rect4 = CGRect.init({ x: 1, y: 1, width: 0, height: 0 });

console.log(rect1.x);
console.log(rect2);
console.log(rect3.x);
console.log(rect4);

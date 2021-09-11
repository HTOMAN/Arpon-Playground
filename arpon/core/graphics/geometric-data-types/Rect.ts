/* eslint-disable no-console */
export interface CGRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class Rect implements CGRect {
  static init(r: CGRect) {
    return new Rect(r.x, r.y, r.width, r.height);
  }

  public constructor(
    public readonly x = 0,
    public readonly y = 0,
    public readonly width = 0,
    public readonly height = 0
  ) {}
}

const rect1 = new Rect(1, 1, 0, 0);
const rect2 = new Rect(10, 10, 20, 20);
const rect3 = new Rect();
const rect4 = Rect.init({ x: 1, y: 1, width: 10, height: 10 });

console.log(rect1);
console.log(rect2);
console.log(rect3);
console.log(rect4);

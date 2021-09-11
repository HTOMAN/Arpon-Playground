/* eslint-disable no-console */
export interface CGPoint {
  readonly x: number;
  readonly y: number;
}

/** Describes and provides methods to work with two-dimensional coordinate system.
 * @internal
 */
export class Point implements CGPoint {
  static init(point: CGPoint) {
    return new Point(point.x, point.y);
  }

  static zero: Point = new Point();

  public constructor(public readonly x = 0, public readonly y = 0) {}

  /** New Point with modified x value */
  public setX(x: number) {
    return new Point(x, this.y);
  }

  /** New Point with modified y value */
  public setY(y: number) {
    return new Point(this.x, y);
  }

  public equalTo(point: CGPoint) {
    return point.x === this.x && point.y === this.y;
  }
}

/* const point1 = new Point(1, 1);
const point2 = new Point(10, 10);
const point3 = new Point();
const point4 = Point.init({ x: 1, y: 1 });
const point5 = Point.zero;

const point6 = new Point(1, 1);
const point7 = new Point(10, 3);

console.log(point1);
console.log(point2);
console.log(point3);
console.log(point4);
console.log(point5);
console.log(point6.equalTo(point1));
console.log(point7.equalTo(point2)); */

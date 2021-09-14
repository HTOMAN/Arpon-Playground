import Equatable from 'arpon/basic-behaviors/Equatable';

/* eslint-disable no-console */
export interface PointValues {
  readonly x: number;
  readonly y: number;
}

export interface Point extends Equatable<PointValues> {
  setX(x: number): CGPoint;
  setX(y: number): CGPoint;
  coordinates?: () => Iterable<number>;
}

/** Describes and provides methods to work with two-dimensional coordinate system.
 * @internal
 */
export default class CGPoint implements Point, PointValues {
  static init(point: PointValues) {
    return new CGPoint(point.x, point.y);
  }

  static zero: CGPoint = new CGPoint();

  public constructor();
  public constructor(...coordinates: number[]);
  public constructor(public readonly x = 0, public readonly y = 0) {}

  /** New Point with modified x value */
  public setX(x: number) {
    return new CGPoint(x, this.y);
  }

  /** New Point with modified y value */
  public setY(y: number) {
    return new CGPoint(this.x, y);
  }

  public equalTo(instance: CGPoint) {
    return instance.x === this.x && instance.y === this.y;
  }

  coordinates(): Iterable<number> {
    return [this.x, this.y];
  }
}

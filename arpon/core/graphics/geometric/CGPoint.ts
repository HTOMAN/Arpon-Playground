import Equatable from '../../../basic-behaviors/Equatable';

/* type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
}; */

export interface PointValues {
  readonly x: number;
  readonly y: number;
}

export interface Point extends Equatable<PointValues> {
  setX(x: number): CGPoint;
  setX(y: number): CGPoint;
  coordinates?: () => Iterable<number>;
}

/* function mutable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);

  //target = new CGPoint(0, 0);

  const original = descriptor.value;

  descriptor.value = function (...args) {
    console.log('params: ', ...args);
    const result = original.call(this, ...args);
    console.log('result: ', result);
    return result;
  };
} */

/* function immutable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.set;

  descriptor.set = function (value: any) {
    return original.call(this, { ...value });
  };
} */

/**
 * Describes and provides methods to work with two-dimensional coordinate system.
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
    y;
    return new CGPoint(this.x, y);
  }

  public equalTo(instance: CGPoint) {
    return instance.x === this.x && instance.y === this.y;
  }

  coordinates(): Iterable<number> {
    return [this.x, this.y];
  }
}

// eslint-disable-next-line no-console
// console.log(new CGPoint().setY(950));

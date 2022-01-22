import Equatable from '../../../basic-behaviors/Equatable';
import CGPoint from './CGPoint';
import CGSize from './CGSize';

export interface RectValues {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  sufix?: () => any | string | number;
}

export interface Rect extends Equatable<RectValues> {
  get size(): CGSize;
  get origin(): CGPoint;
}

export default class CGRect implements Rect, RectValues {
  static init(rect: RectValues) {
    return new CGRect(rect.x, rect.y, rect.width, rect.height);
  }

  static zero = new CGRect();

  public constructor(
    public readonly x = 0,
    public readonly y = 0,
    public readonly width = 0,
    public readonly height = 0
  ) {}

  contains?: ((instance: RectValues) => boolean) | undefined;

  get size() {
    return new CGSize(this.width, this.height);
  }

  get origin() {
    return new CGPoint(this.x, this.y);
  }

  public equalTo(instance: CGRect) {
    return this.size.equalTo(instance.size) && this.origin.equalTo(instance.origin);
  }
}

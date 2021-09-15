import Equatable from '../../../basic-behaviors/Equatable';

export interface SizeValues {
  readonly width: number;
  readonly height: number;
}

export type Size = Equatable<SizeValues>;

export default class CGSize implements Size, SizeValues {
  static init(size: SizeValues) {
    return new CGSize(size.width, size.height);
  }

  static zero: CGSize = new CGSize();

  public constructor(public readonly width = 0, public readonly height = 0) {}

  public equalTo(instance: CGSize) {
    return instance.width === this.width && instance.height === this.height;
  }
}

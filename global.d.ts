declare type NonZeroEvenOddInheritRules = 'nonzero' | 'evenodd' | 'inherit';
declare type ClipRule = NonZeroEvenOddInheritRules;
declare type FillRule = NonZeroEvenOddInheritRules;

export type Point = {
  readonly x: number;
  readonly y: number;
};

export type Frame = Point & {
  height: number;
  width: number;
  rounded?: boolean = false;
  clipToBounds?: boolean = false;
};

export interface Fixture {
  style?: React.CSSProperties;
}

export class Sprite {
  public image?: HTMLImageElement;
}

/*
export type Opaque<K, T> = T & { __TYPE__: K };
type HexCode = Opaque<string, "HexCode">

const createHexCode = (str: string): HexCode => {
  // implementation that forces string to be hexCode
  return str.toString() as HexCode // casting is needed.
}
const test = createHexCode("#333");
const isAssignableString: string = test; // yes anything that is HexCode is still technically a string.
const isAssignableHexCode: HexCode = "standard string" // error
*/

/* export type UIColor = {
  readonly value: number;
  readonly hexString: string;
};

export class UIColor implements UIColor {
  readonly value;
  readonly _hexString;

  constructor(value: number) {
    this.value = value;
    this._hexString = value.toString(16);
    // yourNumber = parseInt(hexString, 16);
  }

  public get hexString(): string {
    return this._hexString;
  }
} */

export interface UIViewProperties {
  backgroundColor?: string = 'transparent';
  hidden?: boolean = false;
  alpha?: number = 1;
}

export interface UIElement {
  nodes: React.ReactNode[];
}

export type UIView = UIViewProperties & Frame;

export interface SvgPathProps {
  /* The d attribute defines a path to be drawn. */
  d: string;

  /* color */
  stroke?: string;
  /* shape to be used at the end of open subpaths */
  strokeLinecap?: 'butt' | 'round' | 'square';
  /* the shape to be used at the corners */
  strokeLinejoin?: string;
  /* the width of the stroke */
  strokeWidth?: number;

  /* color to paint the element */
  fill?: string;
  /* the algorithm to use to determine the inside part of a shape */
  fillRule?: FillRule;

  /* specifies the transparency */
  opacity?: number;

  /* clipping rule(nonzero | evenodd | inherit) to work along with clipPath element */
  clipRule?: ClipRule;
}

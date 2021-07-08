declare type NonZeroEvenOddInheritRules = 'nonzero' | 'evenodd' | 'inherit';
declare type ClipRule = NonZeroEvenOddInheritRules;
declare type FillRule = NonZeroEvenOddInheritRules;

interface SvgPathProps {
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

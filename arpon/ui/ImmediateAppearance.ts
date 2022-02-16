import CGPoint from 'arpon/core/graphics/geometric/CGPoint';
import CGRect from 'arpon/core/graphics/geometric/CGRect';

export interface ImmediateAppearance {
  /*  The view’s background color. */
  backgroundColor?: string; // UIColor?

  /* A Boolean value that determines whether the view is hidden. */
  isHidden?: boolean;

  /* The view’s opacity/alpha value 0 to 1. */
  alpha?: number;

  /* A Boolean value that determines whether subviews are confined to the bounds of the view. */
  clipToBounds?: boolean;

  // Configuring the Bounds and Frame Rectangles

  /* The frame rectangle, which describes the view’s location and size in its superview’s coordinate system. */
  frame?: CGRect;

  /* The bounds rectangle, which describes the view’s location and size in its own coordinate system. */
  bounds?: CGRect;

  /* The center point of the view's frame rectangle. */
  center?: CGPoint;

  /* Specifies the transform applied to the view, relative to the center of its bounds. */
  // transform?: CGAffineTransform

  /*

  var isOpaque: Bool
  A Boolean value that determines whether the view is opaque.

  var tintColor: UIColor!
  The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.

  var tintAdjustmentMode: UIView.TintAdjustmentMode
  The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.


  var mask: UIView?
  An optional view whose alpha channel is used to mask a view’s content.

  class var layerClass: AnyClass
  Returns the class used to create the layer for instances of this class.

  var layer: CALayer
  The view’s Core Animation layer used for rendering.
  */
}

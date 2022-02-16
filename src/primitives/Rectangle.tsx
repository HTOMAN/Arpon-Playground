// export default class Rectangle extends React. {
//   <svg width="400" height="110">
//   <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
// </svg>
// }

import { Frame, UIView } from 'arpon';
import React, { memo, CSSProperties, useRef /* , ReactSVGElement  */ } from 'react';
// import { UIView } from 'global';

/* type Props = { foo: string };

// OK now, in future, error
const FunctionComponent: React.FunctionComponent<Props> = ({ foo, children }: Props) => {
  return (
    <div>
      {foo} {children}
    </div>
  ); // OK
};

// Error now, in future, deprecated
const VoidFunctionComponent: React.VoidFunctionComponent<Props> = ({ foo, children }) => {
  return (
    <div>
      {foo}
      {children}
    </div>
  );
};
 */

export type P = UIView & Frame; //  & SVGRectElement

const Rectangle: React.VoidFunctionComponent<P> = (props: P) => {
  const ref = useRef(null);

  const rules: CSSProperties = {
    transform: `translate(${props.x}px, ${props.y}px)`,
    width: 'fit-content',
    ...props.style,
  };

  /* Swift ref
    -> CAGradientLayer

    class CAGradientLayer : CALayer

    gradientLayer.colors = [UIColor.red.cgColor,
      UIColor.yellow.cgColor,
      UIColor.green.cgColor,
      UIColor.blue.cgColor]

    gradientLayer.transform = CATransform3DMakeRotation(CGFloat.pi / 2, 0, 0, 1)
  */

  /* Swift ref
    -> CABasicAnimation

    class CABasicAnimation : CAPropertyAnimation

    let animation = CABasicAnimation(keyPath: "opacity")
    animation.fromValue = 0
    animation.toValue = 1

    let animation = CABasicAnimation(keyPath: "position")
    animation.fromValue = [0, 0]
    animation.toValue = [100, 100]
  */

  return (
    <svg ref={ref} width={props.width} height={props.height} preserveAspectRatio="xMinYMin" style={rules}>
      {/* <defs>
        <linearGradient id="grad1" x1="0%" x2="100%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="white" />
          <stop offset="0%" stopColor="black">
            <animate attributeName="offset" values="0;1" dur="5s" repeatCount="indefinite" />
          </stop>
          <stop offset="10%" stopColor="black">
            <animate attributeName="offset" values="0;1" dur="5s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="white" />
        </linearGradient>
      </defs> */}
      <rect
        x={0}
        y={0}
        width="100%"
        height="100%"
        fill={props.backgroundColor}
        fillOpacity={props.alpha}
        rx={props.round ? props.round : props.rounded ? props.height / 2 : 0}
      />

      {/* <svg x="10">
        <rect x="10" y="10" height="100" width="100" stroke="ff0000" fill="#0000ff" />
      </svg>
      <svg x="200">
        <rect x="10" y="10" height="100" width="100" stroke="009900" fill="#00cc00" />
      </svg> */}
    </svg>
  );
};

export default memo(Rectangle);

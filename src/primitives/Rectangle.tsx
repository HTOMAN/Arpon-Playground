// export default class Rectangle extends React. {
//   <svg width="400" height="110">
//   <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
// </svg>
// }

import React, { memo, CSSProperties } from 'react';
import { Frame, UIView, UIViewProperties } from 'global';

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

export interface PropsType {
  children: JSX.Element;
  name: string;
}

const Rectangle: React.VoidFunctionComponent<UIView> = (frame: Frame, viewProps: UIViewProperties) => {
  const rules: CSSProperties = {
    transform: `translate(${frame.x}px, ${frame.y}px)`,
  };

  return (
    <svg width={frame.width} height={frame.height} preserveAspectRatio="xMinYMin" style={rules}>
      <rect
        x={0}
        y={0}
        width="100%"
        height="100%"
        fill={viewProps.backgroundColor}
        fillOpacity={viewProps.alpha}
        rx={frame.rounded ? frame.height / 2 : 0}
      />
    </svg>
  );
};

export default memo(Rectangle);

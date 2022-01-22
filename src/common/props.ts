// import React from 'react';

import { Argument } from 'classnames';

/**
 * A shared base interface for all component props.
 */
export interface Props {
  /** A space-delimited list of class names to pass along to a child element. */
  className?: Argument[] | string;
  style?: React.CSSProperties;
}

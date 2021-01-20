/**
 * A shared base interface for all component props.
 */
export interface Props {
  /** A space-delimited list of class names to pass along to a child element. */
  className?: string;
  style?: React.CSSProperties;
}

export type MaybeNothing = JSX.Element | false | null | undefined;

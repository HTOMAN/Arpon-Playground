import { CSSProperties, memo } from 'react';
import classNames from 'classnames';
import * as IconNames from './icons/iconNames';
import { Props } from '../../common/props';
import { IconPaths24, PathsDefinition } from './icons/IconPaths24';

export type IconName = typeof IconNames[keyof typeof IconNames];

export enum IconSizes {
  DEFAULT = 24,
}

// type AspectRatios = 'contain' | 'cover'; // fancy names for preserveAspectRatio meet and slice

// type PathPositions = 'center' | 'top' | 'right' | 'bottom' | 'left';

interface IconProps extends Props {
  children?: never;

  color?: string;

  /**
   * @default IconSizes.DEFAULT
   */
  iconSize?: IconSizes | number;

  /**
   * @default undefined
   */
  scale?: number | undefined;

  icon: IconName;

  /**
   * For accessibility.
   */
  title?: string | false | null;

  /**
   * CSS Properties.
   */
  style?: CSSProperties;

  /**
   * WIP.
   */
  // aspectRatio?: AspectRatios;

  /**
   * WIP.
   */
  // pathPosition?: PathPositions;
}

// You don't see these everyday 😬

function getPaths(paths?: PathsDefinition): JSX.Element[] | null {
  if (!paths) return null;
  return paths.map((attributes, i) => {
    return <path key={i} {...(attributes as any)} shapeRendering="geometricPrecision" />;
  });
}

export function BaseIcon({
  icon,
  iconSize = IconSizes.DEFAULT,
  scale,
  className,
  style,
  ...others
}: IconProps): JSX.Element | null {
  if (icon == null || typeof icon === 'boolean') {
    return null;
  } else if (typeof icon !== 'string') {
    return icon;
  }

  const [meta, svgPaths] = IconPaths24[icon];
  const classes = classNames(className);
  const paths = getPaths(svgPaths);

  const { elementsSize: [eWidth, eHeight] = [iconSize, iconSize] } = meta;

  const { title = icon } = others;

  const _scale = Math.max(0, scale || 1);

  const boxSize = iconSize * _scale;

  const boxRatio = [boxSize * (eWidth / boxSize), boxSize * (eHeight / boxSize)];

  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      fill="inherit"
      className={classes}
      width={boxSize}
      height={boxSize}
      viewBox={`0 0 ${boxRatio[0]} ${boxRatio[1]}`}
      style={style}
    >
      <rect width={boxRatio[0]} height={boxRatio[1]} fill="none" />
      {title && <desc>{title}</desc>}
      {paths}
    </svg>
  );
}

const Icon = memo(BaseIcon);

export default Icon;

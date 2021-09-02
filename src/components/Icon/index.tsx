import { memo } from 'react';
import classNames from 'classnames';
import * as IconNames from './icons/iconNames';
import { MaybeNothing, Props } from '../../common/props';
import { IconPaths24 } from './icons/IconPaths24';

export type IconName = typeof IconNames[keyof typeof IconNames];

export enum IconSizes {
  DEFAULT = 24,
}

type TIconSize = IconSizes | number;

interface IconProps extends Props {
  children?: never;

  color?: string;

  /**
   * @default IconSizes.DEFAULT
   */
  iconSize?: TIconSize;

  icon: IconName | MaybeNothing;

  /**
   * For accessibility.
   */
  title?: string | false | null;
}

// You don't see these everyday 😬

function getPaths(iconName: IconName): JSX.Element[] | null {
  const svgPaths = IconPaths24[iconName];
  if (!svgPaths) return null;
  return svgPaths.map((draw, i) => {
    return <path key={i} {...(draw as any)} />;
  });
}

export function BaseIcon({ icon, iconSize = IconSizes.DEFAULT, color, ...others }: IconProps): JSX.Element | null {
  if (icon == null || typeof icon === 'boolean') {
    return null;
  } else if (typeof icon !== 'string') {
    return icon;
  }

  const classes = classNames('align-text-baseline', 'color-inherit');
  const viewBox = `0 0 ${iconSize} ${iconSize}`;
  const paths = getPaths(icon);

  const { title = icon } = others;

  return (
    <span className={classes} style={others.style}>
      <rect width="24" height="24" fill="none" />
      <svg fill={color} viewBox={viewBox} width={iconSize} height={iconSize} preserveAspectRatio="none">
        {title && <desc>{title}</desc>}
        {paths}
      </svg>
    </span>
  );
}

const Icon = memo(BaseIcon);

export default Icon;

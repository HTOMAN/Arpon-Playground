import classNames from 'classnames';
import * as IconNames from './icons/iconNames';
import { MaybeNothing, Props } from '../../common/props';
import { IconPaths } from './icons/svgPaths';

export type IconName = typeof IconNames[keyof typeof IconNames];

export enum IconSizes {
  DEFAULT = 20,
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

function getPaths(iconName: IconName): JSX.Element[] | null {
  const svgPaths = IconPaths[iconName];
  if (!svgPaths) return null;
  return svgPaths.map((d, i) => <path d={d} key={i} fillRule="evenodd" clipRule="evenodd" />);
}

export default function Icon({ icon, iconSize = IconSizes.DEFAULT, color, ...others }: IconProps): JSX.Element | null {
  if (icon == null || typeof icon === 'boolean') {
    return null;
  } else if (typeof icon !== 'string') {
    return icon;
  }

  const classes = classNames(
    'flex-0',
    'inline-block',
    'align-text-bottom',
    'mr-2',
    '-mr-t-1',
    '-ml-0.5',
    'color-inherit'
  );
  const viewBox = `0 0 ${iconSize} ${iconSize}`;
  const paths = getPaths(icon);

  const { title = icon } = others;

  return (
    <span className={classes} style={others.style}>
      <svg fill={color} viewBox={viewBox} width={iconSize} height={iconSize} preserveAspectRatio="none">
        {title && <desc>{title}</desc>}
        {paths}
      </svg>
    </span>
  );
}

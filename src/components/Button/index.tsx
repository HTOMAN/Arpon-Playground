import classNames from 'classnames';
import Icon from '../Icon';
import { IconName } from '../Icon';
import { MaybeNothing, Props } from '../../common/props';

interface ButtonProps extends Props {
  onClick?(): void;
  children?: React.ReactNode;
  icon?: IconName | MaybeNothing;
  rightIcon?: IconName | MaybeNothing;
  disabled?: boolean;
}

export default function Button({ icon, rightIcon, onClick, children, ...others }: ButtonProps) {
  const classes = classNames(
    'inline-flex',
    // 'flex-row',
    'items-center',
    // 'justify-center',
    // 'align-middle',
    // 'transition',
    // 'duration-300',
    'ease-out',
    'select-none',
    'appearance-none',
    'py-4',
    'px-10',
    'text-black',
    // 'border-none',
    // 'font-semibold',
    'rounded-2xl',
    'bg-white',
    'focus:outline-none',
    'focus:ring',
    'focus:border-blue-900',
    'btn-project'
  );

  const interactionProps = {
    onClick,
  };

  return (
    <button {...interactionProps} className={classes} {...others}>
      <Icon icon={icon} />
      <span className="last:mr-0 leading-none align-text-baseline">{children}</span>
      <Icon icon={rightIcon} />
    </button>
  );
}

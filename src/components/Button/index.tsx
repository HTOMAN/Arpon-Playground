import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { IconName } from '../Icon';
import { Props } from '../../common/props';
// import { JSXElement } from '@babel/types';

interface ButtonProps extends Props {
  onClick?(): void;
  children?: React.ReactNode;
  icon?: IconName;
  rightIcon?: IconName;
  disabled?: boolean;
}

export function BaseButton({ icon, rightIcon, onClick, children, className, ...others }: ButtonProps) {
  const classes = classNames(className, {
    'inline-flex': true,
    // 'flex-row',
    // 'items-center',
    // 'justify-center',
    // 'align-middle',
    // 'transition',
    // 'duration-300',
    // 'ease-out',
    'select-none': true,
    'appearance-none': true,
    // 'border-none',
    // 'font-semibold',
    'focus:outline-none': true,
    'focus:ring': true,
    'focus:border-blue-900': true,
  });

  const interactionProps = {
    onClick,
  };

  return (
    <button {...interactionProps} className={classes} {...others}>
      {icon && <Icon icon={icon} />}
      <span className={(icon && 'ml-1') || undefined}>{children}</span>
      {rightIcon && <Icon icon={rightIcon} />}
    </button>
  );
}

const Button = BaseButton;

export default Button;

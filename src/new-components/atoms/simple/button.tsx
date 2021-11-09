import Icon from '@mdi/react';
import { MouseEventHandler } from 'react';
import tw, { styled } from 'twin.macro';

import { Component, ComponentProps } from '~/types';

export const ButtonStyles = tw`
  inline-flex
  items-center
  content-center
  bg-accent
  text-accent-text
  border-none
  rounded
  min-h-button
  px-8
  py-4
  font-manrope
  font-semibold
  tracking-button
  cursor-pointer
  transition-all
  duration-200
  ease-in-out

  hocus:(bg-accent-dark -translate-y-1 min-h-button)

  disabled:(opacity-50 pointer-events-none cursor-not-allowed)
`;

const StyledButton = styled.button`
  ${ButtonStyles}
  & > *:not(:last-child) {
    ${tw`mr-4`}
  }
`;

export interface ButtonProps extends ComponentProps {
  title: string;
  type?: 'button' | 'reset' | 'submit' | undefined;
  icon?: string;
  iconSize?: number;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: Component<ButtonProps> = (props) => {
  const {
    type,
    title,
    icon,
    iconSize = 1,
    className,
    disabled,
    children,
    onClick,
    style,
  } = props;

  return (
    <StyledButton
      type={type}
      name={title}
      title={title}
      aria-label={title}
      className={className}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {icon && <Icon path={icon} size={iconSize} />}
      {children && <span>{children}</span>}
    </StyledButton>
  );
};

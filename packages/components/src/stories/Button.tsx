import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

interface IProps {
  primary?: boolean;
  backgroundColor: string;
  size: 'small' | 'medium' | 'large';
  label: string;
  onClick: () => void;
}
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}: IProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: 'green',
  primary: false,
  size: 'medium',
  onClick: undefined,
};

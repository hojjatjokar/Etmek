import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export interface IProps {
  primary?: boolean;
  size: 'small' | 'medium' | 'large';
  label: string;
  onClick: () => void;
}
const Button = ({ primary, size, label, ...props }: IProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      {...props}
    >
      hi
      {label}
    </button>
  );
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;

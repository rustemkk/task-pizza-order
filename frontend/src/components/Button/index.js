import cn from 'classnames';
import { isFunction } from 'lodash';
import { PropTypes } from 'prop-types';
import React from 'react';

import s from './index.module.scss';


const Button = ({ className, isDisabled, label, onClick }) => {
  return (
    <button
      className={cn(s.Button, className, isDisabled && s.IsDisabled)}
      type={isFunction(onClick) ? 'button' : 'submit'}
      onClick={isFunction(onClick) ? onClick : undefined}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired,
  onClick: PropTypes.func,
};

export default Button;

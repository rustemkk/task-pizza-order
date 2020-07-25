import cn from 'classnames';
import { get } from 'lodash';
import { PropTypes } from 'prop-types';
import React from 'react';

import s from './index.module.scss';


const FormInput = ({
  autoFocus,
  className,
  errors,
  handleChange,
  isDisabled,
  isRequired,
  label,
  maxLength,
  name,
  values,
}) => {

  return (
    <div className={cn(s.FormField, className)}>
      {label && (
        <div className={s.Label}>
          {label}
          {isRequired && <span className={s.IsRequired}>*</span>}
        </div>
      )}
      <input
        autoFocus={autoFocus}
        className={cn(s.Input, get(errors, name) && s.InputError)}
        disabled={isDisabled}
        maxLength={maxLength}
        name={name}
        onChange={e => handleChange(name, e.target.value)}
        type="text"
        value={get(values, name) || ''}
      />
      {get(errors, name) && <div className={s.Error}>{get(errors, name)}</div>}
    </div>
  );
};

FormInput.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  errors: PropTypes.object,
  handleChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired
};

export default FormInput;

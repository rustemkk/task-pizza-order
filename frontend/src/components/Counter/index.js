import cn from 'classnames';
import React from 'react';
import { PropTypes } from 'prop-types';

import Button from '../Button';
import SvgIcon from '../SvgIcon';
import s from './index.module.scss';


const Counter = ({ className, count, onDecrement, onIncrement }) => {

  return (
    <div className={cn(s.Counter, className)}>
      <Button
        className={s.PlusMinus}
        label={<SvgIcon className={s.PlusMinusIcon} name="minus" size={20} />}
        onClick={onDecrement}
      />
      <span className={s.Count}>{count}</span>
      <Button
        className={s.PlusMinus}
        label={<SvgIcon className={s.PlusMinusIcon} name="plus" size={20} />}
        onClick={onIncrement}
      />
    </div>
  );
}

Counter.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Counter;

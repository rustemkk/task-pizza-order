import cn from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';

import s from './index.module.scss';


const PriceTag = ({ className, currencyLabel, price }) => {

  const number1 = Math.floor(price / 100);
  const number2 = price % 100;

  return (
    <span className={cn(s.BigNumber, className)}>
      {currencyLabel ? currencyLabel : '$'}
      {number1}
      <span className={s.SmallNumber}>
        .{number2 === 0 ? '00' : number2}
      </span >
    </span>
  );
}

PriceTag.propTypes = {
  className: PropTypes.string,
  currencyLabel: PropTypes.string,
  price: PropTypes.number,
};

export default PriceTag;

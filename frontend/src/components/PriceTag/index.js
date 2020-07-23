import cn from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';

import s from './index.module.scss';


const PriceTag = ({ className, price }) => {

  const number1 = Math.floor(price / 100);
  const number2 = price % 100;

  return (
    <span className={cn(s.BigNumber, className)}>
      ${number1}
      <span className={s.SmallNumber}>
        .{number2}
      </span >
    </span>
  );
}

PriceTag.propTypes = {
  className: PropTypes.string,
  price: PropTypes.number,
};

export default PriceTag;

import React from 'react';
import { useSelector } from 'react-redux';

import s from './index.module.scss';
import { selectCartAmount } from '../../slices/cartSlice';
import PriceTag from '../PriceTag';
import SvgIcon from '../SvgIcon';


const TopBar = () => {

  const cartAmount = useSelector(selectCartAmount);

  return (
    <div className={s.TopBar}>
      <span className={s.Title}>Pizza time!</span>
      <img className={s.Logo} alt="logo" src={process.env.PUBLIC_URL + '/logo512.png'} />
      <div className={s.Cart}>
        <SvgIcon className={s.CartIcon} name="cart" size={30} />
        <PriceTag className={s.PriceTag} price={cartAmount} />
      </div>
    </div>
  );
}

export default TopBar;

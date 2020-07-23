import cn from 'classnames';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './index.module.scss';
import { selectCartAmount, selectCartProducts, addProductToCart, removeProductFromCart } from '../../slices/cartSlice';
import PriceTag from '../PriceTag';
import SvgIcon from '../SvgIcon';
import Button from '../Button';


const TopBar = () => {

  const cartProducts = useSelector(selectCartProducts);
  const cartAmount = useSelector(selectCartAmount);
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className={s.TopBar}>
      <span className={s.Title}>Pizza time!</span>
      <img className={s.Logo} alt="logo" src={process.env.PUBLIC_URL + '/logo512.png'} />
      <div className={cn(s.Cart, isCartOpen && s.CartOpen)} onClick={() => setIsCartOpen(true)}>
        <SvgIcon
          className={s.CloseIcon}
          name="close"
          onClick={(e) => {
            e.stopPropagation();
            setIsCartOpen(false);
          }}
          size={30}
        />
        <div className={s.CartAmount}>
          <SvgIcon className={s.CartIcon} name="cart" size={30} />
          <PriceTag className={s.PriceTag} price={cartAmount} />
        </div>
        <div className={s.CartProducts}>
          {cartProducts.length === 0 &&
            <span>Your cart is empty.</span>
          }
          {cartProducts.map(cartProduct =>
            <div className={s.Product}>
              <div className={s.Left}>
                <span className={s.Title}>{cartProduct.title}</span>
                <div className={s.Counter}>
                  <Button className={s.PlusMinus} label="-" onClick={() => dispatch(removeProductFromCart({ product: cartProduct }))} />
                  <span className={s.Count}>{cartProduct.count}</span>
                  <Button className={s.PlusMinus} label="+" onClick={() => dispatch(addProductToCart({ product: cartProduct }))} />
                </div>
              </div>
              <div className={s.Right}>
                <PriceTag price={cartProduct.count * cartProduct.price} />
              </div>
            </div>
          )}
          <Button
            className={s.PlaceOrder}
            isDisabled={cartProducts.length === 0}
            label="Place order"
          // onClick={() => dispatch(addProductToCart({ product: cartProduct }))} 
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;

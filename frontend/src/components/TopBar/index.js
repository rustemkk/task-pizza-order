import cn from 'classnames';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import s from './index.module.scss';
import { selectCartPrice, selectCartProducts, addProductToCart, removeProductFromCart } from '../../slices/cartSlice';
import Counter from '../Counter';
import PriceTag from '../PriceTag';
import SvgIcon from '../SvgIcon';
import Button from '../Button';


const TopBar = () => {

  const cartProducts = useSelector(selectCartProducts);
  const cartPrice = useSelector(selectCartPrice);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className={s.TopBar}>
      <div className={s.TitleLogo} onClick={() => history.push('/')}>
        <span className={s.Title}>Pizza time!</span>
        <img className={s.Logo} alt="logo" src={process.env.PUBLIC_URL + '/logo512.png'} />
      </div>
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
        <div className={s.CartPrice}>
          <SvgIcon className={s.CartIcon} name="cart" size={30} />
          <PriceTag className={s.PriceTag} price={cartPrice} />
        </div>
        <div className={s.CartProducts}>
          {cartProducts.length === 0 &&
            <span>Your cart is empty.</span>
          }
          {cartProducts.map(cartProduct =>
            <div className={s.Product} key={cartProduct.id}>
              <div className={s.Left}>
                <span className={s.Title}>{cartProduct.title}</span>
                <Counter
                  className={s.Counter}
                  count={cartProduct.count}
                  onIncrement={() => dispatch(addProductToCart({ product: cartProduct }))}
                  onDecrement={() => dispatch(removeProductFromCart({ product: cartProduct }))}
                />
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
            onClick={(e) => {
              e.stopPropagation();
              setIsCartOpen(false);
              history.push('/order');
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;

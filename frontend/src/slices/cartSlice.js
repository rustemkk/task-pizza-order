import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import history from '../history';
import { callAPI } from '../utils';


export const slice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: [],
    shippingPrice: 1000,
  },
  reducers: {
    addProductToCart: (state, { payload: { product } }) => {
      const productIndex = state.cartProducts.findIndex(p => p.id === product.id);
      if (productIndex === -1) {
        return { ...state, cartProducts: [...state.cartProducts, { ...product, count: 1 }] };
      }
      state.cartProducts[productIndex].count++;
      return state;
    },
    removeProductFromCart: (state, { payload: { product } }) => {
      const productIndex = state.cartProducts.findIndex(p => p.id === product.id);
      if (productIndex === -1) {
        return state;
      }
      if (state.cartProducts[productIndex].count === 1) {
        return { ...state, cartProducts: state.cartProducts.filter(cp => cp.id !== product.id) };
      }
      state.cartProducts[productIndex].count--
      return state;
    },
    resetCart: (state) => {
      return { ...state, cartProducts: [] };
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  resetCart,
} = slice.actions;

export const selectCart = state => state.cart;

export const selectCartProducts = state => state.cart.cartProducts;

export const selectCartPrice = createSelector(
  selectCart,
  (cart) => {
    const { cartProducts } = cart;
    return cartProducts.reduce((acc, cp) => acc + cp.count * cp.price, 0);
  }
);

export const selectShippingPrice = state => state.cart.shippingPrice;

export default slice.reducer;

export const createOrder = ({ name, zipCode, city, street }) => async (dispatch, getState) => {
  try {
    const cartProducts = selectCartProducts(getState());
    const cartPrice = selectCartPrice(getState());
    const shippingPrice = selectShippingPrice(getState());
    const totalPrice = cartPrice + shippingPrice;
    await callAPI('POST', '/orders', {
      name,
      address: { zipCode, city, street },
      productsPrice: cartPrice,
      shippingPrice,
      totalPrice,
      productsIds: cartProducts.map(cp => cp.id),
    });
    dispatch(resetCart())
    history.push('/order-completed');
  } catch (err) {
    console.error('createOrderErr', err);
  }
}

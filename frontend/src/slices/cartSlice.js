import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import history from '../history';
import { callAPI, callExchangeAPI } from '../utils';
import { get } from 'lodash';


export const slice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: [],
    shippingPrice: 1000,
    usdEurRate: undefined,
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
    loadCurrencyRateSuccess: (state, { payload: { rate } }) => {
      return { ...state, usdEurRate: rate };
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  resetCart,
  loadCurrencyRateSuccess,
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

export const selectUsdEurRate = state => state.cart.usdEurRate;

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
      products: cartProducts,
    });
    dispatch(resetCart());
    history.push('/order-completed');
  } catch (err) {
    console.error('createOrderErr', err);
  }
}

export const loadCurrencyRate = () => async (dispatch) => {
  try {
    const res = await callExchangeAPI();
    const rate = 1/get(res, 'rates.USD');
    dispatch(loadCurrencyRateSuccess({ rate }));
  } catch (err) {
    console.error('loadCurrencyRateErr', err);
  }
}

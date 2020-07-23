import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';


export const slice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: [],
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
      console.log(1, 'product', product);
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
} = slice.actions;

export const selectCart = state => state.cart;

export const selectCartProducts = state => state.cart.cartProducts;

export const selectCartAmount = createSelector(
  selectCart,
  (cart) => {
    const { cartProducts } = cart;
    return cartProducts.reduce((acc, cp) => acc + cp.count * cp.price, 0);
  }
);

export default slice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import { callAPI } from '../utils';


export const slice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    loadProductsSuccess: (state, { payload: { products } }) => {
      return products;
    },
  },
});

export const {
  loadProductsSuccess,
} = slice.actions;

export const selectProducts = state => state.products;

export default slice.reducer;

export const loadProducts = () => async dispatch => {
  try {
    const { products } = await callAPI('GET', '/products');
    dispatch(loadProductsSuccess({ products }))
  } catch (err) {
    console.error('loadProductsErr', err);
  }
}

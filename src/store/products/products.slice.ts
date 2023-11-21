import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from './products.entity';
import productsReducer from './products.reducer';

export const initialState: ProductsState = {
  productList: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: productsReducer,
});

export const {actions, reducer} = productsSlice;

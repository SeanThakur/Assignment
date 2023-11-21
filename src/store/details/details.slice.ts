import {createSlice} from '@reduxjs/toolkit';
import {ProductDetailsState} from './details.entity';
import productDetailsReducer from './details.reducer';

export const initialState: ProductDetailsState = {
  productDetails: null,
};

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: initialState,
  reducers: productDetailsReducer,
});

export const {actions, reducer} = productDetailsSlice;

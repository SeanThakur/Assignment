import {createSlice} from '@reduxjs/toolkit';
import {CartState} from './cart.entity';
import cartReducer from './cart.reducer';

export const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: cartReducer,
});

export const {actions, reducer} = cartSlice;

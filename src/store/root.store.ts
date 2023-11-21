import {configureStore} from '@reduxjs/toolkit';
import {productsActions, productsReducer} from './products';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {productDetailsActions, productDetailsReducer} from './details';
import {cartActions, cartReducer} from './cart';
import {favouriteActions, favouriteReducer} from './favourite';

export const actions = {
  products: productsActions,
  productDetails: productDetailsActions,
  cart: cartActions,
  favourite: favouriteActions,
};

const reducers = {
  products: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  favourite: favouriteReducer,
};

export const store = configureStore({
  reducer: reducers,
  enhancers: [],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

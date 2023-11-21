import {PayloadAction} from '@reduxjs/toolkit';
import {ProductsEntity, ProductsState} from './products.entity';

export default {
  'products/load': (
    state: ProductsState,
    action: PayloadAction<ProductsEntity[]>,
  ) => {
    state.productList = action.payload;
  },
};

import {PayloadAction} from '@reduxjs/toolkit';
import {ProductDetailsEntity, ProductDetailsState} from './details.entity';

export default {
  'productDetails/load': (
    state: ProductDetailsState,
    action: PayloadAction<ProductDetailsEntity>,
  ) => {
    state.productDetails = action.payload;
  },
};

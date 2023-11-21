import {PayloadAction} from '@reduxjs/toolkit';
import {FavouriteEntity, FavouriteState} from './favourite.entity';

export default {
  'favourite/add': (
    state: FavouriteState,
    action: PayloadAction<FavouriteEntity>,
  ) => {
    const existingItem = state.favourite.find(
      (item: FavouriteEntity) => Number(item.id) === Number(action.payload.id),
    );
    if (!existingItem) {
      state.favourite.push({...action.payload, qty: 1});
    }
  },
  'favourite/delete': (
    state: FavouriteState,
    action: PayloadAction<number>,
  ) => {
    const index = state.favourite.findIndex(
      (item: FavouriteEntity) => item.id === action.payload,
    );
    state.favourite.splice(index, 1);
  },
};

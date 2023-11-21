import {createSlice} from '@reduxjs/toolkit';
import {FavouriteState} from './favourite.entity';
import FavouriteReducer from './favourite.reducer';

export const initialState: FavouriteState = {
  favourite: [],
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: initialState,
  reducers: FavouriteReducer,
});

export const {actions, reducer} = favouriteSlice;

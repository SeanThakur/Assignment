import {Dispatch} from '@reduxjs/toolkit';
import {actions} from './favourite.slice';
import {dispatchable} from '../dispatchable';
import {FavouriteEntity} from './favourite.entity';

export type Action = {
  type: string;
  payload?: any;
};

export const productAdd = dispatchable((item: FavouriteEntity) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(actions['favourite/add'](item));
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  };
});

export const productDelete = dispatchable((id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(actions['favourite/delete'](id));
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  };
});

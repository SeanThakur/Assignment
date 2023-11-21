import {Dispatch} from '@reduxjs/toolkit';
import axios from 'axios';
import {actions} from './products.slice';
import {dispatchable} from '../dispatchable';

export type Action = {
  type: string;
  payload?: any;
};

export const getProductsList = dispatchable(() => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const result = axios.get('https://dummyjson.com/products');
      dispatch(actions['products/load']((await result).data.products));
      const data = (await result).data.products;
      return {
        success: true,
        data: data,
      };
    } catch (error) {
      return {
        success: false,
        data: null,
      };
    }
  };
});

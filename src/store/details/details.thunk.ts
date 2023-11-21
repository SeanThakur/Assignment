import {Dispatch} from '@reduxjs/toolkit';
import axios from 'axios';
import {dispatchable} from '../dispatchable';
import {actions} from './details.slice';

export type Action = {
  type: string;
  payload?: any;
};

export const getProductDetailsList = dispatchable((id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const result = axios.get(`https://dummyjson.com/products/${id}`);
      dispatch(actions['productDetails/load']((await result).data));
      const data = (await result).data;
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

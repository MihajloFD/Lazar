import {
  SET_CART,
  SET_PRODUCTS
} from '../../constants/productConstants';
import { combineReducers } from 'redux';

export const productList = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export const cart = (state = [], action) => {
  switch (action.type) {
    case SET_CART:
      return action.payload;
    default:
      return state;
  }
};


const productReducer = combineReducers({ productList, cart });

export default productReducer;

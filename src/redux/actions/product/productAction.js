import { mockFetchProducts } from '../../../server/api/server';
import {
  SET_CART,
  SET_PRODUCTS
} from '../../constants/productConstants';

export const setProducts = data => ({
  type: SET_PRODUCTS,
  payload: data
});

export const setCart = data => ({
  type: SET_CART,
  payload: data
});


export const fetchProducts = (email, password) => (dispatch) => {
  return mockFetchProducts(email, password)
    .then((data) => dispatch(setProducts(data)))
    .catch(error => console.log(error));
};
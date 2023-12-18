import { combineReducers } from 'redux';
import productReducer from './products/productReducer';
import appReducer from './app/appReducer';


export const rootReducer = combineReducers({
  products: productReducer,
  app: appReducer
});

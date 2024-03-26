import { combineReducers } from 'redux';
import productReducer from './products/productReducer';
import appReducer from './app/appReducer';
import boardReducer from './board/boardReducer';


export const rootReducer = combineReducers({
  products: productReducer,
  app: appReducer,
  board: boardReducer
});


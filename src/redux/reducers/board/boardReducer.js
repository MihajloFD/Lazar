import {
    SET_TO_DO,
    SET_IN_PROGRESS,
    SET_DONE
  } from '../../constants/boardConstants';
  import { combineReducers } from 'redux';

export const toDo = (state = [], action) => {
    switch (action.type) {
      case SET_TO_DO:
        return action.payload;
      default:
        return state;
    }
  };

  export const inProgress= (state = [], action) => {
    switch (action.type) {
      case SET_IN_PROGRESS:
        return action.payload;
      default:
        return state;
    }
  };

  export const done = (state = [], action) => {
    switch (action.type) {
      case SET_DONE:
        return action.payload;
      default:
        return state;
    }
  };

  const boardReducer = combineReducers({ toDo, inProgress, done });

  export default boardReducer;
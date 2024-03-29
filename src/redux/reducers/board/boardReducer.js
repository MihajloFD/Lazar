import {
  SET_TO_DO,
  SET_IN_PROGRESS,
  SET_TASKS,
  SET_TASK_LISTS
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

export const inProgress = (state = [], action) => {
  switch (action.type) {
    case SET_IN_PROGRESS:
      return action.payload;
    default:
      return state;
  }
};

export const tasks = (state = [], action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.payload;
    default:
      return state;
  }
};

export const initialState = [
  { id: 1, listName: 'To do' },
  { id: 2, listName: 'In progress' },
  { id: 3, listName: 'Done'}
]




export const taskLists = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK_LISTS:
      return action.payload;
    default:
      return state;
  }
};





const boardReducer = combineReducers({ toDo, inProgress, taskLists, tasks });

export default boardReducer;
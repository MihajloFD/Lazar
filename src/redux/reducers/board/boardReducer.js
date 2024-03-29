import {
  SET_TASKS,
  SET_TASK_LISTS,
  SET_TASK_ID
} from '../../constants/boardConstants';
import { combineReducers } from 'redux';

const tasksInitialState = [
  { id: 1, description: 'To do task', taskListId: 1 }
]
export const tasks = (state = tasksInitialState, action) => {
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
  { id: 3, listName: 'Done' }
]




export const taskLists = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK_LISTS:
      return action.payload;
    default:
      return state;
  }
};

export const taskId = (state = 0, action) => {
  switch (action.type) {
    case SET_TASK_ID:
      return action.payload;
    default:
      return state;
  }
};





const boardReducer = combineReducers({ taskLists, tasks, taskId });

export default boardReducer;
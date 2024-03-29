import { SET_TASK_LISTS, SET_TASKS, SET_TASK_ID } from "../../constants/boardConstants";

export const setTasks = data => ({
  type: SET_TASKS,
  payload: data
});

export const setTaskLists = data => ({
  type: SET_TASK_LISTS,
  payload: data
});

export const setTaskId = id => ({
  type: SET_TASK_ID,
  payload: id
});
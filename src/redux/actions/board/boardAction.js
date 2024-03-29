import { SET_TASK_LISTS, SET_TASKS } from "../../constants/boardConstants";

export const setTasks = data => ({
  type: SET_TASKS,
  payload: data
});

export const setTaskLists = data => ({
  type: SET_TASK_LISTS,
  payload: data
});
import { SET_TO_DO, SET_DONE, SET_IN_PROGRESS } from "../../constants/boardConstants";

export const setToDo= data => ({
    type: SET_TO_DO,
    payload: data
  });

  export const setInProgress= data => ({
    type: SET_IN_PROGRESS,
    payload: data
  });

  export const setDone= data => ({
    type: SET_DONE,
    payload: data
  });
import { combineReducers } from "redux";
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "../../constants/appConstants";

const initialStateAuth = {
  user: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, loading: true, error: null };

    case AUTH_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };

    case AUTH_FAILURE:
      return { ...state, loading: false, user: null, error: action.payload };

    default:
      return state;
  }
};

const initialStateInitialize = {
  initialized: false,
  loading: false,
  error: false,
};

const initializeReducer = (state = initialStateInitialize, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, loading: true, error: false, initialized: false };

    case AUTH_SUCCESS:
      return { ...state, loading: false, error: false, initialized: true, };

    case AUTH_FAILURE:
      return { ...state, loading: false, error: action.payload, initialized: false };

    default:
      return state;
  }
};

export default combineReducers({ authReducer, initializeReducer })

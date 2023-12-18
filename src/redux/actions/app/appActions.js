import { INITIALIZE_FAILURE, INITIALIZE_REQUEST, INITIALIZE_SUCCESS, AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "../../constants/appConstants";
import { mockLogin } from "../../../server/api/server";
import { fetchProducts } from "../product/productAction";

export const authRequest = () => ({
    type: AUTH_REQUEST,
});

export const authSuccess = (user) => ({
    type: AUTH_SUCCESS,
    payload: user,
});

export const authFailure = (error) => ({
    type: AUTH_FAILURE,
    payload: error,
});

export const initializeRequest = () => ({
    type: INITIALIZE_REQUEST,
});

export const initializeSuccess = () => ({
    type: INITIALIZE_SUCCESS,
});

export const initializeFailure = () => ({
    type: INITIALIZE_FAILURE,
});


export const authUser = (email, password) => (dispatch) => {
    dispatch(authRequest());

    return mockLogin(email, password)
        .then((user) => dispatch(authSuccess(user)))
        .catch((error) => dispatch(authFailure(error)));
};

export const appInitialize = () => {
    return dispatch => {
        dispatch(initializeRequest());
        return Promise.all([
            dispatch(fetchProducts())
        ]).then(() => {
            dispatch(initializeSuccess());
        }).catch(() => {
            dispatch(initializeFailure());
        });
    };
}
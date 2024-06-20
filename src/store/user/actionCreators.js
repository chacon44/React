import * as actions from "./actionTypes";

export const loginSuccessAC = ({ token, name, email }) => ({
  type: actions.LOGIN_SUCCESS,
  payload: { token, name, email },
});

export const loginFailureAC = () => ({
  type: actions.LOGIN_FAILURE,
});

export const logoutAC = () => ({
  type: actions.LOGOUT,
});

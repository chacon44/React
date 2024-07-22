import { GET_CURRENT_USER, LOGIN_USER, LOGOUT_USER } from "./types";

export const setUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const getCurrentUser = (user) => {
  return {
    type: GET_CURRENT_USER,
    payload: user,
  };
};

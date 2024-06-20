import * as actions from "./actionTypes";

const userInitialState = {
  isAuth: false,
  name: "",
  email: "",
  token: localStorage.getItem("token") || "",
};

export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case actions.LOGIN_FAILURE:
      return { ...state, isAuth: false, name: "", email: "", token: "" };
    case actions.LOGOUT:
      localStorage.clear(); //##
      return {
        isAuth: false,
        name: "",
        email: "",
        token: "",
      };
    default:
      return state;
  }
}

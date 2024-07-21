import { SET_USER, REMOVE_USER } from "./types";

const initialState = {
  isAuth: false,
  user: {
    name: "",
    email: "",
    password: "",
    token: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        isAuth: false,
        user: {
          name: "",
          email: "",
          password: "",
          token: "",
        },
      };
    default:
      return state;
  }
};

export default userReducer;

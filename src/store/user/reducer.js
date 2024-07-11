import { SET_USER, REMOVE_USER } from "./types";

const initialState = {
  isAuth: false,
  name: "",
  email: "",
  token: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuth: true,
        ...action.payload,
      };
    case REMOVE_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;

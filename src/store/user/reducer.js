import { ADMIN_CREDENTIALS, ROLES } from "../../constants";
import { GET_CURRENT_USER, LOGIN_USER, LOGOUT_USER } from "./types";

const userInitialState = {
  isAuth: false,
  role: "",
  user: {
    name: "",
    email: "",
    password: "",
    token: "",
  },
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuth: true,
        role:
          action.payload.email === ADMIN_CREDENTIALS.EMAIL
            ? ROLES.ADMIN
            : ROLES.USER,
        user: {
          ...state.user,
          name:
            action.payload.role === ROLES.ADMIN
              ? ROLES.ADMIN
              : action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          token: action.payload.token,
        },
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        role: "",
        user: {
          name: "",
          email: "",
          password: "",
          token: "",
        },
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        isAuth: true,
        role: action.payload.role,
      };
    default:
      return state;
  }
};

export default userReducer;

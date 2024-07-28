import { GET_CURRENT_USER, LOGIN_USER, LOGOUT_USER } from "./types";
import { getCurrentUser, loginService, registerUserAPI } from "../../services";
import { ADMIN_CREDENTIALS, API_URL, ROLES } from "../../constants";
import { ALERT_TEXT } from "../../components/Login/loginStrings";
import { ERROR_TEXT } from "../../components/Registration/registrationStrings";

const setUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const getCurrentUserThunk = (token) => async (dispatch) => {
  try {
    const response = await getCurrentUser(token);
    dispatch({
      type: GET_CURRENT_USER,
      payload: response.result,
    });
  } catch (error) {
    console.error("Error getting current user:", error);
  }
};

export const logoutUserThunk = (token) => async (dispatch) => {
  try {
    const response = await fetch(API_URL.LOGOUT, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });

    if (response.ok) {
      dispatch({
        type: LOGOUT_USER,
      });
    } else {
      console.error("Failed to logout:", response.status);
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export const loginUserThunk = (user) => async (dispatch) => {
  try {
    const result = await loginService(user);
    if (result.successful) {
      if (
        user.email === ADMIN_CREDENTIALS.EMAIL &&
        user.password === ADMIN_CREDENTIALS.PASSWORD
      ) {
        user.role = ROLES.ADMIN;
      }
      dispatch(
        setUser({
          isAuth: true,
          name: result.user.name,
          email: result.user.email,
          password: user.password,
          role: user.role,
          token: result.result,
        }),
      );
    } else {
      alert(result.message || ALERT_TEXT.LOGIN_FAILED);
    }
  } catch (error) {
    alert(ALERT_TEXT.LOGIN_ERROR);
  }
};

export const registerUserThunk = (newUser) => async () => {
  try {
    const result = await registerUserAPI(newUser);

    if (result.successful) {
      return { success: true };
    } else {
      alert(result.message || ALERT_TEXT.REGISTRATION_FAILED);
      return { success: false };
    }
  } catch (error) {
    if (error.message === ALERT_TEXT.EMAIL_ALREADY_EXISTS) {
      console.log(error.message);
      alert(ALERT_TEXT.EMAIL_ALREADY_EXISTS);
    } else {
      console.error(ERROR_TEXT.REGISTRATION_ERROR, error);
      alert(ALERT_TEXT.REGISTRATION_FAILED);
    }
    return { success: false };
  }
};

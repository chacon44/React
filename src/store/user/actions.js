import { SET_USER, REMOVE_USER } from "./types";
import { TOKEN, USER_INFO } from "../../constants";
import { ERROR_TEXT } from "../../appStrings";

export const setUser = (user) => {
  const token = localStorage.getItem(TOKEN);
  const userInfo = localStorage.getItem(USER_INFO);
  try {
    const parsedUserInfo = JSON.parse(userInfo);
    user = {
      name: parsedUserInfo.name,
      email: parsedUserInfo.email,
      token: token,
    };
  } catch (error) {
    console.error(ERROR_TEXT.TOKEN_PARSING_ERROR, error);
  }
  return {
    type: SET_USER,
    payload: user,
  };
};

export const removeUser = () => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(USER_INFO);
  return {
    type: REMOVE_USER,
  };
};

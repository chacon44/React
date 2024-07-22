import { GET_CURRENT_USER } from "./types";
import { getCurrentUser } from "../../services";
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

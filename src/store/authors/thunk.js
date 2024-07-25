import { ADD_AUTHOR, GET_AUTHORS } from "./types";
import * as services from "./../../services";

export const fetchAuthors = () => async (dispatch) => {
  try {
    const response = await services.getAuthorsAPI();
    dispatch({
      type: GET_AUTHORS,
      payload: response.result,
    });
  } catch (error) {
    console.error("Error fetching authors:", error);
  }
};

export const addAuthor = (data, token) => async (dispatch) => {
  try {
    const response = await services.addAuthorAPI(data, token);
    dispatch({
      type: ADD_AUTHOR,
      payload: response.result,
    });
  } catch (error) {
    console.error("Error adding author:", error);
  }
};

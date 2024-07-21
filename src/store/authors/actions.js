import { GET_AUTHORS, ADD_AUTHOR } from "./types";
import { getAuthorsAPI } from "../../services";

export const getAuthors = () => {
  return async (dispatch, getState) => {
    try {
      const apiAuthors = await getAuthorsAPI();
      const { authors } = getState();
      const combinedAuthors = [...apiAuthors.result, ...authors.localAuthors];

      dispatch({
        type: GET_AUTHORS,
        payload: combinedAuthors,
      });
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };
};

export const addAuthor = (author) => {
  return (dispatch, getState) => {
    const { authors } = getState();
    const updatedLocalAuthors = [...authors.localAuthors, author];

    dispatch({
      type: ADD_AUTHOR,
      payload: updatedLocalAuthors,
    });
  };
};

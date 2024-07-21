import { GET_AUTHORS, ADD_AUTHOR } from "./types";
import { getAuthorsAPI } from "../../services";

export const getAuthors = () => {
  return async (dispatch, getState) => {
    try {
      console.log("Fetching authors from API...");
      const apiAuthors = await getAuthorsAPI();
      console.log("Fetched authors from API:", apiAuthors.result);

      const { authors } = getState();
      const combinedAuthors = [...apiAuthors.result, ...authors.localAuthors];
      console.log("Fetched authors from API:", apiAuthors.localAuthors);

      dispatch({
        type: GET_AUTHORS,
        payload: combinedAuthors,
      });
      console.log(
        "Dispatched GET_AUTHORS action with payload:",
        combinedAuthors,
      );
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };
};

export const addAuthor = (author) => {
  return (dispatch, getState) => {
    const { authors } = getState();
    const updatedLocalAuthors = [...authors.localAuthors, author];
    console.log("Adding new author:", author);
    console.log("Updated local authors list:", updatedLocalAuthors);

    dispatch({
      type: ADD_AUTHOR,
      payload: updatedLocalAuthors,
    });
    console.log(
      "Dispatched ADD_AUTHOR action with payload:",
      updatedLocalAuthors,
    );
  };
};

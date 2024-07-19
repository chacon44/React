import { GET_AUTHORS, ADD_AUTHOR } from "./types";
import { CREATED_AUTHORS } from "../../constants";
export const getAuthors = (authors) => {
  return {
    type: GET_AUTHORS,
    payload: authors,
  };
};

export const addAuthor = (author) => {
  return (dispatch) => {
    const authors = JSON.parse(localStorage.getItem(CREATED_AUTHORS)) || [];
    const updatedAuthors = [...authors, author];
    localStorage.setItem(CREATED_AUTHORS, JSON.stringify(updatedAuthors));
    dispatch({
      type: ADD_AUTHOR,
      payload: author,
    });
  };
};

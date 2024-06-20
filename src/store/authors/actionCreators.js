import { ADD_AUTHOR, GET_AUTHORS } from "./actionTypes";

export const addAuthorAC = (author) => ({
  type: ADD_AUTHOR,
  payload: author,
});

export const getAuthorsAC = (authors) => ({
  type: GET_AUTHORS,
  payload: authors,
});

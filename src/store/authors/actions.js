import { SAVE_AUTHORS, ADD_AUTHOR, DELETE_AUTHOR } from "./types";

export const saveAuthors = (authors) => ({
  type: SAVE_AUTHORS,
  payload: authors,
});

export const addAuthor = (author) => ({
  type: ADD_AUTHOR,
  payload: author,
});

export const deleteAuthor = (author) => ({
  type: DELETE_AUTHOR,
  payload: author,
});

import { GET_AUTHORS, ADD_AUTHOR, DELETE_AUTHOR } from "./types";

//this takes authors, which is an array and returns an action object defined within {} which contains the type and the payload
//payload is the returning object
export const getAuthors = (authors) => ({
  type: GET_AUTHORS,
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

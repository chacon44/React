import { GET_AUTHORS, ADD_AUTHOR } from "./types";

const authorsInitialState = [];

const authorReducer = (state = authorsInitialState, action) => {
  switch (action.type) {
    case ADD_AUTHOR:
      return [...state, action.payload];
    case GET_AUTHORS:
      return action.payload;
    default:
      return state;
  }
};

export default authorReducer;

import { GET_AUTHORS, ADD_AUTHOR } from "./types";

const initialState = {
  apiAuthors: [],
  localAuthors: [],
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORS:
      return {
        ...state,
        apiAuthors: action.payload.filter(
          (author) =>
            !state.localAuthors.some(
              (localAuthor) => localAuthor.id === author.id,
            ),
        ),
      };
    case ADD_AUTHOR:
      return {
        ...state,
        localAuthors: action.payload,
      };
    default:
      return state;
  }
};

export default authorReducer;

import { SAVE_COURSES, GET_COURSES, ADD_COURSE, DELETE_COURSE } from "./types";

const initialState = [];

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return action.payload;
    case SAVE_COURSES:
      return action.payload;
    case ADD_COURSE:
      return [...state, action.payload];
    case DELETE_COURSE:
      return state.filter((course) => course.id !== action.payload);
    default:
      return state;
  }
};

export default coursesReducer;

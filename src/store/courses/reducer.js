import {
  SAVE_COURSE,
  GET_COURSES,
  ADD_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
} from "./types";

const initialState = [];

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return action.payload;
    case SAVE_COURSE:
      return {
        ...state,
        courses: action.payload,
      };
    case ADD_COURSE:
      return [...state, action.payload];
    case DELETE_COURSE:
      return state.filter((course) => course.id !== action.payload);
    case UPDATE_COURSE:
      return state.map((course) =>
        course.id === action.payload.id ? action.payload : course,
      );
    default:
      return state;
  }
};

export default coursesReducer;

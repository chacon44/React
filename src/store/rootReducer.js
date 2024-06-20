import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { coursesReducer } from "./courses/reducer.js";

const rootReducer = combineReducers({
  courses: coursesReducer,
});

export const store = configureStore({ reducer: rootReducer });

import { combineReducers, legacy_createStore } from "redux";
import userReducer from "./user/reducer";
import authorReducer from "./authors/reducer";
import coursesReducer from "./courses/reducer";

const store = legacy_createStore(
  combineReducers({
    user: userReducer,
    author: authorReducer,
    courses: coursesReducer,
  }),
);

export default store;

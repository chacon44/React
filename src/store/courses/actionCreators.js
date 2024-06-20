import {
  SAVE_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
  GET_COURSES,
} from "./actionTypes";

export const addCourseAC = (course) => ({
  type: SAVE_COURSE,
  payload: course,
});

export const deleteCourseAC = (courseId) => ({
  type: DELETE_COURSE,
  payload: courseId,
});

export const updateCourseAC = (course) => ({
  type: UPDATE_COURSE,
  payload: course,
});

export const getCoursesAC = (courses) => ({
  type: GET_COURSES,
  payload: courses,
});

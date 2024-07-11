import { SET_COURSES, ADD_COURSE, DELETE_COURSE, UPDATE_COURSE } from "./types";

export const setCourses = (courses) => ({
  type: SET_COURSES,
  payload: courses,
});

export const addCourse = (course) => ({
  type: ADD_COURSE,
  payload: course,
});

export const deleteCourse = (courseId) => ({
  type: DELETE_COURSE,
  payload: courseId,
});

export const updateCourse = (course) => ({
  type: UPDATE_COURSE,
  payload: course,
});

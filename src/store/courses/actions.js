import { SAVE_COURSES, GET_COURSES, ADD_COURSE, DELETE_COURSE } from "./types";

export const saveCourses = (payload) => ({
  type: SAVE_COURSES,
  payload,
});

export const getCourses = (courses) => ({
  type: GET_COURSES,
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

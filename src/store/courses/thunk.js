import * as services from "./../../services";
import {
  GET_COURSES,
  DELETE_COURSE,
  SAVE_COURSE,
  UPDATE_COURSE,
} from "./types";

export const fetchCourses = () => async (dispatch) => {
  try {
    const response = await services.getAllCoursesAPI();
    dispatch({
      type: GET_COURSES,
      payload: response.result,
    });
  } catch (error) {
    console.error(`Error getting courses: ${error}`);
  }
};

export const addCourseFuntion = (data, token) => async (dispatch) => {
  try {
    const response = await services.addCourseAPI(data, token);
    dispatch({
      type: SAVE_COURSE,
      payload: response.result,
    });
  } catch (error) {
    console.error(`Error adding course: ${error}`);
  }
};

export const fetchCourseById = (courseId) => async () => {
  try {
    const response = await services.getCourseByIdAPI(courseId);
    return response.result;
  } catch (error) {
    console.error(`Error fetching course: ${error}`);
  }
};

export const updateCourse = (courseId, data, token) => async (dispatch) => {
  try {
    const response = await services.updateCourseAPI(courseId, data, token);
    dispatch({
      type: UPDATE_COURSE,
      payload: response.result,
    });
  } catch (error) {
    console.error(`Error updating course: ${error}`);
  }
};

export const deleteCourse = (courseId, token) => async (dispatch) => {
  try {
    const response = await services.deleteCourseAPI(courseId, token);
    if (response.successful) {
      dispatch({
        type: DELETE_COURSE,
        payload: courseId,
      });
    }
  } catch (error) {
    console.error(`Error deleting course: ${error}`);
  }
};

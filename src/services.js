import axios from "axios";
import { API_URL } from "./constants";

export const loginService = async (user) => {
  const response = await axios.post(API_URL.LOGIN, user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const token = response.data.token;
  return { ...response.data, token };
};

export async function getCurrentUser(token) {
  try {
    const response = await axios.get(API_URL.GET_CURRENT_USER, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCoursesAPI() {
  try {
    const response = await fetch(API_URL.ALL_COURSES);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function deleteCourseAPI(id, token) {
  try {
    const response = await fetch(API_URL.DELETE_COURSE(id), {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function addCourseAPI(data, token) {
  try {
    const response = await fetch(API_URL.ADD_COURSE, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getCourseByIdAPI(courseId) {
  try {
    const response = await fetch(API_URL.GET_COURSE(courseId));
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function updateCourseAPI(courseId, data, token) {
  try {
    const response = await fetch(API_URL.EDIT_COURSE(courseId), {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getAuthorsAPI() {
  try {
    const response = await fetch(API_URL.ALL_AUTHORS);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function addAuthorAPI(data, token) {
  try {
    const response = await fetch(API_URL.ADD_AUTHOR, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function registerUserAPI(user) {
  try {
    const response = await fetch(API_URL.REGISTER, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

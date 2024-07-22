import axios from "axios";
import { API_URL } from "./constants";

export const getCoursesService = async () => {
  const response = await axios.get(API_URL.ALL_COURSES);
  return response.data;
};

export const getAuthorsAPI = async () => {
  const response = await axios.get(API_URL.ALL_AUTHORS);
  return response.data;
};

export const loginService = async (user) => {
  const response = await axios.post(API_URL.LOGIN, user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export async function getCurrentUser(token) {
  try {
    const response = await axios.get(API_URL.GET_CURRENT_USER, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function logoutUserAPI(token) {
  try {
    await fetch(API_URL.LOGOUT, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

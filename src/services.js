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

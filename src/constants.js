export const GLOBAL_PARAMETERS = {
  PASSWORD_LENGTH: 6,
};

export const BASE_URL = "http://localhost:4000";
export const COURSES = "/courses";
export const AUTHORS = "/authors";
export const USERS = "/users";

export const PATH_URIS = {
  REGISTRATION: "/registration",
  LOGIN: "/login",
  COURSES_LIST: "/courses",
  ADD_COURSE: "/courses/add",
  UPDATE_COURSE: "/courses/update/:courseId",
  COURSE_INFO: "/courses/:courseId",
};

export const API_URL = {
  // AUTH
  LOGIN: `${BASE_URL}/login`,
  LOGOUT: `${BASE_URL}/logout`,
  REGISTER: `${BASE_URL}/register`,

  //COURSES
  ALL_COURSES: `${BASE_URL + COURSES}/all`,
  FILTER_COURSES: `${BASE_URL + COURSES}/filter`,
  ADD_COURSE: `${BASE_URL + COURSES}/add`,
  GET_COURSE: (id) => `${BASE_URL + COURSES}/${id}`,
  EDIT_COURSE: (id) => `${BASE_URL + COURSES}/${id}`,
  DELETE_COURSE: (id) => `${BASE_URL + COURSES}/${id}`,

  //AUTHORS
  ALL_AUTHORS: `${BASE_URL + AUTHORS}/all`,
  ADD_AUTHOR: `${BASE_URL + AUTHORS}/add`,
  GET_AUTHOR: (id) => `${BASE_URL + AUTHORS}/${id}`,
  EDIT_AUTHOR: (id) => `${BASE_URL + AUTHORS}/${id}`,
  DELETE_AUTHOR: (id) => `${BASE_URL + AUTHORS}/${id}`,

  //USERS
  GET_CURRENT_USER: `${BASE_URL + USERS}/me`,
};

export const TOKEN = "token";
export const USER_INFO = "User info";
export const CREATED_AUTHORS = "authors";

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

export const ADMIN_CREDENTIALS = {
  EMAIL: "admin@email.com",
  PASSWORD: "admin123",
};

export const BUTTON_TEXT = {
  ADD_AUTHOR: "Add author",
  ADD_COURSE: "Add new course",
  CREATE_AUTHOR: "Create author",
  LOGOUT: "Logout",
  DELETE_AUTHOR: "Delete author",
  SEARCH: "Search",
  SHOW_COURSE: "Show Course",
  REGISTER: "Registrate",
  LOGIN: "Login",
};

export const PLACEHOLDER_TEXT = {
  SEARCH_COURSE: "Enter course name or id...",
  TITLE: "Enter title...",
  DESCRIPTION: "Enter description...",
  AUTHOR_NAME: "Enter author name...",
  DURATION: "Enter duration in minutes...",
  USER_NAME: "Enter name",
  USER_EMAIL: "Enter email",
  USER_PASSWORD: "Enter password",
};

export const LABEL_TEXT = {
  TITLE: "Title",
  DESCRIPTION: "Description",
  AUTHOR_NAME: "Author name",
  DURATION: "Duration",
  COURSE_AUTHORS: "Course Authors",
  AUTHORS: "Authors",
  ADD_AUTHOR: "Add author",
  REGISTRATION: "Registration",
  LOGIN: "Login",
  USER_NAME: "Name",
  USER_EMAIL: "Email",
  USER_PASSWORD: "Password",
};

export const USER_INFO = {
  USERNAME: "Antonio Chacon",
};

export const BANNER_TEXT = {
  COURSES: "Courses",
};

export const MESSAGES = {
  AUTHORS_EMPTY_LIST: "The authors list is empty",
  COURSES_EMPTY_LIST: "The courses list is empty",
  ALREADY_ADDED_AUTHOR: "This author is already added to the course.",
  AUTHOR_NOT_VALID: (minLength) =>
    `The author's name must be at least ${minLength} characters long and cannot be empty.`,
  DUPLICATED_AUTHOR: "An author with this name already exists.",
  NOT_VALID_COURSE: "Please fill out all fields correctly.",
};

export const URI = {
  REGISTRATION: "/registration",
  COURSE_LIST: "/courses",
  COURSE_CREATION: "/course-creation",
  LOGIN: "/login",
  COURSE_INFO: "/course-info",
};

export const OTHER = {
  LOGIN_TEXT: "If you have an account you can ",
  REGISTER_TEXT: "If you don't have an account you can ",
};

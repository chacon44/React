export const BUTTON_TEXT = {
  ADD_AUTHOR: "Add author",
  ADD_COURSE: "Add new course",
  CREATE_AUTHOR: "Create author",
  LOGOUT: "Logout",
  DELETE_AUTHOR: "Delete author",
  SEARCH: "Search",
  SHOW_COURSE: "Show Course",
};

export const PLACEHOLDER_TEXT = {
  SEARCH_COURSE: "Enter course name or id...",
  TITLE: "Enter title...",
  DESCRIPTION: "Enter description...",
  AUTHOR_NAME: "Enter author name...",
  DURATION: "Enter duration in minutes...",
};

export const LABEL_TEXT = {
  TITLE: "Title",
  DESCRIPTION: "Description",
  AUTHOR_NAME: "Author name",
  DURATION: "Duration",
  COURSE_AUTHORS: "Course Authors",
  AUTHORS: "Authors",
  ADD_AUTHOR: "Add author",
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

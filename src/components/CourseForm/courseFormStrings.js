export const BUTTON_TEXT = {
  CREATE_COURSE: "Create Course",
  CREATE_AUTHOR: "Create Author",
  ADD_AUTHOR: "Add Author",
  DELETE_AUTHOR: "Delete Author",
  CANCEL: "Cancel creation",
  UPDATE_COURSE: "Update course",
};

export const PLACEHOLDER_TEXT = {
  ENTER_TITLE: "Enter title",
  ENTER_DESCRIPTION: "Enter description",
  ENTER_AUTHOR_NAME: "Enter author name",
  ENTER_DURATION: "Enter duration in minutes",
};

export const LABEL_TEXT = {
  TITLE: "Title",
  DESCRIPTION: "Description",
  AUTHOR_NAME: "Author name",
  DURATION: "Duration",
};

export const TITLE_TEXT = {
  AUTHORS: "Authors",
  ADD_AUTHOR: "Add author",
  COURSE_AUTHORS: "Course authors",
  DURATION: "Duration",
};

export const getAlertText = () => ({
  AUTHOR_NAME_TOO_SHORT: `Author name must be at least ${PARAMETERS.AUTHOR_MIN_LENGTH} characters long.`,
  TITLE_REQUIRED: "Title is required.",
  DESCRIPTION_REQUIRED: "Description is required.",
  DESCRIPTION_TOO_SHORT: `Description must be at least ${PARAMETERS.DESCRIPTION_MIN_LENGTH} characters long.`,
  DURATION_TOO_SHORT: `Duration must be greater than ${PARAMETERS.DURATION_MIN_LENGTH}.`,
  AUTHOR_REQUIRED: "At least one author must be selected.",
  FILL_ALL_FIELDS: "Please, fill all fields correctly",
  NO_AUTHORS: "No authors available to choose",
  NO_AUTHORS_SELECTED: "No authors selected in this course",
});

export const PARAMETERS = {
  AUTHOR_MIN_LENGTH: 4,
  DESCRIPTION_MIN_LENGTH: 2,
  DURATION_MIN_LENGTH: 0,
};

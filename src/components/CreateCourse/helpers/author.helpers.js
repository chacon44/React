import { MESSAGES } from "../../../constants";
import { v4 as uuidv4 } from "uuid";

export const AddAuthorToCourse = (
  authorId,
  authors,
  courseAuthors,
  setCourseAuthors,
) => {
  const authorToAdd = authors.find((author) => author.id === authorId);

  if (!authorToAdd) return;

  if (courseAuthors.some((author) => author.id === authorId)) {
    alert(MESSAGES.ALREADY_ADDED_AUTHOR);
    return;
  }

  setCourseAuthors((prevAuthors) => [...prevAuthors, authorToAdd]);
};

export const CreateAuthor = (
  newAuthorName,
  authors,
  addAuthor,
  setNewAuthorName,
) => {
  if (!newAuthorName.trim() || newAuthorName.trim().length < 4) {
    alert(MESSAGES.AUTHOR_NOT_VALID("4"));
    return;
  }

  const existingAuthor = authors.find(
    (author) => author.name.toLowerCase() === newAuthorName.toLowerCase(),
  );
  if (existingAuthor) {
    alert(MESSAGES.DUPLICATED_AUTHOR);
    return;
  }

  const newAuthor = { id: uuidv4(), name: newAuthorName };
  addAuthor(newAuthor);
  setNewAuthorName("");
};

export const CreateNewCourse = (
  title,
  description,
  duration,
  courseAuthors,
  addCourse,
  onCourseCreated,
) => {
  if (
    !title.trim() ||
    description.trim().length < 4 ||
    isNaN(Number(duration)) ||
    Number(duration) <= 0 ||
    courseAuthors.length === 0
  ) {
    alert(MESSAGES.NOT_VALID_COURSE);
    return;
  }
  const newCourse = {
    id: uuidv4(),
    title,
    description,
    creationDate: new Date().toISOString().split("T")[0],
    duration: Number(duration),
    authors: courseAuthors.map((author) => author.id),
  };
  addCourse(newCourse);
  onCourseCreated();
};

export const RemoveAuthorFromSelectList = (
  authorId,
  courseAuthors,
  setCourseAuthors,
  authors,
  setAuthors,
) => {
  const authorToRemove = courseAuthors.find((author) => author.id === authorId);

  setCourseAuthors(courseAuthors.filter((author) => author.id !== authorId));

  if (authorToRemove && !authors.some((author) => author.id === authorId)) {
    setAuthors((prevAuthors) => [...prevAuthors, authorToRemove]);
  }
};

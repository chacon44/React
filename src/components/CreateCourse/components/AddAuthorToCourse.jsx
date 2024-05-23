import { MESSAGES } from "../../../helpers/constants";

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

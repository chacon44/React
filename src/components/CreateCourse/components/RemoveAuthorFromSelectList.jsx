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

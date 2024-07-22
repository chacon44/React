const getAuthors = (authorsIdArray, combinedAuthorsList) => {
  const authorsArray = [];

  authorsIdArray.forEach((authorId) => {
    const author = combinedAuthorsList.find((author) => author.id === authorId);
    if (author) {
      authorsArray.push(author.name);
    }
  });

  return authorsArray;
};

export default getAuthors;

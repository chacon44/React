export const AddAuthorToCourse = (authorId, authors, courseAuthors, setCourseAuthors) => {
    const authorToAdd = authors.find(author => author.id === authorId);

    if (!authorToAdd) return;

    if (courseAuthors.some(author => author.id === authorId)) {
        alert('This author is already added to the course.');
        return;
    }

    setCourseAuthors(prevAuthors => [...prevAuthors, authorToAdd]);
};

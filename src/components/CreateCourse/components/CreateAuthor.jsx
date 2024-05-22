import { v4 as uuidv4 } from 'uuid';

export const CreateAuthor = (newAuthorName, authors, addAuthor, setNewAuthorName) => {
    if (!newAuthorName.trim() || newAuthorName.trim().length < 2) {
        alert("The author's name must be at least 2 characters long and cannot be empty.");
        return;
    }

    const existingAuthor = authors.find(author => author.name.toLowerCase() === newAuthorName.toLowerCase());
    if (existingAuthor) {
        alert('An author with this name already exists.');
        return;
    }

    const newAuthor = { id: uuidv4(), name: newAuthorName };
    addAuthor(newAuthor);
    setNewAuthorName('');
};

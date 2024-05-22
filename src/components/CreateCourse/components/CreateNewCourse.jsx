import { v4 as uuidv4 } from 'uuid';

export const CreateNewCourse = (title, description, duration, courseAuthors, addCourse, onCourseCreated) => {
    if (!title.trim() || description.trim().length < 2 || isNaN(Number(duration)) || Number(duration) <= 0 || courseAuthors.length === 0) {
        alert("Please fill out all fields correctly.");
        return;
    }
    const newCourse = {
        id: uuidv4(),
        title,
        description,
        creationDate: new Date().toISOString().split('T')[0],
        duration: Number(duration),
        authors: courseAuthors.map(author => author.id),
    };
    addCourse(newCourse);
    onCourseCreated();
};

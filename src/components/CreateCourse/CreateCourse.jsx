import React, { useState } from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { formatDuration } from '../../common/Tools/formatDuration.jsx';
import './CreateCourse.css';
import { AddAuthorToCourse } from './components/AddAuthorToCourse.jsx';
import { CreateAuthor } from './components/CreateAuthor.jsx';
import { RemoveAuthorFromSelectList } from './components/RemoveAuthorFromSelectList.jsx';
import { CreateNewCourse } from './components/CreateNewCourse.jsx';

import { useCourseAuthorContext } from '../../helpers/CourseAuthorStore.jsx';

export const CreateCourse = ({ onCourseCreated }) => {
    const { addCourse, authors, addAuthor, setAuthors } = useCourseAuthorContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [courseAuthors, setCourseAuthors] = useState([]);
    const [newAuthorName, setNewAuthorName] = useState('');

    const handleAddAuthorToCourse = (authorId) => {
        AddAuthorToCourse(authorId, authors, courseAuthors, setCourseAuthors);
    };

    const handleRemoveAuthorFromSelectList = (authorId) => {
        RemoveAuthorFromSelectList(authorId, courseAuthors, setCourseAuthors, authors, setAuthors);
    };

    const handleCreateAuthor = () => {
        CreateAuthor(newAuthorName, authors, addAuthor, setNewAuthorName);
    };

    const handleCreateCourse = () => {
        CreateNewCourse(title, description, duration, courseAuthors, addCourse, onCourseCreated);
    };

    return (
        <div className='courses-container'>

            <div className='title-block'>
                <Input
                    labelText="Title"
                    placeholderText="Enter title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <Button buttonText="Add new course" onClick={handleCreateCourse} />

            </div>
            <div className='description-block'>
                <Input
                    labelText="Description"
                    placeholderText="Enter description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className='third-block'>

                <div className='third-block-left'>
                    <div className='title-container'>
                        Add author
                    </div>
                    <div className='input-container'>
                        <Input
                            labelText="Author name"
                            placeholderText="Enter author name..."
                            value={newAuthorName}
                            onChange={(e) => setNewAuthorName(e.target.value)} />
                    </div>
                    <Button buttonText="Create Author" onClick={handleCreateAuthor} />

                    <div className='empty-space'></div>

                    <div className='title-container'>
                        Duration
                    </div>
                    <div className='input-container'>
                        <Input
                            labelText="Duration"
                            placeholderText="Enter duration in minutes..."
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)} />
                    </div>
                    <div className='duration'>
                        Duration: {formatDuration(duration)}
                    </div>
                </div>

                <div className='third-block-right'>
                    <div>
                        <h3>Authors</h3>
                        {authors.length === 0 ? (
                            <p>Authors list is empty</p>
                        ) : (
                            authors.map((author) => (
                                <div key={author.id}>
                                    {author.name}
                                    <button onClick={() => handleAddAuthorToCourse(author.id)}>Add author</button>
                                </div>
                            ))
                        )}
                    </div>
                    <div>
                        <h3>Course Authors</h3>
                        {courseAuthors.length === 0 ? (
                            <p>Course list is empty</p>
                        ) : (
                            courseAuthors.map((author) => (
                                <div key={author.id}>
                                    {author.name}
                                    <button onClick={() => handleRemoveAuthorFromSelectList(author.id)}>Delete author</button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CreateCourse;
import React, { useState } from "react";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { formatDuration } from "../../common/Tools/formatDuration.jsx";
import "./CreateCourse.css";
<<<<<<< HEAD
import { AddAuthorToCourse } from "./components/AddAuthorToCourse.jsx";
import { CreateAuthor } from "./components/CreateAuthor.jsx";
import { RemoveAuthorFromSelectList } from "./components/RemoveAuthorFromSelectList.jsx";
import { CreateNewCourse } from "./components/CreateNewCourse.jsx";
=======
import {
  CreateNewCourse,
  AddAuthorToCourse,
  CreateAuthor,
  RemoveAuthorFromSelectList
} from "./helpers/author.helpers.js";

>>>>>>> Task1
import {
  BUTTON_TEXT,
  LABEL_TEXT,
  MESSAGES,
  PLACEHOLDER_TEXT,
} from "../../helpers/constants.js";
import { useCourseAuthorContext } from "../../helpers/CourseAuthorStore.jsx";

export const CreateCourse = ({ onCourseCreated }) => {
  const { addCourse, authors, addAuthor, setAuthors } =
    useCourseAuthorContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [courseAuthors, setCourseAuthors] = useState([]);
  const [newAuthorName, setNewAuthorName] = useState("");

  const handleAddAuthorToCourse = (authorId) => {
    AddAuthorToCourse(authorId, authors, courseAuthors, setCourseAuthors);
  };

  const handleRemoveAuthorFromSelectList = (authorId) => {
    RemoveAuthorFromSelectList(
      authorId,
      courseAuthors,
      setCourseAuthors,
      authors,
      setAuthors,
    );
  };

  const handleCreateAuthor = () => {
    CreateAuthor(newAuthorName, authors, addAuthor, setNewAuthorName);
  };

  const handleCreateCourse = () => {
    CreateNewCourse(
      title,
      description,
      duration,
      courseAuthors,
      addCourse,
      onCourseCreated,
    );
  };

  return (
    <div className="courses-container">
      <div className="title-block">
        <Input
          labelText={LABEL_TEXT.TITLE}
          placeholderText={PLACEHOLDER_TEXT.TITLE}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          buttonText={BUTTON_TEXT.ADD_COURSE}
          onClick={handleCreateCourse}
        />
      </div>
      <div className="description-block">
        <Input
          labelText={LABEL_TEXT.DESCRIPTION}
          placeholderText={PLACEHOLDER_TEXT.DESCRIPTION}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="third-block">
        <div className="third-block-left">
          <div className="title-container">{LABEL_TEXT.ADD_AUTHOR}</div>
<<<<<<< HEAD
          <Input
            labelText={LABEL_TEXT.AUTHOR_NAME}
            placeholderText={PLACEHOLDER_TEXT.AUTHOR_NAME}
            value={newAuthorName}
            onChange={(e) => setNewAuthorName(e.target.value)}
          />

=======
          <div className="input-container">
            <Input
              labelText={LABEL_TEXT.AUTHOR_NAME}
              placeholderText={PLACEHOLDER_TEXT.AUTHOR_NAME}
              value={newAuthorName}
              onChange={(e) => setNewAuthorName(e.target.value)}
            />
          </div>
>>>>>>> Task1
          <Button
            buttonText={BUTTON_TEXT.CREATE_AUTHOR}
            onClick={handleCreateAuthor}
          />

          <div className="empty-space"></div>

          <div className="title-container">{LABEL_TEXT.DURATION}</div>
<<<<<<< HEAD

          <Input
            labelText={LABEL_TEXT.DURATION}
            placeholderText={PLACEHOLDER_TEXT.DURATION}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />

=======
          <div className="input-container">
            <Input
              labelText={LABEL_TEXT.DURATION}
              placeholderText={PLACEHOLDER_TEXT.DURATION}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
>>>>>>> Task1
          <div className="duration">Duration: {formatDuration(duration)}</div>
        </div>

        <div className="third-block-right">
          <div>
            <h3>{LABEL_TEXT.AUTHORS}</h3>
            {authors.length === 0 ? (
              <p>{MESSAGES.AUTHORS_EMPTY_LIST}</p>
            ) : (
              authors.map((author) => (
                <div key={author.id}>
                  {author.name}
                  <Button
                    onClick={() => handleAddAuthorToCourse(author.id)}
                    buttonText={BUTTON_TEXT.ADD_AUTHOR}
                  />
                </div>
              ))
            )}
          </div>
          <div>
            <h3>{LABEL_TEXT.COURSE_AUTHORS}</h3>
            {courseAuthors.length === 0 ? (
              <p>{MESSAGES.COURSES_EMPTY_LIST}</p>
            ) : (
              courseAuthors.map((author) => (
                <div key={author.id}>
                  {author.name}
                  <Button
                    onClick={() => handleRemoveAuthorFromSelectList(author.id)}
                    buttonText={BUTTON_TEXT.DELETE_AUTHOR}
                  />
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

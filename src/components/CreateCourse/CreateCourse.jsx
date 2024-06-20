import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { mockedAuthorsList, mockedCoursesList } from "../../constants";
import formatDuration from "../../helpers/formatDuration";

import styles from "./CreateCourse.module.css";
import Author from "./components/Author";

import {
  BUTTON_TEXT,
  PLACEHOLDER_TEXT,
  LABEL_TEXT,
  getAlertText,
  PARAMETERS,
} from "./createCourseStrings";

function CreateCourse() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [duration, setDuration] = useState("");
  const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
  const [selectedAuthorsList, setSelectedAuthorsList] = useState([]);

  const ALERT_TEXT = getAlertText();

  function addCourseAuthor(author) {
    setSelectedAuthorsList([...selectedAuthorsList, author]);
    setAuthorsList((current) =>
      current.filter((item) => item.name !== author.name),
    );
  }

  function deleteCourseAuthor(author) {
    setAuthorsList([...authorsList, author]);
    setSelectedAuthorsList((current) =>
      current.filter((item) => item.name !== author.name),
    );
  }

  function createNewAuthor(author) {
    if (author.length < PARAMETERS.AUTHOR_MIN_LENGTH) {
      alert(ALERT_TEXT.AUTHOR_NAME_TOO_SHORT);
      return;
    }
    const newAuthor = {
      id: uuidv4(),
      name: author,
    };
    setAuthorsList([...authorsList, newAuthor]);
    mockedAuthorsList.push(newAuthor);
  }

  function isValid() {
    if (!title) {
      alert(ALERT_TEXT.TITLE_REQUIRED);
      return false;
    }
    if (!description) {
      alert(ALERT_TEXT.DESCRIPTION_REQUIRED);
      return false;
    }
    if (description.length < PARAMETERS.DESCRIPTION_MIN_LENGTH) {
      alert(ALERT_TEXT.DESCRIPTION_TOO_SHORT);
      return false;
    }
    if (duration <= PARAMETERS.DURATION_MIN_LENGTH) {
      alert(ALERT_TEXT.DURATION_TOO_SHORT);
      return false;
    }
    if (!selectedAuthorsList.length) {
      alert(ALERT_TEXT.AUTHOR_REQUIRED);
      return false;
    }
    return true;
  }

  function cancelCourseCreationHandler() {
    navigate("/courses");
  }

  function createCourseSubmitHandler() {
    if (!isValid()) {
      alert("problem");
      return;
    } else {
      const newCourse = {
        id: uuidv4(),
        title: title,
        description: description,
        creationDate: new Date().toLocaleDateString(),
        duration: duration,
        authors: selectedAuthorsList.map((course) => course.id),
      };
      mockedCoursesList.push(newCourse);
      navigate("/");
    }
  }

  return (
    <section className={styles.createCourseWrapper}>
      <div className={styles.titleBlock}>
        <div className={styles.inputTitle}>
          <Input
            name="inputTitle"
            labelText={LABEL_TEXT.TITLE}
            type="text"
            value={title}
            placeholderText={PLACEHOLDER_TEXT.ENTER_TITLE}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <Button
          onClick={createCourseSubmitHandler}
          buttonText={BUTTON_TEXT.CREATE_COURSE}
        />
        <Button
          onClick={cancelCourseCreationHandler}
          buttonText={BUTTON_TEXT.CANCEL}
        />
      </div>
      <div className={styles.createDescriptionBlock}>
        <label htmlFor="createDescription">{LABEL_TEXT.DESCRIPTION}</label>
        <textarea
          name="createDescription"
          type="text"
          placeholder={PLACEHOLDER_TEXT.ENTER_DESCRIPTION}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.createAuthorBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.addAuthor}>
            <h3>Add author</h3>
            <Input
              name="addAuthorName"
              labelText={LABEL_TEXT.AUTHOR_NAME}
              type="text"
              value={newAuthor}
              placeholderText={PLACEHOLDER_TEXT.ENTER_AUTHOR_NAME}
              onChange={(e) => setNewAuthor(e.target.value)}
            />
            <Button
              buttonText={BUTTON_TEXT.CREATE_AUTHOR}
              onClick={() => createNewAuthor(newAuthor)}
            />
          </div>
          <div className={styles.addDuration}>
            <h3>Duration</h3>
            <Input
              name="addDuration"
              labelText={LABEL_TEXT.DURATION}
              type="number"
              value={duration}
              placeholderText={PLACEHOLDER_TEXT.ENTER_DURATION}
              onChange={(e) => setDuration(e.target.value)}
            />
            <h2>Duration: {formatDuration(duration)} hours</h2>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.authorsList}>
            <h3>Authors</h3>
            {authorsList.length ? (
              authorsList.map((author) => (
                <Author
                  key={author.id}
                  author={author}
                  buttonText={BUTTON_TEXT.ADD_AUTHOR}
                  onclickHandler={() => addCourseAuthor(author)}
                />
              ))
            ) : (
              <p>{ALERT_TEXT.NO_AUTHORS}</p>
            )}
          </div>
          <div className={styles.courseAuthorsList}>
            <h3>Course authors</h3>
            {selectedAuthorsList.length ? (
              selectedAuthorsList.map((author) => (
                <Author
                  key={author.id}
                  author={author}
                  buttonText={BUTTON_TEXT.DELETE_AUTHOR}
                  onclickHandler={() => deleteCourseAuthor(author)}
                />
              ))
            ) : (
              <p>{ALERT_TEXT.NO_AUTHORS_SELECTED}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateCourse;

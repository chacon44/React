import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addCourse } from "../../store/courses/actions";
import {
  addAuthor,
  saveAuthors,
  deleteAuthor,
} from "../../store/authors/actions";
import { getAuthors as fetchAuthors } from "../../services";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import formatDuration from "../../helpers/formatDuration";
import styles from "./CreateCourse.module.css";
import {
  BUTTON_TEXT,
  PLACEHOLDER_TEXT,
  LABEL_TEXT,
  getAlertText,
  PARAMETERS,
  TITLE_TEXT,
} from "./createCourseStrings";
import { PATH_URIS } from "../../constants";

function CreateCourse() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [duration, setDuration] = useState("");
  const [authorsList, setAuthorsList] = useState([]);
  const [selectedAuthorsList, setSelectedAuthorsList] = useState([]);

  const ALERT_TEXT = getAlertText();

  useEffect(() => {
    const fetchAndSetAuthors = async () => {
      const authors = await fetchAuthors();
      dispatch(saveAuthors(authors));
      setAuthorsList(authors);
    };

    fetchAndSetAuthors();
  }, [dispatch]);

  function addCourseAuthor(author) {
    setSelectedAuthorsList([...selectedAuthorsList, author]);
    setAuthorsList((current) =>
      current.filter((item) => item.id !== author.id),
    );
  }

  function deleteCourseAuthor(author) {
    setAuthorsList([...authorsList, author]);
    setSelectedAuthorsList((current) =>
      current.filter((item) => item.id !== author.id),
    );
  }

  function createNewAuthor(authorName) {
    if (authorName.length < PARAMETERS.AUTHOR_MIN_LENGTH) {
      alert(ALERT_TEXT.AUTHOR_NAME_TOO_SHORT);
      return;
    }
    const newAuthor = {
      id: uuidv4(),
      name: authorName,
    };
    dispatch(addAuthor(newAuthor));
    setAuthorsList((current) => [...current, newAuthor]);
    setNewAuthor("");
  }

  function isValidCreateCoursePayload() {
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
    navigate(PATH_URIS.COURSES_LIST);
  }

  function createCourseSubmitHandler() {
    if (isValidCreateCoursePayload()) {
      const newCourse = {
        id: uuidv4(),
        title,
        description,
        creationDate: new Date().toLocaleDateString(),
        duration,
        authors: selectedAuthorsList.map((author) => author.id),
      };
      dispatch(addCourse(newCourse));
      navigate(PATH_URIS.COURSES_LIST);
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.createAuthorBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.addAuthor}>
            <h3>{TITLE_TEXT.ADD_AUTHOR}</h3>
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
              onClick={() => saveAuthors(newAuthor)}
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
            <h2>
              {TITLE_TEXT.DURATION}: {formatDuration(duration)}
            </h2>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.authorsList}>
            <h3>{TITLE_TEXT.AUTHORS}</h3>
            {authorsList.length ? (
              authorsList.map((author) => (
                <div key={author.id} className={styles.authorItem}>
                  <span>{author.name}</span>
                  <Button
                    buttonText={BUTTON_TEXT.ADD_AUTHOR}
                    onClick={() => addCourseAuthor(author)}
                  />
                </div>
              ))
            ) : (
              <p>{ALERT_TEXT.NO_AUTHORS}</p>
            )}
          </div>
          <div className={styles.courseAuthorsList}>
            <h3>{TITLE_TEXT.COURSE_AUTHORS}</h3>
            {selectedAuthorsList.length ? (
              selectedAuthorsList.map((author) => (
                <div key={author.id} className={styles.authorItem}>
                  <span>{author.name}</span>
                  <Button
                    buttonText={BUTTON_TEXT.DELETE_AUTHOR}
                    onClick={() => deleteAuthor(author)}
                  />
                </div>
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

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addAuthor, fetchAuthors } from "../../store/authors/thunk";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import formatDuration from "../../helpers/formatDuration";
import styles from "./CourseForm.module.css";
import {
  BUTTON_TEXT,
  PLACEHOLDER_TEXT,
  LABEL_TEXT,
  getAlertText,
  PARAMETERS,
  TITLE_TEXT,
} from "./courseFormStrings";
import { PATH_URIS } from "../../constants";
import { BUTTON_TYPE } from "../../common/Button/buttonStrings";
import { INPUT_TYPE } from "../../common/Input/inputStrings";
import { getAuthors, getToken } from "../../store/selectors";
import {
  addCourseFuntion,
  fetchCourseById,
  updateCourse,
} from "../../store/courses/thunk";

function CourseForm() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const authorsListStore = useSelector(getAuthors || []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [availableAuthorsList, setAvailableAuthorsList] = useState([]);
  const [assignedAuthorsList, setAssignedAuthorsList] = useState([]);
  const [loadingCourse, setloadingCourse] = useState(true);

  const ALERT_TEXT = getAlertText();

  useEffect(() => {
    dispatch(fetchAuthors());
    if (courseId && loadingCourse) {
      dispatch(fetchCourseById(courseId)).then((course) => {
        setTitle(course.title);
        setDescription(course.description);
        setDuration(course.duration);
        setAssignedAuthorsList(
          course.authors.map((authorId) => {
            return authorsListStore.find((author) => author.id === authorId);
          }),
        );
      });
      setloadingCourse(false);
    }
  }, [dispatch, loadingCourse, authorsListStore, courseId]);

  useEffect(() => {
    const filteredAuthors = authorsListStore.filter(
      (author) =>
        !assignedAuthorsList.some((assigned) => assigned.id === author.id),
    );

    setAvailableAuthorsList(filteredAuthors);
  }, [authorsListStore, assignedAuthorsList]);

  function createNewAuthor(author) {
    if (author.length < PARAMETERS.AUTHOR_MIN_LENGTH) {
      alert(ALERT_TEXT.AUTHOR_NAME_TOO_SHORT);
      return;
    }
    const newAuthor = {
      id: uuidv4(),
      name: author,
    };

    dispatch(addAuthor(newAuthor, token));
    setAvailableAuthorsList([...availableAuthorsList, newAuthor]);
    setNewAuthor("");
  }

  function addCourseAuthor(author) {
    setAssignedAuthorsList([...assignedAuthorsList, author]);
    setAvailableAuthorsList(
      availableAuthorsList.filter((item) => item.id !== author.id),
    );
  }

  function deleteCourseAuthor(author) {
    setAvailableAuthorsList((current) => [...current, author]);
    setAssignedAuthorsList((current) =>
      current.filter((item) => item.id !== author.id),
    );
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
    if (!assignedAuthorsList.length) {
      alert(ALERT_TEXT.AUTHOR_REQUIRED);
      return false;
    }
    return true;
  }

  function createCourseSubmitHandler() {
    if (isValidCreateCoursePayload()) {
      const newCourse = {
        id: courseId || uuidv4(),
        title,
        description,
        duration: Number(duration),
        authors: assignedAuthorsList.map((author) => author.id),
        creationDate: new Date().toLocaleDateString(),
      };
      if (courseId) {
        dispatch(updateCourse(courseId, newCourse, token));
      } else {
        dispatch(addCourseFuntion(newCourse, token));
      }
      return true;
    }
  }

  return (
    <section className={styles.createCourseWrapper}>
      <div className={styles.titleBlock}>
        <div className={styles.inputTitle}>
          <Input
            name="inputTitle"
            labelText={LABEL_TEXT.TITLE}
            type={INPUT_TYPE.TEXT}
            value={title}
            placeholderText={PLACEHOLDER_TEXT.ENTER_TITLE}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <Link to={PATH_URIS.COURSES_LIST}>
          <Button
            buttonText={
              courseId ? BUTTON_TEXT.UPDATE_COURSE : BUTTON_TEXT.CREATE_COURSE
            }
            type={BUTTON_TYPE.BUTTON}
          />
        </Link>
        <Link to={PATH_URIS.COURSES_LIST}>
          <Button buttonText={BUTTON_TEXT.CANCEL} type={BUTTON_TYPE.BUTTON} />
        </Link>
      </div>
      <div className={styles.createDescriptionBlock}>
        <label htmlFor="createDescription">{LABEL_TEXT.DESCRIPTION}</label>
        <textarea
          name="createDescription"
          type={INPUT_TYPE.TEXT}
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
              type={INPUT_TYPE.TEXT}
              value={newAuthor}
              placeholderText={PLACEHOLDER_TEXT.ENTER_AUTHOR_NAME}
              onChange={(e) => setNewAuthor(e.target.value)}
            />
            <Button
              buttonText={BUTTON_TEXT.CREATE_AUTHOR}
              type={BUTTON_TYPE.BUTTON}
              onClick={() => createNewAuthor(newAuthor)}
            />
          </div>
          <div className={styles.addDuration}>
            <h3>{LABEL_TEXT.DURATION}</h3>
            <Input
              name="addDuration"
              labelText={LABEL_TEXT.DURATION}
              type={INPUT_TYPE.NUMBER}
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
            {availableAuthorsList.length ? (
              availableAuthorsList.map((author) => (
                <div className={styles.authorItem} key={author.id}>
                  <span>{author.name}</span>
                  <Button
                    buttonText={BUTTON_TEXT.ADD_AUTHOR}
                    type={BUTTON_TYPE.BUTTON}
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
            {assignedAuthorsList.length ? (
              assignedAuthorsList.map((author) => (
                <div key={author.id} className={styles.authorItem}>
                  <span>{author.name}</span>
                  <Button
                    buttonText={BUTTON_TEXT.DELETE_AUTHOR}
                    type={BUTTON_TYPE.BUTTON}
                    onClick={() => deleteCourseAuthor(author)}
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

export default CourseForm;

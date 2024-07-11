import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../../../store/courses/actions";
import Button from "../../../../common/Button/Button";
import formatDuration from "../../../../helpers/formatDuration";
import dateFormater from "../../../../helpers/dateFormatter";
import styles from "./CourseCard.module.css";
import { BUTTON_TEXT, TITLE_TEXT } from "./courseCardStrings";
import { PATH_URIS } from "../../../../constants";

function CourseCard({
  id,
  title,
  description,
  creationDate,
  duration,
  authors,
}) {
  const dispatch = useDispatch();
  // const courseAuthors = getAuthors(authors).join(", ");

  const handleDeleteCourse = () => {
    dispatch(deleteCourse(id));
  };
  const handleUpdateCourse = () => {};
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.cardRight}>
        <p className={styles.authors}>
          <strong>{TITLE_TEXT.AUTHORS}</strong>
          {/* {courseAuthors} */}
        </p>
        <p className={styles.duration}>
          <b>{TITLE_TEXT.DURATION}</b>
          {formatDuration(duration)}
        </p>
        <p className={styles.created}>
          <strong>{TITLE_TEXT.CREATED}</strong>
          {dateFormater(creationDate)}
        </p>
        <div className={styles.buttonBlock}>
          <Link to={PATH_URIS.COURSE_INFO(id)}>
            <Button
              className="cardButton"
              buttonText={BUTTON_TEXT.SHOW_COURSE}
            />
          </Link>
          <Button
            className="cardButton"
            buttonText={BUTTON_TEXT.UPDATE_COURSE}
            onClick={handleUpdateCourse}
          />
          <Button
            className="cardButton"
            buttonText={BUTTON_TEXT.DELETE_COURSE}
            onClick={handleDeleteCourse}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;

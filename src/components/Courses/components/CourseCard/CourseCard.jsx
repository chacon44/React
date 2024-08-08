import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse } from "../../../../store/courses/thunk";
import Button from "../../../../common/Button/Button";
import formatDuration from "../../../../helpers/formatDuration";
import dateFormater from "../../../../helpers/dateFormatter";
import styles from "./CourseCard.module.css";
import { BUTTON_TEXT, TITLE_TEXT } from "./courseCardStrings";
import { BUTTON_TYPE } from "../../../../common/Button/buttonStrings";
import { ROLES } from "../../../../constants";
import {
  getAuthors,
  getAuthorsName,
  getToken,
  getUserRole,
} from "../../../../store/selectors";

function CourseCard(props) {
  const { id, title, description, creationDate, duration, authors } = props;
  const dispatch = useDispatch();
  const userRole = useSelector(getUserRole);
  const allAuthors = useSelector(getAuthors);
  const [authorNames, setAuthorNames] = useState([]);
  const token = useSelector(getToken);

  useEffect(() => {
    const courseAuthors = allAuthors.filter((author) =>
      authors.includes(author.id),
    );
    setAuthorNames(courseAuthors.map(getAuthorsName));
  }, [allAuthors, authors]);

  const handleDeleteCourse = () => {
    dispatch(deleteCourse(id, token));
  };

  const handleShowInfo = () => {};

  return (
    <div className={styles.card} data-testid="course-card">
      <div className={styles.cardLeft}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.cardRight}>
        <p className={styles.authors}>
          <strong>{TITLE_TEXT.AUTHORS}</strong>
          {authorNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
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
          <Link to={`/courses/${id}`}>
            <Button
              className="cardButton"
              buttonText={BUTTON_TEXT.SHOW_COURSE}
              type={BUTTON_TYPE.BUTTON}
              onClick={handleShowInfo}
            />
          </Link>
          {userRole === ROLES.ADMIN && (
            <>
              <Link to={`/courses/update/${id}`}>
                <Button
                  className="cardButton"
                  buttonText={BUTTON_TEXT.UPDATE_COURSE}
                  type={BUTTON_TYPE.BUTTON}
                />
              </Link>

              <Button
                className="cardButton"
                buttonText={BUTTON_TEXT.DELETE_COURSE}
                type={BUTTON_TYPE.BUTTON}
                onClick={handleDeleteCourse}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CourseCard;

import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import dateFormatter from "../../helpers/dateFormatter";
import formatDuration from "../../helpers/formatDuration";
import Button from "../../common/Button/Button";

import classes from "./CourseInfo.module.css";
import { BUTTON_TEXT, INFO_TEXT } from "./courseInfoStrings";
import { PATH_URIS } from "../../constants";
import { BUTTON_TYPE } from "../../common/Button/buttonStrings";
import { getAuthors } from "../../store/selectors";

const CourseInfo = () => {
  const { courseId } = useParams();

  const getCourse = (state, courseId) =>
    state.courses.find((course) => course.id === courseId);

  const getCourseAuthors = (state, course) => {
    if (!course) return [];
    return course.authors.map((authorId) => {
      const author = state.authors.find((author) => author.id === authorId);
      return author.name;
    });
  };

  const course = useSelector((state) => getCourse(state, courseId));
  const authors = useSelector(getAuthors);
  const courseAuthors = getCourseAuthors({ authors }, course);

  if (!course) {
    return <div>{INFO_TEXT.LOADING}</div>;
  }

  return (
    <div className={classes.courseInfoWrapper}>
      <Link to={PATH_URIS.COURSES_LIST}>
        <Button
          buttonText={BUTTON_TEXT.BACK_TO_COURSES}
          type={BUTTON_TYPE.BUTTON}
        />
      </Link>
      <h2 className={classes.title}>{course.title}</h2>
      <div className={classes.courseInfo}>
        <div className={classes.leftBlock}>
          <p>{course.description}</p>
        </div>
        <div className={classes.rightBlock}>
          <p>
            <strong>ID: </strong>
            {course.id}
          </p>
          <p>
            <strong>Duration: </strong>
            {formatDuration(course.duration)}
          </p>
          <p>
            <strong>Created: </strong>
            {dateFormatter(course.creationDate)}
          </p>
          <p>
            <strong>Authors: </strong>
          </p>
          <ul>
            {courseAuthors.map((authorName, index) => (
              <li key={index}>{authorName}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;

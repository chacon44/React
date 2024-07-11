import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import dateFormatter from "../../helpers/dateFormatter";
import formatDuration from "../../helpers/formatDuration";
import Button from "../../common/Button/Button";

import classes from "./CourseInfo.module.css";
import { BUTTON_TEXT } from "./courseInfoStrings";

import { PATH_URIS } from "../../constants";

const CourseInfo = () => {
  const { id } = useParams();
  const coursesList = useSelector((state) => state.coursesReducer);
  const selectedCourse = coursesList.find((course) => course.id === id);
  const authorsList = useSelector((state) => state.authorReducer);

  return (
    <div className={classes.courseInfoWrapper}>
      <Link to={PATH_URIS.COURSES_LIST}>
        <Button buttonText={BUTTON_TEXT.BACK_TO_COURSES} />
      </Link>
      <h2 className={classes.title}>{selectedCourse.title}</h2>
      <div className={classes.courseInfo}>
        <div className={classes.leftBlock}>
          <p>{selectedCourse.description}</p>
        </div>
        <div className={classes.rightBlock}>
          <p>
            <strong>ID: </strong>
            {selectedCourse.id}
          </p>
          <p>
            <strong>Duration: </strong>
            {formatDuration(selectedCourse.duration)}
          </p>
          <p>
            <strong>Created: </strong>
            {dateFormatter(selectedCourse.creationDate)}
          </p>
          <p>
            <strong>Authors: </strong>
          </p>
          <ul>
            {selectedCourse.authors.map((authorId) => {
              const foundAuthor = authorsList.find(
                (author) => author.id === authorId,
              );
              return foundAuthor;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;

import React from "react";
import "./CourseCard.css";
import Button from "../../../../common/Button/Button.jsx";
import { BUTTON_TEXT } from "../../../../helpers/constants.js";
import { formatDuration } from "../../../../common/Tools/formatDuration.jsx";
import { useCourseAuthorContext } from "../../../../helpers/CourseAuthorStore.jsx";
import DisplayCourses from "./components/DisplayCourses";

const CourseCard = ({ course }) => {
  const { authors } = useCourseAuthorContext();

<<<<<<< HEAD
  const {
    title = "",
    description = "",
    duration = 0,
    creationDate = "",
  } = course || {};

  const formattedDuration = formatDuration(duration);

=======
>>>>>>> Task1
  return (
    <div className="global-courseCard-container">
      <div className="courseCard-container">
        <div className="courseCard-container-left">
<<<<<<< HEAD
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
=======
          <h2 className="card-title">{course ? course.title : ""}</h2>
          <p className="card-text">{course ? course.description : ""}</p>
>>>>>>> Task1
        </div>
        <div className="courseCard-container-right">
          <div className="courseCard-container-right-text">
            <DisplayCourses course={course} authors={authors} />
<<<<<<< HEAD
            <p className="card-meta">Duration: {formattedDuration}</p>
            <p className="card-meta">Created: {creationDate}</p>
          </div>
          <Button buttonText={BUTTON_TEXT.SHOW_COURSE} />
=======
            <p className="card-meta">
              Duration: {course ? formatDuration(course.duration) : ""}
            </p>
            <p className="card-meta">
              Created: {course ? course.creationDate : ""}
            </p>
          </div>
          <div className="button-container">
            <Button buttonText={BUTTON_TEXT.SHOW_COURSE} />
          </div>
>>>>>>> Task1
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

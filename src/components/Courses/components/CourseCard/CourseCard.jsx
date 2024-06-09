import React from "react";
import "./CourseCard.css";
import Button from "../../../../common/Button/Button.jsx";
import { BUTTON_TEXT } from "../../../../helpers/constants.js";
import { formatDuration } from "../../../../common/Tools/formatDuration.jsx";
import { useCourseAuthorContext } from "../../../../helpers/CourseAuthorStore.jsx";
import DisplayCourses from "./components/DisplayCourses";

const CourseCard = ({ course }) => {
  const { authors } = useCourseAuthorContext();

  const {
    title = "",
    description = "",
    duration = 0,
    creationDate = "",
  } = course || {};

  const formattedDuration = formatDuration(duration);

  return (
    <div className="global-courseCard-container">
      <div className="courseCard-container">
        <div className="courseCard-container-left">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
        </div>
        <div className="courseCard-container-right">
          <div className="courseCard-container-right-text">
            <DisplayCourses course={course} authors={authors} />
            <p className="card-meta">Duration: {formattedDuration}</p>
            <p className="card-meta">Created: {creationDate}</p>
          </div>
          <Button buttonText={BUTTON_TEXT.SHOW_COURSE} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

import React from "react";
import "./CourseCard.css";
import Button from "../../../../common/Button/Button.jsx";
import { BUTTON_TEXT } from "../../../../helpers/constants.js";
import { formatDuration } from "../../../../common/Tools/formatDuration.jsx";
import { useCourseAuthorContext } from "../../../../helpers/CourseAuthorStore.jsx";
import DisplayCourses from "./components/DisplayCourses";

const CourseCard = ({ course }) => {
  const { authors } = useCourseAuthorContext();

  return (
    <div className="global-courseCard-container">
      <div className="courseCard-container">
        <div className="courseCard-container-left">
          <h2 className="card-title">{course ? course.title : ""}</h2>
          <p className="card-text">{course ? course.description : ""}</p>
        </div>
        <div className="courseCard-container-right">
          <div className="courseCard-container-right-text">
            <DisplayCourses course={course} authors={authors} />
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
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

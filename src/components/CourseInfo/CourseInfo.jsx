import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { URI } from "../../helpers/constants";
import { formatDuration } from "../../common/Tools/formatDuration.jsx";
import { useCourseAuthorContext } from "../../helpers/CourseAuthorStore.jsx";
import "../../common/Styles/CommonStyles.css";
import "./CourseInfo.css";

const CourseInfo = ({ course }) => {
  const { authors } = useCourseAuthorContext();

  const {
    title = "ok",
    description = "ok",
    duration = 0,
    creationDate = "ok",
  } = course || {};

  const formattedDuration = formatDuration(duration);

  return (
    <div className="vertical-aligner">
      <Header />
      <div className="full-screen-container">
        <div className="internal-vertical-aligner">
          <Link to={URI.COURSE_LIST} className="link-aligner">
            {"< back to courses"}
          </Link>
          <div>
            <div className="title-container">{title}</div>
            <div className="horizontal-aligner">
              <div className="internal-vertical-aligner">
                <p>{description}</p>
              </div>
              <div className="internal-vertical-aligner">
                <p>{"ID"}</p> <p>{formattedDuration}</p> <p>{creationDate}</p>{" "}
                <p>{"Authors"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;

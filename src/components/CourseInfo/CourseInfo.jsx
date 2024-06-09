import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { LABEL_TEXT, URI, MESSAGES } from "../../helpers/constants";
import { formatDuration } from "../../common/Tools/formatDuration.jsx";
import "../../common/Styles/CommonStyles.css";
import "./CourseInfo.css";
import PropTypes from "prop-types";

const CourseInfo = ({ course, authors, goBack }) => {
  if (!course || !authors) {
    return <div>{MESSAGES.LOADING_AUTHORS}</div>;
  }
  const courseAuthors = course.authors.map((authorId) => {
    const author = authors.find((author) => author.id === authorId);
    return author ? author.name : MESSAGES.UNKNOWN_AUTHOR;
  });

  const formattedDuration = formatDuration(course.duration);

  return (
    <div className="vertical-aligner">
      <Header />
      <div className="full-screen-container">
        <div className="internal-vertical-aligner">
          <Link to={URI.COURSE_LIST} className="link-aligner">
            {"< back to courses"}
          </Link>
          <div>
            <div className="title-container">{course.title}</div>
            <div className="horizontal-aligner">
              <div className="internal-vertical-aligner">
                <p>{course.description}</p>
              </div>
              <div className="internal-vertical-aligner">
                <p>
                  {LABEL_TEXT.ID} {course.id}
                </p>{" "}
                <p>{formattedDuration}</p> <p>{course.creationDate}</p>{" "}
                <p>
                  {LABEL_TEXT.COURSE_AUTHORS}
                  {courseAuthors.join(", ")}
                </p>
                <button onClick={goBack}>go back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseInfo.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    creationDate: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  goBack: PropTypes.func.isRequired,
};

CourseInfo.defaultProps = {
  course: null,
  authors: [],
};

export default CourseInfo;

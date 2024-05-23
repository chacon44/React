import React from "react";

const DisplayCourses = ({ course, authors }) => {
  let courseAuthorsNames = "";
  if (course && course.authors) {
    courseAuthorsNames = course.authors
      .filter((authorId) => authorId !== undefined)
      .map((authorId) => authors.find((author) => author.id === authorId)?.name)
      .join(", ");
  }

  return <p className="card-authors">Authors: {courseAuthorsNames}</p>;
};

export default DisplayCourses;

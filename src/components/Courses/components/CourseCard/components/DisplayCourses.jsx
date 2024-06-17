<<<<<<< HEAD
import React, { useMemo } from "react";

const DisplayCourses = ({ course, authors }) => {
  const courseAuthorsNames = useMemo(() => {
    if (!course || !course.authors || !authors) return "";

    return course.authors
      .filter((authorId) => authorId !== undefined)
      .map((authorId) => authors.find((author) => author.id === authorId)?.name)
      .filter(Boolean)
      .join(", ");
  }, [course, authors]);
=======
import React from "react";

const DisplayCourses = ({ course, authors }) => {
  let courseAuthorsNames = "";
  if (course && course.authors) {
    courseAuthorsNames = course.authors
      .filter(Boolean)
      .map((authorId) => authors.find((author) => author.id === authorId)?.name)
      .join(", ");
  }
>>>>>>> Task1

  return <p className="card-authors">Authors: {courseAuthorsNames}</p>;
};

export default DisplayCourses;

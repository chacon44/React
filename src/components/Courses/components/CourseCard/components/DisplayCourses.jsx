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

  return <p className="card-authors">Authors: {courseAuthorsNames}</p>;
};

export default DisplayCourses;

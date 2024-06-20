import React, { createContext, useContext, useState } from "react";
import { mockedAuthorsList, mockedCoursesList } from "./mockedData";

const CourseAuthorContext = createContext();

export const useCourseAuthorContext = () => useContext(CourseAuthorContext);

export const CourseAuthorProvider = ({ children }) => {
  const [courses, setCourses] = useState(mockedCoursesList);
  const [authors, setAuthors] = useState(mockedAuthorsList);

  const addCourse = (newCourse) => {
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  const addAuthor = (newAuthor) => {
    setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
  };

  return (
    <CourseAuthorContext.Provider
      value={{ courses, addCourse, authors, setAuthors, addAuthor }}
    >
      {children}
    </CourseAuthorContext.Provider>
  );
};

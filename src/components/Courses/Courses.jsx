import React, { useState } from "react";
import { useCourseAuthorContext } from "../../helpers/CourseAuthorStore";
import SearchBar from "./components/SearchBar/SearchBar";
import CourseCard from "./components/CourseCard/CourseCard";
import Button from "../../common/Button/Button";
import { BUTTON_TEXT } from "../../helpers/constants";

const Courses = ({ onAddCourse }) => {
  const { courses } = useCourseAuthorContext();
  const [filteredCourses, setFilteredCourses] = useState(courses);

  return (
    <div className="courses-container">
      <div className="first-block">
        <SearchBar courses={courses} setFilteredCourses={setFilteredCourses} />
        <Button buttonText={BUTTON_TEXT.ADD_COURSE} onClick={onAddCourse} />
      </div>
      <div>
        {filteredCourses
          .filter((course) => course.title)
          .map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
      </div>
    </div>
  );
};

export default Courses;

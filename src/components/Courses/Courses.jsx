import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./components/SearchBar/SearchBar";
import CourseCard from "./components/CourseCard/CourseCard";
import Button from "../../common/Button/Button";
import styles from "./Courses.module.css";
import { PATH_URIS } from "../../constants";
import { BUTTON_TEXT } from "./coursesStrings";
import { selectCourses } from "../../store/selectors";
import { BUTTON_TYPE } from "../../common/Button/buttonStrings";

function Courses() {
  const navigate = useNavigate();
  const courses = useSelector(selectCourses) || [];
  const [search, setSearch] = useState("");

  const createCourseButtonHandler = () => {
    navigate(PATH_URIS.ADD_COURSE);
  };

  const filteredCourseList = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.id.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className={styles.panel}>
        <SearchBar searchMessage={setSearch} />
        <Button
          buttonText={BUTTON_TEXT.ADD_COURSE}
          type={BUTTON_TYPE.SUBMIT}
          onClick={createCourseButtonHandler}
        />
      </div>
      {filteredCourseList.map(
        ({ id, title, duration, creationDate, description, authors }) => (
          <CourseCard
            key={id}
            id={id}
            title={title}
            duration={duration}
            creationDate={creationDate}
            description={description}
            authors={authors}
          />
        ),
      )}
    </>
  );
}

export default Courses;

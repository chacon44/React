import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./components/SearchBar/SearchBar";
import CourseCard from "./components/CourseCard/CourseCard";
import Button from "../../common/Button/Button";
import styles from "./Courses.module.css";
import { PATH_URIS } from "../../constants";
import { BUTTON_TEXT } from "./coursesStrings";
import { getCourses, getUserRole } from "../../store/selectors";
import { BUTTON_TYPE } from "../../common/Button/buttonStrings";
import { fetchCourses } from "../../store/courses/thunk";
import { fetchAuthors } from "../../store/authors/thunk";
import { ROLES } from "../../constants";

function Courses() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector(getCourses) || [];
  const userRole = useSelector(getUserRole);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchAuthors());
  }, [dispatch]);

  const createCourseButtonHandler = () => {
    navigate(PATH_URIS.ADD_COURSE);
  };

  const filteredCourseList = Array.isArray(courses)
    ? courses.filter(
        (course) =>
          course.title.toLowerCase().includes(search.toLowerCase()) ||
          course.id.toLowerCase().includes(search.toLowerCase()),
      )
    : [];

  return (
    <>
      <div className={styles.panel}>
        <SearchBar searchMessage={setSearch} />
        {userRole === ROLES.ADMIN && (
          <Button
            buttonText={BUTTON_TEXT.ADD_COURSE}
            type={BUTTON_TYPE.SUBMIT}
            onClick={createCourseButtonHandler}
          />
        )}
      </div>
      {filteredCourseList.length > 0 ? (
        filteredCourseList.map(
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
        )
      ) : (
        <p>No courses found.</p>
      )}
    </>
  );
}

export default Courses;

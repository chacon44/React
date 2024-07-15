import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCoursesService } from "../../services";
import SearchBar from "./components/SearchBar/SearchBar";
import CourseCard from "./components/CourseCard/CourseCard";
import Button from "../../common/Button/Button";
import styles from "./Courses.module.css";
import { PATH_URIS } from "../../constants";
import { BUTTON_TEXT, LOG_MESSAGES } from "./coursesStrings";

function Courses() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courses = await getCoursesService();
        dispatch(getCoursesService(courses));
      } catch (error) {
        console.error(LOG_MESSAGES.FETCH_ERROR, error);
      }
    };

    fetchCourses();
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
        <Button
          buttonText={BUTTON_TEXT.ADD_COURSE}
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

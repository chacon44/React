import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Courses from "./components/Courses/Courses";
import CourseForm from "./components/CourseForm/CourseForm";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import PrivateRoute from "./components/PrivateRoute/privateRoute";
import { getCourses, getUserIsAuth } from "./store/selectors";
import { PATH_URIS } from "./constants";
import { fetchCourses } from "./store/courses/thunk";
function App() {
  const dispatch = useDispatch();
  const isUserLogged = useSelector(getUserIsAuth);
  const courses = useSelector(getCourses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const renderCoursesOrEmpty = () => {
    return courses.length < 1 ? <EmptyCourseList /> : <Courses />;
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              isUserLogged ? (
                renderCoursesOrEmpty()
              ) : (
                <Navigate to={PATH_URIS.LOGIN} />
              )
            }
          />
          <Route path={PATH_URIS.REGISTRATION} element={<Registration />} />
          <Route path={PATH_URIS.LOGIN} element={<Login />} />
          <Route
            path={PATH_URIS.COURSES_LIST}
            element={
              isUserLogged ? (
                renderCoursesOrEmpty()
              ) : (
                <Navigate to={PATH_URIS.LOGIN} />
              )
            }
          />
          <Route
            path={PATH_URIS.ADD_COURSE}
            element={
              isUserLogged ? (
                <PrivateRoute>
                  <CourseForm />
                </PrivateRoute>
              ) : (
                <Navigate to={PATH_URIS.LOGIN} />
              )
            }
          />
          <Route
            path={PATH_URIS.UPDATE_COURSE}
            element={
              isUserLogged ? (
                <PrivateRoute>
                  <CourseForm />
                </PrivateRoute>
              ) : (
                <Navigate to={PATH_URIS.LOGIN} />
              )
            }
          />
          <Route
            path={PATH_URIS.COURSE_INFO}
            element={
              isUserLogged ? <CourseInfo /> : <Navigate to={PATH_URIS.LOGIN} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

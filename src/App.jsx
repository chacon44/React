import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { CourseAuthorProvider } from "./helpers/CourseAuthorStore";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Courses from "./components/Courses/Courses";
import Registration from "./components/Registration/Registration.jsx";
import Login from "./components/Login/Login.jsx";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import "./App.css";
import { URI, USER_INFO } from "./helpers/constants.js";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem(USER_INFO.USER_TOKEN);
    const isAuthPage =
      location.pathname === URI.LOGIN || location.pathname === URI.REGISTRATION;

    if (token && isAuthPage) {
      navigate(URI.COURSE_LIST);
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <Routes>
        <Route path={URI.REGISTRATION} element={<Registration />} />
        <Route path={URI.LOGIN} element={<Login />} />
        <Route path={URI.COURSE_INFO} element={<CourseInfo />} />
        <Route
          path={URI.COURSE_CREATION}
          element={
            <CreateCourse onCourseCreated={() => navigate(URI.COURSE_LIST)} />
          }
        />
        <Route
          path={URI.COURSE_LIST}
          element={
            <Courses onAddCourse={() => navigate(URI.COURSE_CREATION)} />
          }
        />
        <Route path="*" element={<Navigate to={URI.LOGIN} />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <CourseAuthorProvider>
      <App />
    </CourseAuthorProvider>
  </Router>
);

export default AppWrapper;

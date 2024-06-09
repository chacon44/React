import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { CourseAuthorProvider } from "./helpers/CourseAuthorStore";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Courses from "./components/Courses/Courses";
import Registration from "./components/Registration/Registration.jsx";
import Login from "./components/Login/Login.jsx";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import "./App.css";
import { URI } from "./helpers/constants.js";

const App = () => {
  const navigate = useNavigate();

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

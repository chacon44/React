import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/user/actions";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import { PATH_URIS, TOKEN } from "./constants";
import { ERROR_TEXT } from "./appStrings";

function App() {
  const dispatch = useDispatch();
  const isUserLogged = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    const tokenItem = localStorage.getItem(TOKEN);
    if (tokenItem) {
      try {
        const parsedToken = JSON.parse(tokenItem);
        dispatch(
          setUser({
            name: parsedToken.user.name,
            email: parsedToken.user.email,
            token: parsedToken.token,
          }),
        );
      } catch (error) {
        console.error(ERROR_TEXT.TOKEN_PARSING_ERROR, error);
      }
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              isUserLogged ? <Courses /> : <Navigate to={PATH_URIS.LOGIN} />
            }
          />
          <Route path={PATH_URIS.REGISTRATION} element={<Registration />} />
          <Route path={PATH_URIS.LOGIN} element={<Login />} />
          <Route
            path={PATH_URIS.COURSES_LIST}
            element={
              isUserLogged ? <Courses /> : <Navigate to={PATH_URIS.LOGIN} />
            }
          />
          <Route
            path={PATH_URIS.ADD_COURSE}
            element={
              isUserLogged ? (
                <CreateCourse />
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

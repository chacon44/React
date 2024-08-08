import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import rootReducer from "../store/rootReducer"; // Adjust the import path as needed
import { PATH_URIS } from "../constants"; // Adjust the import path as needed
import CourseForm from "../components/CourseForm/CourseForm"; // Adjust the import path as needed

const renderFunction = (
  component,
  {
    initialState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    initialEntries = ["/"],
    routes = [{ path: PATH_URIS.ADD_COURSE, element: <CourseForm /> }],
  } = {},
) => {
  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path="/" element={component} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    ),
    store,
  };
};

export default renderFunction;

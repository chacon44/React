import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";
import rootReducer from "../../../store/rootReducer";
import { ROLES, PATH_URIS } from "../../../constants";

// Helper function to render with Redux and Router
const renderWithRedux = (
  component,
  {
    initialState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    initialEntries = ["/"],
  } = {},
) => {
  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>
      </Provider>,
    ),
    store,
  };
};

describe("Header component", () => {
  test("should display logo and user name", () => {
    const initialState = {
      user: {
        isAuth: true,
        role: ROLES.USER,
        user: {
          name: "John Doe",
          email: "john.doe@example.com",
          password: "password",
          token: "sample-token",
        },
      },
    };

    renderWithRedux(<Header />, { initialState });

    // Check for the Logo component
    expect(screen.getByAltText("logo")).toBeInTheDocument();

    // Check for the user name
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  test("should display ADMIN if no user name is provided", () => {
    const initialState = {
      user: {
        isAuth: true,
        role: ROLES.ADMIN,
        user: {
          name: ROLES.ADMIN,
          email: "admin@example.com",
          password: "password",
          token: "sample-token",
        },
      },
    };

    renderWithRedux(<Header />, { initialState });

    // Check for the default user name ADMIN
    expect(screen.getByText(ROLES.ADMIN)).toBeInTheDocument();
  });

  test("should not display user name on login or registration page", () => {
    const initialState = {
      user: {
        isAuth: false,
        role: "",
        user: {
          name: "John Doe",
          email: "john.doe@example.com",
          password: "password",
          token: "sample-token",
        },
      },
    };

    renderWithRedux(<Header />, {
      initialState,
      initialEntries: [PATH_URIS.LOGIN],
    });

    // Ensure the user name is not displayed on the login page
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
  });
});

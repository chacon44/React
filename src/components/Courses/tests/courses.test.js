import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Courses from "../Courses";
import { ROLES } from "../../../constants";
import { BUTTON_TEXT } from "../coursesStrings";
import renderFunction from "../../../helpers/testUtils";

const renderWithRedux = renderFunction;

describe("Courses component", () => {
  test("should display amount of CourseCard equal to length of courses array", () => {
    const initialState = {
      courses: [
        {
          id: "1",
          title: "Course 1",
          duration: 120,
          creationDate: "2021-01-01",
          description: "Description 1",
          authors: ["Author 1"],
        },
        {
          id: "2",
          title: "Course 2",
          duration: 150,
          creationDate: "2021-02-01",
          description: "Description 2",
          authors: ["Author 2"],
        },
      ],
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

    renderWithRedux(<Courses />, { initialState });

    // Check that the number of CourseCard components is equal to the length of the courses array
    const courseCards = screen.getAllByTestId("course-card");
    expect(courseCards).toHaveLength(initialState.courses.length);
  });

  test('CourseForm should be showed after a click on a button "Add course"', async () => {
    const initialState = {
      courses: [],
      user: {
        isAuth: true,
        role: ROLES.ADMIN,
        user: {
          name: "Admin",
          email: "admin@example.com",
          password: "password",
          token: "sample-token",
        },
      },
    };

    renderWithRedux(<Courses />, { initialState });

    const addButton = screen.getByText(BUTTON_TEXT.ADD_COURSE);
    fireEvent.click(addButton);

    // Wait for the CourseForm to be rendered
    await waitFor(() => {
      expect(screen.getByLabelText("Title")).toBeInTheDocument();
    });
  });
});

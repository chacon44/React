import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourseCard from "../../Courses/components/CourseCard/CourseCard";
import { ROLES } from "../../../constants";
import formatDuration from "../../../helpers/formatDuration";
import dateFormater from "../../../helpers/dateFormatter";
import renderFunction from "../../../helpers/testUtils";

const renderWithRedux = renderFunction;

describe("CourseCard component", () => {
  const course = {
    id: "1",
    title: "Course 1",
    description: "Description 1",
    duration: 120,
    creationDate: "2021-01-01",
    authors: ["1", "2"],
  };

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
    authors: [
      { id: "1", name: "Author 1" },
      { id: "2", name: "Author 2" },
    ],
  };

  test("should display title", () => {
    renderWithRedux(<CourseCard {...course} />, { initialState });

    // Check for the title
    expect(screen.getByText(course.title)).toBeInTheDocument();
  });

  test("should display description", () => {
    renderWithRedux(<CourseCard {...course} />, { initialState });

    // Check for the description
    expect(screen.getByText(course.description)).toBeInTheDocument();
  });

  test("should display duration in the correct format", () => {
    renderWithRedux(<CourseCard {...course} />, { initialState });

    // Check for the duration
    expect(
      screen.getByText(formatDuration(course.duration)),
    ).toBeInTheDocument();
  });

  test("should display authors list", () => {
    renderWithRedux(<CourseCard {...course} />, { initialState });

    // Check for the authors
    expect(screen.getByText("Author 1")).toBeInTheDocument();
    expect(screen.getByText("Author 2")).toBeInTheDocument();
  });

  test("should display created date in the correct format", () => {
    renderWithRedux(<CourseCard {...course} />, { initialState });

    // Check for the creation date
    expect(
      screen.getByText(dateFormater(course.creationDate)),
    ).toBeInTheDocument();
  });
});

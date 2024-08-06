import reducer from "../reducer";
import {
  SAVE_COURSE,
  GET_COURSES,
  ADD_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
} from "../types";

describe("coursesReducer", () => {
  const initialState = [];

  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("should handle SAVE_COURSE and return new state", () => {
    const newCourses = [
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
    ];

    const action = {
      type: SAVE_COURSE,
      payload: newCourses,
    };

    const expectedState = {
      ...initialState,
      courses: newCourses,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  test("should handle GET_COURSES and return new state", () => {
    const courses = [
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
    ];

    const action = {
      type: GET_COURSES,
      payload: courses,
    };

    expect(reducer(initialState, action)).toEqual(courses);
  });

  test("should handle ADD_COURSE and return new state", () => {
    const newCourse = {
      id: "3",
      title: "Course 3",
      duration: 180,
      creationDate: "2021-03-01",
      description: "Description 3",
      authors: ["Author 3"],
    };

    const action = {
      type: ADD_COURSE,
      payload: newCourse,
    };

    const expectedState = [...initialState, newCourse];

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  test("should handle DELETE_COURSE and return new state", () => {
    const initialStateWithCourses = [
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
    ];

    const action = {
      type: DELETE_COURSE,
      payload: "1",
    };

    const expectedState = initialStateWithCourses.filter(
      (course) => course.id !== "1",
    );

    expect(reducer(initialStateWithCourses, action)).toEqual(expectedState);
  });

  test("should handle UPDATE_COURSE and return new state", () => {
    const initialStateWithCourses = [
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
    ];

    const updatedCourse = {
      id: "1",
      title: "Updated Course 1",
      duration: 120,
      creationDate: "2021-01-01",
      description: "Updated Description 1",
      authors: ["Author 1"],
    };

    const action = {
      type: UPDATE_COURSE,
      payload: updatedCourse,
    };

    const expectedState = initialStateWithCourses.map((course) =>
      course.id === updatedCourse.id ? updatedCourse : course,
    );

    expect(reducer(initialStateWithCourses, action)).toEqual(expectedState);
  });
});

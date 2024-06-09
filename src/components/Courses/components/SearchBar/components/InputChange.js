export const InputChange = (
  event,
  setSearchTerm,
  setFilteredCourses,
  courses,
) => {
  setSearchTerm(event.target.value);
  if (event.target.value === "") {
    setFilteredCourses(courses);
  }
};

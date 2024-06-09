export const searchCourses = ({ courses, searchTerm, setFilteredCourses }) => {
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.id.toString().includes(searchTerm),
  );
  setFilteredCourses(filteredCourses);
};

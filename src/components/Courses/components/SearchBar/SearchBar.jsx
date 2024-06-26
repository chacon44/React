import React, { useState } from "react";
import "./SearchBar.css";
import Button from "../../../../common/Button/Button.jsx";
import {
  BUTTON_TEXT,
  PLACEHOLDER_TEXT,
} from "../../../../helpers/constants.js";
import Input from "../../../../common/Input/Input.jsx";

const SearchBar = ({ courses, setFilteredCourses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filteredCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.id.toString().includes(searchTerm),
    );
    setFilteredCourses(filteredCourses);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      setFilteredCourses(courses);
    }
  };

  return (
    <div className="search-container">
      <div className="input-container">
        <Input
          placeholderText={PLACEHOLDER_TEXT.SEARCH_COURSE}
          onChange={handleInputChange}
        />
      </div>
      <Button onClick={handleSearch} buttonText={BUTTON_TEXT.SEARCH} />
    </div>
  );
};

export default SearchBar;

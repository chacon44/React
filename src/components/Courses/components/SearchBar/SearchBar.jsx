import React, { useState } from "react";
import "./SearchBar.css";
import Button from "../../../../common/Button/Button.jsx";
import { searchCourses } from "./components/Search.js";
import { InputChange } from "./components/InputChange.js";
import {
  BUTTON_TEXT,
  PLACEHOLDER_TEXT,
} from "../../../../helpers/constants.js";
import Input from "../../../../common/Input/Input.jsx";

const SearchBar = ({ courses, setFilteredCourses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-container">
      <Input
        placeholderText={PLACEHOLDER_TEXT.SEARCH_COURSE}
        onChange={(event) =>
          InputChange(event, setSearchTerm, setFilteredCourses, courses)
        }
      />

      <Button
        onClick={() =>
          searchCourses({ courses, searchTerm, setFilteredCourses })
        }
        buttonText={BUTTON_TEXT.SEARCH}
      />
    </div>
  );
};

export default SearchBar;

import React, { useState } from 'react';
import './SearchBar.css';
import { BUTTON_TEXT } from '../../../../helpers/constants.js';
import Input from '../../../../common/Input/Input.jsx';

const SearchBar = ({ courses, setFilteredCourses }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredCourses = courses.filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.id.toString().includes(searchTerm)
    );
    setFilteredCourses(filteredCourses);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === '') {
      setFilteredCourses(courses);
    }
  };

  const Button = ({ onClick, children }) => {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  };

  return (
    <div className='search-container'>
        <div className='input-container'>
        <Input
        placeholderText="Enter course name..."
        onChange={handleInputChange}
      />
        </div>
    
      <Button onClick={handleSearch} buttonText={BUTTON_TEXT.SEARCH}>
        Search
        </Button>

    </div>

  );
};

export default SearchBar;
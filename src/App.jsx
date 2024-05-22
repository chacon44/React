import React, { useState } from 'react';
import { CourseAuthorProvider } from './helpers/CourseAuthorStore';
import Header from './components/Header/Header.jsx';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Courses from './components/Courses/Courses'; 
import './App.css';

const App = () => {
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);

  const handleAddCourseClick = () => {
    setIsCreatingCourse(true);
  };

  const handleCourseCreated = () => {
    setIsCreatingCourse(false);
  };

  return (
    <CourseAuthorProvider>
      <div>
        <Header />
        {isCreatingCourse ? (
          <CreateCourse onCourseCreated={handleCourseCreated} />
        ) : (
          <Courses onAddCourse={handleAddCourseClick} />
        )}
      </div>
    </CourseAuthorProvider>
  );
};

export default App;
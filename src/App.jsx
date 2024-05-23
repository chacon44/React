import React, { useState } from "react";
import { CourseAuthorProvider } from "./helpers/CourseAuthorStore";
import Header from "./components/Header/Header.jsx";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Courses from "./components/Courses/Courses";
import "./App.css";

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
// // src/App.js
// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// // Definimos algunos componentes simples para nuestras "páginas"
// const Home = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;
// const Contact = () => <h2>Contact</h2>;

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Definimos un menú de navegación con enlaces */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Definimos las rutas para nuestras "páginas" */}
//         <Routes>
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

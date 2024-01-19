import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";

function App() {
  // Set up routing for the application
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        {/* About page */}
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

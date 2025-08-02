
import React from "react";
import "./App.css";
import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <div className="container">
      <div className="section left">
        <CourseDetails />
      </div>
      <div className="section center">
        <BookDetails />
      </div>
      <div className="section right">
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;

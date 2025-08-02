import React from "react";

function CourseDetails() {
  const showAngular = true;
  const showReact = true;

  return (
    <div>
      <h1>Course Details</h1>
      {showAngular && (
        <>
          <h2>Angular</h2>
          <p>4/5/2021</p>
        </>
      )}
      {showReact && (
        <>
          <h2>React</h2>
          <p>6/3/20201</p>
        </>
      )}
    </div>
  );
}

export default CourseDetails;

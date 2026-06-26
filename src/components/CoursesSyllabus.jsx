import React from "react";
import '../css_modules/CoursesSyllabus.css'; // Optional if you want to add some custom styling

const CoursesSyllabus = () => {
  return (
    <div className="course-container">
      <h1>Milk Code: Java by Irfan Sir</h1>
      <h3>Qualification: BCA + MCA</h3>
      <h3>Experience: CloudFort and Nexus Info</h3>

      <section className="curriculum-section">
        <h2>Know Your Curriculum</h2>
        <h3>Data Structures & Algorithms</h3>
        <ul>
          <li>Programming with Java</li>
          <li>Flowcharts & Pseudocode</li>
          <li>Variables & Data Types</li>
          <li>Operators</li>
          <li>Conditional Statements</li>
          <li>Loops (Flow Control)</li>
          <li>Patterns</li>
          <li>Functions & Scope</li>
          <li>Arrays & 2D Arrays</li>
          <li>Sorting Algorithms</li>
          <li>Strings</li>
          <li>Pointers (Interview Prep)</li>
          <li>Collections Framework (STL)</li>
          <li>Time & Space Complexity</li>
          <li>Recursion & Backtracking</li>
          <li>Divide & Conquer</li>
        </ul>

        <h3>Object Oriented Programming (OOPs)</h3>
        <ul>
          <li>Linked Lists</li>
          <li>Stacks & Queues</li>
          <li>Binary Trees</li>
          <li>Binary Search Trees</li>
          <li>Advanced DSA Topics (Heaps, HashMaps, Graphs)</li>
        </ul>

        <h3>Web Development (MERN Stack)</h3>
        <ul>
          <li>Frontend: HTML, CSS, JavaScript, React</li>
          <li>Backend: Node.js, Express, MongoDB, SQL</li>
          <li>APIs and RESTful Services</li>
          <li>Deployment Techniques (AWS, Docker, Render)</li>
        </ul>

        <h3>Projects</h3>
        <ul>
          <li>Simon Says Game</li>
          <li>Real-time Weather App (React)</li>
          <li>Airbnb Travel & Listing App</li>
          <li>ChatGPT Integration (OpenAI API)</li>
          <li>Zoom Video Conferencing Replica</li>
        </ul>

        <h3>Advanced Topics</h3>
        <ul>
          <li>Dynamic Programming</li>
          <li>Graph Algorithms</li>
          <li>Greedy Algorithms</li>
          <li>CI/CD, Kubernetes, Docker</li>
          <li>Socket.io and webRTC</li>
        </ul>
      </section>

      <div className="enrollment-section">
        <h3>Enroll Now</h3>
        <p>Join the Milk Code and boost your coding skills. Get hands-on project experience, advanced Java, and full-stack development knowledge from industry experts.</p>
      </div>
    </div>
  );
};

export default CoursesSyllabus;

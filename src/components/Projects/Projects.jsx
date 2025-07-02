import React from "react";
import "./Projects.css";
import Freshmart from "../../assets/Freshmart.png";
import SMS from "../../assets/SMS.png";

const Projects = () => {
  return (
    <div id = "projects" className="projects">
      <div className="project-title">
        <h1>My Projects</h1>
        <p>
          A showcase of projects demonstrating my skills in designing
          user-friendly interfaces and developing scalable backend solutions.
        </p>
      </div>
      <div className="project">
        <div className="project-container">
          <img src={Freshmart} alt="" />
          <h1>E-commerce Website</h1>
          <p>
            A responsive grocery e-commerce website with clean UI, built using
            HTML, CSS, and JavaScript for smooth browsing across all devices.
          </p>
          <div className="button"><a href="https://riyasingh49.github.io/FreshMart/" target="_blank" rel = "noopener noreferrer">View Project</a></div>
        </div>
        <div className="project-container">
          <img src={SMS} alt="" />
          <h1>Student Management System</h1>
          <p>
          Desktop app using Java Swing and MySQL for managing student records with CRUD operations and JDBC integration.
          </p>
          <div className="button"><a href="https://github.com/riyasingh49/student-management-system.git" target="_blank" rel = "noopener noreferrer">View Project</a></div>
        </div>
      </div>
      <div className="button1"><a href="https://github.com/riyasingh49" target="_blank" rel = "noopener noreferrer">More Projects</a> </div>

    </div>
  );
};

export default Projects;

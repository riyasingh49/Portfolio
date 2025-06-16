import React from "react";
import "./Projects.css";
import Freshmart from "../../assets/Freshmart.png";
import SMS from "../../assets/SMS.png";

const Projects = () => {
  return (
    <div className="projects">
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
          <p>
            A responsive grocery e-commerce website with clean UI, built using
            HTML, CSS, and JavaScript for smooth browsing across all devices.
          </p>
          <div className="button"></div>
        </div>
        <div className="project-container">
          <img src={SMS} alt="" />
          <p>
            A desktop application built with Java (Swing) and MySQL, enabling
            add/view/update/delete operations for student records. Features a
            clean UI and robust database integration using JDBC.
          </p>
          <div className="button">s</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

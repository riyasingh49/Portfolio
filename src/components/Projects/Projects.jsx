import React from "react";
import "./Projects.css";
import Freshmart from "../../assets/Freshmart.png";
import SMS from "../../assets/SMS.png";

const projectItems = [
  {
    image: Freshmart,
    title: "E-commerce Website",
    description:
      "A responsive grocery e-commerce website with clean UI, built using HTML, CSS, and JavaScript for smooth browsing across all devices.",
    url: "https://riyasingh49.github.io/FreshMart/",
  },
  {
    image: SMS,
    title: "Student Management System",
    description:
      "Desktop app using Java Swing and MySQL for managing student records with CRUD operations and JDBC integration.",
    url: "https://github.com/riyasingh49/student-management-system.git",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="project-title">
        <h1>My Projects</h1>
        <p>
          A showcase of projects demonstrating my skills in designing
          user-friendly interfaces and developing scalable backend solutions.
        </p>
      </div>

      <div className="project-gallery" aria-label="Project previews">
        {projectItems.map((project, index) => (
          <article className="project-showcase" key={project.title}>
            <img src={project.image} alt={`${project.title} preview`} />
            <div className="project-overlay">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </article>
        ))}
      </div>

      <a
        className="more-projects"
        href="https://github.com/riyasingh49"
        target="_blank"
        rel="noopener noreferrer"
      >
        More Projects
      </a>
    </div>
  );
};

export default Projects;

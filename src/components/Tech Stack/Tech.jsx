import React from "react";
import "./Tech.css";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiC, SiBootstrap, SiMysql, SiLeetcode } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const icons = {
  JAVA: <FaJava style={{ color: "#f89820" }} />,          // Orange for Java
  "C Programming": <SiC style={{ color: "#A8B9CC" }} />,
  Javascript: <FaJs style={{ color: "#f0db4f" }} />,       // Yellow for JS
  HTML: <FaHtml5 style={{ color: "#e44d26" }} />,
  "React Js": <FaReact style={{ color: "#61DBFB" }} />,
  CSS: <FaCss3Alt style={{ color: "#264de4" }} />,
 
  Bootstrap: <SiBootstrap style={{ color: "#563d7c" }} />,
  MySQL: <SiMysql style={{ color: "#00758f" }} />,
  JDBC: <FaDatabase style={{ color: "#4DB33D" }} />,       // Greenish DB
  "VS code": <BiLogoVisualStudio style={{ color: "#007ACC" }} />,
  Leetcode: <SiLeetcode style={{ color: "#FFA116" }} />,
  Github: <FaGithub style={{ color: "#FFFFFF" }} />,
};


const tech = {
  "Programming Skills": ["JAVA", "C Programming", "Javascript"],
  Frontend: ["HTML", "CSS", "React Js", "Bootstrap"],
  Backend: ["MySQL", "JDBC"],
  "Tools & Platforms": ["VS code", "Leetcode", "Github"],
};

const TechStack = () => {
  return (
    <div className="techstack">
      <div className="techstack-title">
        <h1>Tech Stack</h1>
        <p>
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
      </div>
      <div className="techstack-container"> 
        {Object.entries(tech).map(([category, items]) => (
          <div key={category} className="tech-card">
            <h2 className="tech-title">{category}</h2>
            <div className="tech-skills-row">
              {items.map((tech) => (
                <div key={tech} className="skill-pill">
                  <span className="skill-icon">{icons[tech]}</span>
                  <span className="skill-label">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
       </div>
    </div>
  );
};

export default TechStack;

import React from 'react';
import './Tech.css';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiC, SiBootstrap, SiMysql, SiLeetcode } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";

const icons = {
  'JAVA': <FaJava />,
  'C Programming': <SiC />,
  'Javascript': <FaJs />,
  'HTML': <FaHtml5 />,
  'CSS': <FaCss3Alt />,
  'React Js': <FaReact />,
  'Bootstrap': <SiBootstrap />,
  'MySQL': <SiMysql />,
  'JDBC': <FaDatabase />,
  'VS code': <BiLogoVisualStudio />,
  'Leetcode': <SiLeetcode />,
  'Github': <FaGithub />,
};

const tech = {
  'Programming Skills': ['JAVA', 'C Programming', 'Javascript'],
  'Frontend': ['HTML', 'CSS', 'React Js', 'Bootstrap'],
  'Backend': ['MySQL', 'JDBC'],
  'Tools': ['VS code', 'Leetcode', 'Github'],
};

const TechStack = () => {
  return (
    <div className="techstack-container">
      {Object.entries(tech).map(([category, items]) => (
        <div key={category} className="tech-card">
          <h2 className="tech-title">{category}</h2>
          <div className="tech-skills-row">
            {items.map(tech => (
              <div key={tech} className="skill-pill">
                <span className="skill-icon">{icons[tech]}</span>
                <span className="skill-label">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;

import React from "react";
import "./Skills.css";
import java from "../../assets/java.svg";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <h1>Tech Stack</h1>
        <p>Here are some of my skills on which I have been working on for the past 2 years.</p>

      </div>
      <div className="skills-containers">
        <div className="skills-container">
          <h1>Programming Skills</h1>
          <ul className="skills-menu">
            <li>Java</li>
            <li>C programming</li>
            <li>Javascript</li>
            </ul>
        </div>
        <div className="skills-container">
          <h1>Frontened </h1>
          <ul className="skills-menu">
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>React js</li>
          </ul>
        </div>
      </div>
      <div className="skills-containers">
        <div className="skills-container">
          <h1>Backened </h1>
          <ul className="skills-menu">
            <li>MySQL</li>
            <li>JDBC</li>
          </ul>
        </div>
        {/* <div className="skills-container">
                <h1>Computer Fundamentals</h1>
                <ul className='skills-menu'>
                    <li>Data Structure</li>
                    <li>Software Engineering</li>
                    <li>Computer Networks</li>
                </ul>
            </div> */}
        <div className="skills-container">
          <h1>Tools & Platforms</h1>
          <ul className="skills-menu">
            <li>VS Code(Visual Studio Code)</li>
            <li>Git hub</li>
            <li>MySQL Workbench</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

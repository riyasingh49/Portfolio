import React from 'react'
import './Skills.css'
import java from '../../assets/java.svg'

const Skills = () => {
  return (
    <div className='skills'>
        <div className="skills-title">
            <h1>Tech Stack</h1>
        </div>
        <div className="skills-containers">
            <div className="skills-container">
                <h1>Programming Language</h1>
                <img src={java} alt="java logo" className='icons'/>
                <li>c programming</li>
                <li>Javascript</li>
                <span>Java</span>
            </div>
            <div className="skills-container">
                <h1>Frontened </h1>
                <ul className='skills-menu'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>React js</li>
                </ul>
            </div>
            <div className="skills-container">
                <h1>Backened </h1>
                <ul className='skills-menu'>
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
                <ul className='skills-menu'>
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

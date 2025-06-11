import React from 'react'
import './About.css'
import Riya from "../../assets/Riya.jpeg"
import a from "../../assets/a.png"

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Riya} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Full Stack Developer with hands-on experience in building responsive and dynamic web applications. I specialize in using React, Bootstrap, HTML, CSS, and JavaScript to create intuitive and user-friendly frontend interfaces, while leveraging Java, JDBC, and MySQL for robust and efficient backend development. I enjoy crafting end-to-end solutions that are visually appealing, functionally sound, and scalable.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>React js</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>MySQL</p><hr style={{width:"75%"}}/></div>
                </div>
                <div className="about-achievement">
                    <h1>Cleared GATE Exam</h1>
                    <p>Year 2025</p>
                </div>
                <div className="about-achievement">
                    <h1>250+ problems</h1>
                    <p>solved in Codechef</p>
                </div>
                <div className="about-achievement">
                    <h1>Silver Badge</h1>
                    <p>for Contest and Problems in codechef</p>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default About

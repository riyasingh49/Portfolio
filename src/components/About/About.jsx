import React from "react";
import "./About.css";
import Riya from "../../assets/Riya.jpeg";

const About = () => {
  return (
    <div id = "about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={Riya} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm an aspiring full stack developer with hands-on experience in
              building responsive web applications. I specialize in creating
              user-friendly frontends with React, Bootstrap, HTML, CSS, and
              JavaScript, and developing robust backends using Java, JDBC, and
              MySQL. I enjoy crafting scalable, visually appealing, and
              functional end-to-end solutions.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>GATE Exam</h1>
          <p>cleared in Year 2025</p>
        </div>
        <div className="about-achievement">
          <h1>250+ </h1>
          <p>problems solved in Codechef</p>
        </div>
        <div className="about-achievement">
          <h1>Silver Badge</h1>
          <p>for Contest and Problems in Codechef</p>
        </div>
      </div>
    </div>
  );
};

export default About;

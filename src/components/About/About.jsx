import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        {/* <div className="about-left">
          <img src={Riya} alt="" />
        </div> */}
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Software Developer focused on building responsive,
              scalable, and user-friendly web applications. I enjoy working
              across both frontend and backend development, creating clean
              interfaces, reliable APIs, database-driven workflows, and
              practical features that solve real-world problems. My core skills
              include React.js, Next.js, JavaScript, TypeScript, Express.js,
              REST APIs, SQL, Supabase, Redis, Java, JDBC, MySQL, and
              automated testing. I have experience building full-stack features,
              developing backend logic, connecting applications with databases,
              improving application performance, and using AI-assisted
              development to debug faster and deliver better solutions. I am
              continuously improving my skills in software engineering, system
              design, problem-solving, and modern web technologies, with the
              goal of building products that are efficient, maintainable, and
              meaningful for users.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next.js</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>TypeScript</p>
              <hr style={{ width: "75%" }} />
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
          <h1>GATE '26</h1>
          <p>qualified in 2026</p>
        </div>
        <div className="about-achievement">
          <h1>190+</h1>
          <p>problems solved in LeetCode</p>
        </div>
        <div className="about-achievement">
          <h1>100 Days</h1>
          <p>badge in LeetCode</p>
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

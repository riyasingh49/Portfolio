import React from "react";
import "./Footer.css";
import linkedin from "../../assets/linkedin.png"
import mail from "../../assets/mail.png"
import git from "../../assets/git.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-hero">
        <h1>Riya Singh</h1>
      </div>

      <ul className="footer-navbar">
        <li>Home</li>
        <li>About</li>
        <li>Certificates</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact info</li>
      </ul>
      <div className="footer-connection">
        <img src={mail} alt="" />
        <img src={linkedin} alt="" />
        <img src={git} alt="" />
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2025 Riya Singh. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

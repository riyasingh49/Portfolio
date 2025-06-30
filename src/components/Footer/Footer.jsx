import React from "react";
import "./Footer.css";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/mail.png";
import git from "../../assets/git.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-hero">
        <h1>Riya Singh</h1>
      </div>

      <ul className="footer-navbar">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>{" "}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#certifications"
          >
            <p onClick={() => setMenu("certifications")}>Certifications</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p onClick={() => setMenu("skills")}>Skills</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact </p>
          </AnchorLink>
        </li>
      </ul>
      <div className="footer-connection">
        <a href="mailto:riyasingh454247@gmail.com?subject=Portfolio Inquiry&body=Hi Riya, I saw your portfolio and...">
          <img src={mail} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/riya-singh-138b352a4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="" />
        </a>
        <a
          href="https://github.com/riyasingh49"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git} alt="" />
        </a>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2025 Riya Singh. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Contact.css";
import mail from "../../assets/mail.png";
import git from "../../assets/git.png";
import linkedin from "../../assets/linkedin.png";
import map from "../../assets/map.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "50d3766d-c508-4aaf-b7fe-14321faecda7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Web3Forms response:", result);

      if (result.success) {
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        alert("Failed: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let’s Connect</h1>
          <p>
            Feel free to reach out to me for any questions or opportunities!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <a href="mailto:riyasingh454247@gmail.com?subject=Portfolio Inquiry&body=Hi Riya, I saw your portfolio and...">
                riyasingh454247@gmail.com
              </a>
            </div>
            <div className="contact-detail">
              <img src={git} alt="" />
              <a
                href="https://github.com/riyasingh49"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/riyasingh49
              </a>
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt="" />
              <a
                href="https://www.linkedin.com/in/riya-singh-138b352a4"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/riya-singh-138b352a4
              </a>
            </div>
            <div className="contact-detail">
              <img src={map} alt="" />
              <p>Lucknow, Uttar Pradesh</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="5" placeholder="Enter your message" />
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

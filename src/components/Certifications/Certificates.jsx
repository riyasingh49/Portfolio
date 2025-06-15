import React from "react";
import './Certificates.css';
import NPTEL from '../../assets/NPTEL.jpeg';
import HTML from '../../assets/HTML.jpeg';
import JavaScript from "../../assets/JavaScript.jpg";
import algouniversity from "../../assets/algouniversity.png";

const Certificates = () => {
  return (
    <div className="certifications">
      <div className="certificates-title">
        <h1>My Certificates</h1>
        <p>The following certifications reflect my continuous efforts to build a strong foundation in programming, web development, and core computer science concepts.</p>
      </div>
      <div className="certification">
        <img src={NPTEL} alt="" />
        <img src={HTML} alt="" />
        <img src={JavaScript} alt="" />
        <img src={algouniversity} alt="" />
      </div>
      
    </div>
  );
};

export default Certificates;

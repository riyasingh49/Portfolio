import React from "react";
import './Certificates.css';
import NPTEL from '../../assets/NPTEL.jpeg';
import HTML from '../../assets/HTML.jpeg';
import JavaScript from "../../assets/JavaScript.jpg";
import algouniversity from "../../assets/algouniversity.png";
import DataAnalysis from "../../assets/DataAnalysis.jpg"

const Certificates = () => {
  return (
    <div id = "certifications" className="certifications">
      <div className="certificates-title">
        <h1>My Certificates</h1>
        <p>The following certifications reflect my continuous efforts to build a strong foundation in programming, web development, and core computer science concepts.</p>
      </div>
      <div className="certification">
        <a href="https://drive.google.com/file/d/1lAMHPMLOOU9VoQZjicQs14FxuxsxhzA7/view?usp=sharing " target="_blank" rel = "noopener noreferrer" ><img src={NPTEL} alt="" /></a>
        <a href="https://drive.google.com/file/d/11HljzdDCclvHOyikWb6e-9wmwv1NAjxi/view?usp=sharing" target="_blank" rel = "noopener noreferrer" ><img src={HTML} alt="" /></a>
        <a href="https://drive.google.com/file/d/1-zGvWYe9JZWoSW8sYHuGYwa7m64cYlUg/view?usp=sharing " target="_blank" rel = "noopener noreferrer" ><img src={JavaScript} alt="" /></a>
        <a href="https://drive.google.com/file/d/15i1_OOhRk5q1_ORJHPTQyJoQKlc_1zlc/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src={algouniversity} alt="" /></a>
        <a href="https://drive.google.com/file/d/1YJXqeDo-VloI_oI9Fbj7mWoy8-Z8Pq9Q/view?usp=sharing" target="_blank" rel = "noopener noreferrer" ><img src={DataAnalysis} alt="" /></a>

      </div>
      
    </div>
  );
};

export default Certificates;

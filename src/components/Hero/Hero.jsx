import React from 'react'
import './Hero.css'
import Riya from '../../assets/Riya.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
    return (
        <div id = "home" className='Hero'>
            <img src={Riya} alt="High Quality" />
            <h1><span>I'm Riya Singh, </span>Aspiring Full Stack developer</h1>
            <p>Aspiring Full Stack Developer with experience in React, Bootstrap, Java, JDBC, and MySQL. I build responsive, user-friendly interfaces and robust backend systems for dynamic web applications.</p>
            <div className="Hero-action">
                <div className="Hero-connect"><AnchorLink className = "anchor-link"  href = "#contact">Connect with me</AnchorLink></div>
                <div className="Hero-resume"><a href='https://drive.google.com/file/d/1kMv25CfbFO03UMKnE2S_Ukj4MH45tfNf/view?usp=share_link'target="_blank" 
            rel="noopener noreferrer">My resume</a></div>
            </div>
        </div>
    );
}

export default Hero;

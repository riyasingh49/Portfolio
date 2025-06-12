import React from 'react'
import './Hero.css'
import Riya from '../../assets/Riya.jpeg'
function Hero() {
    return (
        <div className='Hero'>
            <img src={Riya} alt="High Quality" />
            <h1><span>I'm Riya Singh, </span>Aspiring Full Stack developer</h1>
            <p>Aspiring Full Stack Developer with experience in React, Bootstrap, Java, JDBC, and MySQL. I build responsive, user-friendly interfaces and robust backend systems for dynamic web applications.</p>
            <div className="Hero-action">
                <div className="Hero-connect">Connect with me</div>
                <div className="Hero-resume">My resume</div>
            </div>
        </div>
    );
}

export default Hero;

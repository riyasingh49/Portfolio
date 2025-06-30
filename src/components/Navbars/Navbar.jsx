import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';



const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      <img src = {logo} alt='' className = "img"/>
      <ul className='nav-menu'>
        <li><AnchorLink className = "anchor-link" href = "#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink> </li>
        <li><AnchorLink className = "anchor-link" offset ={50} href = "#about"><p onClick={() => setMenu("about")}>About</p></AnchorLink></li>
        <li><AnchorLink className = "anchor-link" offset = {50} href = "#certifications"><p onClick={() => setMenu("certifications")}>Certifications</p></AnchorLink></li>
        <li><AnchorLink className = "anchor-link" offset = {50} href = "#skills"><p onClick={() => setMenu("skills")}>Skills</p></AnchorLink></li>
        <li><AnchorLink className = "anchor-link" offset = {50} href = "#projects"><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink></li>
        <li><AnchorLink className = "anchor-link" offset = {50} href = "#contact"><p onClick={() => setMenu("contact")}>Contact </p></AnchorLink></li>
      </ul>
      <div className='nav-connect'><AnchorLink className = "anchor-link" offset = {50} href = "#contact">Connect with me</AnchorLink></div>
      
    </div>
  );
}

export default Navbar;

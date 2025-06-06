import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src = {logo} alt=''/>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About</li>
        <li>Courses & Certifications</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact info</li>
      </ul>
      <div className='nav-connect'>Connect with me</div>
      
    </div>
  );
}

export default Navbar;

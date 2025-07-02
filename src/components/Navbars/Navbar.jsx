import React, { useState , useRef} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.png'



const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <img src = {logo} alt='' className = "img"/>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-open' />
      <ul ref = {menuRef} className='nav-menu'>
        <img src={menu_close} onClick = {closeMenu} alt="" className="nav-close" />
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

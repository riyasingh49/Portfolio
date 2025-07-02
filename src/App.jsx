import React from 'react'
import "./App.css"
import Navbar from './components/Navbars/Navbar'
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import TechStack from './components/Tech Stack/Tech';
import Certificates from './components/Certifications/Certificates';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <div className='portfolio'>
     <Navbar />
     <Hero />
     <About />
     {/* <Skills /> */}
     <Certificates />
     <TechStack />
     <Projects/>
     <Contact />
    </div>
    <Footer/></>
    
  );
}

export default App;


import React from 'react'
import Navbar from './components/Navbars/Navbar'
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
// import TechStack from './components/Tech Stack/Tech';
import Certificates from './components/Certifications/Certificates';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <About />
     <Skills />
     {/* <TechStack /> */}
     <Certificates />
     <Projects/>
    </div>
  );
}

export default App;


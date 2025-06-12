import React from 'react'
import Navbar from './components/Navbars/Navbar'
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <About />
     <Skills />
    </div>
  );
}

export default App;


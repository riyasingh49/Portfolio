import React, { lazy } from 'react'
import "./App.css"
import Navbar from './components/Navbars/Navbar'
import Hero from './components/Hero/Hero';
import LazySection from './components/LazySection/LazySection';

const About = lazy(() => import('./components/About/About'));
const TechStack = lazy(() => import('./components/Tech Stack/Tech'));
const Certificates = lazy(() => import('./components/Certifications/Certificates'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Experience = lazy(() => import('./components/Experience/Experience'));

function App() {
  return (
  <>
    <div className='portfolio'>
     <Navbar />
     <Hero />
     <LazySection id="about" minHeight={700}><About /></LazySection>
     <LazySection id="certifications" minHeight={520}><Certificates /></LazySection>
     <LazySection id="skills" minHeight={650}><TechStack /></LazySection>
     <LazySection id="projects" minHeight={720}><Projects /></LazySection>
     <LazySection id="experience" minHeight={650}><Experience /></LazySection>
     <LazySection id="contact" minHeight={620}><Contact /></LazySection>
    </div>
    <LazySection id="footer" minHeight={300}><Footer /></LazySection></>
    
  );
}

export default App;

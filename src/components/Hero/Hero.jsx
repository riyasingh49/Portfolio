import React, { useEffect, useState } from 'react'
import './Hero.css'
import Riya from '../../assets/Riya.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const heroTitles = [
    'Software Developer',
    'Full Stack Developer',
    'Frontend Developer',
    'Java Explorer',
    'React.js Developer',
];

function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [typedTitle, setTypedTitle] = useState('');

    useEffect(() => {
        const currentTitle = heroTitles[titleIndex];

        if (typedTitle.length < currentTitle.length) {
            const typingTimer = setTimeout(() => {
                setTypedTitle(currentTitle.slice(0, typedTitle.length + 1));
            }, 80);

            return () => clearTimeout(typingTimer);
        }

        const nextTitleTimer = setTimeout(() => {
            setTypedTitle('');
            setTitleIndex((currentIndex) => (currentIndex + 1) % heroTitles.length);
        }, 3000);

        return () => clearTimeout(nextTitleTimer);
    }, [titleIndex, typedTitle]);

    return (
        <div id = "home" className='Hero'>
            <img src={Riya} alt="Riya Singh" fetchPriority="high" decoding="async" />
            <h1>
                <span>I'm Riya Singh, </span>
                <small className="Hero-title-cycle">{typedTitle}</small>
            </h1>
            <p>Software Developer with experience in Next.js, TypeScript, and Supabase. I build dynamic, responsive web applications from reusable UI components to server-side logic, database integrations, and automated testing, with a focus on clean code, smooth user experiences, and scalable product features.</p>
            <div className="Hero-action">
                <div className="Hero-connect"><AnchorLink className = "anchor-link"  href = "#contact">Connect with me</AnchorLink></div>
                <div className="Hero-resume"><a href='https://drive.google.com/file/d/1T0qLs8gUZg2rIJ13rzdlebz0HihxtoFK/view?usp=sharing'target="_blank" 
            rel="noopener noreferrer">My resume</a></div>
            </div>
        </div>
    );
}

export default Hero;

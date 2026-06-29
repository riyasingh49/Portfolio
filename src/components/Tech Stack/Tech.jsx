import React from "react";
import "./Tech.css";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaDatabase,
  FaVial,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiC,
  SiClaude,
  SiGit,
  SiGreensock,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const icons = {
  JavaScript: <FaJs style={{ color: "#f0db4f" }} />,
  TypeScript: <SiTypescript style={{ color: "#3178c6" }} />,
  Java: <FaJava style={{ color: "#f89820" }} />,
  "C Programming": <SiC style={{ color: "#A8B9CC" }} />,
  SQL: <FaDatabase style={{ color: "#4DB33D" }} />,
  HTML5: <FaHtml5 style={{ color: "#e44d26" }} />,
  CSS3: <FaCss3Alt style={{ color: "#264de4" }} />,
  "React.js": <FaReact style={{ color: "#61DBFB" }} />,
  "Next.js": <SiNextdotjs style={{ color: "#FFFFFF" }} />,
  "Tailwind CSS": <SiTailwindcss style={{ color: "#38bdf8" }} />,
  Bootstrap: <SiBootstrap style={{ color: "#563d7c" }} />,
  GSAP: <SiGreensock style={{ color: "#88ce02" }} />,
  Supabase: <SiSupabase style={{ color: "#3ecf8e" }} />,
  "Redis Cache": <SiRedis style={{ color: "#dc382d" }} />,
  MySQL: <SiMysql style={{ color: "#00758f" }} />,
  JDBC: <FaDatabase style={{ color: "#4DB33D" }} />,
  Git: <SiGit style={{ color: "#f05032" }} />,
  GitHub: <FaGithub style={{ color: "#FFFFFF" }} />,
  "VS Code": <BiLogoVisualStudio style={{ color: "#007ACC" }} />,
  "MySQL Workbench": <SiMysql style={{ color: "#00758f" }} />,
  Linux: <SiLinux style={{ color: "#fcc624" }} />,
  Playwright: <FaVial style={{ color: "#45ba4b" }} />,
  Codex: <SiOpenai style={{ color: "#FFFFFF" }} />,
  "Claude Code": <SiClaude style={{ color: "#d97757" }} />,
};


const tech = {
  "Programming Skills": ["JavaScript", "TypeScript", "Java", "C Programming", "SQL"],
  "Frontend": ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "GSAP"],
  "Backend & Database": ["Supabase", "Redis Cache", "MySQL", "JDBC"],
  "Tools & Platforms": ["GitHub", "VS Code", "MySQL Workbench", "Linux", "Playwright", "Codex", "Claude Code"],
};

const TechStack = () => {
  return (
    <div className="techstack">
      <div className="techstack-title">
        <h1>Tech Stack</h1>
        <p>
          Here's a closer look at the stack behind my projects, covering
          everything from frontend to deployment.
        </p>
      </div>
      <div className="techstack-container"> 
        {Object.entries(tech).map(([category, items]) => (
          <div key={category} className="tech-card">
            <h2 className="tech-title">{category}</h2>
            <div className="tech-skills-row">
              {items.map((tech) => (
                <div key={tech} className="skill-pill">
                  <span className="skill-icon">{icons[tech]}</span>
                  <span className="skill-label">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
       </div>
    </div>
  );
};

export default TechStack;

import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaCode } from 'react-icons/fa'
import "./Experience.css"

const experiences = [
  {
    milestone: '01',
    icon: <FaBriefcase />,
    title: 'AI and Data Analytics Intern',
    company: 'AICTE x Shell x Edunet Foundation',
    duration: 'Aug 2025 - Sep 2025',
    description:
      'Built an Air Quality Forecasting model with Python-based preprocessing, feature engineering, model training, and visualization.',
    tags: ['Python', 'Data preprocessing', 'Scikit-learn', 'Model training'],
  },
  {
    milestone: '02',
    icon: <FaCode />,
    title: 'Support Developer Intern',
    company: 'Ahurasense Technology Pvt. Ltd.',
    duration: 'Feb 2026 - May 2026',
    description:
      'Built full-stack e-commerce dashboard modules using Next.js, TypeScript, Express.js, Supabase, Redis Cache, REST APIs, and Playwright testing.',
    tags: ['Next.js', 'TypeScript', 'Playwright', 'Redis Cache'],
  },
]

const Experience = () => {
  return (
    <div className='Experience'>
      <div className="Exp-title">
        <span>Experience</span>
        <h1>Experience <strong>Journey</strong></h1>
        <p>A journey of learning, building, and growing through impactful internships.</p>
      </div>

      <div className="experience-journey">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.milestone}>
            <div className="experience-milestone">
              <div className="experience-icon">{experience.icon}</div>
              <div className="milestone-line"></div>
              <div className="milestone-number">
                <strong>{experience.milestone}</strong>
                <span>Milestone</span>
              </div>
            </div>

            <div className="experience-content">
              <h2>{experience.title}</h2>
              <h3>{experience.company}</h3>
              <div className="experience-date">
                <FaCalendarAlt />
                <span>{experience.duration}</span>
              </div>
              <p>{experience.description}</p>
              <div className="experience-tags">
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

          </article>
        ))}

        <svg className="journey-arrow" viewBox="0 0 1120 300" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="journeyGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b5cff" />
              <stop offset="52%" stopColor="#ff5fb7" />
              <stop offset="100%" stopColor="#ff9f43" />
            </linearGradient>
            <marker
              id="journeyArrowHead"
              markerHeight="14"
              markerUnits="userSpaceOnUse"
              markerWidth="14"
              orient="auto"
              refX="11"
              refY="7"
            >
              <path d="M 0 0 L 14 7 L 0 14 z" fill="#ff9f43" />
            </marker>
          </defs>
          <path
            d="M 641 24 C 835 70 890 165 718 224 C 625 255 538 270 448 295"
            fill="none"
            markerEnd="url(#journeyArrowHead)"
            stroke="url(#journeyGradient)"
            strokeLinecap="round"
            strokeWidth="4"
          />
          <circle cx="641" cy="24" r="15" fill="#101010" stroke="rgba(255,255,255,0.32)" strokeWidth="3" />
          <circle cx="641" cy="24" r="7" fill="#8b5cff" />
          <circle cx="448" cy="295" r="15" fill="#101010" stroke="#ff9f43" strokeWidth="3" />
          <circle cx="448" cy="295" r="7" fill="#ff5fb7" />
        </svg>
      </div>
    </div>
  )
}

export default Experience

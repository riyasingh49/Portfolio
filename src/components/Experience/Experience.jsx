import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import "./Experience.css"

const experiences = [
  {
    title: 'AI and Data Analytics Virtual Intern',
    company: 'AICTE x Shell x Edunet Foundation',
    duration: 'Aug 2025 - Sep 2025',
    contributions: [
      'Built an Air Quality Forecasting model using machine learning.',
      'Performed Python-based data preprocessing, model development, and visualization.',
    ],
    stack: ['Python', 'NumPy', 'Machine Learning', 'Data Preprocessing', 'Visualization'],
  },
  {
    title: 'Support Developer Intern',
    company: 'Ahurasense Technology Pvt. Ltd.',
    duration: 'Feb 2026 - May 2026',
    contributions: [
      'Built full-stack features for an e-commerce platform, including dashboard modules such as Contact Us, Coupons, Saved Addresses, Wishlist and user assistance workflows.',
      'Developed frontend and backend functionality using reusable UI components, server-side operations, REST APIs, database-driven flows, and scalable application structure.',
      'Worked on testing and performance improvements, including Playwright automation testing, Redis caching, and support for a domain-specific chatbot for food-related user queries.',
    ],
    stack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'REST APIs',
      'Server Actions',
      'Supabase',
      'Redis Cache',
      'Playwright',
      'API Testing',
      'E2E Testing',
      'Git',
      'Linux',
      'AI-Assisted Development',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className='Experience'>
      <div className="Exp-title">
        <h1>Experience Journey</h1>
        <p>A glimpse into the experiences that shaped my growth, strengthened my skills, and helped me move closer to my career goals.</p>
      </div>

      <div className="experience-snapshot">
        <div className="snapshot-rail" aria-hidden="true">
          <span className="rail-line"></span>
          <span className="rail-arrow"></span>
        </div>

        {experiences.map((experience) => (
          <article className="experience-card" key={experience.title}>
            <div className="experience-content">
              <h2>{experience.title}</h2>
              <h3>{experience.company}</h3>
              <div className="experience-date">
                <FaCalendarAlt />
                <span>{experience.duration}</span>
              </div>

              <div className="experience-section">
                <h4>Key Contributions</h4>
                <ul>
                  {experience.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="experience-section">
                <h4>Tech Stack</h4>
                <div className="experience-tags">
                  {experience.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience

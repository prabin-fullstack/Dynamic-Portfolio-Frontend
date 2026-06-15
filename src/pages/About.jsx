import React from 'react'
import '..//style/About.css'

function About({projectCount,technologyCount}) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <p className="about-eyebrow">Get to know me</p>
        <h2 className="about-heading">About <span>me</span></h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm <span className="highlight">Prabin O</span>, a Python Full Stack Developer and BCA graduate from
              Malappuram, Kerala. I build end-to-end web applications using
              <span className="highlight"> Django</span>, <span className="highlight">Django REST Framework</span>,
              and <span className="highlight">React.js</span>, with a strong focus on <span className="highlight">REST APIs</span> , <span className="highlight">authentication</span>,
              <span className="highlight">CRUD operations</span>, and clean <span className="highlight">responsive design</span>.
            </p>
            <p>
              From a full-stack photography platform to a real-time weather app and a Progressive Web App, I enjoy
              taking ideas from concept to deployment — handling everything from database design to UI polish. I'm
              currently sharpening my <span className="highlight"> Data Structures & Algorithms</span> skills while continuing to build job-ready
              full-stack projects.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">{projectCount}+</span>
              <span className="stat-label">Projects built</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">6</span>
              <span className="stat-label">Months work experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{technologyCount}+</span>
              <span className="stat-label">Technologies used</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2024</span>
              <span className="stat-label">BCA graduate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
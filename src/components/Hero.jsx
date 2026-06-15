import React from 'react'
import '..//style/Hero.css'
import profileImg from '../assets/profile.jpeg'




function Hero({projectCount,technologyCount}) {
  return (
    <section id="home" className="hero-section">

      {/* ── LEFT / BACKGROUND: Photo ── */}
      <div className="hero-left">
        <img src={profileImg} alt="Prabin O" className="hero-bg-img" />
        <div className="hero-left-overlay"></div>
      </div>

      {/* ── RIGHT / FOREGROUND: Text ── */}
      <div className="hero-right">

        {/* Top bar */}
        <div className="hero-top">
          <span className="hero-tag">
            <span className="tag-dot"></span>
            Available for hire
          </span>
          <span className="hero-location">📍<span className='location'> Kerala, India</span></span>
        </div>

        {/* Name + role + description + buttons */}
        <div className="hero-middle">
          <h1 className="hero-name">
            <span className="name-line slide-up" style={{ animationDelay: '0.1s' }}>PRABIN</span>
            <span className="name-line outline slide-up" style={{ animationDelay: '0.22s' }}>O</span>
          </h1>

          <div className="hero-role slide-up" style={{ animationDelay: '0.35s' }}>
            <span className="role-line"></span>
            <div>
              <p className="role-title">Python Full-Stack Developer</p>
              <p className="role-sub">Django · React · REST APIs</p>
            </div>
          </div>

          <p className="hero-description slide-up" style={{ animationDelay: '0.48s' }}>
            I build end-to-end web applications using{' '}
            <span className="hl">Python</span>,{' '}
            <span className="hl">Django</span>, and{' '}
            <span className="hl">React</span> — from database to UI, concept to deployment.
          </p>

          <div className="hero-buttons slide-up" style={{ animationDelay: '0.6s' }}>
            <a href="#project" className="btn-primary">
              View Projects
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-bottom slide-up" style={{ animationDelay: '0.72s' }}>
          <div className="hero-stat">
            <span className="stat-num">{projectCount}+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-sep"></div>
          <div className="hero-stat">
            <span className="stat-num">{technologyCount}+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-sep"></div>
          <div className="hero-stat">
            <span className="stat-num">BCA</span>
            <span className="stat-label">Graduate 2024</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero
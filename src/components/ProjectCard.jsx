import React from 'react'
import '..//style/ProjectCard.css'
import api from '../services/api'



function ProjectCard({ projects }) {
  return (
    <section id="project" className="projects-section">
      <div className="container">
        <p className="projects-eyebrow">What I've built</p>
        <h2 className="projects-heading">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={project.id}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {project.image && (
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
  e.target.style.display = "none";
}}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.live_link && (
                        <a href={project.live_link} target="_blank" rel="noreferrer" className="project-link-btn">
                          🌐 Live
                        </a>
                      )}
                      {project.github_link && (
                        <a href={project.github_link} target="_blank" rel="noreferrer" className="project-link-btn">
                          🐙 GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile-only button bar — always visible, no hover needed */}
              {project.image && (project.live_link || project.github_link) && (
                <div className="project-mobile-links">
                  {project.live_link && (
                    <a href={project.live_link} target="_blank" rel="noreferrer" className="project-link-btn">
                      🌐 Live
                    </a>
                  )}
                  {project.github_link && (
                    <a href={project.github_link} target="_blank" rel="noreferrer" className="project-link-btn">
                      🐙 GitHub
                    </a>
                  )}
                </div>
              )}

              <div className="project-body">
                <h5 className="project-title">{project.title}</h5>
                <p className="project-description">{project.description}</p>
                <div className="project-divider"></div>
                <div className="project-tags">
                  {project.technologies.map((tech, i) => (
                    <span className="project-tag" key={i}>{tech.name}</span>
                  ))}
                </div>

                {!project.image && (project.live_link || project.github_link) && (
                  <div className="project-footer-links">
                    {project.live_link && (
                      <a href={project.live_link} target="_blank" rel="noreferrer" className="project-link-btn">
                        🌐 Live
                      </a>
                    )}
                    {project.github_link && (
                      <a href={project.github_link} target="_blank" rel="noreferrer" className="project-link-btn">
                        🐙 GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
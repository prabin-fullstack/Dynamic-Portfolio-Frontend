import React, { useState } from 'react'
import '..//style/SkillsCard.css'



const categoryMeta = {
  frontend:        { icon: '🎨', label: 'Frontend' },
  backend:         { icon: '⚙️', label: 'Backend' },
  languages:       { icon: '💻', label: 'Languages' },
  database:        { icon: '🗄️', label: 'Database' },
  'tools & platforms': { icon: '🛠️', label: 'Tools & Platforms' },
  'core concepts': { icon: '🧠', label: 'Core Concepts' },
}

function SkillsCard({ skills }) {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="skills-eyebrow">What I work with</p>
        <h2 className="skills-heading">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const key   = skill.category?.toLowerCase() || ''
            const meta  = categoryMeta[key] || { icon: '📌', label: skill.category_display }

            return (
              <div
                key={skill.id ?? index}
                className="skill-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Header */}
                <div className="skill-card-header">
                  <div className="skill-icon">{meta.icon}</div>
                  <div className="skill-card-meta">
                    <p className="skill-category-name">{meta.label}</p>
                    <p className="skill-count">{skill.technologies.length} skills</p>
                  </div>
                </div>

                <div className="skill-divider"></div>

                {/* Tech tags */}
                <div className="skill-tags">
                  {skill.technologies.map((tech) => (
                    <span className="skill-tag" key={tech.id ?? tech.name}>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsCard
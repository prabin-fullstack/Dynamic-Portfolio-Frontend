import '../style/Contact.css'
import React, { useState } from 'react'
import api from '../services/api'

function Contact() {
  const [fname,    setFname]   = useState('')
  const [lname,    setLname]   = useState('')
  const [email,    setEmail]   = useState('')
  const [subject,  setSubject] = useState('')
  const [message,  setMessage] = useState('')
  const [sending,  setSending] = useState(false)
  const [sent,     setSent]    = useState(false)
  const [error,    setError]   = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setSent(false)
    setError(false)

    try {
      const response = await api.post('contact/', {
        first_name: fname,
        last_name:  lname,
        email:      email,
        subject:    subject,
        message:    message,
      })
      console.log(response.data)
      setSent(true)
      setTimeout(()=>{
        setSent(false)
      },3000)
      // Clear form
      setFname('')
      setLname('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <p className="contact-eyebrow">Get in touch</p>
        <h2 className="contact-heading">Contact</h2>
        <p className="contact-subheading">
          Have a project in mind or want to collaborate? Drop a message and I'll get back to you within 24 hours.
        </p>

        <div className="contact-layout">

          {/* ── Info panel ── */}
          <div className="contact-info">
            <div>
              <p className="info-label">Email</p>
              <a href="mailto:prabinsonu42@gmail.com" className="info-value">prabinsonu42@gmail.com</a>
            </div>

            <div className="info-divider" />

            <div>
              <p className="info-label">Location</p>
              <p className="info-value">Kerala, India 🇮🇳</p>
            </div>

            <div className="info-divider" />

            <div>
              <p className="info-label">Socials</p>
              <div className="social-links">
                <a href="https://github.com/prabin-fullstack" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
                <a href="https://www.linkedin.com/in/prabin-o-fullstack/" target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>
                
              </div>
            </div>

            <div className="info-divider" />

            <div className="availability">
              <span className="availability-dot" />
              Available for freelance work
            </div>
          </div>

          {/* ── Form panel ── */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="fname">First name</label>
                  <input className="form-input" id="fname" type="text"
                    value={fname} onChange={(e) => setFname(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="lname">Last name</label>
                  <input className="form-input" id="lname" type="text"
                    value={lname} onChange={(e) => setLname(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input className="form-input" id="email" type="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <select className="form-select" id="subject"
                    value={subject} onChange={(e) => setSubject(e.target.value)} required>
                    <option value="" disabled>Select a topic</option>
                    <option value="freelance">Freelance project</option>
                    <option value="fulltime">Full-time opportunity</option>
                    <option value="collab">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea className="form-textarea" id="message"
                    placeholder="Tell me about your project..."
                    value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
              </div>

              <div className="form-submit">
                <p className="submit-note">I'll reply within 24 hours.</p>
                <button type="submit" className="submit-btn" disabled={sending}>
                  {sending ? 'Sending...' : 'Send message'}
                  {!sending && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </button>
              </div>

              {/* ── Success toast ── */}
              {sent && (
                <div className="form-toast form-toast--success">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Message sent! I'll get back to you soon.
                </div>
              )}

              {/* ── Error toast ── */}
              {error && (
                <div className="form-toast form-toast--error">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Something went wrong. Please try again.
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
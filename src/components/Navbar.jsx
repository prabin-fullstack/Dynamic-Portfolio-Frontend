import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import '../style/Navbar.css'

const navLinks = [
  { label: 'Home',     to: 'home' },
  { label: 'About',    to: 'about' },
  { label: 'Skills',   to: 'skills' },
  { label: 'Projects', to: 'project' },
  { label: 'Contact',  to: 'contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">

          {/* Brand */}
          <Link
            to="home"
            smooth duration={500}
            className="navbar-brand"
            onClick={closeMenu}
          >
            Pra<span>bin</span>
          </Link>

          {/* Hamburger */}
          <button
            className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Links */}
          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <li className="drawer-label">Menu</li>
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  
                  duration={500}
                  spy
                  activeClass="active"
                  offset={-60}
                  className="navbar-link"
                  onClick={closeMenu}
                >
                  {label}
                  <span className="navbar-link-bar" />
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`navbar-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />
    </>
  )
}

export default Navbar
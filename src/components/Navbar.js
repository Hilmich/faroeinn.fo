import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Forsíða
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/bilegging">
          Bílegging
        </Link>
        <Link className="navbar-item" to="/um-okkum">
          Um okkum
        </Link>
        <Link className="navbar-item" to="/Link">
          Link
        </Link>        
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar

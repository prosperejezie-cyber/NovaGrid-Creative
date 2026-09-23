import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div> {/* <!-- HEADER --> */}
      <section>
        <header>
          <div className="nav-links-text">
            <a href="Home">Home</a>
          </div>
          <div className="nav-links-text">
            <a href="contact us">Contact us</a>
          </div>
          <div className="nav-links-text">
            <a href="About">About</a>
          </div>
          <div className="nav-links-text">
            <a href="services">Services</a>
          </div>
        </header>
      </section></div>
  )
}

export default Navbar

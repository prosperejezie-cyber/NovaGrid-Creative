import React from 'react'
import "./Hero.css";
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div>{/* <!-- HERO SECTION --> */}
      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>Welcome to my web page</h1>
            <p>
              We specialize on fullstack development, development, UI/UX,
              graphics design and others
            </p>
            
            <Link to="/Login"><button>Get Started</button></Link>
          </div>
        </div>
      </section></div>
  )
}

export default Hero

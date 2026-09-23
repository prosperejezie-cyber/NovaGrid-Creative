import React from 'react'
import card1 from '../../assets/card4.png'
import "./About.css";

const About = () => {
  return (
    <div>{/* <!-- ABOUT SECTION --> */}
          <section className="about">
            <div className="about-text">
              <h4>ABOUT US</h4>
              <h2>
                Building skills, <br />
                Building future
              </h2>
              <p>
                At morning className digital skill academy, we provide practical
                tarining that helps you create a future.
              </p>
              <ul>
                <li> &#10004; Practical Heads-on learning</li>
                <li> &#10004; Expert Instructors</li>
                <li> &#10004; Flexible Learing Schedule</li>
              </ul>
              <a href="#" className="btn">
                learn more
              </a>
            </div>
            <div className="about-image">
              <img
                src={card1}
                alt="student learning"
              />
            </div>
          </section></div>
  )
}

export default About

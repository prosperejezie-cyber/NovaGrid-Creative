import React from 'react'
import card4 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.jpg'
import "./Testimony.css";


const Testimony = () => {
  return (
    <div> {/* <!-- TESTIMONY SECTION --> */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback From Our Students</h2>
        <div className="Testimonial-container">
          <div className="card">
            <img src={card4}
            alt="student learning" />
            <h3>Oluchi Iwueze</h3>
            <p>
              This Academy Complete Change my Career. so far i have gotten a
              great structure on it
            </p>
          </div>
          <div className="card">
            <img src={card2}
            alt="student learning" />
            <h3>Iwu Clement</h3>
            <p>
              The academy stands to be stepping stone towards my dream in the
              world of fullstack-development
            </p>
          </div>
          <div className="card">
            <img src={card3}
            alt="student learning" />
            <h3>Joseph Claret</h3>
            <p>
              This Academy Complete Change my Career. so far i have gotten a
              great structure on it
            </p>
          </div>
        </div>
      </section></div>
  )
}

export default Testimony

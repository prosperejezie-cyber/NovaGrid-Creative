import React from 'react'
import "./ContactUsPage.css"
// import card5 from '../assets/card5.png'

const ContactUsPage = () => {
  return (
    <div className="contact-page">

      {/* CONTACT HERO */}
      <section className="contact-hero">

        {/* <img
          src={card5}
          alt="Contact Us"
        /> */}

        <div className="contact-overlay"></div>

        <div className="contact-content">

          <p className="contact-small-title">
            Get in Touch
          </p>

          <h1>
            Contact Us
          </h1>

          <p className="contact-description">
            We’d love to hear from you. Feel free to reach out
            with any questions, suggestions or support.
          </p>

          <div className="contact-details">

            <div className="contact-box">
              <h2>Email</h2>
              <p>info@example.com</p>
            </div>

            <div className="contact-box">
              <h2>Phone</h2>
              <p>+234 800 000 0000</p>
            </div>

            <div className="contact-box">
              <h2>Location</h2>
              <p>Owerri, Imo State</p>
            </div>

          </div>

        </div>

      </section>


      {/* COPYRIGHT */}
      <section className="copyright">

        <p>
          © 2026 Our Digital Skills Academy. All Rights Reserved.
        </p>

      </section>

    </div>
  )
}

export default ContactUsPage
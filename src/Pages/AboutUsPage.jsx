import React from 'react'
// import Navbar from "./Component/Navbar/Navbar";
import "./AboutUsPage.css";

const AboutPage = () => {
  return (
    <div className='About'>
      <section className="About-hero">
            <h1>About Us</h1>
            <p>Welcome to our platform, where learning, growth, and creativity come together. We are committed to creating 
              a space where students can learn, improve their skills, and confidently pursue their goals.
            </p>
           
      </section>

      <section className="About-content">
        <h2>Who We Are</h2>
        <p>We are a learning-focused platform designed to make education simple, engaging, and accessible. Our goal is to provide students 
          with useful resources, guidance, and an environment that encourages continuous learning.</p>

          <h2>Our Mission</h2>
          <p>Our mission is to help students discover their potential by providing quality 
            learning experiences, practical knowledge, and the support they need to grow academically and personally.
            </p>

            <h2>Our Vision</h2>
            <p>We envision a community where every learner has the opportunity to gain 
              knowledge, develop valuable skills, and build a brighter future.</p>

              <h2>Why Choose Us</h2>
              <p>We believe learning should be simple, practical, and enjoyable. That is why we focus on creating 
                helpful content, encouraging growth, and making every learning experience meaningful.</p>

               <h2>Join Us</h2> 
               <p>Whether you are just starting your learning journey or looking to 
                improve your existing skills, we are here to help you take the next step.</p>
                 <button>Get started</button>
 </section>

 <section className="contact-details">

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

export default AboutPage

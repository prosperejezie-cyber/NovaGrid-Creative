import React from 'react'
import "./OurServicesPage.css";

const OurServicesPage = () => {
  return (


    <div className="services">

      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          We provide creative and modern digital solutions
          designed to bring your ideas to life.
        </p>
      </section>

      <section className="services-content">

        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            We build responsive, modern, and functional websites
            that work smoothly on phones, tablets, and computers.
          </p>
        </div>

        <div className="service-card">
          <h2>UI/UX Design</h2>
          <p>
            We create clean and engaging designs that make websites
            easy to use and enjoyable to navigate.
          </p>
        </div>

        <div className="service-card">
          <h2>Website Redesign</h2>
          <p>
            We transform outdated websites into modern, attractive,
            and responsive digital experiences.
          </p>
        </div>

        <div className="service-card">
          <h2>Responsive Design</h2>
          <p>
            We make sure your website looks great and works properly
            on every screen size and device.
          </p>
        </div>

        <div className="service-card">
          <h2>Front-End Development</h2>
          <p>
            We turn creative designs into interactive and functional
            websites using modern web technologies.
          </p>
        </div>

        <div className="service-card">
          <h2>Website Maintenance</h2>
          <p>
            We help keep your website updated, functional,
            and running smoothly.
          </p>
        </div>

      </section>

      <section className="services-bottom">
        <h2>Have a Project in Mind?</h2>
        <p>Let's bring your idea to life.</p>
        <button>Get Started</button>
      </section>

    </div>
  )
}

export default OurServicesPage



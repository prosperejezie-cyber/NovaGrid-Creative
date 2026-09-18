import React from "react";

const App = () => {
  return (
    <div>
      {/* <!-- HEADER --> */}
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
      </section>
      {/* <!-- HERO SECTION --> */}
      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>welcome to my web page</h1>
            <p>
              we specialize on fullstack development, development, UI/UX,
              graphics design and thers
            </p>
            <button>Get started</button>
          </div>
        </div>
      </section>
      {/* <!-- ABOUT SECTION --> */}
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
            src="../../../../Pictures/Wallpapers/my wedding pictures/_DSC8541.jpg"
            alt="student learning"
          />
        </div>
      </section>
      {/* <!-- TESTIMONY SECTION --> */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback From Our Students</h2>
        <div className="Testimonial-container">
          <div className="card">
            <img src="../../../../Pictures/Wallpapers/my wedding pictures/_DSC8545.jpg" />
            <h3>Oluchi Iwueze</h3>
            <p>
              This Academy Complete Change my Career. so far i have gotten a
              great structure on it
            </p>
          </div>
          <div className="card">
            <img src="../../../../Pictures/Wallpapers/my wedding pictures/_DSC9191.jpg" />
            <h3>Iwu Clement</h3>
            <p>
              The academy stands to be stepping stone towards my dream in the
              world of fullstack-development
            </p>
          </div>
          <div className="card">
            <img src="../../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg" />
            <h3>Joseph Claret</h3>
            <p>
              This Academy Complete Change my Career. so far i have gotten a
              great structure on it
            </p>
          </div>
        </div>
      </section>

      {/* <!-- CALL TO ACTION SECTION --> */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready To Start Your Learning Journey?</h2>
          <p>
            Join Us today and start learning practical digital skills that can
            transform your future.
          </p>
          <a href="#" className="cta-button">
            {" "}
            Get Started
          </a>
        </div>
      </section>

      {/* <!-- FOOTER --> */}

      <footer className="footer">
        <div className="footer-container">
          {/* <!-- ABOUT --> */}

          <div className="footer-box">
            <h2>Our Digital Skills Academy</h2>

            <p>
              Empowering students with practical digital skills for a better
              future.
            </p>
          </div>

          {/* <!-- QUICK LINKS --> */}

          <div className="footer-box">
            <h3>Quick Links</h3>

            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Courses</a>

            <a href="#">Contact</a>
          </div>

          {/* <!-- CONTACT --> */}

          <div className="footer-box">
            <h3>Contact Us</h3>

            <p>Email: info@example.com</p>

            <p>Phone: +234 800 000 0000</p>

            <p>Owerri, Imo State</p>
          </div>
        </div>

        {/* <!-- COPYRIGHT --> */}

        <div className="copyright">
          <p>&copy; 2026 Our Digital Skills Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
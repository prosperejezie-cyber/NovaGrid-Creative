import React from 'react'
import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/Hero";
import About from "../Component/About/About";
import Testimony from "../Component/Testimony/Testimony"
import Call from "../Component/Call/Call"
import Footer from "../Component/Footer/Footer"



const LandingPage = () => {
  return (
    <div>
      <Navbar /> 
      <Hero />
      <About />
      <Testimony />
      <Call />
      <Footer />
    </div>
  )
}

export default LandingPage

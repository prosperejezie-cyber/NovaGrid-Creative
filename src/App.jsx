import React from "react";
// import card1 from '../../assets/hero.png'
// import card2 from './assets/user2.jpg'
// import card3 from './assets/user1.jpg'
// import card4 from './assets/newyork.png'
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Testimony from "./Component/Testimony/Testimony"
import Call from "./Component/Call/Call"
import Footer from "./Component/Footer/Footer"

const App = () => {
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

export default App;
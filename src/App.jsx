import LandingPage from "./Pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import ContactUsPage from "./Pages/ContactUsPage";
import AboutUsPage from "./Pages/AboutUsPage";
import OurServicesPage from "./Pages/OurServicesPage"
import LoginScreen from "./Pages/Login";
import Register from "./Pages/Register";


const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ContactUsPage" element={<ContactUsPage />} />
      <Route path="/AboutUsPage" element={<AboutUsPage />} />
      <Route path="/OurServicesPage" element={<OurServicesPage />} />
      <Route path="/Login" element={<LoginScreen />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
    </div>
  )
}

export default App;
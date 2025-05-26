import React from 'react'
import Navbar from '../components/Homepage/Navbar.jsx'
import HeroSection from "../components/Homepage/HeroSection.jsx"
import ServiceSection from '../components/Homepage/ServiceSection.jsx'
import Footer from '../components/Homepage/Footer.jsx'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <ServiceSection />
        <Footer />
    </div>
  )
}

export default Homepage;

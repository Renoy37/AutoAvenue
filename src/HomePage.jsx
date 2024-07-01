import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Body from "./Components/Body";
import CarLogos from "./Components/CarsLogos";
import CarPage from './Components/CarPage';
import { AboutUs } from './Components/AboutUs';
import { ContactUs } from './Components/ContactUs'
import { Footer } from './Components/Footer';

function HomePage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Body />
        <CarLogos />
        <CarPage />
        <AboutUs />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default HomePage
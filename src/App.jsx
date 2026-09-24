import React, { useEffect } from 'react';
import { captureUtm } from './utils/utm.js';
import Navbar from './components/Navbar.jsx';
import HeroCarousel from './components/HeroCarousel.jsx';
import TrustBar from './components/TrustBar.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Categories from './components/Categories.jsx';
import Experience from './components/Experience.jsx';
import StoreVisit from './components/StoreVisit.jsx';
import Location from './components/Location.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    captureUtm();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <TrustBar />
        <About />
        <Services />
        <Categories />
        <Experience />
        <StoreVisit />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
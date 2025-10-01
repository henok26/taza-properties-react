import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Properties from './components/Properties';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OpeningDoors from './components/OpeningDoors'; // Keep this for the intro

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // This prevents animations from firing on initial load before the user sees them
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);
  
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  if (isLoading) {
    return null; 
  }

  return (
    <div className="bg-gray-50">
      {!isAnimationDone && <OpeningDoors onAnimationComplete={() => setIsAnimationDone(true)} />}
      <div style={{ opacity: isAnimationDone ? 1 : 0, transition: 'opacity 0.5s' }}>
        <Navbar />
        <main>
          <Hero />
          <Properties />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
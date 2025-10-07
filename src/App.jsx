import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Properties from './components/Properties';
import Map from './components/Map';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners'; // Import the new component
import Contact from './components/Contact';
import Footer from './components/Footer';
import OpeningDoors from './components/OpeningDoors';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return null;

  return (
    <div className="bg-black">
      {!isAnimationDone && <OpeningDoors onAnimationComplete={() => setIsAnimationDone(true)} />}
      <div style={{ opacity: isAnimationDone ? 1 : 0, transition: 'opacity 0.5s' }}>
        <Navbar />
        <main>
          <Hero />
          <Properties />
          <About />
          <Testimonials />
          <Partners /> {/* Add the new section here */}
          <Map />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;


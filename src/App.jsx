import React, { useState, useEffect } from 'react';
import StaggeredMenu from './components/StaggeredMenu'; // The only navbar now
import Hero from './components/Hero';
import Properties from './components/Properties';
import WhyChooseUs from './components/WhyChooseUs';
import VideoShowcase from './components/VideoShowcase';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import Map from './components/Map';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OpeningDoors from './components/OpeningDoors';

const menuItems = [
  { label: 'Properties', link: '#properties' },
  { label: 'About', link: '#about' },
  { label: 'Testimonials', link: '#testimonials' },
  { label: 'Contact', link: '#contact' }
];

const socialItems = [
  { label: 'Facebook', link: '#' },
  { label: 'Twitter', link: '#' },
  { label: 'Instagram', link: '#' }
];

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
      <StaggeredMenu items={menuItems} socialItems={socialItems} />

      {!isAnimationDone && <OpeningDoors onAnimationComplete={() => setIsAnimationDone(true)} />}
      <div style={{ opacity: isAnimationDone ? 1 : 0, transition: 'opacity 0.5s' }}>
        <main>
          <Hero />
          <Properties />
          <WhyChooseUs />
          <VideoShowcase />
          <About />
          <Testimonials />
          <Partners />
          <FAQ />
          <Map />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
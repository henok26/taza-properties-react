import React from 'react';
import heroBg from '../assets/hero-bg.jpg';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

const Hero = () => {
  const textOffset = useParallax(0.02);
  const bgOffset = useParallax(0.01);

  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`, x: bgOffset.x, y: bgOffset.y, scale: 1.1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#42C2B3] to-[#A450A0] opacity-75"></div>
      <motion.div 
        className="relative text-center text-white p-4"
        style={{ x: textOffset.x, y: textOffset.y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Perfect Property in Addis Ababa</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">The perfect place to find your new beginning. Let us guide you home.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#properties" className="bg-gradient-to-r from-[#42C2B3] to-[#A450A0] text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">View Listings</a>
          <a href="#contact" className="bg-white text-[#42C2B3] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">Contact an Agent</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


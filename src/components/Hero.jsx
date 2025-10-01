import React from 'react';
import heroBg from '../assets/hero-bg.jpg';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

const Hero = () => {
  const textOffset = useParallax(0.02);
  const bgOffset = useParallax(0.01);

  return (
    <section id="home" className="relative h-[80vh] overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          x: bgOffset.x,
          y: bgOffset.y,
          scale: 1.1
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-[#ab1a96] opacity-75"></div>

      <motion.div
        className="relative z-10 text-center text-white p-4"
        style={{ x: textOffset.x, y: textOffset.y }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Find Your Perfect Property in Addis Ababa
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          The perfect place to find your new beginning. Let us guide you home.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          <a href="#properties" className="bg-gradient-to-r from-teal-500 to-brand-purple text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            View Listings
          </a>
          <a href="#contact" className="bg-white text-teal-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            Contact an Agent
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
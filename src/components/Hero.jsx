import React from 'react';
import heroBg from '../assets/hero-bg.jpg';
import { motion } from 'framer-motion';
import InteractiveButton from './InteractiveButton';

const Hero = () => {
  const headline = "Find Your Perfect Property in Addis Ababa";
  const words = headline.split(" ");

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.5,
      },
    },
  };

  const wordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  
  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        animate={{ scale: [1, 1.1, 1], transition: { duration: 40, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#42C2B3] to-[#A450A0] opacity-75"></div>
      <motion.div 
        className="relative text-center text-white p-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {words.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-3">
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          The perfect place to find your new beginning. Let us guide you home.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.7 }}
        >
          <InteractiveButton 
            href="#properties" 
            className="bg-gradient-to-r from-[#42C2B3] to-[#A450A0] text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 animate-pulse"
          >
            View Listings
          </InteractiveButton>
          <InteractiveButton 
            href="#contact" 
            className="bg-white text-[#42C2B3] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105"
          >
            Contact an Agent
          </InteractiveButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
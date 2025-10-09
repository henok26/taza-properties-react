import React, { useState } from 'react';
import logo from '../assets/taza-logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Taza Properties" className="h-10 w-auto" />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#properties" className="text-white hover:text-[#42C2B3]">Properties</a>
          <a href="#map-section" className="text-white hover:text-[#42C2B3]">Map</a>
          <a href="#about" className="text-white hover:text-[#42C2B3]">About Us</a>
          <a href="#testimonials" className="text-white hover:text-[#42C2B3]">Testimonials</a>
          <a href="#contact" className="text-white hover:text-[#42C2B3]">Contact</a>
        </div>
        <a href="#contact" className="hidden md:block bg-gradient-to-r from-[#42C2B3] to-[#A450A0] text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow duration-300">
          Get in Touch
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white z-[101] relative">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[99]"
            />
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-gray-900 shadow-lg p-8 z-[100]"
            >
              <nav className="flex flex-col space-y-8 mt-20 text-2xl font-semibold text-white">
                <a href="#properties" onClick={() => setIsOpen(false)}>Properties</a>
                <a href="#map-section" onClick={() => setIsOpen(false)}>Map</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
                <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
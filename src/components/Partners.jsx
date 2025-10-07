import React from 'react';
import { motion } from 'framer-motion';

// Import your partner logos
import partner1 from '../assets/partner-logo-1.png';
import partner2 from '../assets/partner-logo-2.png';
import partner3 from '../assets/partner-logo-3.png';
import partner4 from '../assets/partner-logo-4.png';
import partner5 from '../assets/partner-logo-5.png';

const logos = [partner1, partner2, partner3, partner4, partner5];
const allLogos = [...logos, ...logos]; // Duplicate logos for a seamless loop

const marqueeVariants = {
  animate: {
    x: [0, -1080], // Adjust this based on the total width of your logos
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20, // Adjust duration for speed
        ease: "linear",
      },
    },
  },
};

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Partners</h2>
        <div className="relative h-24 overflow-hidden">
          <motion.div
            className="absolute flex"
            variants={marqueeVariants}
            animate="animate"
          >
            {allLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 flex items-center justify-center mx-4">
                <img 
                  src={logo} 
                  alt={`Partner ${index + 1}`} 
                  className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;


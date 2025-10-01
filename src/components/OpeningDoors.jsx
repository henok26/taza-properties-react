import React from 'react';
import { motion } from 'framer-motion';

const doorVariant = {
  hidden: { height: '100vh' },
  visible: { 
    height: 0,
    transition: { duration: 1.5, ease: [0.87, 0, 0.13, 1] }
  }
};

const OpeningDoors = ({ onAnimationComplete }) => {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full bg-gray-900 z-[100]"
        initial="hidden"
        animate="visible"
        variants={doorVariant}
        onAnimationComplete={onAnimationComplete} // This will hide the doors after animation
      />
      <motion.div
        className="fixed bottom-0 left-0 w-full bg-gray-900 z-[100]"
        initial="hidden"
        animate="visible"
        variants={doorVariant}
      />
    </>
  );
};

export default OpeningDoors;

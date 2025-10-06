import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/hero-bg.jpg'; // Using hero image as a placeholder

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img src={aboutImage} alt="Our Team" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Taza Properties?</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              With over 20 years of experience, Taza Properties is dedicated to making your home buying and selling experience seamless. Our team of expert agents is committed to understanding your needs and finding the perfect property for you in Addis Ababa.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We believe that a home is more than just a place to live; it's where memories are made. Let us help you find the next chapter of your story.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


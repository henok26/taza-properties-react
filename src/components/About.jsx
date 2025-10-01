import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="[https://placehold.co/600x400/fed7d7/ffffff?text=Our+Team](https://placehold.co/600x400/fed7d7/ffffff?text=Our+Team)" alt="About Us" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Taza Properties?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over 20 years of experience, Taza Properties is dedicated to making your home buying and selling experience seamless. Our team of expert agents is committed to understanding your needs and finding the perfect property for you in Addis Ababa.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that a home is more than just a place to live; it's where memories are made. Let us help you find the next chapter of your story.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
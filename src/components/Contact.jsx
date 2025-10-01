import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-500 to-[#ab1a96] text-white">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-8">Contact us today to speak with one of our expert real estate agents.</p>
        <form className="max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#ab1a96]" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#ab1a96]" />
          </div>
          <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#ab1a96] mb-4"></textarea>
          <button type="submit" className="bg-white text-teal-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
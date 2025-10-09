import React from 'react';
import { motion } from 'framer-motion';
import InteractiveButton from './InteractiveButton'; // Assuming you have this component

const VideoShowcase = () => {
  return (
    <section id="video" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#42C2B3]/20 to-[#A450A0]/20 z-0"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Discover Your Dream Home in Motion
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Watch our exclusive video tours and get a vivid glimpse of the luxurious properties awaiting you.
        </motion.p>

        <motion.div 
          className="aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/MA_CAgq9y3s"
            title="YouTube video player - Taza Properties Showcase" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <InteractiveButton
            href="#properties"
            className="bg-gradient-to-r from-[#42C2B3] to-[#A450A0] text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow duration-300"
          >
            Explore All Properties
          </InteractiveButton>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;

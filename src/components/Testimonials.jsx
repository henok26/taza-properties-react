import React from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  { id: 1, quote: "The team at Taza Properties made finding our first home a breeze. Their professionalism and dedication were outstanding. Highly recommended!", author: "The Johnson Family" },
  { id: 2, quote: "Selling our house was so easy with their help. They handled everything, and we got a great price. We couldn't be happier.", author: "Sarah & Tom Williams" },
  { id: 3, quote: "As a first-time investor, I was nervous, but my agent guided me through every step. I'm now a proud owner of a great rental property.", author: "Michael Chen" },
  { id: 4, quote: "Our agent was incredibly patient and knowledgeable. They found us the perfect home within our budget. A fantastic experience from start to finish.", author: "The Davis Family" }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="flex overflow-x-auto space-x-8 pb-6">
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg w-[32rem] flex-shrink-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <p className="font-bold text-gray-800">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <svg className="w-12 h-12 mx-auto text-[#42C2B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Local Market Experts",
    description: "Our deep-rooted knowledge of the Addis Ababa market ensures you get the best properties at the best prices."
  },
  {
    icon: <svg className="w-12 h-12 mx-auto text-[#42C2B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "20+ Years of Experience",
    description: "With over two decades in the industry, we have a proven track record of success and client satisfaction."
  },
  {
    icon: <svg className="w-12 h-12 mx-auto text-[#42C2B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-4h1m-1 4h1m-1-4h1m-1-4h1" /></svg>,
    title: "Exclusive Listings",
    description: "Gain access to a curated portfolio of off-market and exclusive properties you won't find anywhere else."
  },
  {
    icon: <svg className="w-12 h-12 mx-auto text-[#42C2B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A10.99 10.99 0 003 12m9-7.646A10.99 10.99 0 0121 12m0 0h-3" /></svg>,
    title: "Personalized Service",
    description: "We tailor our approach to your unique needs, providing dedicated support from start to finish."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Taza Properties?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {feature.icon}
              <h3 className="text-2xl font-bold mt-6 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
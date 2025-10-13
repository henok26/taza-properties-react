import React from 'react';
import { motion } from 'framer-motion';
import InteractiveButton from './InteractiveButton';

const PropertyCard = ({ property, onCardClick, index }) => {
  return (
    <motion.div 
      className="relative h-[550px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10, boxShadow: "0px 0px 30px rgba(66, 194, 179, 0.4)" }}
    >
      <img className="w-full h-full object-cover" src={property.image} alt={property.title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"/>
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <h3 className="text-3xl font-bold mb-2">{property.title}</h3>
        <p className="text-gray-300 mb-4">{property.details}</p>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-[#42C2B3]">{property.price}</span>
          <motion.div
            className="w-1/2 transition-transform duration-300 transform translate-y-20 group-hover:translate-y-0"
          >
            <InteractiveButton
              onClick={() => onCardClick(property)}
              className="w-full bg-gradient-to-r from-[#42C2B3] to-[#A450A0] text-white py-3 rounded-full font-semibold"
            >
              View Details
            </InteractiveButton>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;


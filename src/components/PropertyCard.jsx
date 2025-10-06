import React from 'react';
import { motion } from 'framer-motion';

const PropertyCard = ({ property, onCardClick }) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-[50vw] md:w-[50vw] lg:w-[50rem] h-[750px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img className="w-full h-3/5 object-cover" src={property.image} alt={property.title} />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">{property.title}</h3>
        <p className="text-gray-400 mb-4">{property.details}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-[#42C2B3]">{property.price}</span>
          <button 
            onClick={() => onCardClick(property)}
            className="w-1/2 bg-gradient-to-r from-[#42C2B3] to-[#A450A0] text-white py-2 rounded-full hover:shadow-lg transition-shadow duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;


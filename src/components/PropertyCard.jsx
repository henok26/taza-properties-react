import React from 'react';
import { motion } from 'framer-motion';

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[40rem] bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.03, rotateY: 5, rotateX: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img className="w-full h-56 object-cover" src={property.image} alt={property.title} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-4">{property.details}</p>
        <p className="text-2xl font-bold text-teal-500 mb-4">{property.price}</p>
        <button className="w-full bg-gradient-to-r from-teal-500 to-[#ab1a96] text-white py-2 rounded-full hover:shadow-lg transition-shadow duration-300">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
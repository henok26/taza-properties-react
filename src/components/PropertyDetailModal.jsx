import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const PropertyDetailModal = ({ property, onClose }) => {

  const handleContactClick = () => {
    onClose();
    setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300); // Delay to allow modal to close
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100]"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-gray-900 text-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img src={property.image} alt={property.title} className="w-full h-96 object-cover"/>
          <button onClick={onClose} className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white">
            <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-2">{property.title}</h2>
          <p className="text-xl text-gray-400 mb-6">{property.details}</p>
          <p className="text-3xl font-bold text-[#42C2B3] mb-8">{property.price}</p>
          
          <h3 className="text-2xl font-bold mb-4">Location</h3>
          <div className="h-64 w-full rounded-lg overflow-hidden mb-8">
            <MapContainer center={property.position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={property.position}><Popup>{property.title}</Popup></Marker>
            </MapContainer>
          </div>

          <button 
            onClick={handleContactClick}
            className="w-full bg-gradient-to-r from-[#42C2B3] to-[#A450A0] text-white text-lg font-bold py-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            Contact Agent About This Property
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PropertyDetailModal;


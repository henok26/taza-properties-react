import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import PropertyDetailModal from './PropertyDetailModal';
import { motion, AnimatePresence } from 'framer-motion';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';

import luxuryApartment from '../assets/Luxury Apartment in Bole.png';
import spaciousVilla from '../assets/Spacious Villa in Old Airport.png';
import familyHome from '../assets/Family Home in CMC Area.png';
import modernFlat from '../assets/Modern Flat in Kazanchis.png';
import gatedHouse from '../assets/Gated Community House in Ayat.png';

const propertiesData = [
    { id: 1, title: 'Luxury Apartment in Bole', details: '3 Beds | 2 Baths | 1,800 sqft', price: '$450,000', image: luxuryApartment, position: [9.00, 38.79] },
    { id: 2, title: 'Spacious Villa in Old Airport', details: '5 Beds | 4 Baths | 3,500 sqft', price: '$850,000', image: spaciousVilla, position: [8.98, 38.75] },
    { id: 3, title: 'Family Home in CMC Area', details: '4 Beds | 3 Baths | 2,800 sqft', price: '$620,000', image: familyHome, position: [9.02, 38.83] },
    { id: 4, title: 'Modern Flat in Kazanchis', details: '2 Beds | 2 Baths | 1,500 sqft', price: '$380,000', image: modernFlat, position: [9.01, 38.76] },
    { id: 5, title: 'Gated Community House in Ayat', details: '4 Beds | 4 Baths | 3,000 sqft', price: '$550,000', image: gatedHouse, position: [9.03, 38.87] },
];

const Properties = () => {
  const { ref, x } = useHorizontalScroll();
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <>
      <section id="properties" ref={ref} className="relative h-[600vh] bg-black">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pt-28">
          <h2 className="text-5xl font-bold text-center text-white mb-12">Property list</h2>
          <motion.div style={{ x }} className="flex items-center space-x-8 px-8">
            {propertiesData.map(prop => (
              <PropertyCard key={prop.id} property={prop} onCardClick={setSelectedProperty} />
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProperty && (
          <PropertyDetailModal 
            property={selectedProperty} 
            onClose={() => setSelectedProperty(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Properties;


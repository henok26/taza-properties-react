import React from 'react';
import PropertyCard from './PropertyCard';
import { motion } from 'framer-motion';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';

const propertiesData = [
  { id: 1, title: 'Luxury Apartment in Bole', details: '3 Beds | 2 Baths | 1,800 sqft', price: '$450,000', image: '[https://placehold.co/600x400/d3d3d3/ffffff?text=Luxury+Apartment](https://placehold.co/600x400/d3d3d3/ffffff?text=Luxury+Apartment)' },
  { id: 2, title: 'Spacious Villa in Old Airport', details: '5 Beds | 4 Baths | 3,500 sqft', price: '$850,000', image: '[https://placehold.co/600x400/e2e8f0/ffffff?text=Villa](https://placehold.co/600x400/e2e8f0/ffffff?text=Villa)' },
  { id: 3, title: 'Family Home in CMC Area', details: '4 Beds | 3 Baths | 2,800 sqft', price: '$620,000', image: '[https://placehold.co/600x400/b2f5ea/ffffff?text=Family+Home](https://placehold.co/600x400/b2f5ea/ffffff?text=Family+Home)' },
  { id: 4, title: 'Modern Flat in Kazanchis', details: '2 Beds | 2 Baths | 1,500 sqft', price: '$380,000', image: '[https://placehold.co/600x400/a0aec0/ffffff?text=Modern+Flat](https://placehold.co/600x400/a0aec0/ffffff?text=Modern+Flat)' },
  { id: 5, title: 'Gated Community House in Ayat', details: '4 Beds | 4 Baths | 3,000 sqft', price: '$550,000', image: '[https://placehold.co/600x400/fbd38d/ffffff?text=Gated+House](https://placehold.co/600x400/fbd38d/ffffff?text=Gated+House)' }
];

const Properties = () => {
  const { ref, x } = useHorizontalScroll();

  return (
    <section id="properties" ref={ref} className="relative h-[300vh] bg-gray-50">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Properties
            </motion.h2>
            <motion.div style={{ x }} className="flex gap-8">
              {propertiesData.map(prop => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
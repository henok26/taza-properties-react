import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';

const properties = [
  { id: 1, name: "Luxury Apartment in Bole", position: [9.00, 38.79] },
  { id: 2, name: "Spacious Villa in Old Airport", position: [8.98, 38.75] },
  { id: 3, name: "Family Home in CMC Area", position: [9.02, 38.83] },
  { id: 4, name: "Modern Flat in Kazanchis", position: [9.01, 38.76] },
];

const Map = () => {
  const centerPosition = [9.01, 38.79];

  return (
    <section id="map-section" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Explore Properties on the Map
        </motion.h2>
        <motion.div 
          className="h-[500px] w-full rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MapContainer center={centerPosition} zoom={12} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="[https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright)">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {properties.map(prop => (
              <Marker key={prop.id} position={prop.position}>
                <Popup>{prop.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;


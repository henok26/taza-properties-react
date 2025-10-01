import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800">
          Taza Properties
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#properties" className="text-gray-600 hover:text-brand-purple">Properties</a>
          <a href="#about" className="text-gray-600 hover:text-brand-purple">About Us</a>
          <a href="#testimonials" className="text-gray-600 hover:text-brand-purple">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-brand-purple">Contact</a>
        </div>
        <a href="#contact" className="hidden md:block bg-gradient-to-r from-teal-500 to-[#ab1a96]  text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow duration-300">
          Get in Touch
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Taza Properties. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-[#42C2B3]">Facebook</a>
          <a href="#" className="hover:text-[#42C2B3]">Twitter</a>
          <a href="#" className="hover:text-[#42C2B3]">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


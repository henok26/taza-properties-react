import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Taza Properties. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-brand-purple">Facebook</a>
          <a href="#" className="hover:text-brand-purple">Twitter</a>
          <a href="#" className="hover:text-brand-purple">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
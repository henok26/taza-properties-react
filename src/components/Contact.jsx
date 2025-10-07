import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({ from__name: '', from_email: '', message: '' });

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    fetch(import.meta.env.VITE_GOOGLE_SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(formData)
    }).then(res => res.json()).then(data => {
      if (data.result === 'success') {
        setMessage('Message sent successfully!');
        setFormData({ from_name: '', from_email: '', message: '' });
      } else { throw new Error(data.message || 'Unknown error'); }
    }).catch((error) => {
      setMessage('Failed to send message. Please try again.');
      console.error('Error:', error);
    }).finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 5000);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#42C2B3] to-[#A450A0] text-white">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-8">Contact us today to speak with one of our expert real estate agents.</p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input type="text" name="from_name" placeholder="Your Name" required value={formData.from_name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-black bg-opacity-25 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white" />
            <input type="email" name="from_email" placeholder="Your Email" required value={formData.from_email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-black bg-opacity-25 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white" />
          </div>
          <textarea name="message" placeholder="Your Message" rows="4" required value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-black bg-opacity-25 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white mb-4"></textarea>
          <button type="submit" disabled={isSubmitting} className="bg-white text-[#42C2B3] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105 disabled:opacity-50">Send Message</button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </motion.div>
    </section>
  );
};

export default Contact;


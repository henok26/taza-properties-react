import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What are the steps to buying a home in Ethiopia?",
    answer: "The process typically involves finding a property, making an offer, signing a sales agreement, and then transferring the title. Our expert agents at Taza Properties will guide you through every step to ensure a smooth and secure transaction."
  },
  {
    question: "How do you determine a property's market value?",
    answer: "We determine market value by conducting a comparative market analysis (CMA), which involves evaluating recently sold, similar properties in the same area. We also consider current market trends, property condition, and unique features."
  },
  {
    question: "What fees are involved in a real estate transaction?",
    answer: "Common fees include agent commissions, legal fees for title transfer, and government taxes such as stamp duty. We provide a transparent breakdown of all potential costs upfront so there are no surprises."
  }
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700 py-6">
      <motion.div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-xl font-semibold">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: '16px' }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div>
          {faqData.map((item, index) => (
            <FAQItem 
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
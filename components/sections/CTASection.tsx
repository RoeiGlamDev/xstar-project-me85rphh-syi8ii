import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  onClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onClick }) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the Elegance of <span className="text-orange-500">luxury LRP cosmetics</span>
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Elevate your beauty routine with our premium line of cosmetics crafted for the discerning individual.
        </motion.p>
        <motion.div
          className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
          onClick={onClick}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Shop Now
        </motion.button>
        <motion.div
          className="mt-6 text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Experience luxury like never before with <strong>luxury LRP cosmetics</strong>.
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <motion.div
        className="absolute inset-0 bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 text-center p-8">
        <motion.div
          className="text-5xl font-bold text-orange-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          luxury LRP cosmetics
        </motion.h1>
        <motion.div
          className="mt-4 text-lg text-gray-800"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Discover the elegance of high-end cosmetics crafted for the sophisticated beauty connoisseur.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/shop"
            className="inline-block px-6 py-3 text-white bg-orange-600 rounded-full shadow-lg hover:bg-orange-500 transition duration-300"
          >
            Shop Now
          </a>
        </motion.div>
        <div className="mt-5 text-sm text-gray-600">
          <p>Trusted by beauty experts and enthusiasts alike.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
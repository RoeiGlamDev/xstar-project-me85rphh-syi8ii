import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  duration: 0.5,
};

const HeroSection: React.FC = () => (
  <motion.section
    className="bg-orange-500 text-white h-screen flex items-center justify-center"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <div className="text-center">
      <h1 className="text-6xl font-bold">luxury LRP cosmetics</h1>
      <p className="mt-4 text-xl">Elevate your beauty with our exquisite range of luxury cosmetics.</p>
      <button className="mt-8 px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105">
        Shop Now
      </button>
    </div>
  </motion.section>
);

const FeaturesSection: React.FC = () => (
  <motion.section
    className="bg-white text-orange-500 py-16"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center">Why Choose luxury LRP cosmetics?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold">High-Quality Ingredients</h3>
          <p className="mt-2">Our products are crafted with the finest ingredients for a luxurious experience.</p>
        </div>
        <div className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold">Elegant Packaging</h3>
          <p className="mt-2">Each product is designed with sophistication, making it perfect for gifting.</p>
        </div>
        <div className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold">Diverse Range</h3>
          <p className="mt-2">Explore our exquisite range of cosmetics tailored for every skin type.</p>
        </div>
      </div>
    </div>
  </motion.section>
);

const LuxuryLRPCosmetics: React.FC = () => (
  <div>
    <HeroSection />
    <FeaturesSection />
  </div>
);

export default LuxuryLRPCosmetics;
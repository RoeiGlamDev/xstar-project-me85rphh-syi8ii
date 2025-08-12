import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Premium Quality Ingredients',
    description: 'At luxury LRP cosmetics, we source only the finest ingredients, ensuring that every product meets the highest standards of luxury and effectiveness.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Exquisite Packaging',
    description: 'Our products are elegantly packaged, reflecting the sophistication and luxury synonymous with the luxury LRP cosmetics brand.',
    icon: <i className="fas fa-gift text-orange-500"></i>,
  },
  {
    title: 'Expert Formulations',
    description: 'Each product is crafted by our team of experts, blending science and beauty to create formulas that deliver stunning results.',
    icon: <i className="fas fa-flask text-orange-500"></i>,
  },
  {
    title: 'Luxurious Experience',
    description: 'Indulge in a shopping experience that mirrors the luxury of our products, with personalized service and exclusive offers.',
    icon: <i className="fas fa-star text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the Excellence of luxury LRP cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-500">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
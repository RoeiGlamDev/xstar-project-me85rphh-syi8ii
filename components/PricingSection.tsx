import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Signature Glow Treatment',
    price: '$150',
    features: ['Custom skincare analysis', 'Hydrating facial', 'Luxury product samples'],
  },
  {
    title: 'Radiant Luxe Package',
    price: '$250',
    features: ['Full makeup application', 'Premium skincare products', 'Personalized beauty consultation'],
  },
  {
    title: 'Ultimate Glam Experience',
    price: '$400',
    features: ['Bridal makeup services', 'Luxury skincare regimen', 'Post-treatment follow-up'],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Luxury LRP Cosmetics Pricing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                {tier.title}
              </h3>
              <p className="text-xl font-bold text-orange-700 mb-4">
                {tier.price}
              </p>
              <ul className="text-left mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 mb-2">
                    • {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-orange-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-orange-600"
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
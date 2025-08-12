import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const slideUpAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpAnimation}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold text-orange-500 mb-4">
        Welcome to Luxury LRP Cosmetics
      </h2>
      <p className="text-lg text-gray-700">
        Discover the elegance of beauty with our premium range of cosmetics designed for the discerning individual. At Luxury LRP Cosmetics, we believe that beauty is an experience, and our products are crafted to enhance your natural allure.
      </p>
      <div className="mt-6 flex space-x-4">
        <motion.div
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.button>
        <motion.div
          className="bg-white text-orange-500 border border-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Learn More
        </motion.button>
      </div>
      {children}
    </motion.div>
  );
};

export default SlideUp;
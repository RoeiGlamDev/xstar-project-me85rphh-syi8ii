import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 ease-in-out transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-orange-500 opacity-30 rounded-lg"></div>
      </div>
      <div className="p-6 bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border border-orange-500 rounded-lg">
        <h2 className="text-2xl font-bold text-orange-600 mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
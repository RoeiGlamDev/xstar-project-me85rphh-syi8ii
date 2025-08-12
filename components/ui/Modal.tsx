import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">
                Welcome to luxury LRP cosmetics
              </h2>
              <p className="text-gray-800 mb-4">
                Indulge in our exquisite range of luxury cosmetics, crafted for the discerning individual. Experience the allure of our high-end formulations that enhance your natural beauty.
              </p>
              <button
                className="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const buttonVariants = {
  primary: 'bg-orange-500 text-white hover:bg-orange-600',
  secondary: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-50',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, disabled }) => {
  return (
    <motion.div
      className={`font-bold py-2 px-4 rounded-lg transition-all duration-300 ${buttonVariants[variant]`} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={Button: ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;
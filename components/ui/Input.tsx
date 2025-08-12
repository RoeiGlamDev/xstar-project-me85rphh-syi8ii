import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, required }) => {const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleBlur = () => {
    if (required && !value) {
      setIsValid(false);}
  };

  return (
    <div className="mb-6">
      <label className="block text-white text-lg font-semibold mb-2">
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          handleBlur();
        }}
        className={w-full p-3 rounded-md border-2 transition-all duration-300 ${
          isFocused ? 'border-orange-500' : 'border-white'
        } ${!isValid && 'border-red-500'} bg-white text-gray-800 placeholder-gray-400}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-invalid={!isValid}
        aria-required={required}
      />
      {!isValid && <span className="text-red-500 text-sm">This field is required.</span>}
    </div>
  );
};

export default Input;
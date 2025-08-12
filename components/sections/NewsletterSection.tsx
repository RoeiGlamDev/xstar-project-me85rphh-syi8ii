import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You would typically handle the email submission here
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Join the luxury LRP cosmetics Family
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Sign up for exclusive updates, special offers, and the latest trends in luxury cosmetics.
        </motion.p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="border-2 border-orange-600 p-3 rounded-lg mb-4 w-80 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <motion.div
            type="submit"
            className="bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>
        {submitted && (
          <motion.div
            className="mt-4 text-green-600"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to luxury LRP cosmetics!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
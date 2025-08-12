import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="bg-white text-orange-600 min-h-screen flex flex-col items-center justify-center">
      <motion.div
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us at luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="bg-orange-100 p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="border border-orange-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="border border-orange-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            className="border border-orange-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            id="message"
            name="message"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-200 ease-in-out"
        >
          Send Message
        </button>
      </motion.form>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <p className="mb-2">123 Luxury Lane</p>
        <p className="mb-2">Glamour City, GL 12345</p>
        <h3 className="text-xl font-bold mt-6">Business Hours</h3>
        <p>Monday - Friday: 9 AM - 6 PM</p>
        <p>Saturday: 10 AM - 4 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;
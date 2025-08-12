import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
  contactReason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormProps>({
    name: '',
    email: '',
    message: '',
    contactReason: 'General Inquiry',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Handle form submission logic here
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '', contactReason: 'General Inquiry' });
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-orange-600 mb-6">Contact luxury LRP cosmetics</h2>
      <p className="text-gray-600 mb-4">We are here to assist you with your inquiries regarding our luxurious range of cosmetics.</p>
      
      {submitted && <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} className="mb-4 text-green-600">Thank you for your message! We will get back to you soon.</motion.div>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="contactReason" className="block text-sm font-medium text-gray-700">Reason for Contact</label>
          <select
            name="contactReason"
            id="contactReason"
            value={formData.contactReason}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Product Feedback">Product Feedback</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Wholesale Inquiries">Wholesale Inquiries</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={mt-1 block w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <motion.div
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-500 transition duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-orange-600">Business Information</h3>
        <p className="text-gray-600">Luxury LRP Cosmetics</p>
        <p className="text-gray-600">123 Luxury Ave, Suite 100</p>
        <p className="text-gray-600">Beautytown, CA 90210</p>
        <p className="text-gray-600">Hours: Mon-Fri 9am - 5pm</p>
        <p className="text-gray-600">Email: info@luxurylrpcosmetics.com</p>
      </div>
    </section>
  );
};

export default ContactSection;
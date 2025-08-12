import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  socialLinks: { name: string; url: string }[];
  navigationLinks: { name: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, socialLinks, navigationLinks }) => {
  return (
    <footer className="bg-white text-orange-600 py-8 px-4">
      <div className="container mx-auto flex flex-col items-center">
        <motion.div
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {companyName}
        </motion.h2>
        <nav className="mb-4">
          <ul className="flex space-x-4">
            {navigationLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <a href={link.url} className="text-orange-600 hover:text-orange-500">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="text-center mb-4">
          <p className="text-sm">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <p className="text-sm">
            Luxury cosmetics crafted with the finest ingredients to elevate your beauty routine.
          </p>
        </div>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <motion.div
              key={social.name}
              href={social.url}
              className="text-orange-600 hover:text-orange-500 transition duration-200"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {social.name}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    description: 'With over a decade of experience in the cosmetics industry, Sophia leads luxury LRP cosmetics with a vision for luxury and innovation.',
    imageUrl: '/images/sophia.jpg',
  },
  {
    name: 'James Lee',
    role: 'Chief Product Officer',
    description: 'A former lead formulator at a top cosmetics brand, James brings expertise in product development and luxury ingredients.',
    imageUrl: '/images/james.jpg',
  },
  {
    name: 'Ava Chen',
    role: 'Marketing Director',
    description: 'Ava specializes in luxury branding and has successfully launched several high-end cosmetics lines.',
    imageUrl: '/images/ava.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-orange-600 mb-6">About luxury LRP cosmetics</h2>
        <p className="text-lg text-gray-700 mb-4">
          At luxury LRP cosmetics, we believe that beauty is a reflection of self-love and confidence. Founded with the vision to redefine luxury in cosmetics, we craft products that not only elevate beauty but also empower individuals to express their unique selves.
        </p>
        <h3 className="text-2xl font-semibold text-orange-600 mb-2">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to create exquisite cosmetics that blend luxury with efficacy. We are dedicated to sourcing the finest ingredients and utilizing advanced formulations to provide our customers with unparalleled quality and sophistication.
        </p>
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={member.imageUrl} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold text-orange-600">{member.name}</h4>
                <p className="text-md text-gray-600">{member.role}</p>
                <p className="text-sm text-gray-500 mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
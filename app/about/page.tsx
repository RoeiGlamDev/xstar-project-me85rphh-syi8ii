import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Turner',
    position: 'Founder & CEO',
    bio: 'With over 15 years of experience in the cosmetics industry, Sophia leads luxury LRP cosmetics with a vision for excellence.',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    position: 'Head of Product Development',
    bio: 'Liam’s expertise in formulation ensures that all products are not only luxurious but also effective.',
    image: '/images/liam.jpg',
  },
  {
    name: 'Emma Smith',
    position: 'Marketing Director',
    bio: 'Emma creates captivating campaigns that reflect the elegance and luxury of our brand.',
    image: '/images/emma.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 min-h-screen flex flex-col items-center">
      <motion.header 
        className="py-10" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">About luxury LRP cosmetics</h1>
      </motion.header>
      <motion.section 
        className="max-w-4xl text-center px-4" 
        initial={{ y: 50 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-5">Our History</h2>
        <p className="text-lg mb-8">
          Founded in 2020, luxury LRP cosmetics was born from a passion for high-quality beauty products that enhance natural beauty. Our commitment to luxury and innovation has set us apart in the cosmetics industry.
        </p>
        <h2 className="text-3xl font-semibold mb-5">Our Values</h2>
        <p className="text-lg mb-8">
          At luxury LRP cosmetics, we believe in quality, sustainability, and inclusivity. We strive to create products that not only elevate beauty but also respect our planet.
        </p>
      </motion.section>
      <motion.section 
        className="w-full px-4 py-10 bg-orange-100" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-5">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-lg p-5 hover:scale-105 transition-transform duration-300">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <p className="mt-2 text-gray-800">{member.bio}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
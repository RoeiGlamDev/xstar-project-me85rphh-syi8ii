import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`transition-all duration-700 ${className`}}
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to luxury LRP cosmetics</h1>
      <FadeIn className="mb-6">
        <p className="text-lg">
          Discover the exquisite range of our luxury cosmetics designed for the distinguished individual.
        </p>
      </FadeIn>
      <FadeIn className="mb-6">
        <h2 className="text-2xl font-semibold">Our Luxurious Collection</h2>
        <p className="text-md">
          Indulge in our premium makeup products that elevate your beauty routine to an art form.
        </p>
      </FadeIn>
      <FadeIn className="mb-6">
        <h2 className="text-2xl font-semibold">Why Choose luxury LRP cosmetics?</h2>
        <p className="text-md">
          We use the finest ingredients, ensuring each product is not just cosmetics but a luxurious experience.
        </p>
      </FadeIn>
      <FadeIn className="mb-6">
        <h2 className="text-2xl font-semibold">Join Our Exclusive Community</h2>
        <p className="text-md">
          Sign up for our newsletter to receive the latest updates on our luxurious launches and special events.
        </p>
      </FadeIn>
      <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded shadow-lg hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300">
        Explore Our Collection
      </button>
    </div>
  );
};

export default LuxuryLRPCosmetics;